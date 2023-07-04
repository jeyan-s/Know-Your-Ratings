import React, { useEffect, useState } from 'react';
import Platform from './Platform';
import axios from 'axios';
import Logo from './LogoURL'
const CodeForces = () => {
  const [platformData, setPlatformData] = useState({}); // State to hold platform data

  useEffect(() => {
    // Function to fetch and update the platform data
    const fetchPlatformData = async () => {
      try 
      {
        const uname = "jeyan_s"
        const data = {}
        const response = await axios.get(`http://localhost:5000/codeforces/${uname}`);
        data['features'] = response.data
        data['userName'] = uname;
        setPlatformData(data);
      } 
      catch (error) 
      {
        console.error('Error fetching platform data:', error);
      }
    };
    
    // Call the fetchPlatformData function
    fetchPlatformData();
  }, []);

  return (
    <div className="CodeForces">
        <Platform logo={Logo[2]} name="CodeForces" userName={platformData.userName} features={platformData.features}></Platform>
    </div>
  );
};

export default CodeForces;
