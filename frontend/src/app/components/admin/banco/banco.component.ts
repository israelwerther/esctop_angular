import { Router } from '@angular/router';
import { BancoService } from './../../../sevices/banco.service';
import { Component, OnInit } from '@angular/core';
import { Banco } from './banco.model';



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
    this.router.navigate(['/admin/banco'])
      .then(() => {
        window.location.reload();
      });
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
