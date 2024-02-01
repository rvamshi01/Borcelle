import React, { useEffect, useState } from 'react'

export default function TableFetch() {
  const [fake, setFake] = useState('')
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(jsonData => setData(jsonData));

  }, [])

  return (
    <>
      <center>
        <input type="text" className="setside" placeholder="enter" onChange={(e) => setFake(e.target.value)} value={fake} />
        <br />
        <br />
      </center>
      <div >
        <table className="table table-hover">
          <thead>
            <tr>
              <th>EmployeeID</th>
              <th>EmployeeName</th>
              <th>Email</th>
              <th>UserName</th>
            </tr>
          </thead>
          <tbody>
            {data.filter((userdetails) => userdetails.name.toLowerCase().includes(fake.toLowerCase())).map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <button type="button" className="btn btn-outline-warning">Edit</button>&nbsp;&nbsp;
                <button type="button" className="btn btn-outline-danger">Delete</button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </>
  )
}
