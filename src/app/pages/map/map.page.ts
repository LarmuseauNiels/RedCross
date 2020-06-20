import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {Map,tileLayer,marker} from 'leaflet';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { FormStoreService } from 'src/app/services/formStore.service';
import { FormResult } from 'src/app/services/formResult.model';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'rc-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})

export class MapPage implements OnInit  {
  map:Map;
  newMarker:any;
  address:string[];
  position:object;


  public formResult: FormResult;

  constructor(
    private geoLocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    private http: HttpClient,
    public router: Router,
    public formStore: FormStoreService) {
      formStore.formResult.subscribe((result) => {this.formResult = result; });
    }


  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    this.geoLocation.getCurrentPosition()
    .then((resp) => {
      this.map = new Map('mapId').setView([resp.coords.latitude, resp.coords.longitude], 15);

      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);

      this.newMarker = marker([resp.coords.latitude, resp.coords.longitude], {
        draggable: true
      }).addTo(this.map);
      this.position = this.newMarker.getLatLng();

      this.newMarker.on("dragend", () => {
        this.position = this.newMarker.getLatLng();
       });
    })
  }

  onSearch(event: any) { // without type info
    const url = `https://nominatim.openstreetmap.org/search?format=json&addressdetails=0&extratags=0&limit=1&q=${event.target.value}`;//countrycode=BE
    let resp = this.http.get(url);
    resp.subscribe((result) => {
      this.newMarker.setLatLng([result[0]['lat'], result[0]['lon']])
      this.position = this.newMarker.getLatLng();
      this.map.setView([result[0]['lat'], result[0]['lon']], 15)
    })
  }

  prev(){
    this.router.navigate(['/page1']);
  }

  next(){
    this.formResult.latitude = this.position["lat"];
    this.formResult.longitude = this.position["lng"];
    this.formStore.setFormResult(this.formResult);
    this.router.navigate(['/page3']);
  }
}
