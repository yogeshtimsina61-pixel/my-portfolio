function scrollToSection(id){
document.getElementById(id).scrollIntoView({
behavior:'smooth'
});
}

const links = document.querySelectorAll("nav a");

links.forEach(link=>{
link.addEventListener("click",function(e){
e.preventDefault();
const target = this.getAttribute("href").substring(1);
scrollToSection(target);
});
});