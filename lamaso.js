//---- script onload
var script_url = "https://script.google.com/macros/s/AKfycbwirOaKVnW7gjsOORkS9DM1WLcs8BO8FAhTqRZdNTQb5eJnVn8z/exec";
var script_url2 = "https://script.google.com/macros/s/AKfycbwirOaKVnW7gjsOORkS9DM1WLcs8BO8FAhTqRZdNTQb5eJnVn8z/exec";

$(document).ready(function(){
//UNTUK BLOG dan HP
kontenLamaso.style.display="none";
hasilbelajarsekali.style.display="none";

var hcpt = document.getElementById("hakcipta");
if(hcpt==null){
	var hcpt = document.createElement("div");
		hcpt.setAttribute("id","hakcipta");
		hcpt.setAttribute("class","w3-main");
		hcpt.setAttribute("style","margin-left:300px;margin-bottom:140px;margin-top:220px;text-align:center;font-size:10px")
	var thcpt =document.createTextNode("@2020 Created By. Ade Andriansyah Kunjungi ");
		hcpt.appendChild(thcpt)
	var an = document.createElement("a");
		an.setAttribute("href","https://syahandrianeda.blogspot.com");
		an.setAttribute("target","_blank");
		an.innerHTML="Blog Pribadi";
		hcpt.appendChild(an);
	hcpt.innerHTML += " atau ";
		var an = document.createElement("a");
		an.setAttribute("href","https://www.sdnratujaya1.net/");
		an.setAttribute("target","_blank");
		an.innerHTML="Web Sekolaku";
		hcpt.appendChild(an);
	
	//\r\n Kunjungi blog: <a href='https://syahandrianeda.blogspot.com' target='_blank'>Blog Pribadi</a> atau <a href='https://www.sdnratujaya1.net/' target='_blank'> Web Sekolah</a> ");
		document.body.appendChild(hcpt);
		document.body.appendChild(hcpt)
}


// Timer
    (function($){
        $.extend({
            APP : {                
                formatTimer : function(a) {
                    if (a < 10) {
                        a = '0' + a;
                    }                              
                    return a;
                },    
                startTimer : function(dir) {
                    var a;
                    // save type
                    $.APP.dir = dir;
                    // get current date
                    $.APP.d1 = new Date();
                    switch($.APP.state) {
                        case 'pause' :
                            // resume timer
                            // get current timestamp (for calculations) and
                            // substract time difference between pause and now
                            $.APP.t1 = $.APP.d1.getTime() - $.APP.td;                            
                        break;
                        default :
                            // get current timestamp (for calculations)
                            $.APP.t1 = $.APP.d1.getTime(); 
                            // if countdown add ms based on seconds in textfield
                            if ($.APP.dir === 'cd') {
                                $.APP.t1 += parseInt($('#cd_seconds').val())*60000;
                            }    
                        break;
                    }                                   
                    // reset state
                    $.APP.state = 'alive';   
                    $('#' + $.APP.dir + '_status').html('Durasi Waktu Masih Berjalan');
                    // start loop
                    $.APP.loopTimer();
                },
                pauseTimer : function() {
                    // save timestamp of pause
                    $.APP.dp = new Date();
                    $.APP.tp = $.APP.dp.getTime();
                    // save elapsed time (until pause)
                    $.APP.td = $.APP.tp - $.APP.t1;
                    // change button value
                    $('#' + $.APP.dir + '_start').val('Berhenti dari Jeda');
                    // set state
                    $.APP.state = 'pause';
                    $('#' + $.APP.dir + '_status').html('Jeda');
                },
                stopTimer : function() {
                    // change button value
                    $('#' + $.APP.dir + '_start').val('Mulai Lagi'); 
                    // set state
                    $.APP.state = 'stop';
                    $('#' + $.APP.dir + '_status').html('Selesai');
                },
                resetTimer : function() {
     // reset display
                    $('#' + $.APP.dir + '_ms,#' + $.APP.dir + '_s,#' + $.APP.dir + '_m,#' + $.APP.dir + '_h').html('00');                 
                    // change button value
                    $('#' + $.APP.dir + '_start').val('Mulai Lagi!');                    
                    // set state
                    $.APP.state = 'reset';  
                    $('#' + $.APP.dir + '_status').html('Setel ulang waktu untuk mengerjakan');
                },
                endTimer : function(callback) {
                    // change button value
                    $('#' + $.APP.dir + '_start').val('Mulai Lagi');
                    // set state
                    $.APP.state = 'end';
                    // invoke callback
                    if (typeof callback === 'function') {
                        callback();
      $("#nilaiku").show();
                    }    
                },    
                loopTimer : function() {
                    var td;
                    var d2,t2;
                    var ms = 0;
                    var s  = 0;
                    var m  = 0;
                    var h  = 0;
                    if ($.APP.state === 'alive') {
                        // get current date and convert it into 
                        // timestamp for calculations
                        d2 = new Date();
                        t2 = d2.getTime();   
                        // calculate time difference between
                        // initial and current timestamp
                        if ($.APP.dir === 'sw') {
                            td = t2 - $.APP.t1;
                        // reversed if countdown
                        } else {
                            td = $.APP.t1 - t2;
                            if (td <= 0) {
                                // if time difference is 0 end countdown
                                $.APP.endTimer(function(){
                                    $.APP.resetTimer();
                                    $('#' + $.APP.dir + '_status').html('Ulangi Latihan');
                                });
                            }    
                        }    
                        // calculate milliseconds
                        ms = td%1000;
                        if (ms < 1) {
                            ms = 0;
                        } else {    
                            // calculate seconds
                            s = (td-ms)/1000;
                            if (s < 1) {
                                s = 0;
                            } else {
                                // calculate minutes   
                                var m = (s-(s%60))/60;
                                if (m < 1) {
                                    m = 0;
                                } else {
                                    // calculate hours
                                    var h = (m-(m%60))/60;
                                    if (h < 1) {
                                        h = 0;
                                    }                             
                                }    
                            }
                        }
                        // substract elapsed minutes & hours
                        ms = Math.round(ms/100);
                        s  = s-(m*60);
                        m  = m-(h*60);                                
                        // update display
                        $('#' + $.APP.dir + '_ms').html($.APP.formatTimer(ms));
                        $('#' + $.APP.dir + '_s').html($.APP.formatTimer(s));
                        $('#' + $.APP.dir + '_m').html($.APP.formatTimer(m));
                        $('#' + $.APP.dir + '_h').html($.APP.formatTimer(h));
                        // loop
                        $.APP.t = setTimeout($.APP.loopTimer,1);
                    } else {
                        // kill loop
                        clearTimeout($.APP.t);
                        return true;
                    
                    }  
                    
                }
                    
            }    
        
        });
          
 
        $('#cd_start,#timermulai').live('click', function() { //LAMASO ASLI
            $.APP.startTimer('cd');
			});
		$('#cd_stop').live('click', function() { //LAMASO ASLI
            //$.APP.stopTimer();
			$.APP.resetTimer();
			});
	    
        $('#cd_reset').live('click', function() {
            $.APP.resetTimer();
        });  
        
        $('#cd_pause').live('click', function() {
            $.APP.pauseTimer();
        });                
                
    })(jQuery);
//HP
logosekolahmenu.src="https://1.bp.blogspot.com/-q57d59JTX8g/Xa-kAy6T0XI/AAAAAAAAOSo/seM01RU3Q_Q7BvLm73wC09BBsQMs05pYACLcBGAsYHQ/s320/LOGO%2BLAMASO.png"
namasekolah.innerHTML ="SEKOLAH KAMU";
namakota.innerHTML = "KOTA KAMU";
barsiswa.style.display="none";

})
function mulaibelajar(){
materiimport.style.display="block";
previewloginsiswa.style.display ="none";
materiimport.innerHTML = "<i class='fa fa-spin fa-spinner w3-xxxlarge'  ></i>";
//bikin judul h4
var judul = document.createElement("h4")
	judul.setAttribute("class","w3-center");
	judul.innerHTML = "Identitas e-Lamaso";
	tes.innerHTML =""
	tes.appendChild(judul);

//-- Bikin Tabel identitas:
var tabelidentitas = document.createElement("table");
	tabelidentitas.setAttribute("class","versi-table");
	tabelidentitas.setAttribute("style","margin:auto");
var tr = tabelidentitas.insertRow(-1);
var td = tr.insertCell(-1);
		td.innerHTML = "ID Token"
var td = tr.insertCell(-1);
		td.innerHTML = keyidToken.innerHTML;
var tr = tabelidentitas.insertRow(-1);
var td = tr.insertCell(-1);
		td.innerHTML = "Sekolah"
var td = tr.insertCell(-1);
		td.innerHTML = keyidSekolah.innerHTML;
var tr = tabelidentitas.insertRow(-1);
var td = tr.insertCell(-1);
		td.innerHTML = "Nama Siswa"
var td = tr.insertCell(-1);
		td.innerHTML = previewpilihnama.value;
var tr = tabelidentitas.insertRow(-1);
var td = tr.insertCell(-1);
		td.innerHTML = "Kelas"
var td = tr.insertCell(-1);
		td.innerHTML = keykelas.innerHTML;
var tr = tabelidentitas.insertRow(-1);
var td = tr.insertCell(-1);
		td.innerHTML = "Mapel/Tema"
var td = tr.insertCell(-1);
		td.innerHTML = keymapel.innerHTML;
var tr = tabelidentitas.insertRow(-1);
var td = tr.insertCell(-1);
		td.innerHTML = "Frekuensi Akses"
var td = tr.insertCell(-1);
		var keteranganakses;;
		if (keyaksessiswa.innerHTML =="sekali"){
				keteranganakses = "Sekali saja sejak mengirim nilai"
			}else{
				keteranganakses ="Berapa kali saja untuk latihan"
			}
		td.innerHTML = keteranganakses;
var tr = tabelidentitas.insertRow(-1);
var td = tr.insertCell(-1);
		td.innerHTML = "Tanggal Publikasi"
var td = tr.insertCell(-1);
		td.innerHTML = formattanggallengkap(keypublikasi.innerHTML);

		var tr = tabelidentitas.insertRow(-1);
				var cel1 = tr.insertCell(-1);
						cel1.setAttribute("id","timer");
						cel1.setAttribute("colspan","2");
						cel1.setAttribute("style","text-align:center");
						cel1.innerHTML = "Timer: ";
						var cdtimer = document.createElement("input")
							cdtimer.setAttribute("id","cd_seconds");
							cdtimer.setAttribute("disabled","true");
							cdtimer.setAttribute("value",keydurasi.innerHTML);
							cdtimer.setAttribute("style","width:50px")
							cel1.appendChild(cdtimer);
							cel1.innerHTML +=" Menit."
					var tr = tabelidentitas.insertRow(-1);		
					var cel1 = tr.insertCell(-1);
						cel1.setAttribute("id","tempatdurasi");
						cel1.setAttribute("colspan","2");
						cel1.setAttribute("style","text-align:center");
						var cdstatus = document.createElement("b");
							cdstatus.setAttribute("id","cd_status");
							var tekscdstatus = document.createTextNode("Durasi Penyelesaian:");
							cdstatus.appendChild(tekscdstatus);
						var cdjam = document.createElement("span");
							cdjam.setAttribute("id","cd_h");
							var tekscdjam = document.createTextNode("00:");
							cdjam.appendChild(tekscdjam);
						var cdmenit = document.createElement("span");
							cdmenit.setAttribute("id","cd_m");
							var tekscdmenit = document.createTextNode("00:");
							cdmenit.appendChild(tekscdmenit);
						var cddetik = document.createElement("span");
							cddetik.setAttribute("id","cd_s");
							var tekscddetik = document.createTextNode("00");
							cddetik.appendChild(tekscddetik);
						var cdpause = document.createElement("input")
							cdpause.setAttribute("type","button");
							cdpause.setAttribute("id","cd_pause");
							cdpause.setAttribute("value","Jeda");
						var cdpstop = document.createElement("input")
							cdpstop.setAttribute("type","button");
							cdpstop.setAttribute("id","cd_stop");
							cdpstop.setAttribute("value","Selesai");
						var gntibaris = document.createElement("br");
						var controltimer = document.createElement("b")
							var tekscontroltimer = document.createTextNode("Control Timer:");
							controltimer.appendChild(tekscontroltimer);
						var controlstart = document.createElement("input");
							controlstart.setAttribute("type","button");
							controlstart.setAttribute("id","cd_start");
							controlstart.setAttribute("value","Mulai Mengerjakan");
						var controlreset = document.createElement("input");
							controlreset.setAttribute("type","button");
							controlreset.setAttribute("id","cd_reset");
							controlreset.setAttribute("value","Reset Timer");
						var titikdua =document.createElement("b");
							var tekstitikdua = document.createTextNode(":");
							titikdua.appendChild(tekstitikdua);
						cel1.appendChild(controltimer);
						cel1.innerHTML +="<br/>";
						cel1.appendChild(controlstart);
						//cel1.appendChild(controlreset);
						//cel1.appendChild(cdpause);
						cel1.appendChild(cdpstop);
						cel1.appendChild(gntibaris);
						cel1.appendChild(cdstatus);
						cel1.innerHTML +=":<br/>";
						cel1.appendChild(cdjam);
						cel1.innerHTML +=":";
						cel1.appendChild(cdmenit);
						cel1.appendChild(titikdua)
						cel1.appendChild(cddetik);	
		
		tes.appendChild(tabelidentitas)
		
//panggil jsonmateri:
var id = keyidmateri.innerHTML;
var idm = encodeURIComponent(id);
var en = "idmateri="+idm;
var url = script_url+"?"+en+"&action=previewriwayat";


 $.getJSON(url,function(json){
	//$("#output").html(brkline(json))
//document.getElementById("isipetunjuk").innerHTML = brkline(json);
materiimport.innerHTML = brkline(json)
 })	
	
		///------------------------------------////
		
		
		
		
		
	
}
function formattanggallengkap(xxx){
// misal idtoken = 01092020
var idtoken = xxx;
var namabulan =["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
var tgl = idtoken.slice(0,2) ;// 01
var bulan = deleteZero(idtoken.slice(2,4)); // 09 --> 9, kalo 10 ya tetep 10
var tahun = idtoken.slice(4,8)

return tgl + " "+ namabulan[bulan - 1] +" "+ tahun + " Pukul 07:00 WIB";

}
function aksessekalidijson(){
var url = script_url+"?action=datasiswasudahmengerjakan";
	if(keyaksessiswa.innerHTML == "sekali"){
		cekkerjaansiswa.innerHTML ="<i class='fa fa-spin fa-spinner'></i>";
		var kodetoken = keyidToken.innerHTML;
		var kodemapel = keymapel.innerHTML;
		var kodekelas = keykelas.innerHTML;
		var kodenamasiswa = previewpilihnama.value;
		var cek="";
		var waktu =""
			$.getJSON(url,function(json){
				for (a in json.records){
					if(json.records[a].idtoken == kodetoken && json.records[a].idkelas == kodekelas && json.records[a].idmapel == kodemapel && json.records[a].namasiswa == kodenamasiswa ){
						cek ="Sudah";
						waktu =json.records[a].Time_Stamp;
					}else{
						cek ="Belum"
						waktu = ""
					}
				}
				
				
				if(cek == "Sudah"){
					cekkerjaansiswa.innerHTML = "Maaf, Ananda sudah mengerjakan ini " + new Date(waktu).toLocaleString();
					timermulai.style.display = "none";

					}
				else{
					cekkerjaansiswa.innerHTML = "Ananda belum mengerjakan ini " + waktu;
					timermulai.style.display = "block";
				}
			})
		}
	else{
		timermulai.style.display = "block"
	}
	
}
function previewriwayat(id){ //ga kepake
//document.getElementById("output").innerHTML="<i class='fa fa-spin fa-spinner'></i>";
document.getElementById('modalpetunjuk').style.display='block';
document.getElementById("judulpetunjuk").innerHTML = "<i class='fa fa-spin fa-spinner'></i>";

var idm = encodeURIComponent(id);
var en = "idmateri="+idm;
var url = script_url+"?"+en+"&action=previewriwayat";

 $.getJSON(url,function(json){
	//$("#output").html(brkline(json))
document.getElementById("judulpetunjuk").innerHTML = "Preview e-Lamaso";
document.getElementById("isipetunjuk").innerHTML = brkline(json);
 })
	
}
function brkline(teks){ //coba
	var tek = teks.split("\r\n"); //cari sKetiap ganti baris;
	var inn = "";
	var kodeganti =["_JUDUL_", "_PECAHAN BIASA_"];
	for (x=0; x < tek.length ; x++){
		var asal = tek[x] ;// dalam satu baris ini, misal baris pertama:
		var cJudul = jumlahdobel(asal,"_JUDUL_");
		var cGambar = jumlahdobel(asal,"_GAMBAR_");
		var cPecBiasa = jumlahdobel(asal,"_PECAHAN-BIASA_");
		var cPecCamp = jumlahdobel(asal,"_PECAHAN-CAMPURAN_");
		
		
		//inn += "ke-"+ x +" = " + asal + "<hr style='border-bottom:1px solid red'/>";
		//inn += "ke-"+ x + " = JUDUL = " + cJudul +", GAMBAR = " + cGambar +", Pecahan Biasa = " + cPecBiasa +", Pecahan Campuran = " + cPecCamp + "<hr style='border-bottom:1px solid blue'/>";
		var katajadi = "";
		
		if(asal.indexOf("_JUDUL_") > -1) { 
				var hJudul;
				var arjud = asal.split("_JUDUL_");
				var katakonversi;
					for (jd in arjud){
						if(jd >0){
							katakonversi = katajadireplace(arjud[jd]);
							//hJudul = "<h4 style='background-color:darkslategrey;color:white;padding:1px'>" + arjud[jd]+ "</h4>";
							hJudul = "<h4 style='background-color:darkslategrey;color:white;padding:1px'>" + katakonversi+ "</h4>";
							//katajadi += hJudul ;
							katajadi += hJudul + "<br/>" ;
						}
					}
			}
		else if (asal.indexOf("_START-TABEL_") > -1 ){
					katajadi += asal.replace("_START-TABEL_","<div style='overflow-x:auto'><table class='versi-table'>");
					//katajadi += asal.replace("_START-TABEL_","<table class='versi-table'>");
			}
		else if (asal.indexOf("_START-TABEL-OPSI_") > -1 ){
					katajadi += asal.replace("_START-TABEL-OPSI_","<hr style='border-top:1px solid olive'/><div style='overflow-x:auto'><table class='versi-table'>");
					//katajadi += asal.replace("_START-TABEL_","<table class='versi-table'>");
			}
		else if (asal.indexOf("<|HEADER|>") > -1 ){
					katajadi += "<tr>";
					var tekarray = asal.split("<|HEADER|>");
					var katakonversi;
						for(th in tekarray){
							katakonversi = katajadireplace(tekarray[th]);
							//katajadi +="<th>" + tekarray[th] +"</th>";
							katajadi +="<th>" + katakonversi +"</th>";
							}
						katajadi +="</tr>"	
			}
		else if (asal.indexOf("<|>") > -1 ){
					katajadi += "<tr>";
					var tekarray = asal.split("<|>");
					var katakonversi;
						for(td in tekarray){
							katakonversi = katajadireplace(tekarray[td]);
							katajadi +="<td>" + katakonversi +"</td>"
							}
						katajadi +="</tr>"	
						//inn +=  "<table class='versi-table'>";
			}
		else if (asal.indexOf("_SELESAI-TABEL_") > -1 ){
					katajadi +=  "</table></div><br/>";
					//katajadi +=  "</table><br/>";
					
			}
		else if (asal.indexOf("_SELESAI-TABEL-OPSI_") > -1 ){
					//katajadi +=  "</table></div><br/>";
					katajadi +=  "</table><br/></li></ol>";
					
			}
		else if (asal.indexOf("_PG_") > -1 ){
			var Q_PG = "";
			var teks = asal.replace("_PG_",""); // return = 1 teks pertanyaaan bla bla bla
			var arrTeks = teks.split(" ");
				nosoal = arrTeks[0];
				Q_PG +="<ol style='list-style-type:decimal;margin:5px 5px 0px 30px;padding:0' start='"+nosoal+"'><li style='border-top:1px double blue'>";
			var katakonversi;
				for (ss in arrTeks){
					if(ss > 0){katakonversi = katajadireplace(arrTeks[ss]);
					Q_PG += katakonversi;
					}
				}
				//katajadi = Q_PG + "<hr style='border-top:1px solid olive'/>";
				katajadi = Q_PG 
			
		}
		else if (asal.indexOf("_OPSI-PG_") > -1 ){
				var opsipg="";
				var arpgg = asal.replace("_OPSI-PG_",""); // hasilnya: 1A teks pertanyaan bla bla bla
				var arpg = arpgg.split(" "); //hasilnya: 0=1A 1=teks 2=pertanyaan ... dst.
				var idopsi = arpg[0]; // hasilnya: 1A
				var abjad = idopsi.slice(1,2) ;// hasilnya A
				var nosoal = idopsi.slice(0,1) ;// hasilnya 1
					if(abjad === "A"){
						opsipg += "<hr style='border-top:1px solid olive'/>";
						opsipg += "<ol style='list-style-type:upper-alpha;margin:5px 5px 0px 20px;padding:0' ><li><input class='calc' type='radio' style='display:none' name='soal"+nosoal+"' id='"+idopsi+"'/><label class='opsi' for='"+idopsi+"'>"; // Khusus opsi A, ada elemen OL lalu dilanjut teksnya
						}else{
						opsipg +="<li><input class='calc' type='radio' style='display:none' name='soal"+nosoal+"' id='"+idopsi+"'/><label class='opsi' for='"+idopsi+"'>"; // selain opsi A, dilanjut.  Tapi tanpa element OL
						}
					var katakonversi;
					for (tt in arpg){ //hasilnya: 0=1A 1=teks 2=pertanyaan ... dst.
						if(tt >0){ // hindari array 0=1A
						katakonversi = katajadireplace(arpg[tt]);
							//hJudul = "<h4 style='background-color:darkslategrey;color:white;padding:1px'>" + arjud[jd]+ "</h4>";
							opsipg += katakonversi 
						}
					}	
					if(abjad ==="D"){
						opsipg += "</label></li></ol></li></ol>";
					}
					else{
						opsipg += "</label></li>";
					}
								
							
							katajadi += opsipg;
					
		}
		else{
				var katakonversi = katajadireplace(asal);
				katajadi += katakonversi + "<br/>";
		
		}		
		inn += katajadi ;//+ "&lt;br/&gt;" ;
	}
	
	
	return inn
}
function katajadireplace(asal){
				var splitTeks = asal.split(" ");
				var ccJudul = 1 ;
				var brsTabel = 0;
				var katajadi="";
				for (i = 0; i < splitTeks.length ; i++){
					//jika judul:
					if(splitTeks[i].indexOf("_GAMBAR_") > -1){
						katajadi += "<img src='" + splitTeks[i].replace("_GAMBAR_","") + "' style='width:20%;border:1px solid red;border-radius:5px' alt='tidak muncul, link Anda salah atau ada spasi setelah kode'/>";
					}
					else if(splitTeks[i].indexOf("_GAMBAR-DRIVE_") > -1){
						var hilangkankode = splitTeks[i].replace("_GAMBAR-DRIVE_","");
						var hilangkanprefik = hilangkankode.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=view&id=");
						var hilangkansufik = hilangkanprefik.replace("/view","");
						var hilangkansufike = hilangkansufik.replace("?usp=drivesdk","");
						
						katajadi += "<img src='" + hilangkansufike + "' style='width:20%;border:1px solid red;border-radius:5px' alt='tidak muncul, link Anda salah atau ada spasi setelah kode, contoh link:https://drive.google.com/file/d/1J0NUwTrxFBZ0JZBCzVTlsDFeXbn3mIci/view'/> ";
					}
					else if(splitTeks[i].indexOf("_PECAHAN-BIASA_") > -1){
						var a = splitTeks[i].replace("_PECAHAN-BIASA_","").split("/")[0];
						var b = splitTeks[i].replace("_PECAHAN-BIASA_","").split("/")[1];
						katajadi +=  "<img src='https://chart.apis.google.com/chart?cht=tx&chl=%5Cfrac%7B"+a+"%7D%7B"+b+"%7D%20&chf=bg%2Cs%2CFFFFFF100&chco=000000' />"
								
				
					}
					else if(splitTeks[i].indexOf("_PECAHAN-CAMPURAN_") > -1){
						var a = splitTeks[i].replace("_PECAHAN-CAMPURAN_","").split("/")[0];
						var b = splitTeks[i].replace("_PECAHAN-CAMPURAN_","").split("/")[1];
						var c = splitTeks[i].replace("_PECAHAN-CAMPURAN_","").split("/")[2];
						katajadi +=  "<img src='https://chart.apis.google.com/chart?cht=tx&chl="+a+"%5Cfrac%7B"+b+"%7D%7B"+c+"%7D%20&chf=bg%2Cs%2CFFFFFF80&chco=000000' />"
								
				
					}
					else if(splitTeks[i].indexOf("_AKAR-KUADRAT_") > -1){
						var a = splitTeks[i].replace("_AKAR-KUADRAT_","");
						
						katajadi +=  "<img src='https://chart.apis.google.com/chart?cht=tx&chl=%5Csqrt%7B%20"+a+"%20%7D%20&chf=bg%2Cs%2CFFFFFF80&chco=000000' />"
								
				
					}
					else if(splitTeks[i].indexOf("_AKAR-TIGA_") > -1){
						var a = splitTeks[i].replace("_AKAR-TIGA_","");
						katajadi +=  " <img src='https://chart.apis.google.com/chart?cht=tx&chl=%5Csqrt%5B3%5D%7B%20"+a+"%20%7D%20&chf=bg%2Cs%2CFFFFFF80&chco=000000' /> "
								
				
					}
					else if(splitTeks[i].indexOf("_PANGKAT_") > -1){
						var a = splitTeks[i].replace("_PANGKAT_","").split("/")[0];
						var b = splitTeks[i].replace("_PANGKAT_","").split("/")[1];
						katajadi +=  " <img src='https://chart.apis.google.com/chart?cht=tx&chl=%5C"+a+"^"+b+"%20&chf=bg%2Cs%2CFFFFFF80&chco=000000' /> "
								
				
					}
					else if(splitTeks[i].indexOf("_EQUATION-LAINNYA_") > -1){
						var a = splitTeks[i].replace("_EQUATION-LAINNYA_","");
						var b = decodeURIComponent(a);
						//var c = decodeURIComponent(b);
						katajadi +=  " <img src='https://chart.apis.google.com/chart?cht=tx&chl="+b+"%20&chf=bg%2Cs%2CFFFFFF80&chco=000000' /> "
								
				
					}
					else if(splitTeks[i].indexOf("_YOUTUBE_") > -1){
						var linkyoutube, konv, konv2, konv3;
							konv = splitTeks[i].replace("_YOUTUBE_","<br/><iframe width='95%' height='215' src='")
							konv2 = konv.replace("https://youtu.be/","https://www.youtube.com/embed/"); // kalo link awalnya https://youtu.be/ 
							konv3 = konv2.replace("watch?v=","embed/"); // jika diambil dari https://www.youtube.com/
							linkyoutube = konv3 +"' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe><br/>" ;
							
							katajadi += linkyoutube;
				
					}
					else if (splitTeks[i].indexOf("_OPSI-SEL_") > -1 ){
						var splitteks = splitTeks[i].replace("_OPSI-SEL_","").split(" "); 
						var id = splitteks[0];//4A
						
						var abjad = id.slice(1,2); //B
						var nosoal = id.slice(0,1);//nosoal 4
						var innteks ="<input class='calc' type='radio' style='display:none' name='soal"+nosoal+"' id='"+id+"'/><label class='opsi' for='"+id+"'>"+abjad+"</label>"
						
							katajadi += innteks;
					}
					else{
						katajadi += splitTeks[i] + " ";
						
					}
				}
		
		return katajadi

}
function jumlahdobel(arrTeks, txt){
	var count = 0;
	var crtArr =  arrTeks.split(" ");
	for(i in crtArr){
		if(crtArr[i].indexOf(txt) > -1){
			count += 1
		}
	}
	
return count
}
function gantiapaaja(teks,cariapa,gantiawal,gantiakhir){
var split = teks.split(cariapa);
var teksganti="";
				//for (x in split){
				for(x = 1; x < split.length; x++){
					if(split[x].length > 0) {
						teksganti += gantiawal + split[x] + gantiakhir;
						}; //.split(" ")[0] +"</h3>";
					
				}
	return teksganti
}		


function kliklamaso(){
//pertama cek sekolah, kalau token ada huruf A, berarti bukan dari SDN Ratujaya 1
//token SDN Ratujaya 1
tes.innerHTML="<i class='fa fa-spin fa-spinner'></i>";
cek.innerHTML="<i class='fa fa-spin fa-spinner'></i>";
materiimport.style.display="none";
	var adatidak;
	var Tidkelas, Tidmapel, TcrtToken, Taksessiswa, Tdurasi,
		Tidmateri, Tidtoken
if(previewtoken.value.indexOf("A") == -1 ){
	//Panggil data dari SpreadSheet tugasguru
	var url = script_url+"?action=riwayatmateri";
	$.getJSON(url,function(json){
		for(x in json.records){
			
			if(json.records[x].idtoken == previewtoken.value){
				if(json.records[x].idtoken !=="undefined"){
					adatidak = "Ada"
					
				}else{
					adatidak ="Tidak Ada"
				}
				
				Tidkelas = json.records[x].idkelas;
				Tidmapel = json.records[x].idmapel;
				TcrtToken = json.records[x].crtToken;
				Taksessiswa = json.records[x].idaksessiswa;
				Tdurasi = json.records[x].iddurasi;
				Tidmateri = json.records[x].idmateri;
				Tidtgl = json.records[x].idtgl;
				Tidtoken = json.records[x].idtoken;
				
				
			}
		}
		if(adatidak =="Ada"){
			
			//opsi pilih kelas
			var opsikelas = document.createElement("option");
				opsikelas.setAttribute("Value",Tidkelas);
				opsikelas.innerHTML = Tidkelas;
				opsikelas.setAttribute("selected","true");
				previewpilihkelas.appendChild(opsikelas);
			//previewpilihkelas.disabled=true;
			
			
			keyaksessiswa.innerHTML=Taksessiswa;
			keydurasi.innerHTML = Tdurasi;
			keykelas.innerHTML =Tidkelas;
			keyidmateri.innerHTML =Tidmateri;
			keypublikasi.innerHTML =TcrtToken;
			keymapel.innerHTML = Tidmapel;
			keysekolah.innerHTML ="SDN Ratujaya 1";
			
// SCRIPT HP			
			namasekolah.innerHTML ="SDN Ratujaya 1";
			namakota.innerHTML ="Kota Depok"
// END SCRIPT HP 			
			keyidToken.innerHTML = Tidtoken;
			hasiltoken.innerHTML =Tidmapel;
			buatopsinama.setAttribute("onclick","datasiswa('"+Tidkelas+"')");
			
			
					
			var teksaksesbersyarat;
				if(Taksessiswa =="sekali"){
					var splitTidtgl = lentanggal(TcrtToken).split("/")			
						var tgldata =  new Date(splitTidtgl[1]+"-"+splitTidtgl[0]+"-"+splitTidtgl[2]+" 07:00:00");
						var tgldataend =  new Date(splitTidtgl[1]+"-"+splitTidtgl[0]+"-"+splitTidtgl[2]+" 23:59:00");
						var tglsekarang = new Date();
							if(tgldata < tglsekarang && tgldataend > tglsekarang){
								//teksaksesbersyarat = "Tgl new Date dari tgldata = "+tgldata+" dan newDate() = "+ tglsekarang +"<br/><br/>";
								//teksaksesbersyarat += "Saya inginn membandingkan dengan nilai tgldata < tglsekarang <br/>";
								//teksaksesbersyarat += "Mapel/Tema <b>"+Tidmapel+"</b> hanya <b>sekali</b> saja bisa diakses setelah Ananda mengirimkan tugas/Jawaban selama tanggal dipublikasikan gurumu. Nilai Ananda otomatis akan masuk ke server e-Lamaso dan diterima oleh gurumu. tes lentanggal ";
								teksaksesbersyarat ="Mapel/Tema <b>"+Tidmapel+"</b> ini hanya bisa diakses pada hari ini saja sampai Pukul 23:59 WIB.<br/>"
								teksaksesbersyarat +="Jika materi ini bersifat ulangan, maka setelah mengirimkan nilai, Ananda tidak lagi membuka konten e-Lamaso ini meski waktu akses masih lama. Oleh karenanya, pelajari baik-baik sebelum kirim nilai.<br/><br/>"
								
								previewloginsiswa.style.display="block";
								}
							else if(tgldata < tglsekarang && tgldataend < tglsekarang){
								teksaksesbersyarat="Mohon maaf, Kode Token <b>"+previewtoken.value+"</b> dengan nama mapel/tema <b>" + Tidmapel + "</b> sudah tidak bisa diakses lagi. Materi ini telah dipublikasikan sejak tanggal = "+lentanggal(TcrtToken)+" pukul 07.00 sampai pukul 23:59 WIB.";
								previewloginsiswa.style.display="none";
								}
							else{
								teksaksesbersyarat="Mohon maaf, Kode Token <b>"+previewtoken.value+"</b> dengan nama Mapel/Tema: <b>"+Tidmapel+"</b> belum waktunya untuk diakses. Tunggu hingga tanggal " + lentanggal(TcrtToken)+" mulai Pukul 07:00 WIB.";
								previewloginsiswa.style.display="none";
								}
					}else{
						previewloginsiswa.style.display="block";
						
						teksaksesbersyarat ="Mapel/Tema <b>"+Tidmapel+"</b> boleh Ananda kerjakan sejak tanggal dipublikasikan untuk latihan. Di dalamnya ada fitur menyimpan hasil belajar dalam bentuk pdf/poto. Kirimkan bukti hasil belajarmu tadi ke WA gurumu. (Nilai tidak masuk ke server e-Lamaso sebab untuk latihan mandiri)";
						
					}
			tes.innerHTML = teksaksesbersyarat;
			
			mainlogin.style.display = "none";
			kontenLamaso.style.display = "block";
			
			cek.innerHTML="";
			
			// script HP//
			loginelamaso()
		}else{
			cek.innerHTML ="Maaf, id Token yang Ananda masukkan tidak terdaftar. ";// + tgljson+"<br/>"+dtgl +" <br/>"+nowtgl;
		}
		
	})
	
}
else{
alert("Hai, sekolah lain?");
tes.innerHTML ="";
cek.innerHTML ="";
}

}
function datasiswa(idkelas){
	
	buatopsinama.innerHTML ="<i class='fa fa-spin fa-spinner'></i>"
	var url = script_url+"?action=read";
	$.getJSON(url,function(json){
				var opsinama = document.createElement("option");
					opsinama.setAttribute("id","pilihannamasiswa");
					opsinama.setAttribute("value","");
					var teksopsi = document.createTextNode("Pilih Nama Ananda");
					opsinama.appendChild(teksopsi)
			previewpilihnama.appendChild(opsinama)
			
		for(y in json.records){
			if(json.records[y].kelassaatini == idkelas){
				var opsinama = document.createElement("option");
					opsinama.setAttribute("id","idpilihnama_"+y);
					opsinama.setAttribute("value",json.records[y].NAME);
					var teksopsi = document.createTextNode(json.records[y].NAME);
					opsinama.appendChild(teksopsi)
			previewpilihnama.appendChild(opsinama)
			}	
		}
		buatopsinama.innerHTML ="Tampilkan Nama Kelas";
		buatopsinama.style.display="none";
		timermulai.style.display="none";
	generateopsinama.style.display="block";
	})
}
////////////////////////////////////////////////////////
	///////// FUNGSI FUNGSI PENTING ///////////////
////////////////////////////////////////////////////////
function lentanggal(id){
//var teks = id;
var tglsplit, blnsplit, thnsplit;
if(id != 0){
	if(id.length == 7){
		tglsplit = addZero(id.slice(0, 1));
		blnsplit = id.slice(1, 3);
		thnsplit = id.slice(3, 7);
	}
	else {
		tglsplit = id.slice(0, 2);
		blnsplit = id.slice(2, 4);
		thnsplit = id.slice(4, 8);
	}
}
	id = tglsplit+"/"+blnsplit+"/"+thnsplit;
return id
}

//////////// SKRIP ASLI LAMASO ////////////////////////
function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  };
  return i;
}  
function deleteZero(i) {
  if (i.slice(0,1)=="0") {
    i = i.slice(1,2);
  };
  return i;
}  


	


//scripit HP
var mySidebar = document.getElementById("mySidebar");// Get the Sidebar?
var overlayBg = document.getElementById("myOverlay");// Get the DIV with overlay effect
function w3_open() {// Toggle between showing and hiding the sidebar, and add overlay effect
	if (mySidebar.style.display === 'block') {
	mySidebar.style.display = 'none';
	overlayBg.style.display = "none";
	} else {
	mySidebar.style.display = 'block';
	overlayBg.style.display = "block";
	}
}
function w3_close() {// Close the sidebar with the close button
	mySidebar.style.display = "none";
	overlayBg.style.display = "none";
}
function barloginelamaso(){
//bersyarat
//kontenLamaso.style.display="none";
//mainlogin.style.display="block";
barlogin.style.display="block";
barsiswa.style.display="none";
w3_close();
}
function loginelamaso(){
//bersyarat
//kontenLamaso.style.display="none";
//mainlogin.style.display="block";
barlogin.style.display="none";
barsiswa.style.display="block";
w3_close();
}
function logout(){
kontenLamaso.style.display="none";
mainlogin.style.display="block";
barlogin.style.display="block";
barsiswa.style.display="none";
previewtoken.value="";
tes.innerHTML="";
w3_close();
}
