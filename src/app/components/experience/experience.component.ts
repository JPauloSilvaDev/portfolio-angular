import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="experience-section" #experienceSection>
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
export class ExperienceComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('experienceSection') experienceSection!: ElementRef;
  
  public data: any;
  private sub = new Subscription();
  private observer!: IntersectionObserver;

  constructor(private langService: LanguageService) {}

  ngOnInit() {
    this.sub = this.langService.language$.subscribe(() => {
      this.data = this.langService.getData().experience;
    });
  }

  ngAfterViewInit() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    setTimeout(() => {
      const elements = this.experienceSection.nativeElement.querySelectorAll('.reveal');
      elements.forEach((el: any) => this.observer.observe(el));
    }, 100);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    if (this.observer) this.observer.disconnect();
  }
}
