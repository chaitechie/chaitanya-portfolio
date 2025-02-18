'use client';

import React,{useState} from 'react'
import emailjs from '@emailjs/browser'
function Contact() {
    const [userName,setUserName] = useState<string>("");
  const [userEmail,setUserEmail] = useState<string>("");
  const [userSubject,setUserSubject] = useState<string>("");
  const [userMessage,setUserMessage] = useState<string>("");



  const [complete,setComplete] = useState<boolean>(false)
  const handleForm = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID 
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY 
    

  setComplete(false)
   
    try{
      const emailParams = {
        name:userName,
        email:userEmail,
        subject:userSubject,
        message:userMessage,
      }
      const res = await emailjs.send(`${serviceId}`,`${templateID}`,emailParams,`${userID}`)

      if(res.status === 200){
        setComplete(true)
        setUserEmail('');
        setUserMessage('');
        setUserName('');
        setUserSubject('')
      }
    }
    catch(error){
      alert(`${error} found`)

    }
  }
  
  return (
<div className='w-screen'>
                

                <form className="flex flex-col jusitfy-center items-center gap-[2%]">
                  <div className='w-[80%] max-w-[600px] text-center p-[40px]
                  border-[2px] border-(--gray) bg-white shadow-[10px] gap-[30px] rounded-lg
                  '>
    
                {complete !== true ? (
                  <h3 className='text-center font-(--font-medium) text-(--primary) capitalize'>Please fill the subject </h3>
                ) :(
                  <h3 className='text-center font-(--font-medium) text-(--primary) capitalize'>Your message is sent!. You get a reply by me 1-2 day</h3>
                )}
    
               <input type="text" onChange={(e) => setUserName(e.target.value)}
               name="name" value={userName} className='bg-(--gray) w-[200px] h-[5vh] rounded-lg outline-none border-(--background) border-2 text-white text-center m-2 xl:w-[400px] 2xl:w-[400px] placeholder:font-(--font-regular) placeholder:text-white placeholder:text-center
               'placeholder='Enter your fullname' required/>
    
               <input type="email" onChange={(e) => setUserEmail(e.target.value)}
                name="email" value={userEmail}  className='bg-(--gray) w-[200px] xl:w-[400px] 2xl:w-[400px] h-[5vh] rounded-lg outline-none border-(--background) border-2 m-2 
                placeholder:font-(--font-regular) text-white placeholder:text-white placeholder:text-center text-center'placeholder='Enter your email address'
                required
                />
               <input type="text" onChange={(e) => setUserSubject(e.target.value)}
               name="subject" value={userSubject} className='bg-(--gray) w-[200px] h-[5vh] rounded-lg outline-none border-(--background) border-2 text-white text-center m-2 xl:w-[400px] 2xl:w-[400px] placeholder:font-(--font-regular) placeholder:text-white placeholder:text-center
               'placeholder='Enter your subject' required/>
                   
                  
                  <textarea name="message" value={userMessage}  onChange={(e) => setUserMessage(e.target.value)} className='bg-(--gray) w-[200px] h-[12vh] rounded-lg outline-none border-(--background) border-2 m-2 xl:w-[400px] 2xl:w-[400px] placeholder:font-(--font-regular) placeholder:text-white placeholder:text-center text-white' 
                    placeholder='Write your message '
                    maxLength={200}
                    />
                  <button onClick={handleForm}
                  className='w-[200px] h-[8vh] bg-(--primary) hover:bg-(--background) text-white'
                  >Submit</button>
               
                  </div>
                  
                </form>
                  
                 </div>
      
)
}

export default Contact