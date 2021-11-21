import express from "express"
import {PWRender} from "./pw"

const app = express()
const port = 3000
const render= new PWRender()

app.get("/get",async (req,res)=>{
    let response
    console.log(req.query)
    if(req.query.url){
        response=await render.getRenderedHTML(req.query.url as string)
    }else{
        response="No URL passed"
    }
    res.send(response)

})


app.listen(port,()=>{
    console.log(`the server is listening on ${port}`)
    render.start()
})
