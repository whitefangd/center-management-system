import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {
	HomeComponent,
	LoginComponent,
	RegisterComponent,
	ForgetPasswordComponent,
	MainComponent,
	HeroesComponent
} from '@boluclac/pages';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'forget-password', component: ForgetPasswordComponent },
	{
		path: 'main',
		component: MainComponent,
		children: [
			{ path: 'home', component: HeroesComponent }
		]
	}
];

@NgModule({
	exports: [RouterModule],
	imports: [RouterModule.forRoot(routes, { useHash: true })],
})
export class AppRoutingModule { }
