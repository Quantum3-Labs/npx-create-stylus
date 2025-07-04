/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  412346: {
    "stylus-hello-world": {
      address: "0x79d5153c54c640eB4428B731a61362f7b7339378",
      abi: [
        {
          inputs: [],
          name: "addFromMsgValue",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "new_number", type: "uint256" }],
          name: "addNumber",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "increment",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "new_number", type: "uint256" }],
          name: "mulNumber",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "number",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "new_number", type: "uint256" }],
          name: "setNumber",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
