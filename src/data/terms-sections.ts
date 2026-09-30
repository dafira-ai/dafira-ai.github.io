const definitions = {
  sections: [
    {
      title: "Administrator User or Board Admin",
      description:
        "The person or persons appointed by the Client to manage the Client's account, which has specific administrator functionalities, such as the possibility to create Users, define their rights, and modify settings."
    },
    {
      title: "Agreement",
      description:
        "The contractual relationship between the Client and Dafira for the provision of the Services, including these Terms and Conditions, the Data Processing Agreement (DPA), the privacy and cookie policy, and all additional policies that are incorporated herein by reference, and any variations thereof or amendments thereto."
    },
    {
      title: "Business Day",
      description:
        "Any day other than Saturdays, Sundays, and public holidays in Belgium."
    },
    {
      title: "Client",
      description:
        "Any legal entity that opens an account to receive a Service from Dafira."
    },
    {
      title: "Client Data",
      description:
        "Any content, data, and information provided by Client in the context of using the Services."
    },
    {
      title: "Client Subscription",
      description:
        "The plan selected by the Client that includes all or part of the Services."
    },
    {
      title: "Initial Term",
      description:
        "The first term of the Agreement as chosen by the Client when subscribing to the Services."
    },
    {
      title: "Intellectual Property Rights",
      description:
        "All copyrights, patents, database rights, confidential information, trademark rights, designs and models rights and/or any other intellectual property rights (whether registered or unregistered), including technical and/or commercial know-how, methods and concepts, whether or not patentable; applications for registration, and the right to apply for registration, for any of these rights; and all other intellectual property rights and equivalent or similar forms of protection existing anywhere in the world."
    },
    {
      title: "Location",
      description:
        "The physical address that is linked to the account opened by the Client, where the Client is authorized to use the Services."
    },
    {
      title: "Services",
      description:
        "Any of the web and mobile applications provided by Dafira in the form of Software-as-a-Service (SaaS) available online through the Site, and the underlying servers and software used to provide such applications. A detailed description of the Services can be found at dafira.ai."
    },
    {
      title: "Dafira",
      description:
        "Dafira, with its registered office at Rue de l'Hôpital 31, B‐1000 Brussels, Belgium."
    },
    {
      title: "Trial Period",
      description: "As defined in section 3.3.1."
    },
    {
      title: "Term",
      description:
        "Total duration of the Agreement between the Parties, including, as the case may be, successive renewals."
    },
    {
      title: "User or Board User",
      description:
        "Any natural person authorized to use the Services on behalf of the Client."
    }
  ]
};

const bindingAgreement = {
  sections: [
      {
          title: "2.1. Acceptance of Terms",
          description: `    
      Dafira provides its Services subject to the Client's acceptance of the Agreement. By opening an account with Dafira through the Site, the Client acknowledges that it has read, understood, and agreed to be bound by this Agreement. If a person signs this Agreement on behalf of a company or legal entity, this person warrants that he/she has the authority to bind the company or any other legal entity or affiliate he/she represents. If the Client registers for a Trial Period, this Agreement will also govern the Trial Period.
    `,
      },
      {
          title: "2.2. Modifications of Terms",
          description: `
      Dafira reserves the right to unilaterally revise or update the Agreement from time to time at its sole discretion. Minor revisions or updates will simply be published on Dafira’s website. Significant modifications will be subject to notification by Dafira to the Client by website notice, email or any other form of communication. Changes will apply fourteen (14) business days after they have been published or notified if applicable. If the Client does not agree to the changes, they have the right to stop using the Services and cancel their account without charge within fourteen (14) business days after the new terms have been published, or notified if applicable. In such event, the Client will be entitled to a pro-rata refund of the already paid monthly or annual fee. The Client understands and agrees that its continued use of the Services fourteen business days following the publication, or notification when applicable, of any changes to the Agreement, constitutes acceptance of those changes. In no event shall the continued use of the Services by the Client be construed as continued under the former terms of the Agreement.
    `,
      },
  ],
};

