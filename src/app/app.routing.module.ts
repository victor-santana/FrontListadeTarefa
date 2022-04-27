import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaixaEditarComponent } from './component/caixa-editar/caixa-editar/caixa-editar.component';

const routes: Routes = [{

  path: "atualiza/:id",
  component: CaixaEditarComponent,

},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
