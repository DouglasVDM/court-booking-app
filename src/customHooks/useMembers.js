import { useEffect, useState } from 'react';
import axios from 'axios';

const useMembers = (apiEndpointPrefix) => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const membersResponse = await axios.get(`${apiEndpointPrefix}/members`);
        setMembers(membersResponse.data);
      } catch (err) {
        console.error("Error fetching members:", err.message);
      }
    };

    fetchMembers();
  }, [apiEndpointPrefix]);

  return { members, setMembers };
};

export default useMembers;
