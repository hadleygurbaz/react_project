import React,{useState,useEffect} from 'react';




const UseDevice = ()=>{


	const [widths,setDimension] = useState({
		width : undefined,
		height : undefined
	});



	useEffect(()=>{
		console.log('resize effect is triggered');
		const handleDimension = ()=>{
				setDimension({
					width : window.innerWidth,
					height : window.innerHeight
				})

		}


		window.addEventListener('resize',handleDimension);

		return ()=>{
			window.removeEventListener('resize',handleDimension);
		}

	},[]);



return widths;


}

export default UseDevice;









