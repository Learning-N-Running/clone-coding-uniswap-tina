import { TokenData } from "../interfaces/data/token-data.interface";

export type TokenType = {
  address: string;
  chainId: number;
  symbol: string;
  decimals: number;
  name: string;
  priceUSD: string;
  logoURI: string;
  coinKey: string;
};

export const TokenDataList: { [chainId: number]: TokenData[] } = {
  1: [
    {
      address: "0x0000000000000000000000000000000000000000",
      chainId: 1,
      symbol: "ETH",
      decimals: 18,
      name: "ETH",
      priceUSD: "1946",
      logoURI:
        "https://static.debank.com/image/token/logo_url/eth/935ae4e4d1d12d59a99717a24f2540b5.png",
      coinKey: "ETH",
    },
    {
      address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      chainId: 1,
      symbol: "WETH",
      decimals: 18,
      name: "Wrapped Ether",
      priceUSD: "1946",
      logoURI:
        "https://static.debank.com/image/eth_token/logo_url/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2/61844453e63cf81301f845d7864236f6.png",
      coinKey: "WETH",
    },
    {
      address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      chainId: 1,
      symbol: "USDC",
      decimals: 6,
      name: "USD Coin",
      priceUSD: "1",
      logoURI:
        "https://static.debank.com/image/coin/logo_url/usdc/e87790bfe0b3f2ea855dc29069b38818.png",
      coinKey: "USDC",
    },
    {
      address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
      chainId: 1,
      symbol: "USDT",
      decimals: 6,
      name: "Tether USD",
      priceUSD: "0.999945",
      logoURI:
        "https://static.debank.com/image/coin/logo_url/usdt/23af7472292cb41dc39b3f1146ead0fe.png",
      coinKey: "USDT",
    },
    {
      address: "0x6b175474e89094c44da98b954eedeac495271d0f",
      chainId: 1,
      symbol: "DAI",
      decimals: 18,
      name: "Dai Stablecoin",
      priceUSD: "0.99995",
      logoURI:
        "https://static.debank.com/image/eth_token/logo_url/0x6b175474e89094c44da98b954eedeac495271d0f/549c4205dbb199f1b8b03af783f35e71.png",
      coinKey: "DAI",
    },
    {
      address: "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359",
      chainId: 1,
      symbol: "SAI",
      decimals: 18,
      name: "Dai Stablecoin v1.0",
      priceUSD: "9.969241799681136",
      logoURI:
        "https://static.debank.com/image/token/logo_url/0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359/4b3369d1f8d2024c0f3dd46a3347d84d.png",
      coinKey: "DAI",
    },
    {
      address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
      chainId: 1,
      symbol: "WBTC",
      decimals: 8,
      name: "Wrapped BTC",
      priceUSD: "30653.9",
      logoURI:
        "https://static.debank.com/image/eth_token/logo_url/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599/d3c52e7c7449afa8bd4fad1c93f50d93.png",
      coinKey: "WBTC",
    },
    {
      address: "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2",
      chainId: 1,
      symbol: "SUSHI",
      decimals: 18,
      name: "SushiToken",
      priceUSD: "0.6969727810447633",
      logoURI:
        "https://static.debank.com/image/eth_token/logo_url/0x6b3595068778dd592e39a122f4f5a5cf09c90fe2/930cd4a36e687eaeddbcf9f3fd22d023.png",
      coinKey: "SUSHI",
    },
    {
      address: "0x4fabb145d64652a948d72533023f6e7a623c7c53",
      chainId: 1,
      symbol: "BUSD",
      decimals: 18,
      name: "Binance USD",
      priceUSD: "1",
      logoURI:
        "https://static.debank.com/image/eth_token/logo_url/0x4fabb145d64652a948d72533023f6e7a623c7c53/588ad5043e23b6c46aeda945852c3273.png",
      coinKey: "BUSD",
    },
    {
      address: "0xb8c77482e45f1f44de1745f52c74426c631bdd52",
      chainId: 1,
      symbol: "BNB",
      decimals: 18,
      name: "BNB",
      priceUSD: "247.4",
      logoURI:
        "https://static.debank.com/image/coin/logo_url/bnb/9784283a36f23a58982fc964574ea530.png",
      coinKey: "BNB",
    },
    {
      address: "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
      chainId: 1,
      symbol: "MATIC",
      decimals: 18,
      name: "Matic Token",
      priceUSD: "0.6843",
      logoURI:
        "https://static.debank.com/image/eth_token/logo_url/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0/20aac20baa9069bd39342edd8c5cc801.png",
      coinKey: "MATIC",
    },
    {
      address: "0xd31a59c85ae9d8edefec411d448f90841571b89c",
      chainId: 1,
      symbol: "SOL",
      decimals: 9,
      name: "Wrapped SOL (Wormhole)",
      priceUSD: "19.343883515258177",
      logoURI:
        "https://static.debank.com/image/eth_token/logo_url/0xd31a59c85ae9d8edefec411d448f90841571b89c/7c5db5c2eae571da837b65f5b9ae1a5c.png",
      coinKey: "SOL",
    },
    {
      address: "0x8965349fb649a33a30cbfda057d8ec2c48abe2a2",
      chainId: 1,
      symbol: "AVAX",
      decimals: 18,
      name: "Avalanche",
      priceUSD: "13.19",
      coinKey: "AVAX",
      logoURI: "",
    },
    {
      address: "0x4f9254c83eb525f9fcf346490bbb3ed28a81c667",
      chainId: 1,
      symbol: "CELR",
      decimals: 18,
      name: "CelerToken",
      priceUSD: "0.01704056444129791",
      logoURI:
        "https://static.debank.com/image/eth_token/logo_url/0x4f9254c83eb525f9fcf346490bbb3ed28a81c667/1eb9c8f251098ea22a2cb30a877da86a.png",
      coinKey: "CELR",
    },
    {
      address: "0x43dfc4159d86f3a37a5a4b3d4580b888ad7d4ddd",
      chainId: 1,
      symbol: "DODO",
      decimals: 18,
      name: "DODO bird",
      priceUSD: "0.10333218251000001",
      logoURI:
        "https://static.debank.com/image/eth_token/logo_url/0x43dfc4159d86f3a37a5a4b3d4580b888ad7d4ddd/ded0ec2273c0c46b3ca67e81b4f1b916.png",
      coinKey: "DODO",
    },
    {
      address: "0xb0e1fc65c1a741b4662b813eb787d369b8614af1",
      chainId: 1,
      symbol: "IF",
      decimals: 18,
      name: "Impossible Finance",
      priceUSD: "0.027747637912039057",
      logoURI:
        "https://static.debank.com/image/eth_token/logo_url/0xb0e1fc65c1a741b4662b813eb787d369b8614af1/94e820f9a8d3377155811dafe645b9b4.png",
      coinKey: "IF",
    },
    {
      address: "0x4e352cf164e64adcbad318c3a1e222e9eba4ce42",
      chainId: 1,
      symbol: "MCB",
      decimals: 18,
      name: "MCDEX Token",
      priceUSD: "13.24193958976407",
      logoURI:
        "https://static.debank.com/image/eth_token/logo_url/0x4e352cf164e64adcbad318c3a1e222e9eba4ce42/60bdacd5f4ca79bd62292fc9df937f83.png",
      coinKey: "MCB",
    },
    {
      address: "0x4e15361fd6b4bb609fa63c81a2be19d873717870",
      chainId: 1,
      symbol: "FTM",
      decimals: 18,
      name: "Fantom Token",
      priceUSD: "0.3159",
      logoURI:
        "https://static.debank.com/image/eth_token/logo_url/0x4e15361fd6b4bb609fa63c81a2be19d873717870/473fa8995183174cb7da314e38855213.png",
      coinKey: "FTM",
    },
    {
      address: "0x8c543aed163909142695f2d2acd0d55791a9edb9",
      chainId: 1,
      symbol: "VLX",
      decimals: 18,
      name: "VLX",
      priceUSD: "0.013787081694454337",
      logoURI:
        "https://static.debank.com/image/eth_token/logo_url/0x8c543aed163909142695f2d2acd0d55791a9edb9/092b3a6751fab370133aa2478bb2251c.png",
      coinKey: "VLX",
    },
  ],
  56: [
    {
      address: "0x0000000000000000000000000000000000000000",
      chainId: 56,
      symbol: "BNB",
      decimals: 18,
      name: "BNB",
      priceUSD: "248.5",
      logoURI:
        "https://static.debank.com/image/coin/logo_url/bnb/9784283a36f23a58982fc964574ea530.png",
      coinKey: "BNB",
    },
    {
      address: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
      chainId: 56,
      symbol: "WBNB",
      decimals: 18,
      name: "Wrapped BNB",
      priceUSD: "248.4",
      logoURI:
        "https://static.debank.com/image/coin/logo_url/bnb/9784283a36f23a58982fc964574ea530.png",
      coinKey: "WBNB",
    },
    {
      address: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
      chainId: 56,
      symbol: "USDC",
      decimals: 18,
      name: "USD Coin",
      priceUSD: "1",
      logoURI:
        "https://static.debank.com/image/coin/logo_url/usdc/e87790bfe0b3f2ea855dc29069b38818.png",
      coinKey: "USDC",
    },
    {
      address: "0x55d398326f99059ff775485246999027b3197955",
      chainId: 56,
      symbol: "USDT",
      decimals: 18,
      name: "Tether USD",
      priceUSD: "0.999905",
      logoURI:
        "https://static.debank.com/image/coin/logo_url/usdt/23af7472292cb41dc39b3f1146ead0fe.png",
      coinKey: "USDT",
    },
    {
      address: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
      chainId: 56,
      symbol: "ETH",
      decimals: 18,
      name: "Ethereum Token",
      priceUSD: "1950.66",
      logoURI:
        "https://static.debank.com/image/bsc_token/logo_url/0x2170ed0880ac9a755fd29b2688956bd959f933f8/80dd95753396b5619cf84b0df135eae5.png",
      coinKey: "WETH",
    },
    {
      address: "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3",
      chainId: 56,
      symbol: "DAI",
      decimals: 18,
      name: "Dai Token",
      priceUSD: "0.99985",
      logoURI:
        "https://static.debank.com/image/bsc_token/logo_url/0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3/549c4205dbb199f1b8b03af783f35e71.png",
      coinKey: "DAI",
    },
    {
      address: "0x986cdf0fd180b40c4d6aeaa01ab740b996d8b782",
      chainId: 56,
      symbol: "SUSHI",
      decimals: 18,
      name: "SushiToken",
      priceUSD: "0",
      coinKey: "SUSHI",
      logoURI:
        "https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/token/sushi.jpg",
    },
    {
      address: "0x947950bcc74888a40ffa2593c5798f11fc9124c4",
      chainId: 56,
      symbol: "SUSHI",
      decimals: 18,
      name: "SushiToken",
      priceUSD: "0.7031079896271821",
      logoURI:
        "https://static.debank.com/image/bsc_token/logo_url/0x947950bcc74888a40ffa2593c5798f11fc9124c4/930cd4a36e687eaeddbcf9f3fd22d023.png",
      coinKey: "SUSHI",
    },
    {
      address: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
      chainId: 56,
      symbol: "BUSD",
      decimals: 18,
      name: "BUSD Token",
      priceUSD: "1.0001",
      logoURI:
        "https://static.debank.com/image/bsc_token/logo_url/0xe9e7cea3dedca5984780bafc599bd69add087d56/588ad5043e23b6c46aeda945852c3273.png",
      coinKey: "BUSD",
    },
    {
      address: "0xcc42724c6683b7e57334c4e856f4c9965ed682bd",
      chainId: 56,
      symbol: "MATIC",
      decimals: 18,
      name: "Matic Token",
      priceUSD: "0.6904942023299183",
      logoURI:
        "https://static.debank.com/image/bsc_token/logo_url/0xcc42724c6683b7e57334c4e856f4c9965ed682bd/20aac20baa9069bd39342edd8c5cc801.png",
      coinKey: "MATIC",
    },
    {
      address: "0x570a5d26f7765ecb712c0924e4de545b89fd43df",
      chainId: 56,
      symbol: "SOL",
      decimals: 18,
      name: "SOLANA",
      priceUSD: "19.46671976749428",
      logoURI:
        "https://static.debank.com/image/bsc_token/logo_url/0x570a5d26f7765ecb712c0924e4de545b89fd43df/7c5db5c2eae571da837b65f5b9ae1a5c.png",
      coinKey: "SOL",
    },
    {
      address: "0x1ce0c2827e2ef14d5c4f29a091d735a204794041",
      chainId: 56,
      symbol: "AVAX",
      decimals: 18,
      name: "Avalanche",
      priceUSD: "13.271391217505206",
      logoURI:
        "https://static.debank.com/image/bsc_token/logo_url/0x1ce0c2827e2ef14d5c4f29a091d735a204794041/bd8f9f89cdbc0a488114d9a9d5d16b3c.png",
      coinKey: "AVAX",
    },
    {
      address: "0x1f9f6a696c6fd109cd3956f45dc709d2b3902163",
      chainId: 56,
      symbol: "CELR",
      decimals: 18,
      name: "CelerToken",
      priceUSD: "0.017150438088043736",
      logoURI:
        "https://static.debank.com/image/bsc_token/logo_url/0x1f9f6a696c6fd109cd3956f45dc709d2b3902163/1eb9c8f251098ea22a2cb30a877da86a.png",
      coinKey: "CELR",
    },
    {
      address: "0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2",
      chainId: 56,
      symbol: "DODO",
      decimals: 18,
      name: "DODO bird",
      priceUSD: "0.101939353975",
      logoURI:
        "https://static.debank.com/image/bsc_token/logo_url/0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2/ded0ec2273c0c46b3ca67e81b4f1b916.png",
      coinKey: "DODO",
    },
    {
      address: "0x03ff0ff224f904be3118461335064bb48df47938",
      chainId: 56,
      symbol: "ONE",
      decimals: 18,
      name: "Harmony ONE",
      priceUSD: "0.013034769096378766",
      logoURI:
        "https://static.debank.com/image/bsc_token/logo_url/0x03ff0ff224f904be3118461335064bb48df47938/f47000d10d04fe2ef495055106073c88.png",
      coinKey: "ONE",
    },
  ],
  137: [
    {
      address: "0x0000000000000000000000000000000000000000",
      chainId: 137,
      symbol: "MATIC",
      decimals: 18,
      name: "MATIC",
      priceUSD: "0.672076",
      logoURI:
        "https://static.debank.com/image/matic_token/logo_url/matic/6f5a6b6f0732a7a235131bd7804d357c.png",
      coinKey: "MATIC",
    },
    {
      address: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
      chainId: 137,
      symbol: "WMATIC",
      decimals: 18,
      name: "Wrapped Matic",
      priceUSD: "0.672076",
      logoURI:
        "https://static.debank.com/image/matic_token/logo_url/0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270/f6e604ba0324726a3d687c618aa4f163.png",
      coinKey: "WMATIC",
    },
    {
      address: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
      chainId: 137,
      symbol: "USDC",
      decimals: 6,
      name: "USD Coin (PoS)",
      priceUSD: "1",
      logoURI:
        "https://static.debank.com/image/coin/logo_url/usdc/e87790bfe0b3f2ea855dc29069b38818.png",
      coinKey: "USDC",
    },
    {
      address: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
      chainId: 137,
      symbol: "USDT",
      decimals: 6,
      name: "(PoS) Tether USD",
      priceUSD: "0.999955",
      logoURI:
        "https://static.debank.com/image/coin/logo_url/usdt/23af7472292cb41dc39b3f1146ead0fe.png",
      coinKey: "USDT",
    },
    {
      address: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
      chainId: 137,
      symbol: "WETH",
      decimals: 18,
      name: "Wrapped Ether",
      priceUSD: "1924.2",
      logoURI:
        "https://static.debank.com/image/matic_token/logo_url/0x7ceb23fd6bc0add59e62ac25578270cff1b9f619/61844453e63cf81301f845d7864236f6.png",
      coinKey: "WETH",
    },
    {
      address: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
      chainId: 137,
      symbol: "DAI",
      decimals: 18,
      name: "(PoS) Dai Stablecoin",
      priceUSD: "0.99985",
      logoURI:
        "https://static.debank.com/image/matic_token/logo_url/0x8f3cf7ad23cd3cadbd9735aff958023239c6a063/549c4205dbb199f1b8b03af783f35e71.png",
      coinKey: "DAI",
    },
    {
      address: "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6",
      chainId: 137,
      symbol: "WBTC",
      decimals: 8,
      name: "(PoS) Wrapped BTC",
      priceUSD: "30587.4",
      logoURI:
        "https://static.debank.com/image/matic_token/logo_url/0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6/d3c52e7c7449afa8bd4fad1c93f50d93.png",
      coinKey: "WBTC",
    },
    {
      address: "0x0b3f868e0be5597d5db7feb59e1cadbb0fdda50a",
      chainId: 137,
      symbol: "SUSHI",
      decimals: 18,
      name: "SushiToken (PoS)",
      priceUSD: "0.6850749002106156",
      logoURI:
        "https://static.debank.com/image/matic_token/logo_url/0x0b3f868e0be5597d5db7feb59e1cadbb0fdda50a/930cd4a36e687eaeddbcf9f3fd22d023.png",
      coinKey: "SUSHI",
    },
    {
      address: "0x9c9e5fd8bbc25984b178fdce6117defa39d2db39",
      chainId: 137,
      symbol: "BUSD",
      decimals: 18,
      name: "BUSD Token",
      priceUSD: "0.9999",
      logoURI:
        "https://static.debank.com/image/matic_token/logo_url/0x9c9e5fd8bbc25984b178fdce6117defa39d2db39/588ad5043e23b6c46aeda945852c3273.png",
      coinKey: "BUSD",
    },
    {
      address: "0x5c4b7ccbf908e64f32e12c6650ec0c96d717f03f",
      chainId: 137,
      symbol: "BNB",
      decimals: 18,
      name: "Binance Token",
      priceUSD: "247.7614734117179",
      logoURI:
        "https://static.debank.com/image/matic_token/logo_url/0x5c4b7ccbf908e64f32e12c6650ec0c96d717f03f/f95a41cb042e4a592572d4372e5a5bb5.png",
      coinKey: "BNB",
    },
    {
      address: "0xa649325aa7c5093d12d6f98eb4378deae68ce23f",
      chainId: 137,
      symbol: "BNB",
      decimals: 18,
      name: "Binance",
      priceUSD: "247.4",
      logoURI:
        "https://static.debank.com/image/coin/logo_url/bnb/9784283a36f23a58982fc964574ea530.png",
      coinKey: "BNB",
    },
    {
      address: "0xd93f7e271cb87c23aaa73edc008a79646d1f9912",
      chainId: 137,
      symbol: "SOL",
      decimals: 9,
      name: "Wrapped SOL (Wormhole)",
      priceUSD: "18.169526642565017",
      logoURI:
        "https://static.debank.com/image/matic_token/logo_url/0xd93f7e271cb87c23aaa73edc008a79646d1f9912/7c5db5c2eae571da837b65f5b9ae1a5c.png",
      coinKey: "SOL",
    },
    {
      address: "0x7dff46370e9ea5f0bad3c4e29711ad50062ea7a4",
      chainId: 137,
      symbol: "SOL",
      decimals: 18,
      name: "SOL",
      priceUSD: "16.389856080701552",
      logoURI:
        "https://static.debank.com/image/matic_token/logo_url/0x7dff46370e9ea5f0bad3c4e29711ad50062ea7a4/9aa4990a19587f9bc17f1a514e0afed7.png",
      coinKey: "SOL",
    },
    {
      address: "0x2c89bbc92bd86f8075d1decc58c7f4e0107f286b",
      chainId: 137,
      symbol: "AVAX",
      decimals: 18,
      name: "Avalanche Token",
      priceUSD: "12.95",
      logoURI:
        "https://static.debank.com/image/matic_token/logo_url/0x2c89bbc92bd86f8075d1decc58c7f4e0107f286b/8da43cd8fbb77a5dd325a3c4f40e082b.png",
      coinKey: "AVAX",
    },
    {
      address: "0xb85517b87bf64942adf3a0b9e4c71e4bc5caa4e5",
      chainId: 137,
      symbol: "FTM",
      decimals: 18,
      name: "Fantom Token",
      priceUSD: "0.3076104077920753",
      logoURI:
        "https://static.debank.com/image/matic_token/logo_url/0xb85517b87bf64942adf3a0b9e4c71e4bc5caa4e5/5ce5d05b3b2a59e87c9043a795c626ed.png",
      coinKey: "FTM",
    },
    {
      address: "0xf915fdda4c882731c0456a4214548cd13a822886",
      chainId: 137,
      symbol: "FUSE",
      decimals: 18,
      name: "Fuse",
      priceUSD: "0.06003951608610203",
      logoURI:
        "https://static.debank.com/image/matic_token/logo_url/0xf915fdda4c882731c0456a4214548cd13a822886/b9fe0bbfeccc43ac46bc652752e25532.png",
      coinKey: "FUSE",
    },
    {
      address: "0x2bf9b864cdc97b08b6d79ad4663e71b8ab65c45c",
      chainId: 137,
      symbol: "FSN",
      decimals: 18,
      name: "Fusion",
      priceUSD: "0",
      logoURI:
        "https://static.debank.com/image/matic_token/logo_url/0x2bf9b864cdc97b08b6d79ad4663e71b8ab65c45c/4c3c5fbf6c5857f5201b61e010123a9e.png",
      coinKey: "FSN",
    },
    {
      address: "0x434e7bbbc9ae9f4ffade0b3175fef6e8a4a1c505",
      chainId: 137,
      symbol: "LQDR",
      decimals: 18,
      name: "Liquid Driver",
      priceUSD: "0",
      coinKey: "LQDR",
      logoURI: "",
    },
    {
      address: "0x536a6bc33010976b07c8e7d08189694125188e4e",
      chainId: 137,
      symbol: "SWC",
      decimals: 18,
      name: "Shiba World Cup",
      priceUSD: "0",
      coinKey: "SWC",
      logoURI: "",
    },
    {
      address: "0xffa4d863c96e743a2e1513824ea006b8d0353c57",
      chainId: 137,
      symbol: "USDD",
      decimals: 18,
      name: "Decentralized USD (PoS)",
      priceUSD: "0.9954407754579383",
      coinKey: "USDD",
      logoURI:
        "https://assets.coingecko.com/coins/images/25380/small/UUSD.jpg?1651823371",
    },
    {
      address: "0xed3d0319c0a04b02e856ffaf6ea140d5cfac2e73",
      chainId: 137,
      symbol: "TNODE",
      decimals: 18,
      name: "Trusted Node",
      priceUSD: "0",
      coinKey: "TNODE",
      logoURI: "",
    },
  ],
};
