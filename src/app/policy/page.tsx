import moment from "moment";

import { policyData } from "./data";

import styles from "./policy.module.scss";

const Policy = ({}) => {
  const now = new Date();
  return (
    <main className={styles.PolicyContainer}>
      <section className={styles.Landing}>
        <h1 className={styles.HeaderText}>Privacy Policy</h1>
      </section>
      <section className={styles.Content}>
        <small className={styles.Time}>
          {" "}
          {moment(now.toISOString()).format("MMMM Do YYYY, h:mm:ss a")}
        </small>
        <div className={styles.PrivacyText}>
          <p>
            This Privacy Policy constitutes a part of Ibx Exchange Terms of Use
            （the “TOU”). The terms used in this Privacy Policy shall have the
            same meanings as in the TOU except as otherwise provided.
          </p>
          <p>
            This Privacy Policy explains how Ibx Exchange and Ibx Exchange
            Operators collect, use, process, disclose, share, transfer, and
            protect user’s personal information obtained through the Ibx
            Exchange’s platform and its partners. The terms “we”, “us”, and
            “our” refer to Ibx Exchange and Ibx Exchange Operators. When we ask
            for certain personal information from users, it is because we are
            required by applicable laws or government orders to collect such
            information, and/or it is relevant for our specified operational
            purposes.
          </p>
          <h3>
            Please carefully read the full content of this Privacy Policy. When
            visiting Ibx Exchange, regardless of whether or not you register for
            or log in to Ibx Exchange Services, you acknowledge, understand, and
            consent to all articles described in this Privacy Policy.
          </h3>
          <p>
            Please note that Ibx Exchange Services available on our website and
            mobile app are not intended for minors below the age of 18 years and
            we do not knowingly collect data relating to minors. <br />
            We will not use your personal information for any purpose not
            covered in this Privacy Policy or the TOU (including any other
            business rules of Ibx Exchange) without prior notification to you
            and your consent.
          </p>
          <p>
            This Privacy Policy has incorporated elements from the General Data
            Protection Regulation (GDPR) and Nigerian Data Protection Regulation
            (NDPR). We utilize standard contract clauses, rely on the European
            Commission's adequacy decisions about certain countries, as
            applicable, and obtain your consent for these data transfers to
            third countries if required by applicable laws.
          </p>
        </div>
        <div className={styles.PrivacyContent}>
          {/* FIRST CONTENT */}
          <div>
            <div>
              <div>
                <span>1</span>
                <h3>INFORMATION WE COLLECT</h3>
              </div>
              <p>
                The following are the types of information we collect when you
                register for and use Ibx Exchange Services:
              </p>
            </div>

            <div>
              <span>
                <small>1.1</small>
                <h3>Information You Provide to Us When Registering</h3>
              </span>
              <p>
                When you create an Ibx Exchange Account, you provide us with
                your email address, name, date of birth, nationality, ZIP code,
                country code, gender, utility bills, home address, password, and
                other information to help us identify you (“Identification
                Information”). You can also choose to add a phone number for SMS
                or a Google Authenticator account for Two-Factor Authentication
                to improve account security. If you agree to use biometric
                authentication methods to log in or use Ibx Exchange services,
                such as fingerprint recognition and facial recognition, you need
                to provide us with the corresponding information, such as the
                fingerprint information and facial information, and your consent
                to the processing of your biometric data
              </p>
            </div>

            <div>
              <span>
                <small>1.3</small>
                <h3>Information We Collect as You Use Ibx Exchange Services</h3>
              </span>
              <div>
                <span>
                  <small>1</small>
                  <h3>Service Usage Information</h3>
                </span>
                <p>
                  Through your access to and use of Ibx Exchange Services, we
                  may monitor and collect tracking information related to usage
                  including but not limited to your phone number, access date
                  and time, device type and device identification, operating
                  system and hardware setting, browser type, and information
                  derived from SIM card, network operator, IP address, GPS, base
                  station and WLAN（“Service Usage Information”. This
                  information may be directly obtained by Ibx Exchange or
                  through third-party service providers. The collection of
                  Service Usage Information helps our systems to ensure that our
                  interface is accessible for users across all platforms and can
                  aid during criminal investigations.
                </p>
              </div>
              <div>
                <span>
                  <small>1.2</small>
                  <h3>Transaction Information</h3>
                </span>
                <p>
                  For all personal, merchant, and institutional user accounts,
                  we may collect transaction information as you use Ibx Exchange
                  Services, including but not limited to deposit snapshots,
                  account balances, trade history (such as transaction
                  initiation, payment method, price, quantity, time, withdrawal
                  and authorization information), order activity, and
                  distribution history “Transaction Information”. We collect
                  such transaction information to monitor suspicious trading
                  activity for user fraud protection, legal case resolution, and
                  any other purposes disclosed in this Privacy Policy.
                </p>
              </div>
              <div>
                <span>
                  <span>1.3</span>
                  <h3>Communication Information</h3>
                </span>
                <p>
                  You agree that, for the purposes disclosed in this Privacy
                  Policy, we are entitled to collect and use the information
                  contained in or related to the communication that you send to
                  us or generated through your use of Ibx Exchange Services（
                  “Communication Information”) which includes:
                </p>
                <p>
                  1. All messages, requests, or other information you send in
                  the course of your contact with Ibx Exchange;
                </p>
                <p>
                  2. All communications and file attachments in connection with
                  your transactions with other users or other data generated
                  primarily through your communications with them.
                </p>
              </div>
            </div>

            <div>
              <span>
                <small>1.4</small>
                <h3>Financial Information:</h3>
              </span>
              <p>
                You agree that, for the purposes disclosed in this Privacy
                Policy, we are entitled to collect and use the information
                contained in or related to your financial information when you
                use Ibx Exchange Services, including without limitation, bank
                account information, payment card details, transaction history,
                trading data, and/or tax identification. We collect such
                financial information to monitor suspicious financial activity
                for user fraud protection, legal case resolution, and any other
                purposes disclosed in this Privacy Policy.
              </p>
            </div>
          </div>

          {/* SECOND CONTENT */}
          <div>
            <span>
              <small>2</small>
              <h2>HOW WE COLLECT INFORMATION?</h2>
            </span>

            <div>
              <span>
                <small>2.1</small>
                <h3>Information Ibx Exchange Automatically Collects</h3>
              </span>
              <p>
                Most of the personal information that we collect is directly
                provided by you. In the following situations, we will collect
                and process the information about you:
              </p>
              <p>
                . Where you registered from, log in or visit Ibx Exchange, or
                use any service of
              </p>
              <p>Ibx Exchange;</p>
              <div>
                <span>
                  <small>1</small>
                  <p>
                    Where you voluntarily complete any user survey or provide
                    feedback to us via email or any other channel;
                  </p>
                </span>
                <span>
                  <small>2</small>
                  <p>
                    Where you use cookies of the browser or software in visiting
                    or using our website or mobile apps;
                  </p>
                </span>
                <span>
                  <small>3</small>
                  <p>
                    Other situations where we may automatically collect your
                    information as mentioned in this Privacy Policy or our TOU
                    (including the Ibx Exchange PlatformRules, the same below).
                  </p>
                </span>
              </div>
            </div>

            <div>
              <span>
                <small>2.2</small>
                <h3>Information Collected from Third-party Sources</h3>
              </span>
              <p>
                We may collect information about you from third party sources,
                including but not limited to, the following channels:
              </p>
              <div>
                <span>
                  <small>1</small>
                  <p>
                    Public databases, credit bureaus, and ID verification
                    partners;
                  </p>
                </span>
                <span>
                  <small>2</small>
                  <p>Marketing partners and resellers;</p>
                </span>
                <span>
                  <small>3</small>
                  <p>Advertising partners and analytics providers.</p>
                </span>
              </div>
            </div>

            <div>
              <span>
                <small>2.3</small>
                <h3>Anonymized and Aggregated Data</h3>
              </span>
              <p>
                Anonymization is a data processing technique that removes or
                modifies personal information so that it cannot be associated
                with a specific individual. Except for this section, none of the
                other provisions of this Privacy Policy applies to anonymized or
                aggregated personal data (i.e. information about our Users that
                we combine so that it no longer identifies or references an
                individual User). We may use anonymized or aggregate customer
                data for any business purpose, including to better understand
                Users’ needs and behaviours, improve our products and services,
                conduct business intelligence and marketing, and detect security
                threats. We may perform our analytics on anonymized data or
                enable analytics provided by third parties.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Policy;
