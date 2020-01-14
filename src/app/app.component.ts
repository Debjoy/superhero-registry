import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpcallsService } from './httpcalls.service';
import { Router } from '@angular/router';

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

  constructor(private service:HttpcallsService, private router:Router){}

  onSearch(){
    this.router.navigate(['search',this.formGrp.value.search_query]);
  }

  ontype(frm: FormControl){
    this.service.getResultsByName(frm.value.search_query).subscribe(res=>{console.log(res)});
  }
}
