import { Component } from '@angular/core';

import { ThemesService } from './../../plugins/plugins';
import { fadeInAnimation } from '../../animations/index';

@Component({
	selector: 'home',
	animations: [fadeInAnimation],
	host: { '[@fadeInAnimation]': '' },
	templateUrl: './home.component.html'
})
export class HomeComponent {

	constructor(private _ThemeService: ThemesService) { }

	get Theme() {
		return this._ThemeService.Theme;
	}
}