import { Component, OnInit } from '@angular/core';
import { UploadService } from '../services/upload.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  selectedFiles: FileList;
  name: any;
  currentFileUpload: File;
  fileName: string;

  constructor(private router: Router,private uploadServ: UploadService) { }

  ngOnInit() {
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
    this.currentFileUpload = this.selectedFiles.item(0);
    this.fileName = this.currentFileUpload.name;
  }
  upload() {

    this.uploadServ.pushFileToStorage(this.currentFileUpload, this.fileName).subscribe(
      event => { console.log('File is completely uploaded!'); },
      err => { console.log(err); },
      () => {this.submit(); }
    );
    
  }
  submit(){
    this.router.navigateByUrl('/choice');
  }
}
