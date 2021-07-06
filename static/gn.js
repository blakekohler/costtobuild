(function(){
//Consts
var $$U='undefined';
//Locals
var WN=window,DC=document,de,ov,pp,drg,lX,lY,mX,mY,OldIE=false,appV=navigator.appVersion.match(/MSIE (\d\.\d)/),M,S,$Wait;
WN.DocRun=WN.DocRun||[];
if(appV!=null){appV=+appV[1];OldIE=appV<9}
DC.write('<style> #uv_pop{background:#FFF;z-index:99;position:absolute;top:50%;left:50%;display:none;border:5px solid #FFF}'
+'#uv_ov{position:absolute;top:0;left:0;z-index:90;background-color:#000;display:none;opacity:.7}'
+'.Hid{display:none}@media print{.NoPrint {display:none}} </style>');
var _={
WN:window,DC:document,DB:null
,E:function(e){return DC.getElementById(e)}
,E2:function(e){return (typeof e=='string')?DC.getElementById(e):e;}
,EN:function(e){return DC.getElementsByName(e)}
,EC:function(e){return DC.createElement(e)}
,EC2:function(i,t){var l=_.EC(t||'div');l.setAttribute('id',i);return l}
,EA:function(e,i){e.appendChild(i);return i;}
,ER:function(e,i){e.removeChild(i);return i;}
,EI:function(e,i){e.parentNode.insertBefore(i,e);return i;}
,EAt:function(x,y){return DC.elementFromPoint(x,y)}
,h:function(e){e.style.display='none';}//hide
,s:function(e){e.style.display='block';}//show ???
,t:function(tg,l){tg=tg||'*';l=l||DC;return l.getElementsByTagName(tg);}
,v:function(l){var s,n=t.nodeName;if(n=="INPUT"||n=="TEXTAREA"){return l.value;}if(n=="SELECT"){s=l.options[l.selectedIndex];return s.value||s.innerHTML;}return l.innerHTML;}
/*
function RadioVal(radioName){
  var r = $EN(radioName);
  for(var i=0;i<r.length;++i)
    if(r[i].checked)return r[i].value;
  return null;
  }
*/
,xy:function(l,x,y){var st=l.style;st.position='absolute';if(x){st.left=x+'px'} if(y){st.top=y+'px'}return l}
,Ev:{S:function(e){return [e.screenX, e.screenY]}//event handling
  ,A:function(e,typ,fn,Capture){//Add
    e.addEventListener(typ,fn,!!Capture);//force cature to false if not provided
    return [e,typ,fn];
    }
  ,D:function(e){//Delete
    e[0].removeEventListener(e[1],e[2]);
    return e;
    }
  ,C:function(typ,Buble,Cancl){//Create
    var e=DC.createEvent("UIEvents");//"MouseEvents", "HTMLEvents"
    e.initUIEvent(typ, Buble, Cancl, WN,1);//initMouseEvent
    e.$nwcNm='on'+typ;
    return e;
    }
  ,S:function(e,ev){
    return e.dispatchEvent(ev)}//Send //DC. ("MouseEvent");
  ,T:function(e){return e.target;}//Target //if(targ.nodeType == 3)targ = targ.parentNode; // defeat Safari bug
  ,K:function(e){return e.which;}//Key //var character = String.fromCharCode(code);
  //relatedTarget(mouseover,mouseout)
  ,XY:function(e){return [e.pageX, e.pageY];}
  ,Btn:function(e){var b=e.which;
    if(b==3)b=2;
    else if(b==2)b=4;
    return b;}
  ,XYScrn:function(e){return [e.screenX, e.screenY];}
  ,MLeave:function(e,fn){//MouseLeave
    var f=function(e){
      var tg = _.Ev.Targ(e);
      if(tg.nodeName != 'DIV') return;
      var reltg = (e.relatedTarget) ? e.relatedTarget : e.toElement;
      while(reltg.nodeName != 'BODY'){
        if(reltg== tg) return;
        reltg= reltg.parentNode
        }
      // Mouseout took place when mouse actually left layer
      fn(e);
      }
    e['M$L_'+fn]=f;
    _.Ev.A(e,"mouseleave",f);
    }
  ,MouseLeaveD:function(e,fn){_.Ev.D(e,"mouseleave",e['M$L_'+fn]);e['M$L_'+fn]=null}
/*
function OnMouseOver (event) {
  var from = event.relatedTarget ? event.relatedTarget : event.fromElement;
  var to = event.target ? event.target : event.toElement;
*/
  }
,dW:function(){return Math.max(de.scrollWidth,_.wW());}
,dH:function(){return Math.max(de.scrollHeight,_.wH());}
,all:function(a,f){for(var i=0;i<a.length;){f(a[i++]);}}
,DD:function(e,f){e.onmousedown=DrgSt;e.D$Fn=f;e.style.cursor='move'}
,D:null,DL:null,CIE:null
,DoRun:function(){
  while(DocRun.length>0){
    var o=DocRun;
    DocRun=[];
    for(var i=0;i<o.length;++i)
      //try{
      o[i]();
      //}catch(e){}//???should we save all the errors
    }
  }
,C:{
 A:function(e,n){e.className+=(e.className?' ':'')+n}
 ,D:function(e,n){e.className=e.className.replace(new RegExp('(\\s|^)'+n+'(\\s|$)'),' ').replace(/^\s+|\s+$/g, '')}
 ,h:function(e,n){return new RegExp('(\\s|^)'+n+'(\\s|$)').test(e.className)}
 ,a:function(e,n){if(!_.C.h(e,n))_.C.A(e,n)}
 ,t:function(e,n){ _.C.h(e,n)?_.C.D(e,n):_.C.A(e,n)}
 }
,Aribs:function(o){var R='';for(var k in o)R+=k+', ';return R}
//Array funcs
,AC:function(A){return A.slice(0,A.length)}
,AA:function(A,d){A[A.length]=d;return A}
,AI:function(A,I,d){if(I>=A.length)A[A.length]=d;else A.splice(I,0,d);return A}
,AD:function(A,I){if(I<A.length)A.splice(I,1);return A;}
,AIdx:function(A,v){for(var i=A.length;i>0;)if(A[--i]==v)return i;return -1}
,Wait:function(f){DocRun[DocRun.length]=f;$Wait.Tm=$Wait.Tm||setTimeout(function(){$Wait.proc()},1000);}
,ToHtml:function(s){return s.replace(/ /g, "&nbsp").replace(/\n/g, "<br>")}
,SetAds:function(Ads){
//return;//Debug
var i,Ad,As=Ads[1],ad,Txt,Ga=[];
for(i=0;i<As.length;++i){
 Ad=As[i];
 Txt=Ad[3]+'<ins class="adsbygoogle" style="display:inline-block'+Ad[2]+'" data-ad-client="'+Ads[0]+'" data-ad-slot=\"'+Ad[1]+'"></ins>';
 (ad=_.E(Ad[0])).innerHTML=Txt;
 Ga[i]={};
 }
adsbygoogle=Ga;
var oScript= _.EC("script");
oScript.type = "text/javascript";
oScript.src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
_.DB.appendChild(oScript);
}
};
$Wait={Tm:null,proc:function(){_.DoRun();$Wait.Tm=(DocRun.length<=0)?null:setTimeout(function(){$Wait.proc()}, 500)}}

if(OldIE){
  M=function(){return new ActiveXObject("Microsoft.XMLHTTP");};
  S=function(h,r,e){
    h.onreadystatechange = function(){
      if(h.readyState==4){
        if(h.status==200)r(h);
        else e(h);
        }
      }};
}else if(typeof XMLHttpRequest != $$U){
  M=function(){return new XMLHttpRequest()};
  S=function(h,r,e){var H=h;
    h.onreadystatechange = function(){
      H.onload = function(){r(H);};
      H.onerror = function(){e(H);};
      }};
}else
  M=function(){throw new Error("XMLHttpRequest not supported")};

_.Ajx=function(U,R,E,W,D,C){//U-Url,R-HndlRslt,E-HndlErr,W-Wait,C-Cmd['GET','POST']
  var h=M();
  S(h,R,E);
  if(!C)C="GET";
  h.open(C,U,!W);
  h.send(D);
  return h;
  };
_.AjxEval=function(h){eval(h.responseText);}
_.AjxRplc=function(e){return function(h){e.innerHTML=h.responseText}}

function DrgSt(e){
 if(drg)DrgE();
 mX=e.clientX;
 mY=e.clientY;
 drg=this;
 lX=this.offsetLeft;
 lY=this.offsetTop;
 drg.M_e=_.Ev.A(DC,'mousemove',drg.M);
 drg.U_e=_.Ev.A(DC,'mouseup',drg.U);
 return false;
 }
function DrgM(e){_.xy(e.clientX-mX+lX,e.clientY-mY+lY);}
function DrgU(e){_.h(drg);var XY=_.Ev.XY(e),t=_.EAt(XY[0],XY[1]);_.s(drg);if(drg.D$Fn){drg.D$Fn(drg,t);}DrgE();}
function DrgE(){_.Ev.D(drg.M_e);_.Ev.D(drg.U_e);drg=null;}

//Fix any event handling funcs
if(!DC['addEventListener']){//override defualt fun handler for IE
  _.Ev.A=function(e,typ,fn,Capture){//Add
    var f2=function(){fn(WN.event)};
    e.attachEvent('on'+typ,f2);
    return [e,typ,fn,f2];
    };
  _.Ev.D=function(e){//Delete
    e[0].detachEvent('on'+e[1],e[3]);
    return e;
    };
  _.Ev.C=function(typ){//Create
    var e=DC.createEventObject();
    e.$nwcNm='on'+typ;
    return e;
    };
  _.Ev.S=function(e,ev){//Send
    return e.fireEvent(ev.$nwcNm,ev);
    };
  _.Ev.T=function(e){return e.srcElement;}//Target
  _.Ev.K=function(e){return e.keyCode;}//Key
  //fromElement(mouseover),toElement(mouseout)
  }

if(typeof WN.JSON==$$U){//include
  _.Ajx("json2-min2.js",function(d){eval(d.responseText);},function(){throw new Error("JSON not supported")});
  }
if(OldIE){//include
  //debug
 _.Ajx("ie9-min.js",function(d){eval(d.responseText);},function(){throw new Error("IE9 and below are not supported")}, true);
 //_.Ajx("ie9.js",function(d){eval(d.responseText);},function(){throw new Error("IE9 and below are not supported")}, true);
  //appV < 7 load special css
  //c:function(cls,tg,l){var c=[],p=new RegExp('\\b'+cls+'\\b');_.all(_.t(tg,l),function(m){if(p.test(m.className)){c.push(m);}});return c;},
String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g, '');};
String.prototype.ltrim=function(){return this.replace(/^\s+/,'');};
String.prototype.rtrim=function(){return this.replace(/\s+$/,'');};
String.prototype.fulltrim=function(){return this.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g,'').replace(/\s+/g,' ');};
 }

