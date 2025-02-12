import { Component, OnInit } from '@angular/core';
import { CategoriasResponse } from '../../interfaces/categorias_response';
import { ApiRestService } from '../../servicios/api-rest.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-api-rest-categorias',
  templateUrl: './api-rest-categorias.component.html',
  styleUrl: './api-rest-categorias.component.css'
})
export class ApiRestCategoriasComponent implements OnInit {

  datos: Array<CategoriasResponse>;
  largo:any;
  
  constructor(private servicio: ApiRestService, private router: Router) {}
  
  ngOnInit(): void {
    this.hacerPeticion();
  }

  hacerPeticion() {
    this.servicio.getCategorias().subscribe(
      {
        next:data => {
          this.datos = data;
          this.largo = Object.keys(this.datos).length;
          //console.log(data);
        },
        error: error => {
          console.log('Error: ' + error);
        }
      }
    );
  }

  eliminar(id:any) {
    Swal.fire({
      title: '¿Realmente desea eliminar este registro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'NO',
      confirmButtonText: 'SI'
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicio.deleteCategorias(id).subscribe({
          next: data => {
            if (data.estado == 'ok') {
              Swal.fire({
                icon: 'success',
                timer: 4000,
                title: 'OK',
                text: "Se eliminó el registro correctamente"
              });
              
            } else {
              Swal.fire({
                icon: 'error',
                timer: 4000,
                title: 'Ups!',
                text: "No es posible eliminar el registro"
              });
            }
            this.router.navigate(['/api/categorias']).then(() => {
              window.location.reload();
            });
          },
          error: error => {
            console.error('Error', error);
          }
        });

      }
    });
  }

}
