import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  baseUrl : string = "https://5000-elshahatkha-khaledcurri-v0sjvqj2gh2.ws-eu46.gitpod.io/markers"
  constructor(private http: HttpClient) { 
    
  }
  

   makeCapitalMarkers(map: L.Map): void {
    this.http.get(this.baseUrl).subscribe((res: any) => {
      for (const c of res) {
        console.log(c.Coordinates.lat)
        const lon = c.Coordinates.lng;
        const lat = c.Coordinates.lat;
        const name = c.Coordinates.name;
        const marker = L.marker([lat, lon]);

        marker.addTo(map).bindPopup("Stazione: " + name);
        
      }
    })
   }
}