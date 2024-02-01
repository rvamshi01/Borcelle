import React from 'react'
export default function Testdrive() {
  return (
    <>
    <div className='bdy'>
<div class="con">
        <form class="reg">
            <h2>Book Test Drive</h2>
            <label  for="name">Name:</label>
            <input className="rfi" type="text" id="name" name="name" required/><br/>

            <label  for="email">Email:</label>
            <input  className="rfi" type="email" id="email" name="email" required/><br/>

            <label  for="no">Mobile no:</label>
            <input className="rfi" type="no" id="no" name="no" required/><br/>

            <label for="model">Model:</label>
            <select id="model" name="model">
                <option value="BMW X1">select</option>
                <option value="BMW 2 ">BMW 2 series</option>
                <option value="BMW z1">BMW z1</option>
                <option value="BMW x1">BMW x1</option>
                <option value="BMW 7">BMW 7</option>
                <option value="BMW z4">BMW z4</option>
                <option value="BMW 3">BMW 3</option>


            </select><br/>
            <button type="submit" class="btn btn-success">Submit</button>        </form>
    </div>
    </div>
    </>
  )
}
