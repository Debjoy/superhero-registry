import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpcallsService } from '../httpcalls.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private _http: HttpcallsService, private router:Router) { }

  searchData:any;
  loadingFlag=true;
  
  ngOnInit() {
    this.route.paramMap.subscribe(
      param=>{
        this.loadingFlag=true;
        if(param.get('query').length==0){
          this.router.navigate(['/']);
          return null;
        }
        this._http.getResultsByName(param.get('query')).subscribe(
          res=>{
            this.searchData=res;
            this.loadingFlag=false;
          }
        )
      }
    )
  }

  testing(obj){
    console.log(obj.path[0]);
  }

}
