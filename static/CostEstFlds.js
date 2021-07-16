//[Id,def,Min,Max,Type]
var Flds=[["main_floor_sf", 1000]
,["main_floor_height",{df:0,vals:[8,9,10,11,12],PostStr:"ft"}]
,["slab_on_grade",{df:0,vals:["Yes","No"]}]
,["porch_sf",0]
,["cov_porch_sf",0]
,["deck_sf",0]
,["covered_deck_sf",0]
,["roof_slope",{df:2,vals:[4,5,6,7,8,9,10,11,12],PostStr:":12"}]
,["building_class",{df:2,vals:[1,2,3,4,5]}]
,["basement",{df:1,vals:["Yes","No"]}]
,["basement_walkout",{df:1,vals:["Yes","No"]}]
,["basement_finished_sf",0]
,["basement_unfinished_sf",0]
,["basement_height",{df:0,vals:[8,9,10,11,12],PostStr:"ft"}]
,["garage",{df:0,vals:["Yes","No"]}]
,["garage_sf",0]
,["garage_height",{df:1,vals:[8,9,10,11,12],PostStr:"ft"}]
,["garage_cars",{df:1,vals:[1,2,3,4,5,6]}]
,["garage_suspended",{df:1,vals:["Yes","No"]}]
,["floor2",{df:1,vals:["Yes","No"]}]
,["floor2_sf",0]
,["floor2_height",{df:0,vals:[8,9,10,11,12],PostStr:"ft"}]
,["floor3",{df:1,vals:["Yes","No"]}]
,["floor3_sf",0]
,["floor3_height",{df:0,vals:[8,9,10,11,12],PostStr:"ft"}]
,["loft",{df:1,vals:["Yes","No"]}]
,["loft_sf",0]
,["loft_height",{df:0,vals:[8,9,10,11,12],PostStr:"ft"}]
,["kitchen",1]
,["kitchen_size",{df:0,vals:[1,2,3,4,5]}]
,["cabinet_grade",{df:0,vals:[1,2,3,4,5]}]
,["countertop",{df:0,vals:["Formica","Tile","Corian","Granite"]}]
,["kitchenettes",0]
,["bath_cust",0]
,["bath_cust_shower_sf",16,6,200]
,["bath_full",0]
,["bath_3_4",0]
,["bath_1_2",0]
,["bath_grade",{df:0,vals:["1","2","3","4","5"]}]
,["siding1",{df:0,vals:["Vinyl","Cement Board","Stucco","Brick","Synthetic Rock","Rock"]}]
,["siding2",{df:3,vals:["Vinyl","Cement Board","Stucco","Brick","Synthetic Rock","Rock"]}]
,["siding2_percent",0,0,100]
,["trim_grade",{df:0,vals:[1,2,3,4,5]}]
,["flooring_grade",{df:0,vals:[1,2,3,4,5]}]
,["septic",{df:1,vals:["Yes","No"]}]
,["propan_tanks",0,0,100,"int"]
,["fire_gas_vented",0,0,100,"int"]
,["fire_gas_unvented",0,0,100,"int"]
,["fire_brick",0,0,100,"int"]
,["fire_woodstove",0,0,100,"int"]
,["fire_protection",{df:1,vals:["Yes","No"]}]
];

var FrmFlds,PageRefs=["calculator","input2","input3","input4","input5","input6","input7","input8","input9","input10","estimator"];

var templink;

function SetUser()
{
    if (typeof(sessionStorage) !== 'undefined'){
        if(sessionStorage.user_id > 0 && sessionStorage.user_id < UserInfo.length){
            templink = sessionStorage.plan_link;
            var tempid = sessionStorage.userplan_id;
            var userID = sessionStorage.user_id;
				var t_header = '<div class="row user_header"><div class="col-xs-12 col-sm-6"><a href="'+UserInfo[userID][3]+'"><img class="img-responsive" src="'+UserInfo[userID][2]+
'" alt="'+UserInfo[userID][1]+'" style="max-height: '+UserInfo[userID][4]+';"/></a></div><div class="clearfix visible-xs"></div><div class="col-xs-12 col-sm-6 text-right"><a href='+ 
templink +'><h2> Return to Plan #'+ tempid.replace(/^"(.+(?="$))"$/, '$1') +'</h2></a></div></div>';
            document.getElementById("header").innerHTML= t_header;
        }
    }
}

function SetUserFooter()
{
    if (typeof(sessionStorage) !== 'undefined'){
        if(sessionStorage.user_id > 0 && sessionStorage.user_id < UserInfo.length){
            var userID = sessionStorage.user_id;
            document.getElementById('footer').innerHTML = '<h4>&copy; 2019 Cost To Build LLC <a style="float:right;" href="'+UserInfo[userID][3]+'" target="_blank">'+UserInfo[userID][1]+'</a></h4>';
            document.getElementById('power_by').innerHTML = '<a href="http://www.costtobuild.net"><b>Powered By CostToBuild.net</b></a>'
        }
    }
}

function Fld(n){
 this.id=n;
 this.Nm=n;
 }

function CheckAllFlds(UsrVs){
var i,d,f,o,Err="";
for(i=0;i<Flds.length;++i){
 f=Flds[i];
 if((UsrVs[f.Nm]=_.D.G(f.Nm))==null){
   _.D.S(f.Nm,UsrVs[f.Nm]=f.df);
   Err +=f.Nm+', '
   }
 else if(f.t <= 1){
  var v=+UsrVs[f.Nm];
  if(UsrVs[f.Nm]!=v){
   if(isNaN(v))
    v=f.df;
   _.D.S(f.Nm,UsrVs[f.Nm]=v);
   }
  else
   UsrVs[f.Nm]=v;
  }
 }
//if(Err.length>0) alert(Err);
}

