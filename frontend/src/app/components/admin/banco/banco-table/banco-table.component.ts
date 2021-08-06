import { BancoService } from 'src/app/sevices/banco.service';
import { BancoTableDataSource } from './banco-table-datasource';
import { Banco } from './../../table-page/banco.model';
import { MatTable } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Component, AfterViewInit, ViewChild } from '@angular/core';



@Component({
  selector: 'app-banco-table',
  templateUrl: './banco-table.component.html',
  styleUrls: ['./banco-table.component.css']
})
export class BancoTableComponent implements AfterViewInit {
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

  dataSource: BancoTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'nomeDoBanco'];

  constructor(private bancoService: BancoService) {
    this.dataSource = new BancoTableDataSource();
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
