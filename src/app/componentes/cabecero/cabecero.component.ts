import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrl: './cabecero.component.css'
})
export class CabeceroComponent implements OnInit {

  booleano: boolean;
 
  constructor(private cookieService: CookieService) {}
 
  ngOnInit(): void {
    if (this.cookieService.check('cesar_login')) {
      this.booleano = true;
    } else {
      this.booleano = false;
    }
  }

}
