import {Component, Input}  from '@angular/core'

@Component({
  selector: 'event-thumbnail',
  template: `
  <div class="well hoverwell thumbnail">
  <div><h1>{{event.name}}</h1></div>
  <div>Date : {{event.date}}</div>
  <div>Time : {{event.time}}</div>
  <div>Price : \{{event.price | currency: 'USD'}}</div>
    <span>Location: {{event.location.address}}</span>
    <span>&nbsp;</span>
    <span>{{event.location.city}}, {{event.location.country}}</span>
    <img src="{{event.imageUrl}}" alt="">
  </div>
  `
})

export class EventThumbnailComponent {
@Input() event: any;
}
