import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from '@boluclac/pages/heroes/heroes.component';
import { LoginComponent } from '@boluclac/pages/login/login.component';
import { RegisterComponent } from '@boluclac/pages/register/register.component';
import { ForgetPasswordComponent } from '@boluclac/pages/forget-password/forget-password.component';
import { MainComponent } from '@boluclac/pages/main/main.component';
import { HomeComponent } from '@boluclac/pages/home/home.component';

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
