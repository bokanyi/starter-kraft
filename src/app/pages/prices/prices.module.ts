import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PricesPageRoutingModule } from './prices-routing.module';

import { PricesPage } from './prices.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PricesPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [PricesPage]
})
export class PricesPageModule {}
