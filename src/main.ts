import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/login/login.module';
import { HomeModule } from './app/home/home.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

  platformBrowserDynamic().bootstrapModule(HomeModule)
  .catch(err => console.log(err));
