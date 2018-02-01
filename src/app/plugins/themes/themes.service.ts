import { Injectable } from '@angular/core';

import {Themes, ThemeKeys} from './themes'

@Injectable()
export class ThemesService {
  public ThemeKey: string;
  public Theme: any;

  constructor(){
  	this.ThemeKey = ThemeKeys[0];
    this.Theme = Themes[this.ThemeKey];
  }

  setThemeKey(key:string) {
    this.ThemeKey = key;
    this.Theme = Themes[key];
  }
}