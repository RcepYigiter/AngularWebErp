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
        this.currentPath.slice(1);

        this.pathList = this.currentPath.slice(1).split('/');
        if (!this.pathList.includes('')) {
          this.pathList.unshift('');
        }
      });
  }
}
