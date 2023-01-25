import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {title:'Home', url:'/', icon:'accessibility'},
    {title:'Navigation', url:'/navigation', icon:'compass'},
    {title:'Navigation-detail', url:'/navigation-detail', icon:'newspaper'},
    {title:'Zahlen', url:'/zahlen', icon:'keypad'},
    {title:'String', url:'/string', icon:'book'},
    {title:'Objekte', url:'/objekte', icon:'albums'},
    {title:'Array', url:'/array', icon:'file-tray-stacked'},
    {title:'Data-Binding', url:'/data-binding', icon:'link'},
    {title:'Rechner', url:'/rechner', icon:'calculator'},
    {title:'Filters', url:'/filters', icon:'filter'},
    {title:'Alerts', url:'/alerts', icon:'alert'},
    {title:'Newsletter', url:'/newsletter', icon:'newspaper'}
  ];
  public labels = ['example'];
  constructor() {}
}
