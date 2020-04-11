import { Country } from '../../interfaces/Country';
import { CountryService } from './../country.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  constructor(private countryService: CountryService) {}

  countries: Country[] = [];
  filteredCountries: Country[] = [];

  ngOnInit(): void {
    this.countryService.getCountries().subscribe((countriesResponse) => {
      const oldThis = this;
      countriesResponse.map((country) => {
        const newCountry: Country = {
          id: country.countryInfo._id,
          name: country.country,
          cases: country.cases,
          todayCases: country.todayCases,
          deaths: country.deaths,
          todayDeaths: country.todayCases,
          recovered: country.recovered,
          active: country.active,
          critical: country.critical,
          tests: country.tests,
          flag: country.countryInfo.flag,
        };
        oldThis.countries.push(newCountry);
      });
      this.filteredCountries = this.countries;
      console.log(this.filteredCountries);
    });
  }
}
