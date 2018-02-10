import { Component } from '@angular/core';

import { Global } from '@boluclac/common';
import { ThemesService } from '@boluclac/plugins';
import { fadeInAnimation } from '@boluclac/animations';
import { ContentComponent } from '@boluclac/components-layout';

const PartitionType = Global.PartitionType;

const LayoutPage = {
	Type: PartitionType.GRID,
	PartitionTop: {
		Type: PartitionType.COMPONENT,
		ComponentContent: ContentComponent,
	},
	PartitionLeft: {
		Type: PartitionType.COMPONENT,
		ComponentContent: ContentComponent,
	},
	PartitionBottom: {
		Type: PartitionType.COMPONENT,
		ComponentContent: ContentComponent,
	},
	PartitionRight: {
		Type: PartitionType.COMPONENT,
		ComponentContent: ContentComponent,
	},
	PartitionContent: {
		Type: PartitionType.GRID,
		PartitionContent: {
			Type: PartitionType.COMPONENT,
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

	constructor(private _ThemeService: ThemesService) { }

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