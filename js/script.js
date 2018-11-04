var a=0,b=0;
var c=0,d=0;
var pm=0;
var pe=0;
var pmax=0;
var pmin=0;
var t={};
var cn=0;
var sd=0;
var pn=0;
var ss=0;
var sgo=0;
var qi=0;
var ar=0;
var ts=0;
var npi=0;

var nqi=0;
var ncn=0;

var npn=0;


var nsd=0;
var nss=0;

var nsgo=0;
var pe=0;

var ig=0;
var ps=0;

var ci=0;

var ar1=0;
$(document).on("ready",function(){
    $("#resolver").click(function(){
        a=parseFloat($("#a").val());
        b=parseFloat($("#b").val());
        c=parseFloat($("#c").val());
        d=parseFloat($("#d").val());
        pm=parseFloat($("#pm").val());
        ar=parseFloat($("#ar").val());

        ci=parseFloat($("#ci").val());

        resolver1();
        resolver2();
        resolver3();
        resolver4();
        resolver5();
        resolver6();
        resolver7();
        resolver8();
        resolver81();
        resolver9();
		
		/******/
		
		resolver9_1();
		resolver10_1();
		resolver11_1();
		resolver11_2()
		/*****/
		
		
        resolver10();
		resolver11();
		resolver12();
		resolver13();
		resolver14();
		resolver15();
		resolver16();
    }).click();
});
function resolver1(){
    pe=((a-c)/(d-b)).toFixed(4);
    var datos=a+"+"+b+"P="+c+"+"+d+"P<br>";
    datos+=sb("P","e")+"="+pe;
    datos+="&#36;";
    $("#r1").html(datos)
}
function resolver2(){
    qe1=(a+b*pe).toFixed(4);
    qe2=(c+d*pe).toFixed(4);
    qe=qe1;
    var datos=a+"+"+b+"("+pe+")="+c+"+"+d+"("+pe+")<br>";
    datos+=qe1+"="+qe2;
    datos+="uni"
    $("#r2").html(datos)
}
function resolver3(){
    pmax=(Math.abs(a)/Math.abs(b)).toFixed(4);
    var datos=sb("P","max")+"="+Math.abs(a)+"/"+Math.abs(b)+"<br>";
    datos+=sb("P","max")+"="+pmax;
    datos+="&#36;";
    $("#r3").html(datos)
}
function resolver4(){
    if(c>0){
        pmin=0;
        var datos=sb("P","min")+"=0 c>0 <br>";
    }else{
        pmin=(Math.abs(c)/Math.abs(d)).toFixed(4);
        var datos=sb("P","min")+"="+Math.abs(c)+"/"+Math.abs(d)+"<br>";
    }

    datos+=sb("P","min")+"="+pmin;
    datos+="&#36;";
    $("#r4").html(datos)
}
function resolver5(){
    t={
        pmax:{
            p:pmax,
            qd:parseFloat((a+b*pmax).toFixed(4)),
            qs:parseFloat((c+d*pmax).toFixed(4))
        },
        pe:{
            p:pe,
            qd:parseFloat((a+b*pe).toFixed(4)),
            qs:parseFloat((c+d*pe).toFixed(4))
        },
        pm:{
            p:pm,
            qd:parseFloat((a+b*pm).toFixed(4)),
            qs:parseFloat((c+d*pm).toFixed(4))
        },
        pmin:{
            p:pmin,
            qd:parseFloat((a+b*pmin).toFixed(4)),
            qs:parseFloat((c+d*pmin).toFixed(4))
        },
        cero:{
            p:0,
            qd:parseFloat((a+b*0).toFixed(4)),
            qs:parseFloat((((c+d*0)<0)?0:(c+d*0)).toFixed(4))
        },
        npi:{
            p:0,
            qd:0,
            qs:0
        }

    };
    cn=parseFloat(t.pm.qd);
    pn=parseFloat(t.pm.qs);

	var datos=mt(t);
	$("#r5").html(datos);
    $("#g5").html('');

	graficar5('#g5');

	console.log(t);
}

