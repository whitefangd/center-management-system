import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

import { ThemesService, LanguagesService } from '@boluclac/plugins';
import { fadeInAnimation } from '@boluclac/animations';
import { UserDetailService } from '@boluclac/common';
import { Pages } from '@boluclac/pages';

@Component({
	selector: 'login',
	animations: [fadeInAnimation],
	host: { '[@fadeInAnimation]': '' },
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent {

	constructor(
		private _Router: Router,
		private _ThemeService: ThemesService,
		private _LanguagesService: LanguagesService,
		private _UserDetailService: UserDetailService) {
	}

	public login($event) {
		this._UserDetailService.Authentication = true;
		this._Router.navigate([Pages.HOME]);
	}

	public get Pages() {
		return Pages;
	}

	public get Theme() {
		return this._ThemeService.Theme;
	}

	public get Translate() {
		return this._LanguagesService.translate;
	}

}