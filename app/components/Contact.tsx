export default function Contact(){
    return(
        <section className="max-w-4xl mx-auto px-6 py-20">
            <h2 className="text-3xl font-bold text-center mb-5">Contact Me</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2">
            <form className="flex flex-col gap-4 ">
               <input type="text" name='your_name' placeholder="your Name" required className="border p-2 rounded "/>
               <input type="email" name="your email" placeholder="your email" required  className='border p-2 rounded '/>
               <textarea name='message ' placeholder="your message" required className="border rounded h-32 p-2" />
               <button className="px-3 py-1 text-white bg-blue-500 w-1/3 text-center rounded">Submit</button>
            </form>
            <div className="flex flex-col gap-4 items-center ">
               <h3 className="font-bold text-2xl text-blue-900">My Social Links</h3>
               <a href="#"className="flex text-blue-600 underline"><span className="w-8"><img src='/linkedin-logo.webp' /></span >Linked In</a>
               <a href="#" className="flex text-blue-600 underline"><span className="w-7"><img src='/GitHub.png' /></span >GitHub</a>
               <a href="#" className="flex text-blue-600 underline"><span className="w-7"><img src='/Envolop.avif' /></span >Email me</a>
            </div>
            </div>
        </section>
    )
}