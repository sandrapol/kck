import { UploadService } from './../services/upload.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-param-choice',
  templateUrl: './param-choice.component.html',
  styleUrls: ['./param-choice.component.css']
})
export class ParamChoiceComponent implements OnInit {

  private choosenHeaders:any;

  constructor(private upService :UploadService) { }

  ngOnInit() {
  }

  hellwigMethodChoosen(){
    this.upService.hellwigMethod().subscribe(
      elem=> {this.choosenHeaders=elem},
      err=>(console.log("Error while choosing hellwig!"))
    )
  }
  modelWithHellwig(){
   
  }
  createModel(){
 
  }

}
