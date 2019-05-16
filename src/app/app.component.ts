import { Component, InjectionToken } from '@angular/core';

export const EXAMPLE_TOKEN = new InjectionToken<string>('app.exampleToken');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{ provide: EXAMPLE_TOKEN, useValue: 'Value from AppComponent' }]
})
export class AppComponent {}
