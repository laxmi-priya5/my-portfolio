import ProjectCard from "./ProjectCard";
export default function Projects(){
    const projects = [
        {
            id: 1,
            title: "Food ordering App-Frontend Development",
            image: "/images.jpg",
            link: "",
            code:'https://github.com/laxmi-priya5/Swiggy-Clone-React-Learning-Project'
        },
        {
            id: 2,
            title: "Youtube-clone-Frontend Development",
            image: "/youtube.jpg",
            link:'',
            code: "https://github.com/laxmi-priya5/youtube-clone",
        },
        {
            id: 3,
            title: "Netflix-Frontend Development",
            image: "/netflix.jpg",
            link: "https://profound-blancmange-dbe67a.netlify.app/",
            code:'https://github.com/laxmi-priya5/Netflix'
        },
        {
            id: 4,
            title: "e-Commerce-Frontend Development",
            image: "/flipkart.jpg",
            link: "https://e-commerce-uq58.onrender.com/   ",
            code:'https://github.com/laxmi-priya5/e-commerce'
        },
        {
            id: 5,
            title: "Interview-Tracker",
            image: "/intTracker.jpg",
            link: "https://track-interviewprep.onrender.com/",
            code:'https://github.com/laxmi-priya5/track-InterviewPrep'
        },
        {
            id: 6,
            title: "Tic-Tac Play",
            image: "/tic-tac-toe.jpg",
            link: "https://track-interviewprep.onrender.com/",
            code:'https://github.com/laxmi-priya5/track-InterviewPrep'
        },
        {
            id: 7,
            title: "Professional-Tinder",
            image: "/tinder.png",
            link: "https://dev-tinder-frontend-alpha.vercel.app/",
            code:'https://github.com/laxmi-priya5/devTinder-Frontend'
        },
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