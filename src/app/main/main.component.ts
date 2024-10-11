import { Component, inject, Renderer2 } from '@angular/core';
import { StartComponent } from './start/start.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SkillsComponent } from "./skills/skills.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ContactComponent } from './contact/contact.component';
import { QuotesComponent } from './quotes/quotes.component';
import { CommonModule } from '@angular/common';
import { TranslationsService } from '../services/translations.service';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [StartComponent, CommonModule, AboutmeComponent, SkillsComponent, ProjectsComponent, ContactComponent, QuotesComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})

export class MainComponent {

  constructor(private renderer: Renderer2) {}

  projects = [
    {
      number: '01',
      name: 'Join',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      skills: ['CSS', 'HTML', 'JavaScript'],
      imageUrl: '../../assets/img/preview_join.png',
      githubLink: 'https://github.com/OgulcanErdag/Join.git',
      liveLink: 'http://join.ogulcan-erdag.com/'
    },
    {
      number: '02',
      name: 'DABubble',
      description: 'As soon as the project is published, the description will also be made public. ',
      skills: ['CSS', 'HTML', 'TypeScript', 'Angular', 'Firebase'],
      imageUrl: '../../assets/img/preview_dabubble.png',
      githubLink: 'https://github.com/OgulcanErdag/DABubble.git',
      liveLink: 'http://dabubble.ogulcan-erdag.com/'
    },
    {
      number: '03',
      name: 'El Pollo Loco',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      skills: ['CSS', 'HTML', 'Angular', 'TypeScript'],
      imageUrl: '../../assets/img/preview_pollo.png',
      githubLink: 'https://github.com/OgulcanErdag/El_Pollo_Loco.git',
      liveLink: 'http://el-pollo-loco.ogulcan-erdag.com/'
    }
  ];

  currentProjectIndex = 0;
  isProjectLayerVisible = false;

  showLayer(projectIndex: number) {
    this.currentProjectIndex = projectIndex;
    this.isProjectLayerVisible = true;
    this.renderer.addClass(document.body, 'no-scroll');
  }

  hideLayer() {
    this.isProjectLayerVisible = false;
  }

  nextProject() {
    if (this.currentProjectIndex < this.projects.length - 1) {
      this.currentProjectIndex++;
    } else {
      this.currentProjectIndex = 0;
    }
  }

  previousProject() {
    if (this.currentProjectIndex > 0) {
      this.currentProjectIndex--;
    } else {
      this.currentProjectIndex = this.projects.length - 1;
    }
  }

  get currentProject() {
    return this.projects[this.currentProjectIndex];
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