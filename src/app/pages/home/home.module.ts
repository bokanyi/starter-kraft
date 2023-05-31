import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SwiperComponent } from 'src/app/components/swiper/swiper.component';
import { ComponentsModule } from 'src/app/components/components.module';
// import { SharedComponentModule } from 'src/app/modules/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ComponentsModule,
    // SharedComponentModule,
  ],
  declarations: [
    HomePage,
    // MenuComponent,
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule {

}
