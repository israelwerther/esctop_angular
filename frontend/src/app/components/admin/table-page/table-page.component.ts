import { Banco } from './../banco/banco.model';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { BancoService } from 'src/app/sevices/banco.service';
import { TablePageDataSource } from './table-page-datasource';


@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.css']
})
export class TablePageComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Banco>;

  bancos: Banco[] = [{
    nomeDoBanco: ''
  }];



  listaBancos: any[]= []

  ngOnInit(): void {
    this.getBancos()
  }



  dataSource: TablePageDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'nomeDoBanco'];

  constructor(private bancoService: BancoService) {
    this.dataSource = new TablePageDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.getBancos()
  }
  getBancos(): void {
    this.bancoService.getBancos().subscribe(bancos => {
      this.dataSource.data = bancos
      this.table.dataSource = this.dataSource
    })
  }

  removeBancos(id: number): void {
    // this.listaBancos.splice(id, 1)
    this.bancoService.delete(id).subscribe(response => {
      this.getBancos()
    })
  }
}
