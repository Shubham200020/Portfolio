import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit{
 windowWid:number
 visible:boolean=true
  constructor(){
    this.windowWid=window.innerWidth

    console.log(this.windowWid)
    if(this.windowWid<=600){
      this.visible=false
    }
  }
  ngOnInit(): void {
    this.windowWid=window.innerWidth

    console.log(this.windowWid)
    if(this.windowWid<=600){
      this.visible=false
    }
  }
  menu(){
    this.visible=!this.visible
  }
}
