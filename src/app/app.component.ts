import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  paginas : any =[
    {
      titulo: 'Home',
      url: '/home',
      icone:'home'
    },
    {
      titulo: 'Universo Observável',
      url: '/universo-observavel',
      icone:'arrow-forward'
    },
    {
      titulo: 'Estrelas',
      url: '/estrelas',
      icone: 'arrow-forward'
    },
    {
      titulo: 'Cluster',
      url: '/cluster',
      icone: 'arrow-forward'
    },
    {
      titulo: 'Buracos Negros',
      url: '/buracos-negros',
      icone: 'arrow-forward'
    },
    {
      titulo: 'Sistema Solar',
      url: '/sistema-solar',
      icone: 'arrow-forward'
    },
    {
      titulo: 'Exoplanetas',
      url: '/exoplanetas',
      icone:'arrow-forward'
    },
    {
      titulo: 'Via Láctea',
      url: '/via-lactea',
      icone: 'arrow-forward'
    },
    {
      titulo: 'Galáxia',
      url: '/galaxia',
      icone: 'arrow-forward'
    },
    {
      titulo: 'Cosmos',
      url: '/cosmos',
      icone: 'arrow-forward'
    },
    {
      titulo: 'Sobre',
      url: '/sobre',
      icone: 'arrow-forward'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
