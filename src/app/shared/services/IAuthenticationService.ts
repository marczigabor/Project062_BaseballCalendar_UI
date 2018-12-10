import { LoggedInUser } from '../Model/LoggedInUser';
import { Observable, BehaviorSubject } from 'rxjs';

// import { InjectionToken } from '@angular/core';
// import { BaseballService } from './baseball.service';


// export const AuthenticationService = new InjectionToken(
//     "AuthenticationService",
//     { providedIn: "root", factory: () => new BaseballService() }
//   );

export interface IAuthenticationService{
    //currentUserSubject : BehaviorSubject<LoggedInUser>;
    currentUser : Observable<LoggedInUser>;

    readonly currentUserValue: LoggedInUser;
    logout();
    login(userName: string, password: string): Observable<string>;
}

