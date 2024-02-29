import { app } from "./app.js";
import { dbConnect } from "./data/database.js";

dbConnect();

app.listen(process.env.PORT, () => {
    console.log("Server started....");
});