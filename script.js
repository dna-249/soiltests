var link = document.getElementById('link');
var home = document.getElementById('home');
var home2 = document.getElementById('service')
var home3 = document.getElementById('admin')


const handleLink = () => {
    console.log(link)
  if(link.style.right === '0px'){
   
  } else{ link.style.right = '0px'}
}
 const value = document.getElementById('input');

const handle =(item,item2)=>{
  
 if(innerWidth < 500){
 const pic = `<img src= ${item}  width=${300} height=${200}/>`;
document.getElementById('item').innerHTML = `<h2 class="center">${item2}</h2> <br/> <div  class="center"> ${pic} </div>`;
 

} else {
  const pic = `<img src= ${item}  width=${500} height=${200}/>`;
document.getElementById('item').innerHTML = `<h2 class="center">${item2}</h2> <br/> <div  class="center"> ${pic} </div>`;
 

 }
};handle('download.jpg','Soil Analysis');
window.addEventListener('resize',handle)

const handleHome =()=>{
    home.style.display = 'none';
    home2.style.display = 'grid';
    link.style.right = '-200px'
}
const handleCall =(id)=>{
  var id  = document.getElementById(id);
    id.style.display = 'block';
    id.style.marginTop ='50px';
    home.style.display = 'none';
    home2.style.display = 'none';
    link.style.right = '-200px'
}

const handleInput = (id) => {
  var input = document.getElementById('input').value;
  alert(input)
  document.getElementById(id).innerHTML+=`${input } <br/>`;

}
var admin = document.getElementById("admin");
var nur = document.getElementById("nur");

const handleAdmin = () => {
  admin.style.display = 'block';
  admin.style.position = 'absolute';
  admin.style.right = '35px';
  admin.style.top = '60px';

}

const handleAdmin2 = () => {
  admin.style.display = 'none';
}

 
nur.addEventListener('mouseenter',handleAdmin)
nur.addEventListener('mouseout',handleAdmin2)
