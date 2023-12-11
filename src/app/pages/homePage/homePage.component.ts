import { Component } from '@angular/core';
import { TypewriterComponent } from '../../components/typewriter/typewriter.component';
import { AppNavbarComponent } from '../../components/navbar/navbar.component';
import { IconCloseComponent } from '../../../assets/icons/icons.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    IconCloseComponent,
    AppNavbarComponent,
    TypewriterComponent],
  templateUrl: './homePage.component.html',
  styleUrls: ['./homePage.component.scss']
})

export class HomePageComponent {
}
