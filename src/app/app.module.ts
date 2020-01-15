import { FeedComponent } from './feed/feed.component';
import { NewsComponent } from './news/news.component';
import { LandingElementComponent } from './landing-element/landing-element.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LandingCarouselComponent } from './landing-carousel/landing-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    NotFoundComponent,
    LandingElementComponent,
    LandingCarouselComponent,
    NewsComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'news', component: NewsComponent },
      { path: '', component: LandingCarouselComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
