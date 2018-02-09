import { Component, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ThemesService, LanguagesService } from '@boluclac/plugins';
import { Pages } from '@boluclac/pages';


@Component({
	selector: 'login-logo',
	templateUrl: './login-logo.component.html'
})
export class LoginLogoComponent {

	@Output() ForgetPassword = new EventEmitter<any>();

	constructor(
		private _ThemeService: ThemesService,
		private _LanguagesService: LanguagesService) {
	}

	public changeForgetPassword($event) {
		this.ForgetPassword.emit();
	}

	public get Pages() {
		return Pages;
	};
	
	public get Theme() {
		return this._ThemeService.Theme;
	}

	public get Translate() {
		return this._LanguagesService.translate;
	}
}