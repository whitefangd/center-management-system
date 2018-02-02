import { Component } from '@angular/core';

import { ThemesService } from './../../plugins/plugins';
import { fadeInAnimation } from '../../animations/index';

const LayoutPage = {
	Parts : [
		{
			Top: '',
			Left: '',
			Right:'',
			Bottom:'',
			Content:'',
		},
		{
			Top: '',
			Left: '',
			Right:'',
			Bottom:'',
			Content:'',
		},
		{
			Top: '',
			Left: '',
			Right:'',
			Bottom:'',
			Content:'',
		}
	]
}


@Component({
	selector: 'home',
	animations: [fadeInAnimation],
	host: { '[@fadeInAnimation]': '' },
	templateUrl: './home.component.html'
})
export class HomeComponent {

	constructor(private _ThemeService: ThemesService) { }

	public get LayoutPage() {
		return LayoutPage;
	}

	public get Theme() {
		return this._ThemeService.Theme;
	}
}