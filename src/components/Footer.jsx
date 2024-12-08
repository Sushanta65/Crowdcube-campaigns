
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 dark:bg-gray-800 dark:text-gray-300 mt-20">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-lg font-semibold mb-4">About Us</h2>
          <p className="text-sm leading-relaxed">
            Empowering communities through impactful campaigns. Join us to make
            a difference in the world.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-blue-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/campaigns" className="hover:text-blue-400 transition">
                Campaigns
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Get In Touch</h2>
          <ul className="space-y-2">
            <li>Email: support@campaigns.com</li>
            <li>Phone: +123 456 789</li>
            <li>Location: Dhaka, Bangladesh</li>
          </ul>
          <div className="mt-4 flex space-x-4 text-lg">
            <a href="#" className="hover:text-blue-500 transition">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-pink-500 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-700 transition">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 py-4 text-center text-sm">
        © {new Date().getFullYear()} Campaigns | All Rights Reserved by Crowdcube Funding.
      </div>
    </footer>
  );
};

export default Footer;
