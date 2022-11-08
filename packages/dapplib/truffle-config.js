require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize flock tribe street rice payment unlock grace define army giggle'; 
let testAccounts = [
"0xbe0eb94979259c6eb9ec74113df4abe88b008ecdf9d76e58095d7251643195e8",
"0x1e53ad91bf539aab498fa1f330152386b29ac94d0b0e868f9ca1f073b5f24e5d",
"0xd46b58712225148cf60f18638c86dc24de9cc3c8dd2b047541b047d3a3fa0e64",
"0xd5644cd1a2d36c72be862f00381cac6ccaeed4a3b869757651c3f13eb49c9cab",
"0xb172c2676459417118c2432d6945b9a4d7bab0169e42767b91a229a16132f405",
"0x27721f879437958eb8e2e08f280add211a769733a054ac15341b200cde06ef84",
"0xd8828b851c937c8a35d0655cd19b196a668fb7af20a27b26f84cd1ebfd5bbc46",
"0xace727ceed995df503687cb1e3f79cbd9d43ece09a38df4c5864ef7b7a581a45",
"0xa9d7b63d7b6463e03b9b80cce42023420fa525fda0792225bb2b3b7212a0922f",
"0x3b1ea9fb4f5070f8fbd2c848aba83a8e24932f9ccf5232bb055c7988d34a4b7b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

