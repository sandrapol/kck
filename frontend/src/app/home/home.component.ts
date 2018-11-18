import { Component, OnInit } from '@angular/core';
import { UploadService } from '../services/upload.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedFiles: FileList;
  name: any;
  currentFileUpload: File;
  fileName: string;
  constructor(
    private uploadServ: UploadService
  ) { }

  ngOnInit() {
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  upload() {
    this.currentFileUpload = this.selectedFiles.item(0);
    this.fileName= this.currentFileUpload.name;
    this.uploadServ.pushFileToStorage(this.currentFileUpload,this.fileName).subscribe(
      event => { console.log('File is completely uploaded!'); },
      err => { console.log(err); },
      () => {}
    );
    }
    hellwig(){
      this.uploadServ.hellwigMethod().subscribe(
        event => { console.log('Variables chosen'); },
        err => { console.log(err); },
        () => {this.mnk()}
      );
    }
  mnk(){
    this.uploadServ.mnkWithHellwig().subscribe(
      event => { console.log('MNK created'); },
      err => { console.log(err); },
      () => {}
    );
  }
}
