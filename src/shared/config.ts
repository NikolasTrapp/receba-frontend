import {AuthConfig} from "angular-oauth2-oidc";

export const authCodeFlowGoogleConfig: AuthConfig = {
  issuer: "https://accounts.google.com/o/oauth2/v2/auth",
  redirectUri: "http://localhost:4200/",
  clientId: "720648979863-4thh3jebe2jufhb46kti31r244qvcdnh.apps.googleusercontent.com",
  responseType: "code",
  scope: "https://www.googleapis.com/auth/cloud-platform.read-only",
  tokenEndpoint: "https://oauth2.googleapis.com/token",
  revocationEndpoint: "https://oauth2.googleapis.com/revoke",
  checkOrigin: false
};
export const authCodeFlowGitHubConfig: AuthConfig = {
  issuer: "https://github.com/login/oauth/authorize",
  redirectUri: "http://localhost:4200/",
  clientId: "88bd07fd2e2c7906542a",
  responseType: "code",
  scope: "user",
  tokenEndpoint: "https://github.com/login/oauth/access_token",
  checkOrigin: false
};
export const authCodeFlowRecebaConfig: AuthConfig = {
  issuer: "http://localhost:8080/oauth2/login",
  redirectUri: "http://localhost:4200/",
  clientId: "receba-frontend",
  responseType: "code",
  scope: "READ WRITE",
  revocationEndpoint: "http://localhost:8080/oauth2/revoke",
  tokenEndpoint: "http://localhost:8080/oauth2/token",
  checkOrigin: false
};
