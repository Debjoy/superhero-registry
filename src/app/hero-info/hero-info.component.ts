import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpcallsService } from '../httpcalls.service';

@Component({
  selector: 'app-hero-info',
  templateUrl: './hero-info.component.html',
  styleUrls: ['./hero-info.component.css']
})
export class HeroInfoComponent implements OnInit {

  constructor(private routeParam: ActivatedRoute, private _http: HttpcallsService) { }
  
  value:any={key:46}

  info:any;

  ngOnInit() {
    this.routeParam.paramMap.subscribe(
      param=>{
        this._http.getResultsById(param.get('id')).subscribe(
          res=>{
            this.info=res;
          }
        );
      }
    );
  }

}
