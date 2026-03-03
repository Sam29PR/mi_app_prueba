const request = require("supertest");
const app = require("../src/index");

test("Debe responder correctamente en la ruta raíz", async () => {
  const response = await request(app).get("/");
  expect(response.statusCode).toBe(200);
});