import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - StockMood",
  description:
    "Learn how StockMood collects, uses, and protects your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-surface-50 mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-surface-500 mb-12">
          Last updated: March 15, 2026
        </p>

        <div className="space-y-10 text-surface-300 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-surface-100 mb-3">
              1. Introduction
            </h2>
            <p>
              StockMood (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
              operates the StockMood mobile application (the
              &quot;App&quot;). This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you use our
              App. By using StockMood, you agree to the collection and use of
              information in accordance with this policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-surface-100 mb-3">
              2. Information We Collect
            </h2>

            <h3 className="text-base font-medium text-surface-200 mb-2 mt-4">
              2.1 Account Information
            </h3>
            <p className="mb-3">
              When you sign in using Google or Apple, we receive and store:
            </p>
            <ul className="list-disc list-inside space-y-1 text-surface-400 ml-2">
              <li>Email address</li>
              <li>Display name</li>
              <li>Profile picture URL</li>
              <li>Unique user identifier</li>
            </ul>
            <p className="mt-3">
              We do not collect or store passwords. Authentication is handled
              entirely through OAuth providers (Google and Apple).
            </p>

            <h3 className="text-base font-medium text-surface-200 mb-2 mt-4">
              2.2 Usage Data
            </h3>
            <p className="mb-3">
              We automatically collect certain information when you use the
              App:
            </p>
            <ul className="list-disc list-inside space-y-1 text-surface-400 ml-2">
              <li>
                Search history (stock symbols you analyze and sentiment
                results)
              </li>
              <li>Portfolio selections (stocks you choose to watch)</li>
              <li>Analysis frequency and quota usage</li>
              <li>Account creation and last login timestamps</li>
            </ul>

            <h3 className="text-base font-medium text-surface-200 mb-2 mt-4">
              2.3 Device Information
            </h3>
            <p className="mb-3">We may collect:</p>
            <ul className="list-disc list-inside space-y-1 text-surface-400 ml-2">
              <li>
                Push notification tokens (to send you notifications about
                completed analyses)
              </li>
              <li>Device type and operating system version</li>
            </ul>

            <h3 className="text-base font-medium text-surface-200 mb-2 mt-4">
              2.4 Purchase Information
            </h3>
            <p>
              If you subscribe to StockMood Pro or purchase credit packs,
              payment processing is handled by Apple App Store or Google Play
              Store through RevenueCat. We do not collect or store your payment
              card details. We receive and store transaction records including
              purchase type, credit amounts, and timestamps.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-surface-100 mb-3">
              3. How We Use Your Information
            </h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-1 text-surface-400 ml-2">
              <li>Provide and maintain the App&apos;s functionality</li>
              <li>
                Authenticate your identity and manage your account
              </li>
              <li>
                Deliver AI-powered sentiment analysis results for stocks you
                search
              </li>
              <li>
                Track your analysis quota and credit balance
              </li>
              <li>
                Send push notifications about completed analyses
              </li>
              <li>
                Maintain your portfolio and search history for your convenience
              </li>
              <li>
                Process and manage subscriptions and in-app purchases
              </li>
              <li>
                Improve and optimize the App&apos;s performance
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-surface-100 mb-3">
              4. Third-Party Services
            </h2>
            <p className="mb-3">
              We use the following third-party services to operate the App:
            </p>

            <div className="space-y-4 ml-2">
              <div>
                <p className="text-surface-200 font-medium">
                  Firebase (Google)
                </p>
                <p className="text-surface-400">
                  Authentication, database storage, cloud functions, and push
                  notification delivery. Subject to{" "}
                  <a
                    href="https://firebase.google.com/support/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-400 hover:text-brand-300 transition-colors"
                  >
                    Google&apos;s Privacy Policy
                  </a>
                  .
                </p>
              </div>

              <div>
                <p className="text-surface-200 font-medium">RevenueCat</p>
                <p className="text-surface-400">
                  Subscription and in-app purchase management. Subject to{" "}
                  <a
                    href="https://www.revenuecat.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-400 hover:text-brand-300 transition-colors"
                  >
                    RevenueCat&apos;s Privacy Policy
                  </a>
                  .
                </p>
              </div>

              <div>
                <p className="text-surface-200 font-medium">OpenAI</p>
                <p className="text-surface-400">
                  AI-powered sentiment analysis and executive summary
                  generation. Stock-related social media content is processed
                  through OpenAI&apos;s API. No personal user data is sent to
                  OpenAI.
                </p>
              </div>

              <div>
                <p className="text-surface-200 font-medium">Finnhub</p>
                <p className="text-surface-400">
                  Real-time stock price data, company profiles, and financial
                  news. No personal user data is shared with Finnhub.
                </p>
              </div>

              <div>
                <p className="text-surface-200 font-medium">Apify</p>
                <p className="text-surface-400">
                  Social media data collection from public posts on Reddit and
                  Twitter/X for sentiment analysis. No personal user data is
                  shared with Apify.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-surface-100 mb-3">
              5. Data Storage and Security
            </h2>
            <p>
              Your data is stored securely on Firebase Cloud Firestore servers.
              We implement industry-standard security measures including
              Firebase Security Rules to restrict access to your personal data,
              encrypted connections (HTTPS/TLS) for all data transmission, and
              OAuth 2.0 for secure authentication. While we strive to protect
              your information, no method of electronic transmission or storage
              is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-surface-100 mb-3">
              6. Data Retention
            </h2>
            <p>
              We retain your personal data for as long as your account is
              active. Your search history and analysis results are stored
              indefinitely to provide you with historical sentiment data. If
              you delete your account, your profile data will be removed. You
              may also clear your search history and portfolio data at any time
              through the App.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-surface-100 mb-3">
              7. Your Rights
            </h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc list-inside space-y-1 text-surface-400 ml-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>
                Delete your account and associated data through the App&apos;s
                profile settings
              </li>
              <li>
                Opt out of push notifications through your device settings
              </li>
              <li>
                Request a copy of your data by contacting us
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-surface-100 mb-3">
              8. Children&apos;s Privacy
            </h2>
            <p>
              StockMood is not intended for users under the age of 18. We do
              not knowingly collect personal information from children. If we
              become aware that we have collected data from a child under 18,
              we will take steps to delete that information promptly.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-surface-100 mb-3">
              9. Analytics and Tracking
            </h2>
            <p>
              StockMood does not use third-party analytics services, advertising
              trackers, or behavioral tracking tools. We do not sell, share, or
              monetize your personal data with advertisers or data brokers.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-surface-100 mb-3">
              10. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any material changes by posting the new Privacy
              Policy within the App or on our website. Your continued use of
              the App after changes are posted constitutes your acceptance of
              the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-surface-100 mb-3">
              11. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or our data
              practices, please contact us at{" "}
              <a
                href="mailto:support@stockmood.app"
                className="text-brand-400 hover:text-brand-300 transition-colors"
              >
                support@stockmood.app
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
