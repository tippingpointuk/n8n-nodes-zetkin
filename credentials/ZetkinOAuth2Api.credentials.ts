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
			type: 'string',
			default: 'http://api.dev.zetkin.org/v1/oauth/authorize',
		},
		{
			displayName: 'Access Token URL',
			name: 'accessTokenUrl',
			type: 'string',
			default: '',
		},
		// {
		// 	displayName: 'Auth URI Query Parameters',
		// 	name: 'authQueryParameters',
		// 	type: 'string',
		// 	default: 'scope=level2',
		// },
		{
			displayName: 'Authentication',
			name: 'authentication',
			type: 'string',
			default: 'body',
		},
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'string',
			default: 'level2'
		},
		{
			displayName: 'Ignore SSL Issues',
			name: 'ignoreSSLIssues',
			type: 'boolean',
			default: false,
			doNotInherit: true,
		}
	];
}
