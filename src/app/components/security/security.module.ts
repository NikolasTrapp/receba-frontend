import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SecurityComponent} from "./security.component";
import {OAuthService} from "angular-oauth2-oidc";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {RouterLink} from "@angular/router";
import {RippleModule} from "primeng/ripple";



@NgModule({
  declarations: [SecurityComponent],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    RouterLink,
    RippleModule
  ],
  exports: [SecurityComponent],
  providers: [OAuthService]
})
export class SecurityModule { }
