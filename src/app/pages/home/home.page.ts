import { Component, OnInit } from '@angular/core';
import {Service} from '../../models/models';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  logo: string =  'VKV architectural starter kit'
  title: string =  'hello mi egy építész szolgáltatást nyújtó vállakozás vagyunk'
  introduction: string = 'segítünk építészeti tanácsadásban, felmérésben, koncepció alkotásban,ingatlanvásárás, bővítés vagy felújítás előtt állóknak, hogy megtalálja álmai otthonát. 1 mit szolgáltatunk, 2 kiknek, célközönség, 3 mi a cél ' 

  services: Service[] = [
    {
      title: 'tananácsadás',
      description: 'Rövid leírás az egyes szolgáltatásokról, mit nyújt, kinek ajánljuk, miért vegyék igénybe',
    },
    {
      title: 'felmérés',
      description: 'Rövid leírás az egyes szolgáltatásokról, mit nyújt, kinek ajánljuk, miért vegyék igénybe',
    },
    {
      title: 'koncepció',
      description: 'Rövid leírás az egyes szolgáltatásokról, mit nyújt, kinek ajánljuk, miért vegyék igénybe',
    },
  ]

  about: string = 'építész csapat, több éves szakmai tapasztalat, lakásfelújítások, koncepcióalkotás, felmérés, tanácsadás terén, Budapest székhely de Dunakanyrban is működik, közepesen hosszú általános bemutatkozás 3 mondat, 1 csapat, 2 tapasztalat, 3 lokáció, '

  constructor() {}
  ngOnInit(): void {
    
  }
}
