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

      <div className="flex gap-5 mt-4">
       

        <a
          href={code}
          target="_blank"
          className="text-blue-400 underline underline-offset-1"
        >
          Code
        </a>
        {
          link && <a
          href={link}
          target="_blank"
          className="text-blue-400 underline underline-offset-1"
        >
          View
        </a>
        }
      </div>
    </div>
  );
}
