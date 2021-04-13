import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/core/models/menu';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  menus: Menu[] = [];

  constructor() { }

  ngOnInit(): void {
    this.menus = [
      { name: 'New Teacher', link: '', icon: '' }      
    ];
  }

}
