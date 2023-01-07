import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { NebularModule } from './modules/nebular/nebular.module';
import { CardsComponent } from './components/cards/cards.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    CardsComponent
  ],
  imports: [
    NebularModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
