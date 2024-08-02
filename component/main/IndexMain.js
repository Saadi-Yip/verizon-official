import React from 'react'
import AboutSection from '../about/AboutSection'
import PackageSection from '../package/PackageSection'
import TvShowSection from '../tv-show/TvShowSection'
import ContactSection from '../contact/ContactSection'
import StatisticSection from '../statistic/StatisticSection'
import TeamSection from '../team/TeamSection'
import MovieSeciton from '../movie/MovieSeciton'
import FaqSection from '../faq/FaqSection'
import NewsletterSection from '../newsletter/NewsletterSection'
import TestimonialSection from '../testimonial/TestimonialSection'
import BlogSection from '../blog/BlogSection'
import PriceSection from '../price/PriceSection'

const IndexMain = () => {
  return (
    <main>
      <AboutSection />
      <PackageSection />

      {/* <ContactSection/> */}
      {/* <StatisticSection /> */}
      <TvShowSection />
      {/* <TeamSection/> */}
      <PriceSection/>
      <MovieSeciton />
      <FaqSection />
      <div className="footer-one">
                    <div className='footer-one-disclaimer'>
                        <h3 style={{ color: 'black' }}>Disclaimer</h3>
                        <p>This is not an official website of verizon, but is the Official Site of verizonoffcial.com (Marketing Partner). We may send updates to the mobile number/email ID registered with us. The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images are for representation purposes only. The logos and images used on this website are the exclusive property of their respective owners and are protected under applicable copyright laws. verizonoffcial.com does not claim any ownership or rights to these materials and they are used on this website solely for informational purposes.</p>
                    </div>
                </div>
      {/* <NewsletterSection/> */}
      {/* <TestimonialSection /> */}
      {/* <BlogSection/> */}
    </main>
  )
}

export default IndexMain