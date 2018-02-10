import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ThemesService, LanguagesService } from '@boluclac/plugins';
import { fadeInAnimation } from '@boluclac/animations';
import { Global } from '@boluclac/common';

@Component({
	selector: 'forget-password',
	animations: [fadeInAnimation],
	host: { '[@fadeInAnimation]': '' },
	templateUrl: './forget-password.component.html',
	styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {

	constructor(
		private _ThemeService: ThemesService,
		private _LanguagesService: LanguagesService) {
	}

	public get PageUrls() {
		return Global.PageUrls;
	}

	public get Theme() {
		return this._ThemeService.Theme;
	}

	public get Translate() {
		return this._LanguagesService.translate;
	}
}