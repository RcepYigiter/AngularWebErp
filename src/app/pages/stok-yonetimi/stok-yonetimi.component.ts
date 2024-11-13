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
      href:'',
      submenu: [
        { label: 'Stok', icon: 'fa fa-inbox', submenu: [] ,href:'/stok-yonetimi/stok/stok-karti'},
        { label: 'Depo', icon: 'fa fa-inbox', submenu: [],href:'' },
        { label: 'Hizmet', icon: 'fa fa-inbox', submenu: [] ,href:''},
        { label: 'Masraf', icon: 'fa fa-inbox', submenu: [],href:'' },
      ],
    },
    {
      label: 'Hareketler',
      icon: '',
      href:'',
      submenu: [
        {
          label: 'Giriş',
          icon: 'fa fa-circle text-warning',
          submenu: [
            {
              label: 'Satınalma Mal Girişi',
              icon: 'fa fa-circle text-warning',
              submenu: [],href:'',
            },
            {
              label: 'Konsiye Girişi',
              icon: 'fa fa-circle text-warning',
              submenu: [],href:'',
            },
            {
              label: 'Konsiye Çıkıştan İade Alımı',
              icon: 'fa fa-circle text-warning',
              submenu: [],href:'',
            },
            {
              label: 'Teşvikli İthalat',
              icon: 'fa fa-circle text-warning',
              submenu: [],href:'',
            },
            {
              label: 'Teşviksiz İthalat',
              icon: 'fa fa-circle text-warning',
              submenu: [],href:'',
            },
            {
              label: 'Fason Giriş',
              icon: 'fa fa-circle text-warning',
              submenu: [],href:'',
            },
          ],
          href:'',
        },
        {
          label: 'Çıkış',
          icon: 'fa fa-circle text-warning',
          submenu: [
            {
              label: 'Parakende Satış',
              icon: 'fa fa-circle text-warning',
              submenu: [],href:'',
            },
            {
              label: 'Toptan Satış',
              icon: 'fa fa-circle text-warning',
              submenu: [],href:'',
            },
          ],
          href:'',
        },
        { label: 'Depo Transferi', icon: 'fa fa-circle text-warning', submenu: [] ,href:'',},
        { label: 'Stok Devir', icon: 'fa fa-circle text-warning', submenu: [] ,href:'',},
        { label: 'Barkod Oluştur', icon: 'fa fa-circle text-warning', submenu: [],href:'', },
        { label: 'Maliyet Düzenle', icon: 'fa fa-circle text-warning', submenu: [],href:'', },
      ],
    },
  ];

  show: boolean[] = [false, false];
  showSubMenu(index: number) {
    this.show[index] = !this.show[index];
  
  }
}
