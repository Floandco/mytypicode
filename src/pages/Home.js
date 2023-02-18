// import { useState, useEffect } from "react";
// import axios from "axios";

// const Home = () => {  
// // useState() = create a local storage for our data.
//   const [data, setData] = useState();

// // isLoading = boolean value 
// 	// = indicates whether query is currently in the process of being loaded
// 	// values = 1/true during loading - 2/false once a response has been received.

// 	// const [isLoading, setIsLoading] = useState(true);


// // useEffect() = to fetch posts as soon as the app renders/mounts
// 	useEffect(() => {

// // async await = for expecting a response 
// 		//   => to wait until the promise settles with the result.
// 		const fullData = async () => {
// 			try {
// 			const response = await axios.get(
// 				// "https://jsonplaceholder.typicode.com/posts");
// 				"https://jsonplaceholder.typicode.com/users");
// 			// console.log(response.data)
// 			setData(response.data);		
			
// 			// setIsLoading(false);

// 			} catch (error) {
// 			console.log(error.response);
// 			};
// 		}
// 		fullData();	
// 	}, []);

// 	// return isLoading ? (
// 	// 	<span>en cours de chargement ... </span>
// 	// ) : (
// return (
// 		<div className="diva">
// 			<span>{data.id}</span>
// 			{data.users.map((user, index) => {
//           return <p key={index}>{user.name}</p>;
//         })}
// 		</div>
// 	)
// }

const Home = () => {
	return Home

}
export default Home;
