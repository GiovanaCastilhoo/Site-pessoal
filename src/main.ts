import { bootstrapApplication } from "@angular/platform-browser";
import { HomePageComponent } from "./app/pages/homePage/homePage.component";

bootstrapApplication(HomePageComponent)
  .catch((err) => console.error(err));