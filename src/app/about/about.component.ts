import { Component } from '@angular/core';
import { PageTitleComponent } from "../page-title/page-title.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [PageTitleComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  aboutTitle = "About Component";
}
