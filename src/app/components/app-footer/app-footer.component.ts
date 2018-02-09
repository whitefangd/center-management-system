import { Component } from '@angular/core';
import { ThemesService } from '@boluclac/plugins';

@Component({
	selector: 'app-footer',
	templateUrl: './app-footer.component.html'
})
export class AppFooterComponent {

	constructor(private _ThemeService: ThemesService) { }

	public CardTheme() {
		return 'card mb-3 bg-' + this.Theme.Background + ' text-' + this.Theme.Text;
	}

	get Theme() {
		return this._ThemeService.Theme;
	}
}