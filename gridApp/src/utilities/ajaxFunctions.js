import axios from 'axios'

function getRequest(config) {
	if (config.url == undefined) {
		console.error("No url specficied for getRequest")
		return
	}

	const defaultOptions = { withCredentials: true }
	const defaultOnResponseFunc = response => console.warn("Unhandled response from server:", response)
	const defaultOnErrorFunc = error => console.log("Error processing getRequest for", config.url, error)

	const url = 'http://localhost:3000/' + config.url,
				options = config.options || defaultOptions,
				onResponse = config.onResponse || defaultOnResponseFunc,
				onError = config.onError || defaultOnErrorFunc;

	axios.get(url, options).then(onResponse).catch(onError)
}


export { 
	getRequest
}