import Image from "next/image"
import thapa from "@/public/1.jpg"
import Vinod from "@/public/two.jpg"

export const metadata = {
  title: "Service Page",
  description: "Meet our expert team members who provide various web development services.",
  authors : [
    {name: "Diksha Gupta"}, {name: "Gupta technical", url: "https://guptatechical.com"},
  ],
  keywords: ["nextjs", "reactjs", "fullstack", "web development", "team"]
};


const Service = () => {
  return (
    <section className="font-roboto">
      <h3>You are on the Service page</h3>

      <h2 className="text-center text-3xl font-bold mb-10">Our Team</h2>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-amber-100 rounded-lg shadow-md p-6 text-center hover:shadow-lg hover:translate-y-2 transition-all duration-300">
            <div className="w-24 h-24 bg-blue-300 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Image
                src={thapa}
                width={500}
                height={500}
                alt="thapa"
                className="w-full h-full rounded-full"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Thapa Technical</h3>
            <p className="text-sm text-gray-600 mt-2">Frontend Developer</p>
            <p className="text-xs text-gray-500 mt-1">React & TypeScript</p>
          </div>


          {/* Team Member 2 */}
          <div className="bg-amber-100 rounded-lg shadow-md text-center hover:shadow-lg hover:translate-y-2 transition-all duration-300">
            <div className="w-full h-full relative bg-blue-300 rounded-full mx-auto mb-4 flex items-center justify-center">
             <Image 
             src={Vinod}
                alt="Vinod Thapa"
               fill={true}
               quality={100}
               priority={false}
               placeholder="blur"
               blurDataURL=""
             />
            </div>
            
          </div>


          {/* Team Member 3 */}
          <div className="bg-amber-100 rounded-lg shadow-md p-6 text-center hover:shadow-lg hover:translate-y-2 transition-all duration-300">
            <div className="w-24 h-24 bg-blue-300 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-xl font-bold text-blue-900">MJ</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Mike Johnson</h3>
            <p className="text-sm text-gray-600 mt-2">Backend Develope</p>
            <p className="text-xs text-gray-500 mt-1">Node.js & Python</p>
          </div>


          {/* Team Member 4 */}
          <div className="bg-amber-100 rounded-lg shadow-md p-6 text-center hover:shadow-lg hover:translate-y-2 transition-all duration-300">
            <div className="w-24 h-24 bg-blue-300 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-xl font-bold text-blue-900">EW</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Emily Wilson</h3>
            <p className="text-sm text-gray-600 mt-2">Product Manager</p>
            <p className="text-xs text-gray-500 mt-1">Strategy & Analytics</p>
          </div>



          {/* Team Member 5 */}
          <div className="bg-amber-100 rounded-lg shadow-md p-6 text-center hover:shadow-lg hover:translate-y-2 transition-all duration-300">
            <div className="w-24 h-24 bg-blue-300 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-xl font-bold text-blue-900">DL</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">David Lee</h3>
            <p className="text-sm text-gray-600 mt-2">DevOps Engineer</p>
            <p className="text-xs text-gray-500 mt-1">Docker & CI/CD</p>
          </div>



          {/* Team Member 6 */}
          <div className="bg-amber-100 rounded-lg shadow-md p-6 text-center hover:shadow-lg hover:translate-y-2 transition-all duration-300">
            <div className="w-24 h-24 bg-blue-300 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-xl font-bold text-blue-900">AB</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Anna Brown</h3>
            <p className="text-sm text-gray-600 mt-2">QA Engineer</p>
            <p className="text-xs text-gray-500 mt-1">Testing & Automation</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Service
