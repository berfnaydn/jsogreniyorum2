var oyunn=[];
var sayac=0;
var sehir;
var kalan_tahmin;
	function kontrol(){
	//	
		var kontrol=true;
		var sehirler=["istanbul","izmir", "adana", "ankara", "sivas", "antalya", "eskisihir"];
		
				
		var p1=document.getElementById("p");
		if(sayac==0){
		var oyun_baslat=prompt("Oyun icin TAMAM tiklayin!");
		sehir =sehirler[Math.floor(Math.random() * sehirler.length)];
		kalan_tahmin =sehir.length;
		alert(sehir);
		if(oyun_baslat!=null){
			var tahmin_edilen= [];
			for(var i=0; i<sehir.length; i++){
				oyunn[i]="___";
				p1.innerHTML=oyunn.join();
			}
		}
		sayac+=1;
		}
		
		var oyun1=document.getElementById("oyun").value;
			
		if(oyun1.length!=1){
			alert("lütfen bir harf giriniz");
		}
		else{
			for(var j=0;j<sehir.length;j++){
				if(sehir[j]==oyun1){
					oyunn[j]=oyun1;//ekrana ekle
					alert(oyun1);
					p1.innerHTML = oyunn.join();
					kontrol=false;
				}		
			}
			if(kontrol==true){
				kalan_tahmin--;
				alert("yanlış tahmin kalan hakınız " +kalan_tahmin);
				if(kalan_tahmin==0){
					alert("oyun bitti kaybettiniz");
					
				}
			}
		}
	}