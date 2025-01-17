import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  email="shubhammisra800@gmail.com"
  openInNewTab(url:any){
    // window.open("www.google.com",'_blank')
    
    // window.open("https://www.google.com")
    window.open(url)
   
  }
}
