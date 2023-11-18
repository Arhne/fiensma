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

          {/* THIRD CONTENT */}

          <div>
            <span>
              <small>3</small>
              <h2>HOW WE USE THE INFORMATION WE COLLECT?</h2>
            </span>
            <p>
              We use the information we collect about you for the following
              purposes or in the following ways:
            </p>
            <div>
              <span>
                <small>3.1</small>
                <h3>To Provide and Maintain Ibx Exchange Services</h3>
              </span>
              <p>
                We use the information collected to deliver, maintain, and
                provide better Ibx Exchange Services (including but not limited
                to processing transactions) and verify Users’ identities.
              </p>
              <p>
                We use the IP address and unique identifiers stored in your
                device’s cookies to help us authenticate your identity and
                activities and provide Ibx Exchange Services. Given our legal
                obligations and system requirements, we cannot provide you with
                all or some of Ibx Exchange Services without data including;
                Identification Information. We may also share your unique
                identifiers with companies and organizations that act as our
                agents, affiliates, and/or professional advisers or companies
                and organizations that assist us in processing or otherwise
                fulfilling transactions that you have requested;
              </p>
            </div>
            <div>
              <span>
                <small>3.2</small>
                <h3>To Protect Our Users</h3>
              </span>
              <p>
                We use the information collected to protect our platforms,
                Users’ accounts, and archives. We use IP addresses and cookies
                to protect against automated abuse such as spam, phishing, and
                Distributed Denial of Service (DDoS) attacks. We analyze trading
                activities to detect suspicious behaviours as early as possible
                to prevent potential fraud and loss of funds to bad actors.
              </p>
            </div>{" "}
            <div>
              <span>
                <small>3.3</small>
                <h3>To Comply with Legal and Regulatory Requirements</h3>
              </span>
              <p>
                Concerning the privacy and security of personal information, we
                will use the information in compliance with our legal
                obligations, government requests, and reasonable user-generated
                inquiries. In cases where it is strictly necessary, such as to
                protect the vital interests of the Users or other natural
                persons, to fulfill the purpose of public interest, to pursue
                our reasonable interests (but not to damage the interests of the
                Users), we may process your personal information without your
                consent. Except for the situations stated in this Privacy Policy
                or the TOU, we will not disclose or provide any of your personal
                information to third parties without a review from our legal
                team and/or prior consent from the User.
              </p>
            </div>{" "}
            <div>
              <span>
                <small>3.4</small>
                <h3>For Measurement, Research, and Development Purposes</h3>
              </span>
              <p>
                We actively measure and analyze data to understand the way you
                use and interact with Ibx Exchange Services. This review
                activity is conducted by our operation teams to improve our
                Platforms’ performance continually and to resolve issues with
                the user experience. In addition, we use such information to
                customize, measure, and improve Ibx Exchange Services and the
                content and layout of our websites and apps, and to develop new
                services. We continuously monitor activity information within
                our systems and our communications with users to look for and
                quickly fix problems.
              </p>
            </div>{" "}
            <div>
              <span>
                <small>3.5</small>
                <h3>To Communicate with You</h3>
              </span>
              <p>
                We use personal information collected, like your phone number or
                email address to interact with you directly when providing
                customer support on a ticket or to keep you informed on logins,
                transactions, account security, and other aspects. Without
                collecting and processing your personal information to confirm
                each communication, we will not be able to respond to your
                submitted requests, questions, and inquiries. All direct
                communications are properly kept at Ibx Exchange or the service
                provider designated by Ibx Exchange, to be reviewed for
                accuracy, to be kept as evidence, or to be used to perform other
                statutory or contractual obligations.
              </p>
            </div>{" "}
            <div>
              <span>
                <small>3.6</small>
                <h3>To Enforce Our TOU and Other Agreements</h3>
              </span>
              <p>
                The collected information is also used to continually and
                actively enforce our TOU and other agreements with our Users,
                including but not limited to reviewing, investigating, and
                preventing any potentially prohibited or illegal activities that
                may violate the foregoing provisions, or disclose the relevant
                information to a third party in accordance therewith.
              </p>
              <p>
                Ibx Exchange reserves the right to suspend or terminate the
                provision of any Ibx Exchange Services to any User found to be
                engaged in activities that violate our TOU and other agreements
                with our Users.
              </p>
            </div>{" "}
            <div>
              <span>
                <small>3.7</small>
                <h3>
                  To Facilitate Corporate Acquisitions, Mergers, or Transactions
                </h3>
              </span>
              <p>
                We may process any information regarding your Ibx Exchange
                Account and use of Ibx Exchange Services as necessary in the
                context of corporate acquisitions, mergers, or other corporate
                transactions.
              </p>
            </div>{" "}
            <div>
              <span>
                <small>3.8</small>
                <h3>For Marketing and Advertising</h3>
              </span>
              <p>
                We may share your personal information with our marketing
                partners for targeting, modeling, and/or analytics as well as
                marketing and advertising.
              </p>
            </div>{" "}
            <div>
              <span>
                <small>3.9</small>
                <h3>For Rebates</h3>
              </span>
              <p>
                We may share the information collected, including but not
                limited to your Identification Information and Transaction
                Information, with your referrer for rebates and other benefits.
              </p>
            </div>{" "}
            <div>
              <span>
                <small>3.10</small>
                <h3>For Any Other Purpose</h3>
              </span>
              <p>
                We may disclose your personal information for any other purpose
                and will request your consent. We will only use your data for
                the purposes for which we collected it unless we reasonably
                consider that we need to use it for another reason and that
                reason is compatible with the original purpose. If you wish to
                get an explanation as to how the processing for the new purpose
                is compatible with the original purpose, please contact us.
              </p>
              <p>
                If we need to use your data for an unrelated purpose, we will
                notify you and we will explain the legal basis which allows us
                to do so. Please note that we may process your data without your
                knowledge or consent, in compliance with the above rules, where
                this is required or permitted by law.
              </p>
            </div>
          </div>

          {/* FOURTH CONTENT */}
          <div>
            <span>
              <small>4</small>
              <h2>MARKETING</h2>
            </span>
            <p>
              If we think you may like specific Ibx Exchange Services or
              products and services of our partners, we hope to keep you
              informed about such products or services. If you agree to receive
              the above marketing information, you can choose to receive it at
              any time in the future. You have the right to ask us at any time
              to stop contacting you for marketing purposes or to send relevant
              information to you. If you do not want to be contacted for
              marketing purposes in the future, please click on the unsubscribe
              link at the bottom of the marketing email and submit your request
              to unsubscribe. Where you opt out of receiving marketing messages,
              this will not apply to service messages that are directly related
              to the use of our Services (e.g. maintenance, change in the terms
              and conditions, and so forth).
            </p>
            <p>
              We will get your opt-in consent before we share your data with any
              third party for marketing purposes.
            </p>
          </div>

          {/* FIFTH */}
          <div>
            <span>
              <small>5</small>
              <h2>HOW WE STORE AND PROTECT USER DATA</h2>
            </span>
            <p>
              Ibx Exchange has kept your personal information safe using
              fault-tolerant secured storage with industry-standard encryption
              and implemented many security measures to ensure that your
              information is not lost, abused, or altered, including, but not
              limited to:
            </p>
            <div>
              <span>
                <small>5.1</small>
                <h3>Physical Measures</h3>
              </span>
              <p>
                Materials containing your personal information will be stored in
                a locked place.
              </p>
            </div>
            <div>
              <span>
                <small>5.2</small>
                <h3>Electronic Measures</h3>
              </span>
              <p>
                Computer data containing your personal information will be
                stored in the computer systems and storage media that are
                subject to strict log-in restrictions
              </p>
            </div>
            <div>
              <span>
                <small>5.3</small>
                <h3>Management Measures</h3>
              </span>
              <p>
                Only authorized employees are permitted to come into contact
                with your personal information and such employees must comply
                with our internal confidentiality rules for personal data. We
                have also imposed strict physical access controls to buildings
                and files.
              </p>
            </div>
            <div>
              <span>
                <small>5.4</small>
                <h3>Technical Measures</h3>
              </span>
              <p>
                Encryption technology such as PCI Scanning and Secured Sockets
                Layer Encryption may be used to transmit and store your personal
                information. We use various currently available general security
                technologies and supporting management systems to minimize the
                risks that your information may be disclosed, damaged, misused,
                accessed without authorization, disclosed without authorization,
                or altered.
              </p>
            </div>
            <div>
              <span>
                <small>5.5</small>
                <h3>Other Measures</h3>
              </span>
              <p>Our web server is protected by the “firewall”.</p>
              <p>
                Please note that it is impossible to guarantee 100% security of
                information. As such, we request that you understand the
                responsibility to independently take safety precautions to
                protect your personal information. You agree that we shall not
                be liable for any information leakage and other losses not
                caused by our intention or gross negligence, including but not
                limited to hacker attack, power interruption, or unavoidable
                technical failure, to the maximum extent permitted by law. If
                you suspect that your personal information has been compromised,
                especially account and password information, please lock your
                Ibx Exchange Account and immediately contact the Ibx Exchange
                Customer Support team at support@ibxp2p.com
              </p>
              <p>
                Unless otherwise stipulated by law or the TOU, you agree that we
                have the right but not the obligation to retain all the
                collected personal information for the duration of your Ibx
                Exchange Account for as long as reasonably necessary to fulfill
                the purposes we collected it for. We may retain your data for a
                longer period in the event of a complaint or if we reasonably
                believe there is a prospect of litigation concerning our
                relationship with you. To determine the appropriate retention
                period for personal data, we consider the amount, nature, and
                sensitivity of the personal data, the potential risk of harm
                from unauthorised use or disclosure of your data, the purposes
                for which we process your data, and whether we can achieve those
                purposes through other means, and the applicable legal,
                regulatory, tax, accounting or other requirements.
              </p>
              <p>
                In some circumstances, we will anonymise your data (so that it
                can no longer be associated with you) for research or
                statistical purposes, wherein we may use this information
                indefinitely without further notice
              </p>
            </div>
          </div>

          {/* SIXT CONTENT */}

          <div>
            <span>
              <small>6.</small>
              <h2>TRANSFERS OF PERSONAL INFORMATION</h2>
            </span>
            <p>
              You understand that we have the right to have all or some of the
              collected personal information transferred to or stored in other
              countries or regions than your country of nationality, your
              country of residence, or the country where the server is, without
              your specific consent, under the following circumstances:
            </p>
            <div>
              <span>
                <small>6.1</small>{" "}
                <h3>
                  if it is necessary to protect, process, analyze, and
                  reasonably use the personal information;
                </h3>
              </span>
            </div>
            <div>
              <span>
                <small>6.2</small>{" "}
                <h3>
                  if it is necessary to enforce the TOU and other agreements
                  with our Users;
                </h3>
              </span>
            </div>
            <div>
              <span>
                <small>6.3</small>{" "}
                <h3>if it is necessary for the public interest;</h3>
              </span>
            </div>
            <div>
              <span>
                <small>6.4</small>{" "}
                <h3>
                  if it is necessary to establish, exercise, or defend the
                  rights of us, our partners, or other Users;
                </h3>
              </span>
            </div>{" "}
            <div>
              <span>
                <small>6.5</small>{" "}
                <h3>
                  other circumstances required by law or government orders.
                </h3>
              </span>
            </div>
            <p>
              You also have the right to request a transfer of your data to you
              or a third party. We will provide to you, or a third party you
              have chosen, your data in a structured, commonly used,
              machine-readable format. Note that this right only applies to
              automated information that you initially provided consent for us
              to use or where we used the information to perform a contract with
              you.
            </p>
          </div>

          {/* SEVENTH CONTENT */}

          <div>
            <span>
              <small>7</small>
              <h2>PRIVACY POLICIES OF OTHER WEBSITES</h2>
            </span>
            <p>Privacy Policies of Non-Ibx Exchange Websites</p>
            <p>
              If you visit other third-party platforms, partner’s websites, or
              apps via the links on Ibx Exchange, you should agree with and
              abide by their separate and independent privacy policies. We do
              not control these third-party sites and we are not responsible for
              the content or the activities therein. Privacy Policies of Ibx
              Exchange
            </p>
            <p>
              This Privacy Policy applies to all platforms, websites, and
              departments of ibxp2p.com and Ibx Exchange ecosystem. If you visit
              any link to any sub-platforms of Ibx Exchange, you should agree
              with and abide by the separate and independent privacy policies of
              such sub-platforms. If the privacy policy of any sub-platform
              conflicts with this Privacy Policy, the privacy policy of such
              sub-platform shall prevail.
            </p>
          </div>

          {/* EIGHT CONTENT */}
          <div>
            <div>
              <span>
                <h2>DATA PROTECTION RIGHTS THAT YOU ENJOY</h2>
              </span>
              <p>
                We hope to ensure that you are fully aware of the data
                protection rights that you enjoy. Unless otherwise required by
                law or government orders, each User has the following rights:
              </p>
              <div>
                <span>
                  <small>8.1</small>
                  <h3>Right of Access</h3>
                </span>
                <p>
                  You have the right to access or obtain copies of your personal
                  information. We may charge a reasonable fee for providing the
                  access service.
                </p>
              </div>
              <div>
                <span>
                  <small>8.2</small>
                  <h3>Right to Rectification</h3>
                </span>
                <p>
                  You have the right to correct personal information that you
                  deem inaccurate. You also have the right to ask us to complete
                  the personal information that you deem incomplete within a
                  reasonable limit.
                </p>
              </div>
              <div>
                <span>
                  <small>8.3</small>
                  <h3>Right to Erasure (Right to be Forgotten)</h3>
                </span>
                <p>
                  You have the right to request the erasure of your data under
                  certain circumstances.
                </p>
              </div>
              <div>
                <span>
                  <small>8.5</small>
                  <h3>Right to Object</h3>
                </span>
                <p>
                  Under certain circumstances as required by Law or as
                  specifically reminded by us, you have the right to object to
                  the processing of your personal information; however, you
                  understand that such objection to the processing may prevent
                  us from providing you with some of Ibx Exchange Services.
                </p>
              </div>{" "}
              <div>
                <span>
                  <small>8.6</small>
                  <h3>Right to Data Portability</h3>
                </span>
                <p>
                  Under certain circumstances, as required by Law or as
                  specifically reminded by us, you have the right to request us
                  to transmit the personal information that we collect to
                  another body, or directly to you. We may charge a reasonable
                  fee for providing the transmission service. We may need to
                  request specific information from you to help us confirm your
                  identity and ensure your right to access your data (or to
                  exercise any of your other rights). This is a security measure
                  to ensure that personal data is not disclosed to any person
                  who has no right to receive it. We may also contact you to ask
                  you for further information on your request to speed up our
                  response
                </p>
              </div>
            </div>
          </div>

          {/* NINTH CONTENT */}
          <div>
            <span>
              <small>9</small>
              <h2>CHANGES TO THIS PRIVACY POLICY</h2>
            </span>
            <p>
              From time to time, Ibx Exchange may revise this Privacy Policy to
              reflect changes in Law or our personal data collection,
              processing, and use practices. Changes to this Privacy Policy will
              be announced by posting on www.ibxp2p.com. You shall regularly
              review the Privacy Policy and pay attention to its revisions. If
              you do not agree with the revised content, you shall stop
              accessing Ibx Exchange immediately. When an updated version of the
              Privacy Policy is released, your continued access to Ibx Exchange
              means that you agree to the updated content and abide by the
              updated Privacy Policy.
            </p>
          </div>

          {/* TENTH CONTENT */}
          <div>
            <span>
              <small>10</small>
              <h2>CONTACT US</h2>
            </span>
            <p>
              We are committed to respecting the freedoms and rights of all our
              Ibx Exchange Users. Should you have any questions or concerns
              regarding this Privacy Policy, or if you would like to file a data
              protection request, please contact our Support, at
              support@ibxp2p.com
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Policy;
