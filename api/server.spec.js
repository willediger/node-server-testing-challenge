const request = require("supertest");
const server = require("./server.js");

describe("server.js", () => {
  it("should set the testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("GET /", () => {
    it("should return 200 ok", async () => {
      const res = await request(server).get("/");
      expect(res.status).toBe(200);
    });

    it("should return a json object", async () => {
      const res = await request(server).get("/");
      expect(res.type).toBe("application/json");
    });

    it('should return {api:"up"}', async () => {
      const res = await request(server).get("/");
      expect(res.body).toEqual({ api: "up" });
    });
  });
});
