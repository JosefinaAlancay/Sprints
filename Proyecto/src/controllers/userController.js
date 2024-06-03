const userController = {
    register:(req,res)=>{
        res.render('register', { cssFile: 'register.css', title: 'Register'})
    }
    
};

module.exports = userController;

