import { HeaderComponent } from './../header/header.component';
import { UploadService } from './../services/upload.service';
import { Component, OnInit } from '@angular/core';
import { MNK } from './MNK';
import { Router } from '@angular/router';

@Component({
  selector: 'app-model-details',
  templateUrl: './model-details.component.html',
  styleUrls: ['./model-details.component.css']
})
export class ModelDetailsComponent implements OnInit {

  private mnk: any;
  private headers: any;
  private loading = true;
  private clicked = false;
  constructor(private upServ: UploadService, private router: Router) { }

  ngOnInit() {
    this.upServ.getMNK().subscribe(
      elems=> {this.mnk=elems; console.log(this.mnk)},
      err=>{this.router.navigateByUrl("")},
      ()=>{this.loading=false; this.roundIt()}
    ); 
  }
 roundIt(){
  this.mnk.parameters=this.mnk.parameters.map(element => 
     Math.round(element*1000)/1000
   );
   this.mnk.averageEstimateError=this.mnk.averageEstimateError.map(element => 
    Math.round(element*1000)/1000
  );
  this.mnk.r2= Math.round(this.mnk.r2*100000)/100000;
  this.mnk.crv = Math.round(this.mnk.crv*100000)/100000;
  this.mnk.residualVariance = Math.round(this.mnk.residualVariance*100000)/100000;
  this.mnk.standardDeviation = Math.round(this.mnk.standardDeviation*100000)/100000;
  

 }
  getParam(header: string){
    const index=this.mnk.headers.indexOf(header);
    return Math.round(this.mnk.parameters[index+1] *100000)/100000;
  }
  goToPredictions(){
    this.router.navigateByUrl("/predict")
  }

  more(){
    this.clicked = true;
  }

}
