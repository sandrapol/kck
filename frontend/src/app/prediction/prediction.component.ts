import { MNK } from './../model-details/MNK';
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
  private params: [ number];
  private prediction;
  private err:any;
  constructor(private upServ: UploadService, private router: Router) { }

  ngOnInit() {
    this.upServ.getHeaders().subscribe(
      elem => { this.headers = elem },
      err => (this.router.navigateByUrl("")),
      () => {  this.params=[this.headers.length] }
    )
  }
  setParam(value, header){
    this.params[this.headers.indexOf(header)]=Number(value);
  }

  predict(){
    this.upServ.predict(this.params).subscribe(
      elem => { this.prediction = elem },
      err => {this.err=err.headers.get('error_details'); console.log(this.err);},
      () => { this.roundIt(); this.err=false; }
    )
   console.log(this.params);
  }

  roundIt(){
    this.prediction=Math.round(this.prediction*1000)/1000
   }

}
