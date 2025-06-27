import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {importProvidersFrom, provideZoneChangeDetection} from "@angular/core";


bootstrapApplication(AppComponent, {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    importProvidersFrom(BrowserAnimationsModule),
  ],
}).catch(err => console.error(err));
