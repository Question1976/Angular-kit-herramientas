import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceso-restringido',
  templateUrl: './acceso-restringido.component.html',
  styleUrl: './acceso-restringido.component.css'
})
export class AccesoRestringidoComponent implements OnInit {
 
  nombre: string;

  constructor(
    private cookieService: CookieService,
    private router: Router
  ) {}
 
  ngOnInit(): void {
    this.nombre = this.cookieService.get('cesar_nombre');
  }

  /**
   * Cerrar sesión.
   */
  salir() {
    this.cookieService.deleteAll();
    Swal.fire({
      position: 'top-end',
      timer: 4000,
      icon: 'success',
      title: 'Ok',
      text: "Cerraste la sesión correctamente"
    });
    this.router.navigate(['/login'])
      .then(() => {
        window.location.reload();
      });
  }

}
