import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { SwiperComponent } from "./swiper/swiper.component";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PricesComponent } from "./prices/prices.component";


@NgModule({
    imports:[IonicModule, CommonModule,],
    declarations:[CardComponent, SwiperComponent, PricesComponent],
    exports:[CardComponent, SwiperComponent, PricesComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class ComponentsModule{}