import { useAccount, useBalance, useNetwork, useSwitchNetwork } from "wagmi";
import { TokenIcon } from "./TokenIcon";
import { TokenDataList } from "../data/tokens";
import { useEffect, useState } from "react";
import { TokenData } from "../interfaces/data/token-data.interface";
import { ERC20__factory, Multicall2, Multicall2__factory } from "../typechain";
import { MULTICALL } from "../config/address";
import { provider } from "../utils/provider";
import { ZeroAddress, formatUnits } from "ethers";
const getTokenBalance = async (
  tokens: TokenData[],
  user: `0x${string}`
): Promise<{ blockNumber: bigint; returnData: string[] }> => {
  const multicall = Multicall2__factory.connect(MULTICALL, provider);
  const tokenItf = ERC20__factory.createInterface();
  const data: Multicall2.CallStruct[] = [];
  tokens.map((token) => {
    if (token.address !== ZeroAddress) {
      data.push({
        target: token.address,
        callData: tokenItf.encodeFunctionData("balanceOf", [user]),
      });
    }
  });
  return multicall.aggregate(data);
};
export default function Portfolio() {
  const { address: user } = useAccount();
  const { data: balance } = useBalance({ address: user, chainId: 137 });
  const { chain: currentChain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();
  const [tokenList, setTokenList] = useState<TokenData[]>([]);
  const [tokenBalance, setTokenBalance] = useState<string[]>([]);
  const getBalancesList = async () => {
    if (currentChain && user) {
      const tokenBalances = (
        await getTokenBalance(TokenDataList[currentChain.id], user)
      ).returnData;
      setTokenList(TokenDataList[currentChain.id]);

      setTokenBalance(tokenBalances);
    }
  };
  useEffect(() => {
    switchNetwork?.(137); //switchNetwork 함수의 용법 //chainId가 137인 곳으로 이동.
    // 이 구문에서 사용된 ?. 연산자는 옵셔널 체이닝(Optional Chaining) 연산자입니다. 이 연산자는 switchNetwork가 null 또는 undefined가 아닐 때만 switchNetwork 함수를 호출하도록 합니다. 만약 switchNetwork가 null 또는 undefined이면, 함수 호출 없이 undefined를 반환합니다.
    // 이는 switchNetwork 함수의 존재 여부를 확인할 때 유용하며, 오류를 방지하기 위한 안전한 방법입니다.
    // 예를 들어, switchNetwork가 정의되어 있으면 switchNetwork(137)를 호출하고, 그렇지 않으면 아무 것도 하지 않습니다.
    getBalancesList();
  }, [currentChain, user]);

  return user ? (
    <div>
      {tokenList.map((token, i) => {
        if (balance && i === 0) {
          // native token
          return (
            <div key={i} className="flex flex-row">
              <TokenIcon token={token} size="md" />
              <div>{formatUnits(balance!.value, 18)}</div>
            </div>
          );
        } else if (BigInt(tokenBalance[i - 1]) > 0n) {
          return (
            // make border box for portfolio
            <div key={i} className="flex flex-row">
              <TokenIcon token={token} size="md" />
              <div>{formatUnits(tokenBalance[i - 1], token.decimals)}</div>
            </div>
          );
        }
      })}
    </div>
  ) : (
    <div> 지갑 연결해라 🤬</div>
  );
}
