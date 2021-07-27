import { Celular } from './celular.model';
import { TelefoneFixo } from "./telefoneFixo.model";

export interface ContatoCredcoop {
    email: string;
    fixo: [
        TelefoneFixo
    ]
    celular: [
        Celular
    ]
    
}
