import React from "react";
import Navbar from "../components/Navbar";
import LandingBanner from "../components/LandingBanner";
import Footer from "../components/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <LandingBanner title={"Terms & Conditions"} />
      <div className="flex justify-center py-10">
        <div className="px-6 md:px-10 lg:px-15 lg:w-[70rem] [&>div]:py-20 [&>div>p:nth-child(2)]:mt-5 [&>div>ul>li]:list-disc [&>div>ul>li]:text-sm [&>div>ul]:mt-5 [&>div>ul]:ml-5 [&>div>h1]:text-2xl [&>div>h1]:font-bold [&>div>div]:mt-5 [&>div>div]:text-sm [&>div>div>h3]:font-poppins-medium-italic">
          <div>
            <p>
              Welcome to the official website of{" "}
              <strong>OGENIUS DIGITAL MEDIA LABS PRIVATE LIMITED</strong>{" "}
              ("Company", "we", "us", or "our"). By accessing or using our
              website (the "Site"), you agree to be bound by the following Terms
              and Conditions ("Terms"). Please read them carefully before using
              our services.
            </p>
            <p>
              If you do not agree with any part of these Terms, you must
              discontinue use of the Site and our services immediately.
            </p>
          </div>
          <hr />
          <div>
            <h1>1. Overview of Services</h1>
            <p>
              <strong>OGENIUS DIGITAL MEDIA LABS PRIVATE LIMITED</strong> is a service-based
              company that provides:
            </p>
            <ul>
              <li>
                <strong>Digital Marketing Services</strong> (including SEO, PPC,
                content marketing, social media campaigns)
              </li>
              <li>
                <strong>Paid Promotions</strong> (including influencer
                marketing, paid ad management, and media buying)
              </li>
              <li>
                <strong>Technical Operations Support</strong> for marketing
                agencies, startups, and businesses
              </li>
            </ul>
            <p className="mt-5">
              We operate as a{" "}
              <strong>
                B2B (Business-to-Business) & B2C (Business-to-Customer)
              </strong>{" "}
              solutions provider and do not offer direct consumer services
              unless specifically agreed upon.
            </p>
          </div>
          <hr />
          <div>
            <h1>2. Acceptance of Terms</h1>
            <p>
              By accessing our Site or engaging with our services, you confirm
              that:
            </p>
            <ul>
              <li>
                You are at least 18 years of age or have the legal capacity to
                enter into a binding contract.
              </li>
              <li>
                You are authorized to act on behalf of a company or
                organization, if applicable.
              </li>
              <li>
                You will use the Site and our services only in accordance with
                applicable laws and these Terms.
              </li>
            </ul>
          </div>
          <hr />
          <div>
            <h1>3. Scope of Liability</h1>
            <p>
              While we strive to deliver optimal performance and results,{" "}
              <strong>
                OGENIUS DIGITAL MEDIA LABS PRIVATE LIMITED does not guarantee
                specific outcomes
              </strong>{" "}
              from any of its services, including ad performance, marketing ROI,
              or technical implementation results.
            </p>
            <div>
              <h3>Concessive Clause:</h3> Even though we utilize
              industry-standard tools and experienced personnel, results may
              vary due to factors beyond our control, such as third-party
              algorithm changes, market volatility, platform restrictions, or
              client-side errors.
            </div>
            <p>We shall not be held liable for:</p>
            <ul>
              <li>Loss of revenue, profits, or data.</li>
              <li>
                Downtime or inaccessibility caused by third-party services.
              </li>
              <li>
                Content decisions made by clients, even if reviewed by us.
              </li>
              <li>
                Delays due to incomplete input, content, or feedback from
                clients.
              </li>
            </ul>
          </div>
          <hr />
          <div>
            <h1>4. Intellectual Property</h1>
            <p>
              All content on this Site, including but not limited to logos,
              brand names, proprietary graphics, service descriptions, and
              custom strategies, is the intellectual property of{" "}
              <strong>OGENIUS DIGITAL MEDIA LABS PRIVATE LIMITED</strong>,
              unless otherwise stated.
            </p>
            <p>
              Clients retain ownership of their own intellectual property.
              However, by engaging us, you grant us a non-exclusive,
              royalty-free license to use necessary materials solely for the
              purpose of delivering our services.
            </p>
          </div>
          <hr />
          <div>
            <h1>5. Client Responsibilities</h1>
            <p>Clients are expected to:</p>
            <ul>
              <li>
                Provide clear briefs, timelines, and access to necessary
                accounts/tools.
              </li>
              <li>
                Ensure that all material provided (content, images, trademarks,
                data) is legally owned or licensed.
              </li>
              <li>
                Review and approve deliverables promptly to avoid project
                delays.
              </li>
            </ul>
            <div>
              <h3>Concessive Clause:</h3> Although we assist in compliance and
              content vetting, ultimate responsibility for the legality and
              appropriateness of marketing materials rests with the client.
            </div>
          </div>
          <hr />
          <div>
            <h1>6. Third-Party Platforms and Tools</h1>
            <p>
              Many of our services depend on platforms such as Google, Meta,
              LinkedIn, or various marketing APIs and CRMs. We do not control
              these platforms and therefore:
            </p>
            <ul>
              <li>
                Cannot guarantee continuity, policy consistency, or
                uninterrupted access.
              </li>
              <li>
                Are not liable for account suspensions, disapprovals, or
                algorithmic changes affecting campaign performance.
              </li>
            </ul>
          </div>
          <hr />
          <div>
            <h1>7. Confidentiality</h1>
            <p>
              Both parties agree to maintain the confidentiality of any
              proprietary or sensitive information shared during the course of
              the engagement. This obligation survives the termination of the
              business relationship.
            </p>
          </div>
          <hr />
          <div>
            <h1>8. Payment Terms</h1>
            <p>Unless otherwise agreed in writing:</p>
            <ul>
              <li>
                All service fees are to be paid upfront or as per the milestone
                payment schedule.
              </li>
              <li>
                Late payments may incur interest or delay in service delivery.
              </li>
              <li>
                No refunds are provided for services already rendered, including
                paid promotions or ad spend managed through our channels.
              </li>
            </ul>
          </div>
          <hr />
          <div>
            <h1>9. Termination</h1>
            <p>
              Either party may terminate the engagement with written notice.
              Upon termination:
            </p>
            <ul>
              <li>Outstanding dues become immediately payable.</li>
              <li>
                Any ongoing campaigns or operations will be ceased unless
                otherwise agreed.
              </li>
              <li>
                Work completed up to the termination point will be invoiced and
                must be compensated.
              </li>
            </ul>
          </div>
          <hr />
          <div>
            <h1>10. Disclaimer</h1>
            <p>
              The Site and all services provided by OGENIUS DIGITAL MEDIA LABS
              PRIVATE LIMITED are offered on an "as-is" and "as-available"
              basis. We disclaim all warranties, express or implied, including
              merchantability, fitness for a particular purpose, and
              non-infringement.
            </p>
            <div>
              <h3>Concessive Clause:</h3> While we take reasonable care in all
              our operations, we do not warrant that the Site or our services
              will be error-free, uninterrupted, or deliver guaranteed business
              outcomes.
            </div>
          </div>
          <hr />
          <div>
            <h1>11. Indemnification</h1>
            <p>
              You agree to indemnify and hold harmless OGENIUS DIGITAL MEDIA
              LABS PRIVATE LIMITED, its directors, employees, and agents, from
              any claims, damages, or liabilities arising out of:
            </p>
            <ul>
              <li>Your use of our services or Site.</li>
              <li>Your violation of these Terms.</li>
              <li>
                Infringement of third-party rights via materials or directions
                provided by you.
              </li>
            </ul>
          </div>
          <hr />
          <div>
            <h1>12. Governing Law</h1>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of India. Any disputes shall fall under the jurisdiction
              of the courts of [Pune or Mumbai], unless otherwise agreed in
              writing.
            </p>
          </div>
          <hr />
          <div>
            <h1>13. Changes to Terms</h1>
            <p>
              We reserve the right to update or modify these Terms at any time.
              Changes will be posted on this page with an updated effective
              date. Continued use of the Site or services after changes
              constitutes acceptance of those revised Terms.
            </p>
          </div>
          <hr />
          <div>
            <h1>14. Contact Information</h1>
            <p>
              For any questions regarding these Terms, you may contact us at:
            </p>
            <div>
              <p>
                <strong>OGENIUS DIGITAL MEDIA LABS PRIVATE LIMITED</strong>
              </p>
              <p> Pune, India</p>
              <p>Email: cheers@theoglabs.com</p>
            </div>
          </div>
          <hr />
          <div>
            <p>
              By using this Site or engaging with our services, you acknowledge
              that you have read, understood, and agreed to these Terms and
              Conditions.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
