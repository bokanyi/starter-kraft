import { Component, OnInit } from '@angular/core';
import {Service} from '../../models/models';


@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  title: string =  'Rólunk'
  introduction: string = 'építészeti tanácsadást nyújtó csapat vagyunk, budapesti lokációval amiben tudunk segíteni' 
  values: Service[] = [
    {title: "átláthatóság",
    description: "Biztos`tjuk a folyamatok átláthatóságát, az első konzultáció során tisztázzuk a lehetőségeket",
    },
    {title: "elhivatottság",
    description: "Biztos`tjuk a folyamatok átláthatóságát, az első konzultáció során tisztázzuk a lehetőségeket",
    },
    {title: "csapatmunka",
    description: "Biztos`tjuk a folyamatok átláthatóságát, az első konzultáció során tisztázzuk a lehetőségeket",
    },
    {title: "minőség",
    description: "Biztos`tjuk a folyamatok átláthatóságát, az első konzultáció során tisztázzuk a lehetőségeket",
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
