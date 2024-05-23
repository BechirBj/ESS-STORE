import React from 'react';

const PaymentIcons = () => {
  const icons = [
    {
      name: 'amex',
      src: 'https://images.ctfassets.net/7nqb12anqb19/Ehc1Aj2RtAoa0JgXplUNQ/0c7048761173428efe3393402030db5f/amex.svg',
    },
    {
      name: 'applePay',
      src: 'https://images.ctfassets.net/7nqb12anqb19/42z59fhQdTVjPxNlJtSYsp/941ec2e2464ad1fe2473a746b8e4345b/applePay.svg',
    },
    {
      name: 'dinersClub',
      src: 'https://images.ctfassets.net/7nqb12anqb19/4XnCHtLvce9mL5lawnxLqU/2a27776093c876f2f043fdfcfb5218a8/dinersClub.svg',
    },
    {
      name: 'discover',
      src: 'https://images.ctfassets.net/7nqb12anqb19/6oOOvbAEhxMIeNpGkiVduk/c7db0d77b710e3be91edcb6c39a30635/discover.svg',
    },
    {
      name: 'googlePay',
      src: 'https://images.ctfassets.net/7nqb12anqb19/12eMt1ehopmWkECRNusO4H/7585dbbad063aabb6e23ab0a49bd9c2c/googlePay.svg',
    },
    {
      name: 'maestro',
      src: 'https://images.ctfassets.net/7nqb12anqb19/4p9uD5dLB0vG4E77tUNqSy/b3e2f21d24eacbb6c05b9524cbe7825f/maestro.svg',
    },
    {
      name: 'mastercard',
      src: 'https://images.ctfassets.net/7nqb12anqb19/6nK1eMkcOSI0Y9SNZbJWoW/33625360fd95888800c9ab104f32d824/mastercard.svg',
    },
    {
      name: 'unionPay',
      src: 'https://images.ctfassets.net/7nqb12anqb19/2SaozX3rAX8xlxccWUsea9/69c89907fd9f946892abf38b5e169073/unionPay.svg',
    },
    {
      name: 'visa',
      src: 'https://images.ctfassets.net/7nqb12anqb19/2WIAQowqokoIaJB6cvZXYD/348b37f3de99b90130122a9734032617/visa.svg',
    },
  ];

  return (
    <div className="flex flex-row flex-wrap justify-center sm:justify-start">
      {icons.map((icon) => (
        <div key={icon.name} className="p-1 pb-2">
          <span className="sr-only">{icon.name}</span>
          <img
            alt={icon.name}
            loading="lazy"
            width="38"
            height="24"
            decoding="async"
            data-nimg="1"
            className="max-w-full h-auto"
            style={{ color: 'transparent' }}
            src={icon.src}
          />
        </div>
      ))}
    </div>
  );
};

export default PaymentIcons;
