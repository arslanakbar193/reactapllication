import React, { useState } from "react";

const Todo = () => {
  const [username, setusername] = useState("");
  const [items, setitems] = useState([]);
  const [toggleData,settoggleData] = useState(true);
  const [isEdit,setisEdit] = useState(null);

  //add items code here
  const getuserValue = (e) => {
    e.preventDefault();
    if (!username) {
      alert("empty field");
    } else if(username && !toggleData){
      setitems(
        items.map((elem) => {
          if(elem.id === isEdit){
            return{...elem, name:username}
          }
          return elem;
        })
      )
      settoggleData(true);
      setusername(""); 
      setisEdit(null);
    } else {
      const allData = { id: new Date().getTime().toString(), name: username };
      setitems([...items, allData]);
      setusername("");
    }
  };

  //delete items
  const deleteItem = (ind) => {
    const updatedData = items.filter((elem) => {
      return ind !== elem.id;
    });
    setitems(updatedData);
  };

  //edit Items
  const EditItem = (id) => {
      let Editdata = items.find((curElem)=>{
        return curElem.id === id;
        
      });
       setusername(Editdata.name);
       setisEdit(id);
      console.log(Editdata);
      settoggleData(false);
      
  }
  return (
    <>
      <div className="center-form">
        <input 
        className="input-data"
          type="text"
          placeholder="user"
          value={username}
          onChange={(e) => {
            setusername(e.target.value);
          }}
        />
        
        <button onClick={getuserValue} className="add-btn">{toggleData ? "Add" : "Change"}</button>
        <br />
        <br />
        {items.map((curElem) => {
          return (
            <div key={curElem.id} className="Mirror-parent">
              <div className="mirror">
              <h4 className="white">{curElem.name}</h4>
                <button className="add-btn" onClick={() => deleteItem(curElem.id)}>Delete</button>
                <button className="add-btn" onClick={() => EditItem(curElem.id)}>Edit</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Todo;
