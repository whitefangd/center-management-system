import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ThemesService, LanguagesService } from './../../plugins/plugins';
import { fadeInAnimation } from '../../animations/index';

@Component({
	selector: 'login',
	animations: [fadeInAnimation],
	host: { '[@fadeInAnimation]': '' },
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent {

	constructor(
		private _ThemeService: ThemesService,
		private _LanguagesService: LanguagesService) {
	}

	public get Theme() {
		return this._ThemeService.Theme;
	}

	public get Translate() {
		return this._LanguagesService.translate;
	}

}