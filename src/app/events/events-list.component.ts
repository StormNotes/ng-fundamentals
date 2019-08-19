
import {Component} from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'events-list',
  template: `
  <div>
      <h1>Upcoming Angular Events</h1>
      <hr>
      <div class='well'><h2>Hello world</h2></div>
      <event-thumbnail  [event] = "event1"></event-thumbnail>

  </div>
`
})

export class EventListComponent {

  event1 = {
    id: 1,
    name: 'Angular Connect',
    date: '15th Sep 1997',
    time: '10:100 am',
    price: 500,
    imageUrl : '../../assets/images//basic-shield.png',
    location: {
      address: '1004, DT',
      city: 'London',
      country: 'England'
    }
  };
}
