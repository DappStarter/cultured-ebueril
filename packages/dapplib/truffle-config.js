require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom problem brown turtle chaos rare remain proof install clog olympic subway'; 
let testAccounts = [
"0x7d8da6763549555ddf5962ebc1b8cf7490733a416c82935a8d57829f4b2feb3f",
"0x531cd21289aed63c031c75f51914dfbf1d17336cd0a25dc7790f753b2fb2e917",
"0xff047e043ec9728f23d57351e905a366b20e743afa0993926f3d616258b89d6c",
"0x70d7fe6f60fb1769aa5f6a1453667e87458414410da70de3ce37cc4ed6d12741",
"0x861397e7f0d0b0ec8eeeb8ae66819c573d8572f2391d30c31c956fe31c326a1d",
"0xffcf4af61b7d13526ec22f78d592d05f30eee83e1c01654c3a88dbd287cafb00",
"0x8f2592a8f8a5d1ae965ef71fcbd944d5b11e30bb6cfe42c511ef8bcf5f9ea932",
"0xef0080712022b29e8174d08543966cd5f3a726151f648da94fb8bb73148b8a71",
"0x4a73bf5668f35974aba665e3249fd2bced8803a0f70847af55403bb4631279a8",
"0x92f34094a29c51d7064a6c858646e58e62c3112c357f372be4c969930c9f83b2"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
