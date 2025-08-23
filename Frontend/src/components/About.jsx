import React from 'react'
import {Link} from 'react-router-dom'
function About() {
  return (
     <div className="min-h-screen flex justify-center items-center bg-gray-100 px-6 py-12">
      <div className="max-w-4xl bg-white p-10 rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">About Our Bookstore</h1>
        <p className="text-gray-600 mb-6 text-lg">
          Welcome to <span className="font-semibold">Book Haven</span> – your one-stop
          destination for stories, knowledge, and inspiration.  
          We started this bookstore with a simple goal: to bring the joy of reading
          closer to everyone, whether you love fiction, non-fiction, study materials,
          or children’s books.
        </p>

        <p className="text-gray-600 mb-6 text-lg">
          Our collection covers a wide range of genres including{" "}
          <span className="font-semibold">novels, academic resources, biographies,
          self-help, and children’s stories</span>.  
          We also offer exclusive discounts, bestsellers, and hand-picked
          recommendations to make sure you always find your next favorite read.
        </p>

        <p className="text-gray-600 mb-8 text-lg">
          What makes us special? We believe books are more than pages – they are
          companions, teachers, and gateways to new worlds.  
          That’s why we carefully curate our shelves with both timeless classics and
          the latest releases, ensuring there’s something for every reader.
        </p>

        {/* CTA Button */}
        <Link
          to="/"
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Explore Our Collection
        </Link>
      </div>
    </div>
  )
}

export default About