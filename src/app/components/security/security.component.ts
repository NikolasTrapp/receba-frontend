import { Component } from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";
import {AuthClientEnum} from "../../enums/auth-client.enum";
import {authCodeFlowGitHubConfig, authCodeFlowGoogleConfig, authCodeFlowRecebaConfig} from "../../../shared/config";

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrl: './security.component.scss'
})
export class SecurityComponent {

  constructor(private oauthService: OAuthService) {
  }

  handleLogin(event: AuthClientEnum) {
    console.log(event)
    switch (event) {
      case AuthClientEnum.GOOGLE_CLIENT:
        this.oauthService.configure(authCodeFlowGoogleConfig);
        break;
      case AuthClientEnum.GIT_HUB_CLIENT:
        this.oauthService.configure(authCodeFlowGitHubConfig);
        break;
      case AuthClientEnum.RECEBA_CLIENT:
        this.oauthService.configure(authCodeFlowRecebaConfig);
        break;
      case AuthClientEnum.SIGNUP:
        //TODO SIGNUP
        break;
    }
    this.oauthService.initLoginFlow();
  }

  protected readonly AuthClientEnum = AuthClientEnum;
}
