import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'event-app',
  template: `<h1>Helllo there</h1>
  <img src='../assets/images/ng-nl.png'/>`,

})
export class EventsAppComponent {
  title = 'ng-fundamentals';
}
