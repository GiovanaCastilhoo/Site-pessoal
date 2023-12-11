import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IconCloseComponent } from '../../../assets/icons/icons.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports:[CommonModule, IconCloseComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})

export class AppNavbarComponent {
  isNavbarOpen = false;
  selectedNavItem: string = 'Home';

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  selectNavItem(item: string): void {
    this.selectedNavItem = item;
  }

}
