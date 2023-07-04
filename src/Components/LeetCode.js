import React, { useEffect, useState } from 'react';
import Platform from './Platform';
import axios from 'axios';
import Logo from './LogoURL'

const LeetCode = () => {
  const [platformData, setPlatformData] = useState({}); // State to hold platform data

  useEffect(() => {
    // Function to fetch and update the platform data
    const fetchPlatformData = async () => {
      try 
      {
        const uname = "jeyan_s"
        const data = {}
        const response = await axios.get(`http://localhost:5000/leetcode/${uname}`);
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
    <div className="LeetCode">
        <Platform logo={Logo[0]} name="LeetCode" userName={platformData.userName} features={platformData.features}></Platform>
    </div>
  );
};

export default LeetCode;
