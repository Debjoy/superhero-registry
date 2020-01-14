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
  ngOnInit() {
    this.route.paramMap.subscribe(
      param=>{
        this._http.getResultsByName(param.get('search')).subscribe(
          res=>{
            this.searchData=res;
          }
        )
      }
    )
  }

}
