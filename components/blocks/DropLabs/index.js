'use client';

import Script from 'next/script';

const DropLabs = () => {
  return (
    <section className="relative py-4 pb-16 overflow-hidden">
      <div className="relative container px-4 mx-auto">
        {/* <iframe
          id="dl-widget"
          style="border: 0;width: 100%!important;padding: 0;margin: 0 auto;min-height: 200px;max-width: 1000px;display:block;"
          srcDoc="https://widget.droplabs.pl/index.html?facilityId=2499&onlineGroupId=15218"
          loading="lazy"
          sandbox
        /> */}
        <iframe
          id="dl-widget"
          className="border-0 w-full p-0 md:px-8 my-0 bg-white mx-auto min-h-[200px] block"
          src="https://widget.droplabs.pl/index.html?facilityId=2499&onlineGroupId=15218"
        />
        {/* <Script
          type="text/javascript"
          src="https://widget.droplabs.pl/widget.js"
          strategy="beforeInteractive"
        ></Script> */}
      </div>
    </section>
  );
};

export default DropLabs;
