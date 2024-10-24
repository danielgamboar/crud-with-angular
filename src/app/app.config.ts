import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp({
      "projectId": "cifo-crud",
      "appId": "1:251666333834:web:ecb0625f0cf53a5d1bed73",
      "storageBucket": "cifo-crud.appspot.com",
      "apiKey": "AIzaSyA_ybLiiBlQBTOCmNg9cOGx_veLXCvF844",
      "authDomain": "cifo-crud.firebaseapp.com",
      "messagingSenderId": "251666333834"
    })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideAnimationsAsync()
  ]
};
