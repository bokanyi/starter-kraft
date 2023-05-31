import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Schema } from 'src/app/models/models';
import Swiper from 'swiper';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
  // standalone: true,
  // imports: [CommonModule],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SwiperComponent  implements OnInit {
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined
  swiper?: Swiper

  @Input() images : Schema[] = [] 

  constructor() { }

  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper
  }

  goNext() {
    this.swiper?.slideNext()
  }

  goPrev() {
    this.swiper?.slidePrev()
  }
  
  ngOnInit() {}

  swiperSlideChanged(e: any) {
    console.log('changed')
  }

}
