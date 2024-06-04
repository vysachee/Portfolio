var x1;
function datoX(){
    x1= document.getElementById("x").innerHTML = Math.floor(Math.random() * 20) - 10;
}

var y1;
function datoY(){
    y1= document.getElementById("y").innerHTML = Math.floor(Math.random() * 20) - 10;
}

var a1;
function datoA(){
    do{
        a1= document.getElementById("a").innerHTML = Math.floor(Math.random() * 20) - 10;
    }while (a1==0);
}

var b1;
function datoB(){
    do{	
        b1=(Math.random() * 20) - 10;
        b1= Math.floor(b1);
        document.getElementById("b").innerHTML = b1;
        if (b1>0){
            document.getElementById("b").innerHTML = "+" + b1;
        }else{
            document.getElementById("b").innerHTML = b1;
        }
    }while(b1==0);
}

var c1;
function datoC(){
    do{
        c1=(Math.random() * 20) - 10;
        c1= Math.floor(c1);
        document.getElementById("c").innerHTML = c1;
        if (c1>0){
            document.getElementById("c").innerHTML = "+" + c1;
        }else{
            document.getElementById("c").innerHTML = c1;
        }
    }while(c1==0);
}

var moltiplicazione;
var somma;
var divisione;
var radice;
var assoluto;
	
function controlResult(){ 	
	moltiplicazione= Math.abs((a1*x1) + (b1*y1) + c1);
	somma= Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
	divisione= Math.floor (moltiplicazione / somma);
	
	var risposta= document.getElementById ("input").value;
	if(divisione==risposta){
	    alert("Risposta corretta: " + divisione);
	}else{
	    alert("Risposta errata: " + divisione);
        if (x1<0){
	        x1= -(x1);
	    }else{
	        x1 = x1;
	        if (y1<0){
	            y1= -(y1);
            }else{
	            y1 = y1;
            }	
        }
    }
}