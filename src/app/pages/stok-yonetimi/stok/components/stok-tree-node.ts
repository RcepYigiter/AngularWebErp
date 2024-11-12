import { Component, Input } from '@angular/core';
import { Node } from '../stok-karti/stok-karti.component';

@Component({
  selector: 'app-tree-node',
  template: `
    <div *ngIf="node">
      <!-- Düğüm adı ve toggle için tıklanabilir alan -->
      <span class="hover:bg-slate-200 px-2 block hover:text-cyan-700 text-slate-700 font-semibold"  (click)="toggleExpand(node)">
        @if (node.children!=null||undefined?node.children.length > 0:false) {
        <span>
          @if (node.expanded) {<i class="fa-solid fa-sort-down"></i>} @else{
          <i class="fa-solid fa-caret-right"></i>
          }
        </span>
        } @else {
        <span class="hover:bg-slate-200 px-2 hover:text-cyan-700 text-slate-700 font-semibold"> <i class="fa-solid fa-file"></i></span>
        }

        {{ node.name }}
      </span>

      <!-- Eğer node.expanded true ise, alt düğümleri listele -->
      <ul *ngIf="node.expanded" >
        <ng-container *ngFor="let child of node.children">
          <li >
            <app-tree-node [node]="child"></app-tree-node>
          </li>
        </ng-container>
      </ul>
    </div>
  `,
  styleUrl: './css/stok-tree-view.css',
})
export class TreeViewComponent {
  @Input() node: Node; // Her düğüm, parent bileşenden alınır
  toggleExpand(node: Node): void {
    if (node.children) {
      node.expanded = !node.expanded;
    }
  }
}
