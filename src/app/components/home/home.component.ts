import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arrCountries: any[]=[];

  constructor(
    private countriesService: CountriesService

  ) { }

  async ngOnInit(): Promise<void> {
    this.arrCountries= await this.countriesService.getAll();
    
  }

}
