import { Injectable } from '@angular/core';
import { translations } from '../translations/translations';
import { TranslationStructure } from '../models/translation.interface'

@Injectable({
  providedIn: 'root'
})
export class TranslationsService {
  private translations: { en: TranslationStructure; de: TranslationStructure } = translations;
  private currentLanguage: 'en' | 'de' = 'en';

  setLanguage(lang: 'en' | 'de') {
    this.currentLanguage = lang;
  }

  getTranslation(key: string): any {
    return key.split('.').reduce((o: any, i) => o?.[i], this.translations[this.currentLanguage]);
  }
}