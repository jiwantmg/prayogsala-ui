import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-category-courses',
  templateUrl: './category-courses.component.html',
  styleUrls: ['./category-courses.component.css']
})
export class CategoryCoursesComponent implements OnInit {
  courses: any[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      res => {
        if(res["name"])
        {
          this.getCoursesByCategory(res["name"]);
        }
      }
    )
  }

  getCoursesByCategory(category)
  {
    this.categoryService.getCoursesByCategory(category).subscribe(
      (res: any[]) => {
        this.courses = res;
      }
    );
  }
}
