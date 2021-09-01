import { BancoService } from '../../../sevices/banco.service';
import { CepService } from './../../../sevices/cep.service';
import { ClienteCredcoop } from './../../../models/credcoop/clienteCredcoop.model';
import { Router } from '@angular/router';
import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ClienteCredcoopService } from 'src/app/sevices/credcoop/cliente-credcoop.service';

@Component({
  selector: 'app-credcoop-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  bancos: any = []
  clientesCredcoop: ClienteCredcoop[] = []

  clienteCredcoop: ClienteCredcoop = {
    // fiador: '',
    dadosPessoais: {
      nome: '',
      cpf: '',
      rg: '',
    },
    // dadosConjuge: {
    //   nomeConjuge: '',
    //   cpfConjuge: '',
    //   contatoConjuge: '',
    //   whatsapp: false,
    // },
    endereco: [
      {
        cep: '',
        rua: '',
        numero: '',
      }
    ],

    contato: [
      {
        numero: '',
        whatsapp: false,
      }
    ],

    localDeTrabalho: [
      {
        nomeFantasia: '',
      }
    ],

    dadosBancarios: [{
      n_operacao: '',
      tipo_de_conta: '',
      agencia: '',
      conta: '',
    }],

    referencias: [{
      nome: '',
      contato: {
        numero: '',
        whatsapp: false
      },
      parentesco: '',
    }],

  };

  constructor(
    private clienteCredcoopService: ClienteCredcoopService,
    private router: Router,
    private cepService: CepService,
    private bancoService: BancoService
    ) { }

  ngOnInit(): void {

    this.bancoService.getBancos().subscribe((response) => this.bancos = response);
    this.clienteCredcoopService.getClientesCredcoop().subscribe((response) => this.clientesCredcoop = response);

    this.clienteCredcoopService.getClientesCredcoopDoDjango().subscribe((response) => console.log(response));
  }

  log(valor: any): void {
    console.log(valor)
  }
  // adiciona um component de formulário; contato e endereços, por exemplo
  // addForm(add: string): void {
  //   if(add == 'addEnderecoPessoal') {
  //     this.clienteCredcoop.enderecos.push(
  //       {
  //         cep: '',
  //         rua: '',
  //         bairro: '',
  //         uf: '',
  //         cidade: '',
  //         numero: '',
  //         complemento: '',
  //         pontoDeReferencia: '',
  //       }
  //     );
  //   }
  //   else if(add == 'addFixo') {
  //     this.clienteCredcoop.contato.fixo.push(
  //       {
  //         numero: '',
  //         ativo: true
  //       }
  //     );
  //   }
  //   else if(add == 'addCelular') {
  //     this.clienteCredcoop.contato.celular.push(
  //       {
  //         numero: '',
  //         ativo: true,
  //         whatsapp: false
  //       }
  //     );
  //   }
  //   else if(add == 'addEnderecoTrabalho') {
  //     this.clienteCredcoop.localDeTrabalho.enderecos.push(
  //       {
  //         cep: '',
  //         rua: '',
  //         bairro: '',
  //         uf: '',
  //         cidade: '',
  //         numero: '',
  //         complemento: '',
  //         pontoDeReferencia: '',
  //       }
  //     );
  //   }
  //   else if(add == 'addFixoTrabalho') {
  //     this.clienteCredcoop.localDeTrabalho.contato.fixo.push(
  //       {
  //         numero: '',
  //         ativo: true
  //       }
  //     );
  //   }
  //   else if(add == 'addCelularTrabalho') {
  //     this.clienteCredcoop.localDeTrabalho.contato.celular.push(
  //       {
  //         numero: '',
  //         ativo: true,
  //         whatsapp: false
  //       }
  //     );
  //   }
  //   else if(add == 'addContaBancaria') {
  //     this.clienteCredcoop.dadosBancarios.push(
  //       {
  //         banco: '',
  //         numeroDaOperacao: '',
  //         tipoDeConta: '',
  //         numeroDaAgencia: '',
  //         numeroDaconta: '',
  //       }
  //     );
  //   }
  //   else if(add == 'addReferencia') {
  //     this.clienteCredcoop.referencias.push(
  //       {
  //         nome: '',
  //         contato: '',
  //         parentesco: '',
  //       }
  //     );
  //   }
  // }

  // removeForm(remove: string): void {
  //   if(remove == 'removeEnderecoPessoal') {
  //     this.clienteCredcoop.enderecos.pop();
  //   }
  //   else if(remove == 'removeFixo') {
  //     this.clienteCredcoop.contato.fixo.pop();
  //   }
  //   else if(remove == 'removeCelular') {
  //     this.clienteCredcoop.contato.celular.pop();
  //   }
  //   else if(remove == 'removeEnderecoTrabalho') {
  //     this.clienteCredcoop.localDeTrabalho.enderecos.pop();
  //   }
  //   else if(remove == 'removeFixoTrabalho') {
  //     this.clienteCredcoop.localDeTrabalho.contato.fixo.pop();
  //   }
  //   else if(remove == 'removeCelularTrabalho') {
  //     this.clienteCredcoop.localDeTrabalho.contato.celular.pop();
  //   }
  //   else if(remove == 'removeContaBancaria') {
  //     this.clienteCredcoop.dadosBancarios.pop();
  //   }
  //   else if(remove == 'removeReferencia') {
  //     this.clienteCredcoop.referencias.pop();
  //   }
  // }

  createClienteCredcoop(): void {
    this.clienteCredcoopService.create(this.clienteCredcoop).subscribe(() => {
      this.clienteCredcoopService.showMessage('Cliente Criado com Sucesso!');
      this.router.navigate(['/credcoop']);
    });
    // localStorage.setItem('clienteCredcoop', JSON.stringify(this.clienteCredcoop))
  }

  cancel(): void {
    this.router.navigate(['/credcoop']);
  }

  consultaCep(valor: string, form: any, indice: number){
    this.cepService.buscar(valor).subscribe((dados) => this.populaForm(dados, form, indice));
  }

  populaForm(dados: any, form: any, indice: any) {
    console.log(form);
    form.controls[`cep${indice}`].setValue(dados.cep)
    form.controls[`rua${indice}`].setValue(dados.logradouro)
    form.controls[`bairro${indice}`].setValue(dados.bairro)
    form.controls[`cidade${indice}`].setValue(dados.localidade)
    form.controls[`uf${indice}`].setValue(dados.uf)
    form.controls[`complemento${indice}`].setValue(dados.complemento)
  }

}
