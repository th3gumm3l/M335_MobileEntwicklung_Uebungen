import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {title:'Navigation', url:'/navigation', icon:'link'},
    {title:'Navigation-detail', url:'/navigation-detail', icon:'newspaper'},
    {title:'Zahlen', url:'/zahlen', icon:'calculator'},
    {title:'String', url:'/string', icon:'book'},
    {title:'Objekte', url:'/objekte', icon:'albums'},
    {title:'Array', url:'/array', icon:'file-tray-stacked'}
  ];
  public labels = ['example'];
  constructor() {}
}
