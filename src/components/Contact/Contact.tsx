const Contact = () => {
  return (
    // <div className="min-h-screen bg-gradient-to-br from-navy-900 via-purple-900 to-navy-900 text-white p-8">
    <div className="min-h-screen  text-white p-8">
      {/* Contact Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          Contact <span className="text-purple-400">Us</span>
        </h1>
        <div className="space-y-2 text-orange-300">
          <p>Email ID: <span className="text-white">info@decodingbollywoodhits.in</span></p>
          <p>Contact Number: <span className="text-white">9836311375</span></p>
        </div>
      </div>

      {/* Enquiry Form */}
      <div className="max-w-md mx-auto bg-white/10 backdrop-blur-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Enquire Now!</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name:"
            className="w-full p-3 rounded-md bg-white text-gray-800"
          />
          <input
            type="tel"
            placeholder="Phone No:"
            className="w-full p-3 rounded-md bg-white text-gray-800"
          />
          <input
            type="email"
            placeholder="Email ID:"
            className="w-full p-3 rounded-md bg-white text-gray-800"
          />
          <input
            type="text"
            placeholder="Course:"
            className="w-full p-3 rounded-md bg-white text-gray-800"
          />

          <div className="text-center text-gray-300 my-4">OR</div>

          {/* Social Login Buttons */}
          <div className="space-y-3">
            <button className="w-full p-3 rounded-md bg-white text-gray-700 flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
              <img src="https://www.google.com/favicon.ico" alt="" className="w-5 h-5" />
              Continue with Google
            </button>
            <button className="w-full p-3 rounded-md bg-[#1877F2] text-white flex items-center justify-center gap-2 hover:bg-[#1865F2] transition-colors">
              <img src="https://www.facebook.com/favicon.ico" alt="" className="w-5 h-5" />
              Continue with Facebook
            </button>
            <button className="w-full p-3 rounded-md bg-black text-white flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors">
              <img src="https://www.apple.com/favicon.ico" alt="" className="w-5 h-5" />
              Continue with Apple ID
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;