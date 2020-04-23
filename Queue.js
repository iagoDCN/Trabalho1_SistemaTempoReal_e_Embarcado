function Queue(){
    this.lista = new Array();
    
    this.Inserir = obj => {
    this.lista[this.lista.length] = obj;
    }
    
    this.RemoverPrimeiro = () => {
    if(this.lista.length > 0){
        let obj = this.lista[0];
        this.lista.splice(0,1);
    return obj;
    }else{
        alert("Não há objetos na fila.")
    }
    }
    
    this.LerPrimeiro = () => {
    if(this.lista.length > 0){
    return this.lista[0];
    }else{
        alert("Não há objetos na fila.")
    }
    }
    }