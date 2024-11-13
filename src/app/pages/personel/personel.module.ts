import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonelComponent } from './personel.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PersonelComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
     
        {
          path: "",
          children: [
            // { path: 'stok', component: StokComponent, loadChildren: () => import("../stok-yonetimi/stok/stok.module").then(m => m.StokModule) },
          ]
        },
        
      ]),

  ]
})
export class PersonelModule { }
