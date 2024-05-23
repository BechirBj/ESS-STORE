import React from 'react';
import logo from '../../Assets/Footer/logo.png'

const Smicons = () => {
  const links = [
    {
      href: "",
      alt: "X-Logo",
      src: "https://images.ctfassets.net/7nqb12anqb19/3hrUQrZakyvgkpBCjaDtHb/575c0fa2c5bd487fcf5da84fb23bc304/X.svg",
    },
    {
      href: "https://www.facebook.com/EtoileSportiveDuSahel",
      alt: "facebook_logo",
      src: "https://images.ctfassets.net/7nqb12anqb19/253ZSfz1pcPZGXOCoGMX6F/3e1e6d35c6eb63a2ea885d602a40c0a9/_Facebook.svg",
    },
    {
      href: "https://www.instagram.com/etoile.sportive.du.sahel/",
      alt: "instagram_logo",
      src: "https://images.ctfassets.net/7nqb12anqb19/1BhUrB4kHVSJaYnlJCaFUV/a5cd6e94db0eb8a11cd404be734f1747/_Instagram.svg",
    },
    {
      href: "",
      alt: "snapchat_icon",
      src: "https://images.ctfassets.net/7nqb12anqb19/4bzDCztnmKE2xU6GzQnros/d59076267c1f16562ee7b891c99de60b/_Snap.svg",
    },
    {
      href: "",
      alt: "tiktok_icon",
      src: "https://images.ctfassets.net/7nqb12anqb19/1rbDkg05DM1seAkrLFnEtz/fdd0039e2536ef8b9c49beb3d4cf2347/_Tiktok.svg",
    },
    {
      href: "https://www.youtube.com/@ESSahel",
      alt: "youtube_icon",
      src: "https://images.ctfassets.net/7nqb12anqb19/5c2qFOYGzu2AxYKkR68oj1/99522f874e0c7d00418ca51531b0bca0/_YouTube.svg",
    },
    {
      href: "",
      alt: "twitch_icon",
      src: "https://images.ctfassets.net/7nqb12anqb19/3ZAJMQqyqfHdkYXHDGmEQB/f69f06903ec3bf6b69c3cbebd30b75e4/_Twitch.svg",
    },
  ];

  return (
    <div className="hidden md:flex py-5 px-2 border-t border-b border-gray-800 space-x-6 items-center">
      <div className="flex-1">
        <img
          alt="Etoile Sportive du Sahel"
          loading="lazy"
          decoding="async"
          data-nimg="1"
          className="w-16 h-18 hover:opacity-75 opacity-100"
          style={{ color: 'transparent' }}
          src={logo}
        />
      </div>
      <div className="grid-cols-4 grid md:flex md:flex-wrap justify-center pl-5 md:justify-end w-2/3 md:w-auto md:order-1">
        {links.map(link => (
          <a href={link.href} target="_blank" rel="noreferrer" key={link.alt}>
            <span className="sr-only">{link.alt}</span>
            <img
              alt=""
              loading="lazy"
              width="24"
              height="24"
              decoding="async"
              data-nimg="1"
              className="w-max h-max hover:opacity-75 opacity-100 py-2 md:pr-8"
              style={{ color: 'transparent', filter: 'brightness(0) saturate(100%) invert(0%) sepia(100%) saturate(10000%) hue-rotate(180deg) brightness(0%) contrast(100%)' }}
              src={link.src}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Smicons;
