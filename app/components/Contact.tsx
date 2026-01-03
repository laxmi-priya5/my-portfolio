"use client"
import {useRef , useState} from 'react';
import emailjs from "@emailjs/browser"                                                                                       
export default function Contact(){
   
   const form  = useRef<HTMLFormElement>(null);
   const [messageSent , setMessageSent] = useState(false);

   const sendEmail = (e:React.FormEvent)=>{
    e.preventDefault();
    
    if(!form.current) return ;

    emailjs.sendForm(
        "service_mua9kbb",
        "template_9jls9sb",
        form.current,
        "reX266xmJLr9n0p9P"
    )
    .then(
        (result)=>{
            console.log(result.text);
            setMessageSent(true);
            form.current?.reset();
        },
        (error)=>{
            console.log(error.text);
        }
    );
   };
    return(
        <>
        
        <section id="contact" className="max-w-4xl mx-auto px-6 py-20">
            <h2 className="text-3xl font-bold text-center mb-5">Contact Me</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2">
            <form  ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 ">
               <input type="text" name='your_name' placeholder="your Name" required className="border p-2 rounded "/>
               <input type="email" name="your email" placeholder="your email" required  className='border p-2 rounded '/>
               <textarea name='message ' placeholder="your message" required className="border rounded h-32 p-2" />
               <button className="px-3 py-1 text-white bg-blue-500 w-1/3 text-center rounded">Submit</button>
            </form>
            <div className="flex flex-col gap-4 items-center ">
               <h3 className="font-bold text-2xl text-blue-900">My Social Links</h3>
               <a href="https://www.linkedin.com/in/laxmipriya-rout-9357aa309/ "className="flex text-blue-600 underline"><span className="w-8"><img src='/linkedin-logo.webp' /></span >Linked In</a>
               <a href="https://github.com/laxmi-priya5" className="flex text-blue-600 underline"><span className="w-7"><img src='/GitHub.png' /></span >GitHub</a>
               <a href="mailto:laxmi.priyar2005@gmail.com" className="flex text-blue-600 underline"><span className="w-7"><img src='/Envolop.avif' /></span >Email me</a>
            </div>
            {messageSent && (
             <p className="mt-4 text-green-600 text-center">
              Message sent successfully!
        </p>
      )}
            </div>
        </section>
        </>
    )
}