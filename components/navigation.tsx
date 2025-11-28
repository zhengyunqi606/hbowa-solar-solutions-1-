"use client"

import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const menuItems = [
    { label: "Home", href: "/" },
    {
      label: "Solar Panels",
      href: "/solar-panels",
      submenu: [
        { label: "Solar Panel Series", href: "/solar-panels/series" },
        { label: "Panel Specifications", href: "/solar-panels/specs" },
      ],
    },
    {
      label: "Solar Battery",
      href: "/solar-battery",
      submenu: [
        { label: "Energy Management Gateway", href: "/solar-battery/lifepo4" },
        { label: "Solar Power Optimizer", href: "/solar-battery/specs" },
        { label: "Smart Storage System", href: "/solar-battery/smart" },
        { label: "Power Manager", href: "/solar-battery/power" },
        { label: "Charging Manager", href: "/solar-battery/charging" },
        { label: "Distribution Management System", href: "/solar-battery/distribution" },
      ],
    },
    {
      label: "Solar System",
      href: "/solar-system",
      submenu: [
        { label: "Complete Systems", href: "/solar-system/complete" },
        { label: "System Design", href: "/solar-system/design" },
      ],
    },
    {
      label: "HBOWA",
      href: "/hbowa", // 仅用于 key，不会渲染成 <Link>
      submenu: [
        { label: "About Us", href: "/hbowa/about-us" },
        { label: "Contact Us", href: "/hbowa/contact-us" },
      ],
    },
    {
      label: "Calculator",
      href: "/calculator",
      submenu: [
        { label: "Energy Calculator", href: "/calculator/energy" },
        { label: "System ROI", href: "/calculator/roi" },
      ],
    },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white border-b border-border z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">H</span>
            </div>
            <span className="font-bold text-lg">HBOWA</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            {menuItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.label === "HBOWA" ? (
                  <span className="text-sm text-foreground whitespace-nowrap flex items-center gap-1 select-none cursor-default">
                    HBOWA
                    {item.submenu && <ChevronDown size={16} className="group-hover:rotate-180 transition" />}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm text-foreground hover:text-primary transition whitespace-nowrap flex items-center gap-1"
                  >
                    {item.label}
                    {item.submenu && <ChevronDown size={16} className="group-hover:rotate-180 transition" />}
                  </Link>
                )}

                {item.submenu && (
                  <div className="absolute left-0 mt-0 w-48 bg-white border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-primary transition"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right buttons */}
          <div className="hidden md:flex gap-3 items-center">
            <Button variant="outline" className="text-sm bg-transparent">Login</Button>
            <Link href="/contact">
           <Button className="bg-primary hover:bg-primary/90 text-sm">Contact Us</Button> 
          {/* 此按钮跳转至F:\hbowa-solar-solutions (1)\app\contact */}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            {menuItems.map((item) => (
              <div key={item.label}>
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                >
                  {item.label === "HBOWA" ? (
                    <span className="text-foreground flex-1 select-none">HBOWA</span>
                  ) : (
                    <Link href={item.href} className="text-foreground hover:text-primary transition flex-1">
                      {item.label}
                    </Link>
                  )}
                  {item.submenu && (
                    <ChevronDown
                      size={16}
                      className={`transition ${openDropdown === item.label ? "rotate-180" : ""}`}
                    />
                  )}
                </div>

                {item.submenu && openDropdown === item.label && (
                  <div className="pl-4 space-y-2 mt-2">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block text-sm text-foreground hover:text-primary transition"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="flex gap-3 pt-4">
              <Button variant="outline" className="flex-1 bg-transparent text-sm">Login</Button>
              <Button className="flex-1 bg-primary hover:bg-primary/90 text-sm">Contact Us</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}