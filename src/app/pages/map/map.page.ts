import { /*AfterContentInit*/ Component, OnInit, ViewChild, ElementRef, NgZone, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions} from '@ionic-native/native-geocoder/ngx';

declare var google;

@Component({
  selector: 'rc-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})

export class MapPage implements OnInit /*AfterContentInit*/ {
  @ViewChild('mapElement', {static: false}) mapElement: ElementRef;
  map: any;
  address: string;
  lattitude: string;
  longitude: string;
  autocomplete: { input: string; };
  autocompleteItems: any[];
  location: any;
  placeid: any;
  GoogleAutocomplete: any;

  constructor(
    public router: Router, 
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    public zone: NgZone) {
      this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
      this.autocomplete = { input: '' };
      this.autocompleteItems = [];
    }


  ngOnInit() {
    this.loadMap();
  }


  loadMap() {
    //Get location from device
    this.geolocation.getCurrentPosition().then((resp) => {
      let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      //Load map with previous values as parameters
      this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.map.addListener('tilesloaded', () => {
        this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng())
        this.lattitude = this.map.center.lat()
        this.longitude = this.map.center.lng()
      });
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  getAddressFromCoords(lattitude, longitude) {
    
    //Place marker
    const marker = new google.maps.Marker({
      position: {lat: lattitude, lng: longitude},
      map: this.map,
      title: 'First Aid location'
    });

    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5    
    };

    this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
      .then((result: NativeGeocoderResult[]) => {
        this.address = "";
        let responseAddress = [];
        for (let [key, value] of Object.entries(result[0])) {
          if(value.length>0)
          responseAddress.push(value); 
        }
        responseAddress.reverse();
        for (let value of responseAddress) {
          this.address += value+", ";
        }
        this.address = this.address.slice(0, -2);
      })
      .catch((error: any) =>{ 
        this.address = "Address Not Available!";
      }); 
  }

  UpdateSearchResults(){
    if(this.autocomplete.input == '') {
      this.autocompleteItems = [];
      return;
    }

    this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input },
      (predictions, status) => {
        this.autocompleteItems = [];
        this.zone.run(() => {
          predictions.forEach((prediction) => {
            this.autocompleteItems.push(prediction);
          });
        });
      });
    }

  SelectSearchResult(item) {
    console.log(item);

    //Hier zou ik moeten zien wat er in item ziet om zo de pin naar daar te verplaatsen...
  }

  ClearAutocomplete(){
    this.autocompleteItems = []
    this.autocomplete.input = ''
  }


  
  prev(){
    this.router.navigate(['/page1']);
  }

  next(){
    this.router.navigate(['/page3']);
  }

}
