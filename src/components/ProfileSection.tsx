import { Mail, MapPin, Linkedin, Github } from "lucide-react";

export default function ProfileSection() {
  return (
    <section className="mb-8">
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-2">Mohammed Fazil Husen</h1>
        <p className="text-xl text-gray-600 mb-4 font-medium">
          System Engineer at Tata Consultancy Services Ltd.
        </p>

        <div className="flex items-center mb-4">
          <MapPin className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0" />
          <span>Hyderabad, India</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6 text-gray-700">
          <div className="flex items-center">
            <Mail className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0" />
            <a href="mailto:fazil.husen6@gmail.com" className="text-blue-600 hover:underline text-sm">
              fazil.husen6@gmail.com
            </a>
          </div>
          <div className="flex items-center">
            <Linkedin className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0" />
            <a
              href="https://www.linkedin.com/in/fazilhusen/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm"
            >
              linkedin.com/in/fazilhusen
            </a>
          </div>
          <div className="flex items-center">
            <Github className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0" />
            <a
              href="https://github.com/FazilKlkt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm"
            >
              github.com/FazilKlkt
            </a>
          </div>
        </div>

        <div className="flex space-x-4">
          <a
            href="https://drive.google.com/file/d/1lSMQgRGG9BBrc_kMv2sLgNiGWBmEl-z7/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-4 py-2 text-white bg-green-600 font-semibold rounded-md hover:bg-green-700 transition-colors">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

