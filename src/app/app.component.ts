import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpcallsService } from './httpcalls.service';
import { Router } from '@angular/router';
import { ThemeService } from './theme.service';
import { CookieService } from 'ngx-cookie-service';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/internal/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  formGrp = new FormGroup({
    search_query:new FormControl('')
  });
  results:any;
  colored=false;

  constructor(private service:HttpcallsService, private router:Router, private theme:ThemeService, private cookie: CookieService){}

  ngOnInit(){
    this.formGrp.controls.search_query.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged()).subscribe(res=>{
        this.onSearch();
      });

    if(!this.cookie.check("theme")){
      this.cookie.set("theme","1");
    }else{
      if(this.cookie.get("theme")=="1"){
        this.setDark();
      }else{
        this.setLight();
      }
    }
    if(!this.cookie.check("color")){
      this.cookie.set("color","1");
    }else{
      if(this.cookie.get("color")=="1"){
        this.setFiltered();
      }else{
        this.setColored();
      }
    }
  }
  
  onSearch(){
    this.router.navigate(['search',this.formGrp.value.search_query.trim()]);
  }

  ontype(frm: FormControl){
    this.service.getResultsByName(frm.value.search_query).subscribe(res=>{console.log(res)});
  }

  setDark(){
    this.theme.setDarkTheme();
    this.cookie.set("theme","1");
  }
  setLight(){
    this.theme.setLightTheme();
    this.cookie.set("theme","0");
  }
  setColored(){
    this.theme.setColored();
    this.colored=true;
    this.cookie.set("color","0");
  }
  setFiltered(){
    this.theme.setFiltered();
    this.colored=false;
    this.cookie.set("color","1");
  }
}
