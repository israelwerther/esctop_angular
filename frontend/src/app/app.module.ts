import { CrudCredcoopComponent } from './components/credcoop/crud-credcoop/crud-credcoop.component';
import { DeleteComponent } from './components/credcoop/delete/delete.component';
import { UpdateComponent } from './components/credcoop/update/update.component';
import { ReadComponent } from './components/credcoop/read/read.component';
import { CreateComponent } from './components/credcoop/create/create.component';
import { EsctopComponent } from './components/esctop/esctop.component';
import { CredcoopComponent } from './components/credcoop/credcoop.component';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NgxMaskModule } from 'ngx-mask';
import { MatSelectModule } from '@angular/material/select';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminComponent } from './components/admin/admin.component';
import { BancoComponent } from './components/admin/banco/banco.component';


@NgModule({
  declarations: [
    AppComponent,
    CredcoopComponent,
    EsctopComponent,
    CreateComponent,
    ReadComponent,
    UpdateComponent,
    DeleteComponent,
    CrudCredcoopComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    BancoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatSnackBarModule,
    MatInputModule,
    MatTabsModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaskModule.forRoot(),
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
