var lista=[],i=0;
i++;

function rellenar(){
    subtotal=0;
    var producto=document.getElementById("canasta").value;
    var cantidad=document.getElementById("cantidad").value;
    if(producto=="Arroz"){
        precio=3.50;
        subtotal=precio*cantidad;
    }if(producto=="Azucar"){
        precio=2.50;
        subtotal=precio*cantidad;
    }if(producto=="Papa"){
        precio=1.20;
        subtotal=precio*cantidad;
    }if(producto=="Camote"){
        precio=1.50;
        subtotal=precio*cantidad;
    }if(producto=="Cebolla"){
        precio=2.00;
        subtotal=precio*cantidad;
    }
    
    
    document.getElementById("pro").value=producto;
    document.getElementById("pre").value=precio;
    document.getElementById("sub").value=subtotal;
    
}
function compra(){
    
    function persona(producto,precio,cantidad,subtotal){
       this.producto=producto;
        this.precio=precio;
        this.cantidad=cantidad; 
        this.subtotal=subtotal;
    }
    
    var producto=document.getElementById("canasta").value;
    var cantidad=document.getElementById("cantidad").value;
    
    
    if(producto=="Arroz"){
        precio=3.50;
    }if(producto=="Azucar"){
        precio=2.50;
    }if(producto=="Papa"){
        precio=1.20;
    }if(producto=="Camote"){
        precio=1.50;
    }if(producto=="Cebolla"){
        precio=2.00;
    }
    nuevapersona=new persona(producto,precio,cantidad,subtotal);
    
    agregar();
    totalsubtotal();
    imprimir();
    igv();
    
}

function agregar(){
    lista.push(nuevapersona);
    
    
}
function totalsubtotal(){
    total=0;
    for(var a=0;a<lista.length;a++){
        total=total+lista[a].subtotal;
        
    }
    
}
function igv(){
    var igva=(total*0.18);
    document.getElementById("igv").value=igva;
    
}
function imprimir(){
    
     var tabla=document.getElementById("productos");
      
     var fila="<tr><td>"+i+"</td><td>"+nuevapersona.producto+"</td><td>"+nuevapersona.precio+"</td><td>"+nuevapersona.cantidad+"</td><td>"+nuevapersona.subtotal+
         "</td><td><a href='#' onclick='editar(this)'><img src='iconos/e.png'></td><td><a href='#' onclick='eliminar(this)'><img src='iconos/d.png'></td></tr>";
    var fil=document.createElement('tr');
    fil.innerHTML=fila;
    tabla.appendChild(fil);
}
function editar(p){
     re=p.parentNode.parentNode.rowIndex;
document.getElementById("pro").value=document.getElementById("productos").rows[re].cells[1].innerText;
document.getElementById("pre").value=document.getElementById("productos").rows[re].cells[2].innerText;
document.getElementById("cantidad").value=document.getElementById("productos").rows[re].cells[3].innerText;
document.getElementById("sub").value=document.getElementById("productos").rows[re].cells[4].innerText;
}
function modificar(){
    var condi=confirm("Desea modificar ?");
    if(condi){
productos.rows[re].cells[1].innerHTML=document.getElementById("pro").value;
productos.rows[re].cells[2].innerHTML=document.getElementById("pre").value;
productos.rows[re].cells[3].innerHTML=document.getElementById("cantidad").value;
    var confia=document.getElementById("cantidad").value;
productos.rows[re].cells[4].innerHTML=document.getElementById("sub").value;
        var confie=document.registerElementById("sub").value;
       
        
        alert("Se modifico perfectamente");
    }else{
        alert("No se modifico");
    }
    totalsubtotal();
    igv();


}
function eliminar(p){ 
    var opcion= confirm("Desea eliminar el registro ?");
    if(opcion){
       var i=p.parentNode.parentNode.rowIndex;
        document.getElementById("productos").deleteRow(i);
        lista.splice(i-1,i);
        alert("Registro eliminado correctamente");
        totalsubtotal();
        igv();
        imprimir
       }else{
       alert("Registro no eliminado ");
       }
}
