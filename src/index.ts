import express from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.get("/api/bow", (_req, res) => {
  res.send("wow")
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server ready and running on port ${PORT}`)
})
