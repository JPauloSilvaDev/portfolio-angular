import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { portfolioData } from '../data';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage = new BehaviorSubject<'pt' | 'en'>('pt');
  public language$ = this.currentLanguage.asObservable();

  constructor() {
    this.detectBrowserLanguage();
  }

  private detectBrowserLanguage(): void {
    const browserLang = navigator.language;
    if (browserLang.toLowerCase().includes('pt')) {
      this.currentLanguage.next('pt');
    } else {
      this.currentLanguage.next('en');
    }
  }

  public setLanguage(lang: 'pt' | 'en'): void {
    this.currentLanguage.next(lang);
  }

  public toggleLanguage(): void {
    const nextLang = this.currentLanguage.value === 'pt' ? 'en' : 'pt';
    this.currentLanguage.next(nextLang);
  }

  public getData() {
    return portfolioData[this.currentLanguage.value];
  }

  public getCurrentLanguage() {
    return this.currentLanguage.value;
  }
}
