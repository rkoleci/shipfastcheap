import { appName } from "@/utils/config";
import getSEOTags from "@/utils/seo";

export const metadata = getSEOTags({
    title: `Terms and Conditions | ${appName}`,
    canonicalUrlRelative: "/tos",
});

export default function TermsAndConditions() {
    return (
        <div className="bg-base-100">
            <div className="max-w-xl mx-auto">
                <div className="p-5">
                    <a className="btn btn-ghost" href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z" clipRule="evenodd"></path>
                        </svg>
                        Back
                    </a>
                    <h1 className="text-3xl font-medium pb-6">Terms and Conditions</h1>
                    <div className="leading-relaxed">
                        <p>1. Introduction</p>
                        <p>By using {appName} you confirm your acceptance of, and agree to be bound by, these terms and conditions.</p>
                        <br />
                        <p>2. Agreement to Terms and Conditions</p>
                        <p>This Agreement takes effect on the date on which you first use the {appName} application.</p>
                        <br />
                        <p>3. Unlimited Access Software License with Termination Rights</p>
                        <p>The {appName} Software License facilitates the acquisition of {appName} software through a single purchase, granting users unrestricted and perpetual access to its comprehensive functionalities. Tailored for independent creators, entrepreneurs, and small businesses, {appName} empowers users to create compelling web pages and online portfolios.</p>
                        <p>This license entails a straightforward and flexible arrangement, exempting users from recurring fees or subscriptions. However, it is important to acknowledge that the licensor retains the right to terminate the license without conditions or prerequisites. This termination provision enables the licensor to exercise control over software distribution and utilization.</p>
                        <p>Opting for the {appName} Software License enables users to enjoy the benefits of the software while recognizing the licensor's unrestricted termination rights, which provide adaptability and address potential unforeseen circumstances.</p>
                        <br />
                        <p>4. Refunds</p>
                        <p>Due to the nature of digital products, the {appName} boilerplate cannot be refunded or exchanged once access is granted.</p>
                        <br />
                        <p>5. Disclaimer</p>
                        <p>It is not warranted that {appName} will meet your requirements or that its operation will be uninterrupted or error free. All express and implied warranties or conditions not stated in this Agreement (including without limitation, loss of profits, loss or corruption of data, business interruption or loss of contracts), so far as such exclusion or disclaimer is permitted under the applicable law are excluded and expressly disclaimed. This Agreement does not affect your statutory rights.</p>
                        <br />
                        <p>6. Warranties and Limitation of Liability</p>
                        <p>{appName} does not give any warranty, guarantee or other term as to the quality, fitness for purpose or otherwise of the software. {appName} shall not be liable to you by reason of any representation (unless fraudulent), or any implied warranty, condition or other term, or any duty at common law, for any loss of profit or any indirect, special or consequential loss, damage, costs, expenses or other claims (whether caused by {appName}'s negligence or the negligence of its servants or agents or otherwise) which arise out of or in connection with the provision of any goods or services by {appName}. {appName} shall not be liable or deemed to be in breach of contract by reason of any delay in performing, or failure to perform, any of its obligations if the delay or failure was due to any cause beyond its reasonable control. Notwithstanding contrary clauses in this Agreement, in the event that {appName} are deemed liable to you for breach of this Agreement, you agree that {appName}'s liability is limited to the amount actually paid by you for your services or software, which amount calculated in reliance upon this clause. You hereby release {appName} from any and all obligations, liabilities and claims in excess of this limitation.</p>
                        <br />
                        <p>7. Responsibilities</p>
                        <p>{appName} is not responsible for what the user does with the user-generated content.</p>
                        <br />
                        <p>8. General Terms and Law</p>
                        <p>This Agreement is governed by the laws of Singapore. You acknowledge that no joint venture, partnership, employment, or agency relationship exists between you and {appName} as a result of your use of these services. You agree not to hold yourself out as a representative, agent or employee of {appName}. You agree that {appName} will not be liable by reason of any representation, act or omission to act by you.</p>
                        <br />
                        <p>Last updated: 26 July 2023.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
