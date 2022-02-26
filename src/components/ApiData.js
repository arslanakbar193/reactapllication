import React from "react";


const ApiData = ({ userData }) => {
   
    
  return (
    <>
      <div className="container-fluid">
      <div className="row">
        <table className="table table-bordered white">
                  <thead className="white">
                      <th>Id</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>PostId</th>
                  </thead>
                  <tbody>
                    
                {userData.map((curelem) => {
            return (
              <>
                <tr>
                        <td className="white">{curelem.id}</td>
                        <td className="white">{curelem.name}</td>
                        <td className="white">{curelem.email}</td>
                        <td className="white">{curelem.postId}</td>
                    </tr>
                </>
            );
          })}
          </tbody>
                </table>
        </div>
      </div>
    </>
  );
};

export default ApiData;
