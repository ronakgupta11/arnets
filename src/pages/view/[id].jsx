import React, { useEffect, useState } from 'react'
// import { createPostInfo } from '@/lib/query-asset'
import { useRouter } from 'next/router'
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { getSingleAsset } from '@/lib/query-assets';

function View() {
    const route = useRouter()
const videoUrl = (src)=> `https://ar-io.dev/${src}`

    const id = route.query.id
    const imageLoader = ({ src, width, quality }) => {
      console.log("src",src)
      return `https://ar-io.dev/${src}?w=${width}&q=${quality || 75}`;
    };

const [assetData,setAssetData] = useState(null)
const [type,setType] = useState(null)
    const query = `
    query{
      transactions(ids:["${id}"]) {
    edges {
      node {
        id
        owner {
          address
        }
        tags {
          name
          value
        }
        data {
          size
          type
      }
        block {
          timestamp
        }
      }
    }
    }
    }
    `
useEffect(()=>{
async function getData(){
  const res = await getSingleAsset(query)
  return res

}

getData().then(v => {
  setAssetData(v[0])
  setType(v[0].node.data.type.slice(0,5))

})

},[id])
    // createPostInfo(id)
  return (
    <div className='flex-1 items-center justify-center m-auto w-full p-8'>
      <div className='m-auto space-y-2'>
      <p className='font-bold text-xl'>Asset Id</p>
      <p className='text-lg font-semibold text-gray'>{id}</p>

      </div>
      <Separator/>
      <div className=' flex space-x-2 justify-between'>
        
      <div className='w-[50%] p-8 '>
      <p className='font-semibold'> Asset Data</p>
        <Card>
          <CardContent>
          {type === "image"&& <Image
          src={id}
          alt={"title"}
          loader={imageLoader}
          className="aspect-[1/1] h-fit w-fit object-contain mx-auto"
          width={200}
          height={200}
        />}
        {type === "video" && <video controls autoPlay>
          <source src = {videoUrl(id)}/>
          </video>}
          </CardContent>
        </Card>

      </div>
      <div className='w-[50%] p-8'>
        <p className='font-semibold'>Details</p>
{/* {console.log(assetData)} */}

      creator:
      {assetData?.node.owner.address}  
      time: {assetData?.node.block.timestamp}
      tags: {assetData?.node.tags[0].name}
      data: {assetData?.node.data.size}
      </div>
      </div>
      </div>
  )
}

export default View