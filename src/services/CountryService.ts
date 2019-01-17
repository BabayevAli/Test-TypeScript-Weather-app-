import { Injectable } from '@angular/core';
import { Country } from '../models/Country'
@Injectable({
  providedIn: 'root'
})
export class CountryService{
    count_list: Country[];

    constructor(){}

    create(country:Country){
        this.count_list.push(country);
    }

    remove(country_id:number){
        delete this.count_list[country_id];
    }

    update(country:Country){
        this.count_list[country.id] = country;
    }

    read(): Country[]{
        return this.count_list;
    }
    
}