import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  links: Array<{ text: string, link: string, target: string }> = [
    {
      text: 'Github',
      link: 'https://github.com/OgulcanErdag',
      target: '_blank',
    },
    {
      text: 'LinkedIn',
      link: 'https://www.linkedin.com/in/ogulcan-erdag-73579b276/',
      target: '_blank',
    },
    { text: 'Email', link: 'mailto:info@ogulcan-erdag.com', target: '_blank' },
    { text: 'Impressum', link: '#', target: '' },
  ]

}