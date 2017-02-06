import {Component} from '@angular/core'

@Component({
   templateUrl: './dist/app/subpages/subview/about.html'
  //template:'<h2 style="color:red">about :{{aname}}</h2>'
})
export class AboutComponent{
  aname='this is about page,detail for this page';
  constuctor(){

  }
}