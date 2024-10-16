import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  links: Array<{ text: string; link: string; target: string }> = [
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
    { text: 'Email', link: 'mailto:info@ogulcan-erdag.com', target: '' },
    { text: 'Impressum', link: '#', target: '' },
  ];

  hideEmailAndImpressumButtons: boolean = false;
  currentUrl!: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.checkCurrentRoute();
    });
  }

  checkCurrentRoute() {
    this.currentUrl = this.router.url;
    this.hideEmailAndImpressumButtons = this.currentUrl.includes('/impressum');
  }

  scrollToInput(name: string) {
    if (this.router.url.includes('/privacy')) {
      this.router.navigateByUrl('/').then((onfulfilled) => {
        if (onfulfilled) {
          setTimeout(() => this.scrollToInput(name), 100);
        }
      })
    }
    const inputElement = document.getElementById(name);
    if (!inputElement) return;

    inputElement.scrollIntoView({ behavior: 'smooth', block: 'center' });

    setTimeout(() => {
      inputElement.focus();
      inputElement.classList.add('highlight');

      setTimeout(() => {
        inputElement.classList.remove('highlight');
      }, 2000);
    }, 500);

  }
}
