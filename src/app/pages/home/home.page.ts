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
  mission: string = 'Missziónk bátorítani az építettőket azzal, hogy minimalizáljuk az ismeretlen részleteket. Így minél több információ birtokában felkészítünk a magabiztos döntéshozásra új ingatlan vásárlásakor, vagy otthonod bővítése során.'
  introduction: string = 'Helyszíni felmérést, műszaki helyzetelemzést és az ingatlan építészeti lehetőségeinek feltárását, építészeti tanácsadást vállalunk + építészeti tervek elkészítését' 
  name: string = "Vizi Kata Veronika"
  email: string = "kataveronikavizi@gmail.com"
  tel: string = "06 30 843 07 22" 
  instagram: string = "https://www.instagram.com/archicare_hu/"
  address: string =  "Ráday utca 31/B (Kapucsengő/Buzz: 164 - KÖZBEN STÚDIÓ) Budapest IX. kerület 1092"

  services: Service[] = [
    {
      title: 'felmérés',
      description: 'A műszaki állapotfelmérés helyszíni bejárás során történik. A helyszíni bejárás alkalmával elvégezzük a különböző épületszerkezetek bontás nélkül végezhető vizsgálatát, a rendelkezésre álló tervlapok áttekintését. Fotódokumentációt és kézi lézeres felmérést készítünk. Bizonyos esetekben statikus szakmérnök bevonását is biztosítjuk.',
      details: "",
    },
    {
      title: 'építészeti tanácsadás',
      description: 'Az építészeti tanácsadás magában foglalja a tulajdonosi elképzelések és igények feltérképezését, a településrendezési eszközök vizsgálatát, az ingatlanhoz rendelhető építészeti lehetőségek rövid ismertetését.',
      details: "",
    },
    {
      title: 'koncepcióterv',
      description: 'A koncepcióterv szemléletesen ábrázolja a tulajdonos megvalósítható elképzeléseit a telek vagy a ház valós paramétereibe illesztve. Megmutatja, hogy az ingatlanon milyen átalakítást kell elvégezni ahhoz, hogy az megfeleljen a tulajdonos, vagy vásárló igényeinek, így a projekt várható költségeire is tudunk közelítő becslést adni.',
      details: "",
    },
  ]

  about: string = 'építész csapat, több éves szakmai tapasztalat, lakásfelújítások, koncepcióalkotás, felmérés, tanácsadás terén, Budapest székhely de Dunakanyrban is működik, közepesen hosszú általános bemutatkozás 3 mondat, 1 csapat, 2 tapasztalat, 3 lokáció, '

  constructor() {}
  ngOnInit(): void {
    
  }
}
