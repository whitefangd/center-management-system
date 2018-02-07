import { AppHeaderComponent } from './../components/app-header/app-header.component';
import { AppFooterComponent } from './../components/app-footer/app-footer.component';
import { ChangeThemeComponent } from './../components/change-theme/change-theme.component';
import { LoginInfoComponent } from './../components/login-info/login-info.component';
import { LoginLogoComponent } from './../components/login-logo/login-logo.component';

import { LayoutComponent } from './../layout/layout.component';
import { ContentComponent } from './../layout/content.component';

import { AppComponent } from './../pages/app/app.component';
import { LoginComponent } from './../pages/login/login.component';
import { RegisterComponent } from './../pages/register/register.component';
import { ForgetPasswordComponent } from './../pages/forget-password/forget-password.component';
import { MainComponent } from './../pages/main/main.component';
import { HomeComponent } from './../pages/home/home.component';
import { HeroesComponent } from './../pages/heroes/heroes.component';


export const Declarations = [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    LoginComponent,
    MainComponent,
    HeroesComponent,
    ChangeThemeComponent,
    LoginInfoComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    LoginLogoComponent,
    HomeComponent,

    LayoutComponent,
    ContentComponent
];