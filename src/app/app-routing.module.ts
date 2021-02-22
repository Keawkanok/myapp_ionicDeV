import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    // redirectTo: 'home',
    redirectTo: 'firebase',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'bmip1',
    loadChildren: () => import('./bmip1/bmip1.module').then( m => m.Bmip1PageModule)
  },
  {
    path: 'bmip2/:sendStdobj',
    loadChildren: () => import('./bmip2/bmip2.module').then( m => m.Bmip2PageModule)
  },
  {
    path: 'mylist',
    loadChildren: () => import('./mylist/mylist.module').then( m => m.MylistPageModule)
  },
  {
    path: 'asean/:sendAsean',
    loadChildren: () => import('./asean/asean.module').then( m => m.AseanPageModule)
  },
  {
    path: 'buy/:sendBuy',
    loadChildren: () => import('./buy/buy.module').then( m => m.BuyPageModule)
  },
  {
    path: 'listbuy',
    loadChildren: () => import('./listbuy/listbuy.module').then( m => m.ListbuyPageModule)
  },
  {
    path: 'slideopp',
    loadChildren: () => import('./slideopp/slideopp.module').then( m => m.SlideoppPageModule)
  },
  {
    path: 'firebase',
    loadChildren: () => import('./learnfirebase/firebase.module').then( m => m.FirebasePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
