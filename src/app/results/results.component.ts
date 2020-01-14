import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpcallsService } from '../httpcalls.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private _http: HttpcallsService) { }

  searchData:any;
  loadingFlag=true;
  
  ngOnInit() {
    this.route.paramMap.subscribe(
      param=>{
        this.loadingFlag=true;
        this._http.getResultsByName(param.get('query')).subscribe(
          res=>{
            this.searchData=res;
            this.loadingFlag=false;
          }
        )
      }
    )
  }

}