_.PrmsToObj=function(l){
  var r={};
  for(var i=0;i<l.length;++i){
    var c = l[i].trim().split('=');
    r[c[0]]=c[1];
    }
  return r;
  }

_.UrlPrms=function(){
var s = decodeURI(DC.URL).split("?");
if(s.length < 2) return {};
return _.PrmsToObj(s[1].split("&"));
}

_.InitCie=function(){if(_.CIE==null){
  _.CIE={Vs:{},S:function(k,v){_.CIE.Vs[k]=v;DC.cookie=k+'='+v;}
    ,G:function(k){return _.CIE.Vs[k]},
    D:function(k){DC.cookie=k+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT";_.CIE.Vs[k]=null},Cpy:function(){return CpyO(_.CIE.Vs)}};
  _.CIE.Vs=_.PrmsToObj(DC.cookie.split(';'));
  }};

function MS(n){
 function pR(res){//parseResult
  var ret;
  try {
    ret = JSON.parse(res);
    if (typeof ret == $$U)
      ret = res;
    if(ret == 'true')
      ret = true;
    if (ret == 'false')
      ret = false;
    if (parseFloat(ret) == ret && typeof ret != "object")
      ret = parseFloat(ret);
  } catch(e){
    ret = res;
    }
  return ret;
  }
var s;
try{
  if(!(n in WN)||typeof(s=WN[n])==$$U)s=null;
  else{
    s.setItem('$','1');
    s.removeItem('$');
    }
  }
catch(err){s=null;}
//s=null;//Debug
var r;
if(s==null){
  function Incod(v){v[2]=v[1]+':'+JSON.stringify(v[0])}
  function SolveGrpData(g){
    var r='';
    if(g[0].length>0){
      for(i=0;i<g[0].length-1;++i)
        r+=g[0][i][2]+',';
      r+=g[0][g[0].length-1][2];
      }
    g[2]=r;
    };
  function AddToGrp(g,v){
    g[0].push(v);//Add to grp
    GrpChgd(v[3]=g[1]);
    alert("Move to "+g[1]);
    }
  function GrpChgd(g){
    SolveGrpData(g);
    while(g[2].length>=4000){
      var v2=g[0][g[0].length-1],g2,Fnd=false;
      _.AD(g[0],g[0].length-1);//remove from cur grp
      if(v2[2].length>3000)v2[2]=v2[2].split(0,3000);
      for(var j=0;j<G.length;++j)
        if((g2=G[j])[2].length+v2[2].length<4000){
          AddToGrp(g2,v2);
          Fnd=true;
          break;
          }
      if(!Fnd)
        AddToGrp(G[G.length]=[[],G.length,''],v2);
      alert("Grp "+g[1]);
      }
    //save to cie
    _.CIE.S(Bs+g[1],g[2]);
    };
  _.InitCie();
  var D={},G=[[[],0,'']],Bs='nwc_'+n.slice(0,1),v;
  for(var i=0;i<30;++i)
    if(v=_.CIE.G(Bs+i)){
      var g=(G[i]=[[],i,'']);
      v=v.split(',');
      for(var j=0;j<v.length;++j){
        var c = v[j].trim().split(':'),v2;
        if(c.length > 1){
          g[0].push(v2=D[c[0]]=[pR(c[1]),c[0],'',i]);
          Incod(v2)
          }
        }
      SolveGrpData(g);
      }
  r={//Data:D,Grps:G,//debug
    S:function(k,v){
      var d=D[k],g;
      if(d){if(d[0]==v)return;g=G[d[3]];d[0]=v}
      else{
        d=[v,k,'',G.length-1];
        D[k]=d;
        (g=G[d[3]])[0].push(d)
        }
      Incod(d);
      GrpChgd(g);
      }
    ,G:function(k){var v=D[k];return v?v[0]:null}
    ,D:function(k){var v=D[k],i,g;if(!v)return;delete D[k];g=G[v[3]];
      for(i=0;i<g[0].length;++i)
        if(g[0][i]==v){
          _.AD(g[0],i);
          GrpChgd(g);
          break}
      }
    ,A:function(){
      var r={};
      for(var j in D)
        if(j.length)
          r[j]=D[j][0];
      return r;
      }
    };
  }
else{
  r={S:function(key,v){
      var r = JSON.stringify(v);
      s.setItem(key,r); return v}
    ,G:function(key){
      var v=s.getItem(key);
      return pR(v)}
    ,D:function(key){s.removeItem(key)}
    ,A:function(){
      var r=[];
      for(var j in s)
        if(j.length)
          r[j]=pR(s.getItem(j))
      return r;
      }
    };
  }
return r;
}
_.D=MS("sessionStorage");
_.DL=MS("localStorage");

_.Go=function(n){//alert("redirect to "+n);
WN.location = n;
WN.navigate(n);
}

_.Sel={M:function(o,l){
  o.nwc$D=l;
  o.innerHTML="";
  var i;
  for(i=0;i<l.length;++i){
    var itm=l[i];
    var O=_.EC('option');
    O.nwc$D=itm;
    O.value=i;
    O.innerHTML=itm[0];
    o.appendChild(O);
    }}
,D:function(S,I){if(I>0&&I<S.length)S.remove(I)}
,E:function(S){for(var i=S.length;i>0;)S.remove(--i)}
,SI:function(S){for(var i=S.length;i>0;)if(S.options[--i].selected)return i;return-1}
,S:function(S){var i=_.Sel.SI(S);return i<0?NULL:S.options[i]}
};
;(function(){
var S=_.EC('select'),O=_.EC('option'),Norm=false;
try{S.add(O, null);Norm=true}// standards compliant; doesn't work in IE
catch(ex){S.add(O);}// IE only
if(Norm){
_.Sel.A=function(S,I){
var O=_.EC('option');
if(I<S.length) S.add(O,S.options[I]);
else S.add(O, null);
return O}
}else{
_.Sel.A=function(S,I){
var O=_.EC('option');
if(I<S.length) S.add(O,I);
else S.add(O);
return O}
}
})();

_.Indnt=function(o,t){
  var r="";t=t||"";
  if(typeof o == 'string')
    r="'"+o+"'";
  else if(typeof o=='object') {
    if(o instanceof Array){
      if(o.length==0)
        r='[]';
      else{
        r="["
        for(var n in o)
          r+=_.ToIndent(obj[n],t+"   ")+', ';
        r=r.slice(0,r.length-2)+']';
        }
    }else{
      r="\n"+t+"{\n";
      for(var n in o)
        r+=t+"'"+n+"': "+_.Indnt(obj[n],t+"   ")+',\n';
      r+=t+"}";
      }
  }else
    r= obj.toSource();
  return r;}

WN['_']=_;

var Init=function(){
 if(!_.DB){
  if(!(_.DB=DC.body)){
    setTimeout(function(){Init()},50);return;} //setTimeout(arguments.callee,9);
  de=DC.documentElement||_.DB;

if(de['clientWidth']){
_.wW=function(){return de.clientWidth};
_.wH=function(){return de.clientHeight}
}else{
_.wW=function(){return WN.innerWidth-18};
_.wH=function(){return WN.innerHeight-18}
}
if(WN['pageXOffset']){
_.sX=function(){return WN.pageXOffset};
_.sY=function(){return WN.pageYOffset}
}else{
_.sX=function(){return de.scrollLeft};
_.sY=function(){return de.scrollTop}
}

var Chk=_.EC('div');
_.EA(_.DB,Chk);

var ChkE=_.Ev.A(Chk,'click',function(evnt){
if("button" in evnt) _.Ev.Btn=function(e){return e.button;}
if(!'pageX' in evnt) _.Ev.XY=function(e){return [e.clientX + _.DB.scrollLeft + de.scrollLeft, e.clientY + _.DB.scrollTop + de.scrollTop];}
//function(e){e=e?e:WN.event;var so=/Safari|Opera/.test(navigator.userAgent),x=so?e.pageX:e.clientX,y=so?e.pageY:e.clientY;return DC.elementFromPoint(x,y);},
});
_.Ev.S(Chk, _.Ev.C('click'));
_.Ev.D(ChkE);
_.ER(_.DB,Chk);


  pp=_.EI(_.DB.firstChild,_.EC2('uv_pop'))
  ov=_.EI(_.DB.firstChild,_.EC2('uv_ov'))
  //_.Ev.A(ov,'click',_.xp);
  ov.style.filter='alpha(opacity=70)';

 //oc=function(){_.s(ov);_.sp('','hidden',ldMsg);_.pop(75,50);var m=new Image();m.onload=_.ol;m.title=this.title;m.src=this.href;return false;},
  //_.all(_.c("imag",'A'),function(m){m.onclick=_.oc;});//All class with drap to show pop of an image
  //_.all(_.c("drag"),_.DD);//All class with drap to handle drag and drop with no action
  //_.all(_.c("menu"),function(){_.all(_.t('LI'),_.hv);});//All class with menu to change LI taged kids to have hover
  //_.rsz();
  //_.Ev.A(WN,'resize',_.rsz);
  _.DoRun();
  }
 }

if(DC.addEventListener){DC.addEventListener("DOMContentLoaded",Init,false);}
else if(DC.all)setTimeout(Init,200);
else WN.onload=Init;

WN.nwcLoad =function(){}//just to handle the old stuff
})();//END










