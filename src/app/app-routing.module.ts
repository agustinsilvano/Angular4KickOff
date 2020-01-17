import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { LandingCarouselComponent } from './landing-carousel/landing-carousel.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { CanDeactivateNewGuardService } from './services/can-deactivate-new-guard.service';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  {
    path: 'news',
    component: NewsComponent,
    canDeactivate: [CanDeactivateNewGuardService]
  },
  { path: '', component: LandingCarouselComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
