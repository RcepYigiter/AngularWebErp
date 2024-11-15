import { AfterViewInit, Component, OnInit } from '@angular/core';

import { defaultColDef } from '../../../../shared/ag-grid/DEFAULT_COL_DEF';
import { AG_GRID_LOCALE_TR } from '../../../../shared/ag-grid/AG_GRID_LOCALE_TR ';
import { ColDef } from 'ag-grid-community';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
export interface Node {
  name: string;
  children?: Node[];
  expanded?: boolean; // Yeni özellik, düğümün açılıp açılmadığını kontrol eder
}
interface RandomUser {
  gender: string;
  email: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
}
@Component({
  selector: 'app-stok-karti',
  templateUrl: './stok-karti.component.html',
  styleUrl: './stok-karti.component.scss',
})
export class StokKartiComponent implements OnInit, AfterViewInit {
  searchTerm: string = '';

  treeData: Node[] = [
    {
      name: '150 - HAMMADDELER',
      expanded: false, // Başlangıçta kapalı
      children: [
        {
          name: '150.001 - SACLAR',
          expanded: false,
          children: [
            {
              name: '150.001.001 - DKP SAC',
              expanded: false,
              children: [
                { name: '150.001.001.001 - 1.2 MM DKP SAC' },
                { name: '150.001.001.002 - 1.5 MM DKP SAC' },
              ],
            },
            { name: '150.001.002 - HRP SAC' },
          ],
        },
        { name: '150.002 - CİVATA VE SOMUN GRUBU' },
        {
          name: '150.003 - PLASTİK GRUBU',
          expanded: false,
          children: [
            { name: '150.003.001 - 20*55 CİVATALI LASTIK TAKOZ' },
            { name: '150.003.002 - PLEXİ DÖKME 5MM 6520DF BEYAZ 200*200CM' },
          ],
        },
      ],
    },
    {
      name: '151 - YARIMAMUL',
      expanded: false,
      children: [
        {
          name: '151.001 - TABAN',
          expanded: false,
          children: [{ name: '151.001.001 TABAN SACI' }],
        },
        { name: '151.002 - TAVAN' },
        { name: '151.003 - DUVAR' },
      ],
    },
  ];
  // Düğümün açılmasını ve kapanmasını kontrol eden fonksiyon
  toggleExpand(node: Node): void {
    if (node.children) {
      node.expanded = !node.expanded;
    }
  }

  filteredData: Node[] = [...this.treeData];
  onSearchChange(filterText: string) {
    this.filteredData = filterTreeData(this.treeData, filterText);
  }

  ngAfterViewInit() {
    this.loadDataFromServer(this.pageIndex, this.pageSize, null, null, []);
  }

  total = 1;
  listOfRandomUser: RandomUser[] = [];
  loading = true;
  pageSize = 10;
  pageIndex = 1;
  filterGender = [
    { text: 'male', value: 'male' },
    { text: 'female', value: 'female' },
  ];

  loadDataFromServer(
    pageIndex: number,
    pageSize: number,
    sortField: string | null,
    sortOrder: string | null,
    filter: Array<{ key: string; value: string[] }>
  ): void {
    this.loading = true;
    this.getUsers(pageIndex, pageSize, sortField, sortOrder, filter).subscribe(
      (data) => {
        this.loading = false;
        this.total = 200; // mock the total data here
        this.listOfRandomUser = data.results;
      }
    );
  }

  onQueryParamsChange(params: NzTableQueryParams): void {
    const { pageSize, pageIndex, sort, filter } = params;
    const currentSort = sort.find((item) => item.value !== null);
    const sortField = (currentSort && currentSort.key) || null;
    const sortOrder = (currentSort && currentSort.value) || null;
    this.loadDataFromServer(pageIndex, pageSize, sortField, sortOrder, filter);
  }

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // this.loadDataFromServer(this.pageIndex, this.pageSize, null, null, []);
  }

  getUsers(
    pageIndex: number,
    pageSize: number,
    sortField: string | null,
    sortOrder: string | null,
    filters: Array<{ key: string; value: string[] }>
  ): Observable<{ results: RandomUser[] }> {
    let params = new HttpParams()
      .append('page', `${pageIndex}`)
      .append('results', `${pageSize}`)
      .append('sortField', `${sortField}`)
      .append('sortOrder', `${sortOrder}`);
    filters.forEach((filter) => {
      filter.value.forEach((value) => {
        params = params.append(filter.key, value);
      });
    });
    return this.http
      .get<{ results: RandomUser[] }>('https://api.randomuser.me/', { params })
      .pipe(catchError(() => of({ results: [] })));
  }
}

function filterTreeData(nodes: Node[], searchTerm: string): Node[] {
  return nodes
    .map((node) => {
      // Çocuklarda arama yap
      const filteredChildren = node.children
        ? filterTreeData(node.children, searchTerm)
        : [];

      // Eğer ana node'un ismi veya çocuklarda eşleşme varsa, node'u döndür
      const isMatched =
        node.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        filteredChildren.length > 0;
      if (isMatched) {
        return {
          ...node, // Geçerli node'u kopyala
          children: filteredChildren, // Sadece eşleşen çocukları göster,
          expanded: searchTerm == '' ? false : true,
        };
      }

      return null;
    })
    .filter((node) => node !== null); // Null olan öğeleri temizle
}
