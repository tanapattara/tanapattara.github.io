import Script from "next/script";

type Props = {
  pId: string;
};

const GoogleAdsense: React.FC = () => {
  if (process.env.NODE_ENV !== "production") {
    return null;
  }
  return (
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8546645383819348"
      crossOrigin="anonymous"
    />
  );
};

export default GoogleAdsense;