const provisionOfServices = {
  sections: [
    {
      title: "3.1 Use of the Services",
      subsections: [
        {
          number: "3.1.1",
          description: `
            During the term of this Agreement, Dafira hereby grants the Client and the Users, a limited, revocable, non-exclusive, non-transferable right to access and use the Services included in the applicable Client Subscription in accordance with this Agreement. From and after the date of any such purchase and for the remaining duration of the term of this Agreement, Dafira hereby also grants the Client and the Users a limited, revocable, non-exclusive, non-transferable right to access and use, in accordance with this Agreement, any additional Services that are purchased by the Client, for an additional cost, during the term of this Agreement.
          `
        },
        {
          number: "3.1.2",
          description: `
            The Client is responsible for ensuring that its use of the Services is in accordance with this Agreement.
          `
        },
        {
          number: "3.1.3",
          description: `
            The right to use the Services described in Section 3.1.1 is granted subject to the restrictions in terms of the number of Users, functionalities and/or transactions attaching to the applicable Client Subscription, as described on the Site. It is granted for the sole purpose of enabling the Client and Users to access and use the Services for the Client’s own lawful internal business purposes. Unless otherwise stated in writing, the right to use the services described in Section 3.1.1. cannot be transferred or sublicensed to any third party, in whole or in part, without the written prior approval of Dafira.
          `
        },
        {
          number: "3.1.4",
          description: `
            Except for the rights of use and other rights expressly granted herein, no other rights are granted to the Client or any User. The Client expressly acknowledges that the access or use of a Service does not imply a transfer of any Intellectual Property Right to the Client or any User. All Intellectual Property Rights and all derivative rights related to the Site and the Services continue to be retained by Dafira or its licensors.
          `
        }
      ]
    },
    {
      title: "3.2 Registration Process",
      subsections: [
        {
          number: "3.2.1",
          description: `
            To sign up for a Service, Dafira requires the Client to register on the Site. When the Client registers, a client account will be opened, and the Client will be required to provide its customary billing information such as name and billing address and to select a plan and a payment frequency. Depending on the selected Client Subscription and payment frequency, a credit card number might be required as well. The Client commits to provide accurate and complete information when registering and to keep this information up-to-date. Dafira has the right to suspend or terminate the Client’s account and to refuse any and/or all current or future use of the Service (or any part thereof), if any information is untrue, inaccurate, not up-to-date or incomplete.
          `
        },
        {
          number: "3.2.2",
          description: `
            The Client and its Users register and log in using a valid email address and a password for authentication (the “Client Login Data”). The Client remains responsible for the confidentiality of the Client Login Data. The Client is fully responsible for all activities that occur on its account.
          `
        }
      ]
    },
    {
      title: "3.3 Free Trial",
      subsections: [
        {
          number: "3.3.1",
          description: `
            The Client has the right to request (only) one (1) trial period free of charge valid 7 days per location to experience the features and functionalities of the Services before making a purchasing decision (the “Trial Period”). If the Client renews its account at the end of the Trial Period, the Client will not be eligible for another free Trial Period for the same Location. If Dafira discovers that the Client has registered several times for Trial Periods for a certain Location, Dafira reserves the right to restrict or terminate any of the Client’s client accounts in Dafira’s sole discretion and/or to refuse all current or future use of the Service (or any part thereof).
          `
        },
        {
          number: "3.3.2",
          description: `
            During the Trial Period, Dafira makes its Services available to the Client with full access to all functionalities mentioned in the Client Subscription and full support. For Services used during the Trial Period, Dafira does not make any binding commitments, obligations, representations or warranties in connection with the Services, as the Services are provided “as is” and “as available” during the Trial Period.
          `
        },
        {
          number: "3.3.3",
          description: `
            The Trial Period starts from the creation of a client account, which is confirmed by an approval sent by Dafira to the e-mail address provided by the Client. The Trial Period is valid for fifteen (15) days unless the Client’s use of the Service is terminated earlier in accordance with this Agreement. As soon as the Trial Period expires, the Client’s access will be immediately terminated, except if the Client Subscription is opened.
          `
        },
        {
          number: "3.3.4",
          description: `
            Notwithstanding the foregoing, Dafira has the right to modify the conditions of the Trial Period or to discontinue it entirely at any time, without prior notice, including, but not limited to, when Dafira believes that the Client applies for a Trial Period not to make any purchasing decision, but for any other (unlawful) purpose such as to engage instead in industrial espionage.
          `
        }
      ]
    }
  ]
};
const qualityOfService = {
  title: "4. Quality of Service Requirements",
  introduction: `
    Providing a great quality of service (QoS) is central to Dafira’s Service objectives. QoS is measured by technical specifications that specify the Service quality of features such as availability and good performance (4.1), security (4.2), and serviceability (4.3). Dafira represents and warrants to the Client that:
    (i) it has the experience and ability to perform the Services required;
    (ii) it will perform the Services in a professional, competent and timely manner, consistent with industry standards and with the terms as contained herein;
    (iii) it has and will maintain all necessary licenses, consents, and permissions necessary for the performance of its obligations under this Agreement and otherwise comply with applicable laws in the provision of the Service;
    (iv) it is authorized to grant the rights and undertake the obligations of the terms and conditions contained in this Agreement; and
    (v) the Services do not infringe the Intellectual Property Rights of any third party.
  `,
  sections: [
    {
      title: "4.1. Availability and Good Performance",
      subsections: [
        {
          number: "4.1.1",
          description: `
            Dafira’s objective is to provide the Client continuous availability of the Services and the Site, and a high level of performance. Dafira will use commercially reasonable efforts to correct all material defaults, defects, and errors in the operation or the functionality of the Services at Dafira’s expense as soon as practicable after Dafira is notified by the Client.
          `
        },
        {
          number: "4.1.2",
          description: `
            Dafira will use all commercially reasonable efforts, being no less than accepted industry standards, to make its Services available to the Client with a Monthly Uptime Percentage of at least 99.50% during any given monthly billing cycle (the “Service Commitment”).
            The “Monthly Uptime Percentage” is calculated by taking the total number of minutes in a calendar month minus the number of minutes of Downtime in the given calendar month, all divided by the total number of minutes in that calendar month. Downtime does not include:
            (i) scheduled Downtime (for maintenance and upgrades, notified in advance to Administrator Users),
            (ii) unavailability due to force majeure,
            (iii) lack of access due to the Client’s improper use of the Service, and
            (iv) unavailability resulting from the Client’s acts or omissions or third-party services, hardware, or network issues.
          `
        },
        {
          number: "4.1.3",
          description: `
            If Dafira fails to meet its Service Commitment in a given calendar month, the Client will be eligible to receive Service Credits on future billing cycles. Service Credits are calculated based on the Monthly Uptime Percentage:
            - Less than 99.50% but equal to or greater than 95%: 10%
            - Less than 95%: 30%
          `
        },
        {
          number: "4.1.4",
          description: `
            Claims for Service Credits must be submitted within thirty (30) calendar days after the incident occurred, including a detailed description, duration, and attempts to resolve the issue. Dafira will issue Service Credits in the next billing period if owed but will not provide refunds or cash payouts. If the Monthly Uptime Percentage falls below 99.50% but remains equal to or greater than 95%, the Client will receive a Service Credit equal to 10% of the total charges for that billing cycle; if it falls below 95%, the Service Credit will increase to 30%, compensating for the reduced service reliability.
          `
        }
      ]
    },
    {
      title: "4.2. Security",
      subsections: [
        {
          number: "4.2.1",
          description: `
             Dafira represents and warrants that (i) its networks, operating systems, software, routers, databases, and computer systems comply with and are properly configured in accordance with applicable laws and compliance with industry standards and that it is known as to such applicable industry standards; (ii) it utilizes commercially reasonable procedures to back-up any data processed under this Agreement; (iii) it shall implement security policies and procedures to protect to the data processed under this Agreement, which policies and procedures shall be in accordance with applicable laws and compliance with industry standards. Dafira will notify the Client of any known or suspected security breach in accordance with applicable laws and regulations. To receive such notifications, the Client commits to subscribe on the Dafira platform  to receive status updates. Dafira will work with the Client to immediately correct any material security deficiency of which Dafira is notified in writing.
          `
        },
        {
          number: "4.2.2",
          description: `
            The Client understands that Dafira cannot and does not guarantee or warrant that files available for downloading from the internet or the Site or using the Services, will be free of viruses or other destructive code. The Client is responsible for implementing sufficient procedures and checkpoints to satisfy the Client's particular requirements for anti-virus protection and accuracy of data input and output, and for maintaining a means external to the Site for any reconstruction of any lost data. To the fullest extent provided by law, Dafira will not be liable for any loss or damage caused by a distributed denial-of-service attack, viruses, or other technologically harmful material that may infect the Client’s computer equipment, computer programs, data, or other proprietary material due to the Client’s use of the website or any services or items obtained through the website or to the client’s downloading of any material posted on it, or on any website linked to it.`
        },
        {
          number: "4.2.3",
          description: `
            The client’s use of the site, the services and underlying applications, any of their content, and any services or items obtained through the site are at the client’s own risk. The site, the services and underlying applications, their content, and any services or items obtained through the site are provided on an “as is” and “as available” basis, without any warranties of any kind, either express or implied. Except as otherwise expressly set forth herein, neither Dafira nor any person associated with Dafira makes any warranty or representation with respect to the completeness, security, reliability, quality, accuracy, or availability of the website. Without limiting the foregoing, neither Dafira nor anyone associated with Dafira represents or warrants that the site, the services and underlying applications, any of their content, or any services or items obtained through the site will be accurate, reliable, error-free, or uninterrupted, that defects will be corrected, that our site or the server that makes it available are free of viruses or other harmful components, or that the website or any services or items obtained through the website will otherwise meet your needs or expectations.`
        }
      ]
    },
    {
      title: "4.3. Serviceability",
      subsections: [
        {
          number: "4.3.1",
          description: `
            Dafira performs regular maintenance and updates to enhance its Services. It may also introduce new features or modify existing ones. Scheduled maintenance that impacts Users will be communicated at least 24 hours in advance. Downtime from scheduled maintenance does not entitle the Client to refunds or compensation.
          `
        },
        {
          number: "4.3.2",
          description: `
            Dafira’s customer support aims to provide clear and timely responses to Client inquiries regarding the Services or the Site. Support requests can be submitted via email or the dedicated support icon within the platform.
          `
        }
      ]
    }
  ]
};
export const acceptableUse = {
  title: "5. Acceptable Use",
  sections: [
    {
      title: "5.1 Illegal Activities",
      description: `
        The Client shall use and access the Service only in compliance with this Agreement and all applicable laws and regulations. 
        The Client is responsible for ensuring compliance by its employees, managers, directors, contractors, mandators, 
        and any other Users authorized by the Client.
      `
    },
    {
      title: "5.2 Security",
      subsections: [
        {
          number: "5.2.1",
          description: `
            The Client is strictly prohibited from taking any action that could compromise the safety or security of the Services, 
            the Site, or the associated network. Prohibited actions include, but are not limited to, distributing, downloading, 
            uploading, or transmitting material containing viruses, Trojan horses, worms, time bombs, cancelbots, or other 
            harmful software that may disrupt the functionality of the Services or the Site, or harm the interests of Dafira, 
            its Clients, Users, or other customers. The Client must refrain from processing content that could overburden 
            or disturb the infrastructure or proper functioning of the applications and the Site.
          `
        },
        {
          number: "5.2.2",
          description: `
            Upon providing prior written notice to Dafira, the Client may conduct regular vulnerability tests (e.g., automated scans) 
            in compliance with agreed-upon instructions and procedures. Any vulnerabilities identified during such tests must be 
            reported to Dafira, which will work to address or mitigate them.
          `
        },
        {
          number: "5.2.3",
          description: `
            The Client agrees to immediately notify Dafira in writing of any security breach or unauthorized use of the Client's 
            account or Client Login Data. The Client shall take all necessary measures to prevent unauthorized access or use, 
            including but not limited to:
            - Ensuring that the Client exits their account after each session.
            - Adequately protecting Client Login Data from unauthorized disclosure or use.
          `
        }
      ]
    },
    {
      title: "5.3 Unsolicited Communications",
      description: `
        The use of the Services to send unsolicited and/or commercial messages to other Users, such as junk mail, spam, 
        chain letters, or threatening and other disturbing communications, is strictly prohibited.
      `
    }
  ]
};

