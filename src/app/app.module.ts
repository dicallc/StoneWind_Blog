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
import { CallboardComponent } from './callboard/callboard.component';
import {MdTabsModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdListModule} from '@angular/material';
import { RecommendlistComponent } from './recommendlist/recommendlist.component';
import { RightsideComponent } from './rightside/rightside.component';
import { HottagComponent } from './hottag/hottag.component';
import { WebstatisticsComponent } from './webstatistics/webstatistics.component';
import { MainComponent } from './main/main.component';
import {RouterModule, Routes} from '@angular/router';
import { BlogdetailComponent } from './blogdetail/blogdetail.component';
import { FormsModule } from '@angular/forms';
import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';
const routeConfig: Routes = [
  {path: '', component: MainComponent},
  {path: 'detail', component: BlogdetailComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    LegalreportComponent,
    ArticletagComponent,
    CarditemComponent,
    CallboardComponent,
    RecommendlistComponent,
    RightsideComponent,
    HottagComponent,
    WebstatisticsComponent,
    MainComponent,
    BlogdetailComponent
  ],
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    MdCardModule,
    MdTabsModule,
    BrowserModule,
    MdListModule,
    RouterModule.forRoot(routeConfig),
    NgbModule.forRoot(),
    MarkdownToHtmlModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
