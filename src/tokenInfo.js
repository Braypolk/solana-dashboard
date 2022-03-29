// import React, { useEffect, useState } from 'react';
// import { TokenListProvider, TokenInfo } from '@solana/spl-token-registry';


// export const Icon = ({ mint }) => {
//     const [tokenMap, setTokenMap] = useState(new Map());

//     useEffect(() => {
//         const list = async () => {
//             new TokenListProvider().resolve().then(tokens => {
//                 const tokenList = tokens.filterByChainId('mainnet-beta').getList();
//                 //   setTokenMap(tokenList.reduce((map, item) => {
//                 //     map.set(item.address, item);
//                 //     return map;
//                 //   },new Map()));
//                 console.log('tokenList', tokenList);
//             });
            
//         }

//         list().catch(console.error);
//     }, [setTokenMap]);
//     return 'test'

//     //   const token = tokenMap.get(mint);
//     //   if (!token || !token.logoURI) return null;

//     //   return (<img src={token.logoURI} />);

//     // new TokenListProvider().resolve().then((tokens) => {
//     //     const tokenList = tokens.filterByClusterSlug('mainnet-beta').getList();
//     //     console.log(tokenList);
//     //   });
// }


import React, { useEffect, useState } from 'react';
import { TokenListProvider, TokenInfo } from '@solana/spl-token-registry';


export const Icon = ({mint}) => {
  const [tokenMap, setTokenMap] = useState(new Map());
  //   console.log(mint);
  useEffect(() => {
    new TokenListProvider().resolve().then(tokens => {
      // const tokenList = tokens.filterByChainId('mainnet-beta').getList();
      const tokenList = tokens.getList();
      const mapList = tokenList.reduce(function(map, item){
        map[item.address] = item
        return map;
      }, {});
      // console.log(mapList);
      console.log(mapList[mint])
      setTokenMap(mapList)
    });
  }, [setTokenMap]);
// console.log(tokenMap);
  const token = tokenMap[mint];
  if (!token || !token.logoURI) {
    console.log("bad");  
    return null;
  }

  return (<img class="tokenImage" src={token.logoURI} />);
}