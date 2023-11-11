"use client";

import { AssetCard } from "@/components/asset-card";
import { getAssetData } from "@/lib/query-assets";
import Link from "next/link";
import * as React from "react";

export function Assets({query_id}) {
  const [assets, setAssets] = React.useState([]);
  console.log(query_id)
  const query = `
query{
  transactions(tags: [
  { name: "Content-type", values: ${query_id} }
  ] first: 10) {
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
    block {
      timestamp
    }
  }
}
}
}

`;

console.log(query)

  React.useEffect(() => {
    async function fetchData() {
      const data = await getAssetData(query);
      console.log(data)
      setAssets(data);
    }
    fetchData();
  }, [query_id]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-6">
      {assets.map((asset) => (
        <Link href={`/view/${asset.id}`}>
        <AssetCard {...asset} key={asset.id} type={query_id}  />
        </Link>
      ))}
    </div>
  );
}
