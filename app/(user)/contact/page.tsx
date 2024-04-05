import React from 'react'

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
      <p className="text-lg text-gray-600 mb-8">Please fill out the form below to get in touch with us.</p>
      <form action="submit_form.php" method="post" className="bg-white p-6 rounded-lg shadow-md">
        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name:</label>
        <input type="text" id="name" name="name" required className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />

        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email:</label>
        <input type="email" id="email" name="email" required className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />

        <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message:</label>
        <textarea id="message" name="message" required className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"></textarea>

        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">Submit</button>
      </form>
    </div>
  )
}
