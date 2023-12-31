import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScrollerModule} from "primeng/scroller";
import { PanelModule } from 'primeng/panel';
import {MenuModule} from "primeng/menu";
import {ButtonModule} from "primeng/button";
import {PostComponent} from "./post.component";
import {AvatarModule} from "primeng/avatar";
import {CommentsModule} from "./comments/comments.module";



@NgModule({
  declarations: [PostComponent],
  imports: [
    CommonModule,
    ScrollerModule,
    PanelModule,
    MenuModule,
    ButtonModule,
    AvatarModule,
    CommentsModule
  ],
  exports: [PostComponent]
})
export class PostModule { }
