import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'event-app',
  template: `<events-list></events-list>`,

})
export class EventsAppComponent {
  title = 'ng-fundamentals';
}