function resolver6(){
    sd=((1/2)*(pmax-pm)*cn).toFixed(4);
    var datos=sb("S","D")+"=1/2*("+pmax+"-"+pm+")*"+cn+"<br>";
    datos+=sb("S","D")+"="+sd;
    datos+="&#36;";
    $("#r6").html(datos)
    sd=parseFloat(sd);
}
function resolver7(){
    if(c<=0){
        var datos='S<sub>s</sub>=1/2(P<sub>M</sub>-P<sub>min</sub>)*P<sub>N</sub><br>';
        //alert("asd");
        ss=((1/2)*(pm-pmin)*pn).toFixed(4);
         datos+=sb("S","s")+"=1/2*("+pm+"-"+pmin+")*"+pn+"<br>";
        datos+=sb("S","s")+"="+ss;
    }else{
		var datos=sb("S","s")+"=("+sb("P","M")+"*CN)-((1/2)*"+sb("P","M")+"(CN-"+sb("P","N")+"))<br>";
		ss1=(pm*t.pm.qs).toFixed(4)
		ss2=(1/2*pm*(t.pm.qs-t.cero.qs)).toFixed(4)

		datos+=sb("S","s")+"="+ss1+"-"+ss2+"<br>";
		ss=(parseFloat(ss1)-parseFloat(ss2)).toFixed(4);

		datos+=sb("S","s")+"="+ss;
	}
    datos+="&#36;";
    $("#r7").html(datos);
    ss=parseFloat(ss);
}
function resolver8(){
    sgo=(sd+ss).toFixed(4);
    var datos=sb("SG","o")+"="+sd+"+"+ss+"<br>";
    datos=sb("SG","o")+"="+sgo;
    datos+="&#36;";
    datos+="<br><small>El Beneficio en situación normal es de "+sgo+"&#36;</small>";
    $("#r8").html(datos)
}
function resolver81(){
    qi=(cn-pn).toFixed(4);
    var datos="CN="+cn+"<br>";
    datos+="PN="+pn+"<br>";
    datos+="Cantidad Importada="+(qi)+"";
    var porcn=100;
    var porpn=((pn*100)/cn).toFixed(4)+"%";
    var porqi=((qi*100)/cn).toFixed(4)+"%";
    datos+="<br><small>De que la industria de los singanis es Bolivia alcanza los "+cn+" unidades de las cuales solamente el "+porpn+" es cubierto por la industria nacional, los restantes "+qi+"unidades("+porqi+") son importadas.</small>";
    $("#r81").html(datos)
}

function resolver9_1(){
    npi=((a-c-ci)/(d-b)).toFixed(4);
    var datos=a+"+("+b+"p)="+c+"+("+d+"p)+"+ci+"<br>";
	datos+=sb("NPI","")+"=(("+a+")-("+c+")-("+ci+"))/("+d+"-("+b+"))"+"<br>";
    datos+=sb("NPI","")+"="+npi;
    datos+="&#36;";

    $("#r9_1").html(datos)
}
function resolver10_1(){
    ts=((npi)-(pm)).toFixed(4);
    var datos=sb("t","($)")+"="+npi+"-"+pm+"<br>";
    datos+=sb("t","($)")+"="+ts;
    datos+="&#36;";

    $("#r10_1").html(datos)
}

function resolver11_1(){
    npi
    var datos=sb("t","%")+"="+ts+"/"+pm+"*100"+"<br>";
    datos+=sb("t","(%)")+"="+ar1;
    datos+="%"+"<br>";
	
	datos+="<small>Por lo tanto la Tasa Arancelaría Equivalente <strong>TAE</strong> es de <strong>("+ar1+"%)</strong></small>"

    $("#r11_1").html(datos)
}


function resolver11_2(){
	var datos="";
	npi=parseFloat(npi);
    t.npi.p=npi;
    t.npi.qd=(a+b*npi).toFixed(4)
    t.npi.qs=(c+d*npi).toFixed(4)
	
	ncn=parseFloat(t.npi.qd);
	npn=parseFloat(t.npi.qs);

	nqi=parseFloat((ncn-npn).toFixed(4));
	
	datos+=mt(t);
	
	$("#r11_2").html(datos);
	graficar10("#g11_2")
}

