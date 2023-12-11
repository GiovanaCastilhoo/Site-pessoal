// typing-effect.component.ts
import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-typewriter',
  standalone: true,
  template: '<span #typewriter></span>',
  styleUrls: ['./typewriter.component.scss']
})
export class TypewriterComponent implements AfterViewInit, OnDestroy {
  @ViewChild('typewriter') typewriter?: ElementRef;

  private typed!: Typed;

  ngAfterViewInit() {
    if (this.typewriter?.nativeElement) {
      this.typed = new Typed(this.typewriter.nativeElement, {
        strings: ['Front-end Developer'],
        typeSpeed: 100,
        backSpeed: 50,
        startDelay: 500,
        backDelay: 1500,
        loop: true,
      });
    } else {
      console.error('ElementRef is undefined.');
    }
  }
  ngOnDestroy() {
    if (this.typed) {
      this.typed.destroy();
    }
  }
}
