import React from 'react'
import BreadcrumbSection from '../breadcrumb/BreadcrumbSection'
import ContactAreaSection from '../contact/ContactAreaSection'
import MapSection from '../map/MapSection'

const ContactMain = () => {
  return (
    <main>
      <BreadcrumbSection title={"Disclaimer"} />

      <div style={{width: "70%", margin: "auto", textAlign: "center", padding: "40px 0"}}>
      <h2>Disclaimer</h2>
      <p>   verizonofficial.com is not responsible for any content, code, or any other inaccuracies. verizonofficial.com makes no guarantees. In no event shall verizonofficial.com be liable for any special, direct, indirect, consequential, or incidental damages or any damages whether in an action of contract, negligence or other tort arising out of or in connection with the use of the Service or the contents of the Service. verizonofficial.com reserves the right to make additions, deletions, or modification to the contents of the Service at any time without prior notice.
        The verizonofficial.com Service and its content are provided "as is" and "as available" without any warranty or representations of any kind, either express or implied. verizonofficial.com is a distributor and not a publisher of content provided by third parties; as such, verizonofficial.com exercises no editorial control over such content and makes no warranty or representation as to the accuracy, reliability, or currency of any information, content, services, or merchandise provided or accessible through the verizonofficial.com Service. Without limiting the foregoing, verizonofficial.com specifically disclaims all warranties and representations in any content transmitted on or in connection with the verizonofficial.com Service or on sites that may appear as links on the verizonofficial.com Service, or in the products provided as part of or in connection with the verizonofficial.com Service, including without limitation any warranties of merchantability, fitness for a particular purpose, or non-infringement of third-party rights. No oral advice or written information given by verizonofficial.com, nor its affiliates, employees, officers, directors, agents, or the like shall create a warranty. Pricing and availability information is subject to change without notice. Without limiting the foregoing, verizonofficial.com does not warrant that the verizonofficial.com Service will be uninterrupted, uncorrupted, timely, or error-free.</p>
      </div>
    </main>
  )
}

export default ContactMain