import { Component, Inject, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Route,
  Router,
  Routes,
} from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  currentPath: string;
  pathList: string[];
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.getCurrentPath();
  }

  getCurrentPath(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentPath = event.urlAfterRedirects;
       

        

        this.pathList = this.currentPath.slice(1).split('/');
        if (!this.pathList.includes('')) {
          this.pathList.unshift('');
        }
      });
  }

  moduls = [
    {
      modul: 'Muhasebe',
      icon: 'fa-solid fa-receipt',
      class: 'text-slate-600 text-2xl group-hover:text-cyan-700',
      href: '',
    },
    {
      modul: 'Stok',
      icon: 'fa-solid fa-cubes',
      class: 'text-slate-600 text-2xl group-hover:text-cyan-700',
      href: 'stok-yonetimi',
    },
    {
      modul: 'Finans',
      icon: 'fa-solid fa-coins',
      class: 'text-slate-600 text-2xl group-hover:text-cyan-700',
      href: '',
    },
    {
      modul: 'Satış',
      icon: 'fa-solid fa-share-from-square',
      class: 'text-slate-600 text-2xl group-hover:text-cyan-700',
      href: '',
    },
    {
      modul: 'Satınalma',
      icon: 'fa-solid fa-shop',
      class: 'text-slate-600 text-2xl group-hover:text-cyan-700',
      href: '',
    },
    {
      modul: 'Üretim',
      icon: 'fa-solid fa-industry',
      class: 'text-slate-600 text-2xl group-hover:text-cyan-700',
      href: '',
    },
    {
      modul: 'Personel',
      icon: 'fa-solid fa-users',
      class: 'text-slate-600 text-2xl group-hover:text-cyan-700',
      href: 'personel',
    },
  ];
}
