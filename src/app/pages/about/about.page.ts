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
        'Biztosítjuk a folyamatok átláthatóságát, az első konzultáció során tisztázzuk a folyamat lépéseit, megteremtjük a szükséges feltételeket és feltérképezzük a projekt kereteit.',
      details: '',
    },
    {
      title: 'elhivatottság',
      description:
        'Hiszünk benne, hogy munkánkkal értéket teremtünk, hogy szaktudásunkkal elősegítjük a megfelelő körülmények megteremtését a beruházás legoptimálisabb kimeneteléhez.',
      details: '',
    },
    {
      title: 'minőség',
      description:
      'A minőség kiemelkedő szerepet játszik a tervezás folyamatában. A megfelelő cél elérése érdekében a szükséges tervdokumentációt szállítjuk.',
      details: '',
    },
    {
      title: 'csapatmunka',
      description:
        'Csapatban dolgozunk, projekttől függően társtervezők bevonásával érjük el, hogy minden ismeretlenre rávilágítsunk a beruházás folyamán.  ',
      details: '',
    },
  ];

  motivation: string[] = [
    'Építészként azt tapasztalom, hogy az építkezés előtt álló emberek nem jutnak hozzá alapvető információkhoz, tanácstalanul vágnak bele életük nagy beruházásába.',
    'Nem tudják felmérni az ingatlan állapotát, hogy milyen munkákat kell elvégezni az otthonuk kialakításához, megvalósítható-e az elképzelésük. Így azt sem, hogy mennyit kell rá költeni.',
    'Vállalkozásommal azoknak szeretnék szolgáltatást nyújtani, akik ingatlanvásárlás előtt állnak vagy meglévő otthonukat szeretnék átalakítani. Hogyan? Helyszíni szemlével, az ingatlan műszaki állapotának felmérésével és a telek beépíthetőségének, vagy az átalakítási lehetőségek vizsgálatával.',
    'Egy-egy ilyen szakértői alkalommal segítek kiválasztani az ügyfél igényeinek megfelelő lehetőséget, így az is egyértelművé válik, hogy milyen feladatokból áll a projekt és nagyságrendileg mennyibe fog kerülni. A valós műszaki tartalomra hivatkozva akár milliókat alkudhatunk egy ingatlan vételárából, de ami talán még fontosabb, hogy kivitelezőkkel történő kommunikációban is képviselni tudja érdekeit az építtető, átlátja az előtt álló folyamatot.',
  ];

  constructor() {}

  ngOnInit() {}
}
