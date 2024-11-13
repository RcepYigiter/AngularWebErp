import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StokYonetimiComponent } from './pages/stok-yonetimi/stok-yonetimi.component';
import { PersonelComponent } from './pages/personel/personel.component';

const routes: Routes = [
  // { path: '', loadChildren: () => import("../app/pages/stok-yonetimi/stok-yonetimi.module").then(m => m.StokYonetimiModule) }

  {
    path: '',
    children: [
      {
        path: 'stok-yonetimi',
        component: StokYonetimiComponent,
        loadChildren: () =>
          import('../app/pages/stok-yonetimi/stok-yonetimi.module').then(
            (m) => m.StokYonetimiModule
          ),
      },
      {
        path: 'personel',
        component: PersonelComponent,
        loadChildren: () =>
          import('../app/pages/personel/personel.module').then(
            (m) => m.PersonelModule
          ),
      },
    ],
    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
