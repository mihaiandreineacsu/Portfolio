import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { TranslationsService } from '../../services/translations.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isMobileMenu = false;

  toggleMobileMenu(event: Event) {
    event.stopPropagation(); // Verhindert, dass das globale Klick-Event sofort ausgelöst wird
    this.isMobileMenu = !this.isMobileMenu;
  }

  translationData = inject(TranslationsService);

  activeLang: 'en' | 'de' = 'en';

  setActiveLang(lang: 'en' | 'de') {
    this.activeLang = lang;
    this.translationData.setLanguage(lang);  // Aktualisiere die Sprache im Service
  }

  getTranslation(key: string): string {
    return this.translationData.getTranslation(key);  // Übersetzung abrufen
  }

  @HostListener('document:click', ['$event'])
  closeMobileMenu() {
    this.isMobileMenu = false;
  }
}