import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { User } from './models/user';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    currentUser: Observable<User>;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.currentUser = this.authenticationService.currentUser;
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}
