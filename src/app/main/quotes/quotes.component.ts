import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslationsService } from '../../services/translations.service';

@Component({
  selector: 'app-quotes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.scss',
})
export class QuotesComponent {
  quotesDE: Array<{ text: string; name: string }> = [
    {
      text: 'Ogi hat ein unglaubliches Gespür für sauberes, effizientes Frontend-Design und setzt Projekte immer mit einem hohen Anspruch an Usability um.',
      name: 'Emily R. – Teampartnerin',
    },
    {
      text: 'Wenn es um Angular geht, ist Ogi unser Experte. Er nutzt die neuesten Features optimal und sorgt für sauberen, wartbaren Code.',
      name: 'Max K. – Teampartner',
    },
    {
      text: 'Ogi ist sehr lösungsorientiert und bringt oft innovative Ideen ein, die unsere Projekte auf das nächste Level heben.',
      name: 'Sophia L. – Teampartnerin',
    },
    {
      text: 'Mit Ogi zu arbeiten bedeutet, dass man immer mit einem Auge für Details und einem starken Designbewusstsein rechnen kann.',
      name: 'Alex P. – Teampartner',
    },
    {
      text: 'Ogi behält auch in komplexen Projekten den Überblick und findet immer eine elegante Lösung für jedes Problem.',
      name: 'Laura M. – Teampartnerin',
    },
  ];

  quotesEN: Array<{ text: string; name: string }> = [
    {
      text: 'Ogi has an incredible sense of clean, efficient frontend design and always implements projects with a high focus on usability.',
      name: 'Emily R. – Team Partnerin',
    },
    {
      text: 'When it comes to Angular, Ogi is our expert. He uses the latest features optimally and ensures clean, maintainable code.',
      name: 'Max K. – Team Partner',
    },
    {
      text: 'Ogi is very solution-oriented and often brings innovative ideas that take our projects to the next level.',
      name: 'Sophia L. – Team Partner',
    },
    {
      text: 'Working with Ogi means you can always count on attention to detail and a strong design sense.',
      name: 'Alex P. – Team Partner',
    },
    {
      text: 'Ogi keeps track of even complex projects and always finds an elegant solution for every problem.',
      name: 'Laura M. – Team Partner',
    },
  ];

  currentIndex: number = 0;
  isTransformed = false;

  get visibleQuotes(): Array<{ text: string; name: string }> {
    const total = 5;

    return [
      this.getTranslation((this.currentIndex - 1 + total) % total),
      this.getTranslation(this.currentIndex),
      this.getTranslation((this.currentIndex + 1) % total),
    ];
  }

  transformQuotes() {
    this.isTransformed = true;
  }

  nextQuote(): void {
    this.currentIndex = (this.currentIndex + 1) % this.quotesEN.length;
  }

  prevQuote(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.quotesEN.length) % this.quotesEN.length;
    this.transformQuotes();
  }

  getGeneralTranslation(key: string): string {
    return this.translationData.getTranslation(key);
  }

  translationData = inject(TranslationsService);
  activeLang: 'en' | 'de' = 'en';

  setActiveLang(lang: 'en' | 'de') {
    this.activeLang = lang;
    this.translationData.setLanguage(lang);
  }

  getTranslation(index: number): { text: string; name: string } {
    const quoteKey = `QUOTES.QUOTE${index + 1}`;
    const personKey = `QUOTES.PERSON${index + 1}`;

    const text = this.translationData.getTranslation(quoteKey);
    const name = this.translationData.getTranslation(personKey);

    return { text, name };
  }
}
