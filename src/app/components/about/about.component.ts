import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="about-section" #aboutSection>
      <div class="container">
        <h2 class="section-title text-gradient reveal">{{ data?.nav?.about }}</h2>
        
        <div class="about-content">
          <div class="glass-card about-card reveal delay-1">
            <p class="profile-text">{{ personalInfo?.profile }}</p>
            <div class="location-info">
              <span class="location-icon">📍</span> {{ personalInfo?.location }}
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('aboutSection') aboutSection!: ElementRef;
  
  public data: any;
  public personalInfo: any;
  private sub = new Subscription();
  private observer!: IntersectionObserver;

  constructor(private langService: LanguageService) {}

  ngOnInit() {
    this.sub = this.langService.language$.subscribe(() => {
      const fullData = this.langService.getData();
      this.data = fullData;
      this.personalInfo = fullData.personalInfo;
    });
  }

  ngAfterViewInit() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.2 });

    const elements = this.aboutSection.nativeElement.querySelectorAll('.reveal');
    elements.forEach((el: any) => this.observer.observe(el));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
