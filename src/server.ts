import express, { json } from 'express';
import path from 'path'
import dotenv from 'dotenv'
import cors from 'cors'
import { sequelize } from './instances/mysql';
import router from './routes/routes';

const app = express();

dotenv.config()

app.use(cors())

app.use(express.json())
app.use(json())

app.use(express.static(path.join(__dirname, '../public')))
app.use(express.urlencoded({extended: true}))

app.use(router)

app.listen(8819, async ()=> {
    await sequelize.sync()
    console.log("App running on 8819!")
})