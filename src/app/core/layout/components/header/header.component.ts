import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Menu } from 'src/app/core/models/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: any;
  menus: Menu[];
  constructor(
    private store: Store<{context}>
  ) { }

  ngOnInit(): void {
    this.menus = [];
    this.menus.push({
      name: 'Course',
      link: '/pages/courses',
      icon: ''
    });
   
    this.store.select(state => state.context).subscribe(
      (res) => {        
       this.user = res.auth.user;
       this.addRoleBasedMenu();
      }
    );    
  }
  

  addRoleBasedMenu()
  {
    if(this.user.role == "admin")
    {
      this.menus.push({
        name: 'Teachers',
        link: '/pages/teachers',
        icon: ''
      })
    }
  }

  logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('email');
    window.location.reload();
  }

}