const contentManagement = {
  title: "6. Content Management",
  sections: [
    {
      title: "6.1 Inappropriate Content",
      subsections: [
        {
          number: "6.1.1",
          description: `
            The functionality of one or more of the Services enables the Client to add content to the application(s) underlying such Services. 
            The Client is solely responsible for the content that it and its Users may add. The Client shall not create, transmit, display, 
            or make otherwise available any content that is unlawful, harmful, offensive, threatening, abusive, harassing, tortuous, defamatory, 
            vulgar, obscene, invasive of another’s privacy, or hateful (including viruses, worms, and any other destructive codes).
          `
        },
        {
          number: "6.1.2",
          description: `
            Dafira reserves the right, in its sole discretion, to:
            - Remove or refuse to post any of the Client’s content.
            - Take any action with respect to the Client’s content that Dafira deems necessary or appropriate, including if such content violates this Agreement, 
              infringes any intellectual property rights, threatens the safety of users, or could create liability for Dafira.
            - Disclose the Client’s identity or other information to any third party who claims that material posted by the Client violates their rights.
            - Take appropriate legal action, including referral to law enforcement, for any illegal or unauthorized use of the Services or the Site.
            - Terminate or suspend the Client’s access to all or part of the Services or the Site for any violation of this Agreement.
          `
        }
      ]
    },
    {
      title: "6.2 Links to Third-Party Websites",
      description: `
        The Site may contain direct or indirect links to third-party websites and/or electronic communication portals, 
        on which Dafira cannot exercise any technical, content, or other control. User-generated content may include such hyperlinks among others. 
        Dafira does not guarantee and does not assume any liability for the accuracy, legality, completeness, or quality of:
        - External websites linked to on the Site, or
        - Any other electronic communications portals that are not under Dafira’s control.
        The use of or access to such links is at the Client’s own risk. Dafira is not liable for any damage that may result therefrom.
      `
    },
    {
      title: "6.3 Downloads / Uploads",
      description: `
        All Users, including those of other customers of Dafira, can upload content to the Services, which can then be accessed or downloaded by other authorized Users, 
        including the Client and its authorized Users. Dafira cannot be held accountable for the consequences of downloading content added by other Users. 
        The Client understands and agrees that every download of content from the Service is at their own risk, and damages resulting from loss of data 
        or damage to the Client’s computer system are the Client’s sole responsibility.
      `
    }
  ]
};

