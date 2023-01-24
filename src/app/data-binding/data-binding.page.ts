import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.page.html',
  styleUrls: ['./data-binding.page.scss'],

})
export class DataBindingPage implements OnInit {
  userData: any = {'Vorname': 'Tim', 'Nachname': 'Bernhard', 'Alter': '19'};
  constructor() { }

  ngOnInit() {
  }

}
