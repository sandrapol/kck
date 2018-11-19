import { UploadService } from './../services/upload.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})
export class PredictionComponent implements OnInit {
  private headers: any;

  constructor(private upServ: UploadService, private router: Router) { }

  ngOnInit() {
    this.upServ.getHeaders().subscribe(
      elem => { this.headers = elem },
      err => (this.router.navigateByUrl("")),
      () => {  }
    )
  }

}
