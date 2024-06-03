const mainController={
    
    index:(req,res)=>{
        res.render('index' , { cssFile: 'index.css', title: 'Home' });
    },
};

module.exports = mainController;