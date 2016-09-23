import { Component } from '@angular/core';
import { Config } from './shared/index';
import { ToolbarComponent, NavbarComponent } from './nav/index'

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  directives: [ToolbarComponent,NavbarComponent]
})

export class AppComponent {
  constructor() {
    console.log('Environment config', Config);
  }
}
