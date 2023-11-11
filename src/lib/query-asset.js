import Arweave from 'arweave';
import Account from 'arweave-account';
export const arweave = Arweave.init({});
export const account = new Account({
  cacheIsActivated: true,
  cacheSize: 100,
  cacheTime: 3600000  // 3600000ms => 1 hour cache duration
});


export const createPostInfo = (id) => {
    // const ownerAddress = node.owner.address;
    // const height = node.block ? node.block.height : -1;
    // const timestamp = node?.block?.timestamp ? parseInt(node.block.timestamp, 10) * 1000 : -1;
    // const postInfo = {
    //   txid: node.id,
    //   owner: ownerAddress,
    //   height: height,
    //   account: account.get(ownerAddress),
    //   length: node.data.size,
    //   timestamp: timestamp,
    //   request:null,
    // }
    // if (postInfo.length >= 0) {
      const res  = arweave.api.get(`/${node}`, { timeout: 10000 }).then(
        v =>{
          console.log(v)
          postInfo.request = v
        }
      ).catch((err) => { console.log(err) });
      // console.log(res)
      
//     } else {
//       postInfo.error = `message is too large (exceeds ${maxMessageLength/1024}kb)`;
//     }
//     return postInfo;
  }
  