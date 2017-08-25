import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import 'hammerjs';
import { CarouselComponent } from './carousel/carousel.component';
import { LegalreportComponent } from './legalreport/legalreport.component';
import { ArticletagComponent } from './articletag/articletag.component';
import { CarditemComponent } from './carditem/carditem.component';
import {MdCardModule} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    LegalreportComponent,
    ArticletagComponent,
    CarditemComponent
  ],
  imports: [
    MdCardModule,
    BrowserModule,
    NgbModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
