import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpcallsService } from '../httpcalls.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-info',
  templateUrl: './hero-info.component.html',
  styleUrls: ['./hero-info.component.css']
})
export class HeroInfoComponent implements OnInit {

  constructor(private routeParam: ActivatedRoute, private _http: HttpcallsService, private location:Location) { }
  
  loadingFlag=true;

  info:any;

  ngOnInit() {
    this.routeParam.paramMap.subscribe(
      param=>{
        this.loadingFlag=true;
        this._http.getResultsById(param.get('id')).subscribe(
          res=>{
             this.info=res;
             this.loadingFlag=false;
          }
        );
      }
    );
  }

  goback(){
    this.location.back();
  }
}
