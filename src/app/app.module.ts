import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { CadastrarPage } from '../pages/cadastrar/cadastrar';

import { TabsPage } from '../pages/tabs/tabs';

import { InicioPage } from '../pages/inicio/inicio';
import { PesquisarPage } from '../pages/pesquisar/pesquisar';
import { PostarFotoPage } from '../pages/postar-foto/postar-foto';
import { NotificacaoPage } from '../pages/notificacao/notificacao';
import { PerfilPage } from '../pages/perfil/perfil';

import { UsersService } from '../providers/users-service';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    CadastrarPage,
    TabsPage,
    InicioPage,
    PesquisarPage,
    PostarFotoPage,
    NotificacaoPage,
    PerfilPage
  ],
  imports: [
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    CadastrarPage,
    TabsPage,
    InicioPage,
    PesquisarPage,
    PostarFotoPage,
    NotificacaoPage,
    PerfilPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersService
  ]
})
export class AppModule {}
