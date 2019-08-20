import { Component } from '@angular/core'

@Component({
  selector: 'navbar-component',
  templateUrl: './navbar.component.html',
  styles: [`
    .nav .navbar-nav {
      font-size:15px;
    }
    #searchForm {margin-right:10%;}
  `]
})

export class navbarComponent {
    user ={
      name : 'Leo'
    };
}
