import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CursoListaComponent } from './curso/curso-lista.component';
import { EstrelaComponent } from './curso/estrela/estrela.component';
import { NavBarComponent } from './nav-bar/nav.bar.component';
import { Erro404Component } from './404/erro.component';
import { InfoComponent } from './curso/info.component';


@NgModule({
  declarations: [
    AppComponent,
    CursoListaComponent,
    EstrelaComponent,
    NavBarComponent,
    Erro404Component,
    InfoComponent
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'cursos', component: CursoListaComponent
      },

      {
        path:'/curso/info/:id', component: InfoComponent
      },



      {
      path:'',redirectTo: 'cursos',pathMatch: 'full'
      },

    
      {
        path:'**', component: Erro404Component
      },
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
