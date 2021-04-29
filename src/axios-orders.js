import axios from 'axios';

const instance = axios.create({
	baseURL : "http://databse.com"

})


export default instance;