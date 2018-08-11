import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

const rootUrl = 'http://reduxblog.herokuapp.com/api';
const apiKey = '?key=yaypuppiesyay';

export function fetchPosts() {
	const request = axios.get(`${rootUrl}/posts${apiKey}`);

	return {
		type: FETCH_POSTS,
		payload: request
	};
}

export function createPost(values, callback) {
	const request = axios.post(`${rootUrl}/posts${apiKey}`, values)
		.then(() => callback());

	return {
		type: CREATE_POST,
		payload: request
	};
}

export function fetchPost(id){
	const request = axios.get(`${rootUrl}/posts/${id}${apiKey}`);
		
	return {
		type: FETCH_POST,
		payload: request
	}
}

export function deletePost(id, callback){
	const request = axios.delete(`${rootUrl}/posts/${id}${apiKey}`)
		.then(() => callback());

	return {
		type: DELETE_POST,
		payload: id
	}
}