var FieldsInited=false;
function InitFlds(){
if(FieldsInited)return;
FieldsInited=true;
var i,d,f,o;
var NFlds=[];
for(i=0;i<Flds.length;++i){
 d=Flds[i];
 NFlds[i]=f=new Fld(d[0]);
 f.df=d[1];
 f.Mn=0;
 f.Mx=100000;
 f.t=0;
 if(typeof f.df === 'object'){
   if((o=f.df) != null){
     if('vals' in o){//Radio
       var Ps;
       if('PostStr' in o)f.Ps=o.PostStr; else f.Ps="";
       f.Vals=o.vals;
       f.dx=o.df;
       f.df=f.Vals[f.dx];
       f.t=2;
       }
     }
   }
 else{
   if(d.length>2){
     f.Mn=d[2];
     if(d.length>3){
       f.Mx=d[3];
       if(d.length>4){
         f.t=d[4];
         if(typeof f.t === 'string' && f.t.length>0){
           if(f.t[0]=='N'||f.t[0]=='n')f.t=1;//Num
           else if(f.t[0]=='R'||f.t[0]=='r')f.t=2;//Radio
           else if(f.t[0]=='L'||f.t[0]=='l')f.t=3;//List
           else f.t=0;
           }
         }
       }
     }
   }
 }
Flds=NFlds;
}

function BgnFrm(Fs){//Array of [Id,def,Min,Max,Type]
 function MkRadioOnChk(e,f,j){e.onchange=function(){
   _.D.S(f.id,f.Vals[j]);};
   };
 function MkInptOnChk(e,f){
   e.onchange=function(){
   var v=+e.value;
   if(isNaN(v) || (v < f.Mn)){
     v=f.Mn;
     e.value=v;
     }
   else if(v > f.Mx){
     v=f.Mx;
     e.value=v;
     }
   _.D.S(f.id,v);
   };
  e.onclick=function(){
    e.select();     
    }
 };

var i,j,d,f,o;
FrmFlds= new Array();
for(i=0;i<Fs.length;++i){
 for(j=0;j<Flds.length;++j)
   if(Flds[j].Nm==Fs[i]){
     FrmFlds.push(f=Flds[j]); //found the field
     f.o = _.E(f.Nm);
     if(f.o!=null)
       if(f.t===2){
         f.o.innerHTML="";
         f.os=[];
         var j,er;
         for(j=0;j<f.Vals.length;++j){
           //if(typeof f.Vals[j] === 'string') s+="'"+f.Vals[j]+"'"; else s+=f.Vals[j];
           let e=_.EC("input");
           e.type='radio';
           e.name="ri"+i;
           e.value=f.Vals[j];
           //e.className='GrdSideGHdr';
           f.os.push(e);
           er=_.EC("span");
           er.appendChild(e);
           f.o.appendChild(er);
           MkRadioOnChk(e,f,j);
           e=_.EC("b");
           e.innerHTML=""+f.Vals[j]+f.Ps+" ";
           er.appendChild(e);
           }
         }
       else{
         MkInptOnChk(f.o,f);
         if(f.t===0)
           f.o.type='number';
         }
     break;
     }
 }
}

function DispFrm(){
var i,f,v,j;
for(i=0;i<Flds.length;++i){
 f=Flds[i];
 if(!(v=_.D.G(f.id))){ v=f.df;
  _.D.S(f.id,v);
  }
 if(f.o!=null)
   if(f.t==2){
     for(j=0;j<f.Vals.length;++j)
       if(f.Vals[j] == v){
         f.os[j].checked=true;
         break;
         }
     }
   else
     f.o.value=v;
 }
}
var PagFlds;
function InitFrm(Fs){PagFlds=Fs}
function ChkPageRefs(n){
 var i,p,a,Pasd=0;
 for(i=0;i<PageRefs.length;++i){
   if((p=PageRefs[i])==n){
     Pasd=1;
     _.D.S(n,1);
     }
   if(!(v=_.D.G(p))){
     for(let j=i;j<PageRefs.length;++j)
     _.E(PageRefs[j]).className += ' disabled';

     if(Pasd==0){
       var d=PageRefs[i>0?i-1:0];
       //alert("redirect to "+d);
       _.Go(d+".html");
       return false;
       }

     return true;
     }
   if((a=_.E(p))!=null)
     a.href=p+".html";
   }
 a=_.E("EndCalc");
 if(a!=null)
   a.href="estimator.html";
 return true;
 }

window.DocRun=window.DocRun||[];
window.DocRun.push(function(){
//alert("1");
var sys={};
//if(typeof InerOnLoad !== 'undefined')
InerOnLoad(sys);
if(ChkPageRefs(sys.PageName)){
InitFlds();
if(PagFlds)
BgnFrm(PagFlds);
DispFrm();
//_.SetAds(["ca-pub-5476550292839038",[["Ad1","7891919517",";width:728px;height:90px","<b>ad</b><br>"],["Ad2","8301571913",";width:728px;height:90px","<b>ad</b><br>"],["Ad3","7368712319",";width:970px;height:90px",""]]]);
}
});
/*
if basement!="Yes" [["basement_walkout","No"],["basement_finished_sf",0],["basement_unfinished_sf",0]]
if garage!="Yes" [["garage_suspended","No"],["garage_sf",0]]
if floor2!="Yes" [["floor2_sf",0]]
if floor3!="Yes" [["floor3_sf",0]]
if loft!="Yes" [["loft_sf",0]]
*/
