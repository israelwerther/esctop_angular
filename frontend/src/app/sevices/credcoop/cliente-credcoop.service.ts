
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { ClienteCredcoop } from 'src/app/models/credcoop/clienteCredcoop.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteCredcoopService {

  baseUrl = "http://localhost:3001/clienteCredcoop"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void { //recebe uma msg do tipo string e retorna void
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  // Insere um novo produto no backend
  create(clienteCredcoop: ClienteCredcoop): Observable<ClienteCredcoop> {
    return this.http.post<ClienteCredcoop>(this.baseUrl, clienteCredcoop)
  }
}
