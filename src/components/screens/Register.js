import React, { useState } from "react";
import APIregister from "../../api/APIregister";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const navigate = useNavigate();
  const handlesubmit = async (e) => {
    e.preventDefault();
    const response = await APIregister(data);
    console.log(response);
    navigate("/");
  };
  return (
    <div className="backgroundRform">
      <form onSubmit={handlesubmit} className="Rform">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Enter Username
          </label>
          <input
            name="username"
            value={data.username}
            onChange={(e) => {
              handlechange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            name="email"
            value={data.email}
            onChange={(e) => {
              handlechange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input type="password"  name="password" value={data.password} onChange={(e) => {
              handlechange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Confirm Password
          </label>
          <input type="password"
            name="cpassword"
            value={data.cpassword}
            onChange={(e) => {
              handlechange(e);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
