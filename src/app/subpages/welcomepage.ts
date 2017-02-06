import {Component} from '@angular/core'

@Component({
  templateUrl:'./dist/app/subpages/subview/welcome.html'
  // template:'<h2 style="color:green">about :{{wname}}</h2>'

})
export class WelcomeComponent{
  wname='this is welcome page'
}