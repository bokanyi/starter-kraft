import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  // standalone: true,
  // imports:[IonicModule]
})

export class CardComponent  implements OnInit {
  public modal: boolean = false;


  openModal () {
    this.modal = !this.modal
  }
  constructor() { }

  @Input() title=""
  @Input() description=""
  @Input() details=""
  ngOnInit() {}

}
