import Image from "next/image"
export default function Hero(){
    return(
        <section id="home" className="flex flex-col  items-center h-screen mt-7">
            <h1 className="text-5xl font-bold">Laxmipriya Rout</h1>
            <p className="text-xl text-gray-700 mt-4"  >Frontend Developer | react & Next.js</p>
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-500">
                Download CV
            </button>
             <div className="mt-10">
            <Image
                src="/laxmi.jpg"     // Put your image inside public folder
                width={200}
                height={200}
                alt="Profile Image"
                className="rounded-full border-3 border-blue-500 object-cover h-100 w-100"
        />
      </div>
        </section>
    )
}