import React, { useState } from 'react'

function Chi() {
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')

  const handlePasswordChange = (e) =>{
    setPassword (e. target.value);
  };
  const handleConfirmChange = (e) => {
    setConfirm(e.target.value);
  };
  const handleSubmit =(e) => {
    e.preventDefault();
     if (password  !== confirm) {
      setError('password do not match')
     } else {
      setError('')
      alert('password set successfully')
     }
  }
  return (
    <div className=' h-[100vh] grid justify-center items-center'>
      <div className=' bg-[wheat] h-[50vh] w-[30vw] grid grid-rows-5' > 
        <div className=' grid justify-center items-center font-bold text-[25px]'>Set Your Password</div>
        <div className=' grid justify-center items-center'><input type=" password" value={password} onChange={handlePasswordChange} required placeholder='enter your password '  className=' h-[6vh] w-[15vw]'/></div>
        <div className=' grid justify-center items-center'><input type=" password" onChange={handleConfirmChange} required value={confirm} placeholder='Confirm Password '  className=' h-[6vh] w-[15vw]'/></div>
        <div className='  grid justify-center items-center font-bold text-[20px]'>{error}</div>
        <div className=' grid justify-center items-center '><button type='submit' onClick={handleSubmit} className=' bg-red-700 font-bold text-[20px] h-[6vh] w-[15vw]'>Set Password</button></div>
      </div>
   









    </div>
  )
}

export default Chi