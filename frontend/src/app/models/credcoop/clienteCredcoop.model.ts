import { Endereco } from './../endereco.model';
import { LocalDeTrabalho } from '../localDeTrabalho.model';
import { DadosPessoais } from '../dadosPessoais.model';
import { Contato } from '../contato.model';
import { DadosBancarios } from './../dadosBancarios.model';
import { Referencias } from '../referencias.model';

export interface ClienteCredcoop {
    // ? torna o id opcional
    // fiador?: any;
    id?: number;

    dadosPessoais: DadosPessoais

    // dadosConjuge: {
    //     nomeConjuge: string;
    //     cpfConjuge: string;
    //     contatoConjuge: string;
    //     whatsapp: boolean;
    // };

    endereco: [
        Endereco
    ];

    contato: [
      Contato
    ];

    localDeTrabalho: [
      LocalDeTrabalho
    ];

    dadosBancarios: [
        DadosBancarios
    ];

    referencias: [
        Referencias
    ];
}
