
import { Call, CallData, hash } from "starknet"

const ERC20_ABI = [
	{
		"type": "struct",
		"name": "core::integer::u256",
		"members": [
			{
				"name": "low",
				"type": "core::integer::u128"
			},
			{
				"name": "high",
				"type": "core::integer::u128"
			}
		]
	},
	{
		"type": "function",
		"name": "balance_of",
		"inputs": [ {
				"name": "account",
				"type": "core::starknet::contract_address::ContractAddress"
			}
		],
		"outputs": [
			{
				"type": "core::integer::u256"
			}
		],
		"state_mutability": "view"
	},
	{
		"type": "function",
		"name": "allowance",
		"inputs": [
			{
				"name": "owner",
				"type": "core::starknet::contract_address::ContractAddress"
			},
			{
				"name": "spender",
				"type": "core::starknet::contract_address::ContractAddress"
			}
		],
		"outputs": [
			{
				"type": "core::integer::u256"
			}
		],
		"state_mutability": "view"
	},
	{
		"type": "function",
		"name": "transfer",
		"inputs": [
			{
				"name": "recipient",
				"type": "core::starknet::contract_address::ContractAddress"
			},
			{
				"name": "amount",
				"type": "core::integer::u256"
			}
		],
		"outputs": [
			{
				"type": "core::bool"
			}
		],
		"state_mutability": "external"
	},
	{
		"type": "function",
		"name": "transfer_from",
		"inputs": [
			{
				"name": "sender",
				"type": "core::starknet::contract_address::ContractAddress"
			},
			{
				"name": "recipient",
				"type": "core::starknet::contract_address::ContractAddress"
			},
			{
				"name": "amount",
				"type": "core::integer::u256"
			}
		],
		"outputs": [
			{
				"type": "core::bool"
			}
		],
		"state_mutability": "external"
	},
	{
		"type": "function",
		"name": "approve",
		"inputs": [
			{
				"name": "spender",
				"type": "core::starknet::contract_address::ContractAddress"
			},
			{
				"name": "amount",
				"type": "core::integer::u256"
			}
		],
		"outputs": [
			{
				"type": "core::bool"
			}
		],
		"state_mutability": "external"
	}
] as const


export function removeLeadingZeroFromHash(hash: unknown): string {
  try {
    if (typeof hash !== "string") return "";

    if (hash.startsWith("0x0") && hash.length > 3) {
      return "0x" + hash.slice(3);
    }

    return hash;
  } catch (error) {
    console.error("Invalid hash input:", error);
    return "";
  }
}

export const makeTokenBalanceContractQueryCall = ({
  tokenContractAddresses,
  ownerAddress,
}: {
  tokenContractAddresses: string[];
  ownerAddress: string | bigint;
}): {
  rpcCallData: Call[];
  abiCalldataParser: CallData;
  functionNames: string[];
} => {
  const abiCalldata = new CallData(ERC20_ABI);

  const functionNames = ["balance_of"];

  return {
    functionNames,
    rpcCallData: tokenContractAddresses?.map((tokenContractAddress) => ([
      {
        contractAddress: tokenContractAddress,
        entrypoint: functionNames[0],
        calldata: [ownerAddress],
      },
    ] as Call[]))?.flat(),
    abiCalldataParser: abiCalldata,
  };
};

export const queryRpcData = async ({
    tokenContractAddresses,
    ownerAddress,
    nodeUrl,
}: {
  tokenContractAddresses: string[];
  ownerAddress: string;
  nodeUrl: string;
}): Promise<{
	tokenAddress: string,
	balance?: bigint;
}[]> => {
  const {
    rpcCallData: tokenRpcCallData,
    abiCalldataParser: tokenAbiCalldataParser,
    functionNames: tokenFunctionNames,
  } = makeTokenBalanceContractQueryCall({
    tokenContractAddresses: tokenContractAddresses,
    ownerAddress: ownerAddress,
  });

  const calls: Call[] = [...tokenRpcCallData];

	const IDS_TOKEN:Record<number, string> = {}

	calls.forEach((call, idx) => {
		IDS_TOKEN[idx] = call.contractAddress
	})

  const rpc_body = prepareStarknetRawCallData(calls, Object.keys(IDS_TOKEN)?.map(i => Number(i)));

  const executeRpcCall = async (url: string) => {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(rpc_body, null, undefined),
    });
    if (!res.ok) {
      throw new Error(`RPC call failed with status ${res.status}`);
    }
    return res.json();
  };

    if(!ownerAddress || !nodeUrl || !tokenContractAddresses || tokenContractAddresses?.length === 0 ) {
        return []
    }

  try {
    let bodyJson;
    try {
      bodyJson = await executeRpcCall(nodeUrl);
    } catch (error) {
      console.error("Error with main RPC in balances", error);
    }
    let balances: { balance:  bigint | undefined, tokenAddress: string }[] = [];

	if (bodyJson && Array.isArray(bodyJson)) {
			bodyJson?.forEach(result => {
				if(!result?.error && result?.result) {
					try {
						let balance = tokenAbiCalldataParser.parse(
							tokenFunctionNames[0],
							result?.result,
						) as any;
					balances.push({
						tokenAddress: IDS_TOKEN[Number(result?.id)],
						balance
					})
					} catch(e) {
						console.warn("failed to parse balance from rpc call", e);
						console.error(e)
					}
				} 
			})
		}

    return balances;
  } catch (e) {
    console.error(e);
    return []  
  }
};

export const prepareStarknetRawCallData = (calls: Call[], ids: number[]) => {
  return calls.map((c, idx) => {
    let entryPointSelector = hash.getSelectorFromName(c.entrypoint);
    // const selectorLength = entryPointSelector?.length;
    // pad to start
    // if (selectorLength < 65) {
    //   entryPointSelector = entryPointSelector.replace("0x", "");
    //   entryPointSelector = entryPointSelector.padStart(65 - 2, "0");
    //   entryPointSelector = `0x${entryPointSelector}`;
    // }

    return {
      id: ids[idx] ?? idx,
      jsonrpc: "2.0",
      method: "starknet_call",
      params: {
        block_id: "pending",
        request: {
          contract_address: c.contractAddress,
          entry_point_selector: entryPointSelector,
          calldata: c.calldata,
        },
      },
    };
  });
};
