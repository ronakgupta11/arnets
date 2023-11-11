import * as React from "react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const imageLoader = ({ src, width, quality }) => {
  console.log("src",src)
  return `https://ar-io.dev/${src}?w=${width}&q=${quality || 75}`;
};

const videoUrl = (src)=> `https://ar-io.dev/${src}`
export function AssetCard(props) {
  console.log(props.type)
  return (
    <Card className="w-full">
      <CardContent>
       {props.type === "image"  &&<Image
          src={props.id}
          alt={props.title}
          loader={imageLoader}
          className="aspect-[1/1] h-fit w-fit object-contain mx-auto"
          width={200}
          height={200}
        />}
        {props.type === "video" && <video >
          <source
           src={videoUrl(props.id)}/>
          </video>}
          <p className="text-sm font-semibold max-w-full">Transaction id:</p>
        <Separator/>
          <p className="text-sm max-w-full">{`${props.id.slice(0,8)}....${props.id.slice(-8)}`}</p>
      </CardContent>

    </Card>
  );
}
