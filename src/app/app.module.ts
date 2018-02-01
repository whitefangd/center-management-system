import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './pages/app/app.component';
import { AppRoutingModule } from './configs/app-routing.module';
import { Declarations } from './configs/declarations';
import { ThemesService, LanguagesService } from './plugins/plugins'
import { UserDetailService } from './common/common'

export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
	declarations: Declarations,
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient]
			}
		}),
		BrowserAnimationsModule
	],
	providers: [
		ThemesService,
		LanguagesService,
		UserDetailService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }

