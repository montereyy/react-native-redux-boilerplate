import * as axios from 'axios';
import AppConfig from '../config/app.config';
import AuthHelper from './auth.helper';

class HttpHelper {

	static decorateAxios() {
		axios.interceptors.request.use(HttpHelper.requestJwtInterceptor);
		axios.interceptors.response.use(null, HttpHelper.responseUnauthorizedInterceptor);
	}

	static async requestJwtInterceptor(config) {
		let token = (await AuthHelper.getToken());

		if (token) {
			config.headers['Authorization'] = `${AppConfig.jwtKey} ${token}`;
		}

		return config;
	}

	static responseUnauthorizedInterceptor(error) {
		if (error.response.status === 401) {
			AuthHelper.goToLogin();
		}
		return Promise.reject(error);
	}

}

export default HttpHelper;