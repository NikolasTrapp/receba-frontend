import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommentsComponent} from "./comments.component";
import {FieldsetModule} from "primeng/fieldset";
import {AvatarModule} from "primeng/avatar";



@NgModule({
  declarations: [CommentsComponent],
  imports: [
    CommonModule,
    FieldsetModule,
    AvatarModule
  ],
  exports: [CommentsComponent]
})
export class CommentsModule { }
