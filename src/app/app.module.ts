import { RoutingModule } from './app-routing.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { UtilidadesComponent } from './utilidades/utilidades.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { PacienteDetalhesComponent } from './paciente-detalhes/paciente-detalhes.component';

const appRoutes: Routes = [
{
    path: '',
    component: TelaPrincipalComponent
},
{
  path: 'cadastro',
  component: CadastroComponent,
  // children: [
  //   {path: ''}
  // ]
},
{
  path: 'pacientes',
  component: PacientesComponent
},
{
  path: 'utilidades',
  component: UtilidadesComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    TelaPrincipalComponent,
    CadastroComponent,
    PacientesComponent,
    UtilidadesComponent,
    PacienteDetalhesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    RoutingModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    HttpModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
