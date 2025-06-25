export type KeycloakAccessToken = {
  exp: number;
  iat: number;
  auth_time: number;
  jti: string;
  iss: string;
  aud: string[];
  sub: string;
  typ: string;
  azp: string;
  sid: string;
  acr: string;
  "allowed-origins": string[];

  realm_access: {
    roles: string[];
  };

  resource_access: {
    [clientId: string]: {
      roles: string[];
    };
  };

  scope: string;
  email_verified: boolean;
  name: string;
  preferred_username: string;
  given_name: string;
  family_name: string;
  email: string;
};

export type KeycloakUser = {
  id: string;
  username: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  emailVerified: boolean;
  createdTimestamp: number;
  enabled: boolean;
};
