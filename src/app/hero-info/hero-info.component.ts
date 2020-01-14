import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-info',
  templateUrl: './hero-info.component.html',
  styleUrls: ['./hero-info.component.css']
})
export class HeroInfoComponent implements OnInit {

  constructor(private routeParam: ActivatedRoute) { }

  ngOnInit() {
    this.routeParam.paramMap.subscribe(
      param=>{
        console.log(param);
      }
    );
  }

}
