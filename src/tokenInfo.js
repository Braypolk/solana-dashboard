import React, { useEffect, useState } from 'react';
import { TokenListProvider, TokenInfo } from '@solana/spl-token-registry';


export const Icon = ({ mint }) => {
    const [tokenMap, setTokenMap] = useState(new Map());

    useEffect(() => {
        const list = async () => {
            new TokenListProvider().resolve().then(tokens => {
                const tokenList = tokens.filterByChainId('mainnet-beta').getList();
                //   setTokenMap(tokenList.reduce((map, item) => {
                //     map.set(item.address, item);
                //     return map;
                //   },new Map()));
                console.log(tokenList);
            });
            
        }

        list().catch(console.error);
    }, [setTokenMap]);
    return 'test'

    //   const token = tokenMap.get(mint);
    //   if (!token || !token.logoURI) return null;

    //   return (<img src={token.logoURI} />);

    // new TokenListProvider().resolve().then((tokens) => {
    //     const tokenList = tokens.filterByClusterSlug('mainnet-beta').getList();
    //     console.log(tokenList);
    //   });
}