function resolver9(){
    ts=(pm*ar/100).toFixed(4);
    var datos=sb("t","($)")+"="+pm+"*"+(ar/100)+"<br>";
    datos+=sb("t","($)")+"="+ts;
    datos+="&#36;";

    $("#r9").html(datos)
}
function resolver10(){
    npi=(pm+parseFloat(ts)).toFixed(4);
    var datos=sb("NPI","")+"="+pm+"+"+ts+"<br>";
    datos+="NPI="+npi;
    datos+="&#36;";



    npi=parseFloat(npi);
    t.npi.p=npi;
    t.npi.qd=(a+b*npi).toFixed(4)
    t.npi.qs=(c+d*npi).toFixed(4)

	ncn=parseFloat(t.npi.qd);
	npn=parseFloat(t.npi.qs);

	nqi=parseFloat((ncn-npn).toFixed(4));

	datos+=mt(t);

    $("#r10").html(datos);
	$("#g10").html('');
	
	
	graficar10("#g10");

    console.log(t);

}

function resolver11(){

	nsd=(1/2*(pmax-npi)*ncn).toFixed(4);
	var datos=sb("NS","D")+"=1/2*("+pmax+"-"+npi+")*"+ncn+"<br>";


	datos+="NSD="+nsd;
    datos+="&#36;";
	nsd=parseFloat(nsd);
	$("#r11").html(datos)
}
function resolver12(){
	if(c<=0){
		nss=(1/2*(npi-pmin)*npn).toFixed(4);
		var datos='N<sub>SS</sub>=1/2*(NPI-P<sub>min</sub>)*NPN<br>'
		datos+=sb("NSS","")+"=1/2*("+npi+"-"+pmin+")*"+npn+"<br>";
		datos+="NSS="+nss;
	}else{
		var datos=sb("NS","s")+"=("+sb("NP","I")+"*NCN)-((1/2)*"+sb("NP","I")+"(NCN-"+sb("NP","N")+"))<br>";
		ss1=(npi*t.npi.qs).toFixed(4)
		ss2=(1/2*npi*(t.npi.qs-t.cero.qs)).toFixed(4)

		datos+=sb("NS","s")+"="+ss1+"-"+ss2+"<br>";
		nss=(parseFloat(ss1)-parseFloat(ss2)).toFixed(4);

		datos+=sb("NS","s")+"="+nss;

	}

    datos+="&#36;";

	nss=parseFloat(nss);

	$("#r12").html(datos)
}
function resolver13(){
	//alert(nsd);
	nsgo=(nsd+nss).toFixed(4);
	var datos=sb("NSG","o")+"="+nsd+"+"+nss+"<br>";
	datos+=sb("NSG","o")+"="+nsgo;
    datos+="&#36;";

	nss=parseFloat(nss);

	$("#r13").html(datos)
}
function resolver14(){

	pe=(sgo-nsgo).toFixed(4);
	var datos="PE="+sgo+"-"+nsgo+"<br>";
	datos+=sb("PE","")+"="+pe;
    datos+="&#36;";

	pe=parseFloat(pe);
	$("#r14").html(datos);
}
function resolver15(){

	ig=(nqi*ts).toFixed(4);
	var datos="IG="+nqi+"*"+ts+"<br>";
	datos+=sb("IG","")+"="+ig;
    datos+="&#36;";

	ig=parseFloat(ig);
	$("#r15").html(datos);
}
function resolver16(){

	ps=(pe-ig).toFixed(4);
	var datos="PS="+pe+"-"+ig+"<br>";
	datos+=sb("PS","")+"="+ps;
    datos+="&#36;";

	datos+='<br><small>La Introducción de un arancel del '+ar+'% genero una perdida social de '+ps+'$ sin embargo se logro crecer la producción nacional de ('+(pn)+') a ('+ npn+') </small>';

	ps=parseFloat(ps);


	$("#r16").html(datos);

	//alert(ncn);
}

