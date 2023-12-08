import axios from 'axios';



	 let responseURL = axios.create({
					baseURL : 'http://localhost:3500'
				});

		export default responseURL;


