import type { ICredentialType, INodeProperties } from 'n8n-workflow';

export class ZetkinOAuth2Api implements ICredentialType {
	name = 'zetkinOAuth2Api';

	extends = ['oAuth2Api'];

	displayName = 'Zetkin OAuth2 API';

	documentationUrl = 'https://example.com';

	properties: INodeProperties[] = [
		{
			displayName: 'Grant Type',
			name: 'grantType',
			type: 'hidden',
			default: 'authorizationCode',
		},
		{
			displayName: 'Authorization URL',
			name: 'authUrl',
			type: 'hidden',
			default: 'http://login.dev.zetkin.org/login',
		},
		{
			displayName: 'Access Token URL',
			name: 'accessTokenUrl',
			type: 'hidden',
			default: '',
		},
		{
			displayName: 'Auth URI Query Parameters',
			name: 'authQueryParameters',
			type: 'hidden',
			default: '',
		},
		{
			displayName: 'Authentication',
			name: 'authentication',
			type: 'hidden',
			default: 'body',
		},
	];
}
