import { Component } from '@angular/core';

import { ThemesService } from '@boluclac/plugins';
import { fadeInAnimation } from '@boluclac/animations';

@Component({
	selector: 'main',
	animations: [fadeInAnimation],
	host: { '[@fadeInAnimation]': '' },
	templateUrl: './main.component.html'
})
export class MainComponent {

	constructor(private _ThemeService: ThemesService) { }

	get Theme() {
		return this._ThemeService.Theme;
	}
}