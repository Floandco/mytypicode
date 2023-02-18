import { useState } from "react";
import axios from "axios";

const Detail = () => {
  return
	
			const [data, setData] = useState(null);
		  const apiURL = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";
		
		// Fetch data from API using Axios
		  const fetchData = async () => {
		    const response = await axios.get(apiURL)
		    // Update state with the data
		    setData(response.data) 
		  }
			fetchData();

	return (
    <>
      <h1>Astronomy picture of the day</h1>
      {
        data && 
				<>
        <p>{data.title}</p>
        <p>{data.explanation}</p>
				</>
      }
    </>
  	)
	}

export default Detail;