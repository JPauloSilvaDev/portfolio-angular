import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from './services/language.service';
import { Subscription } from 'rxjs';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { FrameworkSwitcherComponent } from './components/framework-switcher/framework-switcher.component';
import { LanguageSwitcherComponent } from './components/language-switcher/language-switcher.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    HeroComponent, 
    AboutComponent, 
    SkillsComponent, 
    ExperienceComponent, 
    EducationComponent,
    FrameworkSwitcherComponent,
    LanguageSwitcherComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  public currentData: any;
  private langSub: Subscription;
  public currentYear = new Date().getFullYear();

  constructor(private languageService: LanguageService) {
    this.langSub = new Subscription();
  }

  ngOnInit() {
    this.langSub = this.languageService.language$.subscribe(() => {
      this.currentData = this.languageService.getData();
    });
  }

  ngOnDestroy() {
    this.langSub.unsubscribe();
  }
}
