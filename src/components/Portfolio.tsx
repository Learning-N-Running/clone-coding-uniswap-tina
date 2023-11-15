import { useAccount, useBalance, useNetwork, useToken } from "wagmi";
import { chainDataList } from "../data/chains";
import { TokenIcon } from "./TokenIcon";
import { fetchBalance } from "wagmi/actions";
import { TokenDataList, TokenType } from "../data/tokens";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const { address: user } = useAccount();
  // console.log(user);
  ////address(여기서는 변수 user에 할당된 것)는 로그인한 사용자의 주소
  ////출력: 0x7EE6fAD9Ee306551590E81799C49e576f6e57c8D

  const { chain: currentChain } = useNetwork();
  // console.log(currentChain);
  ////chain(여기서는 변수 currentChain에 할당된 것)는 현재 chain
  ////출력: (type: object)
  /*(Sepolia testnet의 경우)
  id: 11155111
  name: "Chain 11155111"
  nativeCurrency: {name: 'Ether', decimals: 18, symbol: 'ETH'}
  network: "11155111"
  rpcUrls: {default: {…}, public: {…}}
  unsupported: true
  */
  /*(Polygon mainnet의 경우)
  blockExplorers: {etherscan: {…}, default: {…}}
  contracts: {multicall3: {…}}
  fees: undefined
  formatters: undefined
  id: 137
  name: "Polygon"
  nativeCurrency: {name: 'MATIC', symbol: 'MATIC', decimals: 18}
  network: "matic"
  rpcUrls: {alchemy: {…}, infura: {…}, default: {…}, public: {…}}
  serializers: undefined
  unsupported: false
  */

  const useBalance_returnValue = useBalance({ address: user });
  ////user(type: address)가 현재 접속한 네트워크에서 소유하고 있는 native token에 대한 정보.
  // console.log(useBalance_returnValue);

  const { data } = useBalance({ address: user });
  // console.log(data);
  ////출력: (type: object)
  /*decimals: 18
  formatted: "12.361887736717687748"
  symbol: "MATIC"
  value: 12361887736717687748n*/

  let balance;
  const fetchUserBalance = async () => {
    if (user) {
      balance = await fetchBalance({ address: user });
      // console.log(balance);
      ////출력: (type: object)
      /*decimals: 18
          formatted: "12.361887736717687748"
          symbol: "MATIC"
          value: 12361887736717687748n*/
    }
  };
  fetchUserBalance().catch((error) => console.error(error));
  //useBalance가 훅이라면 fetchBalance는 action

  //// Mission ////
  // let currentChainTokenDataList;
  // if (currentChain) {
  //   const currentChainID = currentChain.id;
  //   currentChainTokenDataList = TokenDataList[currentChainID];
  //   // console.log(TokenDataList[currentChainID]);
  //   // console.log(TokenDataList[currentChainID].length);
  //   for (let i = 0; i < TokenDataList[currentChainID].length; i++) {
  //     // console.log(TokenDataList[currentChainID][i].address);
  //     // console.log(typeof TokenDataList[currentChainID][i].name);
  //   }
  // }

  type TokenDataT = {
    name: string;
    symbol: string;
    logoURI: string;
    balanceValue: bigint;
    balanceFormatted: string;
  };

  const [currentChainTokenDataList, setCurrentChainTokenDataList] = useState<
    TokenDataT[]
  >([]);

  useEffect(() => {
    const fetchBalancesAndUpdateList = async () => {
      if (user && currentChain) {
        const currentChainID = currentChain.id;
        const tokenDataList = TokenDataList[currentChainID];
        const updatedTokenDataList = [];

        for (const token of tokenDataList) {
          let fetchedBalance;
          if (token.address !== "0x0000000000000000000000000000000000000000") {
            fetchedBalance = await fetchBalance({
              address: user,
              token: token.address as `0x${string}`,
            });
          } else {
            fetchedBalance = await fetchBalance({
              address: user,
            });
          }

          updatedTokenDataList.push({
            name: token.name,
            symbol: token.symbol,
            logoURI: token.logoURI,
            balanceValue: fetchedBalance.value,
            balanceFormatted: fetchedBalance.formatted,
          });
        }

        setCurrentChainTokenDataList(updatedTokenDataList);
      }
    };

    fetchBalancesAndUpdateList().catch(console.error);
  }, [user, currentChain]);

  console.log(currentChainTokenDataList);
  // TODO: TokenIcon listing
  return user && currentChain ? (
    <div>
      {currentChainTokenDataList!.map((token: TokenDataT) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: "0 0 10px 0",
          }}
        >
          <img src={token.logoURI} width={64} />
          <div style={{ marginLeft: "10px", fontWeight: 800 }}>
            {token.name}
          </div>
          <div style={{ marginLeft: "10px" }}>{token.balanceFormatted}</div>
          <div style={{ marginLeft: "5px" }}>{token.symbol}</div>
        </div>
      ))}
    </div>
  ) : (
    <div> 지갑 연결해라 🤬</div>
  );
  ////user: 로그인한 사용자의 주소 | 이때 ENS를 갖고 있다면 ENS가 표시됨.
}
