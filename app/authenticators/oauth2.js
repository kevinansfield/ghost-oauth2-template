import config from '../config/environment';
import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default OAuth2PasswordGrant.extend({
    serverTokenEndpoint: '/authentication/token',
    serverTokenRevocationEndpoint: '/authentication/revoke',

    makeRequest(url, data) {
        /* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
        data.client_id = config.clientId;
        data.client_secret = config.clientSecret;
        /* jscs:enable requireCamelCaseOrUpperCaseIdentifiers */
        return this._super(url, data);
    }
});
