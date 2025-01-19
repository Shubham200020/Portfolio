import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { FrontendSkillComponent } from "../frontend-skill/frontend-skill.component";
import { BackendSkillComponent } from "../backend-skill/backend-skill.component";
import { DatabaseSkillsComponent } from "../database-skills/database-skills.component";
import { AboutComponent } from "../about/about.component";
import { EducationComponent } from "../education/education.component";
import { FormComponent } from "../form/form.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBarComponent, FrontendSkillComponent, BackendSkillComponent, DatabaseSkillsComponent, AboutComponent, EducationComponent, FormComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(){
    
  }
  openInNewTab(){
    // window.open("www.google.com",'_blank')
    
    // window.open("https://www.google.com")
    window.open("mailto:shubhammisra800@gmail.com")
   
  }
}
