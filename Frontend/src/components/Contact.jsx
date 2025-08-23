import React from 'react'
import {Link} from 'react-router-dom'

function Contact() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
        <Link to="/" className="btn-sm item-right btn-circle btn-ghost ">
          ✕
        </Link>
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Contact Us
        </h2>
        
        <form>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Message */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className=" bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg font-semibold transition duration-300"
          >
            Send Message
          </button>
          <Link
              to="/about"
              className="bg-gray-500 hover:bg-gray-600 text-white ml-8 px-4 py-2 rounded-lg font-semibold"
            >
              About Us
            </Link>
        </form>
        
      </div>
    </div>
  )
}

export default Contact