import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

    {
      path: '',
      redirectTo: 'detalle',
      pathMatch: 'full'
    },
    {
      path: 'login',
      loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
    },
    {
      path: 'home',

      children: [
        { path:"",
          loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  
        },
        {
          path: ":pickId",
          loadChildren: ()=> import('./home/detalle/detalle.module').then(m =>m.DetallePageModule)
  
        }],
    },

  {
    path: 'error',
    loadChildren: () => import('./error/error.module').then( m => m.ErrorPageModule)
  },
  {
    path: 'userlist',
    loadChildren: () => import('./userlist/userlist.module').then( m => m.UserlistPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
