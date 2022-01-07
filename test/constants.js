module.exports = {
    HD_WALLET_12_MNEMONIC_TEST_OTHER: 'orange lecture tiger surround narrow much novel arrange sample balance weapon bacon',
    HD_WALLET_12_MNEMONIC: 'affair entry detect broom axis crawl found valve bamboo taste broken hundred',
    HD_WALLET_24_MNEMONIC: 'begin pyramid grit rigid mountain stamp legal item result peace wealth supply satoshi elegant roof identify furnace march west chicken pen gorilla spot excuse',

    TESTING_MESSAGE_1: "ThisMessageOneIsForTesting",
    TESTING_MESSAGE_2: "This_message_two_is_for_testing",
    TESTING_MESSAGE_3: "This message three is for testing",

    TRANSACTION_TYPE: {
        NATIVE_TRANSFER: "NATIVE_TRANSFER",
        CONTRACT_TRANSACTION: "CONTRACT_TRANSACTION",
    },
    TRANSFER_NEAR: {
        NEAR_RECEIVER: '0xd27189917dd3E4B0e9eB731eCEe358254520FA01', // generated from HD_WALLET_12_MNEMONIC_TEST_OTHER
        NEAR_AMOUNT: 13
    },
    TOKEN_CONTRACT: '0xb975b3De428Fc3460152d37B515fB3D30A6a5219',
    CONTRACT_TXN: {
        NEAR_CONTRACT: '0x2F639eEEE51Df9B9e4B7cf2aAC6ACaeb91108aA6', // contract address
        NEAR_AMOUNT_TO_CONTRACT: 0
    },
    NEAR_NETWORK: {
        MAINNET: {
            NETWORK: "MAINNET",
            CHAIN_ID: 137,
            URL: 'https://rpc-mainnet.matic.network'
        },
        TESTNET: {
            NETWORK: "TESTNET",
            CHAIN_ID: 80001,
            URL: 'https://rpc-mumbai.maticvigil.com'
        }
    }
}