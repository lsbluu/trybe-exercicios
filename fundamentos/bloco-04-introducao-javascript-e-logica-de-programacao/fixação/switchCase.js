let estado = "s"

switch (estado){
    case "aprovada":
        console.log("Aprovada!");
        break;
    case "lista":
        console.log("Lista de espera");
        break;
    case "reprovada":
        console.log("Reprovada");
        break;
    default:
        console.log("não se aplica");
        break;
}