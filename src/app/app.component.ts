import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpcallsService } from './httpcalls.service';

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

  constructor(private service:HttpcallsService){}

  onSearch(frm: FormControl){
    this.service.getResultsByName(frm.value.search_query).subscribe(res=>{console.log(res)});
    
  }
}
