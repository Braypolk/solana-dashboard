There are many types of transactions and different places we need to take input from. This is an attempt to help me figure out how to organize these transaction

Code Examples in example transactions naming convention:
- w: withdrawal
- d: deposit
- files without are single directions operations. For example, collecting rewards is withdrawal only

TODO: Need to find the link and pattern between the explorer view and json

## Pay Rent to Account
[token account example](https://explorer.solana.com/tx/5mqdCxSetwkGMMdiz4ykBHYc5QRUE5PeqtqWLUzYeNTRQr8oTnFWZJAHVABBVjNKh78ou9zQsbbqASoHW5eH24po)
[asset pool example](https://explorer.solana.com/tx/5MLmmgYXM8bsDUGouJipYdKJcxFnphSyLRCnBWNanqJtMKf6Xba9ikj3rYGP5BVoEbnyLuXaQNWfcUcQ4P5nWsAR)
Paying rent happens when you you initialize a new account, things like:
- getting a new token in your wallet
- I think when you provide to new pools

Rent amount will come from the account input(s) section


## Swapping Tokens
[example](https://explorer.solana.com/tx/5TxFWKLBBcB6tcUGfBA4ECVDn75FAfqoXtkKNzPXbBfoXw2wAjD4xta7tfQsB74jmrrJuUZjaH4at5c6xzr9KsQa)
TODO: get regular swap example

[multi-swap example](https://explorer.solana.com/tx/5g172JNKfBCGH7Nh6MegpYqy2E9h7ci9PxUCvVLx4Td5oVDpJnkyJN4JhANyWAVwphYnzC3hwMRK9xmbh92BHNQe)

This transaction has lots going on, pay rent, swap sol to usdc, swap usdc to hbb

- Rent can be found in account input(s) section
- Swaps found in Token Balances section


## Lending
[example](https://explorer.solana.com/tx/23A4ekDCrqc8Qhhmxp6Ppsa7HHcVrriCv7pLxQbGbmfLhUWKkUNSCRKZtgEWotW9vt7gHFXZnhG1CEnJ38sf5cU5)

Similar to swapping, but order looks a little different, need to see if json is ordered differently


## Borrowing 
[example](https://explorer.solana.com/tx/3B9JzYMtQLPzn5ArJmsEanJe8Eteit4jdPzBTYKZGV6Y8q6fU4kbzCVuc4Q6g6aWbvaqRo6stbDr9jmWh13JPMwx)

I don't really know what's going on in this one, need to look into it more


## Staking
I think this transaction is a staking transaction, might be another transaction that goes along with it for paying rent/deposit

[deposit example](https://explorer.solana.com/tx/3dynXwSMNS87hFJMGb8GQGiYyK6vfcHaG66daZDWrvqwgayago5rjvgCgHBZRabhGkuizWwHhFRjmXQn7K2pyRkQ)

TODO: [withdrawal example]()


## SLP Single Asset Stake
[stake asset deposit](https://explorer.solana.com/tx/678rz9Nfkn25Z6uqqsNVmLb6G6P3o1TNQw3eGaLAeUkGwx9Cfb2bwJKVFS1Di13fn9VAsMDPgK3PwNvcoMeoYqwu)

TODO: [stake asset withdrawal]()


[harvest staking rewards](https://explorer.solana.com/tx/3TkpwizN3tpnEFmLezuzVgan71zirHTwX5Fh2KWrsLGkNmBpRAdoREZagTVpfFGSd8amVQ2Xe8uHMRDAERhn9Nix)


## Liquidity Pool
TODO: [withdrawal example]()

TODO: [deposit example]()


## Farm 
TODO: [withdrawal example]()

TODO: [deposit example]()
