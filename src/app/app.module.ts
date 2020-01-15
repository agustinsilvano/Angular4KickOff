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
import { ContactComponent } from './contact/contact.component';
import { PhoneContactComponent } from './phone-contact/phone-contact.component';
import { WhatsAppContactComponent } from './whats-app-contact/whats-app-contact.component';
import { EmailContactComponent } from './email-contact/email-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    NotFoundComponent,
    LandingElementComponent,
    LandingCarouselComponent,
    NewsComponent,
    FeedComponent,
    ContactComponent,
    PhoneContactComponent,
    WhatsAppContactComponent,
    EmailContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'contact', component: ContactComponent },
      { path: 'news', component: NewsComponent },
      { path: '', component: LandingCarouselComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
