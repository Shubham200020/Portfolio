import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener } from '@angular/core';

interface Education {
  year: string;
  title: string;
  place: string;
  extra: string;
  university?: string;
  description: string;
}

interface Experience {
  year: string;
  company: string;
  role: string;
  description: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
private ticking=false;
constructor(private el:ElementRef<HTMLElement>){}
ngAfterViewInit(): void {
  this.updateCar()
}
@HostListener('window:scroll')
@HostListener('window:resize')
onViewportChange(){
  if(this.ticking) return;
  this.ticking=true;
  requestAnimationFrame(()=>{
    this.updateCar();
    this.ticking=false;
  })
}
private updateCar(){
  const section=this.el.nativeElement.querySelector('.education-section') as HTMLElement | null;
  const timeline=this.el.nativeElement.querySelector('.education-timeline') as HTMLElement | null;
  const experience=this.el.nativeElement.querySelector('.experience-section') as HTMLElement | null;
  if(section && timeline){
    this.setProgress(section,'--car-y');
  }
  if(experience){
    this.setProgress(experience,'--plane-y');
  }
}
private setProgress(section:HTMLElement,name:string){
  const rect=section.getBoundingClientRect();
  const viewportPoint=window.innerHeight*0.42;
  const progress=(viewportPoint-rect.top)/(rect.height-window.innerHeight*0.28);
  const y=Math.max(2,Math.min(96,progress*100));
  this.el.nativeElement.style.setProperty(name,`${y}%`);
}
education: Education[] = [
  {
    year: "2016 - 2017",
    title: "Higher Secondary (X)",
    place: "Saraswati Vidya Mandir, Bihar",
    extra: "CGPA: 7.0",
    description: "Completed secondary education with a strong foundation in core academics and problem-solving."
  },
  {
    year: "2017 - 2020",
    title: "Senior Secondary (XII)",
    place: "PC College, Bihar",
    extra: "Percentage: 60%",
    description: "Focused on science and mathematics while building the academic base for computer science studies."
  },
  {
    year: "2020 - 2023",
    title: "Bachelor's Degree",
    place: "Pune, MH",
    extra: "Percentage: 60%",
    description: "Studied computer science fundamentals, programming, databases, and software development concepts."
  },
  {
    year: "2025",
    title: "MSc Computer Science",
    university: "Indira University",
    place: "Pune, MH",
    extra: "",
    description: "Currently advancing skills in software engineering, application development, and modern computing."
  }
];

experience: Experience[] = [
  {
    year: "Feb 2024 - Nov 2024",
    company: "SetTribe",
    role: "Intern",
    description: "Worked on real-world development tasks, improved practical coding skills, and collaborated with the team to understand production workflows."
  }
];
}
