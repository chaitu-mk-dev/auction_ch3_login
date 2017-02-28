import { Component, Input } from '@angular/core';

// Google's login API namespace
declare var gapi:any;

@Component({
  selector: 'auction-login',
  styleUrls: ['/login.css'],
  template: `<div>
  		<h4>Signin using your Gmail account!</h4>
  			<div id="my-signin2" (data-onsuccess)="onSignIn"></div>
  		</div>`
})
export default class LoginComponent {
	googleLoginButtonId = "google-login-button";
	  userAuthToken = null;
	  userDisplayName = "empty";

	ngAfterViewInit() {
	    gapi.signin2.render('my-signin2', {
	        'scope': 'profile email',
	        'width': 240,
	        'height': 50,
	        'longtitle': true,
	        'theme': 'light',
	        'onsuccess': param => this.onSignIn(param)
	    });
	}
	
	public onSignIn(loggedInUser) {
		
		this.userAuthToken = loggedInUser.getAuthResponse().id_token;
		    this.userDisplayName = loggedInUser.getBasicProfile().getName();
	    console.log(this);
	}
}





