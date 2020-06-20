import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CustomGeocodeService{
  constructor(private readonly http: HttpClient) {

  }
  getGeoLocation(query, CountryCode ) {// :Promise<JSON>
    const url = `https://nominatim.openstreetmap.org/search?format=json&addressdetails=0&extratags=0&limit=1&q=${query}&countrycodes=${CountryCode}`;
    let resp = this.http.get(url);
    console.log(resp);
  }
}