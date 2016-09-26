import { Component, OnInit } from '@angular/core';
import { GoalListComponent } from '../goal/index';
import { AuthenticationService } from '../+login/index';

/**
 * This class represents the lazy loaded GoalsPageComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'goals-page',
  directives: [ GoalListComponent ],
  templateUrl: 'goals-page.component.html'
})

export class GoalsPageComponent implements OnInit {

  /**
   * Creates an instance of the GoalsPageComponent with the injected
   * AuthenticationService.
   *
   * @param {AuthenticationService} auth - The injected AuthenticationService.
   */
  constructor(
    public auth: AuthenticationService
  ) {}

  /**
   * Enfore Authentication OnInit
   */
  ngOnInit() {
    this.auth.enforceAuthentication();
  }

}
