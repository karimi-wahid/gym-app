import React from 'react'

function Contact() {
  return (
    <div id='contact'>
        <h1>Contact Us</h1>
        <form>
            <input type="text" placeholder='FUll Name'  required/>
            <input type="email" placeholder='YOur Email' required />
            <textarea placeholder='Write here....' name='message'></textarea>
            <input type="submit" value='Send' />
        </form>
    </div>
  )
}

export default Contact