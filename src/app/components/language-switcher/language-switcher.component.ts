import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button class="lang-switcher" (click)="toggleLang()" aria-label="Toggle Language">
      <span class="lang-text" [class.active]="currentLang === 'pt'">PT</span>
      <span class="lang-divider">|</span>
      <span class="lang-text" [class.active]="currentLang === 'en'">EN</span>
    </button>
  `,
  styleUrls: ['./language-switcher.component.css']
})
export class LanguageSwitcherComponent implements OnInit, OnDestroy {
  public currentLang: 'pt' | 'en' = 'pt';
  private sub: Subscription = new Subscription();

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.sub = this.languageService.language$.subscribe(lang => {
      this.currentLang = lang;
    });
  }

  toggleLang() {
    this.languageService.toggleLanguage();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
