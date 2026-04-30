import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { RevealDirective } from '../../directives/reveal.directive';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <section id="about" class="about-section">
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
export class AboutComponent implements OnInit, OnDestroy {
  public data: any;
  public personalInfo: any;
  private sub = new Subscription();

  constructor(private langService: LanguageService) {}

  ngOnInit() {
    this.sub = this.langService.language$.subscribe(() => {
      const fullData = this.langService.getData();
      this.data = fullData;
      this.personalInfo = fullData.personalInfo;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
