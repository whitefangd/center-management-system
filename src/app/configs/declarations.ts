import { AppHeaderComponent } from '@boluclac/components/app-header/app-header.component';
import { AppFooterComponent } from '@boluclac/components/app-footer/app-footer.component';
import { ChangeThemeComponent } from '@boluclac/components/change-theme/change-theme.component';
import { LoginInfoComponent } from '@boluclac/components/login-info/login-info.component';
import { LoginLogoComponent } from '@boluclac/components/login-logo/login-logo.component';
import { ChangeLanguageComponent } from '@boluclac/components/change-language/change-language.component';

import { LayoutComponent } from '@boluclac/layout/layout.component';
import { ContentComponent } from '@boluclac/components-layout/content/content.component';

import { AppComponent } from '@boluclac/pages/app/app.component';
import { LoginComponent } from '@boluclac/pages/login/login.component';
import { RegisterComponent } from '@boluclac/pages/register/register.component';
import { ForgetPasswordComponent } from '@boluclac/pages/forget-password/forget-password.component';
import { MainComponent } from '@boluclac/pages/main/main.component';
import { HomeComponent } from '@boluclac/pages/home/home.component';
import { HeroesComponent } from '@boluclac/pages/heroes/heroes.component';


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
    ChangeLanguageComponent,

    LayoutComponent,
    ContentComponent
];