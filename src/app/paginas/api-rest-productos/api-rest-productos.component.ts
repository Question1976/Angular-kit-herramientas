import { Component, OnInit } from '@angular/core';
import { ApiRestService } from '../../servicios/api-rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosResponse } from '../../interfaces/productos_response';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-api-rest-productos',
  templateUrl: './api-rest-productos.component.html',
  styleUrl: './api-rest-productos.component.css'
})
export class ApiRestProductosComponent implements OnInit {

  datos: Array<ProductosResponse>;
  total: any;
  por_pagina: any;
  page = 1;
  links: number;
  paginas: Array<any> = [];
  formulario_buscar: any;
 
  constructor(
    private servicio: ApiRestService, 
    private route: ActivatedRoute,
    private router: Router
  ) {}
 
  ngOnInit(): void {
    let params: any = this.route.snapshot.queryParams;
    this.page = parseInt( (params.page) ? params.page : 1);
    this.hacerPeticion(this.page);
    this.formulario_buscar = 
    {
      search: ""
    };
  }

  hacerPeticion(pagina: any) {
    this.servicio.getProductos(pagina).subscribe(
      {
        next: data => 
        {
          this.datos = data.datos
          this.total = data.total
          this.por_pagina = data.por_pagina
          this.links = data.links
          for (let i = 1; i <= this.links; i++) {
            this.paginas[i] = i;
          }
        },
        error: error => 
        {
          console.error('Error: ' + error);
        }
      });
  }

  buscar() {
    if (this.formulario_buscar.search == 0) {
      Swal.fire({
        icon: 'error',
        timer: 4000,
        title: 'Ups!',
        text: "Debe indicar algún término de búsqueda"
      });
    } else {
      this.router.navigate(['/api/productos-buscar'], {queryParams: {search: this.formulario_buscar.search}}).then(() => {
        // window.location.reload();
      });
    }
  }

  eliminar(id: any) {
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
        this.servicio.deleteProductos(id).subscribe({
          next: data => {
            if (data.estado == 'ok') {
              Swal.fire({
                icon: 'success',
                timer: 5000,
                title: 'OK',
                text: "Se eliminó el registro correctamente"
              });
              this.router.navigate(['/api/productos']).then(() => {
                window.location.reload();
              });
            } else {
              Swal.fire({
                icon: 'error',
                timer: 4000,
                title: 'Ups!',
                text: "No es posible eliminar el registro"
              });
            }
          },
          error: error => {
            console.error('Error', error);
          }
        });
      }
    });
  }

}
