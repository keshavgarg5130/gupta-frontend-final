'use client'

import { useState } from 'react'
import axios from 'axios'
import toast from "react-hot-toast";
import Image from "next/image";

export default function QuotationForm() {
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await axios.post('https://gupta-backend.vercel.app/api/37b51f00-d824-4384-8ee0-1e8965151640/enquiry', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      const data = response.data

      if (data.success) {
        toast.success(data.msg)
        form.reset()
      } else {
        throw new Error(data.message)
      }
    } catch (error) {
      toast.error("failed")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8 p-4 max-w-7xl mx-auto bg-white rounded-lg w-full" id='enquiryForm'>
      <div className="flex flex-col items-center justify-center space-y-8 bg-themeBlue text-white p-8 rounded-lg">
        <Image
            height={100}
            width={100}
          src="/logo.png"
          alt="100% Price Guarantee"
          className="w-48 h-48"
        />
        <h2 className="text-2xl font-bold italic underline">
          Get Guaranteed low price
        </h2>
        <div className="w-64 h-16 bg-white rounded-full flex items-center justify-center relative">
          <span className="text-themeBlue font-bold text-xl">GET YOUR QUOTE</span>
          <div className="absolute right-[-30px] w-0 h-0
            border-t-[20px] border-t-transparent
            border-l-[30px] border-l-white
            border-b-[20px] border-b-transparent">
          </div>
        </div>
      </div>

      <div className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h1 className="text-2xl font-bold text-themeBlue">Quick Quotation</h1>
          <div className="flex flex-col gap-3 border-themeBlue">
            <input
              name="fullName"
              placeholder="Full Name"
              required
              className="border border-themeBlue rounded-lg px-2 h-9"
            />

            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="border border-themeBlue rounded-lg px-2 h-9"
            />

            <input
              name="mobile"
              type="tel"
              placeholder="Mobile/Whatsapp"
              required
              className="border border-themeBlue rounded-lg px-2 h-9"
            />

            <textarea
              name="productDetails"
              placeholder="Enter Product Details for Quotation"
              required
              className="min-h-[120px] border-themeBlue border rounded-lg px-2 py-2"
            />

            <div className="space-y-2">
              <p className="text-sm text-gray-600">Upload your Product List</p>
              <input
                name="productList"
                type="file"
                className="border-gray-300"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-themeBlue border-themeBlue hover:bg-white hover:text-themeBlue hover:border h-16 rounded-lg text-white transition-all text-lg"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Get Your Quotation'}
          </button>
        </form>
      </div>
    </div>
  )
}
