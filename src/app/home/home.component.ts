import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { FrontendSkillComponent } from "../frontend-skill/frontend-skill.component";
import { BackendSkillComponent } from "../backend-skill/backend-skill.component";
import { DatabaseSkillsComponent } from "../database-skills/database-skills.component";
import { AboutComponent } from "../about/about.component";
import { EducationComponent } from "../education/education.component";
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';
import { LoginComponent } from "../login/login.component";
import { OtherSkillsComponent } from "../other-skills/other-skills.component";
import { FormComponent } from "../form/form.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBarComponent, FrontendSkillComponent, BackendSkillComponent, DatabaseSkillsComponent, AboutComponent, EducationComponent, FooterComponent, CommonModule, LoginComponent, OtherSkillsComponent, FormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  admin:boolean=true
  constructor(){
    
  }
  getAdmin(){
    this.admin=!this.admin;
  }
  openInNewTab(){
    window.open("mailto:shubhammisra800@gmail.com")
   
  }
}
