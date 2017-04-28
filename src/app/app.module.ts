import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { Storage } from '@ionic/storage';
import { Camera } from '@ionic-native/camera';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { CadastrarPage } from '../pages/cadastrar/cadastrar';

import { TabsPage } from '../pages/tabs/tabs';

import { InicioPage } from '../pages/inicio/inicio';
import { PesquisarPage } from '../pages/pesquisar/pesquisar';
import { PostarFotoPage } from '../pages/postar-foto/postar-foto';
import { NotificacaoPage } from '../pages/notificacao/notificacao';
import { PerfilPage } from '../pages/perfil/perfil';

import { DesejaPostarPage } from '../pages/deseja-postar/deseja-postar';
import { EditarContaPage } from '../pages/editar-conta/editar-conta';

import { UsersService } from '../providers/users-service';
import { PostsService } from '../providers/posts-service';

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
    PerfilPage,
    DesejaPostarPage,
    EditarContaPage
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
    PerfilPage,
    DesejaPostarPage,
    EditarContaPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Storage,
    Camera,
    UsersService,
    PostsService
  ]
})
export class AppModule {}
