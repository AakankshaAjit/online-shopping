

 
function submitMyForm()
{

  
    const myEmail = document.getElementById('mail').value
    const mypassword = document.getElementById('pass').value

    if(myEmail==="tasaiaakanksha851@gmail.com"&& mypassword==="123456"){
        localStorage.setItem('user',true)
        console.log('success')
        window.location.href="signin.html"

    }

else{
alert('wrong credentials')
}



}
    

