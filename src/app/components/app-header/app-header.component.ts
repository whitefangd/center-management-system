import { Component } from '@angular/core';

import { ThemesService } from './../../plugins/plugins';
import { Themes, ThemeKeys } from './../../plugins/themes/themes';
import { UserDetailService } from '../../common/common';

@Component({
	selector: 'app-header',
	templateUrl: './app-header.component.html'
})
export class AppHeaderComponent {
	Themes = Themes;
	ThemeKeys = ThemeKeys;

	constructor(
		private _ThemeService: ThemesService,
		private _UserDetailService: UserDetailService) { }

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

	get UserDetail() {
		return this._UserDetailService;
	}

	public NavbarClass() {
		let classes =
			' navbar-' + this.Theme.Nav +
			' bg-' + this.Theme.Background +
			' text' + this.Theme.Text;
		return classes;
	}

	public ButtonDropdownThemeClass() {
		let classes = 'btn dropdown-toggle btn-' + this.Theme.Background ;
		return classes;
	}

	public ButtonThemeClass() {
		let classes = 'btn btn-' + this.Theme.Background + ' text' + this.Theme.Text;
		return classes;
	}
}