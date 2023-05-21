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
  mission: string = 'Missziónk bátorítani az építettőket azzal, hogy minimalizáljuk az ismeretlen részleteket. Így minél több információ birtokában felkészítünk a magabiztos döntéshozásra új ingatlan vásárlásakor, vagy otthonod bővítése során.'
  sideProject: Service = {
    title:`MÁJUSFA PROJEKT`,
    description: `Kisközösségek aktivitását támogató civil kezdeményezésünk Rádler Luca építésszel: MÁJUSFA PROJEKT `,
    details:'https://www.instagram.com/majusfa_projekt/'
}
  
  values: Service[] = [
    {title: "átláthatóság",
    description: "Biztos`tjuk a folyamatok átláthatóságát, az első konzultáció során tisztázzuk a lehetőségeket",
    details:"",
    },
    {title: "elhivatottság",
    description: "Biztos`tjuk a folyamatok átláthatóságát, az első konzultáció során tisztázzuk a lehetőségeket",
    details:"",
    },
    {title: "csapatmunka",
    description: "Biztos`tjuk a folyamatok átláthatóságát, az első konzultáció során tisztázzuk a lehetőségeket",
    details:"",
    },
    {title: "minőség",
    description: "Biztos`tjuk a folyamatok átláthatóságát, az első konzultáció során tisztázzuk a lehetőségeket",
    details:"",
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
