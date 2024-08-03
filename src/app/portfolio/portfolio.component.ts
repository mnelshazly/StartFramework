import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageTitleComponent } from "../page-title/page-title.component";

interface Items {
  imgSrc:string;
  imgAlt:string
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [FormsModule, PageTitleComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  items:Items[] = [
    {imgSrc: "./assets/images/poert1.png", imgAlt: "img1"},
    {imgSrc: "./assets/images/port2.png", imgAlt: "img2"},
    {imgSrc: "./assets/images/port3.png", imgAlt: "img3"},
    {imgSrc: "./assets/images/poert1.png", imgAlt: "img4"},
    {imgSrc: "./assets/images/port2.png", imgAlt: "img5"},
    {imgSrc: "./assets/images/port3.png", imgAlt: "img6"},
  ];

  portfolioTitle:string = "Portfolio Component";

  isModelVisible = false;

  modelImgSrc:string = '';
  
  showModel(imgSrc:string):void {
    this.isModelVisible = true;
    this.modelImgSrc = imgSrc;
  }

  hideModel():void {
    this.isModelVisible = false;
  }

  // Prevent closing the model when clicking the image
  preventClose(eventInfo: MouseEvent): void {
    eventInfo.stopPropagation();
  }

}
