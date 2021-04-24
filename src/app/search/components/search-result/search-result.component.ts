import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/core/services/course.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  courses: any[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    // check if it has search query
    this.activatedRoute.queryParams.subscribe(
      res => {
        let sq = res['query'];
        if(sq)
          this.searchFor(sq);
      }
    )
  }

  searchFor(string)
  {
    this.courseService.searchFor(string).subscribe(
      (res: any[]) => {
        this.courses = res;
      },
      error => {
        console.log(error);
      }
    )
  }

}
