
export default function Navbar(){

    return (
        <nav className="flex items-center justify-around px-6 py-4 shadow bg-white sticky top-0">
          <div className="text-xl font-bold">My portfolio</div>
          <div className="flex gap-6">
            <a href='#about' className="hover:text-blue-600">About</a>
            <a href='#skills'  className="hover:text-blue-600">Skills</a>
            <a href='#projects'  className="hover:text-blue-600">Projects</a>
            <a href='#contacts'  className="hover:text-blue-600">Contacts</a>
          </div>
        </nav>
    );
}