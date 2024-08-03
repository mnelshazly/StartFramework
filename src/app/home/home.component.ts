import { Component } from '@angular/core';
import { PageTitleComponent } from "../page-title/page-title.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PageTitleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  homeTitle:string = "Start Framework";
}
