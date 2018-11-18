import { UploadService } from './../services/upload.service';
import { Component, OnInit } from '@angular/core';
import { MNK } from './MNK';

@Component({
  selector: 'app-model-details',
  templateUrl: './model-details.component.html',
  styleUrls: ['./model-details.component.css']
})
export class ModelDetailsComponent implements OnInit {

  private mnk: any;
  private headers: any;
  private loading = true;
  constructor(private upServ: UploadService) { }

  ngOnInit() {
    this.upServ.getMNK().subscribe(
      elems=> {this.mnk=elems; console.log(this.mnk)},
      err=>{console.log(err)},
      ()=>this.loading=false
    ); 
  }
  getParam(header: string){
    const index=this.mnk.headers.indexOf(header);
    return this.mnk.parameters[index+1]
  }

}
