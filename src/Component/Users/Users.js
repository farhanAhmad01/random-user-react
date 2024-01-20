import React, { useState, useEffect } from "react";

import TextField from "@mui/material/TextField";
import User from "./User";
import { filtering } from "../../utils/utils";
import { getUsers } from "../../services/service";

const Users = () => {
  const [data, setData] = useState();
  const [changePage,setChangePage] = useState(1)
  const [currentPage,setCurrentPage]=useState()
  
  const [select, setSelect] = useState("name");
  const [input, setInput] = useState("");


  useEffect(() => {
    const getData = async () => {
      try {
        const {users,page} = await getUsers(changePage);
        setData(users);
        setCurrentPage(page)
      } catch (err) {
        console.log("err", err);
      }
    };
    getData();
  }, [changePage]);

  return (
    <>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        style={{ margin: "30px" }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <select style={{margin:'30px',padding:"18px"}} value={select} onChange={(e) => setSelect(e.target.value)}>
        <option value="age">Age</option>
        <option value="name">Name</option>
        <option value="country">Country</option>
      </select>
        <h1 className="page">{currentPage}</h1>
      <div className="container">
        {data &&
          data.map((user, i) => {
            return (
              filtering(user,select,input) && <User key={i} user={user} />
            );
          })}
      </div>
      <div className="btn-container">
      <button className="btn" disabled={changePage==1?true:false} onClick={()=>setChangePage((prev)=>prev-1)}>Prev</button>
      <button className="btn" onClick={()=>setChangePage((prev)=>prev+1)}>Next</button>
      </div>
    </>
  );
};

export default Users;
