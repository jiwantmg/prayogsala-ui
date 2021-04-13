import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  role: string = "";
  constructor(
    private store: Store<{context}>
  )
  {
  }
  ngOnInit(): void {    
    this.store.select(state => state.context).subscribe(
      (res) => {        
         if(res.auth.isLogggedIn)
         {
           this.role = res.auth.user.role;
         }
      }
    );
  }
}
