import { Component } from '@angular/core';

@Component({
  selector: 'app-framework-switcher',
  standalone: true,
  template: `
    <div class="framework-switcher">
      <a href="https://JPauloSilvaDev.github.io/portfolio-react" target="_blank" rel="noopener noreferrer" class="framework-link inactive" title="Switch to React Version">
        <i class="devicon-react-original framework-icon react"></i>
        <span>React</span>
      </a>
      <span class="framework-divider">|</span>
      <a href="#" class="framework-link active" title="Current: Angular" (click)="$event.preventDefault()">
        <i class="devicon-angularjs-plain framework-icon angular"></i>
        <span>Angular</span>
      </a>
    </div>
  `,
  styleUrls: ['./framework-switcher.component.css']
})
export class FrameworkSwitcherComponent {}
