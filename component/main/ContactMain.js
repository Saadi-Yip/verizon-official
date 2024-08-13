import React from 'react'
import BreadcrumbSection from '../breadcrumb/BreadcrumbSection'
import ContactAreaSection from '../contact/ContactAreaSection'
import MapSection from '../map/MapSection'

const ContactMain = () => {
  return (
    <main>
      <BreadcrumbSection title={"Disclaimer"} />

      <div style={{ width: "70%", margin: "auto", textAlign: "center", padding: "40px 0" }}>
        <h2>Disclaimer</h2>
        <p>   official.com is not responsible for any content, code, or any other inaccuracies. official.com makes no guarantees. In no event shall official.com be liable for any special, direct, indirect, consequential, or incidental damages or any damages whether in an action of contract, negligence or other tort arising out of or in connection with the use of the Service or the contents of the Service. official.com reserves the right to make additions, deletions, or modification to the contents of the Service at any time without prior notice.
          The official.com Service and its content are provided "as is" and "as available" without any warranty or representations of any kind, either express or implied. official.com is a distributor and not a publisher of content provided by third parties; as such, official.com exercises no editorial control over such content and makes no warranty or representation as to the accuracy, reliability, or currency of any information, content, services, or merchandise provided or accessible through the official.com Service. Without limiting the foregoing, official.com specifically disclaims all warranties and representations in any content transmitted on or in connection with the official.com Service or on sites that may appear as links on the official.com Service, or in the products provided as part of or in connection with the official.com Service, including without limitation any warranties of merchantability, fitness for a particular purpose, or non-infringement of third-party rights. No oral advice or written information given by official.com, nor its affiliates, employees, officers, directors, agents, or the like shall create a warranty. Pricing and availability information is subject to change without notice. Without limiting the foregoing, official.com does not warrant that the official.com Service will be uninterrupted, uncorrupted, timely, or error-free.</p>
      </div>
    </main>
  )
}

export default ContactMain