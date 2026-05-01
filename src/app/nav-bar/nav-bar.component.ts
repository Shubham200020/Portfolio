import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
  mobileMenuOpen = false;
  isMobile = false;
  windowWidth: number = window.innerWidth;

  constructor() {
    this.updateScreenSize();
  }

  ngOnInit(): void {
    this.updateScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any): void {
    this.windowWidth = event.target.innerWidth;
    this.updateScreenSize();
    if (this.windowWidth > 768) {
      this.mobileMenuOpen = false;
    }
  }

  updateScreenSize(): void {
    this.isMobile = this.windowWidth <= 768;
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }
}
