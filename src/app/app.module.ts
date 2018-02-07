import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicModule } from 'ng-dynamic-component';

import { AppComponent } from './pages/app/app.component';
import { AppRoutingModule } from './configs/app-routing.module';
import { Declarations } from './configs/declarations';
import { ThemesService, LanguagesService } from './plugins/plugins'
import { UserDetailService } from './common/common'
import { LayoutComponent } from './layout/layout.component'
import { ContentComponent } from './layout/content.component'

export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
	declarations: Declarations,
	imports: [
		DynamicModule.withComponents([LayoutComponent, ContentComponent]),
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

