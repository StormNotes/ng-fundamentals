
import {Component} from '@angular/core';
import { EventService } from './shared/event.service';
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'events-list',
  template: `
  <div>
      <h1>Upcoming Angular Events</h1><hr>
      <div class="row">
        <div class="col-md-4" *ngFor="let event of events" >
        <event-thumbnail   [event] = "event"></event-thumbnail>
        </div>
      </div>
  </div>
`
})

export class EventListComponent {
  events: any[];
  // tslint:disable-next-line: no-shadowed-variable
  constructor(private EventService: EventService) {
    this.events = this.EventService.getEvents();
  }
}
