
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

  export default function Contact() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8 bg:gray-300">
          <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
          <hr className="border-t-2 border-red-400 mb-8" />
  
          <div className="flex flex-col md:flex-row gap-8">
            {/* Send us a Message Section */}
            <div className="w-full md:w-1/2">
              <h2 className="text-xl font-semibold mb-4">Send us a Message</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <textarea
                  placeholder="Your Message"
                  
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                ></textarea>
                <button
                  type="submit"
                  className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-white hover:text-black transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
  
            {/* Contact Information Section */}
            <div className="w-full md:w-1/2">
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              <ul className="space-y-4">
             

<li className="flex items-center">
  <FiPhone className="w-6 h-6 text-red-500 mr-4" />
  +1 123 456 789
</li>
<li className="flex items-center">
  <FiMail className="w-6 h-6 text-red-500 mr-4" />
  info@example.com
</li>
<li className="flex items-center">
  <FiMapPin className="w-6 h-6 text-red-500 mr-4" />
  123 Street, City, Country
</li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
  