import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslationsService } from '../../services/translations.service';

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss'
})
export class ImpressumComponent {
  translationData = inject(TranslationsService);
  private router = inject(Router);
  activeLang: 'en' | 'de' = 'en';

  setActiveLang(lang: 'en' | 'de') {
    this.activeLang = lang;
    this.translationData.setLanguage(lang);
  }

  getTranslation(key: string): string {
    return this.translationData.getTranslation(key);
  }

  scrollToSection(sectionId: string): void {
    this.router.navigate(['/']).then(() => { // Zur Hauptseite navigieren
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = document.querySelector('#header-container')?.clientHeight || 0;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  }
}