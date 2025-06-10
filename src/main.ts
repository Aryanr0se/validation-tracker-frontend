import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

bootstrapApplication(App, {
  providers: [
    provideRouter([]),
    provideAnimations(), // Required for Toastr
    provideToastr()      // Correct global usage
  ]
});
