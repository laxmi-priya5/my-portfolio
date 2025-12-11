export default function Skills(){
   return(
    <section id="skills" className="max-w-4xl mx-auto text-center px-6 py-20">
        <h2 className='font-bold text-4xl mb-10'>Skills</h2>
        <p className="mb-6 text-gray-600 font-bold">Tecnologies I work with</p>
        <div className='grid gri-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
            <div className="p-6 rounded-xl text-center shadow-sm hover:shadow-md">HTML</div>
            <div className="p-6 rounded-xl text-center shadow-sm hover:shadow-md">CSS</div>
            <div className="p-6 rounded-xl text-center shadow-sm hover:shadow-md">JavaScript</div>
            <div className="p-6 rounded-xl text-center shadow-sm hover:shadow-md">React</div>
            <div className="p-6 rounded-xl text-center shadow-sm hover:shadow-md">Next.js</div>
            <div className="p-6 rounded-xl text-center shadow-sm hover:shadow-md">Tailwind CSS</div>
            <div className="p-6 rounded-xl text-center shadow-sm hover:shadow-md">Git</div>
            <div className="p-6 rounded-xl text-center shadow-sm hover:shadow-md">GitHub</div>
         
        </div>
    </section>
   )
}