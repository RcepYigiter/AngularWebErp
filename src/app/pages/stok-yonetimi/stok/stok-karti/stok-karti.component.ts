import { Component } from '@angular/core';
export interface Node {
  name: string;
  children?: Node[];
  expanded?: boolean; // Yeni özellik, düğümün açılıp açılmadığını kontrol eder
}
@Component({
  selector: 'app-stok-karti',
  templateUrl: './stok-karti.component.html',
  styleUrl: './stok-karti.component.scss',
})
export class StokKartiComponent {
  data = [
    { label: 'Parent1', children: [{ label: "Parent 1's only child" }] },
    { label: 'Parent2' },
    {
      label: 'Parent3',
      children: [
        {
          label: '1st Child of 3',
          children: [{ label: '1st grandchild' }, { label: '2nd grandchild' }],
        },
        { label: '2nd Child of 3' },
        { label: '3rd Child of 3' },
      ],
    },
    {
      label: 'Parent 4',
      children: [{ label: "Parent 4's only child" }],
    },
  ];





  treeData: Node[] = [
    {
      name: '150 - HAMMADDELER',
      expanded: false, // Başlangıçta kapalı
      children: [
        {
          name: '150.001 - SACLAR',
          expanded: false,
          children: [
            { name: '150.001.001 - DKP SAC', expanded: false, children: [{ name: '150.001.001.001 - 1.2 MM DKP SAC' }, { name: '150.001.001.002 - 1.5 MM DKP SAC' }] },
            { name: '150.001.002 - HRP SAC' }
          ]
        },
        { name: '150.002 - CİVATA VE SOMUN GRUBU' },
        { name: '150.003 - PLASTİK GRUBU', expanded: false, children: [{ name: '150.003.001 - 20*55 CİVATALI LASTIK TAKOZ' }, { name: '150.003.002 - PLEXİ DÖKME 5MM 6520DF BEYAZ 200*200CM' }] }
      ]
    },
    {
      name: '151 - YARIMAMUL',
      expanded: false,
      children: [
        { name: '151.001 - TABAN', expanded: false, children: [{ name: '151.001.001 TABAN SACI' }] },
        { name: '151.002 - TAVAN' },
        { name: '151.003 - DUVAR' }
      ]
    }
  ];
  // Düğümün açılmasını ve kapanmasını kontrol eden fonksiyon
  toggleExpand(node: Node): void {
    if (node.children) {
      node.expanded = !node.expanded;
    }
  }

  test(node){
    console.log(node)
  }
}
