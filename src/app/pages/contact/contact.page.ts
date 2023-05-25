import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  name: string = "Vizi Kata Veronika"
  email: string = "kataveronikavizi@gmail.com"
  tel: string = "06 30 843 07 22" 
  instagram: string = "https://www.instagram.com/archicare_hu/"
  address: string =  `Ráday utca 31/B \n(Kapucsengő/Buzz: 164 - KÖZBEN STÚDIÓ) \nBudapest IX. kerület 1092`

  constructor() { }

  ngOnInit() {
  }

}
