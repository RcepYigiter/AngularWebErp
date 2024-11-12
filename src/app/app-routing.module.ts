import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StokYonetimiComponent } from './pages/stok-yonetimi/stok-yonetimi.component';

const routes: Routes = [

  // { path: '', loadChildren: () => import("../app/pages/stok-yonetimi/stok-yonetimi.module").then(m => m.StokYonetimiModule) }

  {
    path: "",
    children: [
      { path: 'stok-yonetimi', component: StokYonetimiComponent, loadChildren: () => import("../app/pages/stok-yonetimi/stok-yonetimi.module").then(m => m.StokYonetimiModule)},

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
