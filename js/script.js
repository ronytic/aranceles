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
$(document).on("ready",function(){
    $("#resolver").click(function(){
        a=parseFloat($("#a").val());
        b=parseFloat($("#b").val());
        c=parseFloat($("#c").val());
        d=parseFloat($("#d").val());
        pm=parseFloat($("#pm").val());
        ar=parseFloat($("#ar").val());
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
        resolver10();
    });
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
            qd:(a+b*pmax).toFixed(4),
            qs:(c+d*pmax).toFixed(4)
        },
        pe:{
            p:pe,
            qd:(a+b*pe).toFixed(4),
            qs:(c+d*pe).toFixed(4)
        },
        pm:{
            p:pm,
            qd:(a+b*pm).toFixed(4),
            qs:(c+d*pm).toFixed(4)
        },
        pmin:{
            p:pmin,
            qd:(a+b*pmin).toFixed(4),
            qs:(c+d*pmin).toFixed(4)
        },
        cero:{
            p:0,
            qd:(a+b*0).toFixed(4),
            qs:(c+d*0).toFixed(4)
        },
        npi:{
            p:0,
            qd:0,
            qs:0
        }
    
    };
    cn=parseFloat(t.pm.qd);
    pn=parseFloat(t.pm.qs);
    console.log(t);
}
function resolver6(){
    sd=((1/2)*(pmax-pm)*cn).toFixed(4);
    var datos=sb("S","D")+"=1/2*("+pmax+"-"+pm+")*"+cn+"<br>";
    datos=sb("S","D")+"="+sd;
    datos+="&#36;";
    $("#r6").html(datos)
    sd=parseFloat(sd);
}
function resolver7(){
    if(c<=0){
        
        //alert("asd");
        ss=((1/2)*(pm-pmin)*pn).toFixed(4);
        var datos=sb("S","s")+"=1/2*("+pm+"-"+pmin+")*"+pn+"<br>";
        datos=sb("S","s")+"="+ss;
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
function resolver9(){
    ts=(pm*ar/100).toFixed(4);
    var datos=sb("t","($)")+"="+pm+"*"+(ar/100)+"<br>";
    datos=sb("t","($)")+"="+ts;
    datos+="&#36;";
    
    $("#r9").html(datos)
}
function resolver10(){
    npi=(pm+parseFloat(ts)).toFixed(4);
    var datos=sb("NPI","")+"="+pm+"+"+ts+"<br>";
    datos+="NPI="+npi;
    datos+="&#36;";
    
    $("#r10").html(datos)
    npi=parseFloat(npi);
    t.npi.p=npi;
    t.npi.qd=(a+b*npi).toFixed(4)
    t.npi.qs=(c+d*npi).toFixed(4)

    console.log(t);
}
function sb(d="",s=""){
    return d+"<sub>"+s+"</sub>";
}
function r(num){
    return Math.round()
}