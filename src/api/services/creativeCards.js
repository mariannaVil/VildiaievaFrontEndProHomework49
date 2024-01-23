import axios from '../initial';

const creativeCards = {
    get: ()  => axios.get('/congratulations')
			.then((data) => data)
			.catch((error) => console.log(error)),
		post: (params) => axios.post('/congratulations', params)
			.then((data) => data)
			.catch((error) => console.log(error)),
		put: (id, params) => axios.put(`/congratulations/${id}`, params),
		delete: (id) => axios.delete(`/congratulations/${id}`),
	}

	export default creativeCards;
	