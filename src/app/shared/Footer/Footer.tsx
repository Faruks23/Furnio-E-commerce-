export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="font-bold text-xl">Funiro.</h2>
            <address className="mt-4 text-sm text-gray-600">
              400 University Drive Suite 200 <br />
              Coral Gables, <br />
              FL 33134 USA
            </address>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-gray-800">Links</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black">Home</a></li>
              <li><a href="#" className="hover:text-black">Shop</a></li>
              <li><a href="#" className="hover:text-black">About</a></li>
              <li><a href="#" className="hover:text-black">Contact</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-semibold text-gray-800">Help</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black">Payment Options</a></li>
              <li><a href="#" className="hover:text-black">Returns</a></li>
              <li><a href="#" className="hover:text-black">Privacy Policies</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-gray-800">Newsletter</h3>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="border border-gray-400 px-4 py-2 w-full text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
              />
              <button
                type="submit"
                className="mt-4 bg-black text-white px-4 py-2 text-sm rounded-md hover:bg-gray-800 w-full"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-200 pt-4 text-center text-sm text-gray-600">
          <p>&copy; 2023 Funiro. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
