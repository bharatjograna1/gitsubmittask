/**
 * Developed By: Bharat Jograna
 * Created on: 15 July 2022
 * Saga Helpers Functions
*/
//import axios from 'axios';

/**
 * Added by BharatRJ (dt:17/07/2022)
 * Function to Call Rest API
 
export const callRestAPI = async (MethodName = "get", APIURL = "", request = {}, headers = "") => {

	axios.defaults.headers.common = headers;
	var responseData = await axios.MethodName(APIURL, request)
		.then(response => JSON.parse(JSON.stringify(response)))
		.catch(error => JSON.parse(JSON.stringify(error.response)));

	var response = {};
	try {
		response = responseData.data;
	} catch (error) {
		response = responseData.status;
	}
	response.statusCode = '400';
	return response;
}

*/

export const getLocalStorageAPI = async () => {
	const List = JSON.parse(localStorage.getItem("ListData"));
	return {data : List,statusCode : 200};
}

export const setLocalStorageAPI = async (data) => {
	localStorage.setItem("ListData", JSON.stringify(data));
	return {data : "Successfully Done !",statusCode : 200};
}
