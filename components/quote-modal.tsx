"use client"

import type React from "react"

import { useState } from "react"
import { X, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"

interface QuoteModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function QuoteModal({ open, onOpenChange }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  console.log('fetching /api/inquiry', formData)   // 调试用，可删

  const res = await fetch('/api/inquiry', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })

  const data = await res.json()
  console.log('response:', data)   // 调试用，可删

  if (data.ok) {
    alert('Sent successfully!')
    onOpenChange(false)            // 关闭弹窗
    setFormData({                  // 可选：清空表单
      name: '',
      email: '',
      phone: '',
      country: '',
      message: '',
    })
  } else {
    alert('Failed: ' + data.msg)
  }
}
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md w-full p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Send Your Inquiry Today</DialogTitle>
          <DialogClose className="absolute right-4 top-4 h-8 w-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center">
            <X size={20} />
          </DialogClose>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name*"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email*"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone * (e.g., +442012345)"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div>
            <select
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            >
              <option value="">Select Country</option>
              <option value="US">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="CN">China</option>
              <option value="DE">Germany</option>
              <option value="FR">France</option>
              <option value="JP">Japan</option>
              <option value="AU">Australia</option>
              <option value="CA">Canada</option>
              <option value="IN">India</option>
              <option value="SG">Singapore</option>
            </select>
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Your Message*"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              required
            />
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              className="flex items-center gap-2 px-6 py-2 border-2 border-primary text-primary rounded-full hover:bg-primary/5 transition-colors"
            >
              <Upload size={18} />
              Upload
            </button>
            <Button type="submit" className="flex-1 bg-secondary hover:bg-secondary/90 text-white">
              Send Inquiry
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
