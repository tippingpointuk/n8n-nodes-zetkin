import { INodeType, INodeTypeDescription } from 'n8n-workflow'

export class Zetkin implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Zetkin',
		name: 'Zetkin',
		icon: 'file:zetkin.svg',
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		group: [],
		description: 'A platform for organizing activism for socialist, feminist and anti-racist groups.',
		defaults: {},
		credentials: [
			{
				name: 'zetkinOAuth2Api',
				required: true
			}
		],
		requestDefaults: {
			baseURL: 'https://app.dev.zetkin.org',
			url: '/api',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		inputs: ['main'],
		outputs: ['main'],
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Organization',
						value: 'organization',
					},
					{
						name: 'User',
						value: 'user',
					}
				],
				default: 'organization',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,

				displayOptions: {
					show: {
						resource: ['organization'],
					},
				},
				options: [
					{
						name: 'GET',
						value: 'get',
						action: 'Perform a GET request',
						routing: {
							request: {
								method: 'GET',
								url: '/orgs',
							},
						},
					}
				],
				default: 'get'
			}
		],

	}
}
