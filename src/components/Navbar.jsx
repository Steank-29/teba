import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Teba.png'

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isShopOpen, setIsShopOpen] = useState(true)
  const [isExclusiveOpen, setIsExclusiveOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  
  const searchRef = useRef(null)
  const searchButtonRef = useRef(null)

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  const closeDrawer = () => {
    setIsDrawerOpen(false)
    setIsShopOpen(false)
    setIsExclusiveOpen(false)
  }

  const toggleShop = () => {
    setIsShopOpen(!isShopOpen)
  }

  const toggleExclusive = () => {
    setIsExclusiveOpen(!isExclusiveOpen)
  }

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
  }

  const closeSearch = () => {
    setIsSearchOpen(false)
  }

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current && 
        !searchRef.current.contains(event.target) &&
        searchButtonRef.current &&
        !searchButtonRef.current.contains(event.target)
      ) {
        closeSearch()
      }
    }

    // Close search on escape key
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closeSearch()
      }
    }

    if (isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isSearchOpen])

  return (
    <>
      {/* Top mini bar */}
      <div className="bg-teba-secondary py-1.5 px-4">
        <div className="container mx-auto flex items-center justify-center gap-2">
          <span className="text-teba-cream font-serif text-[10px] sm:text-xs tracking-wider">
            Carry confidence. Carry beauty. Carry you.
          </span>
          <span className="text-teba-cream text-[10px] sm:text-xs">✦</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-teba-cream px-4 sm:px-6 py-4 border-b border-teba-beige/20 sticky top-0 z-40">
        <div className="container mx-auto flex items-center justify-between">
          {/* Left: Menu Icon (Mobile/Tablet) */}
          <button 
            onClick={toggleDrawer}
            className="md:hidden text-teba-secondary hover:text-teba-rose transition-colors"
            aria-label="Open menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Logo + Brand (Centered on mobile/tablet) */}
          <Link to="/" className="flex items-center gap-3 md:gap-4">
            <img src={logo} alt="Teba" className="h-9 sm:h-10 md:h-12 w-auto" />
            <span className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-teba-secondary tracking-wider capitalize">
              Téba
            </span>
          </Link>

          {/* Center: Navigation Links (Desktop only) */}
          <div className="hidden md:flex items-center gap-10">
            <Link to="/" className="font-serif text-lg text-teba-secondary hover:text-teba-rose transition-colors tracking-wide">
              Home
            </Link>
            <a href="#" className="font-serif text-lg text-teba-secondary hover:text-teba-rose transition-colors tracking-wide">
              Shop
            </a>
            <a href="#" className="font-serif text-lg text-teba-secondary hover:text-teba-rose transition-colors tracking-wide">
              Exclusive
            </a>
            <Link to="/contact" className="font-serif text-lg text-teba-secondary hover:text-teba-rose transition-colors tracking-wide">
              Contact
            </Link>
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Search Icon - Hidden when search is open */}
            <button 
              ref={searchButtonRef}
              onClick={toggleSearch}
              className={`text-teba-secondary hover:text-teba-rose transition-colors ${
                isSearchOpen ? 'invisible' : 'visible'
              }`}
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Person Icon (hidden on mobile, shown on tablet/desktop) - Links to /signin */}
            <Link to="/signin" className="hidden sm:block text-teba-secondary hover:text-teba-rose transition-colors">
              <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>

            {/* Cart Icon - Shopping Bag style */}
            <button className="text-teba-secondary hover:text-teba-rose transition-colors relative">
              <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-teba-secondary text-teba-cream text-[10px] sm:text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center font-serif font-semibold">
                0
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Search Bar Dropdown with Animation */}
      <div 
        ref={searchRef}
        className={`absolute left-0 right-0 bg-transparent z-30 px-4 py-6 md:px-6 top-[80px] sm:top-[66px] md:top-[110px] transition-all duration-300 ease-in-out ${
          isSearchOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="container mx-auto max-w-2xl">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search for tote bags..." 
              className="w-full bg-teba-white-cream border border-teba-beige rounded-full py-3 px-6 pr-12 font-serif text-teba-dark placeholder-teba-brown focus:outline-none focus:border-teba-rose transition-colors shadow-lg"
              autoFocus={isSearchOpen}
            />
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-teba-secondary hover:text-teba-rose">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isDrawerOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 md:hidden"
          onClick={closeDrawer}
        />
      )}

      {/* Mobile Drawer - Full Width */}
      <div 
        className={`fixed left-0 bottom-0 w-full bg-teba-cream shadow-2xl z-50 transform transition-transform duration-400 ease-in-out md:hidden rounded-t-3xl ${
          isDrawerOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ height: '75vh', top: '25vh' }}
      >
        {/* Drawer Handle */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-12 h-1 bg-teba-beige/50 rounded-full"></div>
        </div>

        {/* Drawer Header - Logo Centered */}
        <Link to="/" className="flex items-center justify-center p-6 border-b border-teba-beige/20" onClick={closeDrawer}>
          <div className="flex items-center gap-4">
            <img src={logo} alt="Teba" className="h-12 w-auto" />
            <span className="font-serif text-3xl font-bold text-teba-secondary tracking-wider capitalize">
              Téba
            </span>
          </div>
        </Link>

        {/* Drawer Navigation Links */}
        <div className="px-6 py-4 flex flex-col gap-4 overflow-y-auto h-[calc(100%-140px)]">
          {/* Home */}
          <Link 
            to="/" 
            className="font-serif text-xl text-teba-secondary hover:text-teba-rose transition-colors border-b border-teba-beige/10 pb-3"
            onClick={closeDrawer}
          >
            Home
          </Link>

          {/* Shop with Toggle */}
          <div className="border-b border-teba-beige/10 pb-3">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={toggleShop}
            >
              <span className="font-serif text-xl text-teba-secondary hover:text-teba-rose transition-colors">
                Shop
              </span>
              <button className="text-teba-secondary hover:text-teba-rose transition-colors text-2xl font-serif">
                {isShopOpen ? '−' : '+'}
              </button>
            </div>
            {isShopOpen && (
              <div className="mt-3 ml-4 flex flex-col gap-3">
                <a href="#" className="font-serif text-lg text-teba-brown hover:text-teba-rose transition-colors" onClick={closeDrawer}>
                  Classic
                </a>
                <a href="#" className="font-serif text-lg text-teba-brown hover:text-teba-rose transition-colors" onClick={closeDrawer}>
                  Elegant
                </a>
                <a href="#" className="font-serif text-lg text-teba-brown hover:text-teba-rose transition-colors" onClick={closeDrawer}>
                  Minimal
                </a>
                <a href="#" className="font-serif text-lg text-teba-brown hover:text-teba-rose transition-colors" onClick={closeDrawer}>
                  Casual
                </a>
                <a href="#" className="font-serif text-lg text-teba-brown hover:text-teba-rose transition-colors" onClick={closeDrawer}>
                  Daily
                </a>
                <a href="#" className="font-serif text-lg text-teba-brown hover:text-teba-rose transition-colors" onClick={closeDrawer}>
                  Occasions
                </a>
              </div>
            )}
          </div>

          {/* Exclusive with Toggle */}
          <div className="border-b border-teba-beige/10 pb-3">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={toggleExclusive}
            >
              <span className="font-serif text-xl text-teba-secondary hover:text-teba-rose transition-colors">
                Exclusive
              </span>
              <button className="text-teba-secondary hover:text-teba-rose transition-colors text-2xl font-serif">
                {isExclusiveOpen ? '−' : '+'}
              </button>
            </div>
            {isExclusiveOpen && (
              <div className="mt-3 ml-4 flex flex-col gap-3">
                <a href="#" className="font-serif text-lg text-teba-brown hover:text-teba-rose transition-colors" onClick={closeDrawer}>
                  Summer Drop
                </a>
                <a href="#" className="font-serif text-lg text-teba-brown hover:text-teba-rose transition-colors" onClick={closeDrawer}>
                  Winter is Coming
                </a>
                <a href="#" className="font-serif text-lg text-teba-primary hover:text-teba-rose transition-colors animate-pulse font-semibold" onClick={closeDrawer}>
                  ✦ LIMITED EDITION ✦
                </a>
              </div>
            )}
          </div>

          {/* Contact */}
          <Link 
            to="/contact" 
            className="font-serif text-xl text-teba-secondary hover:text-teba-rose transition-colors border-b border-teba-beige/10 pb-3"
            onClick={closeDrawer}
          >
            Contact
          </Link>

          {/* Sign In Button - Tube Shape - Links to /signin */}
          <div className="mt-auto pt-4 border-t border-teba-beige/20">
            <Link to="/signin" onClick={closeDrawer}>
              <button className="w-full flex items-center justify-center gap-3 bg-teba-secondary text-teba-cream font-serif text-lg py-3 px-6 rounded-full hover:bg-teba-primary transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Sign In
              </button>
            </Link>

            {/* Footer Text with Téba */}
            <p className="text-center font-serif text-sm text-teba-brown mt-4">
              All rights reserved. Téba © 2026
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar