import React from "react";
import { Link } from "react-router-dom";

const CookiesPrivacyModal = ({ isOpen, onClose, settings }) => {
  return (
    <>
      <div
        className={`fixed top-[2rem] inset-0 z-50 overflow-auto bg-opacity-50 ${
          isOpen ? "" : "hidden"
        }`}
        onClick={onClose}
      >
        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-70"></div>
        <div
          className={`relative mx-auto w-full max-w-5xl ${
            isOpen ? "" : "hidden"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {settings ? (
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h2 className="mb-4 text-xl font-bold">Cookie Settings</h2>
              <p className="mb-2">
                We use cookies to improve your browsing experience on our
                website and to analyze website traffic. By continuing to browse
                our website, you consent to our use of cookies. To find out more
                about how we use cookies, please see our Cookie Policy.
              </p>
              <p className="mb-2">
                You can adjust your cookie settings below. Note that disabling
                some types of cookies may impact your experience on our website.
              </p>
              <ul className="list-disc list-inside">
                <li>
                  Strictly Necessary Cookies: These cookies are necessary for
                  the website to function and cannot be switched off in our
                  systems. They are usually only set in response to actions made
                  by you which amount to a request for services, such as setting
                  your privacy preferences, logging in or filling in forms. You
                  can set your browser to block or alert you about these
                  cookies, but some parts of the site will not then work. These
                  cookies do not store any personally identifiable information.
                </li>
                <li>
                  Analytics Cookies: These cookies allow us to count visits and
                  traffic sources so we can measure and improve the performance
                  of our site. They help us to know which pages are the most and
                  least popular and see how visitors move around the site. All
                  information these cookies collect is aggregated and therefore
                  anonymous. If you do not allow these cookies we will not know
                  when you have visited our site, and will not be able to
                  monitor its performance.
                </li>
                <li>
                  Marketing Cookies: These cookies may be set through our site
                  by our advertising partners. They may be used by those
                  companies to build a profile of your interests and show you
                  relevant adverts on other sites. They do not store directly
                  personal information, but are based on uniquely identifying
                  your browser and internet device. If you do not allow these
                  cookies, you will experience less targeted advertising.
                </li>
              </ul>
              <button
                className="px-4 py-2 mt-4 font-bold text-white rounded bg-custom_purple hover:text-black"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          ) : (
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h2 className="mb-4 text-xl font-bold">Cookies Privacy</h2>
              <p>
                This Cookies Privacy Statement applies to our website Wanderly
                and any other websites, applications, or services that we
                operate and that link to this statement. By accessing or using
                our services, you agree to the terms of this statement.
              </p>
              <h3 className="my-4 text-lg font-semibold">What are cookies?</h3>
              <p>
                Cookies are small text files that are placed on your device
                (e.g., computer, tablet, or smartphone) when you visit our
                website. Cookies may be placed on your device by us or by
                third-party service providers that we use.
              </p>
              <h3 className="my-4 text-lg font-semibold">
                What types of cookies do we use?
              </h3>
              <p>
                We use both session cookies and persistent cookies. Session
                cookies are temporary and are deleted when you close your
                browser. Persistent cookies remain on your device until they
                expire or are deleted by you. We also use first-party cookies
                (set by us) and third-party cookies (set by third-party service
                providers).
              </p>
              <h3 className="my-4 text-lg font-semibold">
                We use cookies for a variety of purposes, including:
              </h3>
              <ul className="list-disc list-inside">
                <li>to provide and improve our services</li>
                <li>to personalize your experience on our website</li>
                <li>
                  to understand how our website is used and to analyze site
                  traffic
                </li>
                <li>to serve relevant ads to you on other websites</li>
                <li>to authenticate and log you in to our services</li>
                <li>to remember your preferences and settings</li>
                <li>
                  to prevent fraud and improve the security of our services
                </li>
              </ul>
              <h3 className="my-4 text-lg font-semibold">
                What choices do you have?
              </h3>
              <p className="mb-2">
                You can control cookies through your browser settings. Most
                browsers allow you to block or delete cookies. However, if you
                do so, some features of our services may not function properly.
              </p>
              <p>
                You can also opt out of targeted advertising by using the
                opt-out tools provided by the Digital Advertising Alliance, the
                Network Advertising Initiative, and other similar organizations.
              </p>
              For more information about cookies, including how to manage and
              delete them, visit
              {
                <Link to="https://allaboutcookies.org" className="font-bold">
                  {" "}
                  www.allaboutcookies.org
                </Link>
              }
              <h3 className="my-4 text-lg font-semibold">
                Changes to this statement
              </h3>
              <p>
                We may update this Cookies Privacy Statement from time to time.
                We encourage you to review this statement periodically to stay
                informed about our use of cookies.
              </p>
              <button
                className="px-4 py-2 mt-4 font-bold text-white rounded bg-custom_purple hover:text-black"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CookiesPrivacyModal;
