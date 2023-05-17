import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from 'src/app/components/menu/menu.component';

import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

// const routes: Routes = [
//   {
//     path: '',
//     loadChildren: () => import('../../pages/home/home.module').then( m => m.HomePageModule)
//   },
//   {
//     path: '',
//     redirectTo: 'home',
//     pathMatch: 'full'
//   },
//   {
//     path: 'about',
//     loadChildren: () => import('../../pages/about/about.module').then( m => m.AboutPageModule)
//   },
//   {
//     path: 'services',
//     loadChildren: () => import('../../pages/services/services.module').then( m => m.ServicesPageModule)
//   }
// ];

@NgModule({
  // declarations: [MenuComponent],
  imports: [
    CommonModule,
    // BrowserModule, 
    IonicModule, 
    // RouterModule.forChild(routes)
  ],
  // providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  // exports: [MenuComponent]
})
export class SharedComponentModule { }
