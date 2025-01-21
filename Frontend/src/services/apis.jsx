const BASE_URL = import.meta.env.VITE_BASE_URL;

export const PasswordManagerEndpoints = {

    ADD_CREDENTIALS_API: BASE_URL + '/api/v1/credential/addCredentials',
    GET_ALL_CREDENTIALS_API: BASE_URL + '/api/v1/credential/getAllCredentials',
    GET_CREDENTIALS_BY_ID: BASE_URL + '/api/v1/credential/getCredentialsById',
    UPDATE_CREDENTIALS_DATA_API: BASE_URL + '/api/v1/credential/updateCredentials',
    DELETE_CREDENTIALS_API: BASE_URL + '/api/v1/credential/deleteCredentials',

};