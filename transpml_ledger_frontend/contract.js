export const contract = {
    address: "0xD404fA168B9Bc8C8eE9d9D51dd38cffAf78c8C9C",
    abi: [
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"indexed": true,
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"indexed": false,
						"internalType": "string",
						"name": "modelName",
						"type": "string"
					},
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					}
				],
				"name": "DataModelUploaded",
				"type": "event"
			},
			{
				"inputs": [],
				"name": "dataModelCount",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"name": "dataModels",
				"outputs": [
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "modelName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "modelDetails",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "_id",
						"type": "uint256"
					}
				],
				"name": "getDataModel",
				"outputs": [
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "modelName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "modelDetails",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "string",
						"name": "_modelName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "_modelDetails",
						"type": "string"
					}
				],
				"name": "uploadDataModel",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			}
		]
}