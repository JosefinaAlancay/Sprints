const express=require("express")
const path=require("path")

const app=express()

app.get("/",(req,res)=>{
    let homePath=path.join(__dirname ,"views","index.html")
    res.sendFile(homePath)
})

app.get("/login",(req,res)=>{
    let loginPath=path.join(__dirname ,"views","login.html")
    res.sendFile(loginPath)
})

app.get("/register",(req,res)=>{
    let loginPath=path.join(__dirname ,"views","register.html")
    res.sendFile(loginPath)
})

app.get("/productDetail",(req,res)=>{
    let loginPath=path.join(__dirname ,"views","productDetail.html")
    res.sendFile(loginPath)
})

app.get("/productCart",(req,res)=>{
    let loginPath=path.join(__dirname ,"views","productCart.html")
    res.sendFile(loginPath)
})


const publicPath=path.join(__dirname,"public")
app.use(express.static(publicPath))


app.listen(3008, () => {
    console.log("Servidor Corriendo en el puerto 3008");
});
