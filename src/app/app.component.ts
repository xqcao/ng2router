import { Component } from '@angular/core';

@Component({
	selector: 'myngclient',
	styles: [`
		header {
			align-items: center;
			background: #333333;
			color: white;
			display: flex;
			justify-content: space-between;
			padding: 0.8rem 1.2rem;
		}
		h1 {
			flex: auto;
      font-size: 1.4rem;
		}
		nav {
			margin-left: auto;
		}
		a {
			color: inherit;
      font-size: 1.4rem;
			text-decoration: none;
		}
		a.router-link-active { color: #6699cc;}
		a:hover { color: #4080bf; }
		a:not(:first-of-type):before {
			color: white;
			content: "  .  ";
		}
	`],
	template: `
		<header bs-directive>
			<h1>{{appTitle}}</h1>
			<nav>
				<a [routerLink]="['/']">Welcome</a>
				<a [routerLink]="['/about']">About Us</a>
				<a [routerLink]="['/contact']">Contact Me</a>
			</nav>
		</header>
    <router-outlet></router-outlet>
	`
})
export class AppComponent {
	appTitle: string = 'myngclient';
}