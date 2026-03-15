import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - StockMood",
  description:
    "Terms and conditions for using the StockMood mobile application.",
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-surface-50 mb-2">
          Terms of Service
        </h1>
        <p className="text-sm text-surface-500 mb-12">
          Last updated: March 15, 2026
        </p>

        <div className="space-y-10 text-surface-300 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-surface-100 mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By downloading, installing, or using the StockMood mobile
              application (&quot;App&quot;), you agree to be bound by these
              Terms of Service (&quot;Terms&quot;). If you do not agree to
              these Terms, do not use the App. These Terms constitute a legally
              binding agreement between you and StockMood (&quot;we,&quot;
              &quot;our,&quot; or &quot;us&quot;).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-surface-100 mb-3">
              2. Description of Service
            </h2>
            <p>
              StockMood is an AI-powered stock sentiment analysis application
              that aggregates and analyzes publicly available content from
              social media platforms (Reddit, Twitter/X) and financial news
              sources to provide sentiment insights, community scores, and
              executive summaries for publicly traded stocks.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-surface-100 mb-3">
              3. Not Financial Advice
            </h2>
            <p>
              <strong className="text-surface-100">
                StockMood is for informational and educational purposes only.
              </strong>{" "}
              The sentiment analysis, community scores, executive summaries,
              and any other content provided through the App do not constitute
              financial advice, investment recommendations, or solicitations to
              buy or sell securities. We are not a registered investment
              advisor, broker-dealer, or financial planner. Always conduct your
              own research and consult with a qualified financial professional
              before making any investment decisions. Past sentiment trends do
              not guarantee future stock performance.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-surface-100 mb-3">
              4. Account Registration
            </h2>
            <p className="mb-3">
              To use StockMood, you must create an account by signing in with
              Google or Apple. By creating an account, you agree that:
            </p>
            <ul className="list-disc list-inside space-y-1 text-surface-400 ml-2">
              <li>You are at least 18 years of age</li>
              <li>
                The information provided through your sign-in provider is
                accurate
              </li>
              <li>
                You are responsible for maintaining the security of your
                account
              </li>
              <li>
                You will not share your account or allow others to access it
              </li>
              <li>
                You will notify us immediately of any unauthorized use of your
                account
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-surface-100 mb-3">
              5. Subscriptions and Purchases
            </h2>

            <h3 className="text-base font-medium text-surface-200 mb-2 mt-4">
              5.1 Free Tier
            </h3>
            <p>
              Free accounts receive a limited number of sentiment analyses per
              month. The specific limit is displayed within the App and may
              change at our discretion.
            </p>

            <h3 className="text-base font-medium text-surface-200 mb-2 mt-4">
              5.2 StockMood Pro Subscription
            </h3>
            <p>
              The Pro subscription provides an increased monthly analysis
              quota and access to premium features. Subscriptions are billed
              through the Apple App Store or Google Play Store and are subject
              to their respective terms and refund policies. Subscriptions
              automatically renew unless cancelled at least 24 hours before
              the end of the current billing period.
            </p>

            <h3 className="text-base font-medium text-surface-200 mb-2 mt-4">
              5.3 Credit Packs
            </h3>
            <p>
              Credit packs are one-time, consumable in-app purchases that
              provide additional analysis credits. Each analysis consumes one
              credit. Credits do not expire but are non-transferable and
              non-refundable except as required by applicable law or app store
              policies.
            </p>

            <h3 className="text-base font-medium text-surface-200 mb-2 mt-4">
              5.4 Pricing Changes
            </h3>
            <p>
              We reserve the right to modify pricing, features, and analysis
              quotas at any time. Changes to subscription pricing will take
              effect at the start of the next billing cycle after notice is
              provided.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-surface-100 mb-3">
              6. Acceptable Use
            </h2>
            <p className="mb-3">You agree not to:</p>
            <ul className="list-disc list-inside space-y-1 text-surface-400 ml-2">
              <li>
                Use the App for any unlawful purpose or in violation of any
                applicable laws or regulations
              </li>
              <li>
                Attempt to reverse-engineer, decompile, or disassemble the App
              </li>
              <li>
                Circumvent or attempt to circumvent analysis quotas, usage
                limits, or security measures
              </li>
              <li>
                Use automated systems or bots to access the App
              </li>
              <li>
                Redistribute, resell, or commercially exploit the App&apos;s
                content or analysis results without our written consent
              </li>
              <li>
                Use the App to manipulate markets or engage in any form of
                market manipulation
              </li>
              <li>
                Interfere with or disrupt the App&apos;s infrastructure or
                other users&apos; access
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-surface-100 mb-3">
              7. Intellectual Property
            </h2>
            <p>
              The App, including its design, features, code, AI models,
              analysis algorithms, and content (excluding third-party data
              sources), is the intellectual property of StockMood. You are
              granted a limited, non-exclusive, non-transferable license to
              use the App for personal, non-commercial purposes. Sentiment
              analysis results generated for you are provided for your personal
              use and may not be commercially redistributed.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-surface-100 mb-3">
              8. Third-Party Content and Data
            </h2>
            <p>
              StockMood aggregates publicly available content from Reddit,
              Twitter/X, and financial news sources. We do not own or endorse
              this third-party content. The accuracy, completeness, and
              timeliness of social media posts, news articles, and stock data
              provided through the App are not guaranteed. Stock price data is
              provided by Finnhub and may be subject to delays.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-surface-100 mb-3">
              9. AI-Generated Content
            </h2>
            <p>
              Executive summaries, sentiment scores, and analysis reports are
              generated using artificial intelligence. AI-generated content
              may contain inaccuracies, biases, or errors. You acknowledge
              that AI analysis is inherently probabilistic and should not be
              relied upon as the sole basis for any investment decision.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-surface-100 mb-3">
              10. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by applicable law, StockMood
              shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages, including but not limited to
              financial losses, loss of profits, or loss of data arising from
              your use of or inability to use the App. In no event shall our
              total liability exceed the amount you paid for the App in the
              twelve (12) months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-surface-100 mb-3">
              11. Disclaimer of Warranties
            </h2>
            <p>
              The App is provided &quot;as is&quot; and &quot;as
              available&quot; without warranties of any kind, either express or
              implied, including but not limited to implied warranties of
              merchantability, fitness for a particular purpose, and
              non-infringement. We do not warrant that the App will be
              uninterrupted, error-free, or free of harmful components, or that
              the sentiment analysis results will be accurate or reliable.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-surface-100 mb-3">
              12. Account Termination
            </h2>
            <p>
              You may deactivate your account at any time through the
              App&apos;s profile settings. We reserve the right to suspend or
              terminate your account if you violate these Terms or engage in
              conduct that we determine, in our sole discretion, to be harmful
              to the App or other users. Upon account deletion, your profile
              data will be removed in accordance with our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-surface-100 mb-3">
              13. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these Terms at any time. We will
              notify you of material changes by posting updated Terms within
              the App or on our website. Your continued use of the App after
              the effective date of any changes constitutes your acceptance of
              the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-surface-100 mb-3">
              14. Governing Law
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              applicable laws, without regard to conflict of law principles.
              Any disputes arising from these Terms or your use of the App
              shall be resolved through binding arbitration, except where
              prohibited by law.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-surface-100 mb-3">
              15. Contact Us
            </h2>
            <p>
              If you have any questions about these Terms, please contact us
              at{" "}
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
