function Stack(){
    this.lista = new Array();
    
    this.Inserir = obj => {
    this.lista[this.lista.length] = obj;
    }
    
    this.RemoverUltimo = () => {
    if(this.lista.length > 0){
        let obj = this.lista[this.lista.length - 1];
        this.lista.splice(this.lista.length - 1,1);
    return obj;
    }else{
        alert("Não há objetos na pilha.")
    }
    }
    
    this.LerUltimo = () => {
    if(this.lista.length > 0){
    return this.lista[this.lista.length - 1];
    }else{
        alert("Não há objetos na pilha.")
    }
    }
    }
    