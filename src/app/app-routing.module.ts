import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NewsComponent } from "./news/news.component";
import { LandingCarouselComponent } from "./landing-carousel/landing-carousel.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
  // { path: "news", component: NewsComponent },
  // { path: "", component: LandingCarouselComponent },
  // { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
