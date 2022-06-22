import express from "express";

const app = express()

app.use(
    express.json()
)

const port = process.env.PORT || 3000;

app.get("/test", (_, resp) => {
    resp
        .status(200)
        .send({ "message": "Bem vindo a API" })
})

app.listen(port, () => {
    console.log(`App started on port : ${port}`);
})

export default app