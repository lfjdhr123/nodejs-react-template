const node_ssh = require("node-ssh");
let ssh = new node_ssh();
const bytes = require("bytes");
const os = require("os");
const VM = require("../models/VM");
async function main() {
  let vm = new VM(
    "173.230.145.31",
    "fangjia",
    "/Users/fangjiali/.ssh/id_rsa",
    "eth0"
  );
  await vm.init();
  await vm.getMemInfo();
  await vm.getCpuInfo();
  await vm.getDiskInfo();
  await vm.getNetworkInfo();
  console.log(vm);
}

main()
  .then(r => {
    console.log("finished");
    process.exit(1);
  })
  .catch(err => {
    console.log(err);
  });
