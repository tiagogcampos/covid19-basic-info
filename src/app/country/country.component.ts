import { Country } from './../../interfaces/Country';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  constructor() {}

  @Input() country: Country;

  ngOnInit(): void {}
}
