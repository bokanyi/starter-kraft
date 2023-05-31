import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  name: string = "Vizi Kata Veronika"
  email: string = "kataveronikavizi@gmail.com"
  tel: string = "+36 30 843 07 22" 
  instagram: string = "https://www.instagram.com/archicare_hu/"
  address: string =  `Ráday utca 31/B \nKapucsengő/Buzz: 164 - Közben Stúdió\nBudapest IX. kerület 1092`

  constructor() { }

  ngOnInit() {
  }

}
