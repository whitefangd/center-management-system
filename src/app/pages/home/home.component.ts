import { Component } from '@angular/core';

import { ThemesService } from '@boluclac/plugins/plugins';
import { fadeInAnimation } from '@boluclac/animations/index';
import { ContentComponent } from '@boluclac/components-layout/content/content.component';

const LayoutPage = {
	Type: 1,
	PartitionTop: {
		Type: 2,
		ComponentContent: ContentComponent,
	},
	PartitionLeft: {
		Type: 2,
		ComponentContent: ContentComponent,
	},
	PartitionBottom: {
		Type: 2,
		ComponentContent: ContentComponent,
	},
	PartitionRight: {
		Type: 2,
		ComponentContent: ContentComponent,
	},
	PartitionContent: {
		Type: 1,
		PartitionContent: {
			Type: 2,
			ComponentContent: ContentComponent,
		},
	}
}


@Component({
	selector: 'home',
	animations: [fadeInAnimation],
	host: { '[@fadeInAnimation]': '' },
	templateUrl: './home.component.html'
})
export class HomeComponent {

	constructor(private _ThemeService: ThemesService) {	}

	public get LayoutPage() {
		return LayoutPage;
	}

	public get Theme() {
		return this._ThemeService.Theme;
	}

	public get Partitions() {
		return LayoutPage;
	}
}