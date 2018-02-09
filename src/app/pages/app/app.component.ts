import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { ThemesService } from '@boluclac/plugins/plugins';
import { fadeInAnimation } from '@boluclac/animations/index';

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
		this._translate.setDefaultLang('vi');
		this._translate.use('vi');
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
