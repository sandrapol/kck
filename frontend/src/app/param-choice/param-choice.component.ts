import { UploadService } from './../services/upload.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-param-choice',
  templateUrl: './param-choice.component.html',
  styleUrls: ['./param-choice.component.css']
})
export class ParamChoiceComponent implements OnInit {
  private loading=false;
  private choosenHeaders:any;

  constructor(private upService :UploadService,private router: Router) { }

  ngOnInit() {
  }

  hellwigMethodChoosen(){
    this.loading=true;
    this.upService.hellwigMethod().subscribe(
      elem=> {this.choosenHeaders=elem},
      err=>(this.router.navigateByUrl("")),
      ()=>{this.loading=false;}
    )
  }
  modelWithHellwig(){
    this.loading=true;
    this.upService.mnkWithHellwig().subscribe(
      event => { console.log('Model created'); },
      err => { console.log(err); this.router.navigateByUrl("") },
      () => {this.loading=false; this.submit(); }
    );
  }
  createModel(){
    this.loading=true;
    this.upService.newMNK().subscribe(
      event => { console.log('Model created'); },
      err => { console.log(err); },
      () => {this.loading=false; this.submit(); }
    );
  }
  submit(){
    this.loading=true;
    this.router.navigateByUrl('/modelDetails');
  }
}
