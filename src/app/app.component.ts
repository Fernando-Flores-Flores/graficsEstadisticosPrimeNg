import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'grafica';

  constructor(private router:Router) {

  }


  cambiar(layout:string){
    this.router.navigate([layout]);
  }
}
