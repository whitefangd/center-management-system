import { Component, Input } from '@angular/core';
import { ThemesService, Themes, ThemeKeys } from '@boluclac/plugins';

@Component({
	selector: 'change-theme',
	templateUrl: './change-theme.component.html'
})
export class ChangeThemeComponent {

	@Input() cpnClass;

	Themes = Themes;
	ThemeKeys = ThemeKeys;

	constructor(private _ThemeService: ThemesService) { }

	public changeTheme($event, theme) {
		this.ThemeKey = theme;
	}

	set ThemeKey(theme: any) {
		this._ThemeService.setThemeKey(theme);
	};

	get ThemeKey() {
		return this._ThemeService.ThemeKey;
	}

	get Theme() {
		return this._ThemeService.Theme;
	}
}