const feeAndPayment = {
  title: "7. Fee and Payment",
  sections: [
    {
      title: "7.1 Fees and Taxes",
      description: `
        All fees for each possible Client Subscription are indicated on the Site. The fees are stated in Euros and are exclusive of any 
        applicable taxes, duties, levies, and currency exchange settlements unless stated otherwise. 
        The Client agrees to pay the applicable fees and any applicable tax or fee that may accrue in relation to all use of the Services 
        accessed through the Client’s account, including all fees resulting from unauthorized use.
      `
    },
    {
      title: "7.2 Initial Term",
      description: `
        Notwithstanding Clause 12, the Initial Term of a Client Subscription is 12 or 24 months.
      `
    },
    {
      title: "7.3 Price Adjustments",
      description: `
        Dafira reserves the right to adapt the fees published on its Site. Any price change will not affect existing subscriptions but 
        will only apply to new subscriptions. If such a change results in lower prices or otherwise benefits the Client (excluding 
        cases where lower prices result from higher government levies or taxes), the Client may request its fees due to be adapted 
        as from the date of the Client’s request by sending an e-mail to info@dafira.ai. Such requests will not lead to reimbursement 
        of part of already paid fees for a Client Subscription but may lead to the extension of the Client Subscription.
      `
    },
    {
      title: "7.4 Payment Obligations",
      description: `
        Provision of the Services is conditional upon the payment by the Client of all fees associated with the Services in accordance 
        with this Agreement. Any late or missed payment will automatically lead to a suspension of the account. Any dispute regarding 
        an invoice must be notified to Dafira in writing within fifteen (15) days of the invoice being received. Annual subscriptions 
        are payable by credit card only. Invoices paid via wire transfer are due for payment within fifteen (15) days from the invoice 
        date (NET15). Any unpaid amount at the due date will accrue a conventional interest of 10% per year, calculated on a daily basis 
        from the due date until full payment. The Client will also be liable to pay a fixed indemnity for loss and administrative costs 
        of 10%, with a minimum of 50 EUR per invoice. Dafira may charge the Client for reasonable expenses incurred in debt collection 
        or enforcement efforts, in accordance with applicable law.
      `
    },
    {
      title: "7.5 Payment Processing",
      description: `
        Credit card payments are processed through the secured facilitator Stripe or other payment providers. Online payments are executed 
        via a closed security system (SSL), through which the Client’s bank details are always encrypted when transmitted over the Internet.
      `
    }
  ]
};
const confidentialInformation = {
  title: "8. Confidential Information",
  sections: [
    {
      title: "8.1 Obligations of the Receiving Party",
      description: `
        In respect of any Confidential Information disclosed, furnished, or made accessible by either party (the “Disclosing Party”) 
        to the other party (the “Receiving Party”) under this Agreement, the Receiving Party undertakes to the Disclosing Party:
      `,
      subsections: [
        {
          number: "8.1.1",
          description: "To keep confidential the Confidential Information."
        },
        {
          number: "8.1.2",
          description: `
            To keep the Confidential Information in a safe and secure place using such reasonable technical and organizational 
            security measures to prevent unauthorized access, destruction, or loss and to treat the Confidential Information with 
            at least the same degree of care that is used for its own Confidential Information.
          `
        },
        {
          number: "8.1.3",
          description: `
            Not to disclose without the prior written consent of the Disclosing Party the Confidential Information in whole or in part 
            to any other person save those of its employees, agents, and sub-contractors involved in performing its obligations under 
            this Agreement, and only in so far as necessary for the performance of this Agreement.
          `
        },
        {
          number: "8.1.4",
          description: `
            To use the Confidential Information solely in connection with exercising its rights or performing its rights and obligations 
            under this Agreement.
          `
        }
      ]
    },
    {
      title: "8.2 Definition of Confidential Information",
      description: `
        "Confidential Information" means all information whether of a technical, financial, or commercial nature or otherwise relating 
        in any manner to the business or affairs of the Disclosing Party which information is not publicly available and which becomes 
        known solely through the exercise of rights and obligations under this Agreement.
      `
    },
    {
      title: "8.3 Employee and Agent Awareness",
      description: `
        Each Party hereby undertakes to the other to make all its relevant employees, Users, agents, and sub-contractors aware of the 
        confidential nature of the Confidential Information of the Disclosing Party and, without limitation to this section 8, to take 
        all such steps as may be deemed necessary in the Receiving Party's sole discretion from time to time to ensure compliance by its 
        employees, Users, agents, and sub-contractors with the provisions of this Section 8.
      `
    },
    {
      title: "8.4 Exceptions to Confidentiality",
      description: `
        The provisions of sections 8.1 to 8.3 shall not apply to any information which:
      `,
      subsections: [
        {
          number: "8.4.1",
          description: "Is or becomes public knowledge other than by breach of this section 8."
        },
        {
          number: "8.4.2",
          description: `
            Is in the possession of the Receiving Party without restrictions in relation to disclosure before the date of receipt 
            from the Disclosing Party.
          `
        },
        {
          number: "8.4.3",
          description: `
            Is received from a third party that lawfully acquired it and that is under no obligation restricting disclosure.
          `
        },
        {
          number: "8.4.4",
          description: `
            Is independently developed without access to any Confidential Information belonging to the Disclosing Party.
          `
        }
      ]
    },
    {
      title: "8.5 Survival of Confidentiality Obligations",
      description: `
        Section 8 shall remain in full force and effect notwithstanding any termination of this Agreement. All Confidential Information, 
        including the copies made thereof, is the sole property of the Disclosing Party and shall be promptly returned to the Disclosing 
        Party or destroyed upon written request by the Disclosing Party.
      `
    }
  ]
};

