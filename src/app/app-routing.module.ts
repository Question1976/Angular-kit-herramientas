import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './paginas/home/home.component';
import { FormulariosComponent } from './paginas/formularios/formularios.component';
import { ErrorComponent } from './paginas/error/error.component';
import { Formularios2Component } from './paginas/formularios2/formularios2.component';
import { GraficosComponent } from './paginas/graficos/graficos.component';
import { MapasComponent } from './paginas/mapas/mapas.component';
import { ApiRestComponent } from './paginas/api-rest/api-rest.component';
import { ApiRestCategoriasComponent } from './paginas/api-rest-categorias/api-rest-categorias.component';
import { ApiRestCategoriasAddComponent } from './paginas/api-rest-categorias-add/api-rest-categorias-add.component';
import { ApiRestCategoriasEditComponent } from './paginas/api-rest-categorias-edit/api-rest-categorias-edit.component';
import { ApiRestProductosComponent } from './paginas/api-rest-productos/api-rest-productos.component';
import { ApiRestProductosPorCategoriaComponent } from './paginas/api-rest-productos-por-categoria/api-rest-productos-por-categoria.component';
import { ApiRestProductosBuscadorComponent } from './paginas/api-rest-productos-buscador/api-rest-productos-buscador.component';
import { ApiRestProductosAddComponent } from './paginas/api-rest-productos-add/api-rest-productos-add.component';
import { ApiRestProductosEditComponent } from './paginas/api-rest-productos-edit/api-rest-productos-edit.component';
import { ApiRestProductosFotosComponent } from './paginas/api-rest-productos-fotos/api-rest-productos-fotos.component';
import { AccesoLoginComponent } from './paginas/acceso-login/acceso-login.component';
import { AccesoRegistroComponent } from './paginas/acceso-registro/acceso-registro.component';
import { AccesoRestringidoComponent } from './paginas/acceso-restringido/acceso-restringido.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "formularios", component: FormulariosComponent},
  {path: "formularios2", component: Formularios2Component},
  {path: "graficos", component: GraficosComponent},
  {path: "mapas", component: MapasComponent},
  {path: "api-rest", component: ApiRestComponent},
  {path: "api/categorias", component: ApiRestCategoriasComponent},
  {path: "api/categorias/add", component: ApiRestCategoriasAddComponent},
  {path: "api/categorias/edit/:id", component: ApiRestCategoriasEditComponent},
  {path: "api/productos", component: ApiRestProductosComponent},
  {path: "api/productos-categoria/:slug", component: ApiRestProductosPorCategoriaComponent},
  {path: "api/productos-buscar", component: ApiRestProductosBuscadorComponent},
  {path: "api/productos/add", component: ApiRestProductosAddComponent},
  {path: "api/productos/editar/:id", component: ApiRestProductosEditComponent},
  {path: "api/productos/fotos/:id", component: ApiRestProductosFotosComponent},
  {path: "login", component: AccesoLoginComponent},
  {path: "registro", component: AccesoRegistroComponent},
  {path: "restringido", canActivate: [AuthGuard] ,component: AccesoRestringidoComponent},
  {path: "**", component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
