import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-preview-video',
  templateUrl: './preview-video.component.html',
  styleUrls: ['./preview-video.component.css']
})
export class PreviewVideoComponent implements OnInit {
  imageServer: string;
  displayChat = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<PreviewVideoComponent>
  ) { }

  ngOnInit() {
    this.imageServer = environment.server_url;    
  }

  getVideoLink() {
    return 'https://youtu.be/zetw6ODNHD4';
    //return 'http://localhost/video/'+this.data.video;
  }

  close() {
    this.dialogRef.close();
  }

  toggleComments() {
    this.displayChat = !this.displayChat;
  }

  getwidth()
  {
    return this.displayChat ? '100%' : 'auto';
  }

}
