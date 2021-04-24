import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Menu } from 'src/app/core/models/menu';
import * as fromAuthStore from '../../../auth/store/auth.action';
import * as fromCatStore from 'src/app/pages/categories/store/category.actions';
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: any;
  menus: Menu[];
  isUserLoggedIn: false;
  isCourseShow = false;
  categories: any[] = [];  
  searchString: string = "";
  constructor(
    private store: Store<{context, categories}>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.menus = [];
   
   
    this.store.select(state => state).subscribe(
      (res) => {        
       this.user = res.context.auth.user;       
       this.categories = res.categories.list;
       this.addRoleBasedMenu();
      }
    );    
    this.store.dispatch(fromCatStore.loadCategorys());
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
  

  addRoleBasedMenu()
  {
    this.menus.splice(0, this.menus.length);
    this.menus.push({
      name: 'My Course',
      link: '/pages/courses',
      icon: ''
    });
    if(this.user.role == "admin")
    {
      this.menus.push({
        name: 'Teachers',
        link: '/pages/teachers',
        icon: ''
      });
      this.menus.push({
        name: 'Categories',
        link: '/pages/categories',
        icon: ''
      });
    }
  }

  logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('email');
    window.location.reload();
  }

  toggleCourse()
  {
    this.isCourseShow = !this.isCourseShow;
  }

  openLink(link)
  {
    this.router.navigate([link]);
    this.isCourseShow = !this.isCourseShow;
  }

  searchCourse(event)
  {    
    if(this.searchString == "") return;
    if(event.key == "Enter")
    {
      this.router.navigateByUrl(`/search?query=${this.searchString}`)
    }
  }
}
