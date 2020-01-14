import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoResultComponent } from './no-result/no-result.component';
import { ResultsComponent } from './results/results.component';
import { HeroInfoComponent } from './hero-info/hero-info.component';


const routes: Routes = [
  {path: ':search' , component : ResultsComponent},
  {path: '' , component : NoResultComponent},
  {path: 'details' , component: HeroInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
