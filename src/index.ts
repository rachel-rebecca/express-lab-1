import express from "express";
import cors from "cors";
import routes from "./routing";

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

const port = 4000;

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})