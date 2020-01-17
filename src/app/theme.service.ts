import { Injectable } from '@angular/core';
import { Theme , light, dark, colored, filtered } from './theme/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private active: Theme= dark;
  private availableThemes: Theme[]=[light, dark, colored, filtered];
  
  getAvailableThemes(): Theme[] {
    return this.availableThemes;
  }

  getActiveTheme(): Theme {
    return this.active;
  }

  isDarkTheme(): boolean {
    return this.active.name === dark.name;
  }

  setDarkTheme(): void {
    this.setActiveTheme(dark);
  }

  setColored():void{
    this.setActiveTheme(colored);
  }

  setFiltered():void{
    this.setActiveTheme(filtered);
  }

  setLightTheme(): void {
    this.setActiveTheme(light);
  }

  setActiveTheme(theme: Theme): void {
    this.active = theme;

    Object.keys(this.active.properties).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }
}
