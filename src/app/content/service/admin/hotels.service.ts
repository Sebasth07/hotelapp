import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { country, state, city } from "src/app/content/models/admin/hotels.model"
@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  private baseUrl: string;
  private endpointCountry:string;
  private endpointCity:string;
  
  constructor(private httpClient: HttpClient) { 
    this.baseUrl = 'http://13.50.47.16/api';
    this.endpointCountry = '/paisListar';
    this.endpointCity = '/departamentoPaisListar';
  }

  getCountries(per_page) {
    const parametros = { 
      id: '',
      nombre: '',
      estado: '',
      abreviatura: '',
      codigo_telefono: '',
      codigo_dian: '',
    };
    return this.httpClient.post<any>(`${this.baseUrl+this.endpointCountry}?per_page=${per_page}`, parametros);
   }
   
   getCities(countryId: any){
    const url = `${this.baseUrl+this.endpointCity}`;
    return this.httpClient.request('POST', url, countryId);
   }

}
 