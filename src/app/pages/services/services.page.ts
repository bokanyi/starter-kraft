import { Component, OnInit } from '@angular/core';
import {Service} from '../../models/models';


@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {
  services: Service[] = [
    {
      title: 'építészeti tanácsadás',
      description: `az adott ingatlan paramétereinek kihasználásáról
      személyes/ online tanácsadás az építtetőtől bekért adatok és fotók, a helyi építési szabályzat, Szabályozási terv alapján
      ha szükség van rá, ajánljuk a megfelelő szaktervezőt (pl.: statikus szakvélemény)
      segítünk felelős kivitelezőt találni
      + kivonat – szakvélemény – leírás a meglévő állapotról és a telek hasznosítási lehetőségeiről ( beépíthetőség, bővíthetőség, új funkcionális rend)`,
    },
    {
      title: 'műszaki állapotfelmérés',
      description: `– egyedi árazás alapján
      helyszíni szemrevételezés, fotók, szükség esetén szaktervezők bevonásával, felár!
      épület szerkezete – rétegrend feltárást nem csinálunk
      nyílászárók állapota
      burkolatok, falazatok állapota.
      + kivonat - szakvélemény`,
    },
    {
      title: 'építészeti felmérés és tervdokumentáció',
      description: `építészeti felmérés és tervdokumentáció – egyedi árazás alapján kézi lézeres felmérés, szükség esetén helyszínen manuálé/ meglévő tervekre
      Eltérő szintű alaprajzok
      2 metszet`,
    },
    {
      title: 'koncepcióterv',
      description: ` – egyedi árazás alapján – megmutatja, hogy az ingatlanon milyen átalakítást kell elvégezni ahhoz, hogy az megfeleljen a vásárló igényeinek. Amint ez megvan egy nagyságrendi felújítási költséget is tudunk számolni. Ez esetben a vásárló teljesebb képet kap az ingatlan állapotáról, valamint könnyen összehasonlíthatóvá válnak egymással a lakások/házak műszaki szempontból.`,
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
