import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {PostModule} from "./post/post.module";
import { TabViewModule } from 'primeng/tabview';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    TabViewModule,
    PostModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
