import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [ 
    BrowserModule,
    RouterModule.forRoot([
      {path:'About',component:AboutComponent},
      {path:'Home',component:HomeComponent},
      {path:'',redirectTo:'Home',pathMatch:'full'},
      {path:"**",redirectTo:'Home',pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
