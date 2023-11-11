import { Assets } from "@/components/assets";
import { siteConfig } from "@/config/site";
import Head from "next/head";
import { useState } from "react";

export default function ViewPage() {
  const [selectedOption, setSelectedOption] = useState(`["image/png","image/jpeg"]`);

  const handleOptionChange = (event) => {
  setSelectedOption(event.target.value);
  };
  return (
    <>
      <Head>
        <title>{`View - ${siteConfig.name}`}</title>
      </Head>
      <div className="flex">
        <section className="container grid items-center gap-6 py-8 md:py-10 w-full">
          <div className="flex max-w-[980px] flex-col items-start gap-2">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
              View your Atomic Assets 🖼️
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground">With on-chain likes and comments.</p>
            <p className="max-w-[700px] text-lg text-muted-foreground">Filter</p>
            <div>
      {/* <h2>Selected Option: {selectedOption}</h2> */}
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select an option</option>
        <option value={`["image/png","image/jpeg","image/avif","image/gif","image/svg+xml"]`}>image</option>
        <option value={`["video/mp4","video/x-msvideo","video/3gpp","video/webm","video/ogg","video/mpeg"]`}>video</option>
        {/* <option value={`["video/mp4"]`}>sudio</option> */}
      </select>
    </div>
          </div>
          <Assets query_id ={selectedOption} />
        </section>
      </div>
    </>
  );
}
