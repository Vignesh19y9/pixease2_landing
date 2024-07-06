import React from "react";

const Privacy = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4 pb-10">Privacy Policy</h1>

      <section className="pb-10 ">
        <h3 className="text-xl font-bold mb-2">Last updated: Sep 9, 2022</h3>
        <p className="text-lg">
          We are pleased that you are using our PixEase Mac application
          (hereinafter referred to as the "app"). In the following, we will
          inform you about our policies with the use of our app. The terms used
          in this Privacy Policy have the same meanings as in our Terms and
          Conditions, which are accessible at PixEase unless otherwise defined
          in this Privacy Policy.
        </p>
      </section>

      <section className="pb-10 ">
        <h3 className="text-xl font-bold mb-2">HOW WE HANDLE YOUR DATA</h3>
        <p className="text-lg">
          All of your data, including screenshots, imported images and settings,
          are stored locally on your app using app Folders and Local Storage.
          The entire app runs on your device, we don't have a backend server to
          collect data on the server side.
        </p>
      </section>

      <section className="pb-10 ">
        <h3 className="text-xl font-bold mb-2">CONTACT</h3>
        <p className="text-lg">
          When contacting us (e.g., via a contact form or email), personal data
          is collected. The data collected when using a contact form can be seen
          from the respective contact form in the app. This data is stored and
          used exclusively for the purpose of answering your request or for
          contacting you and the associated technical administration. The legal
          basis for processing this data is our legitimate interest in answering
          your request in accordance with Article 6(1)(f) of the GDPR. If your
          contact is aimed at concluding a contract, the additional legal basis
          for processing is Art. 6(1)(b) of the GDPR. Your data will be deleted
          once your request has been processed. This is the case if it can be
          inferred from the circumstances that the facts in question have been
          finally clarified and provided that there are no legal storage
          obligations to the contrary.
        </p>
      </section>

      <section className="pb-10 ">
        <h2 className="text-xl font-bold mb-2">COOKIES</h2>
        <p className="text-lg">
          Cookies are files with a small amount of data that are commonly used
          as anonymous unique identifiers. The use of cookies for the process of
          finding app purchase state may be done entirely in the local storage.
        </p>
      </section>

      <section className="pb-10 ">
        <h2 className="text-xl font-bold mb-2">Contact Us</h2>
        <p className="text-lg">
          If you have any questions about this Privacy Policy, feel free to get
          in touch with us at robzapps1@gmail.com
        </p>
      </section>

      <section className="pb-10 ">
        <h2 className="text-xl font-bold mb-2">THIRD-PARTY SERVICES</h2>
        <p className="text-lg">
          PixEase does not use third-party services that access your data.
        </p>
      </section>
      <p>
        Your privacy is important to us. It is PixEase's policy to respect your
        privacy regarding any information we may collect from you across our
        app. We only ask for personal information when we truly need it to
        provide a service to you. We collect it by fair and lawful means, with
        your knowledge and consent. We also let you know why we're collecting it
        and how it will be used.
      </p>

      {/* Add more sections as necessary */}
    </div>
  );
};

export default Privacy;
