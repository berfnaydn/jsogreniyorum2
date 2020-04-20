function kontrol(){
    var ad =document.getElementById("ad").value;
	if(ad==""){
		alert("Ad alanını boş bırakmayın!!");
		return false;
		}
	if(!isNaN(ad)){
		alert("isim alanında rakam kullanamazsınız!!!");
		return false;
	}if(ad.length <=2){
		alert("Ad 2 karakterden az olamaz");
		return false;
	}
	
	
	var soyad=document.getElementById("soyad").value;
	if(soyad==""){
		alert("Soyisim alanı boş bırakılamaz!!");
		return false;
		}
	if(!isNaN(soyad)){
		alert("Soyisim alanında rakam kullanılamaz!!!");
		return false;
	}if(soyad.length <=2){
		alert("Soyisim 2 karakterden az olamaz!!");
		return false;
	}
	var tc=document.getElementById("tc").value;
	if(tc==""){
		alert("Tc alanı boş bırakılamaz!!");
		return false;
	}
	if(isNaN(tc)){
		alert("Tc alanında harf kullanılamaz!!!");
		return false;
	}
	if(tc.length !=11){
		alert("Geçersiz tc girişi!");
		return false;
	}
	
	
	var email=document.getElementById("email").value;
	
	if(email==""){
		alert("email  alanı boş bırakılamaz!!");
		return false;
	}
	
	var atpos=email.indexOf("@");
    var dotpos=email.lastIndexOf(".");
    if ( atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length ){
		alert("Hatalı email!!");
		return false;
	}
		
	
	var telefon=document.getElementById("telefon").value;
	if(telefon==""){
		alert("Telefon numarası boş bırakılamaz!!");
		return false;
	}
	if(isNaN(telefon)){
		alert("Telefon alanında harf kullanılamaz!!!");
		return false;
	}
	if(telefon.length ==11 || tc.length==10){
		alert("Geçersiz telefon girişi");
		return false;
	}
	
	var sifre=document.getElementById("sifre").value;
	if(sifre==""){
		alert("Şifre boş bırakılamaz!!");
		return false;
		}
	if(sifre.length <=5){
		alert("Şifre çok kısa!!");
		return false;
	}
	
                else if (sifre.search(/[a-z]/) < 0){
                        alert("Şifre en az bir Küçük harf içermelidir.");
	return false;
	}
                   else if (sifre.search(/[A-Z]/) < 0){
                        alert("Şifre en az bir Büyük harf içermelidir.");
						return false;
						}

                else if (sifre.search(/[0-9]/) < 0){
                    alert("Şifre en az bir rakam içermelidir.");
					return false;
					}

          

	var sifre1=document.getElementById("sifre1").value;
	if(sifre1!=sifre){
		alert("Şifreler uyuşmuyor!!!");
		return false;
	}
	var cinsiyet=document.getElementById("cinsiyet").checked;
	var cinsiyet1=document.getElementById("cinsiyet1").checked;
	
	if(cinsiyet != true && cinsiyet1!=true){
		alert("Cinsiyetinizi  seçiniz!!");
		return false;
	}
	var sehir=document.getElementById("sehir").value;
	if(sehir==""){
		alert("Şehrinizi seçin!!");
		return false;
	}
}

