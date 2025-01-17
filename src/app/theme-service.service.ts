import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeServiceService {
  private renderer: Renderer2;
  private currentTheme!: string;
  constructor(rendererFactory:RendererFactory2) { 
    this.renderer = rendererFactory.createRenderer(null, null);
  }
  initTheme(): void {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.currentTheme = prefersDark ? 'dark-theme' : 'light-theme';
    this.setTheme(this.currentTheme);

    // Listen for changes in system theme preference
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
          this.currentTheme = event.matches ? 'dark-theme' : 'light-theme';
          this.setTheme(this.currentTheme);
      });
  }
  setTheme(theme: string): void {
    const body = document.body;
    this.renderer.removeClass(body, 'light-theme');
    this.renderer.removeClass(body, 'dark-theme');
    this.renderer.addClass(body, theme);
  }
}
