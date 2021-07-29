import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/credcoop/create/create.component';
import { CredcoopComponent } from './components/credcoop/credcoop.component';
import { CrudCredcoopComponent } from './components/credcoop/crud-credcoop/crud-credcoop.component';
import { DeleteComponent } from './components/credcoop/delete/delete.component';
import { ReadComponent } from './components/credcoop/read/read.component';
import { UpdateComponent } from './components/credcoop/update/update.component';

const routes: Routes = [
  {
    path: 'credcoop', component: CredcoopComponent,
    children: [
      {
        path: '', component: CrudCredcoopComponent,
      },
      {
        path: 'create', component: CreateComponent,
      },
      {
        path: 'read', component: ReadComponent,
      },
      {
        path: 'update', component: UpdateComponent,
      },
      {
        path: 'delete', component: DeleteComponent,
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
