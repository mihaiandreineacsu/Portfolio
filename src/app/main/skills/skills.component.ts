import { Component, inject, ElementRef, ViewChild, HostListener } from '@angular/core';
import { TranslationsService } from '../../services/translations.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})

export class SkillsComponent {

  skills: Array<{ img: string, text: string }> = [
    {'img': '../../../assets/img/skills/skill1.png', 'text' :'HTML'},
    {'img': '../../../assets/img/skills/skill2.png', 'text' :'CSS'},
    {'img': '../../../assets/img/skills/skill3.png', 'text' :'JavaScript'},
    {'img': '../../../assets/img/skills/skill4.png', 'text' :'Material Design'},
    {'img': '../../../assets/img/skills/skill5.png', 'text' :'TypeScript'},
    {'img': '../../../assets/img/skills/skill6.png', 'text' :'Angular'},
    {'img': '../../../assets/img/skills/skill7.png', 'text' :'Firebase'},
    {'img': '../../../assets/img/skills/skill8.png', 'text' :'Git'},
    {'img': '../../../assets/img/skills/skill9.png', 'text' :'REST-API'},
    {'img': '../../../assets/img/skills/skill10.png', 'text' :'Scrum'},
    {'img': '../../../assets/img/skills/skill11.png', 'text' :'Growth mindset'},
  ]

  translationData = inject(TranslationsService);
  activeLang: 'en' | 'de' = 'en';

  setActiveLang(lang: 'en' | 'de') {
    this.activeLang = lang;
    this.translationData.setLanguage(lang);  
  }

  getTranslation(key: string): string {
    return this.translationData.getTranslation(key);  
  }

  isBubbleVisible = false;

  @ViewChild('bubbleRef') bubbleRef!: ElementRef;
  openBubble(event: MouseEvent) {
    this.isBubbleVisible = true;
    event.stopPropagation();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.bubbleRef && !this.bubbleRef.nativeElement.contains(event.target)) {
      this.isBubbleVisible = false;
    }
  }
}