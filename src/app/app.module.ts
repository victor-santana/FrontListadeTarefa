import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { CabecalhoComponent } from './component/cabecalho/cabecalho.component';
import { RodapeComponent } from './component/rodape/rodape.component';
import { MenuComponent } from './component/menu/menu.component';
import { ToDoListComponent } from './component/to-do-list/to-do-list.component';
import { DiaComponent } from './component/dia/dia.component';

import { LOCALE_ID, NgModule } from '@angular/core';
import localePT from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import {MatDialogModule} from '@angular/material/dialog';
import { CaixaEditarComponent } from './component/caixa-editar/caixa-editar/caixa-editar.component';
import { CaixaApagarComponent } from './component/caixa-apagar/caixa-apagar.component';


registerLocaleData(localePT);



@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    MenuComponent,
    ToDoListComponent,
    DiaComponent,
    CaixaEditarComponent,
    CaixaApagarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    HttpClientModule,
    MatDialogModule,
    AppRoutingModule,
    MatDialogModule

  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-br'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
