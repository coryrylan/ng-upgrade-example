import { UrlHandlingStrategy } from '@angular/router';

export class MigrationUrlHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url) {
    if (url.toString().startsWith('/faq')) {
      return true;
    } else {
      return false;
    }
  }

  extract(url) { return url; }
  merge(url, whole) { return url; }
}