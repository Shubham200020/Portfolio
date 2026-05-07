import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  links: {
    github?: string;
    live?: string;
    backend?: string;
    frontend?: string;
  };
  features: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: "Movie Booking & Revenue Management System",
      description: "Developed a full-stack movie ticket booking and cinema management platform featuring an end-to-end booking workflow, business analytics, and dynamic seat management.",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=800",
      tech: ["Angular 18", "ASP.NET Core", "C#", "MySQL", "JWT", "RxJS", "EF Core"],
      links: {
        frontend: "https://github.com/Shubham200020/Movie-ticket-Frontend",
        backend: "https://github.com/Shubham200020/Movie-ticket-Backend"
      },
      features: [
        "End-to-end booking workflow with interactive seat reservation",
        "Admin dashboard for managing movies, theaters, and showtimes",
        "Business analytics module for revenue and ticket sales tracking",
        "GPS-based theater discovery using Geolocation APIs",
        "Role-Based Access Control (RBAC) with Angular Guards"
      ]
    },
    {
      title: "Product Management System",
      description: "Full-stack inventory and sales management application focused on helping shopkeepers manage products, track stock, and analyze financial performance.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      tech: ["Spring Boot", "Java 17", "Angular 18", "MySQL", "JWT", "Hibernate", "Spring Data JPA"],
      links: {
        frontend: "https://github.com/Shubham200020/product-management-system-frontend",
        backend: "https://github.com/Shubham200020/product-management-system-backend"
      },
      features: [
        "Inventory tracking with FIFO logic and stock monitoring",
        "Dynamic profit and revenue analysis dashboards",
        "Secure JWT-based authentication with RBAC",
        "Automated sales price calculation and discount management",
        "Scalable RESTful API using layered architecture"
      ]
    },
    {
      title: "APK Elite Services (Freelance)",
      description: "Developed an SEO-friendly and responsive business website for a service-based company to improve online visibility and customer engagement.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800",
      tech: ["Angular", "TypeScript", "HTML5", "CSS3", "SEO Optimization", "Responsive Design"],
      links: {
        live: "https://www.apkeliteservices.in/"
      },
      features: [
        "SEO-friendly structure with optimized metadata and semantic HTML",
        "Mobile-first responsive design for all device types",
        "Reusable component-based architecture for scalability",
        "Performance-focused design with optimized loading times",
        "Collaborative UI customization based on client requirements"
      ]
    }
  ];
}
