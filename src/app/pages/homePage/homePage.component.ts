import { Component } from '@angular/core';
import { TypewriterComponent } from '../../components/typewriter/typewriter.component';
import { AppNavbarComponent } from '../../components/navbar/navbar.component';
import { IconCloseComponent } from '../../../assets/icons/icons.component';
import { AboutMeComponent } from './about-me/about-me.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    IconCloseComponent,
    AppNavbarComponent,
    TypewriterComponent,
    AboutMeComponent,
  ],
  templateUrl: './homePage.component.html',
  styleUrls: ['./homePage.component.scss']
})

export class HomePageComponent {
}
