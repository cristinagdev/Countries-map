import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryViewComponent } from './components/country-view/country-view.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'/home'},
  {path:'home', component: HomeComponent},
  {path:'country/:code', component: CountryViewComponent},
  {path:'**', redirectTo:'/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
