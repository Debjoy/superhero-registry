import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpcallsService {

  constructor(private _http: HttpClient) { }
  private _api_rooturl:string = 'https://superheroapi.com/api/';
  private _token:string = '1560622110780537';
  
  getResultsByName(name: string){
    return this._http.get(this._api_rooturl+this._token+'/search/'+name);
  }
}
