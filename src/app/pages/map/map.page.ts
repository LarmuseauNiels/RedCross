import { AfterContentInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
declare var google;

@Component({
  selector: 'rc-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit, AfterContentInit {
  latitude: any;
  longitude: any;
  map;
  @ViewChild('mapElement', {static: true}) mapNativeElement: ElementRef;

  constructor(public router: Router, private geolocation: Geolocation) { }

  ngOnInit() {
  }


  ngAfterContentInit() : void {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude,
      this.longitude = resp.coords.longitude
      const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
        center: {lat: 0,  lng: 0},
        zoom: 15
      });
      const infoWindow = new google.maps.InfoWindow;
      const pos = {
        lat: this.latitude,
        lng: this.longitude
      }
      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found');
      infoWindow.open(map);
      map.setCenter(pos);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  prev(){
    this.router.navigate(['/page1']);
  }

  next(){
    this.router.navigate(['/page3']);
  }

}
