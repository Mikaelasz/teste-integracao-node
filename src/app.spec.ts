import request from "supertest";
import { App } from "./app";

describe("My first test", () => {
    const app = new App().app;
  it("Should test the serve running", async () => {   
    const response = await request(app).get('/')
    expect(response.body).toStrictEqual({ok: true})
  });
  it("Should check if create user", async () =>{
    const response = await request(app).post('/user').send({
        name: "Mikaela",
        email: "mikaela@teste.com",
        password: "123456"        
    })
    expect(response.statusCode).toEqual(201)
    expect(response.body).toHaveProperty('id')
  })
  it("Should check if get user", async () =>{
    const response = await request(app).get('/users')
    console.log(response)
    expect(response.statusCode).toEqual(200)
  })
});
