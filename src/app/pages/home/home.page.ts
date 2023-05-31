import { Component, OnInit } from '@angular/core';
import { Schema } from '../../models/models';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  logo: string = 'VKV architectural starter kit';
  title: string =
    'helló, mi egy építészeti tanácsadással foglalkozó stúdió vagyunk';
  mission: string =
    'Missziónk bátorítani az építettőket azzal, hogy minimalizáljuk az ismeretlen részleteket. Így minél több információ birtokában felkészítünk a magabiztos döntéshozásra új ingatlan vásárlásakor, vagy otthonod bővítése során.';
  introduction: string =
    'Helyszíni felmérést, műszaki helyzetelemzést és az ingatlan építészeti lehetőségeinek feltárását, építészeti tanácsadást vállalunk + építészeti tervek elkészítését';
  name: string = 'Vizi Kata Veronika';
  email: string = 'kataveronikavizi@gmail.com';
  tel: string = '+36 30 843 07 22';
  instagram: string = 'https://www.instagram.com/archicare_hu/';
  address: string = `Ráday utca 31/B \nKapucsengő/Buzz: 164 - Közben Stúdió \nBudapest IX. kerület 1092`;
  targets: string =
    'Mindenkinek, aki ingatlanvásárláson gondolkozik, bővíteni szeretné otthonát,  vagy építési telkeket keres, esetleg meglévő házat vásárolna és döntését alátámasztó szakmai segítséget kér.';
  faqs: string[] = [
    'Ha ingatlant szeretnél vásárolni vagy otthonodat szeretnéd bővíteni, sok kérdés merülhet fel benned.',
    'Milyen potenciál van az adott ingatlanban beépíthetőség, térkapcsolatok, szerkezetek – tekintetében.',
    'Ezeknek a kiaknázására milyen beavatkozásokra van szükség, és hogy hogyan zajlik majd az ehhez kapcsolódó hatósági ügyintézés.',
  ];
  invitation: string =
    'Ha szakértői véleményre van szükséged új otthonod vásárlása előtt, vagy meglévő épület átalakításához, fordulj bizalommal építész csapatunkhoz.';

  services: Schema[] = [
    {
      title: 'felmérés',
      description:
        'A műszaki állapotfelmérés helyszíni bejárás során történik. A helyszíni bejárás alkalmával elvégezzük a különböző épületszerkezetek bontás nélkül végezhető vizsgálatát, a rendelkezésre álló tervlapok áttekintését.\n \nFotódokumentációt és kézi lézeres felmérést készítünk. Bizonyos esetekben statikus szakmérnök bevonását is biztosítjuk.',
      details: '',
    },
    {
      title: 'építészeti tanácsadás',
      description:
        'Az építészeti tanácsadás magában foglalja a tulajdonosi elképzelések és igények feltérképezését, a településrendezési eszközök vizsgálatát, az ingatlanhoz rendelhető építészeti lehetőségek rövid ismertetését.',
      details: '',
    },
    {
      title: 'koncepcióterv',
      description:
        'A koncepcióterv szemléletesen ábrázolja a tulajdonos megvalósítható elképzeléseit a telek vagy a ház valós paramétereibe illesztve.\n \nMegmutatja, hogy az ingatlanon milyen átalakítást kell elvégezni ahhoz, hogy az megfeleljen a tulajdonos, vagy vásárló igényeinek. Így a projekt várható költségeire is tudunk közelítő becslést adni.',
      details: '',
    },
  ];

  about: string =
    'Célunk minél szélesebb körben elérhető építészeti szolgáltatást nyújtani és a szakmai tapasztalatok átadásán keresztül támogatni az ügyfeleket a felelősségteljes pénzügyi döntéshozásban és a kivitelezőkkel folytatott hatékony kommunikációban';

  ceo: string = ' Vizi Kata és Bokányi Imre építészek';

  referencies: string[] = [
    '+ több éves szakmai, hazai és külföldi tapasztalat',
    '+ lakásfelújítás',
    '+ családi ház tervezés ( új és bővítés) műszaki felmérés, tanácsadás terén Budapesten és vidéken',
  ];

  motivation: string[] = [
    'Építészként azt tapasztaljuk, hogy az építkezés előtt álló emberek nem jutnak hozzá alapvető információkhoz, tanácstalanul vágnak bele életük nagy beruházásába.',
    'Nem tudják felmérni az ingatlan állapotát, hogy milyen munkákat kell elvégezni az otthonuk kialakításához, megvalósítható-e az elképzelésük. Így azt sem, hogy mennyit kell rá költeni.',
    'Azoknak szeretnénk szolgáltatást nyújtani, akik ingatlanvásárlás előtt állnak vagy meglévő otthonukat szeretnék átalakítani.',
    'Hogyan?\nHelyszíni szemlével, az ingatlan műszaki állapotának felmérésével és a telek beépíthetőségének, vagy az átalakítási lehetőségek vizsgálatával.',
    'Segítünk kiválasztani az ügyfél igényeinek megfelelő lehetőséget, így az is egyértelművé válik, hogy milyen feladatokból áll a projekt és nagyságrendileg mennyibe fog kerülni.',
    'A valós műszaki tartalomra hivatkozva akár milliókat alkudhatunk egy ingatlan vételárából, de ami talán még fontosabb, hogy kivitelezőkkel történő kommunikációban is képviselni tudja érdekeit az építtető, átlátja az előtte álló folyamatot.',
  ];

  images: Schema[] = [
    {
      title: 'Börzsönyligeti faszerkezetű nyaraló funkcióváltása és bővítése.',
      description: '',
      details: '../../../assets/images/reference01.png',
    },
    {
      title: 'Családi ház a Dunakanyarban.\nTúlépített telken lévő műhelyek bontása, energetikai felújítási javaslat és homlokzati nyílászárócsere.',
      description: '',
      details: '../../../assets/images/reference02.png',
    },
    {
      title: 'Budapest,\nbelvárosi 38 m2-es garzon lakás belső térkapcsolatainak átalakítása, közmű vezetékek házon belüli felújítása. ',
      description: '',
      details: '../../../assets/images/reference03.png',
    },
  ];
  constructor() {}
  ngOnInit(): void {}
}
