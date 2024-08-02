import React from 'react'
import BreadcrumbSection from '../breadcrumb/BreadcrumbSection'
import Link from 'next/link'

const ErrorMain = () => {
    return (
        <main>
            <BreadcrumbSection title={"Privacy Policy"} />
            <div className="ba-error-area pt-120 pb-120">
                <div className="container">
                    <div className="ba-error-inner text-center">
                        <h2>Terms&Conditions</h2>
                        <p>
                            <h3>Privacy Policy</h3>
                            Privacy Policy for VerizonOfficial.com

                            <h3>Your Privacy Matters</h3>

                            At VerizonOfficial.com safeguarding your privacy is our priority. This Privacy Policy elaborates on our commitment to protecting your personal information while you explore our website or utilize our Internet services. By engaging with our services, you agree to the terms outlined in this policy.

                            <h3>Information Collection</h3>

                            We gather various data types, including:

                            Personal Data: Such as your name, contact, and billing information to facilitate account management and service provision.

                            Usage Data: Information on your utilization of our services and website, including device and browser data, IP addresses, and interaction metrics.

                            Cookies & Trackers: Technologies used to optimize user experience and gather engagement analytics.

                            <h3>Information Utilization</h3>

                            We use the collected information to:

                            Deliver Services: Ensure seamless provision, billing, and support of our Internet services.

                            Enhance User Experience: Customize, innovate, and improve service delivery and user engagement.

                            Marketing Communications: Provide updates, offers, and promotions, with an option for users to unsubscribe.

                            Legal Adherence: Fulfill legal requirements and address disputes.

                            <h3>Information Disclosure</h3>

                            We pledge not to sell your personal data. We may, however, disclose information to:

                            Affiliates: Third-party entities involved in facilitating our services.

                            Legal Entities: Comply with legal directives, court orders, or governmental regulations.

                            <h3>Data Safety</h3>

                            We employ robust security protocols to guard your data, though we acknowledge that absolute online security is unattainable.

                            Your Options

                            You are entitled to:

                            Review, amend, or erase your personal information. Unsubscribe from promotional communications. Manage cookies through browser configurations. Minors’ Privacy

                            We do not cater to children below 13 and refrain from collecting their personal information.

                            <h3>Policy Modifications</h3>

                            We may amend this Privacy Policy periodically. Kindly review the "Effective Date" to be apprised of any adjustments.

                            <h3>Reach Out</h3>

                            For inquiries or concerns about this policy or your information, email us at info@VerizonOfficial.com

                            We appreciate your trust in VerizonOfficial.com where your privacy is our esteemed commitment while we provide top-notch Internet services.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ErrorMain