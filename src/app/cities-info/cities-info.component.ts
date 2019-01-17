import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { log } from 'util';
import { WeatherData } from '../../models/WeatherData';

@Component({
  selector: 'app-cities-info',
  templateUrl: './cities-info.component.html',
  styleUrls: ['./cities-info.component.css']
})
export class CitiesInfoComponent implements OnInit {

  searchstring:string = 'Baku'
  apiurl: string = 'https://api.openweathermap.org/data/2.5/forecast?';
  apikey: string = 'a15dcc8fad98d50042baa1d941285f7f';
  data: WeatherData;
  constructor(
    private http: HttpClient
  ) {
   }

  async ngOnInit() {
    let options = {
      params: {
        q: this.searchstring,
        appid: this.apikey
      }
    }

    this.data = await this.http.get<WeatherData>(this.apiurl, options).toPromise();
      console.log(this.data);
  }

}
