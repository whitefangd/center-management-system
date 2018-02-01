import { Component } from '@angular/core';

import { fadeInAnimation } from '../../animations/index';

@Component({
	selector: 'heroes',
	animations: [fadeInAnimation],
	host: { '[@fadeInAnimation]': '' },
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
	title = 'Heroes';
}
