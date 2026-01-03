type ProjectCardProps = {
  title: string;
  image: string;
  link: string;
  code: string;
};
export default function ProjectCard({ title, image, link, code }:ProjectCardProps) {
  return (
    <div className="p-4 shadow-lg rounded-lg">
      <img src={image} className="rounded-lg h-38 w-full object-cover" />

      <h2 className="font-bold mt-2">{title}</h2>

      <div className="flex gap-2 mt-2">
       

        <a
          href={code}
          target="_blank"
          className="bg-blue-600 text-white px-3 py-1 rounded"
        >
          Code
        </a>
      </div>
    </div>
  );
}
