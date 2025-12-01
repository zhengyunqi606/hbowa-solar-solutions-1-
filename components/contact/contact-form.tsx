"use client"

import type React from "react"

import { useState } from "react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Contact With Us</h2>
            <p className="text-gray-600 mb-8">
              Simply fill out the form below as best you can. And don't sweat the details
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name*"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Add Your Email ID*"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number* (e.g +442012345456)"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option value="">Select Country*</option>
                  <option value="usa">United States</option>
                  <option value="china">China</option>
                  <option value="uk">United Kingdom</option>
                  <option value="india">India</option>
                  <option value="germany">Germany</option>
                </select>
              </div>

              <textarea
                name="message"
                placeholder="Type Your Message*"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                required
              ></textarea>

              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full transition-colors"
              >
                Submit Form
              </button>
            </form>
          </div>

          {/* Quick Response Section */}
          <div className="bg-blue-600 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-2">Get Quick</h3>
            <h4 className="text-4xl font-bold mb-6">Response</h4>
            <p className="mb-8 text-blue-100">Share your needs with us. We'll contact you in very short time.</p>

            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <span className="text-xl">✉️</span>
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:zijitian.com" className="text-blue-100 hover:text-white">
                    zijitian.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl">📞</span>
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href="tel:+8605123668409" className="text-blue-100 hover:text-white">
                    +86-0512-3668409
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl">📍</span>
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-blue-100">No.55 Shangjiang Road Kunshan city, Suzhou, China</p>
                </div>
              </div>

              <div className="border-t border-blue-400 pt-6 mt-6">
                <p className="text-sm text-blue-100 italic">
                  "HBOWA has extensive experience in lithium batteries and solar systems. We specialize in residential
                  and commercial energy storage and offer OEM/ODM services with fast delivery. Contact us now."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
