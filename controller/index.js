/**************************************
 * Home controller / Logic
 **************************************/
const home = (req, res) => {
    res.send('Hello World, This is home router')
};

/***************************************
 * Profile Controller/ Logic
 ***************************************/
const profile = (req, res) => {
    res.send('Hello World, This is profile router')
}

/**************************************
 * Login controller / Logic
 **************************************/
const login = (req, res) => {
    res.send('Hello World, This is login router')
}

/****************************************
 * Logout Controller / Logic
 ***************************************/
const logout = (req, res) => {
    res.send('Hello World, This is logout router')
}

module.exports = {home,profile,login,logout}
