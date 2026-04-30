import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { RevealDirective } from '../../directives/reveal.directive';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <section id="experience" class="experience-section">
      <div class="container">
        <h2 class="section-title text-gradient">{{ data?.title }}</h2>
        
        <div class="timeline">
          <div class="timeline-item reveal" *ngFor="let job of data?.items; let i = index" [ngClass]="{'left-item': i % 2 === 0, 'right-item': i % 2 !== 0}">
            <div class="timeline-dot"></div>
            <div class="glass-card timeline-content">
              <span class="period">{{ job.period }}</span>
              <h3 class="role">{{ job.role }}</h3>
              <h4 class="company">{{ job.company }}</h4>
              
              <div class="job-details">
                <p class="description">
                  <strong>{{ job.situationLabel }}</strong>
                  {{ job.description }}
                </p>
                <p class="results">
                  <strong>{{ job.resultLabel }}</strong>
                  {{ job.results }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit, OnDestroy {
  public data: any;
  private sub = new Subscription();

  constructor(private langService: LanguageService) {}

  ngOnInit() {
    this.sub = this.langService.language$.subscribe(() => {
      this.data = this.langService.getData().experience;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
