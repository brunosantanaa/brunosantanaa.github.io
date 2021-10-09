import React, { useState, useEffect} from 'react';
import github from '../../service/githubAPI';

import './profile.css';

export default function Profile() {
  const [user, setUser] = useState({})
  useEffect(() => {
    Promise.all([
      github.get("users/brunosantanaa"),
    ]).then((response) => {
      setUser(response[0].data);
    })
  }, [])
  
  return(
    <div className="profile-img">
      <img src={user.avatar_url} alt=""/>
    </div>
  )
}
