import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavBarComponent} from './nav-bar.component';
import {ToolbarModule} from 'primeng/toolbar';
import {InputTextModule} from 'primeng/inputtext';
import {AvatarModule} from 'primeng/avatar';
import {BadgeModule} from "primeng/badge";
import {ButtonModule} from "primeng/button";
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {ScrollerModule} from "primeng/scroller";
import {SpeedDialModule} from "primeng/speeddial";
import {ToastModule} from "primeng/toast";
import {MenuModule} from "primeng/menu";

@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    ToolbarModule,
    InputTextModule,
    AvatarModule,
    BadgeModule,
    ButtonModule,
    OverlayPanelModule,
    ScrollerModule,
    SpeedDialModule,
    ToastModule,
    MenuModule
  ],
  exports: [NavBarComponent]
})
export class NavBarModule {
}
