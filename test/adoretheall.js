const Adoretheall = artifacts.require("./Adoretheall.sol");

contract("Adoretheall", accounts => {

  let AdoretheallInstance;

  beforeEach(async () => {
    AdoretheallInstance = await Adoretheall.deployed();
  });

  it("... should return setBaseURI status", async () => {
    const cid = "Qmdk7BW1MTzSN9qnYZg9DQx3x4PVsb3dtVQE2FUnW58UxJ";
    const result = await AdoretheallInstance.setBaseURI(cid);
    assert.equal(result.receipt.status, true, "not return baseURL");
  })
  
  context("... mint single nft",async () => {
    it("mint a token", async () => {

    })
  })

  xcontext("... mint nfts",async () => {
    it("mint tokens", async () => {
      //Time Travelling
      await time.increase(time.duration.days(1));
    })
  })
});
