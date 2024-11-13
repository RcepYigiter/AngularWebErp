import { Component } from '@angular/core';

@Component({
  selector: 'app-personel',
  templateUrl: './personel.component.html',
  styleUrl: './personel.component.scss'
})
export class PersonelComponent {
  menu = [
    {
      label: 'Personel',
      icon: '',
      href:'',
      submenu: [
        { label: 'Personel Ve Departman Girişi', icon: 'fa fa-inbox', submenu: [] ,href:''},
        { label: 'İzin Ve Rapor Girişi', icon: 'fa fa-inbox', submenu: [],href:'' },
        { label: 'Aylık Puantaj Tablosu', icon: 'fa fa-inbox', submenu: [] ,href:''},
        { label: 'Çalışma Saatleri', icon: 'fa fa-inbox', submenu: [],href:'' },
        { label: 'Tatil Girişleri', icon: 'fa fa-inbox', submenu: [],href:'' },
        { label: 'Yıllık İzinler', icon: 'fa fa-inbox', submenu: [],href:'' },
        { label: 'Giriş Onay Ve Kart Tanımlamaları', icon: 'fa fa-inbox', submenu: [],href:'' },
        { label: 'Kart Hareketleri Ve Raporlar', icon: 'fa fa-inbox', submenu: [],href:'' },
        { label: 'Bordro Bilgileri', icon: 'fa fa-inbox', submenu: [],href:'' },
        { label: 'Olay Görüntüleyici ', icon: 'fa fa-inbox', submenu: [],href:'' },
        { label: 'Uygulama Kılavuzu ', icon: 'fa fa-inbox', submenu: [],href:'' },
        { label: 'Ayarlar ', icon: 'fa fa-inbox', submenu: [],href:'' },
      ],
    },
 
  ];

  show: boolean[] = [false, false];
  showSubMenu(index: number) {
    this.show[index] = !this.show[index];
  
  }
}
