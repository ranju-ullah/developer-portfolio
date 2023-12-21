const express = require('express');
const app = express();
const PORT = 3000;
// 
const router = express.Router({
    caseSensitive:true,
});
app.use(router)

router.get('/about',(req,res)=>{
    res.send('Hello Programmers');
})
router.post('/',(req,res)=>{
   
    res.send('Hello Node js');
})

app.listen(PORT,()=>{
    console.log(`My app is listening On Port ${PORT}`)
})