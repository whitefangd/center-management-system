import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ThemesService } from '@boluclac/plugins';
import { Themes, ThemeKeys } from '@boluclac/plugins';
import { UserDetailService } from '@boluclac/common';
import { Global } from '@boluclac/common';

@Component({
	selector: 'app-header',
	templateUrl: './app-header.component.html'
})
export class AppHeaderComponent {
	Themes = Themes;
	ThemeKeys = ThemeKeys;

	constructor(
		private _Router: Router,
		private _ThemeService: ThemesService,
		private _UserDetailService: UserDetailService) { }

	public changeTheme($event, theme) {
		this.ThemeKey = theme;
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

	public logout($event) {
		this._UserDetailService.Authentication = false;
		this._Router.navigate([Global.PageUrls.HOME]);
	}

	public get PageUrls() {
		return Global.PageUrls;
	};

	public set ThemeKey(theme: any) {
		this._ThemeService.setThemeKey(theme);
	};

	public get ThemeKey() {
		return this._ThemeService.ThemeKey;
	}

	public get Theme() {
		return this._ThemeService.Theme;
	}

	public get UserDetail() {
		return this._UserDetailService;
	}
}