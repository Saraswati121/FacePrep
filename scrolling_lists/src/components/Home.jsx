import React, { useEffect, useState } from "react";
import { Loader } from "./Loader";
import "./style.css";

export const Home = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(()=>{
      fetch('https://randomuser.me/api/?results=500')
      .then(res => res.json())
      .then(data => {
          setUser(prevUsers => {
              return [...new Set([...prevUsers, ...data.results.map(user => user)])]
          });
      })
      .catch((err) =>setLoading(false));
    },1000)
}, []);


  const handelclk = () => {
    localStorage.removeItem("auth");
    window.location.href = "/";
  };
  return (
    <div>
      <div className="nav">
        <div>
          <img
            src="https://www.shutterstock.com/image-vector/welcome-lettering-sign-handwritten-modern-600w-1452185639.jpg"
            alt=""
            width="250px"
            height="53px"
            style={{marginTop:"2px"}}
          />
        </div>
        <div>
          <button className="btn" onClick={handelclk}>Logout</button>
        </div>
      </div>
      <div>
        <div className="main">
          <div><h2>Name</h2></div>
          <div><h2>Email</h2></div>
          <div><h2>Mobile</h2></div>
          <div><h2>Image</h2></div>
        </div>
          {user.map((user) => {
              return (
                <div className="main" key={user.email}>
                  <div className="textcol">{user.name.title} {user.name.first} {user.name.last}</div>
                  <div className="textcol">{user.email}</div>
                  <div className="textcol">{user.phone}</div>
                  <div><img src={user.picture.thumbnail} alt="user" /></div>
                </div>
              );
          })}
      </div>
      <div className='loader'>
         {loading && <Loader/>}
      </div>
    </div>
  );
};
