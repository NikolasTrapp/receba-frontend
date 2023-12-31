import {NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavBarModule} from "./components/nav-bar/nav-bar.module";
import {FooterModule} from "./components/footer/footer.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MessageService} from "primeng/api";
import {TreeModule} from "primeng/tree";
import {AvatarGroupModule} from "primeng/avatargroup";
import {PanelMenuModule} from "primeng/panelmenu";
import {HomeModule} from "./pages/home/home.module";
import {
  AuthConfig,
  JwksValidationHandler,
  OAuthModule,
  OAuthModuleConfig, OAuthService, OAuthStorage,
  ValidationHandler
} from "angular-oauth2-oidc";
import {authCodeFlowGitHubConfig, authCodeFlowRecebaConfig} from "../shared/config";


const authModuleConfig: OAuthModuleConfig = {
  resourceServer: {
    allowedUrls: ['https://github.com'],
    sendAccessToken: true,
  },
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavBarModule,
    FooterModule,
    TreeModule,
    AvatarGroupModule,
    PanelMenuModule,
    HomeModule,
    // OAuthModule.forRoot(authModuleConfig)
  ],
  providers: [
    provideClientHydration(),
    // { provide: OAuthModuleConfig, useValue: authModuleConfig },
    // MessageService,
    OAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
