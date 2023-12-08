import {useState,useEffect} from 'react'
import axios from 'axios'

const useGetHook = (dataUrl) =>{


	const [getData,setData] = useState([]);

	const [progress,setProgress] = useState(false);

	const [errord,setError] = useState(false);





	useEffect(()=>{
		let mount  = true;
		setProgress(true);
			setTimeout(()=>{
				let reqData = async (url) =>{
						try{
							
							let result = await axios.get(url);
							if(mount){
								setData(result.data);
								setError(false);
							}
							
						}catch(error){
							setError(error.message);
							setData([]);
							
						}finally{
							mount && setProgress(false);
						}

					}
					reqData(dataUrl);
			},2000)		
		

		return ()=>{
			mount = false;
		}



		

	},[dataUrl]);

	return  { getData , progress , errord}
}

export default useGetHook;

