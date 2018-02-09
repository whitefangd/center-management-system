import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { Global } from '@boluclac/common'
import { ThemesService } from '@boluclac/plugins';
import { fadeInAnimation } from '@boluclac/animations';

@Component({
	selector: 'app-root',
	animations: [fadeInAnimation],
	host: { '[@fadeInAnimation]': '' },
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';

	constructor(
		private router: Router,
		protected _ThemeService: ThemesService,
		protected _translate: TranslateService) {
		this._translate.setDefaultLang(Global.LANGUAGES.VI);
		this._translate.use(Global.LANGUAGES.VI);
	}

	ngOnInit() {
		this.router.events.subscribe(event => {
			if (event instanceof NavigationStart) {
				return false;
			}
		})
	}

	get ThemeKey() {
		return this._ThemeService.ThemeKey;
	}
}
