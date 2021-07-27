import { ContatoCredcoop } from '../contatoCredcoop.model';
import { DadosBancarios } from './dadosBancarios.model';
import { EnderecoCredcoop } from './enderecoCredcoop.model';
import { Referencias } from './referencias.model';
export interface ClienteCredcoop {
    // ? torna o id opcional
    id?: number;
    dadosPessoais: {
        nome: string;
        cpf: string;
        rg: string;
        orgaoEmissor: string;
        dataNascimento: string;
        naturalidade: string;
        nacionalidade: string;
        estadoCivil: string;
        nomeDaMae: string;
        nomeDoPai: string;
    };
    dadosConjuge: {
        nomeConjuge: string;
        cpfConjuge: string;
        contatoConjuge: string;
        whatsapp: boolean;
    };
    enderecos: [
        EnderecoCredcoop
    ];
    contato: ContatoCredcoop;
    localDeTrabalho: {
        nomeFantasia: string;
        contato: ContatoCredcoop;
        enderecos: [
            EnderecoCredcoop
        ]
        observacoes: string;
    }
    dadosBancarios: [
        DadosBancarios
    ];
    referencias: [
        Referencias
    ];
}
