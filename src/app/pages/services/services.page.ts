import { Component, OnInit } from '@angular/core';
import {Service} from '../../models/models';


@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {
  public modal: boolean = false;


  services: Service[] = [
    {
      title: 'felmérés',
      description: `A műszaki állapotfelmérés helyszíni bejárás során történik. A helyszíni bejárás alkalmával elvégezzük a különböző épületszerkezetek bontás nélkül végezhető vizsgálatát, a rendelkezésre álló tervlapok áttekintését. Fotódokumentációt és kézi lézeres felmérést készítünk. Bizonyos esetekben statikus szakmérnök bevonását is biztosítjuk.\n+ A felmérés tervdokumentációja egyéni díjszabás alapján készül.`,
      details: "A helyszíni felmérés hasznos lehet ingatlan vásárlása előtt. Szakértői segítséggel jelentősen csökkenthető a váratlan kellemetlenségek száma. Azoknak a klienseknek is ajánljuk ezt a szolgáltatást, akik építési tevékenységbe kezdenének. A felmérés a tervezési folyamat egyik nélkülözhetetlen előkészítő lépése."
    },
    {
      title: 'építészeti tanácsadás ',
      description: `Az építészeti tanácsadás magában foglalja a tulajdonosi elképzelések és igények feltérképezését, a településrendezési eszközök vizsgálatát, az ingatlanhoz rendelhető építészeti lehetőségek rövid ismertetését.`,
      details: "Személyes vagy online tanácsadás az építtetőtől bekért adatok és fotók, rendelkezésre álló tervek, valamint a helyi építési szabályzat és szabályozási terv alapján. Így a tervezés kezdeti szakaszában kiderül az is, hogy milyen kompromisszumok árán lehet megvalósítani álmaid otthonát az adott építési telken."
    },
    {
      title: 'koncepcióterv',
      description: `A koncepcióterv szemléletesen ábrázolja a tulajdonos megvalósítható elképzeléseit a telek vagy a ház valós paramétereibe illesztve. Megmutatja, hogy az ingatlanon milyen átalakítást kell elvégezni ahhoz, hogy az megfeleljen a tulajdonos, vagy vásárló igényeinek, így a projekt várható költségeire is tudunk közelítő becslést adni.`,
      details: "Ajánljuk azoknak, akik több ingatlan közül készülnek választani és szeretnék mérlegelni az opciókat. Segítünk nektek gördülékenyen és hatékonyan összehasonlítani a különböző ingatlanokat, valamint meghatározni a projektetek költségének nagyságrendjét - így magabiztos döntéseket hozhattok.\n+ A koncepcióterv egyéni díjszabás alapján készül, ami tartalmaz egy konzultációt és egy tervmódosítást."
    },
    
  ]
  sum: string = 'A konzultáció során kiemeljük az ingatlan adottságait, műszaki állapotának hiányosságait, fény derül arra, hogy az elképzeléseiddel azonosak-e az ingatlan műszaki paraméterei és a benne rejlő lehetősgek.Megfelelő szakmai tanácsadást nyújtunk a beruházás optimalizálására, hogy megvalósítsd '
  slogan: string = 'a tökéletes otthonod, a lehetőségeid határain belül – döntsd el te, hogy kompromisszumot hozol, vagy valóra váltod az elképzeléseidet.'

  constructor() { }
  openModal () {
    this.modal = !this.modal
  }

  ngOnInit() {

   
  }

}
