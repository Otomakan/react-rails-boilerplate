import Cookies from 'universal-cookie'
const cookies = new Cookies()
const companyServices = {
	getProfile,
}
export default companyServices
function getProfile(){
	return fetch("http://localhost:5000/companyprofile", {
		headers: {
			// Get the authprization header
			'Authorization': cookies.get('JWT_Token_Dic'),
		}
		})
		// Turn the response into json format
		.then(res=>{
			console.log(res)
			if (res.status === 200){
				return res.json()
			} 
			else
				throw res
		})	
		.then(res=>{return res})
		.catch(err=>{throw err.json()})
}