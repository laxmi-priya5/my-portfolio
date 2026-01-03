import ProjectCard from "./ProjectCard";
export default function Projects(){
    const projects = [
        {
            id: 1,
            title: "Food ordering App-Frontend Development",
            image: "/images.jpg",
            link: "https://calm-chaja-4bf150.netlify.app/",
            code:'https://github.com/laxmi-priya5/Swiggy-Clone-React-Learning-Project'
        },
        {
            id: 2,
            title: "Youtube-clone-Frontend Development",
            image: "/youtube.jpg",
            link:'#',
            code: "https://github.com/laxmi-priya5/youtube-clone",
        },
        {
            id: 3,
            title: "Netflix-Frontend Development",
            image: "/netflix.jpg",
            link: "#",
            code:'https://github.com/laxmi-priya5/Netflix-gpt'
        },
        {
            id: 4,
            title: "e-Commerce-Frontend Development",
            image: "/flipkart.jpg",
            link: "#",
            code:'https://github.com/laxmi-priya5/e-commerce'
        },
        // {
        //     id: 5,
        //     title: "Professional Tinder-Fullstack",
        //     image: "/jobTinder.jpg",
        //     link: "#",
        //     code:'https://github.com/laxmi-priya5/e-commerce'
        // },
    ];
    return(
        <section id="projects" className="max-w-4xl mx-auto px-6 py-20">
          <h2 className="text-4xl text-center mb-5 font-bold ">Practice & Learning Based Projects
</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project) => <ProjectCard key={project.id} {...project}/>
        )}
          </div>
        </section>
    )
}