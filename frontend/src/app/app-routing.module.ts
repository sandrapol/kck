import { PredictionComponent } from './prediction/prediction.component';
import { ModelDetailsComponent } from './model-details/model-details.component';
import { ParamChoiceComponent } from './param-choice/param-choice.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '',component: MainComponent},
  { path: 'home', component: HomeComponent },
  { path: 'choice', component: ParamChoiceComponent },
  {path:'modelDetails', component: ModelDetailsComponent},
  {path:'predict', component: PredictionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
