import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoFormComponent } from './components/aluno-form/aluno-form.component';

const routes: Routes = [
  { path:'aluno-form',
   component: AlunoFormComponent,

   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
