import { Component } from '@angular/core';
import { Macchine } from './macchine/macchine.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '01_Angular_empty';
  macchine:Macchine[];
  constructor(){
    this.macchine =
    [
      {
          "id": 1,
          "modello": "127",
          "marca": "Fiat",
          "prezzo": 1300,
          "velocitamax": 110
  
      },
  
      {
          "id": 2,
          "modello": "Giulietta",
          "marca": "Alfa Romeo",
          "prezzo": 4000,
          "velocitamax": 180
      },
      {
          "id": 3,
          "modello": "Fiesta",
          "marca": "Ford",
          "prezzo": 1600,
          "velocitamax": 130
  
      },
      {
          "id": 4,
          "modello": "Baracca",
          "marca": "Subaru",
          "prezzo": 5500,
          "velocitamax": 170
  
      }
  ]
  }
  stampArray() {
    this.macchine.sort((a, b) => b.velocitamax - a.velocitamax);
  }

  stampArraylento(){
    this.macchine.sort((a,b) => a.velocitamax - b.velocitamax )
  }
  sortedMacchine(): Macchine[] {
    return this.macchine.sort((a: Macchine, b: Macchine) => b.velocitamax);
 
}
}