function mt(tn){
	console.log("tabla:");
	console.log(t.npi);

	var datos='<table class="table table-bordered table-striped table-hover">';
	datos+='<thead><tr>';
	datos+='<td></td>';
	datos+='<td>P</td>';
	datos+='<td>'+sb("Q","D")+' x</td>';
	datos+='<td>'+sb("Q","S")+' x</td>';
	datos+='</tr></thead>';

	datos+='<tr>';
	datos+='<td>'+sb("P","max")+'</td>';
	datos+='<td>'+tn.pmax.p+'</td>';
	datos+='<td>'+tn.pmax.qd+' </td>';
	datos+='<td>'+tn.pmax.qs+' </td>';
	datos+='</tr>';

	datos+='<tr>';
	datos+='<td>'+sb("P","e")+'</td>';
	datos+='<td>'+tn.pe.p+'</td>';
	datos+='<td>'+tn.pe.qd+' </td>';
	datos+='<td>'+tn.pe.qs+' </td>';
	datos+='</tr>';

	datos+='<tr>';
	datos+='<td>'+sb("P","M")+'</td>';
	datos+='<td>'+tn.pm.p+'</td>';
	datos+='<td>'+tn.pm.qd+' </td>';
	datos+='<td>'+tn.pm.qs+' </td>';
	datos+='</tr>';

	datos+='<tr>';
	datos+='<td>'+sb("P","min")+'</td>';
	datos+='<td>'+tn.pmin.p+'</td>';
	datos+='<td>'+tn.pmin.qd+' </td>';
	datos+='<td>'+tn.pmin.qs+' </td>';
	datos+='</tr>';

	datos+='<tr>';
	datos+='<td>'+sb("","")+'</td>';
	datos+='<td>'+tn.cero.p+'</td>';
	datos+='<td>'+tn.cero.qd+' </td>';
	datos+='<td>'+tn.cero.qs+' </td>';
	datos+='</tr>';

	datos+='<tr>';
	datos+='<td>'+sb("NPI","")+'</td>';
	datos+='<td>'+tn.npi.p+'</td>';
	datos+='<td>'+tn.npi.qd+' </td>';
	datos+='<td>'+tn.npi.qs+' </td>';
	datos+='</tr>';

	datos+='</table>';
	return datos;
}
function graficar5(destino){
	functionPlot({
		  target: destino,
		  width: 400,
		  height: 400,
		  grid: 0,
		  xAxis: {
			label: 'Q',
			domain: [0, parseFloat(t.cero.qd)+3]
		  },
		  yAxis: {
			label: 'P',
			domain: [0, parseFloat(pmax)+2]
		  },
		  data: [{
			  title :'',
			vector: [parseFloat(t.cero.qd),(-1)*parseFloat(t.pmax.p)],
			offset: [ parseFloat(t.pmax.qd),parseFloat(t.pmax.p)],
			//offset: [ 0,10.725],
			graphType: 'polyline',
			fnType: 'vector',
			color:'red',

		  },{
			vector: [parseFloat(t.pmax.qs)-parseFloat(t.cero.qs),parseFloat(t.pmax.p)-parseFloat(t.pmin.p)],
			offset: [ parseFloat(t.pmin.qs),parseFloat(t.pmin.p)],
			//offset: [ 0,10.725],
			graphType: 'polyline',
			fnType: 'vector',
			color:'blue'
		  },{
			vector: [parseFloat(t.pm.qd),0],
			offset: [ 0,parseFloat(t.pm.p)],
			//offset: [ 0,10.725],
			graphType: 'polyline',
			fnType: 'vector',
			color:'green'
		  }
		  ],
		  annotations: [{
			x: parseFloat(t.pmax.qs),
			text:'PmaxQs='+parseFloat(t.pmax.qs)
		  }, {
			x: t.pm.qs,
			text: 'PN:'+parseFloat(t.pm.qs)
		  }, {
			x: t.pm.qd,
			text: 'CN:'+parseFloat(t.pm.qd)
		  },{x: t.cero.qd,
			text: 'QD:'+parseFloat(t.cero.qd)
		  },
		   {
			y: parseFloat(t.pmax.p),
			text: 'Pmax:'+parseFloat(t.pmax.p)
		  },
		  {
			y: parseFloat(t.pmin.p),
			text: 'Pmin:'+parseFloat(t.pmin.p)
		  },
		  {
			y: parseFloat(t.pm.p),
			text: 'Pm:'+parseFloat(t.pm.p)
		  },
		  {
			x: parseFloat(t.cero.qs),
			text: 'Qmin:'+parseFloat(t.cero.qs)
		  }],

  tip: {
    xLine: true,    // dashed line parallel to y = 0
    yLine: true,    // dashed line parallel to x = 0
    renderer: function (x, y, index) {
      // the returning value will be shown in the tip
    }
  }
	})	;
}


