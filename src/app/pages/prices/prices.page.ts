import { Component, OnInit } from '@angular/core';
import { Schema } from 'src/app/models/models';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.page.html',
  styleUrls: ['./prices.page.scss'],
})
export class PricesPage implements OnInit {
  prices: Schema[] = [
    {
      title: 'Állapotfelmérés',
      description: `- helyszíni szemle\n- falnedvesség mérés\n- hőkamerás vizsgálat\n- szerkezetek megtekintése\n- állapotfelmérési dokumentáció készítés`,
      details: `50 000 Ft. / ingatlan\n30 000 Ft. / ingatlan, több ingatlan esetén`,
    },
    {
      title: 'Műszaki felmérés + tervdokumentáció',
      description: `- helyszíni szemle,\n- kézi lézeres felmérés,\n- meglévő tervek áttekintése,\n- tervdokumentáció készítés\nTervrajzok: Helyszínrajz, Alaprajz(ok), Metszetek (2 db) Homlokzatok (4db) Utcakép`,
      details: `80 000 Ft. / műszaki Felmérés\n2000/m2 -től / tervrajzok bonyolultság függvényében`,
    },
    {
      title: 'Tanácsadás',
      description: `- igények és lehetőségek egyeztetése\n- 2 db konzultáció 1. Konzultáció: tulajdonos igényeit ismerteti 2. Konzultáció: szakmai vélemény\n- a telek lehetőségeinek ismertetése a helyi építési szabályzattal összhangban`,
      details: `árak'`,
    },
    {
      title: 'Koncepció',
      description: `Előzménye: műszaki felmérés megléte\n1 db konzultáció és 1 db módosítás\nTervezett ház/átalakítás/bővítés alaprajzai javaslatok és vázlatos látványterv(ek) - koncepcióterv szinten`,
      details: `2000/m2 -től / tervrajzok bonyolultság függvényében`,
    },
  ];

  constructor() {}

  ngOnInit() {}
}
