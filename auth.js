function verify(){

    if(localStorage.user){

    }
    else{
        window.location.href="/"
    }

}


verify()


function Logout(){
localStorage.removeItem('user')
window.location.href="/"
}