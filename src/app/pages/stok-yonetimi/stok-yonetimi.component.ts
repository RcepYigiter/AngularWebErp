import { Component } from '@angular/core';

@Component({
  selector: 'app-stok-yonetimi',
  templateUrl: './stok-yonetimi.component.html',
  styleUrl: './stok-yonetimi.component.scss'
})
export class StokYonetimiComponent {
  menu = [
    {
      label: 'Kartlar',
      icon: '',
      submenu: [
        { label: 'Stok', icon: 'fa fa-inbox', submenu: [] },
        { label: 'Depo', icon: 'fa fa-inbox', submenu: [] },
        { label: 'Hizmet', icon: 'fa fa-inbox', submenu: [] },
        { label: 'Masraf', icon: 'fa fa-inbox', submenu: [] },
      ],
    },
    {
      label: 'Hareketler',
      icon: '',
      submenu: [
        {
          label: 'Giriş',
          icon: 'fa fa-circle text-warning',
          submenu: [
            {
              label: 'Satınalma Mal Girişi',
              icon: 'fa fa-circle text-warning',
              submenu: [],
            },
            {
              label: 'Konsiye Girişi',
              icon: 'fa fa-circle text-warning',
              submenu: [],
            },
            {
              label: 'Konsiye Çıkıştan İade Alımı',
              icon: 'fa fa-circle text-warning',
              submenu: [],
            },
            {
              label: 'Teşvikli İthalat',
              icon: 'fa fa-circle text-warning',
              submenu: [],
            },
            {
              label: 'Teşviksiz İthalat',
              icon: 'fa fa-circle text-warning',
              submenu: [],
            },
            {
              label: 'Fason Giriş',
              icon: 'fa fa-circle text-warning',
              submenu: [],
            },
          ],
        },
        {
          label: 'Çıkış',
          icon: 'fa fa-circle text-warning',
          submenu: [
            {
              label: 'Parakende Satış',
              icon: 'fa fa-circle text-warning',
              submenu: [],
            },
            {
              label: 'Toptan Satış',
              icon: 'fa fa-circle text-warning',
              submenu: [],
            },
          ],
        },
        { label: 'Depo Transferi', icon: 'fa fa-circle text-warning', submenu: [] },
        { label: 'Stok Devir', icon: 'fa fa-circle text-warning', submenu: [] },
        { label: 'Barkod Oluştur', icon: 'fa fa-circle text-warning', submenu: [] },
        { label: 'Maliyet Düzenle', icon: 'fa fa-circle text-warning', submenu: [] },
      ],
    },
  ];

  show: boolean[] = [false, false];
  showSubMenu(index: number) {
    this.show[index] = !this.show[index];
  
  }
}
