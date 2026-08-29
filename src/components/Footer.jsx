import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Teba.png'

function Footer() {
  return (
    <footer className="bg-teba-primary text-teba-cream">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Teba" className="h-10 sm:h-12 w-auto brightness-0 invert" />
              <span className="font-serif text-2xl sm:text-3xl font-bold text-teba-cream tracking-wider capitalize">
                Téba
              </span>
            </Link>
            <p className="font-serif text-teba-cream/60 text-sm leading-relaxed max-w-xs">
              Premium handcrafted tote bags designed for the modern soul who values quality and elegance.
            </p>
            
            {/* Instagram Icon Only */}
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-teba-cream hover:text-teba-cream transition-colors mt-4"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
          </div>

          {/* Contact Us & Quick Links - Side by Side */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-8">
              
                            {/* Quick Links */}
              <div>
                <h3 className="font-serif text-lg font-semibold text-teba-cream mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/" className="font-serif text-teba-cream/60 hover:text-teba-cream transition-colors text-sm">
                      Home
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="font-serif text-teba-cream/60 hover:text-teba-cream transition-colors text-sm">
                      Shop
                    </a>
                  </li>
                  <li>
                    <a href="#" className="font-serif text-teba-cream/60 hover:text-teba-cream transition-colors text-sm">
                      Exclusive
                    </a>
                  </li>
                  <li>
                    <Link to="/contact" className="font-serif text-teba-cream/60 hover:text-teba-cream transition-colors text-sm">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              
              {/* Contact Us */}
              <div>
                <h3 className="font-serif text-lg font-semibold text-teba-cream mb-4">
                  Contact Us
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-teba-cream/40 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="font-serif text-teba-cream/60 text-sm">hello@teba.tn</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-teba-cream/40 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="font-serif text-teba-cream/60 text-sm">+216 71 234 567</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-teba-cream/40 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="font-serif text-teba-cream/60 text-sm">Tunis, Tunisia</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-teba-cream mb-4">
              Stay in the Loop
            </h3>
            <p className="font-serif text-teba-cream/60 text-sm mb-4">
              Subscribe to our newsletter and be the first to know about new collections, exclusive drops, and special offers.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-5 py-3 bg-teba-cream/10 border border-teba-cream/20 rounded-full focus:outline-none focus:border-teba-cream/50 focus:bg-teba-cream/20 transition-all duration-300 font-serif text-teba-cream placeholder-teba-cream/40 text-sm"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-teba-cream text-teba-primary font-serif text-sm font-semibold rounded-full hover:bg-teba-cream/90 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Subscribe
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-teba-cream/10">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="font-serif text-teba-cream/40 text-sm text-center sm:text-left">
              All rights reserved. Téba © 2026
            </p>
            
            <div className="flex items-center gap-6">
              <a href="#" className="font-serif text-teba-cream/40 hover:text-teba-cream transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="font-serif text-teba-cream/40 hover:text-teba-cream transition-colors text-sm">
                Terms
              </a>
              <a href="#" className="font-serif text-teba-cream/40 hover:text-teba-cream transition-colors text-sm">
                Returns
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer