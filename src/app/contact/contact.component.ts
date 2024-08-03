import { Component } from '@angular/core';
import { PageTitleComponent } from '../page-title/page-title.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [PageTitleComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactTitle:string = "Contact Section";

  userNameLabel = false;
  userAgeLabel = false;
  userEmailLabel = false;
  userPassLabel = false;

  labelToggle(eventInfo:any, input:string):void { 
    
    if (eventInfo.target.value != '' && input == 'userName') {
      this.userNameLabel = true;
    } else if (eventInfo.target.value == '' && input == 'userName') {
      this.userNameLabel = false;
    }

    if (eventInfo.target.value != '' && input == 'userAge') {
      this.userAgeLabel = true;
    } else if (eventInfo.target.value == '' && input == 'userAge') {
      this.userAgeLabel = false;
    }

    if (eventInfo.target.value != '' && input == 'userEmail') {
      this.userEmailLabel = true;
    } else if (eventInfo.target.value == '' && input == 'userEmail') {
      this.userEmailLabel = false;
    }

    if (eventInfo.target.value != '' && input == 'userPass') {
      this.userPassLabel = true;
    } else if (eventInfo.target.value == '' && input == 'userPass') {
      this.userPassLabel = false;
    }

  }

}
