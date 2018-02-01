import { Component, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ThemesService, LanguagesService } from './../../plugins/plugins';


@Component({
	selector: 'login-info',
	templateUrl: './login-info.component.html'
})
export class LoginInfoComponent {

	@Output() ForgetPassword = new EventEmitter<any>();

	constructor(
		private _ThemeService: ThemesService,
		private _LanguagesService: LanguagesService) {
	}

	public changeForgetPassword($event) {
		this.ForgetPassword.emit();
	}

	public get Theme() {
		return this._ThemeService.Theme;
	}

	public get Translate() {
		return this._LanguagesService.translate;
	}
}