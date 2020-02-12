module.exports = {
  networks: {
    development: {
     host: "192.168.43.191",     // Localhost (default: none)
     port: 7545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },
  },
  compilers: {
    solc: {
       optimizer: {
         enabled: true,
         runs: 200
       },
    }
  }
}
