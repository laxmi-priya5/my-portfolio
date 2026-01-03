export default function Certificates() {
  return (
    <section id='certificate'className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10">Certificates</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Certificate 1 */}
        <div className="p-4 border rounded-xl shadow-sm hover:shadow-md transition">
          <img
            src="/iit.png"
            alt="Certificate 1"
            className="rounded-t-xl mb-4 w-full h-65 object-cover"
          />
          <h3 className="text-xl font-semibold mb-1">Blockchain</h3>
          <p className="text-gray-600">Issued by IIT Delhi</p>
          
        </div>

        {/* Certificate 2 */}
        <div className="p-4 border rounded-xl shadow-sm hover:shadow-md transition">
          <img
            src="/nxtWave2.jpeg"
            alt="Certificate 2"
            className="rounded-t-xl mb-4 w-full h-65 object-cover"
          />
          <h3 className="text-xl font-semibold mb-1">Generative AI</h3>
          <p className="text-gray-600">Issued by NxtWave</p>
          
        </div>
      </div>
    </section>
  );
}
