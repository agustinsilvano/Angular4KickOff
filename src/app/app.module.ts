import { FeedComponent } from './feed/feed.component';
import { NewsComponent } from './news/news.component';
import { LandingElementComponent } from './landing-element/landing-element.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LandingCarouselComponent } from './landing-carousel/landing-carousel.component';
import { ContactComponent } from './contact/contact.component';
import { PhoneContactComponent } from './phone-contact/phone-contact.component';
import { WhatsAppContactComponent } from './whats-app-contact/whats-app-contact.component';
import { EmailContactComponent } from './email-contact/email-contact.component';
import { AddFeedComponent } from './add-feed/add-feed.component';
import { FeedDataService } from './services/feeddata.service';
import { CanDeactivateNewGuardService } from './services/can-deactivate-new-guard.service';
import { HttpClientModule } from '@angular/common/http';

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
    EmailContactComponent,
    AddFeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [FeedDataService, CanDeactivateNewGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
