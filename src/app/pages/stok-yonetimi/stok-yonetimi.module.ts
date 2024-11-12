import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StokYonetimiComponent } from './stok-yonetimi.component';
import { RouterModule } from '@angular/router';
import { StokComponent } from './stok/stok.component';



@NgModule({
  declarations: [
    StokYonetimiComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
     
        {
          path: "",
          children: [
            { path: 'stok', component: StokComponent, loadChildren: () => import("../stok-yonetimi/stok/stok.module").then(m => m.StokModule) },
          ]
        },
        
      ]),

  ]
})
export class StokYonetimiModule { }
