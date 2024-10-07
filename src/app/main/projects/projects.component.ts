import { CommonModule } from '@angular/common';
import { Component, inject, EventEmitter, Output } from '@angular/core';
import { TranslationsService } from '../../services/translations.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})

export class ProjectsComponent {

  @Output() projectClicked = new EventEmitter<number>();

  projects = [
    { id: 0, name: 'Join' },
    { id: 1, name: 'DaBubble' },
    { id: 1, name: 'El Pollo Loco' }
  ];

  onProjectClick(projectIndex: number) {
    this.projectClicked.emit(projectIndex);  // Event nach oben senden
  }

  hoveredIndex: number | null = null;

  previews: string[] = [
    '../../../assets/img/preview_join.png',
    '../../../assets/img/preview_dabubble.png',
    '../../../assets/img/preview_pollo.png',
  ];

  setHoveredIndex(index: number | null) {
    this.hoveredIndex = index;
  }

  translationData = inject(TranslationsService);
  activeLang: 'en' | 'de' = 'en';

  setActiveLang(lang: 'en' | 'de') {
    this.activeLang = lang;
    this.translationData.setLanguage(lang);  
  }

  getTranslation(key: string): string {
    return this.translationData.getTranslation(key);  
  }
}
