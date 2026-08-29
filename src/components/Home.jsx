import React from 'react'
import WebBg from '../assets/Web.png'
import MobileBg from '../assets/Mobile.png'

function Home() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image - Web */}
      <div 
        className="hidden md:block absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${WebBg})`,
          backgroundColor: '#FAF7F2',
          height: '100vh',
          top: '0'
        }}
      />
      
      {/* Background Image - Mobile/Tablet - 60vh */}
      <div 
        className="block md:hidden absolute inset-0 w-full bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${MobileBg})`,
          height: '60vh',
          top: '0'
        }}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/5" />

      {/* Content */}
      {/* min-h matches the mobile bg (60vh) so the badges sit right under the hero, not 100vh forced */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 min-h-[60vh] md:min-h-screen flex items-start pt-20 sm:pt-24 md:pt-28 lg:pt-32">
        <div className="max-w-xl mt-8 sm:mt-12 md:mt-0 ml-0 md:ml-8 lg:ml-16">
          {/* Subtitle */}
          <p className="font-serif text-teba-secondary text-sm sm:text-base md:text-lg tracking-[0.2em] uppercase mb-3">
            MORE THAN A BAG
          </p>

          {/* Main Title */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3">
            <span className="text-teba-dark">Your Everyday</span>
            <br />
            <span className="text-teba-primary">Tote, Reimagined.</span>
          </h1>

          {/* Description - Mobile: 7 words per row, justified */}
          <p className="font-serif text-teba-dark text-sm sm:text-base md:text-lg max-w-md mb-8 leading-relaxed text-justify">
            <span className="block md:hidden">
              Discover the perfect blend of style
              and<br/> sustainability for the 
              modern soul<br/> who values quality 
              and elegance.
            </span>
            <span className="hidden md:block">
              Discover the perfect blend of style and sustainability.<br/> 
              Our handcrafted tote bags are designed for the modern soul 
              who values quality and elegance.
            </span>
          </p>

          {/* Shop Now Button */}
          <button className="group bg-teba-primary text-teba-cream font-serif text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-3.5 rounded-md hover:bg-teba-secondary transition-all duration-300 flex items-center gap-3">
            Shop Now
            <svg 
              className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex gap-3 mt-8">
            <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-teba-primary"></div>
            <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-teba-cream border border-teba-primary/30"></div>
            <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-teba-cream border border-teba-primary/30"></div>
          </div>
        </div>
      </div>

      {/* Trust Badges - Full Width Grid: 3 cols on mobile (last 3 badges), 4 cols from sm up */}
      <div className="relative z-10 w-full bg-teba-cream md:bg-teba-cream py-3 sm:py-6">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 sm:gap-0">
            {/* Badge 1 - Quick Shipping (hidden on mobile) */}
            <div className="hidden sm:flex flex-col items-center justify-center py-2 px-3 sm:border-r sm:border-teba-beige/60 last:border-r-0">
              <svg className="w-6 h-6 sm:w-10 sm:h-10 text-teba-primary mb-1 sm:mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
              <h3 className="font-serif text-xs sm:text-lg font-semibold text-teba-primary text-center">
                Quick Shipping
              </h3>
              <p className="font-serif text-[10px] sm:text-base text-teba-black/80 text-center">
                All around Tunisia
              </p>
            </div>

            {/* Badge 2 - Premium Quality */}
            <div className="flex flex-col items-center justify-center py-2 px-3 border-r border-teba-beige/60 last:border-r-0">
              <svg className="w-6 h-6 sm:w-10 sm:h-10 text-teba-primary mb-1 sm:mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
              </svg>
              <h3 className="font-serif text-xs sm:text-lg font-semibold text-teba-primary text-center">
                Premium Quality
              </h3>
              <p className="font-serif text-[12px] sm:text-base text-teba-black/80 text-center">
                Durable &amp; Long-lasting
              </p>
            </div>

            {/* Badge 3 - Made For Women */}
            <div className="flex flex-col items-center justify-center py-2 px-3 border-r border-teba-beige/60 last:border-r-0">
              <svg className="w-6 h-6 sm:w-10 sm:h-10 text-teba-primary mb-1 sm:mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 0 0 0 6.364L12 20.364l7.682-7.682a4.5 4.5 0 0 0-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 0 0-6.364 0Z" />
              </svg>
              <h3 className="font-serif text-xs sm:text-lg font-semibold text-teba-primary text-center">
                For You
              </h3>
              <p className="font-serif text-[12px] sm:text-base text-teba-black/80 text-center">
                Because you deserve it
              </p>
            </div>

            {/* Badge 4 - Open it & Pay */}
            <div className="flex flex-col items-center justify-center py-2 px-3">
              <svg className="w-6 h-6 sm:w-10 sm:h-10 text-teba-primary mb-1 sm:mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016Z" />
              </svg>
              <h3 className="font-serif text-xs sm:text-lg font-semibold text-teba-primary text-center">
                Open it &amp; Pay
              </h3>
              <p className="font-serif text-[12px] sm:text-base text-teba-black/80 text-center">
                Shop with confidence
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home