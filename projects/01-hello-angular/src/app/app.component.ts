import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
      <h1>If you are reading this...</h1>
      <p>Things have worked out well! 🎉</p>
      <ol>
        <li>Hello</li>
        <li>world</li>
        <li>angular</li>
      </ol>
    `,
  styles: `
  ol {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  `,
})
export class AppComponent {}
