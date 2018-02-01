import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './../pages/heroes/heroes.component';
import { LoginComponent } from './../pages/login/login.component';
import { RegisterComponent } from './../pages/register/register.component';
import { ForgetPasswordComponent } from './../pages/forget-password/forget-password.component';
import { MainComponent } from './../pages/main/main.component';
import { HomeComponent } from './../pages/home/home.component';

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
