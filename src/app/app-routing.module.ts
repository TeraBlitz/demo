import { DocumentosComponent } from './dashboard/documentos/documentos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{ path: 'home', component: DashboardComponent,
  children:[
    {path:'documentos', component: DocumentosComponent},
    { path: '',redirectTo:'documentos', pathMatch:'full'}
  ] },
{ path: '',redirectTo: '/home', pathMatch: 'full'},
//{ path: '',redirectTo: '/schedule', pathMatch: 'full',outlet:"dash"}

];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