export const intellectualProperty = {
  title: "9. Intellectual Property",
  sections: [
    {
      title: "9.1 Ownership",
      description: `
        Except as otherwise expressly set forth herein, the Services, the Site, and each of their entire contents, features, and functionalities 
        (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) 
        are owned by Dafira, its licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, 
        and other intellectual property or proprietary rights laws. The access or use of the Site or the Services does not imply a transfer of the 
        Intellectual Property Rights to the Client or any User.
      `
    },
    {
      title: "9.2 Restrictions on Use",
      description: `
        The Client agrees not to reproduce, modify, create derivative works from, display, perform, publish, distribute, disseminate, broadcast, commercially 
        exploit, communicate, circulate, or in any way transfer or assign the applications underlying any Services, any Services or any portion of the Site, 
        or any part thereof, to any third party, without the express prior written consent of Dafira. The Client further agrees that it will not disassemble, 
        decompile, reverse engineer, create derivative works from, or otherwise modify the applications underlying any Service, any Service or any portion 
        of the Site, except to the extent permitted by applicable law and in accordance with this Agreement.
      `
    },
    {
      title: "9.3 Client Representations and Warranties",
      subsections: [
        {
          number: "9.3.1",
          description: `
            The Client owns or controls all rights in and to the content added to an application using the Services and has the right to grant the license 
            granted above to Dafira and our affiliates and service providers, and each of their and our respective licensees, successors, and assigns.
          `
        },
        {
          number: "9.3.2",
          description: `
            All of the Client’s content does and will comply with this Agreement.
          `
        },
        {
          number: "9.3.3",
          description: `
            The Client understands and acknowledges that the Client is responsible for any content that it or its Users submit or contribute, and the Client, 
            not Dafira, has full responsibility for such content, including its legality, reliability, accuracy, and appropriateness. Dafira is not responsible 
            or liable to any third party for the content or accuracy of any such content.
          `
        }
      ]
    }
  ]
};
export const clientOwnership = {
  title: "10. Client Ownership",
  sections: [
    {
      title: "10.1 Ownership of Client Data",
      description: `
        The Client shall retain ownership of its personal data and user information (including any such information collected using cookies or otherwise) 
        provided in the context of using the Services (“Client Data”).
      `
    },
    {
      title: "10.2 Aggregated Usage Data",
      description: `
        Notwithstanding any other provision in this Agreement, Dafira reserves the right to compile and use aggregated usage Client Data and statistics, 
        and to disclose these aggregated statistics, as long as these do not describe or identify any individual User or Client.
      `
    },
    {
      title: "10.3 Feedback License",
      description: `
        The Client grants Dafira a worldwide, royalty-free, sub-licensable, perpetual license to use or incorporate into the Service any suggestions, 
        enhancement requests, recommendations, or other feedback provided by the Client and by its Users.
      `
    }
  ]
};

