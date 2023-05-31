import { Component, OnInit } from '@angular/core';
import { Schema } from '../../models/models';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  title: string = 'Rólunk';
  introduction: string =
    '';
  mission: string =
    'Missziónk bátorítani az építettőket azzal, hogy minimalizáljuk az ismeretlen részleteket. Így minél több információ birtokában felkészítünk a magabiztos döntéshozásra új ingatlan vásárlásakor, vagy otthonod bővítése során.';
  sideProject: Schema = {
    title: `MÁJUSFA PROJEKT`,
    description: `Kisközösségek aktivitását támogató civil kezdeményezésünk Rádler Luca építésszel: MÁJUSFA PROJEKT `,
    details: 'https://www.instagram.com/majusfa_projekt/',
  };

  values: Schema[] = [
    {
      title: 'átláthatóság',
      description:
        'Biztosítjuk az ügyintézés átláthatóságát, hogy ne érezd tanácstalanul magad. Az első konzultáció során tisztázzuk a folyamat lépéseit, megteremtjük a szükséges feltételeket és feltérképezzük a projekt kereteit.',
      details: '',
    },
    {
      title: 'elhivatottság',
      description:
        'Munkánkkal értéket teremtünk. Szaktudásunkkal elősegítjük a beruházás legoptimálisabb kimenetelét. Olyan építészetet képviselünk, amely szélesebb körben is minőségi lakhatást biztosít.',
      details: '',
    },
    {
      title: 'csapatmunka',
      description:
        'Csapatban dolgozunk, projekttől függően társtervezők bevonásával érjük el, hogy minden ismeretlenre rávilágítsunk a beruházás folyamán.  ',
      details: '',
    },
  ];
  cv: string[] = [
    '2018-ban építész diplomát szereztem a Műegyetemen, ahol az urbanisztikai kutatások, azon belül is a szociális és energiagazdálkodási kérdések érdekeltek.',

    'Az egyetem után szabadtér tervezőként dolgoztam a Város-Teampannon Kft. műhelyében a Vörösmarty tér és a Podmaniczky tér megújításán. Azóta Franciaországban és itthon építészként lakóépületek tervezésèvel és középületek bővítésèvel foglalkoztam.',

    'Fontosnak tartom, hogy fiatal szaktársaimmal láthatóvá váljunk a hazai kulturális színtéren, ezért különböző non-profit programok és kiállítások, foglalkozások szervezésében veszek részt.',

    'A 2019-ben alakult Közben Stúdióban több fiatal hazai vállalkozó designerrel egy térben dolgozom.,'
  ]

  cvbi: string[]= [
    'A Műszaki Egyetemen szereztem építész diplomát, ezután a Fővárosi Önkormányzat Városépítési Főosztályán dolgoztam. Ahol elsajátítottam a településrendezési eszközök ismeretét és mélyebben beleláttam a hatósági folyamatokba.',
    'Tervezőként többek között a Közti Zrt., Formiconcept Kft. majd a Geon Stúdió irodájában dolgoztam. Majd szabadúszóként lakásátalakítások, családi házak tervezésén dolgoztam.',
  ]

  constructor() {}

  ngOnInit() {}
}
