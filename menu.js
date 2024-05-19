var menu = prompt ("Que desea comer?")


switch (menu.toLowerCase()) {
   
    case "carne" :
    alert ("Le recomendamos acompañarlo con nuestro vino tinto");
    break;

    case "pescado" :
    alert ("Le recomendamos acompañarlo con nuestro vino blanco");
    break;

    case "verdura" :
    alert ("Le recomendamos acompañarlo con un vaso de agua");
    break;
    
    default:
    alert ("Elija carne, pescado o verdura")
   
}