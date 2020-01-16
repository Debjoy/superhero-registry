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
    return this._http.get("http://localhost:8080/api/search.php?q="+name)
    //return this._http.get(this._api_rooturl+this._token+'/search/'+name);
  }

  getResultsById(_id: string){
    return this._http.get("http://localhost:8080/api/details.php?spid="+_id)
    //return this._http.get(this._api_rooturl+this._token+'/'+_id);
    //return this._http.get('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/346.json');
  }
}
