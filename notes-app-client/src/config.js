/**Configuration file for our app that'll reference all the resources we have created */
export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: "us-east-2",
        BUCKET: "alit-notes-app"
    },
    apiGateway: {
        REGION: "us-east-2",
        URL: "https://74xdbwij0h.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_LHyeGwu09",
        APP_CLIENT_ID: "4k2dqq577ag94rrkh1u36ou19h",
        IDENTITY_POOL_ID: "us-east-2:bd38f53c-c487-4cf2-974f-bf0d35093ab5"
    }
};