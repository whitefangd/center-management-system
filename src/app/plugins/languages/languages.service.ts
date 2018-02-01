import { Injectable } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class LanguagesService {

	private _translate = TranslateService;

	get translate() {
		return this._translate;
	}
}