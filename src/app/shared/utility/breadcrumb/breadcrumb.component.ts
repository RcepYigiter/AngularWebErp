import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../../core/services/breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: Array<{ label: string; url: string }> = [];

  constructor(private breadcrumbService: BreadcrumbService) {}

  ngOnInit(): void {
    this.breadcrumbService.getBreadcrumbs().subscribe((breadcrumbs) => {
      this.breadcrumbs = breadcrumbs;
      console.log(breadcrumbs)
    });
  }
}
