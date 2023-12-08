import 	React,{createContext} from 'react'
import UseDevice from '../Hooks/UseDevice'

export const  CustomContext= createContext({});

export const MyContext = ({children})=>{
	let {width,height} = UseDevice();


	
	return (
				<CustomContext.Provider value={{
					width,height
				}}>
					{children}
				</CustomContext.Provider>
	)
}