export const liabilities = {
  title: "11. Liabilities",
  sections: [
    {
      title: "11.1 Client Indemnification",
      description: `
        The Client agrees to defend, indemnify, and hold harmless Dafira, its affiliates, licensors, and service providers, and its and their respective 
        officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, 
        judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys’ fees) arising out of or relating to such Client’s or any of its Users’ 
        violation of these General Terms and Conditions or your use of the Services or the Site, including, but not limited to, content added by the Client or any of its 
        Users to any application underlying the Services, any use of the Site’s content, services, and products other than as expressly authorized in these General Terms 
        and Conditions, or the Client’s or any of its Users’ use of any information obtained from the Site.
      `
    },
    {
      title: "11.2 Force Majeure",
      description: `
        Dafira shall not have any liability or be considered to be in breach or default of its obligations under the Agreement, to the extent that performance 
        of such obligations is delayed or prevented, directly or indirectly, due to force majeure. In such event, it is understood that no refund will be owed 
        to the Client. Force majeure shall be taken to mean any circumstance beyond the Parties' control that entirely or partially prevents compliance with their 
        obligations in respect of the Client.
      `
    },
    {
      title: "11.3 Third-Party and Client Actions",
      description: `
        Dafira shall not be liable for damages caused by the Client or actions or omissions of third parties. The Client will hold harmless and indemnify Dafira 
        and its employees, managers, and directors from any claims and damages that may arise from actions or omissions of the Client.
      `
    },
    {
      title: "11.4 Limitation of Liability",
      description: `
        In any case, Dafira’s liability for damages arising under this Agreement, whether in contract, tort, or otherwise, will be limited to actual, proven, direct 
        damages and will not exceed the net amount paid to Dafira by the Client for the Services under this Agreement during the twelve (12) months immediately 
        preceding the cause of the action. In no event will Dafira be liable for indirect, incidental, consequential, punitive, or exemplary damages or financial 
        losses, including the loss of revenue, whether foreseeable or not.
      `
    },
    {
      title: "11.5 Exceptions to Liability Limitations",
      description: `
        The limits of liability in Article 11.4 apply to the extent permitted by applicable law. They do not apply in the case of fraud or willful misconduct by Dafira.
      `
    }
  ]
};

