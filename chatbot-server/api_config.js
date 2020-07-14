const SERVER_LANG_PT_BR=1;
const SERVER_LANG_ENG_US=2;

//********** BEGIN SELECT CHATBOT COGNITIVE SERVICE LANGUAGE FOR (LUIS.AI) **********//
/*
	USE_LANG=SERVER_LANG_PT_BR; (for BRAZILIAN PORTUGUESE)
	USE_LANG=SERVER_LANG_ENG_US; (for US ENGLISH)
*/

const USE_LANG=SERVER_LANG_PT_BR;//SERVER_LANG_PT_BR;

//********** END SELECT CHATBOT COGNITIVE SERVICE LANGUAGE FOR (LUIS.AI) **********//


//********** BEGIN LUIS.AI API **********//

// Configuration for Brazilian Portuguese culture endpoint
const luisApplication_pt_br = {
    applicationId: 'cef29f1c-c103-49e0-b3a3-1bc343317fe6',// Your Brazilian Portuguese culture AppId. Example: 'f220162c-a4f2-475c-804d-4d39b0e1c3ae'
    endpointKey: '83b0e1a8cd9f44adbbdf4953c66a4816',//Your Brazilian Portuguese culture subscriptionKey. Example: '21a2efcb7cdfec03f65c33811b682581'
    azureRegion: '-360'//Your Brazilian Portuguese culture region. Example: '-360'
}

// Configuration for ENGLISH CULTURE culture endpoint
const luisApplication_en_us = {
    applicationId: '<YOUR US ENGLISH APP ID>',//Your US English culture appId. Example: '9f806443-0f66-4e40-b3b3-ac113621a0c4'
    endpointKey: '<YOUR US ENGLISH SUBSCRIPTION KEY>',//Your US English culture subscriptionKey. Example: '12caefcb7cdf4cf3af4c00833d684581'
    azureRegion: '-360'//Your US English culture region. Example: '-360'
}

var botFrameworkAdapter = {
    appId: null,//Your AppId (optional if you are using offline). Don't care about for this example
    appPassword: null //Your MS App Password (optional). Don't care about for this example
}

const LUIS_PORT=3978;

// Create configuration for LuisRecognizer's runtime behavior.
const luisPredictionOptions = {
    includeAllIntents: true,
    log: true,
    staging: true// false // Change to false in "production" mode
}

//********** END OF LUIS.AI API **********//




//---------------------------------------------------------




//********** BEGIN CRIPTOCURRENCY API CONFIG **********//

const COINMARKETCAP_API="https://api.coinmarketcap.com/v1/ticker/";

//********** END CRIPTOCURRENCY API CONFIG **********//



//---------------------------------------------------------



//********** BEGIN FIAT CURRENCY API CONFIG **********//

const APILAYER_NET_API="http://www.apilayer.net/api/live?access_key=9d58753a7da5cc911f6d8f61410ca0cb&format=1";

//********** END FIAT CURRENCY API CONFIG **********//



//--------------------------------------------------//



//********** BEGIN IBM IoT PLATFORM **********//

// By default IBM Bluemix is disabled. If you want to enable it, set F_USE_IBM_IOT=true and configure your IoT device to interact with myCryptoBot service.

var ibmAppClientConfig = {
  org: '<YOUR IOT_ORG>', // Your IBM IoT appOrg. Example: org: 'spo6lv'
  id: '<YOUR IOT APP ID>', // Your IBM IoT appId. Example: id: 'myChatbotIoTApp'
  "domain": "internetofthings.ibmcloud.com", // IBM IoT domain. Example: "domain": "internetofthings.ibmcloud.com"
  "auth-key": 'YOUR AUTH_KEY', // IBM IOT APP AUTH-KEY: Example: "auth-key": 'a-spo6lv-mjsl7q0huh'
  "auth-token": '<YOUR AUTH_TOKEN>' // IBM IOT APP AUTH-TOKEN: Example: "auth-token": 's_-fcasM2E4hMWh2UO'
};

const F_DEVICE_TYPE = "MyDeviceType";
const F_DEVICE_ID = "MyDeviceId";
const F_DATA = "data";
const F_DATA_TYPE = "json";
const F_DEBUG = true; // Debug mode default: true
const F_TIMEOUT = 10; //Default in seconds
const F_USE_IBM_IOT=false; // Default. IoT service disabled


//********** END IBM IoT PLATFORM **********//


module.exports = {
	botFrameworkAdapter, luisPredictionOptions, LUIS_PORT,
	COINMARKETCAP_API, APILAYER_NET_API, USE_LANG,
	ibmAppClientConfig, F_DEVICE_TYPE, F_DEVICE_ID, F_DATA, F_DATA_TYPE, F_DEBUG, F_TIMEOUT, F_USE_IBM_IOT,
	luisApplication: function() {
		return (USE_LANG===SERVER_LANG_ENG_US)?luisApplication_en_us:luisApplication_pt_br;
	}
}

