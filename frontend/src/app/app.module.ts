import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { ParamChoiceComponent } from './param-choice/param-choice.component';
import { ModelDetailsComponent } from './model-details/model-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    HeaderComponent,
    ParamChoiceComponent,
    ModelDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
