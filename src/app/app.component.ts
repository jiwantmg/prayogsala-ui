import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAuthStore from './core/auth/store/auth.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isUserLoggedIn: false;
  constructor(
    private store: Store<{context}>
  )
  {
    this.store.select(state => state.context).subscribe(
      (res) => {        
        this.isUserLoggedIn = res.auth.isLogggedIn;       
      }
    );

    let token = localStorage.getItem('auth_token');
    if(token)
    {       
        //this.store.dispatch(fromAuthStore.updateUserRole({role: "teacher"}));
        this.store.dispatch(fromAuthStore.loadUserRole());
    }
  }
}
