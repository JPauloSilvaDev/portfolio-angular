import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { RevealDirective } from '../../directives/reveal.directive';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <section id="education" class="education-section">
      <div class="container">
        <h2 class="section-title text-gradient reveal">{{ data?.title }}</h2>

        <div class="education-grid">
          <div class="glass-card ed-card reveal delay-1">
            <h3 class="card-title">
              <i class="fas fa-graduation-cap card-icon"></i> {{ data?.edTitle }}
            </h3>
            <div class="ed-item" *ngFor="let ed of data?.items">
              <span class="period">{{ ed.period }}</span>
              <h4 class="course">{{ ed.course }}</h4>
              <p class="institution">{{ ed.institution }}</p>
            </div>
          </div>

          <div class="glass-card ed-card reveal delay-2">
            <h3 class="card-title">
              <i class="fas fa-language card-icon"></i> {{ data?.langTitle }}
            </h3>
            <ul class="lang-list">
              <li class="lang-item" *ngFor="let lang of data?.languages">
                <span class="lang-name">{{ lang.language }}</span>
                <span class="lang-level">{{ lang.proficiency }}</span>
              </li>
            </ul>
          </div>

          <div class="glass-card ed-card reveal delay-3">
            <h3 class="card-title">
              <i class="fas fa-certificate card-icon"></i> {{ data?.certTitle }}
            </h3>
            <ul class="cert-list">
              <li class="cert-item" *ngFor="let cert of data?.certifications">
                <span class="check-icon">★</span>
                {{ cert }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit, OnDestroy {
  public data: any;
  private sub = new Subscription();

  constructor(private langService: LanguageService) {}

  ngOnInit() {
    this.sub = this.langService.language$.subscribe(() => {
      this.data = this.langService.getData().education;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
