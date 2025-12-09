export default function Projects(){

    return(
        <section className="max-w-4xl mx-auto px-6 py-20">
          <h2 className="text-4xl text-center mb-5 font-bold ">Projects</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="p-4 shadow-lg rounded-lg">
                <img src='images.jpg' className="rounded-lg"/>
                <h2 className="font-bold mt-2 ">Title</h2>
                <button className="bg-blue-600 text-white text-sm px-3 py-1 font-bold rounded mt-2 hover:bg-blue-500 cursor-pointer"><a href='https://my-awesome-app.vercel.app'>View </a></button>
            </div>
            <div className="p-4 shadow-lg rounded-lg">
                <img src='images.jpg' className="rounded-lg"/>
                <h2 className="font-bold mt-2 ">Title</h2>
                <button className="bg-blue-600 text-white text-sm px-3 py-1 font-bold rounded mt-2 hover:bg-blue-500 cursor-pointer">View </button>
            </div>
           <div className="p-4 shadow-lg rounded-lg">
                <img src='images.jpg' className="rounded-lg"/>
                <h2 className="font-bold mt-2 ">Title</h2>
                <button className="bg-blue-600 text-white text-sm px-3 py-1 font-bold rounded mt-2 hover:bg-blue-500 cursor-pointer ">View </button>
            </div>
          </div>
        </section>
    )
}