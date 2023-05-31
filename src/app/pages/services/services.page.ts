import { Component, OnInit } from '@angular/core';
import { SchemaServices, Schema } from '../../models/models';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {
  public modal: boolean = false;

  services: SchemaServices[] = [
    {
      title: 'felmérés',
      description: `A műszaki állapotfelmérés helyszíni bejárás során történik. A helyszíni bejárás alkalmával elvégezzük a különböző épületszerkezetek bontás nélkül végezhető műszeres vizsgálatát, a rendelkezésre álló tervlapok áttekintését.\nBizonyos esetekben statikus szakmérnök bevonását is biztosítjuk. `,
      details:
        'A helyszíni felmérés hasznos lehet ingatlan vásárlása vagy építkezés, átalakítás előtt. Szakértői segítséggel jelentősen csökkenthető a váratlan kellemetlenségek száma, átláthatóvá válnak a tulajdonos előtt álló feladatok.\nA felmérés a tervezési folyamat egyik nélkülözhetetlen előkészítő lépése. ',
      prices: [
        {
          title: 'Állapotfelmérés',
          prices:
            '50 000 Ft./ ingatlan\n30 000 Ft./ ingatlan, több ingatlan esetén',
          methods:
            '- helyszíni szemle\n- falnedvesség mérés\n- hőkamerás vizsgálat\n- szerkezetek megtekintése\n- állapotfelmérési dokumentáció készítés',
          documents: '',
        },
        {
          title: 'Műszaki felmérés + tervdokumentáció',
          prices:
            '80 000 Ft./ műszaki Felmérés\n2000/m2 -től/ tervrajzok bonyolultság függvényében',
          methods:
            '- helyszíni szemle,\n- kézi lézeres felmérés,\n- meglévő tervek áttekintése,\n- tervdokumentáció készítés\nTervrajzok: Helyszínrajz, Alaprajz(ok), Metszetek (2 db) Homlokzatok (4db) Utcakép',
          documents: '',
        },
      ],
    },
    {
      title: 'építészeti tanácsadás ',
      description: `Az építészeti tanácsadás magában foglalja a tulajdonosi elképzelések és igények feltérképezését, a településrendezési eszközök vizsgálatát, az ingatlanhoz rendelhető építészeti lehetőségek rövid ismertetését.`,
      details:
        'Személyes vagy online tanácsadás az építtetőtől bekért adatok és fotók, rendelkezésre álló tervek, vagy általunk készített helyszíni felmérés, valamint a helyi építési szabályzat és szabályozási terv alapján.\nÍgy a tervezés kezdeti szakaszában kiderül az is, hogy milyen kompromisszumok árán lehet megvalósítani álmaid otthonát az adott építési telken.',
      prices: [
        {
          title: '',
          prices: '30 000 - 45 000 Ft.\n',
          methods:
            '- igények és lehetőségek egyeztetése\n- 2 db konzultáció 1. Konzultáció: tulajdonos igényeit ismerteti 2. Konzultáció: szakmai vélemény\n- a telek lehetőségeinek ismertetése a helyi építési szabályzattal összhangban',
          documents: '',
        },
      ],
    },
    {
      title: 'koncepcióterv',
      description: `A koncepcióterv szemléletesen ábrázolja a tulajdonos megvalósítható elképzeléseit a telek vagy a ház valós paramétereibe illesztve. Megmutatja, hogy az ingatlanon milyen átalakítást kell elvégezni ahhoz, hogy az megfeleljen a tulajdonos, vagy vásárló igényeinek.\nA koncepcióterv alapján kivitelezőktől árajánlat kérhető.`,
      details:
        'Ajánljuk azoknak, akik meglévő ingatlannal rendelkeznek és bővítenék vagy átalakítanák otthonukat, vagy egy új beruházáson gondolkodnak. Segítünk nektek gördülékenyen és hatékonyan összehasonlítani a különböző ingatlanokat, valamint meghatározni a projektek költségének nagyságrendjét - így magabiztos döntéseket hozhattok.\n+ A koncepcióterv egyéni díjszabás alapján készül, ami tartalmaz egy konzultációt és egy tervmódosítást.',
      prices: [
        {
          title: '',
          prices: '2000/m2 -től / tervrajzok bonyolultság függvényében',
          methods:
            '- előzménye: műszaki felmérés megléte\n- 1 db konzultáció és 1 db módosítás\n- tervezett ház/átalakítás/bővítés alaprajzai javaslatok és vázlatos látványterv(ek) - koncepcióterv szinten',
          documents: '',
        },
      ],
    },
  ];

  sum: string =
    'Építészeti tanácsadással foglalkozunk,\nmelynek során kiemeljük az ingatlan adottságait, műszaki állapotának hiányosságait, fény derül arra, hogy az elképzeléseiddel azonosak-e az ingatlan műszaki paraméterei és a benne rejlő lehetősgek.\nMegfelelő szakmai tanácsadást nyújtunk a beruházás optimalizálására, hogy megvalósítsd ';
  slogan: string =
    'a tökéletes otthonod, a lehetőségeid határain belül – döntsd el te, hogy kompromisszumot hozol, vagy valóra váltod az elképzeléseidet.';

  constructor() {}
  openModal() {
    this.modal = !this.modal;
  }

  ngOnInit() {}
}
