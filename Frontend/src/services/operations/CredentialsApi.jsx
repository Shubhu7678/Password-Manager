
import { PasswordManagerEndpoints } from '../apis';
import toast from 'react-hot-toast'
import axios from 'axios';

const { ADD_CREDENTIALS_API,
    GET_ALL_CREDENTIALS_API,
    GET_CREDENTIALS_BY_ID,
    UPDATE_CREDENTIALS_DATA_API,
    DELETE_CREDENTIALS_API
} = PasswordManagerEndpoints;

export const addCredentialsData = async (data) => {


    const toastId = toast.loading('Loading...');
    let result = []
    try {

        const response = await axios.post(ADD_CREDENTIALS_API, data);
        if (!response.data.success) {
            throw new Error(response.data.message);
        }

        result = response.data.data;
        toast.success("Credential added successfully.");


    } catch (error) {

        console.log("Error occured :", error);
        toast.error("Failed to add credential.");
    }

    toast.dismiss(toastId);
    return result;
}

export const getAllCredentials = async () => {

    const toastId = toast.loading('Loading...');
    let result = []
    try {

        const response = await axios.get(GET_ALL_CREDENTIALS_API);

        if (!response.data.success) {

            throw new Error(response.data.message);
        }

        result = response.data.data;
        console.log(result);

    } catch (error) {

        console.log("Error occured :", error);
        toast.error("Failed to fetch credentials.");
    }

    toast.dismiss(toastId);
    return result;
}

export const getCredentialsById = async (credentialId) => {

    const toastId = toast.loading('Loading...');
    let result = []
    try {

        const response = await axios.get(GET_CREDENTIALS_BY_ID + `/${credentialId}`);

        if (!response.data.success) {

            throw new Error(response.data.message);
        }

        result = response.data.data;


    } catch (error) {

        console.log("Error occured :", error);
        toast.error("Failed to get credentials.");
    }

    toast.dismiss(toastId);
    return result;
}

export const updateCredentialsData = async (data, credentialId) => {

    const toastId = toast.loading('Loading...');
    let result = []
    try {

        const response = await axios.put(UPDATE_CREDENTIALS_DATA_API + `/${credentialId}`, data);

        if (!response.data.success) {

            throw new Error(response.data.message);
        }

        result = response.data.data;


    } catch (error) {

        console.log("Error occured :", error);
        toast.error("Failed to update credentials.");
    }

    toast.dismiss(toastId);
    return result;
}

export const deleteCredentailsData = async (credentialId) => {

    const toastId = toast.loading('Loading...');
    let result = []
    try {

        const response = await axios.delete(DELETE_CREDENTIALS_API + `/${credentialId}`);

        if (!response.data.success) {

            throw new Error(response.data.message);
        }

        result = response.data.data;


    } catch (error) {

        console.log("Error occured :", error);
    }

    toast.dismiss(toastId);
    return result;
}
