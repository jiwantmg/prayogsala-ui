import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard  {
    constructor(
        private router: Router
    )
    { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {               
        let token = localStorage.getItem('auth_token');        
        if(!token) {
            this.router.navigate(['login']);
            return false;
        };
        return true;
    }
}