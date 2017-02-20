import { Component } from '@angular/core';

import { InicioPage } from '../inicio/inicio';
import { PesquisarPage } from '../pesquisar/pesquisar';
import { PostarFotoPage } from '../postar-foto/postar-foto';
import { NotificacaoPage } from '../notificacao/notificacao';
import { PerfilPage } from '../perfil/perfil';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = InicioPage;
  tab2Root: any = PesquisarPage;
  tab3Root: any = PostarFotoPage;
  tab4Root: any = NotificacaoPage;
  tab5Root: any = PerfilPage;

  constructor() {

  }
}
