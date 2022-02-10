export default class Transaction {
    constructor(preBalances, postBalances, preTokenBalances, postTokenBalances, blockTime, accountKeys) {
        this.accountKeys = accountKeys;
        this.preBalances = preBalances;
        this.postBalances = postBalances;
        this.preTokenBalances = preTokenBalances;
        this.postTokenBalances = postTokenBalances;
        this.blockTime = blockTime;
        this.transactionDate = new Date(blockTime).toLocaleDateString("en-US");
        this.transactionTime = new Date(blockTime).toLocaleTimeString("en-US");
        this.accountKeys = accountKeys;
    }
}

export const allTransactions = [
    {
        "accountKeys": [
            0,
            4,
            5
        ],
        "preBalances": [
            280830222,
            4370880,
            2039280,
            0,
            2039280,
            2039280,
            1461600,
            4370880,
            1461600,
            1141440,
            2282880,
            98935120,
            953185920,
            1,
            1141440
        ],
        "postBalances": [
            280825222,
            4370880,
            2039280,
            0,
            2039280,
            2039280,
            1461600,
            4370880,
            1461600,
            1141440,
            2282880,
            98935120,
            953185920,
            1,
            1141440
        ],
        "preTokenBalances": [
            {
                "accountIndex": 2,
                "mint": "inL8PMVd6iiW3RCBJnr5AsrRN6nqr4BTrcNuQWQSkvY",
                "owner": "HM3SMbY1SPqWwqk2zgm3G76pLHsAQ5GRyMWSkjbHAreQ",
                "uiTokenAmount": {
                    "amount": "358735699787735",
                    "decimals": 9,
                    "uiAmount": 358735.699787735,
                    "uiAmountString": "358735.699787735"
                }
            },
            {
                "accountIndex": 4,
                "mint": "inL8PMVd6iiW3RCBJnr5AsrRN6nqr4BTrcNuQWQSkvY",
                "owner": "2d9WL9hVev1ri7TMe4EYcP7CFgi47QsLX7u2JqRSPuyD",
                "uiTokenAmount": {
                    "amount": "6262273208",
                    "decimals": 9,
                    "uiAmount": 6.262273208,
                    "uiAmountString": "6.262273208"
                }
            },
            {
                "accountIndex": 5,
                "mint": "LsinpBtQH68hzHqrvWw4PYbH7wMoAobQAzcvxVHwTLv",
                "owner": "2d9WL9hVev1ri7TMe4EYcP7CFgi47QsLX7u2JqRSPuyD",
                "uiTokenAmount": {
                    "amount": "9770693500",
                    "decimals": 9,
                    "uiAmount": 9.7706935,
                    "uiAmountString": "9.7706935"
                }
            }
        ],
        "postTokenBalances": [
            {
                "accountIndex": 2,
                "mint": "inL8PMVd6iiW3RCBJnr5AsrRN6nqr4BTrcNuQWQSkvY",
                "owner": "HM3SMbY1SPqWwqk2zgm3G76pLHsAQ5GRyMWSkjbHAreQ",
                "uiTokenAmount": {
                    "amount": "358756033460943",
                    "decimals": 9,
                    "uiAmount": 358756.033460943,
                    "uiAmountString": "358756.033460943"
                }
            },
            {
                "accountIndex": 4,
                "mint": "inL8PMVd6iiW3RCBJnr5AsrRN6nqr4BTrcNuQWQSkvY",
                "owner": "2d9WL9hVev1ri7TMe4EYcP7CFgi47QsLX7u2JqRSPuyD",
                "uiTokenAmount": {
                    "amount": "0",
                    "decimals": 9,
                    "uiAmount": null,
                    "uiAmountString": "0"
                }
            },
            {
                "accountIndex": 5,
                "mint": "LsinpBtQH68hzHqrvWw4PYbH7wMoAobQAzcvxVHwTLv",
                "owner": "2d9WL9hVev1ri7TMe4EYcP7CFgi47QsLX7u2JqRSPuyD",
                "uiTokenAmount": {
                    "amount": "15087961276",
                    "decimals": 9,
                    "uiAmount": 15.087961276,
                    "uiAmountString": "15.087961276"
                }
            }
        ],
        "blockTime": 1644259986,
        "transactionDate": "1/19/1970",
        "transactionTime": "6:44:19 PM"
    },
    {
        "accountKeys": [
            0,
            4,
            5
        ],
        "preBalances": [
            280835222,
            4370880,
            2039280,
            0,
            2039280,
            2039280,
            1461600,
            4370880,
            1461600,
            1141440,
            2282880,
            98935120,
            953185920,
            1,
            1141440
        ],
        "postBalances": [
            280830222,
            4370880,
            2039280,
            0,
            2039280,
            2039280,
            1461600,
            4370880,
            1461600,
            1141440,
            2282880,
            98935120,
            953185920,
            1,
            1141440
        ],
        "preTokenBalances": [
            {
                "accountIndex": 2,
                "mint": "inL8PMVd6iiW3RCBJnr5AsrRN6nqr4BTrcNuQWQSkvY",
                "owner": "Hs7Z2ZCKteBfiHAYpz7hXzqYckAspZzdsCNZK2QjqkX3",
                "uiTokenAmount": {
                    "amount": "155682900342923",
                    "decimals": 9,
                    "uiAmount": 155682.900342923,
                    "uiAmountString": "155682.900342923"
                }
            },
            {
                "accountIndex": 4,
                "mint": "sinjBMHhAuvywW3o87uXHswuRXb3c7TfqgAdocedtDj",
                "owner": "2d9WL9hVev1ri7TMe4EYcP7CFgi47QsLX7u2JqRSPuyD",
                "uiTokenAmount": {
                    "amount": "1892366038",
                    "decimals": 9,
                    "uiAmount": 1.892366038,
                    "uiAmountString": "1.892366038"
                }
            },
            {
                "accountIndex": 5,
                "mint": "inL8PMVd6iiW3RCBJnr5AsrRN6nqr4BTrcNuQWQSkvY",
                "owner": "2d9WL9hVev1ri7TMe4EYcP7CFgi47QsLX7u2JqRSPuyD",
                "uiTokenAmount": {
                    "amount": "0",
                    "decimals": 9,
                    "uiAmount": null,
                    "uiAmountString": "0"
                }
            }
        ],
        "postTokenBalances": [
            {
                "accountIndex": 2,
                "mint": "inL8PMVd6iiW3RCBJnr5AsrRN6nqr4BTrcNuQWQSkvY",
                "owner": "Hs7Z2ZCKteBfiHAYpz7hXzqYckAspZzdsCNZK2QjqkX3",
                "uiTokenAmount": {
                    "amount": "155680626969715",
                    "decimals": 9,
                    "uiAmount": 155680.626969715,
                    "uiAmountString": "155680.626969715"
                }
            },
            {
                "accountIndex": 4,
                "mint": "sinjBMHhAuvywW3o87uXHswuRXb3c7TfqgAdocedtDj",
                "owner": "2d9WL9hVev1ri7TMe4EYcP7CFgi47QsLX7u2JqRSPuyD",
                "uiTokenAmount": {
                    "amount": "0",
                    "decimals": 9,
                    "uiAmount": null,
                    "uiAmountString": "0"
                }
            },
            {
                "accountIndex": 5,
                "mint": "inL8PMVd6iiW3RCBJnr5AsrRN6nqr4BTrcNuQWQSkvY",
                "owner": "2d9WL9hVev1ri7TMe4EYcP7CFgi47QsLX7u2JqRSPuyD",
                "uiTokenAmount": {
                    "amount": "6262273208",
                    "decimals": 9,
                    "uiAmount": 6.262273208,
                    "uiAmountString": "6.262273208"
                }
            }
        ],
        "blockTime": 1644259906,
        "transactionDate": "1/19/1970",
        "transactionTime": "6:44:19 PM"
    },
    {
        "accountKeys": [
            0
        ],
        "preBalances": [
            280840222
        ],
        "postBalances": [
            280835222
        ],
        "preTokenBalances": [],
        "postTokenBalances": [],
        "blockTime": 1644256772,
        "transactionDate": "1/19/1970",
        "transactionTime": "6:44:16 PM"
    },
    {
        "accountKeys": [
            0,
            4,
            5
        ],
        "preBalances": [
            280845222,
            4370880,
            2039280,
            0,
            2039280,
            2039280,
            1461600,
            4370880,
            1461600,
            1141440,
            2282880,
            98935120,
            953185920,
            1,
            1141440
        ],
        "postBalances": [
            280840222,
            4370880,
            2039280,
            0,
            2039280,
            2039280,
            1461600,
            4370880,
            1461600,
            1141440,
            2282880,
            98935120,
            953185920,
            1,
            1141440
        ],
        "preTokenBalances": [
            {
                "accountIndex": 2,
                "mint": "inL8PMVd6iiW3RCBJnr5AsrRN6nqr4BTrcNuQWQSkvY",
                "owner": "HM3SMbY1SPqWwqk2zgm3G76pLHsAQ5GRyMWSkjbHAreQ",
                "uiTokenAmount": {
                    "amount": "352073998844932",
                    "decimals": 9,
                    "uiAmount": 352073.998844932,
                    "uiAmountString": "352073.998844932"
                }
            },
            {
                "accountIndex": 4,
                "mint": "inL8PMVd6iiW3RCBJnr5AsrRN6nqr4BTrcNuQWQSkvY",
                "owner": "2d9WL9hVev1ri7TMe4EYcP7CFgi47QsLX7u2JqRSPuyD",
                "uiTokenAmount": {
                    "amount": "5000123189",
                    "decimals": 9,
                    "uiAmount": 5.000123189,
                    "uiAmountString": "5.000123189"
                }
            },
            {
                "accountIndex": 5,
                "mint": "LsinpBtQH68hzHqrvWw4PYbH7wMoAobQAzcvxVHwTLv",
                "owner": "2d9WL9hVev1ri7TMe4EYcP7CFgi47QsLX7u2JqRSPuyD",
                "uiTokenAmount": {
                    "amount": "5483660420",
                    "decimals": 9,
                    "uiAmount": 5.48366042,
                    "uiAmountString": "5.48366042"
                }
            }
        ],
        "postTokenBalances": [
            {
                "accountIndex": 2,
                "mint": "inL8PMVd6iiW3RCBJnr5AsrRN6nqr4BTrcNuQWQSkvY",
                "owner": "HM3SMbY1SPqWwqk2zgm3G76pLHsAQ5GRyMWSkjbHAreQ",
                "uiTokenAmount": {
                    "amount": "352095621468121",
                    "decimals": 9,
                    "uiAmount": 352095.621468121,
                    "uiAmountString": "352095.621468121"
                }
            },
            {
                "accountIndex": 4,
                "mint": "inL8PMVd6iiW3RCBJnr5AsrRN6nqr4BTrcNuQWQSkvY",
                "owner": "2d9WL9hVev1ri7TMe4EYcP7CFgi47QsLX7u2JqRSPuyD",
                "uiTokenAmount": {
                    "amount": "0",
                    "decimals": 9,
                    "uiAmount": null,
                    "uiAmountString": "0"
                }
            },
            {
                "accountIndex": 5,
                "mint": "LsinpBtQH68hzHqrvWw4PYbH7wMoAobQAzcvxVHwTLv",
                "owner": "2d9WL9hVev1ri7TMe4EYcP7CFgi47QsLX7u2JqRSPuyD",
                "uiTokenAmount": {
                    "amount": "9770693500",
                    "decimals": 9,
                    "uiAmount": 9.7706935,
                    "uiAmountString": "9.7706935"
                }
            }
        ],
        "blockTime": 1644196612,
        "transactionDate": "1/19/1970",
        "transactionTime": "6:43:16 PM"
    },
    {
        "accountKeys": [
            0,
            4,
            5
        ],
        "preBalances": [
            280850222,
            4370880,
            2039280,
            0,
            2039280,
            2039280,
            1461600,
            4370880,
            1461600,
            1141440,
            2282880,
            98935120,
            953185920,
            1,
            1141440
        ],
        "postBalances": [
            280845222,
            4370880,
            2039280,
            0,
            2039280,
            2039280,
            1461600,
            4370880,
            1461600,
            1141440,
            2282880,
            98935120,
            953185920,
            1,
            1141440
        ],
        "preTokenBalances": [
            {
                "accountIndex": 2,
                "mint": "inL8PMVd6iiW3RCBJnr5AsrRN6nqr4BTrcNuQWQSkvY",
                "owner": "Hs7Z2ZCKteBfiHAYpz7hXzqYckAspZzdsCNZK2QjqkX3",
                "uiTokenAmount": {
                    "amount": "149515586344154",
                    "decimals": 9,
                    "uiAmount": 149515.586344154,
                    "uiAmountString": "149515.586344154"
                }
            },
            {
                "accountIndex": 4,
                "mint": "sinjBMHhAuvywW3o87uXHswuRXb3c7TfqgAdocedtDj",
                "owner": "2d9WL9hVev1ri7TMe4EYcP7CFgi47QsLX7u2JqRSPuyD",
                "uiTokenAmount": {
                    "amount": "3415906816",
                    "decimals": 9,
                    "uiAmount": 3.415906816,
                    "uiAmountString": "3.415906816"
                }
            },
            {
                "accountIndex": 5,
                "mint": "inL8PMVd6iiW3RCBJnr5AsrRN6nqr4BTrcNuQWQSkvY",
                "owner": "2d9WL9hVev1ri7TMe4EYcP7CFgi47QsLX7u2JqRSPuyD",
                "uiTokenAmount": {
                    "amount": "0",
                    "decimals": 9,
                    "uiAmount": null,
                    "uiAmountString": "0"
                }
            }
        ],
        "postTokenBalances": [
            {
                "accountIndex": 2,
                "mint": "inL8PMVd6iiW3RCBJnr5AsrRN6nqr4BTrcNuQWQSkvY",
                "owner": "Hs7Z2ZCKteBfiHAYpz7hXzqYckAspZzdsCNZK2QjqkX3",
                "uiTokenAmount": {
                    "amount": "149514270020965",
                    "decimals": 9,
                    "uiAmount": 149514.270020965,
                    "uiAmountString": "149514.270020965"
                }
            },
            {
                "accountIndex": 4,
                "mint": "sinjBMHhAuvywW3o87uXHswuRXb3c7TfqgAdocedtDj",
                "owner": "2d9WL9hVev1ri7TMe4EYcP7CFgi47QsLX7u2JqRSPuyD",
                "uiTokenAmount": {
                    "amount": "1892366038",
                    "decimals": 9,
                    "uiAmount": 1.892366038,
                    "uiAmountString": "1.892366038"
                }
            },
            {
                "accountIndex": 5,
                "mint": "inL8PMVd6iiW3RCBJnr5AsrRN6nqr4BTrcNuQWQSkvY",
                "owner": "2d9WL9hVev1ri7TMe4EYcP7CFgi47QsLX7u2JqRSPuyD",
                "uiTokenAmount": {
                    "amount": "5000123189",
                    "decimals": 9,
                    "uiAmount": 5.000123189,
                    "uiAmountString": "5.000123189"
                }
            }
        ],
        "blockTime": 1644196590,
        "transactionDate": "1/19/1970",
        "transactionTime": "6:43:16 PM"
    }
]