import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StokComponent } from './stok.component';
import { StokKartiComponent } from './stok-karti/stok-karti.component';
import { NzTreeViewModule } from 'ng-zorro-antd/tree-view';
import { RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [
    StokComponent,
    StokKartiComponent
  ],
  imports: [
    CommonModule,
    NzTreeViewModule,
    NzIconModule,
    RouterModule.forChild([
      { path: 'stok-karti', component: StokKartiComponent },


    ])

  ]
})
export class StokModule { }
