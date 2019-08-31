const db = require("../data/dbConfig.js");
const Users = require("./usersModel.js");

describe("users model", () => {
  describe("add()", () => {
    beforeEach(async () => {
      await db("users").truncate();
    });

    it("should add 2 users", async () => {
      let user = await Users.add({ username: "gaffer", password: "test" });
      expect(user.username).toBe("gaffer");
      expect(user.password).toBe("test");
      user = await Users.add({ username: "sam", password: "test2" });
      expect(user.username).toBe("sam");
      expect(user.password).toBe("test2");

      const users = await db("users");
      expect(users).toHaveLength(2);
    });
  });
  describe("findById()", () => {
    it("should return gaffer if id = 1", async () => {
      let user = await Users.findById(1);
      expect(user.username).toBe("gaffer");
      expect(user.password).toBe("test");
    });

    it("should return sam if id = 2", async () => {
      let user = await Users.findById(2);
      expect(user.username).toBe("sam");
      expect(user.password).toBe("test2");
    });
  });
});