function graficar10(destino){
	functionPlot({
		  target: destino,
		  width: 400,
		  height: 400,
		  grid: 0,
		  xAxis: {
			label: 'Q',
			domain: [0, parseFloat(t.cero.qd)+3]
		  },
		  yAxis: {
			label: 'P',
			domain: [0, parseFloat(pmax)+2]
		  },
		  data: [{
			  title :'',
			vector: [parseFloat(t.cero.qd),(-1)*parseFloat(t.pmax.p)],
			offset: [ parseFloat(t.pmax.qd),parseFloat(t.pmax.p)],
			//offset: [ 0,10.725],
			graphType: 'polyline',
			fnType: 'vector',
			color:'red',

		  },{
			vector: [parseFloat(t.pmax.qs)-parseFloat(t.cero.qs),parseFloat(t.pmax.p)-parseFloat(t.pmin.p)],
			offset: [ parseFloat(t.pmin.qs),parseFloat(t.pmin.p)],
			//offset: [ 0,10.725],
			graphType: 'polyline',
			fnType: 'vector',
			color:'blue'
		  },{
			vector: [parseFloat(t.pm.qd),0],
			offset: [ 0,parseFloat(t.pm.p)],
			//offset: [ 0,10.725],
			graphType: 'polyline',
			fnType: 'vector',
			color:'green'
		  },{
			vector: [parseFloat(t.npi.qd),0],
			offset: [ 0,parseFloat(t.npi.p)],
			//offset: [ 0,10.725],
			graphType: 'polyline',
			fnType: 'vector',
			color:'yellow'
		  }
		  ],
		  annotations: [{
			x: parseFloat(t.pmax.qs),
			text:'PmaxQs='+parseFloat(t.pmax.qs)
		  }, {
			x: t.pm.qs,
			text: 'PN:'+parseFloat(t.pm.qs)
		  },
		  	{x: t.pm.qd,
			text: 'CN:'+parseFloat(t.pm.qd)
		  },{x: t.cero.qd,
			text: 'QD:'+parseFloat(t.cero.qd)
		  },{x: t.npi.qd,
			text: 'NCN:'+parseFloat(t.npi.qd)
		  },
		   {y: parseFloat(t.pmax.p),
			text: 'Pmax:'+parseFloat(t.pmax.p)
		  },
		   {x: parseFloat(t.npi.qs),
			text: 'NPN:'+parseFloat(t.npi.qs)
		  }
		  ,
		  {	y: parseFloat(t.pmin.p),
			text: 'Pmin:'+parseFloat(t.pmin.p)
		  },
		  {	y: parseFloat(t.pm.p),
			text: 'Pm:'+parseFloat(t.pm.p)
		  },
		  {	x: parseFloat(t.cero.qs),
			text: 'Qmin:'+parseFloat(t.cero.qs)
		  },{
			y: parseFloat(t.npi.p),
			text: 'NPI:'+parseFloat(t.npi.p)
		  }],

  tip: {
    xLine: true,    // dashed line parallel to y = 0
    yLine: true,    // dashed line parallel to x = 0
    renderer: function (x, y, index) {
      // the returning value will be shown in the tip
    }
  }
	})	;
}
function sb(d,s){
    return d+"<sub>"+s+"</sub>";
}
function r(num){
    return Math.round()
}
