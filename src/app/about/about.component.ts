import { Component } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [PdfViewerModule,CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  pdfDec:boolean=false
  email="shubhammisra800@gmail.com"
  openInNewTab(url:any){
    // window.open("www.google.com",'_blank') 
    // window.open("https://www.google.com")
    window.open(url)
  }
  show(){
    this.pdfDec=true
  }
  cross(){
    this.pdfDec=false
  }
}
