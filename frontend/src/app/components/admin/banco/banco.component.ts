import { Router } from '@angular/router';
import { BancoService } from './../../../sevices/banco.service';
import { Banco } from 'src/app/components/admin/banco/banco.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banco',
  templateUrl: './banco.component.html',
  styleUrls: ['./banco.component.css']
})
export class BancoComponent implements OnInit {

  bancos: Banco[] = [{
    nomeDoBanco: ''
  }];

  listaBancos: any[]= []

  constructor(private bancoService: BancoService, private router: Router) { }

  ngOnInit(): void {
    this.getBancos()
  }

  getBancos(): void {
    this.bancoService.getBancos().subscribe(bancos => {
      this.listaBancos = bancos
    })
  }

  createBanco(): void {
    this.bancos.forEach((banco) => this.bancoService.create(banco).subscribe(() => {}))
    this.bancoService.showMessage('Banco(s) cadastrado(s)!')
    this.router.navigate(['/admin'])
  }

  cancel(): void {
    this.router.navigate(['/admin'])
  }

  removeBancos(id: number): void {
    // this.listaBancos.splice(id, 1)
    this.bancoService.delete(id).subscribe(response => {
      this.getBancos()
    })
  }
}
