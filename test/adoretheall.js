const Adoretheall = artifacts.require("../contracts/Adoretheall.sol");

const Cid_NFT = "Qmdk7BW1MTzSN9qnYZg9DQx3x4PVsb3dtVQE2FUnW58UxJ";

contract("Adoretheall", accounts => {
  it("...should store the value 1997.", async () => {
    const AdoretheallInstance = await Adoretheall.deployed();
    // Set value of 1997
    await AdoretheallInstance.set(1997, { from: accounts[0] });
    // Get stored value
    const storedData = await AdoretheallInstance.get.call();
    assert.equal(storedData, 1997, "The value 1997 was not stored.");
  });
  it("...should return baseURI", async () => {
    const AdoretheallInstance = await Adoretheall.new();
    const result = AdoretheallInstance._baseURI(Cid_NFT);
    assert.equal(result.logs[0].rags.baseURI, Cid_NFT, "not return baseURL");
  })
});
