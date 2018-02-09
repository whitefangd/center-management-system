import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Global } from '@boluclac/common'
import { ThemesService } from '@boluclac/plugins';

@Component({
	selector: 'change-language',
	templateUrl: './change-language.component.html'
})
export class ChangeLanguageComponent {

	@Input() cpnClass;

	Languages = Global.LANGUAGES;
	LanguageKeys = Global.LANGUAGES_KEYS;

	constructor(
		protected _translate: TranslateService,
		private _ThemeService: ThemesService) { }

	public changeLanguage($event, theme) {
		// this.ThemeKey = theme;
	}
	public get Theme() {
		return this._ThemeService.Theme;
	}
}