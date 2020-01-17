import { Injectable } from '@angular/core';
import { Theme , light, dark, coloredDark, filteredDark, coloredLight,filteredLight } from './theme/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private active: Theme= dark;
  private availableThemes: Theme[]=[light, dark, coloredDark, filteredDark, coloredLight ,filteredLight];
  
  private colored=false;
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
    if(this.colored)
    this.setColored();
    else
    this.setFiltered();
  }

  setLightTheme(): void {
    this.setActiveTheme(light);
    if(this.colored)
    this.setColored();
    else
    this.setFiltered();
  }

  setColored():void{
    this.colored=true;
    if(this.isDarkTheme())
    this.setActiveColor(coloredDark);
    else
    this.setActiveColor(coloredLight)
  }

  setFiltered():void{
    this.colored=false;
    if(this.isDarkTheme())
    this.setActiveColor(filteredDark);
    else
    this.setActiveColor(filteredLight);
  }


  setActiveColor(theme: Theme):void{
    Object.keys(theme.properties).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        theme.properties[property]
      );
    }); 
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
