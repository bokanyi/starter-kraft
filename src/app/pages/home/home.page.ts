import { Component, OnInit } from '@angular/core';
import {Service} from '../../models/models';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  logo: string =  'VKV architectural starter kit'
  title: string =  'hello, mi egy építészeti tanácsadással foglalkozó iroda vagyunk'
  mission: string = ' Missziónk bátorítani az építettőket stb. Minimalizáljuk az ismeretlen részleteket, hogy minél több információ birtokában hozhass döntést új ingatlan vásárlásakor, vagy otthonod bővítése során.'
  introduction: string = 'Helyszíni felmérést, műszaki helyzetelemzést és az ingatlan építészeti lehetőségeinek feltárását, építészeti tanácsadást vállalunk + építészeti tervek elkészítését' 

  services: Service[] = [
    {
      title: 'tananácsadás',
      description: 'Rövid leírás az egyes szolgáltatásokról, mit nyújt, kinek ajánljuk, miért vegyék igénybe',
      details: "",
    },
    {
      title: 'felmérés',
      description: 'Rövid leírás az egyes szolgáltatásokról, mit nyújt, kinek ajánljuk, miért vegyék igénybe',
      details: "",
    },
    {
      title: 'koncepció',
      description: 'Rövid leírás az egyes szolgáltatásokról, mit nyújt, kinek ajánljuk, miért vegyék igénybe',
      details: "",
    },
  ]

  about: string = 'építész csapat, több éves szakmai tapasztalat, lakásfelújítások, koncepcióalkotás, felmérés, tanácsadás terén, Budapest székhely de Dunakanyrban is működik, közepesen hosszú általános bemutatkozás 3 mondat, 1 csapat, 2 tapasztalat, 3 lokáció, '

  constructor() {}
  ngOnInit(): void {
    
  }
}
