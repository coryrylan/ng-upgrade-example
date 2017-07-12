// import polyfills
import './polyfills';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Ng1AppModule } from './app.ng1.module';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  ref.instance.upgrade.bootstrap(document.body, [Ng1AppModule.name]);
});
