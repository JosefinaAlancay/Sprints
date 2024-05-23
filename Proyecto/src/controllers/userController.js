const userController={
    
    login:(req,res)=>{
        res.render('login', { cssFile: 'login.css', title: 'Login' });
    },
    register:(req,res)=>{
        res.render('register', { cssFile: 'register.css', title: 'Register' });
    }
};

module.exports = userController;