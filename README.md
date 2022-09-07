## Angular Firebase (Instalacion rapida)
Se ejecuta el comando para integrar firebase a mi proyecto angular
```
ng add @angular/fire
```
Abrimos `/src/environments/environment.ts` y agregamos la configuracion del firebase que se genera en la consola del fire base, seria algo como lo siguiente
```typescript
export const environment = {
  production: false,
  firebase: {
    apiKey: '<your-key>',
    authDomain: '<your-project-authdomain>',
    databaseURL: '<your-database-URL>',
    projectId: '<your-project-id>',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '<your-messaging-sender-id>',
    appId: '<your-app-id>',
    measurementId: '<your-measurement-id>'
  }
};
```
