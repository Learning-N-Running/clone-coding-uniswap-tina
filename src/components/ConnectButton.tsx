import { useAccount } from "wagmi";

export default function ConnectButton() {
  const { isConnected } = useAccount();
  console.log("isConnected", isConnected);
  return (
    // !isConnected && (
    //   <div>
    //     <w3m-button />
    //   </div>
    // )
    <div style={{ marginBottom: "10px" }}>
      <w3m-button />
    </div>
  );
}
