import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="skills-section" #skillsSection>
      <div class="container">
        <h2 class="section-title text-gradient reveal">{{ data?.title }}</h2>

        <div class="skills-grid">
          <div class="glass-card skill-category reveal" *ngFor="let category of data?.hard; let i = index" [style.transition-delay]="(i * 0.1) + 's'">
            <h3 class="category-title">{{ category.category }}</h3>
            <div class="tech-list">
              <div class="tech-item" *ngFor="let tech of category.tech">
                <div class="tech-icon">
                  <i [class]="getIconClass(tech)" [style.color]="getIconColor(tech)"></i>
                </div>
                <span class="tech-name">{{ tech }}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="glass-card soft-skills-card reveal delay-2">
          <h3 class="category-title">{{ data?.softTitle }}</h3>
          <ul class="soft-skills-list">
            <li class="soft-skill-item" *ngFor="let skill of data?.soft">
              <span class="check-icon">✓</span>
              {{ skill }}
            </li>
          </ul>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('skillsSection') skillsSection!: ElementRef;
  
  public data: any;
  private sub = new Subscription();
  private observer!: IntersectionObserver;

  constructor(private langService: LanguageService) {}

  ngOnInit() {
    this.sub = this.langService.language$.subscribe(() => {
      this.data = this.langService.getData().skills;
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
      const elements = this.skillsSection.nativeElement.querySelectorAll('.reveal');
      elements.forEach((el: any) => this.observer.observe(el));
    }, 100);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    if (this.observer) this.observer.disconnect();
  }

  getIconClass(tech: string): string {
    const t = tech.toLowerCase();
    if (t.includes('c#')) return 'devicon-csharp-plain';
    if (t.includes('.net') || t.includes('asp.net')) return 'devicon-dot-net-plain-wordmark';
    if (t.includes('angular')) return 'devicon-angularjs-plain';
    if (t.includes('react')) return 'devicon-react-original';
    if (t.includes('javascript')) return 'devicon-javascript-plain';
    if (t.includes('jquery')) return 'devicon-jquery-plain';
    if (t.includes('docker')) return 'devicon-docker-plain';
    if (t.includes('kubernetes')) return 'devicon-kubernetes-plain';
    if (t.includes('azure')) return 'devicon-azure-plain';
    if (t.includes('sql server')) return 'devicon-microsoftsqlserver-plain';
    if (t.includes('mysql')) return 'devicon-mysql-plain';
    if (t.includes('mongodb')) return 'devicon-mongodb-plain';
    if (t.includes('blazor') || t.includes('razor')) return 'fas fa-code';
    if (t.includes('entity') || t.includes('dapper')) return 'fas fa-database';
    if (t.includes('api') || t.includes('micro')) return 'fas fa-server';
    if (t.includes('xunit') || t.includes('selenium')) return 'fas fa-vial';
    if (t.includes('elastic')) return 'fas fa-search';
    return 'fas fa-code';
  }

  getIconColor(tech: string): string {
    const t = tech.toLowerCase();
    if (t.includes('c#')) return '#239120';
    if (t.includes('.net') || t.includes('asp.net')) return '#512bd4';
    if (t.includes('angular')) return '#dd0031';
    if (t.includes('react')) return '#61dafb';
    if (t.includes('javascript')) return '#f7df1e';
    if (t.includes('jquery')) return '#0769ad';
    if (t.includes('docker')) return '#2496ed';
    if (t.includes('kubernetes')) return '#326ce5';
    if (t.includes('azure')) return '#0089d6';
    if (t.includes('sql server')) return '#cc292b';
    if (t.includes('mysql')) return '#4479a1';
    if (t.includes('mongodb')) return '#47a248';
    return '#f8fafc';
  }
}
