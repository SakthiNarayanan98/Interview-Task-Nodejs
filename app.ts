import  express  from "express";
import { sequelize } from "./config/database";
import  authRoutes  from "./router/authRoutes";
import  chatRoutes  from "./router/chatRoutes";
import  taskRoutes  from "./router/taskRoutes";

const app = express();
app.use(express.json());

app.use('/api',authRoutes);
app.use('/api',chatRoutes);
app.use('/api',taskRoutes);

sequelize.sync().then(() => {
    console.log('Database is connecetd');
    
})

export default app;