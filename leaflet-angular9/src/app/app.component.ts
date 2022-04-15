import { Component } from '@angular/core';
declare var arrondissements: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'leaflet-angular9';
  callfun(){
    arrondissements();
  }

}
