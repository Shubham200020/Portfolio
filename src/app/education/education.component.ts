import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
education = [
  {
    year: "2016 - 2017",
    title: "Higher Secondary (X)",
    place: "Saraswati Vidya Mandir, Bihar",
    extra: "CGPA: 7.0"
  },
  {
    year: "2017 - 2020",
    title: "Senior Secondary (XII)",
    place: "PC College, Bihar",
    extra: "Percentage: 60%"
  },
  {
    year: "2020 - 2023",
    title: "Bachelor's Degree",
    place: "Pune, MH",
    extra: "Percentage: 60%"
  },
  {
    year: "2025",
    title: "MSc Computer Science",
    univercity: "Indira University",
    place: "Pune, MH",
    extra: ""
  }
];

experience = [
  {
    year: "Feb 2024 - Nov 2024",
    company: "SetTribe",
    role: "Intern"
  }
];
}
