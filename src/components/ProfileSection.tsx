export default function ProfileSection() {
  return (
    <section className="mb-8">
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-2">Fazil Husen</h1>
        <p className="text-gray-600 mb-4">
          Software Engineer | Fullstack Developer
        </p>
        <p className="text-gray-800 mb-4">
          Passionate about creating efficient and scalable web applications.
          Always learning and contributing to the developer community.
        </p>
        <div className="flex space-x-4">
          <button className="px-4 py-2 text-white bg-green-600  font-semibold rounded-md hover:bg-green-700 transition-colors">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}
