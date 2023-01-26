import { FormAnswerComponent } from './pages/form-answer/form-answer.component';
import { FormBuilderComponent } from './pages/form-builder/form-builder.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'form/build',
    pathMatch: 'full'
  },
  {
    path: 'form/build',
    component: FormBuilderComponent,
    data: {
      title: 'Form Builder',
    },
  },
  {
    path: 'form/answer',
    component: FormAnswerComponent,
    data: {
      title: 'Form Answer',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
