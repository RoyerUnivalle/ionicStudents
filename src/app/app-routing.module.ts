import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'login', loadChildren: './views/login/login.module#LoginPageModule' },
  { path: 'perfil', loadChildren: './views/perfil/perfil.module#PerfilPageModule' },
  { path: 'detalle', loadChildren: './views/detalle/detalle.module#DetallePageModule' },
  { path: 'tarifarios', loadChildren: './views/tarifarios/tarifarios.module#TarifariosPageModule' },
  { path: 'tarifarios/:producto', loadChildren: './views/tarifarios/tarifarios.module#TarifariosPageModule' },
  { path: 'producto', loadChildren: './views/producto/producto.module#ProductoPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
