import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  private breadcrumbs: Array<{ label: string, url: string }> = [];
  private breadcrumbsSubject = new BehaviorSubject<Array<{ label: string, url: string }>>([]);

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    // NavigationEnd eventi ile router'ın URL değişimlerini takip et
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.createBreadcrumbs(this.activatedRoute.root);
    });
  }

  private createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: Array<{ label: string, url: string }> = []): void {
    const children: ActivatedRoute[] = route.children;
    if (children.length === 0) {
      this.breadcrumbs = breadcrumbs;
      this.breadcrumbsSubject.next(this.breadcrumbs);
      return;
    }

    // Lazy loading modülleri işle
    for (const child of children) {
      const routeURL: any = child.snapshot.url;
      console.log(routeURL)
      if (routeURL !== '') {
        const newBreadcrumbs = [...breadcrumbs, { label: child.snapshot.data['breadcrumb'], url: url + '/' + routeURL }];
        this.createBreadcrumbs(child, url + '/' + routeURL, newBreadcrumbs);
      }
    }



  }


  // getCurrentPath(): void {
  //   this.router.events
  //     .pipe(filter((event) => event instanceof NavigationEnd))
  //     .subscribe((event: NavigationEnd) => {
  //       this.currentPath = event.urlAfterRedirects;
       

        

  //       this.pathList = this.currentPath.slice(1).split('/');
  //       if (!this.pathList.includes('')) {
  //         this.pathList.unshift('');
  //       }
  //     });
  // }
  getBreadcrumbs() {
    return this.breadcrumbsSubject.asObservable();
  }
}