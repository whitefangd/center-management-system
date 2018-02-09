import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicModule } from 'ng-dynamic-component';

import { AppComponent } from '@boluclac/pages/app/app.component';
import { AppRoutingModule } from '@boluclac/configs/app-routing.module';
import { Declarations } from '@boluclac/configs/declarations';
import { ThemesService, LanguagesService } from '@boluclac/plugins'
import { UserDetailService } from '@boluclac/common/'
import { LayoutComponent } from '@boluclac/layout/layout.component'
import { ContentComponent } from '@boluclac/components-layout/content/content.component'
import { ComponentsLayout } from '@boluclac/components-layout/'

export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
	declarations: Declarations,
	imports: [
		DynamicModule.withComponents([].concat([ LayoutComponent ], ComponentsLayout)),
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

