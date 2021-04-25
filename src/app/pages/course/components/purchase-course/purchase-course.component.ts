import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PurchaseService } from 'src/app/core/services/purchase.service';


@Component({
  selector: 'app-purchase-course',
  templateUrl: './purchase-course.component.html',
  styleUrls: ['./purchase-course.component.css']
})
export class PurchaseCourseComponent implements OnInit {
 
  constructor(
    private purchaseService: PurchaseService,
    private dialogRef: MatDialogRef<PurchaseCourseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    
  }

  makePayment() {
    this.purchaseService.makePurchase(this.data.chapter.courseId, this.data.rate);
  }

  close() {
    this.dialogRef.close();
  }
}
