import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { API_URLS } from "../apiUrls";

const UserPage = () => {
  const user = useSelector((state) => state.user.user);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await axios.get(API_URLS.GET_USERS);
      console.log(response.data);
      setUsers(response.data);
    };
    fetchAPI();
  }, []);

  return (
    <div className="bg-black flex justify-center items-center h-screen">
      {users.length > 0 ? (
        users.map((user) => (
          <div key={user.id}>
            <h2 className="text-white">{user.name}&nbsp;&nbsp;</h2>
          </div>
        ))
      ) : (
        <h2 className="text-white">No users found</h2>
      )}
    </div>
  );
};

export default UserPage;
