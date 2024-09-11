import React from "react";
import Footer from '../Homes/Footer';
import Header from '../Homes/Header';
import '../HomePages/aboutInfytech.css'
import './privacyPolicy.css'

const PrivacyPolicy = () => {
    return (
        <html>
            <Header/>
            <body className="main-container-pri-pol">
                <div><h1>Privacy Policy</h1>
                    <p>At our website, we are committed to protecting the privacy and confidentiality of our users. This Privacy Policy outlines how we collect, use, and disclose personal information when you use our services. By accessing or using our services, you signify your understanding and acceptance of this policy.</p>
                    <div></div>
                </div>
                <div><h2>Information We Collect</h2>
                    <div><h3>1.1 Personal Information</h3></div>
                    <p>We may collect personal information, such as your name, email address, contact number, and any other information you voluntarily provide to us when you register for an account, enroll in our classes, or communicate with us through our website or other channels.</p>
                    <div><h3>1.2 Usage Data</h3></div>
                    <p>We may automatically collect certain information about your use of our website and services. This may include your IP address, device information, browser type, operating system, and browsing patterns. This information is used to analyze trends, administer the site, track user activities, and gather demographic information.</p>
                    <h2>Use of Information</h2>
                    <div><h3>2.1 Providing Services</h3></div>
                    <p>We may use your personal information to provide and improve our services, including processing class enrollments, communicating with you about your classes, and responding to your inquiries and requests.</p>
                    <div><h3>2.2 Communication</h3></div>
                    <p>We may use your contact information to send you important updates, notifications, and promotional materials related to Maahaule Classes. You can opt-out of receiving these communications at any time by following the unsubscribe instructions provided in the email or contacting us directly.</p>
                    <div><h3>2.3 Analytics and Improvements</h3></div>
                    <p>We may use the collected data to analyze user behavior, improve our website and services, and customize your experience. This may include the use of cookies, tracking technologies, and analytics tools to gather information about how you interact with our website.</p>
                    <h2>Data Sharing and Disclosure</h2>
                    <div><h3>3.1 Third-Party Service Providers</h3></div>
                    <p>We may engage trusted third-party service providers to assist us in delivering our services, such as payment processing, data analysis, and customer support. These providers are bound by confidentiality agreements and are only authorized to use your personal information as necessary to provide the requested services.</p>
                    <div><h3>3.2 Legal Compliance</h3></div>
                    <p>We may disclose your personal information if required by law, regulation, or legal process, or to protect our rights, property, or safety, or the rights, property, or safety of others.</p>
                    <h2>Data Security</h2>
                    <p>We take reasonable measures to protect the security of your personal information and implement safeguards to prevent unauthorized access, disclosure, or alteration. However, no data transmission or storage system can be guaranteed to be 100% secure. Therefore, while we strive to protect your personal information, we cannot guarantee its absolute security.</p>
                    <h2>Your Choices</h2>
                    <p>You have the right to access, update, correct, or delete your personal information held by Maahaule Classes. You can make these changes by logging into your account or contacting us directly. Please note that certain information may be retained for legal and business purposes.</p>
                    <h2>Changes to this Privacy Policy</h2>
                    <p>Infytech Loop ai reserves the right to update or modify this Privacy Policy at any time. We will notify you of any significant changes by posting the revised policy on our website or sending you a direct communication. Your continued use of our services after any such changes will signify your acceptance of the updated Privacy Policy.</p>
                    <h2>Contact Us</h2>
                    <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at sachink@infytechai.com.</p>
                </div>
                
            </body>
            <Footer/>
        </html>
    );
}


export default PrivacyPolicy;