export const termsAndTermination = {
  title: "12. Terms and Termination",
  sections: [
    {
      title: "12.1 Term and Duration",
      subsections: [
        {
          number: "12.1.1",
          description: `
            The Agreement takes effect on the date of completion of the registration process for a Subscription by the Client, for the Initial Term selected by 
            the Client. At the end of the Initial Term and the end of each renewal, unless otherwise directed by either Party pursuant to 12.1.2 and 12.1.3 hereunder, 
            the Agreement will be automatically renewed for the same duration as the Initial Term.
          `
        },
        {
          number: "12.1.2",
          description: `
            Sixty (60) days prior to the end of each term, Dafira will send a notification of renewal to the Client. If the Client does not wish to see the Agreement 
            renewed for a new term, the Client shall notify Dafira its decision not to renew at least 30 days before the end of the Term. If no notification is received 
            from the Client prior to the expiry of the Term, the subscription will be automatically renewed for a new term.
          `
        },
        {
          number: "12.1.3",
          description: `
            If Dafira does not wish to see the Agreement renewed for a new term, sixty (60) days before the end of the Term, Dafira will send a notification of 
            non-renewal to the Client. The Agreement will then end on the final day of the Term.
          `
        }
      ]
    },
    {
      title: "12.2 Suspension and Termination",
      subsections: [
        {
          number: "12.2.1",
          title: "Suspension",
          description: `
            Without limiting the right to termination under clause 12.2.3, Dafira has the right to suspend the Client’s access to the Service in case of a material 
            breach of this Agreement by the Client. Dafira will promptly inform the Client of the reasons for the suspension. The Client will be given thirty (30) 
            days to remedy the breach if such a remedy is possible. Fees may continue to accrue during a suspension, and Dafira may charge the Client a reinstatement 
            fee following any suspension of the Client’s Services. Any reinstatement fee must be paid before the Services can be restored.
          `
        },
        {
          number: "12.2.2",
          title: "Termination for Cause",
          description: `
            Dafira may terminate this Agreement by written notice with immediate effect, without the intervention of a judge and without any liability if:
            - The Client fails to rectify a material breach of this Agreement within thirty (30) days of receiving written notice describing the nature of the breach 
              and specifying the intention to terminate this Agreement if the breach is not rectified.
            - The Client commits a material breach of this Agreement which cannot be remedied.
            - The Client commits small repetitive breaches of this Agreement resulting in an irrecoverable loss of trust on Dafira’s part.
            - Dafira has reasonable suspicion of fraudulent, unauthorized, improper, or illegal use of the Services by the Client.
            - A force majeure event lasting for more than ninety (90) days.
            
            In the event of Termination for Cause, the Client shall not be entitled to a refund, either in full or in part, of paid fees.
          `
        },
        {
          number: "12.2.3",
          description: `
            Either party may terminate this Agreement with immediate effect, without the intervention of a judge, if the other party is subject to liquidation, 
            insolvency, or bankruptcy procedures, or makes any arrangement or composition with, or assignment for the benefit of its creditors, or if any of the 
            other party’s assets are the subject of any form of seizure, or if such other party goes into liquidation, either voluntary (otherwise than for 
            reconstruction or amalgamation) or compulsory, or if a receiver or administrator is appointed over such other party’s assets, to the extent such 
            termination is allowed by applicable law.
          `
        }
      ]
    },
    {
      title: "12.3 Consequences of Termination",
      description: `
        The Client’s account will be deactivated upon termination or suspension of this Agreement. Deactivation means that the Service will be unavailable in whole 
        or in part and that the Client therefore may not have access to the content that it has added to an application using the Services. Deactivation does not 
        mean that the account and the associated content will be immediately and irrevocably removed. Dafira guarantees to keep such content available for at least 
        sixty (60) calendar days following the day of deactivation.
      `
    }
  ]
};

