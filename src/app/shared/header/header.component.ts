import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { TranslationsService } from '../../services/translations.service';
import { Router, RouterLink } from '@angular/router';
import { AboutmeComponent } from '../../main/aboutme/aboutme.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, AboutmeComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isMobileMenu = false;
  isScrolled = false;

  private router = inject(Router);
  translationData = inject(TranslationsService);
  activeLang: 'en' | 'de' = 'en';

  toggleMobileMenu(event: Event) {
    event.stopPropagation();
    this.isMobileMenu = !this.isMobileMenu;
  }

  setActiveLang(lang: 'en' | 'de') {
    this.activeLang = lang;
    this.translationData.setLanguage(lang);
  }

  getTranslation(key: string): string {
    return this.translationData.getTranslation(key);
  }

  @HostListener('document:click', ['$event'])
  closeMobileMenu() {
    this.isMobileMenu = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset;
    this.isScrolled = window.scrollY > 0; // Schatten erscheint nach 50px Scrollen
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth > 768) {
      // Definiere die Grenze für die Desktop-Ansicht
      this.isMobileMenu = false; // Schließt das Menü, wenn die Breite größer ist
    }
  }

  scrollToSection(sectionId: string) {
    this.isMobileMenu = false; // Schließt das mobile Menü, wenn ein Link geklickt wird

    // Navigiere zur Hauptseite
    this.router.navigate(['/']).then(() => {
      // Verwende setTimeout, um sicherzustellen, dass die Navigation abgeschlossen ist, bevor du scrollst
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          // Berechne die Höhe des Headers
          const headerOffset =
            document.querySelector('#header-container')?.clientHeight || 0;
          const elementPosition =
            element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerOffset; // Berücksichtige die Header-Höhe

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }, 100); // Ein kleiner Delay, um sicherzustellen, dass die Navigation abgeschlossen ist
    });
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
