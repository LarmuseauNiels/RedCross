import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {Map,tileLayer,marker} from 'leaflet';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {NativeGeocoder,NativeGeocoderOptions} from "@ionic-native/native-geocoder/ngx";
import { FormStoreService } from 'src/app/services/formStore.service';
import { FormResult } from 'src/app/services/formResult.model';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

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
