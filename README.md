#1
{ proofs: { proofs: [ [Object], [Object] ], newKeys: undefined } }

{
  encoded: 'cashuAeyJ0b2tlbiI6W3sibWludCI6Imh0dHBzOi8vODMzMy5zcGFjZTozMzM4IiwicHJvb2ZzIjpbeyJpZCI6IkkyeU4raVJZZmt6VCIsImFtb3VudCI6MSwic2VjcmV0IjoiZUhSYkdDaUJuUWRDWHp6eHY2Z0d4QWtmcGwvU0VGOHZVV3QyYmp2cDlvYz0iLCJDIjoiMDI2ZDRiODRkMjEzMWM0MmRmMTE1OGM2NTk1ZjNmODgzMGUwNmMzN2RjNzdjM2I0YzYyNGFlYzI1NGQ3MjNiYmM0In0seyJpZCI6IkkyeU4raVJZZmt6VCIsImFtb3VudCI6Miwic2VjcmV0IjoiekZ6NTNZdU01Z1ptT285YTVZczR5ZTRQRndVaENQNnZsWHJyL2wxMkR3VT0iLCJDIjoiMDJmNGMwMzBhZDdkNmExMDUwMmViZTY0OTRhNjIxMzU2NTdmODMxODc5NjIxOGZjMjFiNWFlZjI4M2Y5NzFkZThiIn1dfV19'
}

#2
{"proofs":[{"id":"I2yN+iRYfkzT","amount":2,"secret":"zGXEKLdbjO0I3kpwCMgZ8QUJim4P1M/5+i+pqts5a+E=","C":"03d4d7805c3d67da63ad48bb578b9bad87cb6682b911274e8abe4f9bf9deb02b13"}]}

{
  encoded: 'cashuAeyJ0b2tlbiI6W3sibWludCI6Imh0dHBzOi8vODMzMy5zcGFjZTozMzM4IiwicHJvb2ZzIjpbeyJpZCI6IkkyeU4raVJZZmt6VCIsImFtb3VudCI6Miwic2VjcmV0IjoiekdYRUtMZGJqTzBJM2twd0NNZ1o4UVVKaW00UDFNLzUraStwcXRzNWErRT0iLCJDIjoiMDNkNGQ3ODA1YzNkNjdkYTYzYWQ0OGJiNTc4YjliYWQ4N2NiNjY4MmI5MTEyNzRlOGFiZTRmOWJmOWRlYjAyYjEzIn1dfV19'
}


## THOUGHTS
* Could proof be stored as JSON instead of SQL?

** what are keys for
** what are proofs stored for
*** Seem to be main source of truth (BALANCE)

** Determine if proof is main source of truth
** Determine if Proof[] needs to be reset after each withdrawl/deposit

## DEPOSI
== REQUEST MINT & REQUEST TOKENS ARE FOR DEPOSITING ==
* connect to mint
* request mint (generates invoice)
* PAY INVOICE
* request tokens from mint (gives balance to acc?)

#
mint.getKeySets
{"keysets":["I2yN+iRYfkzT"]}

mint.getInfo
{"name":"Cashu mint","pubkey":"03e3d23e1b66eadaf15ce0d640a908e8ba1984baed34ab98c547aab4cf4249440d","version":"Nutshell/0.12.0","contact":[["",""]],"nuts":["NUT-07","NUT-08","NUT-09"]}

mint.getKeys
{"1: BLAHAHDSAD"}

receive
{"token":{"token":[]},"tokensWithErrors":{"token":[{"mint":"https://8333.space:3338","proofs":[{"id":"I2yN+iRYfkzT","amount":2,"C":"027e8a7198cfbe9ac86f1711c5e89b653a76a9b50db73a45ab8bd054c0f6187338","secret":"R8uiC1PwAhn9zBqXyHuVi0RhCqFRDne1gZJiw1YHhKw="}]}]}}