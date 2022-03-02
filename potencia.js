function ejecuta(){
	x=document.f_ciclos.x.value;
	if (x.length==0){
		alert("Error, se debe inidcar el valor de x");
		document.f_ciclos.x.style.background="red";
	}
	else{
		y=document.f_ciclos.y.value;
		if (y.length==0){
			alert("Error, se debe inidcar el valor de y");
			document.f_ciclos.y.style.background="red";
		}	

	 else{
			x=parseInt(x);
			if((x<=0)||(x>=11)){
			alert("Error el valor x tiene que estar entre 1 y 10");
		 	}

		 else{
			x=parseInt(x);
			if((y<=0)||(y>=6)){
			alert("Error el valor y tiene que estar entre 1 y 5");
			}
		 else{
		 	res=Math.pow(x, y);
		 	document.f_ciclos.res.value=res;

		 }
		}//validacion de y
	}//validacion de x
	}// VALIDACION DElength
}//ejecuta



