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
    redirectTo: 'mylist',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'bmip1',
    loadChildren: () => import('./bmip/bmip1/bmip1.module').then( m => m.Bmip1PageModule)
  },
  {
    path: 'bmip2/:sendStdobj',
    loadChildren: () => import('./bmip/bmip2/bmip2.module').then( m => m.Bmip2PageModule)
  },
  {
    path: 'mylist',
    loadChildren: () => import('./aseans/mylist/mylist.module').then( m => m.MylistPageModule)
  },
  {
    path: 'asean/:sendAsean',
    loadChildren: () => import('./aseans/asean/asean.module').then( m => m.AseanPageModule)
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
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'p1-input',
    loadChildren: () => import('./QuizTest/p1-input/p1-input.module').then( m => m.P1InputPageModule)
  },
  {
    path: 'p2-edit/:sendlist',
    loadChildren: () => import('./QuizTest/p2-edit/p2-edit.module').then( m => m.P2EditPageModule)
  },

 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
