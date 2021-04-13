import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class JwtInterceptor implements HttpInterceptor
{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = localStorage.getItem('auth_token');      
        let headers = {};
        if(token)
        {
            headers['Authorization'] = "Bearer "+token;
            req = req.clone({headers: new HttpHeaders(headers)});
        }
        return next.handle(req);
        
    }    
}