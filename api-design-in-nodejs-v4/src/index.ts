import dotenv from "dotenv";

import app from "./server";

dotenv.config();

app.listen(3001, () => console.log("server running on port 3001"));
