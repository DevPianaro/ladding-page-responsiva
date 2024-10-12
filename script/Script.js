 
 window.addEventListener("scroll", function(){
    /*Adiciona um "ouvinte de evento" ao objeto window.
    Isso significa que a função definida dentro dele será chamada sempre que
    o evento especificado ocorrer.
    
    "scroll" O tipo de evento que estamos escutando. Aqui, estamos ouvindo quando a página é rolada (scroll).

    function() { }: Define uma função anônima que será executada sempre que o evento de scroll ocorrer.

    */

   let = header = document.querySelector('#header')
/* let header: Declara uma variável chamada header.

document.querySelector('#header'): Seleciona o primeiro elemento do DOC 
que tem o ID header e armazena esse elemento na variável header

*/
   header.classList.toggle('roll' , window.scrollY > 5)
   /*header.classList: Acessa a lista de classes do elemento armazenado na variável header.
   
   window.scrollY:O método toggle adiciona a classe 'roll' 
   ao elemento se a condição window.scrollY > 0 for verdadeira e a remove se for falsa.

   window.scrollY > 0:Retorna a quantidade de pixels que a página foi rolada verticalmente.
   
   */

 })



 function toggleMenu() {
   const menu = document.getElementById("menu");
   const hamburguer = document.querySelector(".menu-hamburguer");
 
   menu.classList.toggle("ativo");
   hamburguer.classList.toggle("ativo");
 }
