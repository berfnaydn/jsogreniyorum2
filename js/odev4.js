var table= document.getElementById("tablo");
var indis;


function ekle() {
    table = document.getElementById('tablo');
    var row;
    row = table.insertRow(1);
    for (i = 0; i < 8; i++) {
        var cell1 = row.insertCell(i);
		if(i==1){
            cell1.innerHTML='<th><td id="silme"><input type="button" id="satir_buton"name=""+k value="Sil" onclick="sil(this)" /></td> </th>';
        }
        else
            cell1.innerHTML = document.getElementById('metin'+i).value;
        secilenSatir();
    }
}
function temizle() {
	
	const sil=document.getElementById("tablo");
	sil.innerHTML="";
	sil.innerHTML='<th id="yaz" >List</th>';
	
	
}
function secilenSatir() {
    for(var i=1; i<table.rows.length; i++){
        table.rows[i].onclick=function()
        {
            indis=this.rowIndex;
            document.getElementById("metin0").value=this.cells[0].innerHTML;
        };
    }
}
function sil(row) {
    var i=row.parentNode.parentNode.rowIndex;
    document.getElementById('tablo').deleteRow(i);
}