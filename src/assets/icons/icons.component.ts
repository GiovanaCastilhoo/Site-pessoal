import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-close',
  standalone: true,
  template: `<svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 352 512" [attr.fill]="hover ? hoverColor : color"
  (mouseenter)="hover = true"
  (mouseleave)="hover = false" >
    <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
    <path d="M242.7 256l100.1-100.1c12.3-12.3 12.3-32.2 0-44.5l-22.2-22.2c-12.3-12.3-32.2-12.3-44.5 0L176 189.3 75.9 89.2c-12.3-12.3-32.2-12.3-44.5 0L9.2 111.5c-12.3 12.3-12.3 32.2 0 44.5L109.3 256 9.2 356.1c-12.3 12.3-12.3 32.2 0 44.5l22.2 22.2c12.3 12.3 32.2 12.3 44.5 0L176 322.7l100.1 100.1c12.3 12.3 32.2 12.3 44.5 0l22.2-22.2c12.3-12.3 12.3-32.2 0-44.5L242.7 256z"/></svg>`,
  styleUrls: ['./icons.component.scss'],
})

export class IconCloseComponent {
  @Input() color: string = '#fff';
  @Input() hoverColor: string =  '#fff';
  hover: boolean = false;
}