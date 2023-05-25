import { Component, OnInit } from '@angular/core';
import { Service } from '../../models/models';

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
  sideProject: Service = {
    title: `MÁJUSFA PROJEKT`,
    description: `Kisközösségek aktivitását támogató civil kezdeményezésünk Rádler Luca építésszel: MÁJUSFA PROJEKT `,
    details: 'https://www.instagram.com/majusfa_projekt/',
  };

  values: Service[] = [
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

  constructor() {}

  ngOnInit() {}
}
