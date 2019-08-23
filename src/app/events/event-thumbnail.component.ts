import {Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'event-thumbnail',
  template: `
  <div class="well hoverwell thumbnail">
<<<<<<< HEAD
    <h2>{{event?.name}}</h2>
    <div>Date : {{event?.date}}</div>
    <div [ngClass]='changeTime(event.time)' [ngSwitch]='event?.time'>Time : {{event?.time}}
    <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
    <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
    <span *ngSwitchDefault>(Normal Start)</span>

    </div>
    <div>Price : \{{event?.price | currency: 'USD'}}</div>
    <div *ngIf ='event?.location'>
    <span>Location: {{event?.location?.address}}</span>
    <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span><br>
=======
  <div><h1>{{event.name}}</h1></div>
  <div>Date : {{event.date}}</div>
  <div>Time : {{event.time}}</div>
  <div>Price : \{{event.price | currency: 'USD'}}</div>
    <span>Location: {{event.location.address}}</span>
    <span class="pad-left">{{event.location.city}}, {{event.location.country}}</span><br>
    <img src="{{event.imageUrl}}" alt="">
>>>>>>> master
    </div>
  </div>
  `,

  styles: [
    `
    .red{color: #ff483e !important}
    .orange{color: #f89406 !important}
    .green{color: #8cd47e !important}
    .thumbnail {min-height: 210px;}
    .pad-left {
      --padding: 10px;
      padding: var(--padding)

    }
<<<<<<< HEAD
    .well div{
=======
    .well{
>>>>>>> master
      color: #bbb;
    }
    `
  ]
})

export class EventThumbnailComponent {
@Input() event: any;

changeTime(a: string) {
  if (a === '8:00 am') {
    return['green'];
  }
  if (a === '10:00 am') {
    return ['red'];
  } else {
    return['orange'];
  }
}

}
