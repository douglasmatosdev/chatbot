const { USE_LANG, SERVER_LANG_ENG_US } = require('./cognitive_mocked_data.js');

module.exports = {
	dialogYesNo: function (title, message, id) {
		var defaultLang = (USE_LANG === SERVER_LANG_ENG_US);
		var adaptiveCard =
		{
			contentType: "application/vnd.microsoft.card.adaptive",
			content: {
				"$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
				"type": "AdaptiveCard",
				"version": "1.0",
				"body": [
					{
						"type": "Container",
						"items": [
							{
								"type": "TextBlock",
								"text": title,
								"weight": "bolder",
								"size": "medium"
							},
							{
								"type": "TextBlock",
								"text": message,
								"size": "big",
								"isSubtle": true,
								"wrap": true
							}
						]
					}
				],
				"actions": [
					{
						"type": "Action.Submit",
						"data": {
							"id": id + "YES"
						},
						"title": defaultLang ? "Yes" : "Sim"
					},
					{
						"type": "Action.Submit",
						"data": {
							"id": id + "NO"
						},
						"title": defaultLang ? "No" : "Não"
					}
				]
			}
		}
		return adaptiveCard;
	},
	dialogStartConversation: function (title, subtitle, yourname, placeholder) {
		var defaultLang = (USE_LANG === SERVER_LANG_ENG_US);
		var startConv = {
			"$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
			"type": "AdaptiveCard",
			"version": "1.0",
			"body": [
				{
					"type": "ColumnSet",
					"columns": [
						{
							"type": "Column",
							"width": 2,
							"items": [
								{
									"type": "TextBlock",
									"text": title,
									"weight": "Bolder",
									"size": "Medium"
								},
								{
									"type": "TextBlock",
									"text": subtitle,
									"isSubtle": true,
									"wrap": true
								},
								{
									"type": "TextBlock",
									"text": yourname,
									"wrap": true
								},
								{
									"type": "Input.Text",
									"id": "userNameStartDialog",
									"placeholder": placeholder
								}
							]
						}
					]
				}
			],
			"actions": [
				{
					"type": "Action.Submit",
					"title": defaultLang ? "Start" : "Começar",
					"id": "startConversation"
				}
			]
		};
		return { content: startConv }
	},
	welcomeDialogMenuHelper: function (userName) {
		var defaultLang = (USE_LANG === SERVER_LANG_ENG_US);
		var menuHelper = {
			contentType: "application/vnd.microsoft.card.adaptive",
			content: {
				"$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
				"type": "AdaptiveCard",
				"version": "1.0",
				"body": [
					{
						"type": "Container",
						"items": [
							{
								"type": "TextBlock",
								"text": (defaultLang) ? "Welcome!" : "Bem vindo!",
								"weight": "bolder",
								"size": "medium"
							},
							{
								"type": "TextBlock",
								"text": (defaultLang) ? "Welcome " + userName + ". Click in options below to know more about me." :
									"Bem vindo " + userName + ". Clique nas opções abaixo para saber mais sobre mim.",
								"size": "big",
								"isSubtle": true,
								"wrap": true
							}
						]
					}
				],
				"actions": [
					{
						"type": "Action.Submit",
						"data": {
							"id": "whoami"
						},
						"title": (defaultLang) ? "Who am I?" : "Quem sou eu?"
					},
					{
						"type": "Action.Submit",
						"data": {
							"id": "whaticando"
						},
						"title": (defaultLang) ? "What I can do" : "O que sei fazer"
					},
					{
						"type": "Action.Submit",
						"data": {
							"id": "aboutmydev"
						},
						"title": (defaultLang) ? "About my developer" : "Sobre meu desenvolvedor"
					},
					{
						"type": "Action.Submit",
						"title": defaultLang?"RETURN":"VOLTAR",
						"data": {
							"id": "menuReturn"
						}
					}
				]
			}
		};
		return menuHelper;
	},
	menuFirstOptions: function () {
		var defaultLang = (USE_LANG === SERVER_LANG_ENG_US);
		var menuOptions = {
			contentType: "application/vnd.microsoft.card.adaptive",
			content: {
				"$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
				"type": "AdaptiveCard",
				"version": "1.0",
				"body": [
					{
						"type": "Container",
						"items": [
							{
								"type": "textBlock",
								"text": (defaultLang) ? "Request a demo" : "Solicite uma demonstração",
								"weight": ""
							}
						]
					}
				],
				"actions": [
					{
						"type": "Action.Submit",
						"data": {
							"id": "submitRequestDemo"
						},
						"title": (defaultLang) ? "Request a demo" : "Solicite uma demonstração"
					},
					{
						"type": "Action.Submit",
						"data": {
							"id": "learnMoreIntelieLive"
						},
						"title": (defaultLang) ? "Learn more about Intelie Live" : "Saiba mais sobre Intelie Live"
					},
					{
						"type": "Action.Submit",
						"data": {
							"id": "moreOptions"
						},
						"title": (defaultLang) ? "More options" : "Mais opções"
					}
				]
			}
		};
		return menuOptions;
	},
	requestDemo: function () {
		var defaultLang = (USE_LANG === SERVER_LANG_ENG_US);
		var demo = {
			"$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
			"type": "AdaptiveCard",
			"version": "1.0",
			"body": [
				{
					"type": "ColumnSet",
					"columns": [
						{
							"type": "Column",
							"width": 2,
							"items": [
								{
									"type": "TextBlock",
									"text": "Obtenha uma demonstração",
									"weight": "Bolder",
									"size": "Medium"
								},
								{
									"type": "TextBlock",
									"text": "Digite seu e-mail",
									"wrap": true
								},
								{
									"type": "Input.Text",
									"id": "userEmailRequestDemo",
									"placeholder": "Seu email aqui"
								}
							]
						}
					]
				}
			],
			"actions": [
				{
					"type": "Action.Submit",
					"title": (defaultLang) ? "Submit" : "Enviar",
					"data": {
						"id": "confirmMsgRequestDemo"
					}
				}
			]
		};
		return { content: demo }
	},
	msgConfirmRequestDemo: function (userName, userEmail) {
		var defaultLang = (USE_LANG === SERVER_LANG_ENG_US);
		var msgConfirm = {
			contentType: "application/vnd.microsoft.card.adaptive",
			content: {
				"$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
				"type": "AdaptiveCard",
				"version": "1.0",
				"body": [
					{
						"type": "Container",
						"items":
							[
								{
									"type": "TextBlock",
									"text": (defaultLang) ? `${userName},\nYour demo has been sent to ${userEmail}` :
										`${userName},\nSua demonstração foi enviada para ${userEmail}`,
									"size": "big",
									"isSubtle": true,
									"wrap": true
								}
							],
						"actions": [
							{
								"type": "Action.Submit",
								"data": {
									"id": "submitRequestDemo"
								},
								"title": (defaultLang) ? "Request a demo" : "Solicite uma demonstração"
							},
							{
								"type": "Action.Submit",
								"data": {
									"id": "learnMoreIntelieLive"
								},
								"title": (defaultLang) ? "Learn more about Intelie Live" : "Saiba mais sobre Intelie Live"
							},
							{
								"type": "Action.Submit",
								"data": {
									"id": "moreOptions"
								},
								"title": (defaultLang) ? "More options" : "Mais opções"
							}
						]
					}
				]
			}
		};
		return msgConfirm;
	},
	menuNavigation: function () {
		var defaultLang = (USE_LANG === SERVER_LANG_ENG_US);
		var nav = {
			contentType: "application/vnd.microsoft.card.adaptive",
			content: {
				"$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
				"type": "AdaptiveCard",
				"version": "1.0",
				"body": [
					{
						"type": "ColumnSet",
						"columns": [
							{
								"type": "Column",
								"width": "stretch",
								"items": [
									{
										"type": "ActionSet",
										"actions": [
											{
												"type": "Action.Submit",
												"title": defaultLang?"RETURN":"VOLTAR",
												"data": {
													"id": "menuReturn"
												}
											}
										]
									}
								]
							},
							{
								"type": "Column",
								"width": "stretch",
								"items": [
									{
										"type": "ActionSet",
										"actions": [
											{
												"type": "Action.Submit",
												"title": defaultLang?"MORE OPTIONS":"MAIS OPÇÕES",
												"data": {
													"id": "moreOptions"
												}
											}
										]
									}
								]
							}
						],
						"spacing": "Small",
						"style": "good",
						"bleed": true
					}
				]
			}
		}
		return nav;
	},
	
}

