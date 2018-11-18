import { UploadService } from './../services/upload.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-param-choice',
  templateUrl: './param-choice.component.html',
  styleUrls: ['./param-choice.component.css']
})
export class ParamChoiceComponent implements OnInit {

  private choosenHeaders:any;

  constructor(private upService :UploadService,private router: Router) { }

  ngOnInit() {
  }

  hellwigMethodChoosen(){
    this.upService.hellwigMethod().subscribe(
      elem=> {this.choosenHeaders=elem},
      err=>(console.log("Error while choosing hellwig!"))
    )
  }
  modelWithHellwig(){
    this.upService.mnkWithHellwig().subscribe(
      event => { console.log('Model created'); },
      err => { console.log(err); },
      () => {this.submit(); }
    );
  }
  createModel(){
    this.upService.newMNK().subscribe(
      event => { console.log('Model created'); },
      err => { console.log(err); },
      () => {this.submit(); }
    );
  }
  submit(){
    this.router.navigateByUrl('/modelDetails');
  }
}
