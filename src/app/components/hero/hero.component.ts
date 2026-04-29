import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero-section">
      <div class="container hero-container">
        <div class="hero-content fade-in-up">
          <h2 class="greeting delay-1">{{ data?.greeting }}</h2>
          <h1 class="name text-gradient delay-2">{{ data?.name }}</h1>
          <h3 class="title delay-3">{{ data?.title }}</h3>
          
          <div class="social-links delay-4">
            <a [href]="data?.github" target="_blank" rel="noopener noreferrer" class="social-icon">
              <i class="fab fa-github"></i>
            </a>
            <a [href]="data?.linkedin" target="_blank" rel="noopener noreferrer" class="social-icon">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a [href]="'mailto:' + data?.email" class="social-icon">
              <i class="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, OnDestroy {
  public data: any;
  private sub = new Subscription();

  constructor(private langService: LanguageService) {}

  ngOnInit() {
    this.sub = this.langService.language$.subscribe(() => {
      this.data = this.langService.getData().personalInfo;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
