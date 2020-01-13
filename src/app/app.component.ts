import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  formGrp = new FormGroup({
    search_query:new FormControl('')
  });
  onSearch(frm: FormControl){
    console.log(frm.value.search_query);
  }
}