export const privacy = {
  title: "13. Privacy",
  sections: [
    {
      title: "13.1 Processing Personal Data",
      description: `
        Dafira (as Processor) will process personal data on behalf of the Client (in its capacity of Controller). 
        The Client shall be responsible for obtaining the appropriate legitimate basis to perform the processing activities with respect 
        to their employees, contractors, visitors, and Users under this Agreement.
      `
    },
    {
      title: "13.2 Data Processing Agreement",
      description: `
        The processing of personal data by Dafira on behalf of the Client is subject to the Data Processing Agreement attached to these 
        Terms & Conditions. This Annex forms an integral part of the Agreement. dafira.ai/privacy
      `
    }
  ]
};
export const finalProvisions = {
  title: "14. Final Provisions",
  sections: [
    {
      number: "14.1",
      description: "This Agreement is exclusively governed by Belgian law."
    },
    {
      number: "14.2",
      description: `
        Barring the rules of Brussels I Regulation (which provides special jurisdictional rules) and other similar applicable laws 
        to the fullest extent possible, the French-speaking courts of Brussels (Belgium) will be exclusively competent.
      `
    },
    {
      number: "14.3",
      description: `
        This Agreement constitutes the entire agreement between the Client and Dafira relating to the Client’s use of Services, superseding any prior 
        oral or written agreements between the Client and Dafira regarding the subject matter herein. The Parties explicitly exclude the application 
        of any standard terms and conditions of purchase or other conditions of the Client, even if these would have been communicated to Dafira at a later 
        date and Dafira would not have protested those.
      `
    },
    {
      number: "14.4",
      description: `
        If any provision of this Agreement is held to be unlawful, invalid, or otherwise unenforceable for any reason whatsoever, it shall be deemed 
        severed from the Agreement and shall not affect the validity, legality, and enforceability of the remaining provisions of this Agreement.
        To the maximum extent permitted by applicable law, the unlawful, invalid, or unenforceable provision shall be amended to achieve as closely as 
        possible the common intentions of the parties as expressed in the original term.
      `
    },
    {
      number: "14.5",
      description: `
        The Client may not assign or transfer in any other manner any of its rights or obligations under this Agreement, either in whole or in part, 
        to a third party.
      `
    },
    {
      number: "14.6",
      description: `
        A waiver of any right under this Agreement is only effective if it is in writing and it applies only to the party to whom the waiver is 
        addressed and to the circumstances for which it is given.
      `
    },
    {
      number: "14.7",
      description: `
        This Agreement does not create any agency, partnership, or joint venture between the Parties.
      `
    },
    {
      number: "14.8",
      description: `
        There are no third-party beneficiaries to this Agreement.
      `
    },
    {
      number: "14.9",
      description: `
        Any notice to be served under this Agreement is to be delivered or sent by registered post or email:
        - To the Client at the address or email address provided in the subscription process.
        - To Dafira at Rue de l'Hôpital 31, B‐1000 Brussels, Belgium or info@dafira.ai.
      `
    }
  ]
};


export const termsSections = [
  {
    key: "definitions",
    title: "1. Definitions",
    sections: definitions.sections
  },
  {
    key: "binding-agreement",
    title: "2. Binding Agreement",
    sections: bindingAgreement.sections
  },
  {
    key: "provision-of-services",
    title: "3. Provision of Services",
    sections: provisionOfServices.sections
  },
  {
    key: "quality-of-service",
    title: "4. Quality of Service Requirements",
    sections: qualityOfService.sections
  },
  {
    key: "acceptable-use",
    title: "5. Acceptable Use",
    sections: acceptableUse.sections
  },
  {
    key: "content-management",
    title: "6. Content Management",
    sections: contentManagement.sections
  },
  {
    key: "fee-and-payment",
    title: "7. Fee and Payment",
    sections: feeAndPayment.sections
  },
  {
    key: "confidential-information",
    title: "8. Confidential Information",
    sections: confidentialInformation.sections
  },
  {
    key: "intellectual-property",
    title: "9. Intellectual Property",
    sections: intellectualProperty.sections
  },
  {
    key: "client-ownership",
    title: "10. Client Ownership",
    sections: clientOwnership.sections
  },
  {
    key: "liabilities",
    title: "11. Liabilities",
    sections: liabilities.sections
  },
  {
    key: "terms-and-termination",
    title: "12. Terms and Termination",
    sections: termsAndTermination.sections
  },
  {
    key: "privacy",
    title: "13. Privacy",
    sections: privacy.sections
  },
  {
    key: "final-provisions",
    title: "14. Final Provisions",
    sections: finalProvisions.sections
  }
];
