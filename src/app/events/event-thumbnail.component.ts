import {Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'event-thumbnail',
  template: `
  <div class="well hoverwell thumbnail">
  <div><h1>{{event.name}}</h1></div>
  <div>Date : {{event.date}}</div>
  <div>Time : {{event.time}}</div>
  <div>Price : \{{event.price | currency: 'USD'}}</div>
    <span>Location: {{event.location.address}}</span>
    <span class="pad-left">{{event.location.city}}, {{event.location.country}}</span><br>
    <img src="{{event.imageUrl}}" alt="">
    </div>
  `,

  styles: [
    `
    .pad-left {
      --padding: 10px;
      padding: var(--padding)

    }
    .well{
      color: #bbb;
    }
    `
  ]
})

export class EventThumbnailComponent {
@Input() event: any;


}
