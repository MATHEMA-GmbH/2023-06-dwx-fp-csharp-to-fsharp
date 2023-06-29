(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();function Lt(e,n){const s=Object.create(null),a=e.split(",");for(let o=0;o<a.length;o++)s[a[o]]=!0;return n?o=>!!s[o.toLowerCase()]:o=>!!s[o]}function tn(e){if(ue(e)){const n={};for(let s=0;s<e.length;s++){const a=e[s],o=We(a)?yh(a):tn(a);if(o)for(const i in o)n[i]=o[i]}return n}else{if(We(e))return e;if(Ne(e))return e}}const kh=/;(?![^(]*\))/g,bh=/:([^]+)/,vh=/\/\*.*?\*\//gs;function yh(e){const n={};return e.replace(vh,"").split(kh).forEach(s=>{if(s){const a=s.split(bh);a.length>1&&(n[a[0].trim()]=a[1].trim())}}),n}function He(e){let n="";if(We(e))n=e;else if(ue(e))for(let s=0;s<e.length;s++){const a=He(e[s]);a&&(n+=a+" ")}else if(Ne(e))for(const s in e)e[s]&&(n+=s+" ");return n.trim()}function j(e){if(!e)return null;let{class:n,style:s}=e;return n&&!We(n)&&(e.class=He(n)),s&&(e.style=tn(s)),e}const wh="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",Sh="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",Ju=Lt(wh),xh=Lt(Sh),Eh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ch=Lt(Eh);function Xu(e){return!!e||e===""}const Cn=e=>We(e)?e:e==null?"":ue(e)||Ne(e)&&(e.toString===tp||!me(e.toString))?JSON.stringify(e,Qu,2):String(e),Qu=(e,n)=>n&&n.__v_isRef?Qu(e,n.value):Xt(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((s,[a,o])=>(s[`${a} =>`]=o,s),{})}:np(n)?{[`Set(${n.size})`]:[...n.values()]}:Ne(n)&&!ue(n)&&!sp(n)?String(n):n,Re=Object.freeze({}),Ss=Object.freeze([]),kn=()=>{},ep=()=>!1,$h=/^on[^a-z]/,Fa=e=>$h.test(e),fr=e=>e.startsWith("onUpdate:"),ze=Object.assign,Mi=(e,n)=>{const s=e.indexOf(n);s>-1&&e.splice(s,1)},Ph=Object.prototype.hasOwnProperty,Ee=(e,n)=>Ph.call(e,n),ue=Array.isArray,Xt=e=>Aa(e)==="[object Map]",np=e=>Aa(e)==="[object Set]",Oh=e=>Aa(e)==="[object RegExp]",me=e=>typeof e=="function",We=e=>typeof e=="string",Ii=e=>typeof e=="symbol",Ne=e=>e!==null&&typeof e=="object",Ni=e=>Ne(e)&&me(e.then)&&me(e.catch),tp=Object.prototype.toString,Aa=e=>tp.call(e),Di=e=>Aa(e).slice(8,-1),sp=e=>Aa(e)==="[object Object]",Li=e=>We(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,sr=Lt(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Th=Lt("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Dr=e=>{const n=Object.create(null);return s=>n[s]||(n[s]=e(s))},Fh=/-(\w)/g,Qn=Dr(e=>e.replace(Fh,(n,s)=>s?s.toUpperCase():"")),Ah=/\B([A-Z])/g,ut=Dr(e=>e.replace(Ah,"-$1").toLowerCase()),rs=Dr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Vt=Dr(e=>e?`on${rs(e)}`:""),fa=(e,n)=>!Object.is(e,n),wt=(e,n)=>{for(let s=0;s<e.length;s++)e[s](n)},hr=(e,n,s)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value:s})},jo=e=>{const n=parseFloat(e);return isNaN(n)?e:n},Mh=e=>{const n=We(e)?Number(e):NaN;return isNaN(n)?e:n};let Nl;const ap=()=>Nl||(Nl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function mr(e,...n){console.warn(`[Vue warn] ${e}`,...n)}let xn;class rp{constructor(n=!1){this.detached=n,this._active=!0,this.effects=[],this.cleanups=[],this.parent=xn,!n&&xn&&(this.index=(xn.scopes||(xn.scopes=[])).push(this)-1)}get active(){return this._active}run(n){if(this._active){const s=xn;try{return xn=this,n()}finally{xn=s}}else mr("cannot run an inactive effect scope.")}on(){xn=this}off(){xn=this.parent}stop(n){if(this._active){let s,a;for(s=0,a=this.effects.length;s<a;s++)this.effects[s].stop();for(s=0,a=this.cleanups.length;s<a;s++)this.cleanups[s]();if(this.scopes)for(s=0,a=this.scopes.length;s<a;s++)this.scopes[s].stop(!0);if(!this.detached&&this.parent&&!n){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function Ih(e){return new rp(e)}function Nh(e,n=xn){n&&n.active&&n.effects.push(e)}function ji(){return xn}function op(e){xn?xn.cleanups.push(e):mr("onScopeDispose() is called when there is no active effect scope to be associated with.")}const Ri=e=>{const n=new Set(e);return n.w=0,n.n=0,n},ip=e=>(e.w&Mt)>0,lp=e=>(e.n&Mt)>0,Dh=({deps:e})=>{if(e.length)for(let n=0;n<e.length;n++)e[n].w|=Mt},Lh=e=>{const{deps:n}=e;if(n.length){let s=0;for(let a=0;a<n.length;a++){const o=n[a];ip(o)&&!lp(o)?o.delete(e):n[s++]=o,o.w&=~Mt,o.n&=~Mt}n.length=s}},gr=new WeakMap;let Js=0,Mt=1;const Ro=30;let pn;const Qt=Symbol("iterate"),Bo=Symbol("Map key iterate");class Bi{constructor(n,s=null,a){this.fn=n,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,Nh(this,a)}run(){if(!this.active)return this.fn();let n=pn,s=$t;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=pn,pn=this,$t=!0,Mt=1<<++Js,Js<=Ro?Dh(this):Dl(this),this.fn()}finally{Js<=Ro&&Lh(this),Mt=1<<--Js,pn=this.parent,$t=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){pn===this?this.deferStop=!0:this.active&&(Dl(this),this.onStop&&this.onStop(),this.active=!1)}}function Dl(e){const{deps:n}=e;if(n.length){for(let s=0;s<n.length;s++)n[s].delete(e);n.length=0}}let $t=!0;const cp=[];function is(){cp.push($t),$t=!1}function ls(){const e=cp.pop();$t=e===void 0?!0:e}function vn(e,n,s){if($t&&pn){let a=gr.get(e);a||gr.set(e,a=new Map);let o=a.get(s);o||a.set(s,o=Ri()),up(o,{effect:pn,target:e,type:n,key:s})}}function up(e,n){let s=!1;Js<=Ro?lp(e)||(e.n|=Mt,s=!ip(e)):s=!e.has(pn),s&&(e.add(pn),pn.deps.push(e),pn.onTrack&&pn.onTrack(Object.assign({effect:pn},n)))}function pt(e,n,s,a,o,i){const l=gr.get(e);if(!l)return;let c=[];if(n==="clear")c=[...l.values()];else if(s==="length"&&ue(e)){const p=Number(a);l.forEach((d,f)=>{(f==="length"||f>=p)&&c.push(d)})}else switch(s!==void 0&&c.push(l.get(s)),n){case"add":ue(e)?Li(s)&&c.push(l.get("length")):(c.push(l.get(Qt)),Xt(e)&&c.push(l.get(Bo)));break;case"delete":ue(e)||(c.push(l.get(Qt)),Xt(e)&&c.push(l.get(Bo)));break;case"set":Xt(e)&&c.push(l.get(Qt));break}const u={target:e,type:n,key:s,newValue:a,oldValue:o,oldTarget:i};if(c.length===1)c[0]&&qo(c[0],u);else{const p=[];for(const d of c)d&&p.push(...d);qo(Ri(p),u)}}function qo(e,n){const s=ue(e)?e:[...e];for(const a of s)a.computed&&Ll(a,n);for(const a of s)a.computed||Ll(a,n)}function Ll(e,n){(e!==pn||e.allowRecurse)&&(e.onTrigger&&e.onTrigger(ze({effect:e},n)),e.scheduler?e.scheduler():e.run())}function jh(e,n){var s;return(s=gr.get(e))===null||s===void 0?void 0:s.get(n)}const Rh=Lt("__proto__,__v_isRef,__isVue"),pp=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ii)),Bh=Lr(),qh=Lr(!1,!0),Wh=Lr(!0),Vh=Lr(!0,!0),jl=Hh();function Hh(){const e={};return["includes","indexOf","lastIndexOf"].forEach(n=>{e[n]=function(...s){const a=ge(this);for(let i=0,l=this.length;i<l;i++)vn(a,"get",i+"");const o=a[n](...s);return o===-1||o===!1?a[n](...s.map(ge)):o}}),["push","pop","shift","unshift","splice"].forEach(n=>{e[n]=function(...s){is();const a=ge(this)[n].apply(this,s);return ls(),a}}),e}function zh(e){const n=ge(this);return vn(n,"has",e),n.hasOwnProperty(e)}function Lr(e=!1,n=!1){return function(a,o,i){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return n;if(o==="__v_raw"&&i===(e?n?bp:kp:n?_p:gp).get(a))return a;const l=ue(a);if(!e){if(l&&Ee(jl,o))return Reflect.get(jl,o,i);if(o==="hasOwnProperty")return zh}const c=Reflect.get(a,o,i);return(Ii(o)?pp.has(o):Rh(o))||(e||vn(a,"get",o),n)?c:Fe(c)?l&&Li(o)?c:c.value:Ne(c)?e?Et(c):Ve(c):c}}const Uh=dp(),Kh=dp(!0);function dp(e=!1){return function(s,a,o,i){let l=s[a];if(It(l)&&Fe(l)&&!Fe(o))return!1;if(!e&&(!_r(o)&&!It(o)&&(l=ge(l),o=ge(o)),!ue(s)&&Fe(l)&&!Fe(o)))return l.value=o,!0;const c=ue(s)&&Li(a)?Number(a)<s.length:Ee(s,a),u=Reflect.set(s,a,o,i);return s===ge(i)&&(c?fa(o,l)&&pt(s,"set",a,o,l):pt(s,"add",a,o)),u}}function Gh(e,n){const s=Ee(e,n),a=e[n],o=Reflect.deleteProperty(e,n);return o&&s&&pt(e,"delete",n,void 0,a),o}function Zh(e,n){const s=Reflect.has(e,n);return(!Ii(n)||!pp.has(n))&&vn(e,"has",n),s}function Yh(e){return vn(e,"iterate",ue(e)?"length":Qt),Reflect.ownKeys(e)}const fp={get:Bh,set:Uh,deleteProperty:Gh,has:Zh,ownKeys:Yh},hp={get:Wh,set(e,n){return mr(`Set operation on key "${String(n)}" failed: target is readonly.`,e),!0},deleteProperty(e,n){return mr(`Delete operation on key "${String(n)}" failed: target is readonly.`,e),!0}},Jh=ze({},fp,{get:qh,set:Kh}),Xh=ze({},hp,{get:Vh}),qi=e=>e,jr=e=>Reflect.getPrototypeOf(e);function Ha(e,n,s=!1,a=!1){e=e.__v_raw;const o=ge(e),i=ge(n);s||(n!==i&&vn(o,"get",n),vn(o,"get",i));const{has:l}=jr(o),c=a?qi:s?Wi:ha;if(l.call(o,n))return c(e.get(n));if(l.call(o,i))return c(e.get(i));e!==o&&e.get(n)}function za(e,n=!1){const s=this.__v_raw,a=ge(s),o=ge(e);return n||(e!==o&&vn(a,"has",e),vn(a,"has",o)),e===o?s.has(e):s.has(e)||s.has(o)}function Ua(e,n=!1){return e=e.__v_raw,!n&&vn(ge(e),"iterate",Qt),Reflect.get(e,"size",e)}function Rl(e){e=ge(e);const n=ge(this);return jr(n).has.call(n,e)||(n.add(e),pt(n,"add",e,e)),this}function Bl(e,n){n=ge(n);const s=ge(this),{has:a,get:o}=jr(s);let i=a.call(s,e);i?mp(s,a,e):(e=ge(e),i=a.call(s,e));const l=o.call(s,e);return s.set(e,n),i?fa(n,l)&&pt(s,"set",e,n,l):pt(s,"add",e,n),this}function ql(e){const n=ge(this),{has:s,get:a}=jr(n);let o=s.call(n,e);o?mp(n,s,e):(e=ge(e),o=s.call(n,e));const i=a?a.call(n,e):void 0,l=n.delete(e);return o&&pt(n,"delete",e,void 0,i),l}function Wl(){const e=ge(this),n=e.size!==0,s=Xt(e)?new Map(e):new Set(e),a=e.clear();return n&&pt(e,"clear",void 0,void 0,s),a}function Ka(e,n){return function(a,o){const i=this,l=i.__v_raw,c=ge(l),u=n?qi:e?Wi:ha;return!e&&vn(c,"iterate",Qt),l.forEach((p,d)=>a.call(o,u(p),u(d),i))}}function Ga(e,n,s){return function(...a){const o=this.__v_raw,i=ge(o),l=Xt(i),c=e==="entries"||e===Symbol.iterator&&l,u=e==="keys"&&l,p=o[e](...a),d=s?qi:n?Wi:ha;return!n&&vn(i,"iterate",u?Bo:Qt),{next(){const{value:f,done:h}=p.next();return h?{value:f,done:h}:{value:c?[d(f[0]),d(f[1])]:d(f),done:h}},[Symbol.iterator](){return this}}}}function mt(e){return function(...n){{const s=n[0]?`on key "${n[0]}" `:"";console.warn(`${rs(e)} operation ${s}failed: target is readonly.`,ge(this))}return e==="delete"?!1:this}}function Qh(){const e={get(i){return Ha(this,i)},get size(){return Ua(this)},has:za,add:Rl,set:Bl,delete:ql,clear:Wl,forEach:Ka(!1,!1)},n={get(i){return Ha(this,i,!1,!0)},get size(){return Ua(this)},has:za,add:Rl,set:Bl,delete:ql,clear:Wl,forEach:Ka(!1,!0)},s={get(i){return Ha(this,i,!0)},get size(){return Ua(this,!0)},has(i){return za.call(this,i,!0)},add:mt("add"),set:mt("set"),delete:mt("delete"),clear:mt("clear"),forEach:Ka(!0,!1)},a={get(i){return Ha(this,i,!0,!0)},get size(){return Ua(this,!0)},has(i){return za.call(this,i,!0)},add:mt("add"),set:mt("set"),delete:mt("delete"),clear:mt("clear"),forEach:Ka(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Ga(i,!1,!1),s[i]=Ga(i,!0,!1),n[i]=Ga(i,!1,!0),a[i]=Ga(i,!0,!0)}),[e,s,n,a]}const[em,nm,tm,sm]=Qh();function Rr(e,n){const s=n?e?sm:tm:e?nm:em;return(a,o,i)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?a:Reflect.get(Ee(s,o)&&o in a?s:a,o,i)}const am={get:Rr(!1,!1)},rm={get:Rr(!1,!0)},om={get:Rr(!0,!1)},im={get:Rr(!0,!0)};function mp(e,n,s){const a=ge(s);if(a!==s&&n.call(e,a)){const o=Di(e);console.warn(`Reactive ${o} contains both the raw and reactive versions of the same object${o==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const gp=new WeakMap,_p=new WeakMap,kp=new WeakMap,bp=new WeakMap;function lm(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function cm(e){return e.__v_skip||!Object.isExtensible(e)?0:lm(Di(e))}function Ve(e){return It(e)?e:Br(e,!1,fp,am,gp)}function um(e){return Br(e,!1,Jh,rm,_p)}function Et(e){return Br(e,!0,hp,om,kp)}function ys(e){return Br(e,!0,Xh,im,bp)}function Br(e,n,s,a,o){if(!Ne(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(n&&e.__v_isReactive))return e;const i=o.get(e);if(i)return i;const l=cm(e);if(l===0)return e;const c=new Proxy(e,l===2?a:s);return o.set(e,c),c}function es(e){return It(e)?es(e.__v_raw):!!(e&&e.__v_isReactive)}function It(e){return!!(e&&e.__v_isReadonly)}function _r(e){return!!(e&&e.__v_isShallow)}function kr(e){return es(e)||It(e)}function ge(e){const n=e&&e.__v_raw;return n?ge(n):e}function qr(e){return hr(e,"__v_skip",!0),e}const ha=e=>Ne(e)?Ve(e):e,Wi=e=>Ne(e)?Et(e):e;function Vi(e){$t&&pn&&(e=ge(e),up(e.dep||(e.dep=Ri()),{target:e,type:"get",key:"value"}))}function Hi(e,n){e=ge(e);const s=e.dep;s&&qo(s,{target:e,type:"set",key:"value",newValue:n})}function Fe(e){return!!(e&&e.__v_isRef===!0)}function se(e){return vp(e,!1)}function et(e){return vp(e,!0)}function vp(e,n){return Fe(e)?e:new pm(e,n)}class pm{constructor(n,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?n:ge(n),this._value=s?n:ha(n)}get value(){return Vi(this),this._value}set value(n){const s=this.__v_isShallow||_r(n)||It(n);n=s?n:ge(n),fa(n,this._rawValue)&&(this._rawValue=n,this._value=s?n:ha(n),Hi(this,n))}}function E(e){return Fe(e)?e.value:e}const dm={get:(e,n,s)=>E(Reflect.get(e,n,s)),set:(e,n,s,a)=>{const o=e[n];return Fe(o)&&!Fe(s)?(o.value=s,!0):Reflect.set(e,n,s,a)}};function yp(e){return es(e)?e:new Proxy(e,dm)}class fm{constructor(n){this.dep=void 0,this.__v_isRef=!0;const{get:s,set:a}=n(()=>Vi(this),()=>Hi(this));this._get=s,this._set=a}get value(){return this._get()}set value(n){this._set(n)}}function wp(e){return new fm(e)}function hm(e){kr(e)||console.warn("toRefs() expects a reactive object but received a plain one.");const n=ue(e)?new Array(e.length):{};for(const s in e)n[s]=gm(e,s);return n}class mm{constructor(n,s,a){this._object=n,this._key=s,this._defaultValue=a,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}get dep(){return jh(ge(this._object),this._key)}}function gm(e,n,s){const a=e[n];return Fe(a)?a:new mm(e,n,s)}var Sp;class _m{constructor(n,s,a,o){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this[Sp]=!1,this._dirty=!0,this.effect=new Bi(n,()=>{this._dirty||(this._dirty=!0,Hi(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=a}get value(){const n=ge(this);return Vi(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}Sp="__v_isReadonly";function km(e,n,s=!1){let a,o;const i=me(e);i?(a=e,o=()=>{console.warn("Write operation failed: computed value is readonly")}):(a=e.get,o=e.set);const l=new _m(a,o,i||!o,s);return n&&!s&&(l.effect.onTrack=n.onTrack,l.effect.onTrigger=n.onTrigger),l}const ns=[];function ar(e){ns.push(e)}function rr(){ns.pop()}function V(e,...n){is();const s=ns.length?ns[ns.length-1].component:null,a=s&&s.appContext.config.warnHandler,o=bm();if(a)ct(a,s,11,[e+n.join(""),s&&s.proxy,o.map(({vnode:i})=>`at <${Jr(s,i.type)}>`).join(`
`),o]);else{const i=[`[Vue warn]: ${e}`,...n];o.length&&i.push(`
`,...vm(o)),console.warn(...i)}ls()}function bm(){let e=ns[ns.length-1];if(!e)return[];const n=[];for(;e;){const s=n[0];s&&s.vnode===e?s.recurseCount++:n.push({vnode:e,recurseCount:0});const a=e.component&&e.component.parent;e=a&&a.vnode}return n}function vm(e){const n=[];return e.forEach((s,a)=>{n.push(...a===0?[]:[`
`],...ym(s))}),n}function ym({vnode:e,recurseCount:n}){const s=n>0?`... (${n} recursive calls)`:"",a=e.component?e.component.parent==null:!1,o=` at <${Jr(e.component,e.type,a)}`,i=">"+s;return e.props?[o,...wm(e.props),i]:[o+i]}function wm(e){const n=[],s=Object.keys(e);return s.slice(0,3).forEach(a=>{n.push(...xp(a,e[a]))}),s.length>3&&n.push(" ..."),n}function xp(e,n,s){return We(n)?(n=JSON.stringify(n),s?n:[`${e}=${n}`]):typeof n=="number"||typeof n=="boolean"||n==null?s?n:[`${e}=${n}`]:Fe(n)?(n=xp(e,ge(n.value),!0),s?n:[`${e}=Ref<`,n,">"]):me(n)?[`${e}=fn${n.name?`<${n.name}>`:""}`]:(n=ge(n),s?n:[`${e}=`,n])}function Sm(e,n){e!==void 0&&(typeof e!="number"?V(`${n} is not a valid number - got ${JSON.stringify(e)}.`):isNaN(e)&&V(`${n} is NaN - the duration expression might be incorrect.`))}const zi={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function ct(e,n,s,a){let o;try{o=a?e(...a):e()}catch(i){Wr(i,n,s)}return o}function Dn(e,n,s,a){if(me(e)){const i=ct(e,n,s,a);return i&&Ni(i)&&i.catch(l=>{Wr(l,n,s)}),i}const o=[];for(let i=0;i<e.length;i++)o.push(Dn(e[i],n,s,a));return o}function Wr(e,n,s,a=!0){const o=n?n.vnode:null;if(n){let i=n.parent;const l=n.proxy,c=zi[s];for(;i;){const p=i.ec;if(p){for(let d=0;d<p.length;d++)if(p[d](e,l,c)===!1)return}i=i.parent}const u=n.appContext.config.errorHandler;if(u){ct(u,null,10,[e,l,c]);return}}xm(e,s,o,a)}function xm(e,n,s,a=!0){{const o=zi[n];if(s&&ar(s),V(`Unhandled error${o?` during execution of ${o}`:""}`),s&&rr(),a)throw e;console.error(e)}}let ma=!1,Wo=!1;const an=[];let Zn=0;const xs=[];let Gn=null,bt=0;const Ep=Promise.resolve();let Ui=null;const Em=100;function nn(e){const n=Ui||Ep;return e?n.then(this?e.bind(this):e):n}function Cm(e){let n=Zn+1,s=an.length;for(;n<s;){const a=n+s>>>1;ga(an[a])<e?n=a+1:s=a}return n}function Vr(e){(!an.length||!an.includes(e,ma&&e.allowRecurse?Zn+1:Zn))&&(e.id==null?an.push(e):an.splice(Cm(e.id),0,e),Cp())}function Cp(){!ma&&!Wo&&(Wo=!0,Ui=Ep.then(Op))}function $m(e){const n=an.indexOf(e);n>Zn&&an.splice(n,1)}function $p(e){ue(e)?xs.push(...e):(!Gn||!Gn.includes(e,e.allowRecurse?bt+1:bt))&&xs.push(e),Cp()}function Vl(e,n=ma?Zn+1:0){for(e=e||new Map;n<an.length;n++){const s=an[n];if(s&&s.pre){if(Ki(e,s))continue;an.splice(n,1),n--,s()}}}function Pp(e){if(xs.length){const n=[...new Set(xs)];if(xs.length=0,Gn){Gn.push(...n);return}for(Gn=n,e=e||new Map,Gn.sort((s,a)=>ga(s)-ga(a)),bt=0;bt<Gn.length;bt++)Ki(e,Gn[bt])||Gn[bt]();Gn=null,bt=0}}const ga=e=>e.id==null?1/0:e.id,Pm=(e,n)=>{const s=ga(e)-ga(n);if(s===0){if(e.pre&&!n.pre)return-1;if(n.pre&&!e.pre)return 1}return s};function Op(e){Wo=!1,ma=!0,e=e||new Map,an.sort(Pm);const n=s=>Ki(e,s);try{for(Zn=0;Zn<an.length;Zn++){const s=an[Zn];if(s&&s.active!==!1){if(n(s))continue;ct(s,null,14)}}}finally{Zn=0,an.length=0,Pp(e),ma=!1,Ui=null,(an.length||xs.length)&&Op(e)}}function Ki(e,n){if(!e.has(n))e.set(n,1);else{const s=e.get(n);if(s>Em){const a=n.ownerInstance,o=a&&va(a.type);return V(`Maximum recursive updates exceeded${o?` in component <${o}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else e.set(n,s+1)}}let Pt=!1;const ks=new Set;ap().__VUE_HMR_RUNTIME__={createRecord:ro(Tp),rerender:ro(Fm),reload:ro(Am)};const os=new Map;function Om(e){const n=e.type.__hmrId;let s=os.get(n);s||(Tp(n,e.type),s=os.get(n)),s.instances.add(e)}function Tm(e){os.get(e.type.__hmrId).instances.delete(e)}function Tp(e,n){return os.has(e)?!1:(os.set(e,{initialDef:ea(n),instances:new Set}),!0)}function ea(e){return ld(e)?e.__vccOpts:e}function Fm(e,n){const s=os.get(e);s&&(s.initialDef.render=n,[...s.instances].forEach(a=>{n&&(a.render=n,ea(a.type).render=n),a.renderCache=[],Pt=!0,a.update(),Pt=!1}))}function Am(e,n){const s=os.get(e);if(!s)return;n=ea(n),Hl(s.initialDef,n);const a=[...s.instances];for(const o of a){const i=ea(o.type);ks.has(i)||(i!==s.initialDef&&Hl(i,n),ks.add(i)),o.appContext.optionsCache.delete(o.type),o.ceReload?(ks.add(i),o.ceReload(n.styles),ks.delete(i)):o.parent?Vr(o.parent.update):o.appContext.reload?o.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}$p(()=>{for(const o of a)ks.delete(ea(o.type))})}function Hl(e,n){ze(e,n);for(const s in e)s!=="__file"&&!(s in n)&&delete e[s]}function ro(e){return(n,s)=>{try{return e(n,s)}catch(a){console.error(a),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let Yn,Xs=[],Vo=!1;function Ma(e,...n){Yn?Yn.emit(e,...n):Vo||Xs.push({event:e,args:n})}function Fp(e,n){var s,a;Yn=e,Yn?(Yn.enabled=!0,Xs.forEach(({event:o,args:i})=>Yn.emit(o,...i)),Xs=[]):typeof window<"u"&&window.HTMLElement&&!(!((a=(s=window.navigator)===null||s===void 0?void 0:s.userAgent)===null||a===void 0)&&a.includes("jsdom"))?((n.__VUE_DEVTOOLS_HOOK_REPLAY__=n.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{Fp(i,n)}),setTimeout(()=>{Yn||(n.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Vo=!0,Xs=[])},3e3)):(Vo=!0,Xs=[])}function Mm(e,n){Ma("app:init",e,n,{Fragment:Ae,Text:La,Comment:Qe,Static:or})}function Im(e){Ma("app:unmount",e)}const Ho=Gi("component:added"),Ap=Gi("component:updated"),Nm=Gi("component:removed"),Dm=e=>{Yn&&typeof Yn.cleanupBuffer=="function"&&!Yn.cleanupBuffer(e)&&Nm(e)};function Gi(e){return n=>{Ma(e,n.appContext.app,n.uid,n.parent?n.parent.uid:void 0,n)}}const Lm=Mp("perf:start"),jm=Mp("perf:end");function Mp(e){return(n,s,a)=>{Ma(e,n.appContext.app,n.uid,n,s,a)}}function Rm(e,n,s){Ma("component:emit",e.appContext.app,e,n,s)}function Bm(e,n,...s){if(e.isUnmounted)return;const a=e.vnode.props||Re;{const{emitsOptions:d,propsOptions:[f]}=e;if(d)if(!(n in d))(!f||!(Vt(n)in f))&&V(`Component emitted event "${n}" but it is neither declared in the emits option nor as an "${Vt(n)}" prop.`);else{const h=d[n];me(h)&&(h(...s)||V(`Invalid event arguments: event validation failed for event "${n}".`))}}let o=s;const i=n.startsWith("update:"),l=i&&n.slice(7);if(l&&l in a){const d=`${l==="modelValue"?"model":l}Modifiers`,{number:f,trim:h}=a[d]||Re;h&&(o=s.map(m=>We(m)?m.trim():m)),f&&(o=s.map(jo))}Rm(e,n,o);{const d=n.toLowerCase();d!==n&&a[Vt(d)]&&V(`Event "${d}" is emitted in component ${Jr(e,e.type)} but the handler is registered for "${n}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${ut(n)}" instead of "${n}".`)}let c,u=a[c=Vt(n)]||a[c=Vt(Qn(n))];!u&&i&&(u=a[c=Vt(ut(n))]),u&&Dn(u,e,6,o);const p=a[c+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,Dn(p,e,6,o)}}function Ip(e,n,s=!1){const a=n.emitsCache,o=a.get(e);if(o!==void 0)return o;const i=e.emits;let l={},c=!1;if(!me(e)){const u=p=>{const d=Ip(p,n,!0);d&&(c=!0,ze(l,d))};!s&&n.mixins.length&&n.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!i&&!c?(Ne(e)&&a.set(e,null),null):(ue(i)?i.forEach(u=>l[u]=null):ze(l,i),Ne(e)&&a.set(e,l),l)}function Hr(e,n){return!e||!Fa(n)?!1:(n=n.slice(2).replace(/Once$/,""),Ee(e,n[0].toLowerCase()+n.slice(1))||Ee(e,ut(n))||Ee(e,n))}let Xe=null,zr=null;function br(e){const n=Xe;return Xe=e,zr=e&&e.type.__scopeId||null,n}function qm(e){zr=e}function Wm(){zr=null}function w(e,n=Xe,s){if(!n||e._n)return e;const a=(...o)=>{a._d&&sc(-1);const i=br(n);let l;try{l=e(...o)}finally{br(i),a._d&&sc(1)}return Ap(n),l};return a._n=!0,a._c=!0,a._d=!0,a}let zo=!1;function vr(){zo=!0}function oo(e){const{type:n,vnode:s,proxy:a,withProxy:o,props:i,propsOptions:[l],slots:c,attrs:u,emit:p,render:d,renderCache:f,data:h,setupState:m,ctx:g,inheritAttrs:b}=e;let y,$;const S=br(e);zo=!1;try{if(s.shapeFlag&4){const R=o||a;y=Vn(d.call(R,R,f,i,m,h,g)),$=u}else{const R=n;u===i&&vr(),y=Vn(R.length>1?R(i,{get attrs(){return vr(),u},slots:c,emit:p}):R(i,null)),$=n.props?u:Hm(u)}}catch(R){ta.length=0,Wr(R,e,1),y=N(Qe)}let x=y,P;if(y.patchFlag>0&&y.patchFlag&2048&&([x,P]=Vm(y)),$&&b!==!1){const R=Object.keys($),{shapeFlag:H}=x;if(R.length){if(H&7)l&&R.some(fr)&&($=zm($,l)),x=zn(x,$);else if(!zo&&x.type!==Qe){const Y=Object.keys(u),D=[],G=[];for(let ae=0,fe=Y.length;ae<fe;ae++){const Q=Y[ae];Fa(Q)?fr(Q)||D.push(Q[2].toLowerCase()+Q.slice(3)):G.push(Q)}G.length&&V(`Extraneous non-props attributes (${G.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),D.length&&V(`Extraneous non-emits event listeners (${D.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return s.dirs&&(zl(x)||V("Runtime directive used on component with non-element root node. The directives will not function as intended."),x=zn(x),x.dirs=x.dirs?x.dirs.concat(s.dirs):s.dirs),s.transition&&(zl(x)||V("Component inside <Transition> renders non-element root node that cannot be animated."),x.transition=s.transition),P?P(x):y=x,br(S),y}const Vm=e=>{const n=e.children,s=e.dynamicChildren,a=Np(n);if(!a)return[e,void 0];const o=n.indexOf(a),i=s?s.indexOf(a):-1,l=c=>{n[o]=c,s&&(i>-1?s[i]=c:c.patchFlag>0&&(e.dynamicChildren=[...s,c]))};return[Vn(a),l]};function Np(e){let n;for(let s=0;s<e.length;s++){const a=e[s];if(Nt(a)){if(a.type!==Qe||a.children==="v-if"){if(n)return;n=a}}else return}return n}const Hm=e=>{let n;for(const s in e)(s==="class"||s==="style"||Fa(s))&&((n||(n={}))[s]=e[s]);return n},zm=(e,n)=>{const s={};for(const a in e)(!fr(a)||!(a.slice(9)in n))&&(s[a]=e[a]);return s},zl=e=>e.shapeFlag&7||e.type===Qe;function Um(e,n,s){const{props:a,children:o,component:i}=e,{props:l,children:c,patchFlag:u}=n,p=i.emitsOptions;if((o||c)&&Pt||n.dirs||n.transition)return!0;if(s&&u>=0){if(u&1024)return!0;if(u&16)return a?Ul(a,l,p):!!l;if(u&8){const d=n.dynamicProps;for(let f=0;f<d.length;f++){const h=d[f];if(l[h]!==a[h]&&!Hr(p,h))return!0}}}else return(o||c)&&(!c||!c.$stable)?!0:a===l?!1:a?l?Ul(a,l,p):!0:!!l;return!1}function Ul(e,n,s){const a=Object.keys(n);if(a.length!==Object.keys(e).length)return!0;for(let o=0;o<a.length;o++){const i=a[o];if(n[i]!==e[i]&&!Hr(s,i))return!0}return!1}function Km({vnode:e,parent:n},s){for(;n&&n.subTree===e;)(e=n.vnode).el=s,n=n.parent}const Dp=e=>e.__isSuspense;function Gm(e,n){n&&n.pendingBranch?ue(e)?n.effects.push(...e):n.effects.push(e):$p(e)}function En(e,n){if(!Ue)V("provide() can only be used inside setup().");else{let s=Ue.provides;const a=Ue.parent&&Ue.parent.provides;a===s&&(s=Ue.provides=Object.create(a)),s[e]=n}}function C(e,n,s=!1){const a=Ue||Xe;if(a){const o=a.parent==null?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return s&&me(n)?n.call(a.proxy):n;V(`injection "${String(e)}" not found.`)}else V("inject() can only be used inside setup() or functional components.")}function cs(e,n){return Zi(e,null,n)}const Za={};function we(e,n,s){return me(n)||V("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),Zi(e,n,s)}function Zi(e,n,{immediate:s,deep:a,flush:o,onTrack:i,onTrigger:l}=Re){n||(s!==void 0&&V('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),a!==void 0&&V('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const c=P=>{V("Invalid watch source: ",P,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},u=ji()===(Ue==null?void 0:Ue.scope)?Ue:null;let p,d=!1,f=!1;if(Fe(e)?(p=()=>e.value,d=_r(e)):es(e)?(p=()=>e,a=!0):ue(e)?(f=!0,d=e.some(P=>es(P)||_r(P)),p=()=>e.map(P=>{if(Fe(P))return P.value;if(es(P))return Zt(P);if(me(P))return ct(P,u,2);c(P)})):me(e)?n?p=()=>ct(e,u,2):p=()=>{if(!(u&&u.isUnmounted))return h&&h(),Dn(e,u,3,[m])}:(p=kn,c(e)),n&&a){const P=p;p=()=>Zt(P())}let h,m=P=>{h=S.onStop=()=>{ct(P,u,4)}},g;if(ba)if(m=kn,n?s&&Dn(n,u,3,[p(),f?[]:void 0,m]):p(),o==="sync"){const P=e_();g=P.__watcherHandles||(P.__watcherHandles=[])}else return kn;let b=f?new Array(e.length).fill(Za):Za;const y=()=>{if(S.active)if(n){const P=S.run();(a||d||(f?P.some((R,H)=>fa(R,b[H])):fa(P,b)))&&(h&&h(),Dn(n,u,3,[P,b===Za?void 0:f&&b[0]===Za?[]:b,m]),b=P)}else S.run()};y.allowRecurse=!!n;let $;o==="sync"?$=y:o==="post"?$=()=>en(y,u&&u.suspense):(y.pre=!0,u&&(y.id=u.uid),$=()=>Vr(y));const S=new Bi(p,$);S.onTrack=i,S.onTrigger=l,n?s?y():b=S.run():o==="post"?en(S.run.bind(S),u&&u.suspense):S.run();const x=()=>{S.stop(),u&&u.scope&&Mi(u.scope.effects,S)};return g&&g.push(x),x}function Zm(e,n,s){const a=this.proxy,o=We(e)?e.includes(".")?Lp(a,e):()=>a[e]:e.bind(a,a);let i;me(n)?i=n:(i=n.handler,s=n);const l=Ue;Fs(this);const c=Zi(o,i.bind(a),s);return l?Fs(l):ss(),c}function Lp(e,n){const s=n.split(".");return()=>{let a=e;for(let o=0;o<s.length&&a;o++)a=a[s[o]];return a}}function Zt(e,n){if(!Ne(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),Fe(e))Zt(e.value,n);else if(ue(e))for(let s=0;s<e.length;s++)Zt(e[s],n);else if(np(e)||Xt(e))e.forEach(s=>{Zt(s,n)});else if(sp(e))for(const s in e)Zt(e[s],n);return e}function jp(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return us(()=>{e.isMounted=!0}),Na(()=>{e.isUnmounting=!0}),e}const An=[Function,Array],Ym={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:An,onEnter:An,onAfterEnter:An,onEnterCancelled:An,onBeforeLeave:An,onLeave:An,onAfterLeave:An,onLeaveCancelled:An,onBeforeAppear:An,onAppear:An,onAfterAppear:An,onAppearCancelled:An},setup(e,{slots:n}){const s=Fn(),a=jp();let o;return()=>{const i=n.default&&Yi(n.default(),!0);if(!i||!i.length)return;let l=i[0];if(i.length>1){let b=!1;for(const y of i)if(y.type!==Qe){if(b){V("<transition> can only be used on a single element or component. Use <transition-group> for lists.");break}l=y,b=!0}}const c=ge(e),{mode:u}=c;if(u&&u!=="in-out"&&u!=="out-in"&&u!=="default"&&V(`invalid <transition> mode: ${u}`),a.isLeaving)return io(l);const p=Kl(l);if(!p)return io(l);const d=_a(p,c,a,s);Ts(p,d);const f=s.subTree,h=f&&Kl(f);let m=!1;const{getTransitionKey:g}=p.type;if(g){const b=g();o===void 0?o=b:b!==o&&(o=b,m=!0)}if(h&&h.type!==Qe&&(!xt(p,h)||m)){const b=_a(h,c,a,s);if(Ts(h,b),u==="out-in")return a.isLeaving=!0,b.afterLeave=()=>{a.isLeaving=!1,s.update.active!==!1&&s.update()},io(l);u==="in-out"&&p.type!==Qe&&(b.delayLeave=(y,$,S)=>{const x=Rp(a,h);x[String(h.key)]=h,y._leaveCb=()=>{$(),y._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=S})}return l}}},Jm=Ym;function Rp(e,n){const{leavingVNodes:s}=e;let a=s.get(n.type);return a||(a=Object.create(null),s.set(n.type,a)),a}function _a(e,n,s,a){const{appear:o,mode:i,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:p,onEnterCancelled:d,onBeforeLeave:f,onLeave:h,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:b,onAppear:y,onAfterAppear:$,onAppearCancelled:S}=n,x=String(e.key),P=Rp(s,e),R=(D,G)=>{D&&Dn(D,a,9,G)},H=(D,G)=>{const ae=G[1];R(D,G),ue(D)?D.every(fe=>fe.length<=1)&&ae():D.length<=1&&ae()},Y={mode:i,persisted:l,beforeEnter(D){let G=c;if(!s.isMounted)if(o)G=b||c;else return;D._leaveCb&&D._leaveCb(!0);const ae=P[x];ae&&xt(e,ae)&&ae.el._leaveCb&&ae.el._leaveCb(),R(G,[D])},enter(D){let G=u,ae=p,fe=d;if(!s.isMounted)if(o)G=y||u,ae=$||p,fe=S||d;else return;let Q=!1;const de=D._enterCb=De=>{Q||(Q=!0,De?R(fe,[D]):R(ae,[D]),Y.delayedLeave&&Y.delayedLeave(),D._enterCb=void 0)};G?H(G,[D,de]):de()},leave(D,G){const ae=String(e.key);if(D._enterCb&&D._enterCb(!0),s.isUnmounting)return G();R(f,[D]);let fe=!1;const Q=D._leaveCb=de=>{fe||(fe=!0,G(),de?R(g,[D]):R(m,[D]),D._leaveCb=void 0,P[ae]===e&&delete P[ae])};P[ae]=e,h?H(h,[D,Q]):Q()},clone(D){return _a(D,n,s,a)}};return Y}function io(e){if(Ia(e))return e=zn(e),e.children=null,e}function Kl(e){return Ia(e)?e.children?e.children[0]:void 0:e}function Ts(e,n){e.shapeFlag&6&&e.component?Ts(e.component.subTree,n):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function Yi(e,n=!1,s){let a=[],o=0;for(let i=0;i<e.length;i++){let l=e[i];const c=s==null?l.key:String(s)+String(l.key!=null?l.key:i);l.type===Ae?(l.patchFlag&128&&o++,a=a.concat(Yi(l.children,n,c))):(n||l.type!==Qe)&&a.push(c!=null?zn(l,{key:c}):l)}if(o>1)for(let i=0;i<a.length;i++)a[i].patchFlag=-2;return a}function Me(e){return me(e)?{setup:e,name:e.name}:e}const Es=e=>!!e.type.__asyncLoader,Ia=e=>e.type.__isKeepAlive,Xm={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:n}){const s=Fn(),a=s.ctx;if(!a.renderer)return()=>{const S=n.default&&n.default();return S&&S.length===1?S[0]:S};const o=new Map,i=new Set;let l=null;s.__v_cache=o;const c=s.suspense,{renderer:{p:u,m:p,um:d,o:{createElement:f}}}=a,h=f("div");a.activate=(S,x,P,R,H)=>{const Y=S.component;p(S,x,P,0,c),u(Y.vnode,S,x,P,Y,c,R,S.slotScopeIds,H),en(()=>{Y.isDeactivated=!1,Y.a&&wt(Y.a);const D=S.props&&S.props.onVnodeMounted;D&&Mn(D,Y.parent,S)},c),Ho(Y)},a.deactivate=S=>{const x=S.component;p(S,h,null,1,c),en(()=>{x.da&&wt(x.da);const P=S.props&&S.props.onVnodeUnmounted;P&&Mn(P,x.parent,S),x.isDeactivated=!0},c),Ho(x)};function m(S){lo(S),d(S,s,c,!0)}function g(S){o.forEach((x,P)=>{const R=va(x.type);R&&(!S||!S(R))&&b(P)})}function b(S){const x=o.get(S);!l||!xt(x,l)?m(x):l&&lo(l),o.delete(S),i.delete(S)}we(()=>[e.include,e.exclude],([S,x])=>{S&&g(P=>Qs(S,P)),x&&g(P=>!Qs(x,P))},{flush:"post",deep:!0});let y=null;const $=()=>{y!=null&&o.set(y,co(s.subTree))};return us($),Kr($),Na(()=>{o.forEach(S=>{const{subTree:x,suspense:P}=s,R=co(x);if(S.type===R.type&&S.key===R.key){lo(R);const H=R.component.da;H&&en(H,P);return}m(S)})}),()=>{if(y=null,!n.default)return null;const S=n.default(),x=S[0];if(S.length>1)return V("KeepAlive should contain exactly one component child."),l=null,S;if(!Nt(x)||!(x.shapeFlag&4)&&!(x.shapeFlag&128))return l=null,x;let P=co(x);const R=P.type,H=va(Es(P)?P.type.__asyncResolved||{}:R),{include:Y,exclude:D,max:G}=e;if(Y&&(!H||!Qs(Y,H))||D&&H&&Qs(D,H))return l=P,x;const ae=P.key==null?R:P.key,fe=o.get(ae);return P.el&&(P=zn(P),x.shapeFlag&128&&(x.ssContent=P)),y=ae,fe?(P.el=fe.el,P.component=fe.component,P.transition&&Ts(P,P.transition),P.shapeFlag|=512,i.delete(ae),i.add(ae)):(i.add(ae),G&&i.size>parseInt(G,10)&&b(i.values().next().value)),P.shapeFlag|=256,l=P,Dp(x.type)?x:P}}},Bp=Xm;function Qs(e,n){return ue(e)?e.some(s=>Qs(s,n)):We(e)?e.split(",").includes(n):Oh(e)?e.test(n):!1}function qp(e,n){Vp(e,"a",n)}function Wp(e,n){Vp(e,"da",n)}function Vp(e,n,s=Ue){const a=e.__wdc||(e.__wdc=()=>{let o=s;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(Ur(n,a,s),s){let o=s.parent;for(;o&&o.parent;)Ia(o.parent.vnode)&&Qm(a,n,s,o),o=o.parent}}function Qm(e,n,s,a){const o=Ur(n,e,a,!0);Gr(()=>{Mi(a[n],o)},s)}function lo(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function co(e){return e.shapeFlag&128?e.ssContent:e}function Ur(e,n,s=Ue,a=!1){if(s){const o=s[e]||(s[e]=[]),i=n.__weh||(n.__weh=(...l)=>{if(s.isUnmounted)return;is(),Fs(s);const c=Dn(n,s,e,l);return ss(),ls(),c});return a?o.unshift(i):o.push(i),i}else{const o=Vt(zi[e].replace(/ hook$/,""));V(`${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const dt=e=>(n,s=Ue)=>(!ba||e==="sp")&&Ur(e,(...a)=>n(...a),s),eg=dt("bm"),us=dt("m"),ng=dt("bu"),Kr=dt("u"),Na=dt("bum"),Gr=dt("um"),tg=dt("sp"),sg=dt("rtg"),ag=dt("rtc");function rg(e,n=Ue){Ur("ec",e,n)}function Hp(e){Th(e)&&V("Do not use built-in directive ids as custom directive id: "+e)}function Ji(e,n){const s=Xe;if(s===null)return V("withDirectives can only be used inside render functions."),e;const a=Yr(s)||s.proxy,o=e.dirs||(e.dirs=[]);for(let i=0;i<n.length;i++){let[l,c,u,p=Re]=n[i];l&&(me(l)&&(l={mounted:l,updated:l}),l.deep&&Zt(c),o.push({dir:l,instance:a,value:c,oldValue:void 0,arg:u,modifiers:p}))}return e}function jt(e,n,s,a){const o=e.dirs,i=n&&n.dirs;for(let l=0;l<o.length;l++){const c=o[l];i&&(c.oldValue=i[l].value);let u=c.dir[a];u&&(is(),Dn(u,s,8,[e.el,c,e,n]),ls())}}const Uo="components";function yr(e,n){return ig(Uo,e,!0,n)||e}const og=Symbol();function ig(e,n,s=!0,a=!1){const o=Xe||Ue;if(o){const i=o.type;if(e===Uo){const c=va(i,!1);if(c&&(c===n||c===Qn(n)||c===rs(Qn(n))))return i}const l=Gl(o[e]||i[e],n)||Gl(o.appContext[e],n);if(!l&&a)return i;if(s&&!l){const c=e===Uo?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";V(`Failed to resolve ${e.slice(0,-1)}: ${n}${c}`)}return l}else V(`resolve${rs(e.slice(0,-1))} can only be used in render() or setup().`)}function Gl(e,n){return e&&(e[n]||e[Qn(n)]||e[rs(Qn(n))])}function Da(e,n,s,a){let o;const i=s&&s[a];if(ue(e)||We(e)){o=new Array(e.length);for(let l=0,c=e.length;l<c;l++)o[l]=n(e[l],l,void 0,i&&i[l])}else if(typeof e=="number"){Number.isInteger(e)||V(`The v-for range expect an integer value but got ${e}.`),o=new Array(e);for(let l=0;l<e;l++)o[l]=n(l+1,l,void 0,i&&i[l])}else if(Ne(e))if(e[Symbol.iterator])o=Array.from(e,(l,c)=>n(l,c,void 0,i&&i[c]));else{const l=Object.keys(e);o=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const p=l[c];o[c]=n(e[p],p,c,i&&i[c])}}else o=[];return s&&(s[a]=o),o}function Ln(e,n,s={},a,o){if(Xe.isCE||Xe.parent&&Es(Xe.parent)&&Xe.parent.isCE)return n!=="default"&&(s.name=n),N("slot",s,a&&a());let i=e[n];i&&i.length>1&&(V("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),i=()=>[]),i&&i._c&&(i._d=!1),k();const l=i&&zp(i(s)),c=T(Ae,{key:s.key||l&&l.key||`_${n}`},l||(a?a():[]),l&&e._===1?64:-2);return!o&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function zp(e){return e.some(n=>Nt(n)?!(n.type===Qe||n.type===Ae&&!zp(n.children)):!0)?e:null}const Ko=e=>e?rd(e)?Yr(e)||e.proxy:Ko(e.parent):null,ts=ze(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>ys(e.props),$attrs:e=>ys(e.attrs),$slots:e=>ys(e.slots),$refs:e=>ys(e.refs),$parent:e=>Ko(e.parent),$root:e=>Ko(e.root),$emit:e=>e.emit,$options:e=>Qi(e),$forceUpdate:e=>e.f||(e.f=()=>Vr(e.update)),$nextTick:e=>e.n||(e.n=nn.bind(e.proxy)),$watch:e=>Zm.bind(e)}),Xi=e=>e==="_"||e==="$",uo=(e,n)=>e!==Re&&!e.__isScriptSetup&&Ee(e,n),Up={get({_:e},n){const{ctx:s,setupState:a,data:o,props:i,accessCache:l,type:c,appContext:u}=e;if(n==="__isVue")return!0;let p;if(n[0]!=="$"){const m=l[n];if(m!==void 0)switch(m){case 1:return a[n];case 2:return o[n];case 4:return s[n];case 3:return i[n]}else{if(uo(a,n))return l[n]=1,a[n];if(o!==Re&&Ee(o,n))return l[n]=2,o[n];if((p=e.propsOptions[0])&&Ee(p,n))return l[n]=3,i[n];if(s!==Re&&Ee(s,n))return l[n]=4,s[n];Go&&(l[n]=0)}}const d=ts[n];let f,h;if(d)return n==="$attrs"&&(vn(e,"get",n),vr()),d(e);if((f=c.__cssModules)&&(f=f[n]))return f;if(s!==Re&&Ee(s,n))return l[n]=4,s[n];if(h=u.config.globalProperties,Ee(h,n))return h[n];Xe&&(!We(n)||n.indexOf("__v")!==0)&&(o!==Re&&Xi(n[0])&&Ee(o,n)?V(`Property ${JSON.stringify(n)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===Xe&&V(`Property ${JSON.stringify(n)} was accessed during render but is not defined on instance.`))},set({_:e},n,s){const{data:a,setupState:o,ctx:i}=e;return uo(o,n)?(o[n]=s,!0):o.__isScriptSetup&&Ee(o,n)?(V(`Cannot mutate <script setup> binding "${n}" from Options API.`),!1):a!==Re&&Ee(a,n)?(a[n]=s,!0):Ee(e.props,n)?(V(`Attempting to mutate prop "${n}". Props are readonly.`),!1):n[0]==="$"&&n.slice(1)in e?(V(`Attempting to mutate public property "${n}". Properties starting with $ are reserved and readonly.`),!1):(n in e.appContext.config.globalProperties?Object.defineProperty(i,n,{enumerable:!0,configurable:!0,value:s}):i[n]=s,!0)},has({_:{data:e,setupState:n,accessCache:s,ctx:a,appContext:o,propsOptions:i}},l){let c;return!!s[l]||e!==Re&&Ee(e,l)||uo(n,l)||(c=i[0])&&Ee(c,l)||Ee(a,l)||Ee(ts,l)||Ee(o.config.globalProperties,l)},defineProperty(e,n,s){return s.get!=null?e._.accessCache[n]=0:Ee(s,"value")&&this.set(e,n,s.value,null),Reflect.defineProperty(e,n,s)}};Up.ownKeys=e=>(V("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e));function lg(e){const n={};return Object.defineProperty(n,"_",{configurable:!0,enumerable:!1,get:()=>e}),Object.keys(ts).forEach(s=>{Object.defineProperty(n,s,{configurable:!0,enumerable:!1,get:()=>ts[s](e),set:kn})}),n}function cg(e){const{ctx:n,propsOptions:[s]}=e;s&&Object.keys(s).forEach(a=>{Object.defineProperty(n,a,{enumerable:!0,configurable:!0,get:()=>e.props[a],set:kn})})}function ug(e){const{ctx:n,setupState:s}=e;Object.keys(ge(s)).forEach(a=>{if(!s.__isScriptSetup){if(Xi(a[0])){V(`setup() return property ${JSON.stringify(a)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(n,a,{enumerable:!0,configurable:!0,get:()=>s[a],set:kn})}})}function pg(){const e=Object.create(null);return(n,s)=>{e[s]?V(`${n} property "${s}" is already defined in ${e[s]}.`):e[s]=n}}let Go=!0;function dg(e){const n=Qi(e),s=e.proxy,a=e.ctx;Go=!1,n.beforeCreate&&Zl(n.beforeCreate,e,"bc");const{data:o,computed:i,methods:l,watch:c,provide:u,inject:p,created:d,beforeMount:f,mounted:h,beforeUpdate:m,updated:g,activated:b,deactivated:y,beforeDestroy:$,beforeUnmount:S,destroyed:x,unmounted:P,render:R,renderTracked:H,renderTriggered:Y,errorCaptured:D,serverPrefetch:G,expose:ae,inheritAttrs:fe,components:Q,directives:de,filters:De}=n,Ge=pg();{const[ne]=e.propsOptions;if(ne)for(const pe in ne)Ge("Props",pe)}if(p&&fg(p,a,Ge,e.appContext.config.unwrapInjectedRef),l)for(const ne in l){const pe=l[ne];me(pe)?(Object.defineProperty(a,ne,{value:pe.bind(s),configurable:!0,enumerable:!0,writable:!0}),Ge("Methods",ne)):V(`Method "${ne}" has type "${typeof pe}" in the component definition. Did you reference the function correctly?`)}if(o){me(o)||V("The data option must be a function. Plain object usage is no longer supported.");const ne=o.call(s,s);if(Ni(ne)&&V("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Ne(ne))V("data() should return an object.");else{e.data=Ve(ne);for(const pe in ne)Ge("Data",pe),Xi(pe[0])||Object.defineProperty(a,pe,{configurable:!0,enumerable:!0,get:()=>ne[pe],set:kn})}}if(Go=!0,i)for(const ne in i){const pe=i[ne],ye=me(pe)?pe.bind(s,s):me(pe.get)?pe.get.bind(s,s):kn;ye===kn&&V(`Computed property "${ne}" has no getter.`);const Le=!me(pe)&&me(pe.set)?pe.set.bind(s):()=>{V(`Write operation failed: computed property "${ne}" is readonly.`)},yn=I({get:ye,set:Le});Object.defineProperty(a,ne,{enumerable:!0,configurable:!0,get:()=>yn.value,set:sn=>yn.value=sn}),Ge("Computed",ne)}if(c)for(const ne in c)Kp(c[ne],a,s,ne);if(u){const ne=me(u)?u.call(s):u;Reflect.ownKeys(ne).forEach(pe=>{En(pe,ne[pe])})}d&&Zl(d,e,"c");function Be(ne,pe){ue(pe)?pe.forEach(ye=>ne(ye.bind(s))):pe&&ne(pe.bind(s))}if(Be(eg,f),Be(us,h),Be(ng,m),Be(Kr,g),Be(qp,b),Be(Wp,y),Be(rg,D),Be(ag,H),Be(sg,Y),Be(Na,S),Be(Gr,P),Be(tg,G),ue(ae))if(ae.length){const ne=e.exposed||(e.exposed={});ae.forEach(pe=>{Object.defineProperty(ne,pe,{get:()=>s[pe],set:ye=>s[pe]=ye})})}else e.exposed||(e.exposed={});R&&e.render===kn&&(e.render=R),fe!=null&&(e.inheritAttrs=fe),Q&&(e.components=Q),de&&(e.directives=de)}function fg(e,n,s=kn,a=!1){ue(e)&&(e=Zo(e));for(const o in e){const i=e[o];let l;Ne(i)?"default"in i?l=C(i.from||o,i.default,!0):l=C(i.from||o):l=C(i),Fe(l)?a?Object.defineProperty(n,o,{enumerable:!0,configurable:!0,get:()=>l.value,set:c=>l.value=c}):(V(`injected property "${o}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),n[o]=l):n[o]=l,s("Inject",o)}}function Zl(e,n,s){Dn(ue(e)?e.map(a=>a.bind(n.proxy)):e.bind(n.proxy),n,s)}function Kp(e,n,s,a){const o=a.includes(".")?Lp(s,a):()=>s[a];if(We(e)){const i=n[e];me(i)?we(o,i):V(`Invalid watch handler specified by key "${e}"`,i)}else if(me(e))we(o,e.bind(s));else if(Ne(e))if(ue(e))e.forEach(i=>Kp(i,n,s,a));else{const i=me(e.handler)?e.handler.bind(s):n[e.handler];me(i)?we(o,i,e):V(`Invalid watch handler specified by key "${e.handler}"`,i)}else V(`Invalid watch option: "${a}"`,e)}function Qi(e){const n=e.type,{mixins:s,extends:a}=n,{mixins:o,optionsCache:i,config:{optionMergeStrategies:l}}=e.appContext,c=i.get(n);let u;return c?u=c:!o.length&&!s&&!a?u=n:(u={},o.length&&o.forEach(p=>wr(u,p,l,!0)),wr(u,n,l)),Ne(n)&&i.set(n,u),u}function wr(e,n,s,a=!1){const{mixins:o,extends:i}=n;i&&wr(e,i,s,!0),o&&o.forEach(l=>wr(e,l,s,!0));for(const l in n)if(a&&l==="expose")V('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const c=hg[l]||s&&s[l];e[l]=c?c(e[l],n[l]):n[l]}return e}const hg={data:Yl,props:Ht,emits:Ht,methods:Ht,computed:Ht,beforeCreate:ln,created:ln,beforeMount:ln,mounted:ln,beforeUpdate:ln,updated:ln,beforeDestroy:ln,beforeUnmount:ln,destroyed:ln,unmounted:ln,activated:ln,deactivated:ln,errorCaptured:ln,serverPrefetch:ln,components:Ht,directives:Ht,watch:gg,provide:Yl,inject:mg};function Yl(e,n){return n?e?function(){return ze(me(e)?e.call(this,this):e,me(n)?n.call(this,this):n)}:n:e}function mg(e,n){return Ht(Zo(e),Zo(n))}function Zo(e){if(ue(e)){const n={};for(let s=0;s<e.length;s++)n[e[s]]=e[s];return n}return e}function ln(e,n){return e?[...new Set([].concat(e,n))]:n}function Ht(e,n){return e?ze(ze(Object.create(null),e),n):n}function gg(e,n){if(!e)return n;if(!n)return e;const s=ze(Object.create(null),e);for(const a in n)s[a]=ln(e[a],n[a]);return s}function _g(e,n,s,a=!1){const o={},i={};hr(i,Zr,1),e.propsDefaults=Object.create(null),Gp(e,n,o,i);for(const l in e.propsOptions[0])l in o||(o[l]=void 0);Yp(n||{},o,e),s?e.props=a?o:um(o):e.type.props?e.props=o:e.props=i,e.attrs=i}function kg(e){for(;e;){if(e.type.__hmrId)return!0;e=e.parent}}function bg(e,n,s,a){const{props:o,attrs:i,vnode:{patchFlag:l}}=e,c=ge(o),[u]=e.propsOptions;let p=!1;if(!kg(e)&&(a||l>0)&&!(l&16)){if(l&8){const d=e.vnode.dynamicProps;for(let f=0;f<d.length;f++){let h=d[f];if(Hr(e.emitsOptions,h))continue;const m=n[h];if(u)if(Ee(i,h))m!==i[h]&&(i[h]=m,p=!0);else{const g=Qn(h);o[g]=Yo(u,c,g,m,e,!1)}else m!==i[h]&&(i[h]=m,p=!0)}}}else{Gp(e,n,o,i)&&(p=!0);let d;for(const f in c)(!n||!Ee(n,f)&&((d=ut(f))===f||!Ee(n,d)))&&(u?s&&(s[f]!==void 0||s[d]!==void 0)&&(o[f]=Yo(u,c,f,void 0,e,!0)):delete o[f]);if(i!==c)for(const f in i)(!n||!Ee(n,f))&&(delete i[f],p=!0)}p&&pt(e,"set","$attrs"),Yp(n||{},o,e)}function Gp(e,n,s,a){const[o,i]=e.propsOptions;let l=!1,c;if(n)for(let u in n){if(sr(u))continue;const p=n[u];let d;o&&Ee(o,d=Qn(u))?!i||!i.includes(d)?s[d]=p:(c||(c={}))[d]=p:Hr(e.emitsOptions,u)||(!(u in a)||p!==a[u])&&(a[u]=p,l=!0)}if(i){const u=ge(s),p=c||Re;for(let d=0;d<i.length;d++){const f=i[d];s[f]=Yo(o,u,f,p[f],e,!Ee(p,f))}}return l}function Yo(e,n,s,a,o,i){const l=e[s];if(l!=null){const c=Ee(l,"default");if(c&&a===void 0){const u=l.default;if(l.type!==Function&&me(u)){const{propsDefaults:p}=o;s in p?a=p[s]:(Fs(o),a=p[s]=u.call(null,n),ss())}else a=u}l[0]&&(i&&!c?a=!1:l[1]&&(a===""||a===ut(s))&&(a=!0))}return a}function Zp(e,n,s=!1){const a=n.propsCache,o=a.get(e);if(o)return o;const i=e.props,l={},c=[];let u=!1;if(!me(e)){const d=f=>{u=!0;const[h,m]=Zp(f,n,!0);ze(l,h),m&&c.push(...m)};!s&&n.mixins.length&&n.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!u)return Ne(e)&&a.set(e,Ss),Ss;if(ue(i))for(let d=0;d<i.length;d++){We(i[d])||V("props must be strings when using array syntax.",i[d]);const f=Qn(i[d]);Jl(f)&&(l[f]=Re)}else if(i){Ne(i)||V("invalid props options",i);for(const d in i){const f=Qn(d);if(Jl(f)){const h=i[d],m=l[f]=ue(h)||me(h)?{type:h}:Object.assign({},h);if(m){const g=Ql(Boolean,m.type),b=Ql(String,m.type);m[0]=g>-1,m[1]=b<0||g<b,(g>-1||Ee(m,"default"))&&c.push(f)}}}}const p=[l,c];return Ne(e)&&a.set(e,p),p}function Jl(e){return e[0]!=="$"?!0:(V(`Invalid prop name: "${e}" is a reserved property.`),!1)}function Jo(e){const n=e&&e.toString().match(/^\s*(function|class) (\w+)/);return n?n[2]:e===null?"null":""}function Xl(e,n){return Jo(e)===Jo(n)}function Ql(e,n){return ue(n)?n.findIndex(s=>Xl(s,e)):me(n)&&Xl(n,e)?0:-1}function Yp(e,n,s){const a=ge(n),o=s.propsOptions[0];for(const i in o){let l=o[i];l!=null&&vg(i,a[i],l,!Ee(e,i)&&!Ee(e,ut(i)))}}function vg(e,n,s,a){const{type:o,required:i,validator:l}=s;if(i&&a){V('Missing required prop: "'+e+'"');return}if(!(n==null&&!s.required)){if(o!=null&&o!==!0){let c=!1;const u=ue(o)?o:[o],p=[];for(let d=0;d<u.length&&!c;d++){const{valid:f,expectedType:h}=wg(n,u[d]);p.push(h||""),c=f}if(!c){V(Sg(e,n,p));return}}l&&!l(n)&&V('Invalid prop: custom validator check failed for prop "'+e+'".')}}const yg=Lt("String,Number,Boolean,Function,Symbol,BigInt");function wg(e,n){let s;const a=Jo(n);if(yg(a)){const o=typeof e;s=o===a.toLowerCase(),!s&&o==="object"&&(s=e instanceof n)}else a==="Object"?s=Ne(e):a==="Array"?s=ue(e):a==="null"?s=e===null:s=e instanceof n;return{valid:s,expectedType:a}}function Sg(e,n,s){let a=`Invalid prop: type check failed for prop "${e}". Expected ${s.map(rs).join(" | ")}`;const o=s[0],i=Di(n),l=ec(n,o),c=ec(n,i);return s.length===1&&nc(o)&&!xg(o,i)&&(a+=` with value ${l}`),a+=`, got ${i} `,nc(i)&&(a+=`with value ${c}.`),a}function ec(e,n){return n==="String"?`"${e}"`:n==="Number"?`${Number(e)}`:`${e}`}function nc(e){return["string","number","boolean"].some(s=>e.toLowerCase()===s)}function xg(...e){return e.some(n=>n.toLowerCase()==="boolean")}const Jp=e=>e[0]==="_"||e==="$stable",el=e=>ue(e)?e.map(Vn):[Vn(e)],Eg=(e,n,s)=>{if(n._n)return n;const a=w((...o)=>(Ue&&V(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),el(n(...o))),s);return a._c=!1,a},Xp=(e,n,s)=>{const a=e._ctx;for(const o in e){if(Jp(o))continue;const i=e[o];if(me(i))n[o]=Eg(o,i,a);else if(i!=null){V(`Non-function value encountered for slot "${o}". Prefer function slots for better performance.`);const l=el(i);n[o]=()=>l}}},Qp=(e,n)=>{Ia(e.vnode)||V("Non-function value encountered for default slot. Prefer function slots for better performance.");const s=el(n);e.slots.default=()=>s},Cg=(e,n)=>{if(e.vnode.shapeFlag&32){const s=n._;s?(e.slots=ge(n),hr(n,"_",s)):Xp(n,e.slots={})}else e.slots={},n&&Qp(e,n);hr(e.slots,Zr,1)},$g=(e,n,s)=>{const{vnode:a,slots:o}=e;let i=!0,l=Re;if(a.shapeFlag&32){const c=n._;c?Pt?ze(o,n):s&&c===1?i=!1:(ze(o,n),!s&&c===1&&delete o._):(i=!n.$stable,Xp(n,o)),l=n}else n&&(Qp(e,n),l={default:1});if(i)for(const c in o)!Jp(c)&&!(c in l)&&delete o[c]};function ed(){return{app:null,config:{isNativeTag:ep,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Pg=0;function Og(e,n){return function(a,o=null){me(a)||(a=Object.assign({},a)),o!=null&&!Ne(o)&&(V("root props passed to app.mount() must be an object."),o=null);const i=ed(),l=new Set;let c=!1;const u=i.app={_uid:Pg++,_component:a,_props:o,_container:null,_context:i,_instance:null,version:xr,get config(){return i.config},set config(p){V("app.config cannot be replaced. Modify individual options instead.")},use(p,...d){return l.has(p)?V("Plugin has already been applied to target app."):p&&me(p.install)?(l.add(p),p.install(u,...d)):me(p)?(l.add(p),p(u,...d)):V('A plugin must either be a function or an object with an "install" function.'),u},mixin(p){return i.mixins.includes(p)?V("Mixin has already been applied to target app"+(p.name?`: ${p.name}`:"")):i.mixins.push(p),u},component(p,d){return ei(p,i.config),d?(i.components[p]&&V(`Component "${p}" has already been registered in target app.`),i.components[p]=d,u):i.components[p]},directive(p,d){return Hp(p),d?(i.directives[p]&&V(`Directive "${p}" has already been registered in target app.`),i.directives[p]=d,u):i.directives[p]},mount(p,d,f){if(c)V("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{p.__vue_app__&&V("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const h=N(a,o);return h.appContext=i,i.reload=()=>{e(zn(h),p,f)},d&&n?n(h,p):e(h,p,f),c=!0,u._container=p,p.__vue_app__=u,u._instance=h.component,Mm(u,xr),Yr(h.component)||h.component.proxy}},unmount(){c?(e(null,u._container),u._instance=null,Im(u),delete u._container.__vue_app__):V("Cannot unmount an app that is not mounted.")},provide(p,d){return p in i.provides&&V(`App already provides property with key "${String(p)}". It will be overwritten with the new value.`),i.provides[p]=d,u}};return u}}function Xo(e,n,s,a,o=!1){if(ue(e)){e.forEach((h,m)=>Xo(h,n&&(ue(n)?n[m]:n),s,a,o));return}if(Es(a)&&!o)return;const i=a.shapeFlag&4?Yr(a.component)||a.component.proxy:a.el,l=o?null:i,{i:c,r:u}=e;if(!c){V("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const p=n&&n.r,d=c.refs===Re?c.refs={}:c.refs,f=c.setupState;if(p!=null&&p!==u&&(We(p)?(d[p]=null,Ee(f,p)&&(f[p]=null)):Fe(p)&&(p.value=null)),me(u))ct(u,c,12,[l,d]);else{const h=We(u),m=Fe(u);if(h||m){const g=()=>{if(e.f){const b=h?Ee(f,u)?f[u]:d[u]:u.value;o?ue(b)&&Mi(b,i):ue(b)?b.includes(i)||b.push(i):h?(d[u]=[i],Ee(f,u)&&(f[u]=d[u])):(u.value=[i],e.k&&(d[e.k]=u.value))}else h?(d[u]=l,Ee(f,u)&&(f[u]=l)):m?(u.value=l,e.k&&(d[e.k]=l)):V("Invalid template ref type:",u,`(${typeof u})`)};l?(g.id=-1,en(g,s)):g()}else V("Invalid template ref type:",u,`(${typeof u})`)}}let Rs,St;function tt(e,n){e.appContext.config.performance&&Sr()&&St.mark(`vue-${n}-${e.uid}`),Lm(e,n,Sr()?St.now():Date.now())}function st(e,n){if(e.appContext.config.performance&&Sr()){const s=`vue-${n}-${e.uid}`,a=s+":end";St.mark(a),St.measure(`<${Jr(e,e.type)}> ${n}`,s,a),St.clearMarks(s),St.clearMarks(a)}jm(e,n,Sr()?St.now():Date.now())}function Sr(){return Rs!==void 0||(typeof window<"u"&&window.performance?(Rs=!0,St=window.performance):Rs=!1),Rs}function Tg(){const e=[];if(e.length){const n=e.length>1;console.warn(`Feature flag${n?"s":""} ${e.join(", ")} ${n?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const en=Gm;function Fg(e){return Ag(e)}function Ag(e,n){Tg();const s=ap();s.__VUE__=!0,Fp(s.__VUE_DEVTOOLS_GLOBAL_HOOK__,s);const{insert:a,remove:o,patchProp:i,createElement:l,createText:c,createComment:u,setText:p,setElementText:d,parentNode:f,nextSibling:h,setScopeId:m=kn,insertStaticContent:g}=e,b=(_,v,O,W=null,B=null,K=null,X=!1,U=null,Z=Pt?!1:!!v.dynamicChildren)=>{if(_===v)return;_&&!xt(_,v)&&(W=re(_),mn(_,B,K,!0),_=null),v.patchFlag===-2&&(Z=!1,v.dynamicChildren=null);const{type:z,ref:ie,shapeFlag:oe}=v;switch(z){case La:y(_,v,O,W);break;case Qe:$(_,v,O,W);break;case or:_==null?S(v,O,W,X):x(_,v,O,X);break;case Ae:de(_,v,O,W,B,K,X,U,Z);break;default:oe&1?H(_,v,O,W,B,K,X,U,Z):oe&6?De(_,v,O,W,B,K,X,U,Z):oe&64||oe&128?z.process(_,v,O,W,B,K,X,U,Z,$e):V("Invalid VNode type:",z,`(${typeof z})`)}ie!=null&&B&&Xo(ie,_&&_.ref,K,v||_,!v)},y=(_,v,O,W)=>{if(_==null)a(v.el=c(v.children),O,W);else{const B=v.el=_.el;v.children!==_.children&&p(B,v.children)}},$=(_,v,O,W)=>{_==null?a(v.el=u(v.children||""),O,W):v.el=_.el},S=(_,v,O,W)=>{[_.el,_.anchor]=g(_.children,v,O,W,_.el,_.anchor)},x=(_,v,O,W)=>{if(v.children!==_.children){const B=h(_.anchor);R(_),[v.el,v.anchor]=g(v.children,O,B,W)}else v.el=_.el,v.anchor=_.anchor},P=({el:_,anchor:v},O,W)=>{let B;for(;_&&_!==v;)B=h(_),a(_,O,W),_=B;a(v,O,W)},R=({el:_,anchor:v})=>{let O;for(;_&&_!==v;)O=h(_),o(_),_=O;o(v)},H=(_,v,O,W,B,K,X,U,Z)=>{X=X||v.type==="svg",_==null?Y(v,O,W,B,K,X,U,Z):ae(_,v,B,K,X,U,Z)},Y=(_,v,O,W,B,K,X,U)=>{let Z,z;const{type:ie,props:oe,shapeFlag:ce,transition:be,dirs:Ce}=_;if(Z=_.el=l(_.type,K,oe&&oe.is,oe),ce&8?d(Z,_.children):ce&16&&G(_.children,Z,null,W,B,K&&ie!=="foreignObject",X,U),Ce&&jt(_,null,W,"created"),D(Z,_,_.scopeId,X,W),oe){for(const je in oe)je!=="value"&&!sr(je)&&i(Z,je,null,oe[je],K,_.children,W,B,J);"value"in oe&&i(Z,"value",null,oe.value),(z=oe.onVnodeBeforeMount)&&Mn(z,W,_)}Object.defineProperty(Z,"__vnode",{value:_,enumerable:!1}),Object.defineProperty(Z,"__vueParentComponent",{value:W,enumerable:!1}),Ce&&jt(_,null,W,"beforeMount");const qe=(!B||B&&!B.pendingBranch)&&be&&!be.persisted;qe&&be.beforeEnter(Z),a(Z,v,O),((z=oe&&oe.onVnodeMounted)||qe||Ce)&&en(()=>{z&&Mn(z,W,_),qe&&be.enter(Z),Ce&&jt(_,null,W,"mounted")},B)},D=(_,v,O,W,B)=>{if(O&&m(_,O),W)for(let K=0;K<W.length;K++)m(_,W[K]);if(B){let K=B.subTree;if(K.patchFlag>0&&K.patchFlag&2048&&(K=Np(K.children)||K),v===K){const X=B.vnode;D(_,X,X.scopeId,X.slotScopeIds,B.parent)}}},G=(_,v,O,W,B,K,X,U,Z=0)=>{for(let z=Z;z<_.length;z++){const ie=_[z]=U?vt(_[z]):Vn(_[z]);b(null,ie,v,O,W,B,K,X,U)}},ae=(_,v,O,W,B,K,X)=>{const U=v.el=_.el;let{patchFlag:Z,dynamicChildren:z,dirs:ie}=v;Z|=_.patchFlag&16;const oe=_.props||Re,ce=v.props||Re;let be;O&&Rt(O,!1),(be=ce.onVnodeBeforeUpdate)&&Mn(be,O,v,_),ie&&jt(v,_,O,"beforeUpdate"),O&&Rt(O,!0),Pt&&(Z=0,X=!1,z=null);const Ce=B&&v.type!=="foreignObject";if(z?(fe(_.dynamicChildren,z,U,O,W,Ce,K),O&&O.type.__hmrId&&na(_,v)):X||ye(_,v,U,null,O,W,Ce,K,!1),Z>0){if(Z&16)Q(U,v,oe,ce,O,W,B);else if(Z&2&&oe.class!==ce.class&&i(U,"class",null,ce.class,B),Z&4&&i(U,"style",oe.style,ce.style,B),Z&8){const qe=v.dynamicProps;for(let je=0;je<qe.length;je++){const Ze=qe[je],Bn=oe[Ze],fs=ce[Ze];(fs!==Bn||Ze==="value")&&i(U,Ze,Bn,fs,B,_.children,O,W,J)}}Z&1&&_.children!==v.children&&d(U,v.children)}else!X&&z==null&&Q(U,v,oe,ce,O,W,B);((be=ce.onVnodeUpdated)||ie)&&en(()=>{be&&Mn(be,O,v,_),ie&&jt(v,_,O,"updated")},W)},fe=(_,v,O,W,B,K,X)=>{for(let U=0;U<v.length;U++){const Z=_[U],z=v[U],ie=Z.el&&(Z.type===Ae||!xt(Z,z)||Z.shapeFlag&70)?f(Z.el):O;b(Z,z,ie,null,W,B,K,X,!0)}},Q=(_,v,O,W,B,K,X)=>{if(O!==W){if(O!==Re)for(const U in O)!sr(U)&&!(U in W)&&i(_,U,O[U],null,X,v.children,B,K,J);for(const U in W){if(sr(U))continue;const Z=W[U],z=O[U];Z!==z&&U!=="value"&&i(_,U,z,Z,X,v.children,B,K,J)}"value"in W&&i(_,"value",O.value,W.value)}},de=(_,v,O,W,B,K,X,U,Z)=>{const z=v.el=_?_.el:c(""),ie=v.anchor=_?_.anchor:c("");let{patchFlag:oe,dynamicChildren:ce,slotScopeIds:be}=v;(Pt||oe&2048)&&(oe=0,Z=!1,ce=null),be&&(U=U?U.concat(be):be),_==null?(a(z,O,W),a(ie,O,W),G(v.children,O,ie,B,K,X,U,Z)):oe>0&&oe&64&&ce&&_.dynamicChildren?(fe(_.dynamicChildren,ce,O,B,K,X,U),B&&B.type.__hmrId?na(_,v):(v.key!=null||B&&v===B.subTree)&&na(_,v,!0)):ye(_,v,O,ie,B,K,X,U,Z)},De=(_,v,O,W,B,K,X,U,Z)=>{v.slotScopeIds=U,_==null?v.shapeFlag&512?B.ctx.activate(v,O,W,X,Z):Ge(v,O,W,B,K,X,Z):Be(_,v,Z)},Ge=(_,v,O,W,B,K,X)=>{const U=_.component=Vg(_,W,B);if(U.type.__hmrId&&Om(U),ar(_),tt(U,"mount"),Ia(_)&&(U.ctx.renderer=$e),tt(U,"init"),zg(U),st(U,"init"),U.asyncDep){if(B&&B.registerDep(U,ne),!_.el){const Z=U.subTree=N(Qe);$(null,Z,v,O)}return}ne(U,_,v,O,B,K,X),rr(),st(U,"mount")},Be=(_,v,O)=>{const W=v.component=_.component;if(Um(_,v,O))if(W.asyncDep&&!W.asyncResolved){ar(v),pe(W,v,O),rr();return}else W.next=v,$m(W.update),W.update();else v.el=_.el,W.vnode=v},ne=(_,v,O,W,B,K,X)=>{const U=()=>{if(_.isMounted){let{next:ie,bu:oe,u:ce,parent:be,vnode:Ce}=_,qe=ie,je;ar(ie||_.vnode),Rt(_,!1),ie?(ie.el=Ce.el,pe(_,ie,X)):ie=Ce,oe&&wt(oe),(je=ie.props&&ie.props.onVnodeBeforeUpdate)&&Mn(je,be,ie,Ce),Rt(_,!0),tt(_,"render");const Ze=oo(_);st(_,"render");const Bn=_.subTree;_.subTree=Ze,tt(_,"patch"),b(Bn,Ze,f(Bn.el),re(Bn),_,B,K),st(_,"patch"),ie.el=Ze.el,qe===null&&Km(_,Ze.el),ce&&en(ce,B),(je=ie.props&&ie.props.onVnodeUpdated)&&en(()=>Mn(je,be,ie,Ce),B),Ap(_),rr()}else{let ie;const{el:oe,props:ce}=v,{bm:be,m:Ce,parent:qe}=_,je=Es(v);if(Rt(_,!1),be&&wt(be),!je&&(ie=ce&&ce.onVnodeBeforeMount)&&Mn(ie,qe,v),Rt(_,!0),oe&&he){const Ze=()=>{tt(_,"render"),_.subTree=oo(_),st(_,"render"),tt(_,"hydrate"),he(oe,_.subTree,_,B,null),st(_,"hydrate")};je?v.type.__asyncLoader().then(()=>!_.isUnmounted&&Ze()):Ze()}else{tt(_,"render");const Ze=_.subTree=oo(_);st(_,"render"),tt(_,"patch"),b(null,Ze,O,W,_,B,K),st(_,"patch"),v.el=Ze.el}if(Ce&&en(Ce,B),!je&&(ie=ce&&ce.onVnodeMounted)){const Ze=v;en(()=>Mn(ie,qe,Ze),B)}(v.shapeFlag&256||qe&&Es(qe.vnode)&&qe.vnode.shapeFlag&256)&&_.a&&en(_.a,B),_.isMounted=!0,Ho(_),v=O=W=null}},Z=_.effect=new Bi(U,()=>Vr(z),_.scope),z=_.update=()=>Z.run();z.id=_.uid,Rt(_,!0),Z.onTrack=_.rtc?ie=>wt(_.rtc,ie):void 0,Z.onTrigger=_.rtg?ie=>wt(_.rtg,ie):void 0,z.ownerInstance=_,z()},pe=(_,v,O)=>{v.component=_;const W=_.vnode.props;_.vnode=v,_.next=null,bg(_,v.props,W,O),$g(_,v.children,O),is(),Vl(),ls()},ye=(_,v,O,W,B,K,X,U,Z=!1)=>{const z=_&&_.children,ie=_?_.shapeFlag:0,oe=v.children,{patchFlag:ce,shapeFlag:be}=v;if(ce>0){if(ce&128){yn(z,oe,O,W,B,K,X,U,Z);return}else if(ce&256){Le(z,oe,O,W,B,K,X,U,Z);return}}be&8?(ie&16&&J(z,B,K),oe!==z&&d(O,oe)):ie&16?be&16?yn(z,oe,O,W,B,K,X,U,Z):J(z,B,K,!0):(ie&8&&d(O,""),be&16&&G(oe,O,W,B,K,X,U,Z))},Le=(_,v,O,W,B,K,X,U,Z)=>{_=_||Ss,v=v||Ss;const z=_.length,ie=v.length,oe=Math.min(z,ie);let ce;for(ce=0;ce<oe;ce++){const be=v[ce]=Z?vt(v[ce]):Vn(v[ce]);b(_[ce],be,O,null,B,K,X,U,Z)}z>ie?J(_,B,K,!0,!1,oe):G(v,O,W,B,K,X,U,Z,oe)},yn=(_,v,O,W,B,K,X,U,Z)=>{let z=0;const ie=v.length;let oe=_.length-1,ce=ie-1;for(;z<=oe&&z<=ce;){const be=_[z],Ce=v[z]=Z?vt(v[z]):Vn(v[z]);if(xt(be,Ce))b(be,Ce,O,null,B,K,X,U,Z);else break;z++}for(;z<=oe&&z<=ce;){const be=_[oe],Ce=v[ce]=Z?vt(v[ce]):Vn(v[ce]);if(xt(be,Ce))b(be,Ce,O,null,B,K,X,U,Z);else break;oe--,ce--}if(z>oe){if(z<=ce){const be=ce+1,Ce=be<ie?v[be].el:W;for(;z<=ce;)b(null,v[z]=Z?vt(v[z]):Vn(v[z]),O,Ce,B,K,X,U,Z),z++}}else if(z>ce)for(;z<=oe;)mn(_[z],B,K,!0),z++;else{const be=z,Ce=z,qe=new Map;for(z=Ce;z<=ce;z++){const on=v[z]=Z?vt(v[z]):Vn(v[z]);on.key!=null&&(qe.has(on.key)&&V("Duplicate keys found during update:",JSON.stringify(on.key),"Make sure keys are unique."),qe.set(on.key,z))}let je,Ze=0;const Bn=ce-Ce+1;let fs=!1,Al=0;const js=new Array(Bn);for(z=0;z<Bn;z++)js[z]=0;for(z=be;z<=oe;z++){const on=_[z];if(Ze>=Bn){mn(on,B,K,!0);continue}let Kn;if(on.key!=null)Kn=qe.get(on.key);else for(je=Ce;je<=ce;je++)if(js[je-Ce]===0&&xt(on,v[je])){Kn=je;break}Kn===void 0?mn(on,B,K,!0):(js[Kn-Ce]=z+1,Kn>=Al?Al=Kn:fs=!0,b(on,v[Kn],O,null,B,K,X,U,Z),Ze++)}const Ml=fs?Mg(js):Ss;for(je=Ml.length-1,z=Bn-1;z>=0;z--){const on=Ce+z,Kn=v[on],Il=on+1<ie?v[on+1].el:W;js[z]===0?b(null,Kn,O,Il,B,K,X,U,Z):fs&&(je<0||z!==Ml[je]?sn(Kn,O,Il,2):je--)}}},sn=(_,v,O,W,B=null)=>{const{el:K,type:X,transition:U,children:Z,shapeFlag:z}=_;if(z&6){sn(_.component.subTree,v,O,W);return}if(z&128){_.suspense.move(v,O,W);return}if(z&64){X.move(_,v,O,$e);return}if(X===Ae){a(K,v,O);for(let oe=0;oe<Z.length;oe++)sn(Z[oe],v,O,W);a(_.anchor,v,O);return}if(X===or){P(_,v,O);return}if(W!==2&&z&1&&U)if(W===0)U.beforeEnter(K),a(K,v,O),en(()=>U.enter(K),B);else{const{leave:oe,delayLeave:ce,afterLeave:be}=U,Ce=()=>a(K,v,O),qe=()=>{oe(K,()=>{Ce(),be&&be()})};ce?ce(K,Ce,qe):qe()}else a(K,v,O)},mn=(_,v,O,W=!1,B=!1)=>{const{type:K,props:X,ref:U,children:Z,dynamicChildren:z,shapeFlag:ie,patchFlag:oe,dirs:ce}=_;if(U!=null&&Xo(U,null,O,_,!0),ie&256){v.ctx.deactivate(_);return}const be=ie&1&&ce,Ce=!Es(_);let qe;if(Ce&&(qe=X&&X.onVnodeBeforeUnmount)&&Mn(qe,v,_),ie&6)te(_.component,O,W);else{if(ie&128){_.suspense.unmount(O,W);return}be&&jt(_,null,v,"beforeUnmount"),ie&64?_.type.remove(_,v,O,B,$e,W):z&&(K!==Ae||oe>0&&oe&64)?J(z,v,O,!1,!0):(K===Ae&&oe&384||!B&&ie&16)&&J(Z,v,O),W&&ht(_)}(Ce&&(qe=X&&X.onVnodeUnmounted)||be)&&en(()=>{qe&&Mn(qe,v,_),be&&jt(_,null,v,"unmounted")},O)},ht=_=>{const{type:v,el:O,anchor:W,transition:B}=_;if(v===Ae){_.patchFlag>0&&_.patchFlag&2048&&B&&!B.persisted?_.children.forEach(X=>{X.type===Qe?o(X.el):ht(X)}):M(O,W);return}if(v===or){R(_);return}const K=()=>{o(O),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(_.shapeFlag&1&&B&&!B.persisted){const{leave:X,delayLeave:U}=B,Z=()=>X(O,K);U?U(_.el,K,Z):Z()}else K()},M=(_,v)=>{let O;for(;_!==v;)O=h(_),o(_),_=O;o(v)},te=(_,v,O)=>{_.type.__hmrId&&Tm(_);const{bum:W,scope:B,update:K,subTree:X,um:U}=_;W&&wt(W),B.stop(),K&&(K.active=!1,mn(X,_,v,O)),U&&en(U,v),en(()=>{_.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve()),Dm(_)},J=(_,v,O,W=!1,B=!1,K=0)=>{for(let X=K;X<_.length;X++)mn(_[X],v,O,W,B)},re=_=>_.shapeFlag&6?re(_.component.subTree):_.shapeFlag&128?_.suspense.next():h(_.anchor||_.el),Se=(_,v,O)=>{_==null?v._vnode&&mn(v._vnode,null,null,!0):b(v._vnode||null,_,v,null,null,null,O),Vl(),Pp(),v._vnode=_},$e={p:b,um:mn,m:sn,r:ht,mt:Ge,mc:G,pc:ye,pbc:fe,n:re,o:e};let ke,he;return n&&([ke,he]=n($e)),{render:Se,hydrate:ke,createApp:Og(Se,ke)}}function Rt({effect:e,update:n},s){e.allowRecurse=n.allowRecurse=s}function na(e,n,s=!1){const a=e.children,o=n.children;if(ue(a)&&ue(o))for(let i=0;i<a.length;i++){const l=a[i];let c=o[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=o[i]=vt(o[i]),c.el=l.el),s||na(l,c)),c.type===La&&(c.el=l.el),c.type===Qe&&!c.el&&(c.el=l.el)}}function Mg(e){const n=e.slice(),s=[0];let a,o,i,l,c;const u=e.length;for(a=0;a<u;a++){const p=e[a];if(p!==0){if(o=s[s.length-1],e[o]<p){n[a]=o,s.push(a);continue}for(i=0,l=s.length-1;i<l;)c=i+l>>1,e[s[c]]<p?i=c+1:l=c;p<e[s[i]]&&(i>0&&(n[a]=s[i-1]),s[i]=a)}}for(i=s.length,l=s[i-1];i-- >0;)s[i]=l,l=n[l];return s}const Ig=e=>e.__isTeleport,Cs=e=>e&&(e.disabled||e.disabled===""),tc=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Qo=(e,n)=>{const s=e&&e.to;if(We(s))if(n){const a=n(s);return a||V(`Failed to locate Teleport target with selector "${s}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),a}else return V("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!s&&!Cs(e)&&V(`Invalid Teleport target: ${s}`),s},Ng={__isTeleport:!0,process(e,n,s,a,o,i,l,c,u,p){const{mc:d,pc:f,pbc:h,o:{insert:m,querySelector:g,createText:b,createComment:y}}=p,$=Cs(n.props);let{shapeFlag:S,children:x,dynamicChildren:P}=n;if(Pt&&(u=!1,P=null),e==null){const R=n.el=y("teleport start"),H=n.anchor=y("teleport end");m(R,s,a),m(H,s,a);const Y=n.target=Qo(n.props,g),D=n.targetAnchor=b("");Y?(m(D,Y),l=l||tc(Y)):$||V("Invalid Teleport target on mount:",Y,`(${typeof Y})`);const G=(ae,fe)=>{S&16&&d(x,ae,fe,o,i,l,c,u)};$?G(s,H):Y&&G(Y,D)}else{n.el=e.el;const R=n.anchor=e.anchor,H=n.target=e.target,Y=n.targetAnchor=e.targetAnchor,D=Cs(e.props),G=D?s:H,ae=D?R:Y;if(l=l||tc(H),P?(h(e.dynamicChildren,P,G,o,i,l,c),na(e,n,!0)):u||f(e,n,G,ae,o,i,l,c,!1),$)D||Ya(n,s,R,p,1);else if((n.props&&n.props.to)!==(e.props&&e.props.to)){const fe=n.target=Qo(n.props,g);fe?Ya(n,fe,null,p,0):V("Invalid Teleport target on update:",H,`(${typeof H})`)}else D&&Ya(n,H,Y,p,1)}nd(n)},remove(e,n,s,a,{um:o,o:{remove:i}},l){const{shapeFlag:c,children:u,anchor:p,targetAnchor:d,target:f,props:h}=e;if(f&&i(d),(l||!Cs(h))&&(i(p),c&16))for(let m=0;m<u.length;m++){const g=u[m];o(g,n,s,!0,!!g.dynamicChildren)}},move:Ya,hydrate:Dg};function Ya(e,n,s,{o:{insert:a},m:o},i=2){i===0&&a(e.targetAnchor,n,s);const{el:l,anchor:c,shapeFlag:u,children:p,props:d}=e,f=i===2;if(f&&a(l,n,s),(!f||Cs(d))&&u&16)for(let h=0;h<p.length;h++)o(p[h],n,s,2);f&&a(c,n,s)}function Dg(e,n,s,a,o,i,{o:{nextSibling:l,parentNode:c,querySelector:u}},p){const d=n.target=Qo(n.props,u);if(d){const f=d._lpa||d.firstChild;if(n.shapeFlag&16)if(Cs(n.props))n.anchor=p(l(e),n,c(e),s,a,o,i),n.targetAnchor=f;else{n.anchor=l(e);let h=f;for(;h;)if(h=l(h),h&&h.nodeType===8&&h.data==="teleport anchor"){n.targetAnchor=h,d._lpa=n.targetAnchor&&l(n.targetAnchor);break}p(f,n,d,s,a,o,i)}nd(n)}return n.anchor&&l(n.anchor)}const Lg=Ng;function nd(e){const n=e.ctx;if(n&&n.ut){let s=e.children[0].el;for(;s!==e.targetAnchor;)s.nodeType===1&&s.setAttribute("data-v-owner",n.uid),s=s.nextSibling;n.ut()}}const Ae=Symbol("Fragment"),La=Symbol("Text"),Qe=Symbol("Comment"),or=Symbol("Static"),ta=[];let Hn=null;function k(e=!1){ta.push(Hn=e?null:[])}function jg(){ta.pop(),Hn=ta[ta.length-1]||null}let ka=1;function sc(e){ka+=e}function td(e){return e.dynamicChildren=ka>0?Hn||Ss:null,jg(),ka>0&&Hn&&Hn.push(e),e}function ee(e,n,s,a,o,i){return td(t(e,n,s,a,o,i,!0))}function T(e,n,s,a,o){return td(N(e,n,s,a,o,!0))}function Nt(e){return e?e.__v_isVNode===!0:!1}function xt(e,n){return n.shapeFlag&6&&ks.has(n.type)?(e.shapeFlag&=-257,n.shapeFlag&=-513,!1):e.type===n.type&&e.key===n.key}const Rg=(...e)=>Bg(...e),Zr="__vInternal",sd=({key:e})=>e??null,ir=({ref:e,ref_key:n,ref_for:s})=>e!=null?We(e)||Fe(e)||me(e)?{i:Xe,r:e,k:n,f:!!s}:e:null;function t(e,n=null,s=null,a=0,o=null,i=e===Ae?0:1,l=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&sd(n),ref:n&&ir(n),scopeId:zr,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:a,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Xe};return c?(nl(u,s),i&128&&e.normalize(u)):s&&(u.shapeFlag|=We(s)?8:16),u.key!==u.key&&V("VNode created with invalid key (NaN). VNode type:",u.type),ka>0&&!l&&Hn&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&Hn.push(u),u}const N=Rg;function Bg(e,n=null,s=null,a=0,o=null,i=!1){if((!e||e===og)&&(e||V(`Invalid vnode type when creating vnode: ${e}.`),e=Qe),Nt(e)){const c=zn(e,n,!0);return s&&nl(c,s),ka>0&&!i&&Hn&&(c.shapeFlag&6?Hn[Hn.indexOf(e)]=c:Hn.push(c)),c.patchFlag|=-2,c}if(ld(e)&&(e=e.__vccOpts),n){n=L(n);let{class:c,style:u}=n;c&&!We(c)&&(n.class=He(c)),Ne(u)&&(kr(u)&&!ue(u)&&(u=ze({},u)),n.style=tn(u))}const l=We(e)?1:Dp(e)?128:Ig(e)?64:Ne(e)?4:me(e)?2:0;return l&4&&kr(e)&&(e=ge(e),V("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),t(e,n,s,a,o,l,i,!0)}function L(e){return e?kr(e)||Zr in e?ze({},e):e:null}function zn(e,n,s=!1){const{props:a,ref:o,patchFlag:i,children:l}=e,c=n?le(a||{},n):a;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&sd(c),ref:n&&n.ref?s&&o?ue(o)?o.concat(ir(n)):[o,ir(n)]:ir(n):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i===-1&&ue(l)?l.map(ad):l,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Ae?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&zn(e.ssContent),ssFallback:e.ssFallback&&zn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function ad(e){const n=zn(e);return ue(e.children)&&(n.children=e.children.map(ad)),n}function r(e=" ",n=0){return N(La,null,e,n)}function xe(e="",n=!1){return n?(k(),T(Qe,null,e)):N(Qe,null,e)}function Vn(e){return e==null||typeof e=="boolean"?N(Qe):ue(e)?N(Ae,null,e.slice()):typeof e=="object"?vt(e):N(La,null,String(e))}function vt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:zn(e)}function nl(e,n){let s=0;const{shapeFlag:a}=e;if(n==null)n=null;else if(ue(n))s=16;else if(typeof n=="object")if(a&65){const o=n.default;o&&(o._c&&(o._d=!1),nl(e,o()),o._c&&(o._d=!0));return}else{s=32;const o=n._;!o&&!(Zr in n)?n._ctx=Xe:o===3&&Xe&&(Xe.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else me(n)?(n={default:n,_ctx:Xe},s=32):(n=String(n),a&64?(s=16,n=[r(n)]):s=8);e.children=n,e.shapeFlag|=s}function le(...e){const n={};for(let s=0;s<e.length;s++){const a=e[s];for(const o in a)if(o==="class")n.class!==a.class&&(n.class=He([n.class,a.class]));else if(o==="style")n.style=tn([n.style,a.style]);else if(Fa(o)){const i=n[o],l=a[o];l&&i!==l&&!(ue(i)&&i.includes(l))&&(n[o]=i?[].concat(i,l):l)}else o!==""&&(n[o]=a[o])}return n}function Mn(e,n,s,a=null){Dn(e,n,7,[s,a])}const qg=ed();let Wg=0;function Vg(e,n,s){const a=e.type,o=(n?n.appContext:e.appContext)||qg,i={uid:Wg++,vnode:e,type:a,parent:n,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new rp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Zp(a,o),emitsOptions:Ip(a,o),emit:null,emitted:null,propsDefaults:Re,inheritAttrs:a.inheritAttrs,ctx:Re,data:Re,props:Re,attrs:Re,slots:Re,refs:Re,setupState:Re,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx=lg(i),i.root=n?n.root:i,i.emit=Bm.bind(null,i),e.ce&&e.ce(i),i}let Ue=null;const Fn=()=>Ue||Xe,Fs=e=>{Ue=e,e.scope.on()},ss=()=>{Ue&&Ue.scope.off(),Ue=null},Hg=Lt("slot,component");function ei(e,n){const s=n.isNativeTag||ep;(Hg(e)||s(e))&&V("Do not use built-in or reserved HTML elements as component id: "+e)}function rd(e){return e.vnode.shapeFlag&4}let ba=!1;function zg(e,n=!1){ba=n;const{props:s,children:a}=e.vnode,o=rd(e);_g(e,s,o,n),Cg(e,a);const i=o?Ug(e,n):void 0;return ba=!1,i}function Ug(e,n){var s;const a=e.type;{if(a.name&&ei(a.name,e.appContext.config),a.components){const i=Object.keys(a.components);for(let l=0;l<i.length;l++)ei(i[l],e.appContext.config)}if(a.directives){const i=Object.keys(a.directives);for(let l=0;l<i.length;l++)Hp(i[l])}a.compilerOptions&&Kg()&&V('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}e.accessCache=Object.create(null),e.proxy=qr(new Proxy(e.ctx,Up)),cg(e);const{setup:o}=a;if(o){const i=e.setupContext=o.length>1?id(e):null;Fs(e),is();const l=ct(o,e,0,[ys(e.props),i]);if(ls(),ss(),Ni(l)){if(l.then(ss,ss),n)return l.then(c=>{ac(e,c,n)}).catch(c=>{Wr(c,e,0)});if(e.asyncDep=l,!e.suspense){const c=(s=a.name)!==null&&s!==void 0?s:"Anonymous";V(`Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else ac(e,l,n)}else od(e,n)}function ac(e,n,s){me(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:Ne(n)?(Nt(n)&&V("setup() should not return VNodes directly - return a render function instead."),e.devtoolsRawSetupState=n,e.setupState=yp(n),ug(e)):n!==void 0&&V(`setup() should return an object. Received: ${n===null?"null":typeof n}`),od(e,s)}let ni;const Kg=()=>!ni;function od(e,n,s){const a=e.type;if(!e.render){if(!n&&ni&&!a.render){const o=a.template||Qi(e).template;if(o){tt(e,"compile");const{isCustomElement:i,compilerOptions:l}=e.appContext.config,{delimiters:c,compilerOptions:u}=a,p=ze(ze({isCustomElement:i,delimiters:c},l),u);a.render=ni(o,p),st(e,"compile")}}e.render=a.render||kn}Fs(e),is(),dg(e),ls(),ss(),!a.render&&e.render===kn&&!n&&(a.template?V('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):V("Component is missing template or render function."))}function Gg(e){return new Proxy(e.attrs,{get(n,s){return vr(),vn(e,"get","$attrs"),n[s]},set(){return V("setupContext.attrs is readonly."),!1},deleteProperty(){return V("setupContext.attrs is readonly."),!1}})}function id(e){const n=a=>{if(e.exposed&&V("expose() should be called only once per setup()."),a!=null){let o=typeof a;o==="object"&&(ue(a)?o="array":Fe(a)&&(o="ref")),o!=="object"&&V(`expose() should be passed a plain object, received ${o}.`)}e.exposed=a||{}};let s;return Object.freeze({get attrs(){return s||(s=Gg(e))},get slots(){return ys(e.slots)},get emit(){return(a,...o)=>e.emit(a,...o)},expose:n})}function Yr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(yp(qr(e.exposed)),{get(n,s){if(s in n)return n[s];if(s in ts)return ts[s](e)},has(n,s){return s in n||s in ts}}))}const Zg=/(?:^|[-_])(\w)/g,Yg=e=>e.replace(Zg,n=>n.toUpperCase()).replace(/[-_]/g,"");function va(e,n=!0){return me(e)?e.displayName||e.name:e.name||n&&e.__name}function Jr(e,n,s=!1){let a=va(n);if(!a&&n.__file){const o=n.__file.match(/([^/\\]+)\.\w+$/);o&&(a=o[1])}if(!a&&e&&e.parent){const o=i=>{for(const l in i)if(i[l]===n)return l};a=o(e.components||e.parent.type.components)||o(e.appContext.components)}return a?Yg(a):s?"App":"Anonymous"}function ld(e){return me(e)&&"__vccOpts"in e}const I=(e,n)=>km(e,n,ba);function Jg(){return Xg().slots}function Xg(){const e=Fn();return e||V("useContext() called without active instance."),e.setupContext||(e.setupContext=id(e))}function Pn(e,n,s){const a=arguments.length;return a===2?Ne(n)&&!ue(n)?Nt(n)?N(e,null,[n]):N(e,n):N(e,null,n):(a>3?s=Array.prototype.slice.call(arguments,2):a===3&&Nt(s)&&(s=[s]),N(e,n,s))}const Qg=Symbol("ssrContext"),e_=()=>{{const e=C(Qg);return e||V("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}};function po(e){return!!(e&&e.__v_isShallow)}function n_(){if(typeof window>"u")return;const e={style:"color:#3ba776"},n={style:"color:#0b1bc9"},s={style:"color:#b62e24"},a={style:"color:#9d288c"},o={header(f){return Ne(f)?f.__isVue?["div",e,"VueInstance"]:Fe(f)?["div",{},["span",e,d(f)],"<",c(f.value),">"]:es(f)?["div",{},["span",e,po(f)?"ShallowReactive":"Reactive"],"<",c(f),`>${It(f)?" (readonly)":""}`]:It(f)?["div",{},["span",e,po(f)?"ShallowReadonly":"Readonly"],"<",c(f),">"]:null:null},hasBody(f){return f&&f.__isVue},body(f){if(f&&f.__isVue)return["div",{},...i(f.$)]}};function i(f){const h=[];f.type.props&&f.props&&h.push(l("props",ge(f.props))),f.setupState!==Re&&h.push(l("setup",f.setupState)),f.data!==Re&&h.push(l("data",ge(f.data)));const m=u(f,"computed");m&&h.push(l("computed",m));const g=u(f,"inject");return g&&h.push(l("injected",g)),h.push(["div",{},["span",{style:a.style+";opacity:0.66"},"$ (internal): "],["object",{object:f}]]),h}function l(f,h){return h=ze({},h),Object.keys(h).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},f],["div",{style:"padding-left:1.25em"},...Object.keys(h).map(m=>["div",{},["span",a,m+": "],c(h[m],!1)])]]:["span",{}]}function c(f,h=!0){return typeof f=="number"?["span",n,f]:typeof f=="string"?["span",s,JSON.stringify(f)]:typeof f=="boolean"?["span",a,f]:Ne(f)?["object",{object:h?ge(f):f}]:["span",s,String(f)]}function u(f,h){const m=f.type;if(me(m))return;const g={};for(const b in f.ctx)p(m,b,h)&&(g[b]=f.ctx[b]);return g}function p(f,h,m){const g=f[m];if(ue(g)&&g.includes(h)||Ne(g)&&h in g||f.extends&&p(f.extends,h,m)||f.mixins&&f.mixins.some(b=>p(b,h,m)))return!0}function d(f){return po(f)?"ShallowRef":f.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(o):window.devtoolsFormatters=[o]}const xr="3.2.47",t_="http://www.w3.org/2000/svg",Ut=typeof document<"u"?document:null,rc=Ut&&Ut.createElement("template"),s_={insert:(e,n,s)=>{n.insertBefore(e,s||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,s,a)=>{const o=n?Ut.createElementNS(t_,e):Ut.createElement(e,s?{is:s}:void 0);return e==="select"&&a&&a.multiple!=null&&o.setAttribute("multiple",a.multiple),o},createText:e=>Ut.createTextNode(e),createComment:e=>Ut.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ut.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,s,a,o,i){const l=s?s.previousSibling:n.lastChild;if(o&&(o===i||o.nextSibling))for(;n.insertBefore(o.cloneNode(!0),s),!(o===i||!(o=o.nextSibling)););else{rc.innerHTML=a?`<svg>${e}</svg>`:e;const c=rc.content;if(a){const u=c.firstChild;for(;u.firstChild;)c.appendChild(u.firstChild);c.removeChild(u)}n.insertBefore(c,s)}return[l?l.nextSibling:n.firstChild,s?s.previousSibling:n.lastChild]}};function a_(e,n,s){const a=e._vtc;a&&(n=(n?[n,...a]:[...a]).join(" ")),n==null?e.removeAttribute("class"):s?e.setAttribute("class",n):e.className=n}function r_(e,n,s){const a=e.style,o=We(s);if(s&&!o){if(n&&!We(n))for(const i in n)s[i]==null&&ti(a,i,"");for(const i in s)ti(a,i,s[i])}else{const i=a.display;o?n!==s&&(a.cssText=s):n&&e.removeAttribute("style"),"_vod"in e&&(a.display=i)}}const o_=/[^\\];\s*$/,oc=/\s*!important$/;function ti(e,n,s){if(ue(s))s.forEach(a=>ti(e,n,a));else if(s==null&&(s=""),o_.test(s)&&V(`Unexpected semicolon at the end of '${n}' style value: '${s}'`),n.startsWith("--"))e.setProperty(n,s);else{const a=i_(e,n);oc.test(s)?e.setProperty(ut(a),s.replace(oc,""),"important"):e[a]=s}}const ic=["Webkit","Moz","ms"],fo={};function i_(e,n){const s=fo[n];if(s)return s;let a=Qn(n);if(a!=="filter"&&a in e)return fo[n]=a;a=rs(a);for(let o=0;o<ic.length;o++){const i=ic[o]+a;if(i in e)return fo[n]=i}return n}const lc="http://www.w3.org/1999/xlink";function l_(e,n,s,a,o){if(a&&n.startsWith("xlink:"))s==null?e.removeAttributeNS(lc,n.slice(6,n.length)):e.setAttributeNS(lc,n,s);else{const i=Ch(n);s==null||i&&!Xu(s)?e.removeAttribute(n):e.setAttribute(n,i?"":s)}}function c_(e,n,s,a,o,i,l){if(n==="innerHTML"||n==="textContent"){a&&l(a,o,i),e[n]=s??"";return}if(n==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=s;const u=s??"";(e.value!==u||e.tagName==="OPTION")&&(e.value=u),s==null&&e.removeAttribute(n);return}let c=!1;if(s===""||s==null){const u=typeof e[n];u==="boolean"?s=Xu(s):s==null&&u==="string"?(s="",c=!0):u==="number"&&(s=0,c=!0)}try{e[n]=s}catch(u){c||V(`Failed setting prop "${n}" on <${e.tagName.toLowerCase()}>: value ${s} is invalid.`,u)}c&&e.removeAttribute(n)}function bs(e,n,s,a){e.addEventListener(n,s,a)}function u_(e,n,s,a){e.removeEventListener(n,s,a)}function p_(e,n,s,a,o=null){const i=e._vei||(e._vei={}),l=i[n];if(a&&l)l.value=a;else{const[c,u]=d_(n);if(a){const p=i[n]=m_(a,o);bs(e,c,p,u)}else l&&(u_(e,c,l,u),i[n]=void 0)}}const cc=/(?:Once|Passive|Capture)$/;function d_(e){let n;if(cc.test(e)){n={};let a;for(;a=e.match(cc);)e=e.slice(0,e.length-a[0].length),n[a[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):ut(e.slice(2)),n]}let ho=0;const f_=Promise.resolve(),h_=()=>ho||(f_.then(()=>ho=0),ho=Date.now());function m_(e,n){const s=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=s.attached)return;Dn(g_(a,s.value),n,5,[a])};return s.value=e,s.attached=h_(),s}function g_(e,n){if(ue(n)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},n.map(a=>o=>!o._stopped&&a&&a(o))}else return n}const uc=/^on[a-z]/,__=(e,n,s,a,o=!1,i,l,c,u)=>{n==="class"?a_(e,a,o):n==="style"?r_(e,s,a):Fa(n)?fr(n)||p_(e,n,s,a,l):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):k_(e,n,a,o))?c_(e,n,a,i,l,c,u):(n==="true-value"?e._trueValue=a:n==="false-value"&&(e._falseValue=a),l_(e,n,a,o))};function k_(e,n,s,a){return a?!!(n==="innerHTML"||n==="textContent"||n in e&&uc.test(n)&&me(s)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA"||uc.test(n)&&We(s)?!1:n in e}const gt="transition",Bs="animation",cd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},b_=ze({},Jm.props,cd),Bt=(e,n=[])=>{ue(e)?e.forEach(s=>s(...n)):e&&e(...n)},pc=e=>e?ue(e)?e.some(n=>n.length>1):e.length>1:!1;function v_(e){const n={};for(const Q in e)Q in cd||(n[Q]=e[Q]);if(e.css===!1)return n;const{name:s="v",type:a,duration:o,enterFromClass:i=`${s}-enter-from`,enterActiveClass:l=`${s}-enter-active`,enterToClass:c=`${s}-enter-to`,appearFromClass:u=i,appearActiveClass:p=l,appearToClass:d=c,leaveFromClass:f=`${s}-leave-from`,leaveActiveClass:h=`${s}-leave-active`,leaveToClass:m=`${s}-leave-to`}=e,g=y_(o),b=g&&g[0],y=g&&g[1],{onBeforeEnter:$,onEnter:S,onEnterCancelled:x,onLeave:P,onLeaveCancelled:R,onBeforeAppear:H=$,onAppear:Y=S,onAppearCancelled:D=x}=n,G=(Q,de,De)=>{kt(Q,de?d:c),kt(Q,de?p:l),De&&De()},ae=(Q,de)=>{Q._isLeaving=!1,kt(Q,f),kt(Q,m),kt(Q,h),de&&de()},fe=Q=>(de,De)=>{const Ge=Q?Y:S,Be=()=>G(de,Q,De);Bt(Ge,[de,Be]),dc(()=>{kt(de,Q?u:i),at(de,Q?d:c),pc(Ge)||fc(de,a,b,Be)})};return ze(n,{onBeforeEnter(Q){Bt($,[Q]),at(Q,i),at(Q,l)},onBeforeAppear(Q){Bt(H,[Q]),at(Q,u),at(Q,p)},onEnter:fe(!1),onAppear:fe(!0),onLeave(Q,de){Q._isLeaving=!0;const De=()=>ae(Q,de);at(Q,f),pd(),at(Q,h),dc(()=>{Q._isLeaving&&(kt(Q,f),at(Q,m),pc(P)||fc(Q,a,y,De))}),Bt(P,[Q,De])},onEnterCancelled(Q){G(Q,!1),Bt(x,[Q])},onAppearCancelled(Q){G(Q,!0),Bt(D,[Q])},onLeaveCancelled(Q){ae(Q),Bt(R,[Q])}})}function y_(e){if(e==null)return null;if(Ne(e))return[mo(e.enter),mo(e.leave)];{const n=mo(e);return[n,n]}}function mo(e){const n=Mh(e);return Sm(n,"<transition> explicit duration"),n}function at(e,n){n.split(/\s+/).forEach(s=>s&&e.classList.add(s)),(e._vtc||(e._vtc=new Set)).add(n)}function kt(e,n){n.split(/\s+/).forEach(a=>a&&e.classList.remove(a));const{_vtc:s}=e;s&&(s.delete(n),s.size||(e._vtc=void 0))}function dc(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let w_=0;function fc(e,n,s,a){const o=e._endId=++w_,i=()=>{o===e._endId&&a()};if(s)return setTimeout(i,s);const{type:l,timeout:c,propCount:u}=ud(e,n);if(!l)return a();const p=l+"end";let d=0;const f=()=>{e.removeEventListener(p,h),i()},h=m=>{m.target===e&&++d>=u&&f()};setTimeout(()=>{d<u&&f()},c+1),e.addEventListener(p,h)}function ud(e,n){const s=window.getComputedStyle(e),a=g=>(s[g]||"").split(", "),o=a(`${gt}Delay`),i=a(`${gt}Duration`),l=hc(o,i),c=a(`${Bs}Delay`),u=a(`${Bs}Duration`),p=hc(c,u);let d=null,f=0,h=0;n===gt?l>0&&(d=gt,f=l,h=i.length):n===Bs?p>0&&(d=Bs,f=p,h=u.length):(f=Math.max(l,p),d=f>0?l>p?gt:Bs:null,h=d?d===gt?i.length:u.length:0);const m=d===gt&&/\b(transform|all)(,|$)/.test(a(`${gt}Property`).toString());return{type:d,timeout:f,propCount:h,hasTransform:m}}function hc(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((s,a)=>mc(s)+mc(e[a])))}function mc(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function pd(){return document.body.offsetHeight}const dd=new WeakMap,fd=new WeakMap,hd={name:"TransitionGroup",props:ze({},b_,{tag:String,moveClass:String}),setup(e,{slots:n}){const s=Fn(),a=jp();let o,i;return Kr(()=>{if(!o.length)return;const l=e.moveClass||`${e.name||"v"}-move`;if(!P_(o[0].el,s.vnode.el,l))return;o.forEach(E_),o.forEach(C_);const c=o.filter($_);pd(),c.forEach(u=>{const p=u.el,d=p.style;at(p,l),d.transform=d.webkitTransform=d.transitionDuration="";const f=p._moveCb=h=>{h&&h.target!==p||(!h||/transform$/.test(h.propertyName))&&(p.removeEventListener("transitionend",f),p._moveCb=null,kt(p,l))};p.addEventListener("transitionend",f)})}),()=>{const l=ge(e),c=v_(l);let u=l.tag||Ae;o=i,i=n.default?Yi(n.default()):[];for(let p=0;p<i.length;p++){const d=i[p];d.key!=null?Ts(d,_a(d,c,a,s)):V("<TransitionGroup> children must be keyed.")}if(o)for(let p=0;p<o.length;p++){const d=o[p];Ts(d,_a(d,c,a,s)),dd.set(d,d.el.getBoundingClientRect())}return N(u,null,i)}}},S_=e=>delete e.mode;hd.props;const x_=hd;function E_(e){const n=e.el;n._moveCb&&n._moveCb(),n._enterCb&&n._enterCb()}function C_(e){fd.set(e,e.el.getBoundingClientRect())}function $_(e){const n=dd.get(e),s=fd.get(e),a=n.left-s.left,o=n.top-s.top;if(a||o){const i=e.el.style;return i.transform=i.webkitTransform=`translate(${a}px,${o}px)`,i.transitionDuration="0s",e}}function P_(e,n,s){const a=e.cloneNode();e._vtc&&e._vtc.forEach(l=>{l.split(/\s+/).forEach(c=>c&&a.classList.remove(c))}),s.split(/\s+/).forEach(l=>l&&a.classList.add(l)),a.style.display="none";const o=n.nodeType===1?n:n.parentNode;o.appendChild(a);const{hasTransform:i}=ud(a);return o.removeChild(a),i}const gc=e=>{const n=e.props["onUpdate:modelValue"]||!1;return ue(n)?s=>wt(n,s):n};function O_(e){e.target.composing=!0}function _c(e){const n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const T_={created(e,{modifiers:{lazy:n,trim:s,number:a}},o){e._assign=gc(o);const i=a||o.props&&o.props.type==="number";bs(e,n?"change":"input",l=>{if(l.target.composing)return;let c=e.value;s&&(c=c.trim()),i&&(c=jo(c)),e._assign(c)}),s&&bs(e,"change",()=>{e.value=e.value.trim()}),n||(bs(e,"compositionstart",O_),bs(e,"compositionend",_c),bs(e,"change",_c))},mounted(e,{value:n}){e.value=n??""},beforeUpdate(e,{value:n,modifiers:{lazy:s,trim:a,number:o}},i){if(e._assign=gc(i),e.composing||document.activeElement===e&&e.type!=="range"&&(s||a&&e.value.trim()===n||(o||e.type==="number")&&jo(e.value)===n))return;const l=n??"";e.value!==l&&(e.value=l)}},F_={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},kc=(e,n)=>s=>{if(!("key"in s))return;const a=ut(s.key);if(n.some(o=>o===a||F_[o]===a))return e(s)},md={beforeMount(e,{value:n},{transition:s}){e._vod=e.style.display==="none"?"":e.style.display,s&&n?s.beforeEnter(e):qs(e,n)},mounted(e,{value:n},{transition:s}){s&&n&&s.enter(e)},updated(e,{value:n,oldValue:s},{transition:a}){!n!=!s&&(a?n?(a.beforeEnter(e),qs(e,!0),a.enter(e)):a.leave(e,()=>{qs(e,!1)}):qs(e,n))},beforeUnmount(e,{value:n}){qs(e,n)}};function qs(e,n){e.style.display=n?e._vod:"none"}const A_=ze({patchProp:__},s_);let bc;function M_(){return bc||(bc=Fg(A_))}const I_=(...e)=>{const n=M_().createApp(...e);N_(n),D_(n);const{mount:s}=n;return n.mount=a=>{const o=L_(a);if(!o)return;const i=n._component;!me(i)&&!i.render&&!i.template&&(i.template=o.innerHTML),o.innerHTML="";const l=s(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),l},n};function N_(e){Object.defineProperty(e.config,"isNativeTag",{value:n=>Ju(n)||xh(n),writable:!1})}function D_(e){{const n=e.config.isCustomElement;Object.defineProperty(e.config,"isCustomElement",{get(){return n},set(){V("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const s=e.config.compilerOptions,a='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(e.config,"compilerOptions",{get(){return V(a),s},set(){V(a)}})}}function L_(e){if(We(e)){const n=document.querySelector(e);return n||V(`Failed to mount app: mount target selector "${e}" returned null.`),n}return window.ShadowRoot&&e instanceof window.ShadowRoot&&e.mode==="closed"&&V('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),e}function j_(){n_()}j_();function si(e,n={},s){for(const a in e){const o=e[a],i=s?`${s}:${a}`:a;typeof o=="object"&&o!==null?si(o,n,i):typeof o=="function"&&(n[i]=o)}return n}const R_={run:e=>e()},B_=()=>R_,gd=typeof console.createTask<"u"?console.createTask:B_;function q_(e,n){const s=n.shift(),a=gd(s);return e.reduce((o,i)=>o.then(()=>a.run(()=>i(...n))),Promise.resolve())}function W_(e,n){const s=n.shift(),a=gd(s);return Promise.all(e.map(o=>a.run(()=>o(...n))))}function go(e,n){for(const s of e)s(n)}class V_{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(n,s,a={}){if(!n||typeof s!="function")return()=>{};const o=n;let i;for(;this._deprecatedHooks[n];)i=this._deprecatedHooks[n],n=i.to;if(i&&!a.allowDeprecated){let l=i.message;l||(l=`${o} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(l)||(console.warn(l),this._deprecatedMessages.add(l))}if(!s.name)try{Object.defineProperty(s,"name",{get:()=>"_"+n.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[n]=this._hooks[n]||[],this._hooks[n].push(s),()=>{s&&(this.removeHook(n,s),s=void 0)}}hookOnce(n,s){let a,o=(...i)=>(typeof a=="function"&&a(),a=void 0,o=void 0,s(...i));return a=this.hook(n,o),a}removeHook(n,s){if(this._hooks[n]){const a=this._hooks[n].indexOf(s);a!==-1&&this._hooks[n].splice(a,1),this._hooks[n].length===0&&delete this._hooks[n]}}deprecateHook(n,s){this._deprecatedHooks[n]=typeof s=="string"?{to:s}:s;const a=this._hooks[n]||[];this._hooks[n]=void 0;for(const o of a)this.hook(n,o)}deprecateHooks(n){Object.assign(this._deprecatedHooks,n);for(const s in n)this.deprecateHook(s,n[s])}addHooks(n){const s=si(n),a=Object.keys(s).map(o=>this.hook(o,s[o]));return()=>{for(const o of a.splice(0,a.length))o()}}removeHooks(n){const s=si(n);for(const a in s)this.removeHook(a,s[a])}removeAllHooks(){for(const n in this._hooks)delete this._hooks[n]}callHook(n,...s){return s.unshift(n),this.callHookWith(q_,n,...s)}callHookParallel(n,...s){return s.unshift(n),this.callHookWith(W_,n,...s)}callHookWith(n,s,...a){const o=this._before||this._after?{name:s,args:a,context:{}}:void 0;this._before&&go(this._before,o);const i=n(this._hooks[s]||[],a);return i instanceof Promise?i.finally(()=>{this._after&&o&&go(this._after,o)}):(this._after&&o&&go(this._after,o),i)}beforeEach(n){return this._before=this._before||[],this._before.push(n),()=>{const s=this._before.indexOf(n);s!==-1&&this._before.splice(s,1)}}afterEach(n){return this._after=this._after||[],this._after.push(n),()=>{const s=this._after.indexOf(n);s!==-1&&this._after.splice(s,1)}}}function H_(){return new V_}function z_(e){return Array.isArray(e)?e:[e]}const _d=["title","script","style","noscript"],tl=["base","meta","link","style","script","noscript"],U_=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],K_=["base","title","titleTemplate","bodyAttrs","htmlAttrs"],G_=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function kd(e){let n=9;for(let s=0;s<e.length;)n=Math.imul(n^e.charCodeAt(s++),9**9);return((n^n>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Er(e){return kd(`${e.tag}:${e.textContent||e.innerHTML||""}:${Object.entries(e.props).map(([n,s])=>`${n}:${String(s)}`).join(",")}`)}function Z_(e){let n=9;for(const s of e)for(let a=0;a<s.length;)n=Math.imul(n^s.charCodeAt(a++),9**9);return((n^n>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function bd(e,n){const{props:s,tag:a}=e;if(K_.includes(a))return a;if(a==="link"&&s.rel==="canonical")return"canonical";if(s.charset)return"charset";const o=["id"];a==="meta"&&o.push("name","property","http-equiv");for(const i of o)if(typeof s[i]<"u"){const l=String(s[i]);return n&&!n(l)?!1:`${a}:${i}:${l}`}return!1}const vc=(e,n)=>e==null?n||null:typeof e=="function"?e(n):e,Ja=(e,n=!1,s)=>{const{tag:a,$el:o}=e;o&&(Object.entries(a.props).forEach(([i,l])=>{l=String(l);const c=`attr:${i}`;if(i==="class"){if(!l)return;for(const u of l.split(" ")){const p=`${c}:${u}`;s&&s(e,p,()=>o.classList.remove(u)),o.classList.contains(u)||o.classList.add(u)}return}s&&!i.startsWith("data-h-")&&s(e,c,()=>o.removeAttribute(i)),(n||o.getAttribute(i)!==l)&&o.setAttribute(i,l)}),_d.includes(a.tag)&&(a.textContent&&a.textContent!==o.textContent?o.textContent=a.textContent:a.innerHTML&&a.innerHTML!==o.innerHTML&&(o.innerHTML=a.innerHTML)))};let Ws=!1;async function vd(e,n={}){var h,m;const s={shouldRender:!0};if(await e.hooks.callHook("dom:beforeRender",s),!s.shouldRender)return;const a=n.document||e.resolvedOptions.document||window.document,o=(await e.resolveTags()).map(c);if(e.resolvedOptions.experimentalHashHydration&&(Ws=Ws||e._hash||!1,Ws)){const g=Z_(o.map(b=>b.tag._h));if(Ws===g)return;Ws=g}const i=e._popSideEffectQueue();e.headEntries().map(g=>g._sde).forEach(g=>{Object.entries(g).forEach(([b,y])=>{i[b]=y})});const l=(g,b,y)=>{b=`${g.renderId}:${b}`,g.entry&&(g.entry._sde[b]=y),delete i[b]};function c(g){const b=e.headEntries().find($=>$._i===g._e),y={renderId:g._d||Er(g),$el:null,shouldRender:!0,tag:g,entry:b,markSideEffect:($,S)=>l(y,$,S)};return y}const u=[],p={body:[],head:[]},d=g=>{e._elMap[g.renderId]=g.$el,u.push(g),l(g,"el",()=>{var b;(b=g.$el)==null||b.remove(),delete e._elMap[g.renderId]})};for(const g of o){if(await e.hooks.callHook("dom:beforeRenderTag",g),!g.shouldRender)continue;const{tag:b}=g;if(b.tag==="title"){a.title=b.textContent||"",u.push(g);continue}if(b.tag==="htmlAttrs"||b.tag==="bodyAttrs"){g.$el=a[b.tag==="htmlAttrs"?"documentElement":"body"],Ja(g,!1,l),u.push(g);continue}if(g.$el=e._elMap[g.renderId],!g.$el&&b.key&&(g.$el=a.querySelector(`${(h=b.tagPosition)!=null&&h.startsWith("body")?"body":"head"} > ${b.tag}[data-h-${b._h}]`)),g.$el){g.tag._d&&Ja(g),d(g);continue}p[(m=b.tagPosition)!=null&&m.startsWith("body")?"body":"head"].push(g)}const f={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(p).forEach(([g,b])=>{var $;if(!b.length)return;const y=($=a==null?void 0:a[g])==null?void 0:$.children;if(y){for(const S of[...y].reverse()){const x=S.tagName.toLowerCase();if(!tl.includes(x))continue;const P=S.getAttributeNames().reduce((D,G)=>({...D,[G]:S.getAttribute(G)}),{}),R={tag:x,props:P};S.innerHTML&&(R.innerHTML=S.innerHTML);const H=Er(R);let Y=b.findIndex(D=>(D==null?void 0:D.renderId)===H);if(Y===-1){const D=bd(R);Y=b.findIndex(G=>(G==null?void 0:G.tag._d)&&G.tag._d===D)}if(Y!==-1){const D=b[Y];D.$el=S,Ja(D),d(D),delete b[Y]}}b.forEach(S=>{const x=S.tag.tagPosition||"head";f[x]=f[x]||a.createDocumentFragment(),S.$el||(S.$el=a.createElement(S.tag.tag),Ja(S,!0)),f[x].appendChild(S.$el),d(S)})}}),f.head&&a.head.appendChild(f.head),f.bodyOpen&&a.body.insertBefore(f.bodyOpen,a.body.firstChild),f.bodyClose&&a.body.appendChild(f.bodyClose);for(const g of u)await e.hooks.callHook("dom:renderTag",g);Object.values(i).forEach(g=>g())}let _o=null;async function yd(e,n={}){function s(){return _o=null,vd(e,n)}const a=n.delayFn||(o=>setTimeout(o,10));return _o=_o||new Promise(o=>a(()=>o(s())))}const Y_=e=>({hooks:{"entries:updated":function(n){if(typeof(e==null?void 0:e.document)>"u"&&typeof window>"u")return;let s=e==null?void 0:e.delayFn;!s&&typeof requestAnimationFrame<"u"&&(s=requestAnimationFrame),yd(n,{document:(e==null?void 0:e.document)||window.document,delayFn:s})}}});function J_(e){var n;return((n=e==null?void 0:e.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:n.getAttribute("content"))||!1}const yc={critical:2,high:9,low:12,base:-1,title:1,meta:10};function wc(e){if(typeof e.tagPriority=="number")return e.tagPriority;if(e.tag==="meta"){if(e.props.charset)return-2;if(e.props["http-equiv"]==="content-security-policy")return 0}const n=e.tagPriority||e.tag;return n in yc?yc[n]:10}const X_=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function Q_(){return{hooks:{"tags:resolve":e=>{const n=s=>{var a;return(a=e.tags.find(o=>o._d===s))==null?void 0:a._p};for(const{prefix:s,offset:a}of X_)for(const o of e.tags.filter(i=>typeof i.tagPriority=="string"&&i.tagPriority.startsWith(s))){const i=n(o.tagPriority.replace(s,""));typeof i<"u"&&(o._p=i+a)}e.tags.sort((s,a)=>s._p-a._p).sort((s,a)=>wc(s)-wc(a))}}}}const ek=()=>({hooks:{"tags:resolve":e=>{const{tags:n}=e;let s=n.findIndex(o=>o.tag==="titleTemplate");const a=n.findIndex(o=>o.tag==="title");if(a!==-1&&s!==-1){const o=vc(n[s].textContent,n[a].textContent);o!==null?n[a].textContent=o||n[a].textContent:delete n[a]}else if(s!==-1){const o=vc(n[s].textContent);o!==null&&(n[s].textContent=o,n[s].tag="title",s=-1)}s!==-1&&delete n[s],e.tags=n.filter(Boolean)}}}),nk=()=>({hooks:{"tag:normalise":function({tag:e}){typeof e.props.body<"u"&&(e.tagPosition="bodyClose",delete e.props.body)}}}),wd=typeof window<"u",tk=()=>({hooks:{"tag:normalise":e=>{var i,l;const{tag:n,entry:s,resolvedOptions:a}=e;a.experimentalHashHydration===!0&&(n._h=Er(n));const o=typeof n.props._dynamic<"u";!tl.includes(n.tag)||!n.key||wd||(l=(i=xd())==null?void 0:i.resolvedOptions)!=null&&l.document||(s._m==="server"||o)&&(n._h=n._h||Er(n),n.props[`data-h-${n._h}`]="")},"tags:resolve":e=>{e.tags=e.tags.map(n=>(delete n.props._dynamic,n))}}}),Sc=["script","link","bodyAttrs"],sk=()=>{const e=(n,s)=>{const a={},o={};Object.entries(s.props).forEach(([l,c])=>{l.startsWith("on")&&typeof c=="function"?o[l]=c:a[l]=c});let i;return n==="dom"&&s.tag==="script"&&typeof a.src=="string"&&typeof o.onload<"u"&&(i=a.src,delete a.src),{props:a,eventHandlers:o,delayedSrc:i}};return{hooks:{"ssr:render":function(n){n.tags=n.tags.map(s=>(!Sc.includes(s.tag)||!Object.entries(s.props).find(([a,o])=>a.startsWith("on")&&typeof o=="function")||(s.props=e("ssr",s).props),s))},"dom:beforeRenderTag":function(n){if(!Sc.includes(n.tag.tag)||!Object.entries(n.tag.props).find(([i,l])=>i.startsWith("on")&&typeof l=="function"))return;const{props:s,eventHandlers:a,delayedSrc:o}=e("dom",n.tag);Object.keys(a).length&&(n.tag.props=s,n.tag._eventHandlers=a,n.tag._delayedSrc=o)},"dom:renderTag":function(n){const s=n.$el;if(!n.tag._eventHandlers||!s)return;const a=n.tag.tag==="bodyAttrs"&&typeof window<"u"?window:s;Object.entries(n.tag._eventHandlers).forEach(([o,i])=>{const l=`${n.tag._d||n.tag._p}:${o}`,c=o.slice(2).toLowerCase(),u=`data-h-${c}`;if(n.markSideEffect(l,()=>{}),s.hasAttribute(u))return;const p=i;s.setAttribute(u,""),a.addEventListener(c,p),n.entry&&(n.entry._sde[l]=()=>{a.removeEventListener(c,p),s.removeAttribute(u)})}),n.tag._delayedSrc&&s.setAttribute("src",n.tag._delayedSrc)}}}},ak=["templateParams","htmlAttrs","bodyAttrs"],rk=()=>({hooks:{"tag:normalise":function({tag:e}){["hid","vmid","key"].forEach(s=>{e.props[s]&&(e.key=e.props[s],delete e.props[s])});const n=e.key?`${e.tag}:${e.key}`:bd(e);n&&(e._d=n)},"tags:resolve":function(e){const n={};e.tags.forEach(a=>{const o=a._d||a._p,i=n[o];if(i){let l=a==null?void 0:a.tagDuplicateStrategy;if(!l&&ak.includes(a.tag)&&(l="merge"),l==="merge"){const u=i.props;["class","style"].forEach(p=>{a.props[p]&&u[p]&&(p==="style"&&!u[p].endsWith(";")&&(u[p]+=";"),a.props[p]=`${u[p]} ${a.props[p]}`)}),n[o].props={...u,...a.props};return}else if(a._e===i._e){i._duped=i._duped||[],a._d=`${i._d}:${i._duped.length+1}`,i._duped.push(a);return}const c=Object.keys(a.props).length;if((c===0||c===1&&typeof a.props["data-h-key"]<"u")&&!a.innerHTML&&!a.textContent){delete n[o];return}}n[o]=a});const s=[];Object.values(n).forEach(a=>{const o=a._duped;delete a._duped,s.push(a),o&&s.push(...o)}),e.tags=s}}});function ko(e,n){function s(i){let l="";return["s","pageTitle"].includes(i)?l=n.pageTitle:i.includes(".")&&(l=i.split(".").reduce((c,u)=>c[u]||"",n)),l||n[i]||""}let a=e;try{a=decodeURI(e)}catch{}return(a.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(i=>{e=e.replaceAll(i,s(i.slice(1))).trim()}),n.separator&&(e.endsWith(n.separator)&&(e=e.slice(0,-n.separator.length).trim()),e.startsWith(n.separator)&&(e=e.slice(n.separator.length).trim()),e=e.replace(new RegExp(`\\${n.separator}\\s*\\${n.separator}`,"g"),n.separator)),e}function ok(){return{hooks:{"tags:resolve":e=>{var i;const{tags:n}=e,s=(i=n.find(l=>l.tag==="title"))==null?void 0:i.textContent,a=n.findIndex(l=>l.tag==="templateParams"),o=a!==-1?n[a].textContent:{};o.pageTitle=o.pageTitle||s||"";for(const l of n)if(["titleTemplate","title"].includes(l.tag)&&typeof l.textContent=="string")l.textContent=ko(l.textContent,o);else if(l.tag==="meta"&&typeof l.props.content=="string")l.props.content=ko(l.props.content,o);else if(l.tag==="script"&&["application/json","application/ld+json"].includes(l.props.type)&&typeof l.innerHTML=="string")try{l.innerHTML=JSON.stringify(JSON.parse(l.innerHTML),(c,u)=>typeof u=="string"?ko(u,o):u)}catch{}e.tags=n.filter(l=>l.tag!=="templateParams")}}}}let Sd;const ik=e=>Sd=e,xd=()=>Sd;async function lk(e,n){const s={tag:e,props:{}};return["title","titleTemplate","templateParams"].includes(e)?(s.textContent=n instanceof Promise?await n:n,s):typeof n=="string"?["script","noscript","style"].includes(e)?(e==="script"&&(/^(https?:)?\/\//.test(n)||n.startsWith("/"))?s.props.src=n:(s.innerHTML=n,s.key=kd(n)),s):!1:(s.props=await uk(e,{...n}),s.props.children&&(s.props.innerHTML=s.props.children),delete s.props.children,Object.keys(s.props).filter(a=>G_.includes(a)).forEach(a=>{(!["innerHTML","textContent"].includes(a)||_d.includes(s.tag))&&(s[a]=s.props[a]),delete s.props[a]}),["innerHTML","textContent"].forEach(a=>{if(s.tag==="script"&&typeof s[a]=="string"&&["application/ld+json","application/json"].includes(s.props.type))try{s[a]=JSON.parse(s[a])}catch{s[a]=""}typeof s[a]=="object"&&(s[a]=JSON.stringify(s[a]))}),s.props.class&&(s.props.class=ck(s.props.class)),s.props.content&&Array.isArray(s.props.content)?s.props.content.map(a=>({...s,props:{...s.props,content:a}})):s)}function ck(e){return typeof e=="object"&&!Array.isArray(e)&&(e=Object.keys(e).filter(n=>e[n])),(Array.isArray(e)?e.join(" "):e).split(" ").filter(n=>n.trim()).filter(Boolean).join(" ")}async function uk(e,n){for(const s of Object.keys(n)){const a=s.startsWith("data-");n[s]instanceof Promise&&(n[s]=await n[s]),String(n[s])==="true"?n[s]=a?"true":"":String(n[s])==="false"&&(a?n[s]="false":delete n[s])}return n}const pk=10;async function dk(e){const n=[];return Object.entries(e.resolvedInput).filter(([s,a])=>typeof a<"u"&&U_.includes(s)).forEach(([s,a])=>{const o=z_(a);n.push(...o.map(i=>lk(s,i)).flat())}),(await Promise.all(n)).flat().filter(Boolean).map((s,a)=>(s._e=e._i,s._p=(e._i<<pk)+a,s))}const fk=()=>[rk(),Q_(),ok(),ek(),tk(),sk(),nk()],hk=(e={})=>[Y_({document:e==null?void 0:e.document,delayFn:e==null?void 0:e.domDelayFn})];function mk(e={}){const n=gk({...e,plugins:[...hk(e),...(e==null?void 0:e.plugins)||[]]});return e.experimentalHashHydration&&n.resolvedOptions.document&&(n._hash=J_(n.resolvedOptions.document)),ik(n),n}function gk(e={}){let n=[],s={},a=0;const o=H_();e!=null&&e.hooks&&o.addHooks(e.hooks),e.plugins=[...fk(),...(e==null?void 0:e.plugins)||[]],e.plugins.forEach(c=>c.hooks&&o.addHooks(c.hooks)),e.document=e.document||(wd?document:void 0);const i=()=>o.callHook("entries:updated",l),l={resolvedOptions:e,headEntries(){return n},get hooks(){return o},use(c){c.hooks&&o.addHooks(c.hooks)},push(c,u){const p={_i:a++,input:c,_sde:{}};return u!=null&&u.mode&&(p._m=u==null?void 0:u.mode),u!=null&&u.transform&&(p._t=u==null?void 0:u.transform),n.push(p),i(),{dispose(){n=n.filter(d=>d._i!==p._i?!0:(s={...s,...d._sde||{}},d._sde={},i(),!1))},patch(d){n=n.map(f=>(f._i===p._i&&(p.input=f.input=d,i()),f))}}},async resolveTags(){const c={tags:[],entries:[...n]};await o.callHook("entries:resolve",c);for(const u of c.entries){const p=u._t||(d=>d);u.resolvedInput=p(u.resolvedInput||u.input);for(const d of await dk(u)){const f={tag:d,entry:u,resolvedOptions:l.resolvedOptions};await o.callHook("tag:normalise",f),c.tags.push(f.tag)}}return await o.callHook("tags:resolve",c),c.tags},_popSideEffectQueue(){const c={...s};return s={},c},_elMap:{}};return l.hooks.callHook("init",l),l}function _k(e){return typeof e=="function"?e():E(e)}function Cr(e,n=""){if(e instanceof Promise)return e;const s=_k(e);if(!e||!s)return s;if(Array.isArray(s))return s.map(a=>Cr(a,n));if(typeof s=="object"){let a=!1;const o=Object.fromEntries(Object.entries(s).map(([i,l])=>i==="titleTemplate"||i.startsWith("on")?[i,E(l)]:((typeof l=="function"||Fe(l))&&(a=!0),[i,Cr(l,i)])));return a&&tl.includes(String(n))&&(o._dynamic=!0),o}return s}const kk=xr.startsWith("3"),bk=typeof window<"u",Ed="usehead";function sl(){return Fn()&&C(Ed)||xd()}function vk(e){return{install(s){kk&&(s.config.globalProperties.$unhead=e,s.config.globalProperties.$head=e,s.provide(Ed,e))}}.install}function yk(e={}){const n=mk({...e,domDelayFn:s=>setTimeout(()=>nn(()=>s()),10),plugins:[wk(),...(e==null?void 0:e.plugins)||[]]});return n.install=vk(n),n}const wk=()=>({hooks:{"entries:resolve":function(e){for(const n of e.entries)n.resolvedInput=Cr(n.input)}}});function Sk(e,n={}){const s=sl(),a=se(!1),o=se({});cs(()=>{o.value=a.value?{}:Cr(e)});const i=s.push(o.value,n);return we(o,c=>{i.patch(c)}),Fn()&&(Na(()=>{i.dispose()}),Wp(()=>{a.value=!0}),qp(()=>{a.value=!1})),i}function xk(e,n={}){return sl().push(e,n)}function al(e,n={}){var a;const s=sl();if(s){const o=bk||!!((a=s.resolvedOptions)!=null&&a.document);return n.mode==="server"&&o||n.mode==="client"&&!o?void 0:o?Sk(e,n):xk(e,n)}}const Ek=e=>al({htmlAttrs:e});function Ck(e,n){const s=yk(n||{}),a={unhead:s,install(o){xr.startsWith("3")&&(o.config.globalProperties.$head=s,o.provide("usehead",s))},use(o){s.use(o)},resolveTags(){return s.resolveTags()},headEntries(){return s.headEntries()},headTags(){return s.resolveTags()},push(o,i){return s.push(o,i)},addEntry(o,i){return s.push(o,i)},addHeadObjs(o,i){return s.push(o,i)},addReactiveEntry(o,i){const l=al(o,i);return typeof l<"u"?l.dispose:()=>{}},removeHeadObjs(){},updateDOM(o,i){i?vd(s,{document:o}):yd(s,{delayFn:l=>setTimeout(()=>l(),50),document:o})},internalHooks:s.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return s.addHeadObjs=a.addHeadObjs,s.updateDOM=a.updateDOM,s.hooks.hook("dom:beforeRender",o=>{for(const i of a.hooks["before:dom"])i()===!1&&(o.shouldRender=!1)}),e&&a.addHeadObjs(e),a}const sa=Symbol("v-click-clicks"),Kt=Symbol("v-click-clicks-elements"),ai=Symbol("v-click-clicks-order-map"),aa=Symbol("v-click-clicks-disabled"),Cd=Symbol("slidev-slide-scale"),F=Symbol("slidev-slidev-context"),$k=Symbol("slidev-route"),Pk=Symbol("slidev-slide-context"),zt="slidev-vclick-target",bo="slidev-vclick-hidden",Ok="slidev-vclick-fade",vo="slidev-vclick-hidden-explicitly",Vs="slidev-vclick-current",Xa="slidev-vclick-prior",Tk=["localhost","127.0.0.1"];let Fk=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((n,s)=>(s&=63,s<36?n+=s.toString(36):s<62?n+=(s-26).toString(36).toUpperCase():s>62?n+="-":n+="_",n),"");function ri(e,n){if(!e)return!1;const s=e.indexOf(n);return s>=0?(e.splice(s,1),!0):!1}function Ak(...e){let n,s,a;e.length===1?(n=0,a=1,[s]=e):[n,s,a=1]=e;const o=[];let i=n;for(;i<s;)o.push(i),i+=a||1;return o}function Mk(e){return e!=null}function Ik(e,n){return Object.fromEntries(Object.entries(e).map(([s,a])=>n(s,a)).filter(Mk))}const Nk={theme:"./mathema-2023",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:`<h2>Von C# zu F# – Einführung in die funktionale Programmierung</h2>
`,highlighter:"prism",lineNumbers:!1,colorSchema:"light",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:["ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:["ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:[],provider:"google",local:[],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"windicss",presenter:"Patrick Drechsler & Martin Grotz",htmlAttrs:{},hightlighter:"prism",defaults:{layout:"default-with-footer"},occasion:"DWX 2023",occasionLogoUrl:"images/DWX_LogoIcon_2023-scaled.jpg.jpg",company:"MATHEMA GmbH",contact:"patrick.drechsler@mathema.de & martin.grotz@mathema.de",layout:"cover"},Oe=Nk,Ot=Oe.aspectRatio??16/9,Tt=Oe.canvasWidth??980,rl=Math.ceil(Tt/Ot),ol=I(()=>Ik(Oe.themeConfig||{},(e,n)=>[`--slidev-theme-${e}`,n]));function Rn(e,n,s){Object.defineProperty(e,n,{value:s,writable:!0,enumerable:!1})}const ps=Ve({page:0,clicks:0});let Dk=[],Lk=[];Rn(ps,"$syncUp",!0);Rn(ps,"$syncDown",!0);Rn(ps,"$paused",!1);Rn(ps,"$onSet",e=>Dk.push(e));Rn(ps,"$onPatch",e=>Lk.push(e));Rn(ps,"$patch",async()=>!1);function $d(e,n,s=!1){const a=[];let o=!1,i=!1,l,c;const u=Ve(n);function p(m){a.push(m)}function d(m,g){u[m]!==g&&(clearTimeout(l),o=!0,u[m]=g,l=setTimeout(()=>o=!1,0))}function f(m){o||(clearTimeout(c),i=!0,Object.entries(m).forEach(([g,b])=>{u[g]=b}),c=setTimeout(()=>i=!1,0))}function h(m){let g;s?s&&window.addEventListener("storage",y=>{y&&y.key===m&&y.newValue&&f(JSON.parse(y.newValue))}):(g=new BroadcastChannel(m),g.addEventListener("message",y=>f(y.data)));function b(){!s&&g&&!i?g.postMessage(ge(u)):s&&!i&&window.localStorage.setItem(m,JSON.stringify(u)),o||a.forEach(y=>y(u))}if(we(u,b,{deep:!0}),s){const y=window.localStorage.getItem(m);y&&f(JSON.parse(y))}}return{init:h,onPatch:p,patch:d,state:u}}const{init:jk,onPatch:Rk,patch:Hs,state:yo}=$d(ps,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),ds=Ve({});let Bk=[],qk=[];Rn(ds,"$syncUp",!0);Rn(ds,"$syncDown",!0);Rn(ds,"$paused",!1);Rn(ds,"$onSet",e=>Bk.push(e));Rn(ds,"$onPatch",e=>qk.push(e));Rn(ds,"$patch",async()=>!1);const{init:Wk,onPatch:Vk,patch:Pd,state:$r}=$d(ds,{},!1),Hk="modulepreload",zk=function(e){return"/2023-06-dwx-fp-csharp-to-fsharp/"+e},xc={},ja=function(n,s,a){if(!s||s.length===0)return n();const o=document.getElementsByTagName("link");return Promise.all(s.map(i=>{if(i=zk(i),i in xc)return;xc[i]=!0;const l=i.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(!!a)for(let d=o.length-1;d>=0;d--){const f=o[d];if(f.href===i&&(!l||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${c}`))return;const p=document.createElement("link");if(p.rel=l?"stylesheet":Hk,l||(p.as="script",p.crossOrigin=""),p.href=i,document.head.appendChild(p),l)return new Promise((d,f)=>{p.addEventListener("load",d),p.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>n())};var Ec;const ft=typeof window<"u",Uk=e=>typeof e<"u",Kk=Object.prototype.toString,Pr=e=>typeof e=="function",Gk=e=>typeof e=="number",Od=e=>typeof e=="string",oi=e=>Kk.call(e)==="[object Object]",Zk=()=>+Date.now(),$s=()=>{},Yk=ft&&((Ec=window==null?void 0:window.navigator)==null?void 0:Ec.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function dn(e){return typeof e=="function"?e():E(e)}function Jk(e,n){function s(...a){return new Promise((o,i)=>{Promise.resolve(e(()=>n.apply(this,a),{fn:n,thisArg:this,args:a})).then(o).catch(i)})}return s}const Td=e=>e();function Xk(e=Td){const n=se(!0);function s(){n.value=!1}function a(){n.value=!0}const o=(...i)=>{n.value&&e(...i)};return{isActive:Et(n),pause:s,resume:a,eventFilter:o}}function Qk(e){return e}function e1(e,n){var s;if(typeof e=="number")return e+n;const a=((s=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:s[0])||"",o=e.slice(a.length),i=parseFloat(a)+n;return Number.isNaN(i)?e:i+o}function n1(e,n){let s,a,o;const i=se(!0),l=()=>{i.value=!0,o()};we(e,l,{flush:"sync"});const c=Pr(n)?n:n.get,u=Pr(n)?void 0:n.set,p=wp((d,f)=>(a=d,o=f,{get(){return i.value&&(s=c(),i.value=!1),a(),s},set(h){u==null||u(h)}}));return Object.isExtensible(p)&&(p.trigger=l),p}function Ns(e){return ji()?(op(e),!0):!1}function t1(e){if(!Fe(e))return Ve(e);const n=new Proxy({},{get(s,a,o){return E(Reflect.get(e.value,a,o))},set(s,a,o){return Fe(e.value[a])&&!Fe(o)?e.value[a].value=o:e.value[a]=o,!0},deleteProperty(s,a){return Reflect.deleteProperty(e.value,a)},has(s,a){return Reflect.has(e.value,a)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Ve(n)}function Fd(e){return typeof e=="function"?I(e):se(e)}var s1=Object.defineProperty,a1=Object.defineProperties,r1=Object.getOwnPropertyDescriptors,Cc=Object.getOwnPropertySymbols,o1=Object.prototype.hasOwnProperty,i1=Object.prototype.propertyIsEnumerable,$c=(e,n,s)=>n in e?s1(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,l1=(e,n)=>{for(var s in n||(n={}))o1.call(n,s)&&$c(e,s,n[s]);if(Cc)for(var s of Cc(n))i1.call(n,s)&&$c(e,s,n[s]);return e},c1=(e,n)=>a1(e,r1(n));function u1(e){if(!Fe(e))return hm(e);const n=Array.isArray(e.value)?new Array(e.value.length):{};for(const s in e.value)n[s]=wp(()=>({get(){return e.value[s]},set(a){if(Array.isArray(e.value)){const o=[...e.value];o[s]=a,e.value=o}else{const o=c1(l1({},e.value),{[s]:a});Object.setPrototypeOf(o,e.value),e.value=o}}}));return n}function Ad(e,n=!0){Fn()?us(e):n?e():nn(e)}function p1(e){Fn()&&Gr(e)}function d1(e,n,s={}){const{immediate:a=!0}=s,o=se(!1);let i=null;function l(){i&&(clearTimeout(i),i=null)}function c(){o.value=!1,l()}function u(...p){l(),o.value=!0,i=setTimeout(()=>{o.value=!1,i=null,e(...p)},dn(n))}return a&&(o.value=!0,ft&&u()),Ns(c),{isPending:Et(o),start:u,stop:c}}function Md(e=!1,n={}){const{truthyValue:s=!0,falsyValue:a=!1}=n,o=Fe(e),i=se(e);function l(c){if(arguments.length)return i.value=c,i.value;{const u=dn(s);return i.value=i.value===u?dn(a):u,i.value}}return o?l:[i,l]}var Pc=Object.getOwnPropertySymbols,f1=Object.prototype.hasOwnProperty,h1=Object.prototype.propertyIsEnumerable,m1=(e,n)=>{var s={};for(var a in e)f1.call(e,a)&&n.indexOf(a)<0&&(s[a]=e[a]);if(e!=null&&Pc)for(var a of Pc(e))n.indexOf(a)<0&&h1.call(e,a)&&(s[a]=e[a]);return s};function g1(e,n,s={}){const a=s,{eventFilter:o=Td}=a,i=m1(a,["eventFilter"]);return we(e,Jk(o,n),i)}var _1=Object.defineProperty,k1=Object.defineProperties,b1=Object.getOwnPropertyDescriptors,Or=Object.getOwnPropertySymbols,Id=Object.prototype.hasOwnProperty,Nd=Object.prototype.propertyIsEnumerable,Oc=(e,n,s)=>n in e?_1(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,v1=(e,n)=>{for(var s in n||(n={}))Id.call(n,s)&&Oc(e,s,n[s]);if(Or)for(var s of Or(n))Nd.call(n,s)&&Oc(e,s,n[s]);return e},y1=(e,n)=>k1(e,b1(n)),w1=(e,n)=>{var s={};for(var a in e)Id.call(e,a)&&n.indexOf(a)<0&&(s[a]=e[a]);if(e!=null&&Or)for(var a of Or(e))n.indexOf(a)<0&&Nd.call(e,a)&&(s[a]=e[a]);return s};function S1(e,n,s={}){const a=s,{eventFilter:o}=a,i=w1(a,["eventFilter"]),{eventFilter:l,pause:c,resume:u,isActive:p}=Xk(o);return{stop:g1(e,n,y1(v1({},i),{eventFilter:l})),pause:c,resume:u,isActive:p}}function $n(e){var n;const s=dn(e);return(n=s==null?void 0:s.$el)!=null?n:s}const hn=ft?window:void 0,x1=ft?window.document:void 0,E1=ft?window.navigator:void 0;function Te(...e){let n,s,a,o;if(Od(e[0])||Array.isArray(e[0])?([s,a,o]=e,n=hn):[n,s,a,o]=e,!n)return $s;Array.isArray(s)||(s=[s]),Array.isArray(a)||(a=[a]);const i=[],l=()=>{i.forEach(d=>d()),i.length=0},c=(d,f,h,m)=>(d.addEventListener(f,h,m),()=>d.removeEventListener(f,h,m)),u=we(()=>[$n(n),dn(o)],([d,f])=>{l(),d&&i.push(...s.flatMap(h=>a.map(m=>c(d,h,m,f))))},{immediate:!0,flush:"post"}),p=()=>{u(),l()};return Ns(p),p}let Tc=!1;function C1(e,n,s={}){const{window:a=hn,ignore:o=[],capture:i=!0,detectIframe:l=!1}=s;if(!a)return;Yk&&!Tc&&(Tc=!0,Array.from(a.document.body.children).forEach(h=>h.addEventListener("click",$s)));let c=!0;const u=h=>o.some(m=>{if(typeof m=="string")return Array.from(a.document.querySelectorAll(m)).some(g=>g===h.target||h.composedPath().includes(g));{const g=$n(m);return g&&(h.target===g||h.composedPath().includes(g))}}),d=[Te(a,"click",h=>{const m=$n(e);if(!(!m||m===h.target||h.composedPath().includes(m))){if(h.detail===0&&(c=!u(h)),!c){c=!0;return}n(h)}},{passive:!0,capture:i}),Te(a,"pointerdown",h=>{const m=$n(e);m&&(c=!h.composedPath().includes(m)&&!u(h))},{passive:!0}),l&&Te(a,"blur",h=>{var m;const g=$n(e);((m=a.document.activeElement)==null?void 0:m.tagName)==="IFRAME"&&!(g!=null&&g.contains(a.document.activeElement))&&n(h)})].filter(Boolean);return()=>d.forEach(h=>h())}const $1=e=>typeof e=="function"?e:typeof e=="string"?n=>n.key===e:Array.isArray(e)?n=>e.includes(n.key):()=>!0;function P1(...e){let n,s,a={};e.length===3?(n=e[0],s=e[1],a=e[2]):e.length===2?typeof e[1]=="object"?(n=!0,s=e[0],a=e[1]):(n=e[0],s=e[1]):(n=!0,s=e[0]);const{target:o=hn,eventName:i="keydown",passive:l=!1}=a,c=$1(n);return Te(o,i,p=>{c(p)&&s(p)},l)}function O1(e={}){var n;const{window:s=hn}=e,a=(n=e.document)!=null?n:s==null?void 0:s.document,o=n1(()=>null,()=>a==null?void 0:a.activeElement);return s&&(Te(s,"blur",i=>{i.relatedTarget===null&&o.trigger()},!0),Te(s,"focus",o.trigger,!0)),o}function Ra(e,n=!1){const s=se(),a=()=>s.value=Boolean(e());return a(),Ad(a,n),s}function vs(e,n={}){const{window:s=hn}=n,a=Ra(()=>s&&"matchMedia"in s&&typeof s.matchMedia=="function");let o;const i=se(!1),l=()=>{o&&("removeEventListener"in o?o.removeEventListener("change",c):o.removeListener(c))},c=()=>{a.value&&(l(),o=s.matchMedia(Fd(e).value),i.value=o.matches,"addEventListener"in o?o.addEventListener("change",c):o.addListener(c))};return cs(c),Ns(()=>l()),i}const T1={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var F1=Object.defineProperty,Fc=Object.getOwnPropertySymbols,A1=Object.prototype.hasOwnProperty,M1=Object.prototype.propertyIsEnumerable,Ac=(e,n,s)=>n in e?F1(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,I1=(e,n)=>{for(var s in n||(n={}))A1.call(n,s)&&Ac(e,s,n[s]);if(Fc)for(var s of Fc(n))M1.call(n,s)&&Ac(e,s,n[s]);return e};function N1(e,n={}){function s(c,u){let p=e[c];return u!=null&&(p=e1(p,u)),typeof p=="number"&&(p=`${p}px`),p}const{window:a=hn}=n;function o(c){return a?a.matchMedia(c).matches:!1}const i=c=>vs(`(min-width: ${s(c)})`,n),l=Object.keys(e).reduce((c,u)=>(Object.defineProperty(c,u,{get:()=>i(u),enumerable:!0,configurable:!0}),c),{});return I1({greater(c){return vs(`(min-width: ${s(c,.1)})`,n)},greaterOrEqual:i,smaller(c){return vs(`(max-width: ${s(c,-.1)})`,n)},smallerOrEqual(c){return vs(`(max-width: ${s(c)})`,n)},between(c,u){return vs(`(min-width: ${s(c)}) and (max-width: ${s(u,-.1)})`,n)},isGreater(c){return o(`(min-width: ${s(c,.1)})`)},isGreaterOrEqual(c){return o(`(min-width: ${s(c)})`)},isSmaller(c){return o(`(max-width: ${s(c,-.1)})`)},isSmallerOrEqual(c){return o(`(max-width: ${s(c)})`)},isInBetween(c,u){return o(`(min-width: ${s(c)}) and (max-width: ${s(u,-.1)})`)}},l)}function D1(e={}){const{navigator:n=E1,read:s=!1,source:a,copiedDuring:o=1500,legacy:i=!1}=e,l=["copy","cut"],c=Ra(()=>n&&"clipboard"in n),u=I(()=>c.value||i),p=se(""),d=se(!1),f=d1(()=>d.value=!1,o);function h(){c.value?n.clipboard.readText().then(y=>{p.value=y}):p.value=b()}if(u.value&&s)for(const y of l)Te(y,h);async function m(y=dn(a)){u.value&&y!=null&&(c.value?await n.clipboard.writeText(y):g(y),p.value=y,d.value=!0,f.start())}function g(y){const $=document.createElement("textarea");$.value=y??"",$.style.position="absolute",$.style.opacity="0",document.body.appendChild($),$.select(),document.execCommand("copy"),$.remove()}function b(){var y,$,S;return(S=($=(y=document==null?void 0:document.getSelection)==null?void 0:y.call(document))==null?void 0:$.toString())!=null?S:""}return{isSupported:u,text:p,copied:d,copy:m}}function L1(e){return JSON.parse(JSON.stringify(e))}const ii=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},li="__vueuse_ssr_handlers__";ii[li]=ii[li]||{};const j1=ii[li];function R1(e,n){return j1[e]||n}function B1(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var q1=Object.defineProperty,Mc=Object.getOwnPropertySymbols,W1=Object.prototype.hasOwnProperty,V1=Object.prototype.propertyIsEnumerable,Ic=(e,n,s)=>n in e?q1(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,Nc=(e,n)=>{for(var s in n||(n={}))W1.call(n,s)&&Ic(e,s,n[s]);if(Mc)for(var s of Mc(n))V1.call(n,s)&&Ic(e,s,n[s]);return e};const H1={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},Dc="vueuse-storage";function z1(e,n,s,a={}){var o;const{flush:i="pre",deep:l=!0,listenToStorageChanges:c=!0,writeDefaults:u=!0,mergeDefaults:p=!1,shallow:d,window:f=hn,eventFilter:h,onError:m=D=>{console.error(D)}}=a,g=(d?et:se)(n);if(!s)try{s=R1("getDefaultStorage",()=>{var D;return(D=hn)==null?void 0:D.localStorage})()}catch(D){m(D)}if(!s)return g;const b=dn(n),y=B1(b),$=(o=a.serializer)!=null?o:H1[y],{pause:S,resume:x}=S1(g,()=>P(g.value),{flush:i,deep:l,eventFilter:h});return f&&c&&(Te(f,"storage",Y),Te(f,Dc,H)),Y(),g;function P(D){try{if(D==null)s.removeItem(e);else{const G=$.write(D),ae=s.getItem(e);ae!==G&&(s.setItem(e,G),f&&f.dispatchEvent(new CustomEvent(Dc,{detail:{key:e,oldValue:ae,newValue:G,storageArea:s}})))}}catch(G){m(G)}}function R(D){const G=D?D.newValue:s.getItem(e);if(G==null)return u&&b!==null&&s.setItem(e,$.write(b)),b;if(!D&&p){const ae=$.read(G);return Pr(p)?p(ae,b):y==="object"&&!Array.isArray(ae)?Nc(Nc({},b),ae):ae}else return typeof G!="string"?G:$.read(G)}function H(D){Y(D.detail)}function Y(D){if(!(D&&D.storageArea!==s)){if(D&&D.key==null){g.value=b;return}if(!(D&&D.key!==e)){S();try{g.value=R(D)}catch(G){m(G)}finally{D?nn(x):x()}}}}}function U1(e){return vs("(prefers-color-scheme: dark)",e)}var K1=Object.defineProperty,G1=Object.defineProperties,Z1=Object.getOwnPropertyDescriptors,Lc=Object.getOwnPropertySymbols,Y1=Object.prototype.hasOwnProperty,J1=Object.prototype.propertyIsEnumerable,jc=(e,n,s)=>n in e?K1(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,X1=(e,n)=>{for(var s in n||(n={}))Y1.call(n,s)&&jc(e,s,n[s]);if(Lc)for(var s of Lc(n))J1.call(n,s)&&jc(e,s,n[s]);return e},Q1=(e,n)=>G1(e,Z1(n));function HM(e,n={}){var s,a,o;const i=(s=n.draggingElement)!=null?s:hn,l=(a=n.handle)!=null?a:e,c=se((o=dn(n.initialValue))!=null?o:{x:0,y:0}),u=se(),p=g=>n.pointerTypes?n.pointerTypes.includes(g.pointerType):!0,d=g=>{dn(n.preventDefault)&&g.preventDefault(),dn(n.stopPropagation)&&g.stopPropagation()},f=g=>{var b;if(!p(g)||dn(n.exact)&&g.target!==dn(e))return;const y=dn(e).getBoundingClientRect(),$={x:g.clientX-y.left,y:g.clientY-y.top};((b=n.onStart)==null?void 0:b.call(n,$,g))!==!1&&(u.value=$,d(g))},h=g=>{var b;p(g)&&u.value&&(c.value={x:g.clientX-u.value.x,y:g.clientY-u.value.y},(b=n.onMove)==null||b.call(n,c.value,g),d(g))},m=g=>{var b;p(g)&&u.value&&(u.value=void 0,(b=n.onEnd)==null||b.call(n,c.value,g),d(g))};return ft&&(Te(l,"pointerdown",f,!0),Te(i,"pointermove",h,!0),Te(i,"pointerup",m,!0)),Q1(X1({},u1(c)),{position:c,isDragging:I(()=>!!u.value),style:I(()=>`left:${c.value.x}px;top:${c.value.y}px;`)})}var Rc=Object.getOwnPropertySymbols,e0=Object.prototype.hasOwnProperty,n0=Object.prototype.propertyIsEnumerable,t0=(e,n)=>{var s={};for(var a in e)e0.call(e,a)&&n.indexOf(a)<0&&(s[a]=e[a]);if(e!=null&&Rc)for(var a of Rc(e))n.indexOf(a)<0&&n0.call(e,a)&&(s[a]=e[a]);return s};function s0(e,n,s={}){const a=s,{window:o=hn}=a,i=t0(a,["window"]);let l;const c=Ra(()=>o&&"ResizeObserver"in o),u=()=>{l&&(l.disconnect(),l=void 0)},p=we(()=>$n(e),f=>{u(),c.value&&o&&f&&(l=new ResizeObserver(n),l.observe(f,i))},{immediate:!0,flush:"post"}),d=()=>{u(),p()};return Ns(d),{isSupported:c,stop:d}}function a0(e,n={width:0,height:0},s={}){const{window:a=hn,box:o="content-box"}=s,i=I(()=>{var u,p;return(p=(u=$n(e))==null?void 0:u.namespaceURI)==null?void 0:p.includes("svg")}),l=se(n.width),c=se(n.height);return s0(e,([u])=>{const p=o==="border-box"?u.borderBoxSize:o==="content-box"?u.contentBoxSize:u.devicePixelContentBoxSize;if(a&&i.value){const d=$n(e);if(d){const f=a.getComputedStyle(d);l.value=parseFloat(f.width),c.value=parseFloat(f.height)}}else if(p){const d=Array.isArray(p)?p:[p];l.value=d.reduce((f,{inlineSize:h})=>f+h,0),c.value=d.reduce((f,{blockSize:h})=>f+h,0)}else l.value=u.contentRect.width,c.value=u.contentRect.height},s),we(()=>$n(e),u=>{l.value=u?n.width:0,c.value=u?n.height:0}),{width:l,height:c}}const Bc=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function r0(e,n={}){const{document:s=x1,autoExit:a=!1}=n,o=e||(s==null?void 0:s.querySelector("html")),i=se(!1);let l=Bc[0];const c=Ra(()=>{if(s){for(const b of Bc)if(b[1]in s)return l=b,!0}else return!1;return!1}),[u,p,d,,f]=l;async function h(){c.value&&(s!=null&&s[d]&&await s[p](),i.value=!1)}async function m(){if(!c.value)return;await h();const b=$n(o);b&&(await b[u](),i.value=!0)}async function g(){i.value?await h():await m()}return s&&Te(s,f,()=>{i.value=!!(s!=null&&s[d])},!1),a&&Ns(h),{isSupported:c,isFullscreen:i,enter:m,exit:h,toggle:g}}function o0(e,n,s={}){const{root:a,rootMargin:o="0px",threshold:i=.1,window:l=hn}=s,c=Ra(()=>l&&"IntersectionObserver"in l);let u=$s;const p=c.value?we(()=>({el:$n(e),root:$n(a)}),({el:f,root:h})=>{if(u(),!f)return;const m=new IntersectionObserver(n,{root:h,rootMargin:o,threshold:i});m.observe(f),u=()=>{m.disconnect(),u=$s}},{immediate:!0,flush:"post"}):$s,d=()=>{u(),p()};return Ns(d),{isSupported:c,stop:d}}function Un(e,n,s={}){const{window:a=hn}=s;return z1(e,n,a==null?void 0:a.localStorage,s)}const i0={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function l0(e={}){const{reactive:n=!1,target:s=hn,aliasMap:a=i0,passive:o=!0,onEventFired:i=$s}=e,l=Ve(new Set),c={toJSON(){return{}},current:l},u=n?Ve(c):c,p=new Set,d=new Set;function f(b,y){b in u&&(n?u[b]=y:u[b].value=y)}function h(){l.clear();for(const b of d)f(b,!1)}function m(b,y){var $,S;const x=($=b.key)==null?void 0:$.toLowerCase(),R=[(S=b.code)==null?void 0:S.toLowerCase(),x].filter(Boolean);x&&(y?l.add(x):l.delete(x));for(const H of R)d.add(H),f(H,y);x==="meta"&&!y?(p.forEach(H=>{l.delete(H),f(H,!1)}),p.clear()):typeof b.getModifierState=="function"&&b.getModifierState("Meta")&&y&&[...l,...R].forEach(H=>p.add(H))}Te(s,"keydown",b=>(m(b,!0),i(b)),{passive:o}),Te(s,"keyup",b=>(m(b,!1),i(b)),{passive:o}),Te("blur",h,{passive:!0}),Te("focus",h,{passive:!0});const g=new Proxy(u,{get(b,y,$){if(typeof y!="string")return Reflect.get(b,y,$);if(y=y.toLowerCase(),y in a&&(y=a[y]),!(y in u))if(/[+_-]/.test(y)){const x=y.split(/[+_-]/g).map(P=>P.trim());u[y]=I(()=>x.every(P=>E(g[P])))}else u[y]=se(!1);const S=Reflect.get(b,y,$);return n?E(S):S}});return g}var lt;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(lt||(lt={}));function c0(e,n={}){const s=Fd(e),{threshold:a=50,onSwipe:o,onSwipeEnd:i,onSwipeStart:l}=n,c=Ve({x:0,y:0}),u=(H,Y)=>{c.x=H,c.y=Y},p=Ve({x:0,y:0}),d=(H,Y)=>{p.x=H,p.y=Y},f=I(()=>c.x-p.x),h=I(()=>c.y-p.y),{max:m,abs:g}=Math,b=I(()=>m(g(f.value),g(h.value))>=a),y=se(!1),$=se(!1),S=I(()=>b.value?g(f.value)>g(h.value)?f.value>0?lt.LEFT:lt.RIGHT:h.value>0?lt.UP:lt.DOWN:lt.NONE),x=H=>{var Y,D,G;const ae=H.buttons===0,fe=H.buttons===1;return(G=(D=(Y=n.pointerTypes)==null?void 0:Y.includes(H.pointerType))!=null?D:ae||fe)!=null?G:!0},P=[Te(e,"pointerdown",H=>{var Y,D;if(!x(H))return;$.value=!0,(D=(Y=s.value)==null?void 0:Y.style)==null||D.setProperty("touch-action","none");const G=H.target;G==null||G.setPointerCapture(H.pointerId);const{clientX:ae,clientY:fe}=H;u(ae,fe),d(ae,fe),l==null||l(H)}),Te(e,"pointermove",H=>{if(!x(H)||!$.value)return;const{clientX:Y,clientY:D}=H;d(Y,D),!y.value&&b.value&&(y.value=!0),y.value&&(o==null||o(H))}),Te(e,"pointerup",H=>{var Y,D;x(H)&&(y.value&&(i==null||i(H,S.value)),$.value=!1,y.value=!1,(D=(Y=s.value)==null?void 0:Y.style)==null||D.setProperty("touch-action","initial"))})],R=()=>P.forEach(H=>H());return{isSwiping:Et(y),direction:Et(S),posStart:Et(c),posEnd:Et(p),distanceX:f,distanceY:h,stop:R}}var u0=Object.defineProperty,qc=Object.getOwnPropertySymbols,p0=Object.prototype.hasOwnProperty,d0=Object.prototype.propertyIsEnumerable,Wc=(e,n,s)=>n in e?u0(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,f0=(e,n)=>{for(var s in n||(n={}))p0.call(n,s)&&Wc(e,s,n[s]);if(qc)for(var s of qc(n))d0.call(n,s)&&Wc(e,s,n[s]);return e};const h0={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};f0({linear:Qk},h0);function Jn(e,n,s,a={}){var o,i,l;const{clone:c=!1,passive:u=!1,eventName:p,deep:d=!1,defaultValue:f}=a,h=Fn(),m=s||(h==null?void 0:h.emit)||((o=h==null?void 0:h.$emit)==null?void 0:o.bind(h))||((l=(i=h==null?void 0:h.proxy)==null?void 0:i.$emit)==null?void 0:l.bind(h==null?void 0:h.proxy));let g=p;n||(n="modelValue"),g=p||g||`update:${n.toString()}`;const b=$=>c?Pr(c)?c($):L1($):$,y=()=>Uk(e[n])?b(e[n]):f;if(u){const $=y(),S=se($);return we(()=>e[n],x=>S.value=b(x)),we(S,x=>{(x!==e[n]||d)&&m(g,x)},{deep:d}),S}else return I({get(){return y()},set($){m(g,$)}})}function m0(e={}){const{window:n=hn,initialWidth:s=1/0,initialHeight:a=1/0,listenOrientation:o=!0,includeScrollbar:i=!0}=e,l=se(s),c=se(a),u=()=>{n&&(i?(l.value=n.innerWidth,c.value=n.innerHeight):(l.value=n.document.documentElement.clientWidth,c.value=n.document.documentElement.clientHeight))};return u(),Ad(u),Te("resize",u,{passive:!0}),o&&Te("orientationchange",u,{passive:!0}),{width:l,height:c}}function g0(){return Dd().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Dd(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const _0=typeof Proxy=="function",k0="devtools-plugin:setup",b0="plugin:settings:set";let hs,ci;function v0(){var e;return hs!==void 0||(typeof window<"u"&&window.performance?(hs=!0,ci=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?(hs=!0,ci=global.perf_hooks.performance):hs=!1),hs}function y0(){return v0()?ci.now():Date.now()}class w0{constructor(n,s){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=n,this.hook=s;const a={};if(n.settings)for(const l in n.settings){const c=n.settings[l];a[l]=c.defaultValue}const o=`__vue-devtools-plugin-settings__${n.id}`;let i=Object.assign({},a);try{const l=localStorage.getItem(o),c=JSON.parse(l);Object.assign(i,c)}catch{}this.fallbacks={getSettings(){return i},setSettings(l){try{localStorage.setItem(o,JSON.stringify(l))}catch{}i=l},now(){return y0()}},s&&s.on(b0,(l,c)=>{l===this.plugin.id&&this.fallbacks.setSettings(c)}),this.proxiedOn=new Proxy({},{get:(l,c)=>this.target?this.target.on[c]:(...u)=>{this.onQueue.push({method:c,args:u})}}),this.proxiedTarget=new Proxy({},{get:(l,c)=>this.target?this.target[c]:c==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(c)?(...u)=>(this.targetQueue.push({method:c,args:u,resolve:()=>{}}),this.fallbacks[c](...u)):(...u)=>new Promise(p=>{this.targetQueue.push({method:c,args:u,resolve:p})})})}async setRealTarget(n){this.target=n;for(const s of this.onQueue)this.target.on[s.method](...s.args);for(const s of this.targetQueue)s.resolve(await this.target[s.method](...s.args))}}function S0(e,n){const s=e,a=Dd(),o=g0(),i=_0&&s.enableEarlyProxy;if(o&&(a.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))o.emit(k0,e,n);else{const l=i?new w0(s,o):null;(a.__VUE_DEVTOOLS_PLUGINS__=a.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:s,setupFn:n,proxy:l}),l&&n(l.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const ot=typeof window<"u";function x0(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Ie=Object.assign;function wo(e,n){const s={};for(const a in n){const o=n[a];s[a]=Tn(o)?o.map(e):e(o)}return s}const ra=()=>{},Tn=Array.isArray;function Pe(e){const n=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+e].concat(n))}const E0=/\/$/,C0=e=>e.replace(E0,"");function So(e,n,s="/"){let a,o={},i="",l="";const c=n.indexOf("#");let u=n.indexOf("?");return c<u&&c>=0&&(u=-1),u>-1&&(a=n.slice(0,u),i=n.slice(u+1,c>-1?c:n.length),o=e(i)),c>-1&&(a=a||n.slice(0,c),l=n.slice(c,n.length)),a=O0(a??n,s),{fullPath:a+(i&&"?")+i+l,path:a,query:o,hash:l}}function $0(e,n){const s=n.query?e(n.query):"";return n.path+(s&&"?")+s+(n.hash||"")}function Vc(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function Hc(e,n,s){const a=n.matched.length-1,o=s.matched.length-1;return a>-1&&a===o&&Dt(n.matched[a],s.matched[o])&&Ld(n.params,s.params)&&e(n.query)===e(s.query)&&n.hash===s.hash}function Dt(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function Ld(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const s in e)if(!P0(e[s],n[s]))return!1;return!0}function P0(e,n){return Tn(e)?zc(e,n):Tn(n)?zc(n,e):e===n}function zc(e,n){return Tn(n)?e.length===n.length&&e.every((s,a)=>s===n[a]):e.length===1&&e[0]===n}function O0(e,n){if(e.startsWith("/"))return e;if(!n.startsWith("/"))return Pe(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${n}". It should look like "/${n}".`),e;if(!e)return n;const s=n.split("/"),a=e.split("/");let o=s.length-1,i,l;for(i=0;i<a.length;i++)if(l=a[i],l!==".")if(l==="..")o>1&&o--;else break;return s.slice(0,o).join("/")+"/"+a.slice(i-(i===a.length?1:0)).join("/")}var ya;(function(e){e.pop="pop",e.push="push"})(ya||(ya={}));var oa;(function(e){e.back="back",e.forward="forward",e.unknown=""})(oa||(oa={}));function T0(e){if(!e)if(ot){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),C0(e)}const F0=/^[^#]+#/;function A0(e,n){return e.replace(F0,"#")+n}function M0(e,n){const s=document.documentElement.getBoundingClientRect(),a=e.getBoundingClientRect();return{behavior:n.behavior,left:a.left-s.left-(n.left||0),top:a.top-s.top-(n.top||0)}}const Xr=()=>({left:window.pageXOffset,top:window.pageYOffset});function I0(e){let n;if("el"in e){const s=e.el,a=typeof s=="string"&&s.startsWith("#");if(typeof e.el=="string"&&(!a||!document.getElementById(e.el.slice(1))))try{const i=document.querySelector(e.el);if(a&&i){Pe(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);return}}catch{Pe(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const o=typeof s=="string"?a?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!o){Pe(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);return}n=M0(o,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function Uc(e,n){return(history.state?history.state.position-n:-1)+e}const ui=new Map;function N0(e,n){ui.set(e,n)}function D0(e){const n=ui.get(e);return ui.delete(e),n}let L0=()=>location.protocol+"//"+location.host;function jd(e,n){const{pathname:s,search:a,hash:o}=n,i=e.indexOf("#");if(i>-1){let c=o.includes(e.slice(i))?e.slice(i).length:1,u=o.slice(c);return u[0]!=="/"&&(u="/"+u),Vc(u,"")}return Vc(s,e)+a+o}function j0(e,n,s,a){let o=[],i=[],l=null;const c=({state:h})=>{const m=jd(e,location),g=s.value,b=n.value;let y=0;if(h){if(s.value=m,n.value=h,l&&l===g){l=null;return}y=b?h.position-b.position:0}else a(m);o.forEach($=>{$(s.value,g,{delta:y,type:ya.pop,direction:y?y>0?oa.forward:oa.back:oa.unknown})})};function u(){l=s.value}function p(h){o.push(h);const m=()=>{const g=o.indexOf(h);g>-1&&o.splice(g,1)};return i.push(m),m}function d(){const{history:h}=window;h.state&&h.replaceState(Ie({},h.state,{scroll:Xr()}),"")}function f(){for(const h of i)h();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d),{pauseListeners:u,listen:p,destroy:f}}function Kc(e,n,s,a=!1,o=!1){return{back:e,current:n,forward:s,replaced:a,position:window.history.length,scroll:o?Xr():null}}function R0(e){const{history:n,location:s}=window,a={value:jd(e,s)},o={value:n.state};o.value||i(a.value,{back:null,current:a.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function i(u,p,d){const f=e.indexOf("#"),h=f>-1?(s.host&&document.querySelector("base")?e:e.slice(f))+u:L0()+e+u;try{n[d?"replaceState":"pushState"](p,"",h),o.value=p}catch(m){Pe("Error with push/replace State",m),s[d?"replace":"assign"](h)}}function l(u,p){const d=Ie({},n.state,Kc(o.value.back,u,o.value.forward,!0),p,{position:o.value.position});i(u,d,!0),a.value=u}function c(u,p){const d=Ie({},o.value,n.state,{forward:u,scroll:Xr()});n.state||Pe(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),i(d.current,d,!0);const f=Ie({},Kc(a.value,u,null),{position:d.position+1},p);i(u,f,!1),a.value=u}return{location:a,state:o,push:c,replace:l}}function B0(e){e=T0(e);const n=R0(e),s=j0(e,n.state,n.location,n.replace);function a(i,l=!0){l||s.pauseListeners(),history.go(i)}const o=Ie({location:"",base:e,go:a,createHref:A0.bind(null,e)},n,s);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>n.state.value}),o}function q0(e){return typeof e=="string"||e&&typeof e=="object"}function Rd(e){return typeof e=="string"||typeof e=="symbol"}const _t={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Bd=Symbol("navigation failure");var Gc;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Gc||(Gc={}));const W0={[1]({location:e,currentLocation:n}){return`No match for
 ${JSON.stringify(e)}${n?`
while being at
`+JSON.stringify(n):""}`},[2]({from:e,to:n}){return`Redirected from "${e.fullPath}" to "${H0(n)}" via a navigation guard.`},[4]({from:e,to:n}){return`Navigation aborted from "${e.fullPath}" to "${n.fullPath}" via a navigation guard.`},[8]({from:e,to:n}){return`Navigation cancelled from "${e.fullPath}" to "${n.fullPath}" with a new navigation.`},[16]({from:e,to:n}){return`Avoided redundant navigation to current location: "${e.fullPath}".`}};function As(e,n){return Ie(new Error(W0[e](n)),{type:e,[Bd]:!0},n)}function nt(e,n){return e instanceof Error&&Bd in e&&(n==null||!!(e.type&n))}const V0=["params","query","hash"];function H0(e){if(typeof e=="string")return e;if("path"in e)return e.path;const n={};for(const s of V0)s in e&&(n[s]=e[s]);return JSON.stringify(n,null,2)}const Zc="[^/]+?",z0={sensitive:!1,strict:!1,start:!0,end:!0},U0=/[.+*?^${}()[\]/\\]/g;function K0(e,n){const s=Ie({},z0,n),a=[];let o=s.start?"^":"";const i=[];for(const p of e){const d=p.length?[]:[90];s.strict&&!p.length&&(o+="/");for(let f=0;f<p.length;f++){const h=p[f];let m=40+(s.sensitive?.25:0);if(h.type===0)f||(o+="/"),o+=h.value.replace(U0,"\\$&"),m+=40;else if(h.type===1){const{value:g,repeatable:b,optional:y,regexp:$}=h;i.push({name:g,repeatable:b,optional:y});const S=$||Zc;if(S!==Zc){m+=10;try{new RegExp(`(${S})`)}catch(P){throw new Error(`Invalid custom RegExp for param "${g}" (${S}): `+P.message)}}let x=b?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;f||(x=y&&p.length<2?`(?:/${x})`:"/"+x),y&&(x+="?"),o+=x,m+=20,y&&(m+=-8),b&&(m+=-20),S===".*"&&(m+=-50)}d.push(m)}a.push(d)}if(s.strict&&s.end){const p=a.length-1;a[p][a[p].length-1]+=.7000000000000001}s.strict||(o+="/?"),s.end?o+="$":s.strict&&(o+="(?:/|$)");const l=new RegExp(o,s.sensitive?"":"i");function c(p){const d=p.match(l),f={};if(!d)return null;for(let h=1;h<d.length;h++){const m=d[h]||"",g=i[h-1];f[g.name]=m&&g.repeatable?m.split("/"):m}return f}function u(p){let d="",f=!1;for(const h of e){(!f||!d.endsWith("/"))&&(d+="/"),f=!1;for(const m of h)if(m.type===0)d+=m.value;else if(m.type===1){const{value:g,repeatable:b,optional:y}=m,$=g in p?p[g]:"";if(Tn($)&&!b)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const S=Tn($)?$.join("/"):$;if(!S)if(y)h.length<2&&(d.endsWith("/")?d=d.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);d+=S}}return d||"/"}return{re:l,score:a,keys:i,parse:c,stringify:u}}function G0(e,n){let s=0;for(;s<e.length&&s<n.length;){const a=n[s]-e[s];if(a)return a;s++}return e.length<n.length?e.length===1&&e[0]===40+40?-1:1:e.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function Z0(e,n){let s=0;const a=e.score,o=n.score;for(;s<a.length&&s<o.length;){const i=G0(a[s],o[s]);if(i)return i;s++}if(Math.abs(o.length-a.length)===1){if(Yc(a))return 1;if(Yc(o))return-1}return o.length-a.length}function Yc(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const Y0={type:0,value:""},J0=/[a-zA-Z0-9_]/;function X0(e){if(!e)return[[]];if(e==="/")return[[Y0]];if(!e.startsWith("/"))throw new Error(`Route paths should start with a "/": "${e}" should be "/${e}".`);function n(m){throw new Error(`ERR (${s})/"${p}": ${m}`)}let s=0,a=s;const o=[];let i;function l(){i&&o.push(i),i=[]}let c=0,u,p="",d="";function f(){p&&(s===0?i.push({type:0,value:p}):s===1||s===2||s===3?(i.length>1&&(u==="*"||u==="+")&&n(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:p,regexp:d,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):n("Invalid state to consume buffer"),p="")}function h(){p+=u}for(;c<e.length;){if(u=e[c++],u==="\\"&&s!==2){a=s,s=4;continue}switch(s){case 0:u==="/"?(p&&f(),l()):u===":"?(f(),s=1):h();break;case 4:h(),s=a;break;case 1:u==="("?s=2:J0.test(u)?h():(f(),s=0,u!=="*"&&u!=="?"&&u!=="+"&&c--);break;case 2:u===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+u:s=3:d+=u;break;case 3:f(),s=0,u!=="*"&&u!=="?"&&u!=="+"&&c--,d="";break;default:n("Unknown state");break}}return s===2&&n(`Unfinished custom RegExp for param "${p}"`),f(),l(),o}function Q0(e,n,s){const a=K0(X0(e.path),s);{const i=new Set;for(const l of a.keys)i.has(l.name)&&Pe(`Found duplicated params with name "${l.name}" for path "${e.path}". Only the last one will be available on "$route.params".`),i.add(l.name)}const o=Ie(a,{record:e,parent:n,children:[],alias:[]});return n&&!o.record.aliasOf==!n.record.aliasOf&&n.children.push(o),o}function eb(e,n){const s=[],a=new Map;n=Qc({strict:!1,end:!0,sensitive:!1},n);function o(d){return a.get(d)}function i(d,f,h){const m=!h,g=nb(d);rb(g,f),g.aliasOf=h&&h.record;const b=Qc(n,d),y=[g];if("alias"in d){const x=typeof d.alias=="string"?[d.alias]:d.alias;for(const P of x)y.push(Ie({},g,{components:h?h.record.components:g.components,path:P,aliasOf:h?h.record:g}))}let $,S;for(const x of y){const{path:P}=x;if(f&&P[0]!=="/"){const R=f.record.path,H=R[R.length-1]==="/"?"":"/";x.path=f.record.path+(P&&H+P)}if(x.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if($=Q0(x,f,b),f&&P[0]==="/"&&ob($,f),h?(h.alias.push($),ab(h,$)):(S=S||$,S!==$&&S.alias.push($),m&&d.name&&!Xc($)&&l(d.name)),g.children){const R=g.children;for(let H=0;H<R.length;H++)i(R[H],$,h&&h.children[H])}h=h||$,($.record.components&&Object.keys($.record.components).length||$.record.name||$.record.redirect)&&u($)}return S?()=>{l(S)}:ra}function l(d){if(Rd(d)){const f=a.get(d);f&&(a.delete(d),s.splice(s.indexOf(f),1),f.children.forEach(l),f.alias.forEach(l))}else{const f=s.indexOf(d);f>-1&&(s.splice(f,1),d.record.name&&a.delete(d.record.name),d.children.forEach(l),d.alias.forEach(l))}}function c(){return s}function u(d){let f=0;for(;f<s.length&&Z0(d,s[f])>=0&&(d.record.path!==s[f].record.path||!qd(d,s[f]));)f++;s.splice(f,0,d),d.record.name&&!Xc(d)&&a.set(d.record.name,d)}function p(d,f){let h,m={},g,b;if("name"in d&&d.name){if(h=a.get(d.name),!h)throw As(1,{location:d});{const S=Object.keys(d.params||{}).filter(x=>!h.keys.find(P=>P.name===x));S.length&&Pe(`Discarded invalid param(s) "${S.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}b=h.record.name,m=Ie(Jc(f.params,h.keys.filter(S=>!S.optional).map(S=>S.name)),d.params&&Jc(d.params,h.keys.map(S=>S.name))),g=h.stringify(m)}else if("path"in d)g=d.path,g.startsWith("/")||Pe(`The Matcher cannot resolve relative paths but received "${g}". Unless you directly called \`matcher.resolve("${g}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),h=s.find(S=>S.re.test(g)),h&&(m=h.parse(g),b=h.record.name);else{if(h=f.name?a.get(f.name):s.find(S=>S.re.test(f.path)),!h)throw As(1,{location:d,currentLocation:f});b=h.record.name,m=Ie({},f.params,d.params),g=h.stringify(m)}const y=[];let $=h;for(;$;)y.unshift($.record),$=$.parent;return{name:b,path:g,params:m,matched:y,meta:sb(y)}}return e.forEach(d=>i(d)),{addRoute:i,resolve:p,removeRoute:l,getRoutes:c,getRecordMatcher:o}}function Jc(e,n){const s={};for(const a of n)a in e&&(s[a]=e[a]);return s}function nb(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:tb(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function tb(e){const n={},s=e.props||!1;if("component"in e)n.default=s;else for(const a in e.components)n[a]=typeof s=="boolean"?s:s[a];return n}function Xc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function sb(e){return e.reduce((n,s)=>Ie(n,s.meta),{})}function Qc(e,n){const s={};for(const a in e)s[a]=a in n?n[a]:e[a];return s}function pi(e,n){return e.name===n.name&&e.optional===n.optional&&e.repeatable===n.repeatable}function ab(e,n){for(const s of e.keys)if(!s.optional&&!n.keys.find(pi.bind(null,s)))return Pe(`Alias "${n.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${s.name}"`);for(const s of n.keys)if(!s.optional&&!e.keys.find(pi.bind(null,s)))return Pe(`Alias "${n.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${s.name}"`)}function rb(e,n){n&&n.record.name&&!e.name&&!e.path&&Pe(`The route named "${String(n.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function ob(e,n){for(const s of n.keys)if(!e.keys.find(pi.bind(null,s)))return Pe(`Absolute path "${e.record.path}" must have the exact same param named "${s.name}" as its parent "${n.record.path}".`)}function qd(e,n){return n.children.some(s=>s===e||qd(e,s))}const Wd=/#/g,ib=/&/g,lb=/\//g,cb=/=/g,ub=/\?/g,Vd=/\+/g,pb=/%5B/g,db=/%5D/g,Hd=/%5E/g,fb=/%60/g,zd=/%7B/g,hb=/%7C/g,Ud=/%7D/g,mb=/%20/g;function il(e){return encodeURI(""+e).replace(hb,"|").replace(pb,"[").replace(db,"]")}function gb(e){return il(e).replace(zd,"{").replace(Ud,"}").replace(Hd,"^")}function di(e){return il(e).replace(Vd,"%2B").replace(mb,"+").replace(Wd,"%23").replace(ib,"%26").replace(fb,"`").replace(zd,"{").replace(Ud,"}").replace(Hd,"^")}function _b(e){return di(e).replace(cb,"%3D")}function kb(e){return il(e).replace(Wd,"%23").replace(ub,"%3F")}function bb(e){return e==null?"":kb(e).replace(lb,"%2F")}function wa(e){try{return decodeURIComponent(""+e)}catch{Pe(`Error decoding "${e}". Using original value`)}return""+e}function vb(e){const n={};if(e===""||e==="?")return n;const a=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<a.length;++o){const i=a[o].replace(Vd," "),l=i.indexOf("="),c=wa(l<0?i:i.slice(0,l)),u=l<0?null:wa(i.slice(l+1));if(c in n){let p=n[c];Tn(p)||(p=n[c]=[p]),p.push(u)}else n[c]=u}return n}function eu(e){let n="";for(let s in e){const a=e[s];if(s=_b(s),a==null){a!==void 0&&(n+=(n.length?"&":"")+s);continue}(Tn(a)?a.map(i=>i&&di(i)):[a&&di(a)]).forEach(i=>{i!==void 0&&(n+=(n.length?"&":"")+s,i!=null&&(n+="="+i))})}return n}function yb(e){const n={};for(const s in e){const a=e[s];a!==void 0&&(n[s]=Tn(a)?a.map(o=>o==null?null:""+o):a==null?a:""+a)}return n}const wb=Symbol("router view location matched"),nu=Symbol("router view depth"),ll=Symbol("router"),Kd=Symbol("route location"),fi=Symbol("router view location");function zs(){let e=[];function n(a){return e.push(a),()=>{const o=e.indexOf(a);o>-1&&e.splice(o,1)}}function s(){e=[]}return{add:n,list:()=>e,reset:s}}function yt(e,n,s,a,o){const i=a&&(a.enterCallbacks[o]=a.enterCallbacks[o]||[]);return()=>new Promise((l,c)=>{const u=f=>{f===!1?c(As(4,{from:s,to:n})):f instanceof Error?c(f):q0(f)?c(As(2,{from:n,to:f})):(i&&a.enterCallbacks[o]===i&&typeof f=="function"&&i.push(f),l())},p=e.call(a&&a.instances[o],n,s,Sb(u,n,s));let d=Promise.resolve(p);if(e.length<3&&(d=d.then(u)),e.length>2){const f=`The "next" callback was never called inside of ${e.name?'"'+e.name+'"':""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof p=="object"&&"then"in p)d=d.then(h=>u._called?h:(Pe(f),Promise.reject(new Error("Invalid navigation guard"))));else if(p!==void 0&&!u._called){Pe(f),c(new Error("Invalid navigation guard"));return}}d.catch(f=>c(f))})}function Sb(e,n,s){let a=0;return function(){a++===1&&Pe(`The "next" callback was called more than once in one navigation guard when going from "${s.fullPath}" to "${n.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),e._called=!0,a===1&&e.apply(null,arguments)}}function xo(e,n,s,a){const o=[];for(const i of e){!i.components&&!i.children.length&&Pe(`Record with path "${i.path}" is either missing a "component(s)" or "children" property.`);for(const l in i.components){let c=i.components[l];{if(!c||typeof c!="object"&&typeof c!="function")throw Pe(`Component "${l}" in record with path "${i.path}" is not a valid component. Received "${String(c)}".`),new Error("Invalid route component");if("then"in c){Pe(`Component "${l}" in record with path "${i.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const u=c;c=()=>u}else c.__asyncLoader&&!c.__warnedDefineAsync&&(c.__warnedDefineAsync=!0,Pe(`Component "${l}" in record with path "${i.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(n!=="beforeRouteEnter"&&!i.instances[l]))if(xb(c)){const p=(c.__vccOpts||c)[n];p&&o.push(yt(p,s,a,i,l))}else{let u=c();"catch"in u||(Pe(`Component "${l}" in record with path "${i.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),u=Promise.resolve(u)),o.push(()=>u.then(p=>{if(!p)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${i.path}"`));const d=x0(p)?p.default:p;i.components[l]=d;const h=(d.__vccOpts||d)[n];return h&&yt(h,s,a,i,l)()}))}}}return o}function xb(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function tu(e){const n=C(ll),s=C(Kd),a=I(()=>n.resolve(E(e.to))),o=I(()=>{const{matched:u}=a.value,{length:p}=u,d=u[p-1],f=s.matched;if(!d||!f.length)return-1;const h=f.findIndex(Dt.bind(null,d));if(h>-1)return h;const m=su(u[p-2]);return p>1&&su(d)===m&&f[f.length-1].path!==m?f.findIndex(Dt.bind(null,u[p-2])):h}),i=I(()=>o.value>-1&&Pb(s.params,a.value.params)),l=I(()=>o.value>-1&&o.value===s.matched.length-1&&Ld(s.params,a.value.params));function c(u={}){return $b(u)?n[E(e.replace)?"replace":"push"](E(e.to)).catch(ra):Promise.resolve()}if(ot){const u=Fn();if(u){const p={route:a.value,isActive:i.value,isExactActive:l.value};u.__vrl_devtools=u.__vrl_devtools||[],u.__vrl_devtools.push(p),cs(()=>{p.route=a.value,p.isActive=i.value,p.isExactActive=l.value},{flush:"post"})}}return{route:a,href:I(()=>a.value.href),isActive:i,isExactActive:l,navigate:c}}const Eb=Me({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:tu,setup(e,{slots:n}){const s=Ve(tu(e)),{options:a}=C(ll),o=I(()=>({[au(e.activeClass,a.linkActiveClass,"router-link-active")]:s.isActive,[au(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const i=n.default&&n.default(s);return e.custom?i:Pn("a",{"aria-current":s.isExactActive?e.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:o.value},i)}}}),Cb=Eb;function $b(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function Pb(e,n){for(const s in n){const a=n[s],o=e[s];if(typeof a=="string"){if(a!==o)return!1}else if(!Tn(o)||o.length!==a.length||a.some((i,l)=>i!==o[l]))return!1}return!0}function su(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const au=(e,n,s)=>e??n??s,Ob=Me({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:s}){Fb();const a=C(fi),o=I(()=>e.route||a.value),i=C(nu,0),l=I(()=>{let p=E(i);const{matched:d}=o.value;let f;for(;(f=d[p])&&!f.components;)p++;return p}),c=I(()=>o.value.matched[l.value]);En(nu,I(()=>l.value+1)),En(wb,c),En(fi,o);const u=se();return we(()=>[u.value,c.value,e.name],([p,d,f],[h,m,g])=>{d&&(d.instances[f]=p,m&&m!==d&&p&&p===h&&(d.leaveGuards.size||(d.leaveGuards=m.leaveGuards),d.updateGuards.size||(d.updateGuards=m.updateGuards))),p&&d&&(!m||!Dt(d,m)||!h)&&(d.enterCallbacks[f]||[]).forEach(b=>b(p))},{flush:"post"}),()=>{const p=o.value,d=e.name,f=c.value,h=f&&f.components[d];if(!h)return ru(s.default,{Component:h,route:p});const m=f.props[d],g=m?m===!0?p.params:typeof m=="function"?m(p):m:null,y=Pn(h,Ie({},g,n,{onVnodeUnmounted:$=>{$.component.isUnmounted&&(f.instances[d]=null)},ref:u}));if(ot&&y.ref){const $={depth:l.value,name:f.name,path:f.path,meta:f.meta};(Tn(y.ref)?y.ref.map(x=>x.i):[y.ref.i]).forEach(x=>{x.__vrv_devtools=$})}return ru(s.default,{Component:y,route:p})||y}}});function ru(e,n){if(!e)return null;const s=e(n);return s.length===1?s[0]:s}const Tb=Ob;function Fb(){const e=Fn(),n=e.parent&&e.parent.type.name;if(n&&(n==="KeepAlive"||n.includes("Transition"))){const s=n==="KeepAlive"?"keep-alive":"transition";Pe(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${s}>
    <component :is="Component" />
  </${s}>
</router-view>`)}}function Us(e,n){const s=Ie({},e,{matched:e.matched.map(a=>Bb(a,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:e.fullPath,tooltip:n,value:s}}}function Qa(e){return{_custom:{display:e}}}let Ab=0;function Mb(e,n,s){if(n.__hasDevtools)return;n.__hasDevtools=!0;const a=Ab++;S0({id:"org.vuejs.router"+(a?"."+a:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:e},o=>{typeof o.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),o.on.inspectComponent((d,f)=>{d.instanceData&&d.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Us(n.currentRoute.value,"Current Route")})}),o.on.visitComponentTree(({treeNode:d,componentInstance:f})=>{if(f.__vrv_devtools){const h=f.__vrv_devtools;d.tags.push({label:(h.name?`${h.name.toString()}: `:"")+h.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:Gd})}Tn(f.__vrl_devtools)&&(f.__devtoolsApi=o,f.__vrl_devtools.forEach(h=>{let m=Jd,g="";h.isExactActive?(m=Yd,g="This is exactly active"):h.isActive&&(m=Zd,g="This link is active"),d.tags.push({label:h.route.path,textColor:0,tooltip:g,backgroundColor:m})}))}),we(n.currentRoute,()=>{u(),o.notifyComponentUpdate(),o.sendInspectorTree(c),o.sendInspectorState(c)});const i="router:navigations:"+a;o.addTimelineLayer({id:i,label:`Router${a?" "+a:""} Navigations`,color:4237508}),n.onError((d,f)=>{o.addTimelineEvent({layerId:i,event:{title:"Error during Navigation",subtitle:f.fullPath,logType:"error",time:o.now(),data:{error:d},groupId:f.meta.__navigationId}})});let l=0;n.beforeEach((d,f)=>{const h={guard:Qa("beforeEach"),from:Us(f,"Current Location during this navigation"),to:Us(d,"Target location")};Object.defineProperty(d.meta,"__navigationId",{value:l++}),o.addTimelineEvent({layerId:i,event:{time:o.now(),title:"Start of navigation",subtitle:d.fullPath,data:h,groupId:d.meta.__navigationId}})}),n.afterEach((d,f,h)=>{const m={guard:Qa("afterEach")};h?(m.failure={_custom:{type:Error,readOnly:!0,display:h?h.message:"",tooltip:"Navigation Failure",value:h}},m.status=Qa("❌")):m.status=Qa("✅"),m.from=Us(f,"Current Location during this navigation"),m.to=Us(d,"Target location"),o.addTimelineEvent({layerId:i,event:{title:"End of navigation",subtitle:d.fullPath,time:o.now(),data:m,logType:h?"warning":"default",groupId:d.meta.__navigationId}})});const c="router-inspector:"+a;o.addInspector({id:c,label:"Routes"+(a?" "+a:""),icon:"book",treeFilterPlaceholder:"Search routes"});function u(){if(!p)return;const d=p;let f=s.getRoutes().filter(h=>!h.parent);f.forEach(ef),d.filter&&(f=f.filter(h=>hi(h,d.filter.toLowerCase()))),f.forEach(h=>Qd(h,n.currentRoute.value)),d.rootNodes=f.map(Xd)}let p;o.on.getInspectorTree(d=>{p=d,d.app===e&&d.inspectorId===c&&u()}),o.on.getInspectorState(d=>{if(d.app===e&&d.inspectorId===c){const h=s.getRoutes().find(m=>m.record.__vd_id===d.nodeId);h&&(d.state={options:Nb(h)})}}),o.sendInspectorTree(c),o.sendInspectorState(c)})}function Ib(e){return e.optional?e.repeatable?"*":"?":e.repeatable?"+":""}function Nb(e){const{record:n}=e,s=[{editable:!1,key:"path",value:n.path}];return n.name!=null&&s.push({editable:!1,key:"name",value:n.name}),s.push({editable:!1,key:"regexp",value:e.re}),e.keys.length&&s.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:e.keys.map(a=>`${a.name}${Ib(a)}`).join(" "),tooltip:"Param keys",value:e.keys}}}),n.redirect!=null&&s.push({editable:!1,key:"redirect",value:n.redirect}),e.alias.length&&s.push({editable:!1,key:"aliases",value:e.alias.map(a=>a.record.path)}),Object.keys(e.record.meta).length&&s.push({editable:!1,key:"meta",value:e.record.meta}),s.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:e.score.map(a=>a.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:e.score}}}),s}const Gd=15485081,Zd=2450411,Yd=8702998,Db=2282478,Jd=16486972,Lb=6710886;function Xd(e){const n=[],{record:s}=e;s.name!=null&&n.push({label:String(s.name),textColor:0,backgroundColor:Db}),s.aliasOf&&n.push({label:"alias",textColor:0,backgroundColor:Jd}),e.__vd_match&&n.push({label:"matches",textColor:0,backgroundColor:Gd}),e.__vd_exactActive&&n.push({label:"exact",textColor:0,backgroundColor:Yd}),e.__vd_active&&n.push({label:"active",textColor:0,backgroundColor:Zd}),s.redirect&&n.push({label:typeof s.redirect=="string"?`redirect: ${s.redirect}`:"redirects",textColor:16777215,backgroundColor:Lb});let a=s.__vd_id;return a==null&&(a=String(jb++),s.__vd_id=a),{id:a,label:s.path,tags:n,children:e.children.map(Xd)}}let jb=0;const Rb=/^\/(.*)\/([a-z]*)$/;function Qd(e,n){const s=n.matched.length&&Dt(n.matched[n.matched.length-1],e.record);e.__vd_exactActive=e.__vd_active=s,s||(e.__vd_active=n.matched.some(a=>Dt(a,e.record))),e.children.forEach(a=>Qd(a,n))}function ef(e){e.__vd_match=!1,e.children.forEach(ef)}function hi(e,n){const s=String(e.re).match(Rb);if(e.__vd_match=!1,!s||s.length<3)return!1;if(new RegExp(s[1].replace(/\$$/,""),s[2]).test(n))return e.children.forEach(l=>hi(l,n)),e.record.path!=="/"||n==="/"?(e.__vd_match=e.re.test(n),!0):!1;const o=e.record.path.toLowerCase(),i=wa(o);return!n.startsWith("/")&&(i.includes(n)||o.includes(n))||i.startsWith(n)||o.startsWith(n)||e.record.name&&String(e.record.name).includes(n)?!0:e.children.some(l=>hi(l,n))}function Bb(e,n){const s={};for(const a in e)n.includes(a)||(s[a]=e[a]);return s}function qb(e){const n=eb(e.routes,e),s=e.parseQuery||vb,a=e.stringifyQuery||eu,o=e.history;if(!o)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const i=zs(),l=zs(),c=zs(),u=et(_t);let p=_t;ot&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=wo.bind(null,M=>""+M),f=wo.bind(null,bb),h=wo.bind(null,wa);function m(M,te){let J,re;return Rd(M)?(J=n.getRecordMatcher(M),re=te):re=M,n.addRoute(re,J)}function g(M){const te=n.getRecordMatcher(M);te?n.removeRoute(te):Pe(`Cannot remove non-existent route "${String(M)}"`)}function b(){return n.getRoutes().map(M=>M.record)}function y(M){return!!n.getRecordMatcher(M)}function $(M,te){if(te=Ie({},te||u.value),typeof M=="string"){const he=So(s,M,te.path),_=n.resolve({path:he.path},te),v=o.createHref(he.fullPath);return v.startsWith("//")?Pe(`Location "${M}" resolved to "${v}". A resolved location cannot start with multiple slashes.`):_.matched.length||Pe(`No match found for location with path "${M}"`),Ie(he,_,{params:h(_.params),hash:wa(he.hash),redirectedFrom:void 0,href:v})}let J;if("path"in M)"params"in M&&!("name"in M)&&Object.keys(M.params).length&&Pe(`Path "${M.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),J=Ie({},M,{path:So(s,M.path,te.path).path});else{const he=Ie({},M.params);for(const _ in he)he[_]==null&&delete he[_];J=Ie({},M,{params:f(M.params)}),te.params=f(te.params)}const re=n.resolve(J,te),Se=M.hash||"";Se&&!Se.startsWith("#")&&Pe(`A \`hash\` should always start with the character "#". Replace "${Se}" with "#${Se}".`),re.params=d(h(re.params));const $e=$0(a,Ie({},M,{hash:gb(Se),path:re.path})),ke=o.createHref($e);return ke.startsWith("//")?Pe(`Location "${M}" resolved to "${ke}". A resolved location cannot start with multiple slashes.`):re.matched.length||Pe(`No match found for location with path "${"path"in M?M.path:M}"`),Ie({fullPath:$e,hash:Se,query:a===eu?yb(M.query):M.query||{}},re,{redirectedFrom:void 0,href:ke})}function S(M){return typeof M=="string"?So(s,M,u.value.path):Ie({},M)}function x(M,te){if(p!==M)return As(8,{from:te,to:M})}function P(M){return Y(M)}function R(M){return P(Ie(S(M),{replace:!0}))}function H(M){const te=M.matched[M.matched.length-1];if(te&&te.redirect){const{redirect:J}=te;let re=typeof J=="function"?J(M):J;if(typeof re=="string"&&(re=re.includes("?")||re.includes("#")?re=S(re):{path:re},re.params={}),!("path"in re)&&!("name"in re))throw Pe(`Invalid redirect found:
${JSON.stringify(re,null,2)}
 when navigating to "${M.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Ie({query:M.query,hash:M.hash,params:"path"in re?{}:M.params},re)}}function Y(M,te){const J=p=$(M),re=u.value,Se=M.state,$e=M.force,ke=M.replace===!0,he=H(J);if(he)return Y(Ie(S(he),{state:typeof he=="object"?Ie({},Se,he.state):Se,force:$e,replace:ke}),te||J);const _=J;_.redirectedFrom=te;let v;return!$e&&Hc(a,re,J)&&(v=As(16,{to:_,from:re}),Le(re,re,!0,!1)),(v?Promise.resolve(v):G(_,re)).catch(O=>nt(O)?nt(O,2)?O:ye(O):ne(O,_,re)).then(O=>{if(O){if(nt(O,2))return Hc(a,$(O.to),_)&&te&&(te._count=te._count?te._count+1:1)>10?(Pe(`Detected an infinite redirection in a navigation guard when going from "${re.fullPath}" to "${_.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):Y(Ie({replace:ke},S(O.to),{state:typeof O.to=="object"?Ie({},Se,O.to.state):Se,force:$e}),te||_)}else O=fe(_,re,!0,ke,Se);return ae(_,re,O),O})}function D(M,te){const J=x(M,te);return J?Promise.reject(J):Promise.resolve()}function G(M,te){let J;const[re,Se,$e]=Wb(M,te);J=xo(re.reverse(),"beforeRouteLeave",M,te);for(const he of re)he.leaveGuards.forEach(_=>{J.push(yt(_,M,te))});const ke=D.bind(null,M,te);return J.push(ke),ms(J).then(()=>{J=[];for(const he of i.list())J.push(yt(he,M,te));return J.push(ke),ms(J)}).then(()=>{J=xo(Se,"beforeRouteUpdate",M,te);for(const he of Se)he.updateGuards.forEach(_=>{J.push(yt(_,M,te))});return J.push(ke),ms(J)}).then(()=>{J=[];for(const he of M.matched)if(he.beforeEnter&&!te.matched.includes(he))if(Tn(he.beforeEnter))for(const _ of he.beforeEnter)J.push(yt(_,M,te));else J.push(yt(he.beforeEnter,M,te));return J.push(ke),ms(J)}).then(()=>(M.matched.forEach(he=>he.enterCallbacks={}),J=xo($e,"beforeRouteEnter",M,te),J.push(ke),ms(J))).then(()=>{J=[];for(const he of l.list())J.push(yt(he,M,te));return J.push(ke),ms(J)}).catch(he=>nt(he,8)?he:Promise.reject(he))}function ae(M,te,J){for(const re of c.list())re(M,te,J)}function fe(M,te,J,re,Se){const $e=x(M,te);if($e)return $e;const ke=te===_t,he=ot?history.state:{};J&&(re||ke?o.replace(M.fullPath,Ie({scroll:ke&&he&&he.scroll},Se)):o.push(M.fullPath,Se)),u.value=M,Le(M,te,J,ke),ye()}let Q;function de(){Q||(Q=o.listen((M,te,J)=>{if(!ht.listening)return;const re=$(M),Se=H(re);if(Se){Y(Ie(Se,{replace:!0}),re).catch(ra);return}p=re;const $e=u.value;ot&&N0(Uc($e.fullPath,J.delta),Xr()),G(re,$e).catch(ke=>nt(ke,12)?ke:nt(ke,2)?(Y(ke.to,re).then(he=>{nt(he,20)&&!J.delta&&J.type===ya.pop&&o.go(-1,!1)}).catch(ra),Promise.reject()):(J.delta&&o.go(-J.delta,!1),ne(ke,re,$e))).then(ke=>{ke=ke||fe(re,$e,!1),ke&&(J.delta&&!nt(ke,8)?o.go(-J.delta,!1):J.type===ya.pop&&nt(ke,20)&&o.go(-1,!1)),ae(re,$e,ke)}).catch(ra)}))}let De=zs(),Ge=zs(),Be;function ne(M,te,J){ye(M);const re=Ge.list();return re.length?re.forEach(Se=>Se(M,te,J)):(Pe("uncaught error during route navigation:"),console.error(M)),Promise.reject(M)}function pe(){return Be&&u.value!==_t?Promise.resolve():new Promise((M,te)=>{De.add([M,te])})}function ye(M){return Be||(Be=!M,de(),De.list().forEach(([te,J])=>M?J(M):te()),De.reset()),M}function Le(M,te,J,re){const{scrollBehavior:Se}=e;if(!ot||!Se)return Promise.resolve();const $e=!J&&D0(Uc(M.fullPath,0))||(re||!J)&&history.state&&history.state.scroll||null;return nn().then(()=>Se(M,te,$e)).then(ke=>ke&&I0(ke)).catch(ke=>ne(ke,M,te))}const yn=M=>o.go(M);let sn;const mn=new Set,ht={currentRoute:u,listening:!0,addRoute:m,removeRoute:g,hasRoute:y,getRoutes:b,resolve:$,options:e,push:P,replace:R,go:yn,back:()=>yn(-1),forward:()=>yn(1),beforeEach:i.add,beforeResolve:l.add,afterEach:c.add,onError:Ge.add,isReady:pe,install(M){const te=this;M.component("RouterLink",Cb),M.component("RouterView",Tb),M.config.globalProperties.$router=te,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>E(u)}),ot&&!sn&&u.value===_t&&(sn=!0,P(o.location).catch(Se=>{Pe("Unexpected error when starting the router:",Se)}));const J={};for(const Se in _t)J[Se]=I(()=>u.value[Se]);M.provide(ll,te),M.provide(Kd,Ve(J)),M.provide(fi,u);const re=M.unmount;mn.add(M),M.unmount=function(){mn.delete(M),mn.size<1&&(p=_t,Q&&Q(),Q=null,u.value=_t,sn=!1,Be=!1),re()},ot&&Mb(M,te,n)}};return ht}function ms(e){return e.reduce((n,s)=>n.then(()=>s()),Promise.resolve())}function Wb(e,n){const s=[],a=[],o=[],i=Math.max(n.matched.length,e.matched.length);for(let l=0;l<i;l++){const c=n.matched[l];c&&(e.matched.find(p=>Dt(p,c))?a.push(c):s.push(c));const u=e.matched[l];u&&(n.matched.find(p=>Dt(p,u))||o.push(u))}return[s,a,o]}const Eo=se(!1),ia=se(!1),ws=se(!1),Vb=se(!0),mi=N1({xs:460,...T1}),as=m0(),nf=l0(),Hb=I(()=>as.height.value-as.width.value/Ot>180),tf=r0(ft?document.body:null),Ps=O1(),zb=I(()=>{var e,n;return["INPUT","TEXTAREA"].includes(((e=Ps.value)==null?void 0:e.tagName)||"")||((n=Ps.value)==null?void 0:n.classList.contains("CodeMirror-code"))}),Ub=I(()=>{var e;return["BUTTON","A"].includes(((e=Ps.value)==null?void 0:e.tagName)||"")});Un("slidev-camera","default");Un("slidev-mic","default");const lr=Un("slidev-scale",0),cn=Un("slidev-show-overview",!1),Co=Un("slidev-presenter-cursor",!0),ou=Un("slidev-show-editor",!1);Un("slidev-editor-width",ft?window.innerWidth*.4:100);const sf=Md(cn);function iu(e,n,s,a=o=>o){return e*a(.5-n*(.5-s))}function Kb(e){return[-e[0],-e[1]]}function Wn(e,n){return[e[0]+n[0],e[1]+n[1]]}function In(e,n){return[e[0]-n[0],e[1]-n[1]]}function qn(e,n){return[e[0]*n,e[1]*n]}function Gb(e,n){return[e[0]/n,e[1]/n]}function Ks(e){return[e[1],-e[0]]}function lu(e,n){return e[0]*n[0]+e[1]*n[1]}function Zb(e,n){return e[0]===n[0]&&e[1]===n[1]}function Yb(e){return Math.hypot(e[0],e[1])}function Jb(e){return e[0]*e[0]+e[1]*e[1]}function cu(e,n){return Jb(In(e,n))}function af(e){return Gb(e,Yb(e))}function Xb(e,n){return Math.hypot(e[1]-n[1],e[0]-n[0])}function Gs(e,n,s){let a=Math.sin(s),o=Math.cos(s),i=e[0]-n[0],l=e[1]-n[1],c=i*o-l*a,u=i*a+l*o;return[c+n[0],u+n[1]]}function gi(e,n,s){return Wn(e,qn(In(n,e),s))}function uu(e,n,s){return Wn(e,qn(n,s))}var{min:gs,PI:Qb}=Math,pu=.275,Zs=Qb+1e-4;function ev(e,n={}){let{size:s=16,smoothing:a=.5,thinning:o=.5,simulatePressure:i=!0,easing:l=ne=>ne,start:c={},end:u={},last:p=!1}=n,{cap:d=!0,easing:f=ne=>ne*(2-ne)}=c,{cap:h=!0,easing:m=ne=>--ne*ne*ne+1}=u;if(e.length===0||s<=0)return[];let g=e[e.length-1].runningLength,b=c.taper===!1?0:c.taper===!0?Math.max(s,g):c.taper,y=u.taper===!1?0:u.taper===!0?Math.max(s,g):u.taper,$=Math.pow(s*a,2),S=[],x=[],P=e.slice(0,10).reduce((ne,pe)=>{let ye=pe.pressure;if(i){let Le=gs(1,pe.distance/s),yn=gs(1,1-Le);ye=gs(1,ne+(yn-ne)*(Le*pu))}return(ne+ye)/2},e[0].pressure),R=iu(s,o,e[e.length-1].pressure,l),H,Y=e[0].vector,D=e[0].point,G=D,ae=D,fe=G,Q=!1;for(let ne=0;ne<e.length;ne++){let{pressure:pe}=e[ne],{point:ye,vector:Le,distance:yn,runningLength:sn}=e[ne];if(ne<e.length-1&&g-sn<3)continue;if(o){if(i){let $e=gs(1,yn/s),ke=gs(1,1-$e);pe=gs(1,P+(ke-P)*($e*pu))}R=iu(s,o,pe,l)}else R=s/2;H===void 0&&(H=R);let mn=sn<b?f(sn/b):1,ht=g-sn<y?m((g-sn)/y):1;R=Math.max(.01,R*Math.min(mn,ht));let M=(ne<e.length-1?e[ne+1]:e[ne]).vector,te=ne<e.length-1?lu(Le,M):1,J=lu(Le,Y)<0&&!Q,re=te!==null&&te<0;if(J||re){let $e=qn(Ks(Y),R);for(let ke=1/13,he=0;he<=1;he+=ke)ae=Gs(In(ye,$e),ye,Zs*he),S.push(ae),fe=Gs(Wn(ye,$e),ye,Zs*-he),x.push(fe);D=ae,G=fe,re&&(Q=!0);continue}if(Q=!1,ne===e.length-1){let $e=qn(Ks(Le),R);S.push(In(ye,$e)),x.push(Wn(ye,$e));continue}let Se=qn(Ks(gi(M,Le,te)),R);ae=In(ye,Se),(ne<=1||cu(D,ae)>$)&&(S.push(ae),D=ae),fe=Wn(ye,Se),(ne<=1||cu(G,fe)>$)&&(x.push(fe),G=fe),P=pe,Y=Le}let de=e[0].point.slice(0,2),De=e.length>1?e[e.length-1].point.slice(0,2):Wn(e[0].point,[1,1]),Ge=[],Be=[];if(e.length===1){if(!(b||y)||p){let ne=uu(de,af(Ks(In(de,De))),-(H||R)),pe=[];for(let ye=1/13,Le=ye;Le<=1;Le+=ye)pe.push(Gs(ne,de,Zs*2*Le));return pe}}else{if(!(b||y&&e.length===1))if(d)for(let pe=1/13,ye=pe;ye<=1;ye+=pe){let Le=Gs(x[0],de,Zs*ye);Ge.push(Le)}else{let pe=In(S[0],x[0]),ye=qn(pe,.5),Le=qn(pe,.51);Ge.push(In(de,ye),In(de,Le),Wn(de,Le),Wn(de,ye))}let ne=Ks(Kb(e[e.length-1].vector));if(y||b&&e.length===1)Be.push(De);else if(h){let pe=uu(De,ne,R);for(let ye=1/29,Le=ye;Le<1;Le+=ye)Be.push(Gs(pe,De,Zs*3*Le))}else Be.push(Wn(De,qn(ne,R)),Wn(De,qn(ne,R*.99)),In(De,qn(ne,R*.99)),In(De,qn(ne,R)))}return S.concat(Be,x.reverse(),Ge)}function nv(e,n={}){var s;let{streamline:a=.5,size:o=16,last:i=!1}=n;if(e.length===0)return[];let l=.15+(1-a)*.85,c=Array.isArray(e[0])?e:e.map(({x:m,y:g,pressure:b=.5})=>[m,g,b]);if(c.length===2){let m=c[1];c=c.slice(0,-1);for(let g=1;g<5;g++)c.push(gi(c[0],m,g/4))}c.length===1&&(c=[...c,[...Wn(c[0],[1,1]),...c[0].slice(2)]]);let u=[{point:[c[0][0],c[0][1]],pressure:c[0][2]>=0?c[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],p=!1,d=0,f=u[0],h=c.length-1;for(let m=1;m<c.length;m++){let g=i&&m===h?c[m].slice(0,2):gi(f.point,c[m],l);if(Zb(f.point,g))continue;let b=Xb(g,f.point);if(d+=b,m<h&&!p){if(d<o)continue;p=!0}f={point:g,pressure:c[m][2]>=0?c[m][2]:.5,vector:af(In(f.point,g)),distance:b,runningLength:d},u.push(f)}return u[0].vector=((s=u[1])==null?void 0:s.vector)||[0,0],u}function tv(e,n={}){return ev(nv(e,n),n)}var sv=()=>({events:{},emit(e,...n){let s=this.events[e]||[];for(let a=0,o=s.length;a<o;a++)s[a](...n)},on(e,n){var s;return(s=this.events[e])!=null&&s.push(n)||(this.events[e]=[n]),()=>{var a;this.events[e]=(a=this.events[e])==null?void 0:a.filter(o=>n!==o)}}});function Tr(e,n){return e-n}function av(e){return e<0?-1:1}function Fr(e){return[Math.abs(e),av(e)]}function rf(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var rv=2,it=rv,Ds=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var n;const s=this.drauu.el,a=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const o=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-o.left)*a,y:(e.pageY-o.top)*a,pressure:e.pressure}}else{const o=this.drauu.svgPoint;o.x=e.clientX,o.y=e.clientY;const i=o.matrixTransform((n=s.getScreenCTM())==null?void 0:n.inverse());return{x:i.x*a,y:i.y*a,pressure:e.pressure}}}createElement(e,n){const s=document.createElementNS("http://www.w3.org/2000/svg",e),a=n?{...this.brush,...n}:this.brush;return s.setAttribute("fill",a.fill??"transparent"),s.setAttribute("stroke",a.color),s.setAttribute("stroke-width",a.size.toString()),s.setAttribute("stroke-linecap","round"),a.dasharray&&s.setAttribute("stroke-dasharray",a.dasharray),s}attr(e,n){this.el.setAttribute(e,typeof n=="string"?n:n.toFixed(it))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},ov=class extends Ds{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const n=tv(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!n.length)return"";const s=n.reduce((a,[o,i],l,c)=>{const[u,p]=c[(l+1)%c.length];return a.push(o,i,(o+u)/2,(i+p)/2),a},["M",...n[0],"Q"]);return s.push("Z"),s.map(a=>typeof a=="number"?a.toFixed(2):a).join(" ")}},iv=class extends Ds{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[n,s]=Fr(e.x-this.start.x),[a,o]=Fr(e.y-this.start.y);if(this.shiftPressed){const i=Math.min(n,a);n=i,a=i}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",n),this.attr("ry",a);else{const[i,l]=[this.start.x,this.start.x+n*s].sort(Tr),[c,u]=[this.start.y,this.start.y+a*o].sort(Tr);this.attr("cx",(i+l)/2),this.attr("cy",(c+u)/2),this.attr("rx",(l-i)/2),this.attr("ry",(u-c)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function of(e,n){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),a=document.createElementNS("http://www.w3.org/2000/svg","marker"),o=document.createElementNS("http://www.w3.org/2000/svg","path");return o.setAttribute("fill",n),a.setAttribute("id",e),a.setAttribute("viewBox","0 -5 10 10"),a.setAttribute("refX","5"),a.setAttribute("refY","0"),a.setAttribute("markerWidth","4"),a.setAttribute("markerHeight","4"),a.setAttribute("orient","auto"),o.setAttribute("d","M0,-5L10,0L0,5"),a.appendChild(o),s.appendChild(a),s}var lv=class extends Ds{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const n=rf(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(of(n,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${n})`),s}return this.el}onMove(e){if(!this.el)return!1;let{x:n,y:s}=e;if(this.shiftPressed){const a=e.x-this.start.x,o=e.y-this.start.y;if(o!==0){let i=a/o;i=Math.round(i),Math.abs(i)<=1?(n=this.start.x+o*i,s=this.start.y+o):(n=this.start.x+a,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-n),this.attr("y1",this.start.y*2-s),this.attr("x2",n),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",n),this.attr("y2",s)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},cv=class extends Ds{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[n,s]=Fr(e.x-this.start.x),[a,o]=Fr(e.y-this.start.y);if(this.shiftPressed){const i=Math.min(n,a);n=i,a=i}if(this.altPressed)this.attr("x",this.start.x-n),this.attr("y",this.start.y-a),this.attr("width",n*2),this.attr("height",a*2);else{const[i,l]=[this.start.x,this.start.x+n*s].sort(Tr),[c,u]=[this.start.y,this.start.y+a*o].sort(Tr);this.attr("x",i),this.attr("y",c),this.attr("width",l-i),this.attr("height",u-c)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function uv(e,n){const s=e.x-n.x,a=e.y-n.y;return s*s+a*a}function pv(e,n,s){let a=n.x,o=n.y,i=s.x-a,l=s.y-o;if(i!==0||l!==0){const c=((e.x-a)*i+(e.y-o)*l)/(i*i+l*l);c>1?(a=s.x,o=s.y):c>0&&(a+=i*c,o+=l*c)}return i=e.x-a,l=e.y-o,i*i+l*l}function dv(e,n){let s=e[0];const a=[s];let o;for(let i=1,l=e.length;i<l;i++)o=e[i],uv(o,s)>n&&(a.push(o),s=o);return s!==o&&o&&a.push(o),a}function _i(e,n,s,a,o){let i=a,l=0;for(let c=n+1;c<s;c++){const u=pv(e[c],e[n],e[s]);u>i&&(l=c,i=u)}i>a&&(l-n>1&&_i(e,n,l,a,o),o.push(e[l]),s-l>1&&_i(e,l,s,a,o))}function fv(e,n){const s=e.length-1,a=[e[0]];return _i(e,0,s,n,a),a.push(e[s]),a}function du(e,n,s=!1){if(e.length<=2)return e;const a=n!==void 0?n*n:1;return e=s?e:dv(e,a),e=fv(e,a),e}var hv=class extends Ds{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=rf();const n=of(this.arrowId,this.brush.color);this.el.appendChild(n)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=du(this.points,1,!0),this.count=0),this.attr("d",hu(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",hu(du(this.points,1,!0))),!e.getTotalLength()))}};function mv(e,n){const s=n.x-e.x,a=n.y-e.y;return{length:Math.sqrt(s**2+a**2),angle:Math.atan2(a,s)}}function fu(e,n,s,a){const o=n||e,i=s||e,l=.2,c=mv(o,i),u=c.angle+(a?Math.PI:0),p=c.length*l,d=e.x+Math.cos(u)*p,f=e.y+Math.sin(u)*p;return{x:d,y:f}}function gv(e,n,s){const a=fu(s[n-1],s[n-2],e),o=fu(e,s[n-1],s[n+1],!0);return`C ${a.x.toFixed(it)},${a.y.toFixed(it)} ${o.x.toFixed(it)},${o.y.toFixed(it)} ${e.x.toFixed(it)},${e.y.toFixed(it)}`}function hu(e){return e.reduce((n,s,a,o)=>a===0?`M ${s.x.toFixed(it)},${s.y.toFixed(it)}`:`${n} ${gv(s,a,o)}`,"")}var _v=class extends Ds{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const n=(s,a)=>{if(s&&s.length)for(let o=0;o<s.length;o++){const i=s[o];if(i.getTotalLength){const l=i.getTotalLength();for(let c=0;c<this.pathSubFactor;c++){const u=i.getPointAtLength(l*c/this.pathSubFactor),p=i.getPointAtLength(l*(c+1)/this.pathSubFactor);this.pathFragments.push({x1:u.x,x2:p.x,y1:u.y,y2:p.y,segment:c,element:a||i})}}else i.children&&n(i.children,i)}};e&&n(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const n=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,n}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let n=0;n<this.pathFragments.length;n++){const s=this.pathFragments[n],a={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(s,a)&&(s.element.remove(),e.push(n))}return e.length&&(this.pathFragments=this.pathFragments.filter((n,s)=>!e.includes(s))),e.length>0}lineLineIntersect(e,n){const s=e.x1,a=e.x2,o=n.x1,i=n.x2,l=e.y1,c=e.y2,u=n.y1,p=n.y2,d=(s-a)*(u-p)-(l-c)*(o-i),f=(s*c-l*a)*(o-i)-(s-a)*(o*p-u*i),h=(s*c-l*a)*(u-p)-(l-c)*(o*p-u*i),m=(g,b,y)=>g>=b&&g<=y?!0:g>=y&&g<=b;if(d===0)return!1;{const g={x:f/d,y:h/d};return m(g.x,s,a)&&m(g.y,l,c)&&m(g.x,o,i)&&m(g.y,u,p)}}};function kv(e){return{draw:new hv(e),stylus:new ov(e),line:new lv(e),rectangle:new cv(e),ellipse:new iv(e),eraseLine:new _v(e)}}var bv=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=sv(),this._models=kv(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,n){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const s=this.resolveSelector(n)||this.el,a=this.eventStart.bind(this),o=this.eventMove.bind(this),i=this.eventEnd.bind(this),l=this.eventKeyboard.bind(this);s.addEventListener("pointerdown",a,{passive:!1}),window.addEventListener("pointermove",o,{passive:!1}),window.addEventListener("pointerup",i,{passive:!1}),window.addEventListener("pointercancel",i,{passive:!1}),window.addEventListener("keydown",l,!1),window.addEventListener("keyup",l,!1),this._disposables.push(()=>{s.removeEventListener("pointerdown",a),window.removeEventListener("pointermove",o),window.removeEventListener("pointerup",i),window.removeEventListener("pointercancel",i),window.removeEventListener("keydown",l,!1),window.removeEventListener("keyup",l,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,n){return this._emitter.on(e,n)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){this.acceptsInput(e)&&(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const n=this.model._eventUp(e);n?(n instanceof Element&&n!==this._currentNode&&(this._currentNode=n),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function vv(e){return new bv(e)}const ki=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Xn=Un("slidev-drawing-enabled",!1),zM=Un("slidev-drawing-pinned",!1),yv=se(!1),wv=se(!1),Sv=se(!1),Sa=se(!1),Yt=t1(Un("slidev-drawing-brush",{color:ki[0],size:4,mode:"stylus"})),mu=se("stylus"),lf=I(()=>Oe.drawings.syncAll||_n.value);let xa=!1;const Ys=I({get(){return mu.value},set(e){mu.value=e,e==="arrow"?(Yt.mode="line",Yt.arrowEnd=!0):(Yt.mode=e,Yt.arrowEnd=!1)}}),xv=Ve({brush:Yt,acceptsInputTypes:I(()=>Xn.value&&(!Oe.drawings.presenterOnly||_n.value)?void 0:["pen"]),coordinateTransform:!1}),fn=qr(vv(xv));function Ev(){fn.clear(),lf.value&&Pd(Ke.value,"")}function cl(){var e;wv.value=fn.canRedo(),yv.value=fn.canUndo(),Sv.value=!!((e=fn.el)!=null&&e.children.length)}function Cv(e){xa=!0;const n=$r[e||Ke.value];n!=null?fn.load(n):fn.clear(),cl(),xa=!1}fn.on("changed",()=>{if(cl(),!xa){const e=fn.dump(),n=Ke.value;($r[n]||"")!==e&&lf.value&&Pd(n,fn.dump())}});Vk(e=>{xa=!0,e[Ke.value]!=null&&fn.load(e[Ke.value]||""),xa=!1,cl()});nn(()=>{we(Ke,()=>{fn.mounted&&Cv()},{immediate:!0})});fn.on("start",()=>Sa.value=!0);fn.on("end",()=>Sa.value=!1);window.addEventListener("keydown",e=>{if(!Xn.value)return;const n=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let s=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?fn.redo():fn.undo():e.code==="Escape"?Xn.value=!1:e.code==="KeyL"&&n?Ys.value="line":e.code==="KeyA"&&n?Ys.value="arrow":e.code==="KeyS"&&n?Ys.value="stylus":e.code==="KeyR"&&n?Ys.value="rectangle":e.code==="KeyE"&&n?Ys.value="ellipse":e.code==="KeyC"&&n?Ev():e.code.startsWith("Digit")&&n&&+e.code[5]<=ki.length?Yt.color=ki[+e.code[5]-1]:s=!1,s&&(e.preventDefault(),e.stopPropagation())},!1);function Je(...e){return I(()=>e.every(n=>dn(n)))}function Sn(e){return I(()=>!dn(e))}const gu=U1(),$o=Un("slidev-color-schema","auto"),bi=I(()=>Oe.colorSchema!=="auto"),ul=I({get(){return bi.value?Oe.colorSchema==="dark":$o.value==="auto"?gu.value:$o.value==="dark"},set(e){bi.value||($o.value=e===gu.value?"auto":e?"dark":"light")}}),cf=Md(ul);ft&&we(ul,e=>{const n=document.querySelector("html");n.classList.toggle("dark",e),n.classList.toggle("light",!e)},{immediate:!0});const cr=se(1),ur=I(()=>Ye.length-1),On=se(0),pl=se(0);function $v(){On.value>cr.value&&(On.value-=1)}function Pv(){On.value<ur.value&&(On.value+=1)}function Ov(){if(On.value>cr.value){let e=On.value-pl.value;e<cr.value&&(e=cr.value),On.value=e}}function Tv(){if(On.value<ur.value){let e=On.value+pl.value;e>ur.value&&(e=ur.value),On.value=e}}function Fv(){const{escape:e,space:n,shift:s,left:a,right:o,up:i,down:l,enter:c,d:u,g:p,o:d}=nf;let f=[{name:"next_space",key:Je(n,Sn(s)),fn:Ft,autoRepeat:!0},{name:"prev_space",key:Je(n,s),fn:At,autoRepeat:!0},{name:"next_right",key:Je(o,Sn(s),Sn(cn)),fn:Ft,autoRepeat:!0},{name:"prev_left",key:Je(a,Sn(s),Sn(cn)),fn:At,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Ft,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:At,autoRepeat:!0},{name:"next_down",key:Je(l,Sn(cn)),fn:Ca,autoRepeat:!0},{name:"prev_up",key:Je(i,Sn(cn)),fn:()=>$a(!1),autoRepeat:!0},{name:"next_shift",key:Je(o,s),fn:Ca,autoRepeat:!0},{name:"prev_shift",key:Je(a,s),fn:()=>$a(!1),autoRepeat:!0},{name:"toggle_dark",key:Je(u,Sn(Xn)),fn:cf},{name:"toggle_overview",key:Je(d,Sn(Xn)),fn:sf},{name:"hide_overview",key:Je(e,Sn(Xn)),fn:()=>cn.value=!1},{name:"goto",key:Je(p,Sn(Xn)),fn:()=>ws.value=!ws.value},{name:"next_overview",key:Je(o,cn),fn:Pv},{name:"prev_overview",key:Je(a,cn),fn:$v},{name:"up_overview",key:Je(i,cn),fn:Ov},{name:"down_overview",key:Je(l,cn),fn:Tv},{name:"goto_from_overview",key:Je(c,cn),fn:()=>{Is(On.value),cn.value=!1}}];const h=new Set(f.map(g=>g.name));if(f.filter(g=>g.name&&h.has(g.name)).length===0){const g=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(g),console.warn(g)}return f}const uf=Je(Sn(zb),Sn(Ub),Vb);function Av(e,n,s=!1){typeof e=="string"&&(e=nf[e]);const a=Je(e,uf);let o=0,i;const l=()=>{if(clearTimeout(i),!a.value){o=0;return}s&&(i=setTimeout(l,Math.max(1e3-o*250,150)),o++),n()};return we(a,l,{flush:"sync"})}function Mv(e,n){return P1(e,s=>{uf.value&&(s.repeat||n())})}function Iv(){const e=Fv();new Map(e.map(s=>[s.key,s])).forEach(s=>{s.fn&&Av(s.key,s.fn,s.autoRepeat)}),Mv("f",()=>tf.toggle())}const Nv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Dv=t("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),Lv=[Dv];function jv(e,n){return k(),ee("svg",Nv,Lv)}const Rv={name:"carbon-close",render:jv};function dl(e,n=""){var o,i;const s=["slidev-page",n],a=(i=(o=e==null?void 0:e.meta)==null?void 0:o.slide)==null?void 0:i.no;return a!=null&&s.push(`slidev-page-${a}`),s.filter(Boolean).join(" ")}const Bv=Me({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const n=e;C(F);const s=se(),a=a0(s),o=I(()=>n.width?n.width:a.width.value),i=I(()=>n.width?n.width/Ot:a.height.value);n.width&&cs(()=>{s.value&&(s.value.style.width=`${o.value}px`,s.value.style.height=`${i.value}px`)});const l=I(()=>o.value/i.value),c=I(()=>n.scale&&!Ms.value?n.scale:l.value<Ot?o.value/Tt:i.value*Ot/Tt),u=I(()=>({height:`${rl}px`,width:`${Tt}px`,transform:`translate(-50%, -50%) scale(${c.value})`})),p=I(()=>({"select-none":!Oe.selectable,"slidev-code-line-numbers":Oe.lineNumbers}));return En(Cd,c),(d,f)=>(k(),ee("div",{id:"slide-container",ref_key:"root",ref:s,class:He(E(p))},[t("div",{id:"slide-content",style:tn(E(u))},[Ln(d.$slots,"default")],4),Ln(d.$slots,"controls")],2))}});const A=(e,n)=>{const s=e.__vccOpts||e;for(const[a,o]of n)s[a]=o;return s},pf=A(Bv,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/internals/SlideContainer.vue"]]),fl=Me({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:n}){const s=Jn(e,"clicks",n),a=Jn(e,"clicksElements",n),o=Jn(e,"clicksDisabled",n),i=Jn(e,"clicksOrderMap",n);a.value.length=0,En($k,e.route),En(Pk,e.context),En(sa,s),En(aa,o),En(Kt,a),En(ai,i)},render(){var e,n;return this.$props.is?Pn(this.$props.is):(n=(e=this.$slots)==null?void 0:e.default)==null?void 0:n.call(e)}}),qv=["innerHTML"],Wv=Me({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(e){return C(F),(n,s)=>E($r)[e.page]?(k(),ee("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:E($r)[e.page]},null,8,qv)):xe("v-if",!0)}}),df=A(Wv,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),Vv=Object.freeze(Object.defineProperty({__proto__:null,default:df},Symbol.toStringTag,{value:"Module"})),Hv={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},zv=["onClick"],Uv=Me({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(e,{emit:n}){const s=e;C(F);const a=Jn(s,"modelValue",n);function o(){a.value=!1}function i(m){Is(m),o()}function l(m){return m===On.value}const c=mi.smaller("xs"),u=mi.smaller("sm"),p=4*16*2,d=2*16,f=I(()=>c.value?as.width.value-p:u.value?(as.width.value-p-d)/2:300),h=I(()=>Math.floor((as.width.value-p)/(f.value+d)));return cs(()=>{On.value=Ke.value,pl.value=h.value}),(m,g)=>{const b=Rv;return k(),ee(Ae,null,[Ji(t("div",Hv,[t("div",{class:"grid gap-y-4 gap-x-8 w-full",style:tn(`grid-template-columns: repeat(auto-fit,minmax(${E(f)}px,1fr))`)},[(k(!0),ee(Ae,null,Da(E(Ye).slice(0,-1),(y,$)=>(k(),ee("div",{key:y.path,class:"relative"},[t("div",{class:He(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":l($+1),"border-gray-400":!l($+1)}]),style:tn(E(ol)),onClick:S=>i(+y.path)},[(k(),T(pf,{key:y.path,width:E(f),"clicks-disabled":!0,class:"pointer-events-none"},{default:w(()=>[N(E(fl),{is:y==null?void 0:y.component,"clicks-disabled":!0,class:He(E(dl)(y)),route:y,context:"overview"},null,8,["is","class","route"]),N(df,{page:+y.path},null,8,["page"])]),_:2},1032,["width"]))],14,zv),t("div",{class:"absolute top-0 opacity-50",style:tn(`left: ${E(f)+5}px`)},Cn($+1),5)]))),128))],4)],512),[[md,E(a)]]),E(a)?(k(),ee("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:o},[N(b)])):xe("v-if",!0)],64)}}});const Kv=A(Uv,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),Gv="/2023-06-dwx-fp-csharp-to-fsharp/assets/logo-b72bde5d.png",Zv={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},Yv=Me({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:n}){const s=e;C(F);const a=Jn(s,"modelValue",n);function o(){a.value=!1}return(i,l)=>(k(),T(Bp,null,[E(a)?(k(),ee("div",Zv,[t("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:l[0]||(l[0]=c=>o())}),t("div",{class:He(["m-auto rounded-md bg-main shadow",s.class]),"dark:border":"~ gray-400 opacity-10"},[Ln(i.$slots,"default")],2)])):xe("v-if",!0)],1024))}}),Jv=A(Yv,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/internals/Modal.vue"]]),Xv={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},Qv=["innerHTML"],ey=t("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[t("div",{class:"flex gap-1 children:my-auto"},[t("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),t("img",{class:"w-5 h-5",src:Gv,alt:"Slidev"}),t("div",{style:{color:"#2082A6"}},[t("b",null,"Sli"),r("dev ")])])],-1),ny=Me({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:n}){const s=e;C(F);const a=Jn(s,"modelValue",n),o=I(()=>typeof Oe.info=="string");return(i,l)=>(k(),T(Jv,{modelValue:E(a),"onUpdate:modelValue":l[0]||(l[0]=c=>Fe(a)?a.value=c:null),class:"px-6 py-4"},{default:w(()=>[t("div",Xv,[E(o)?(k(),ee("div",{key:0,class:"mb-4",innerHTML:E(Oe).info},null,8,Qv)):xe("v-if",!0),ey])]),_:1},8,["modelValue"]))}});const ty=A(ny,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/internals/InfoDialog.vue"]]),sy=["disabled","onKeydown"],ay=Me({__name:"Goto",setup(e){C(F);const n=se(),s=se(""),a=I(()=>{if(s.value.startsWith("/"))return!!Ye.find(l=>l.path===s.value.substring(1));{const l=+s.value;return!isNaN(l)&&l>0&&l<=Cf.value}});function o(){a.value&&(s.value.startsWith("/")?Is(s.value.substring(1)):Is(+s.value)),i()}function i(){ws.value=!1}return we(ws,async l=>{var c,u;l?(await nn(),s.value="",(c=n.value)==null||c.focus()):(u=n.value)==null||u.blur()}),we(s,l=>{l.match(/^[^0-9/]/)&&(s.value=s.value.substring(1))}),(l,c)=>(k(),ee("div",{id:"slidev-goto-dialog",class:He(["fixed right-5 bg-main transform transition-all",E(ws)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[Ji(t("input",{ref_key:"input",ref:n,"onUpdate:modelValue":c[0]||(c[0]=u=>s.value=u),type:"text",disabled:!E(ws),class:He(["outline-none bg-transparent",{"text-red-400":!E(a)&&s.value}]),placeholder:"Goto...",onKeydown:[kc(o,["enter"]),kc(i,["escape"])],onBlur:i},null,42,sy),[[T_,s.value]])],2))}}),ry=A(ay,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/internals/Goto.vue"]]),oy=Me({__name:"Controls",setup(e){C(F);const n=et(),s=et();return(a,o)=>(k(),ee(Ae,null,[N(Kv,{modelValue:E(cn),"onUpdate:modelValue":o[0]||(o[0]=i=>Fe(cn)?cn.value=i:null)},null,8,["modelValue"]),N(ry),E(n)?(k(),T(E(n),{key:0})):xe("v-if",!0),E(s)?(k(),T(E(s),{key:1,modelValue:E(Eo),"onUpdate:modelValue":o[1]||(o[1]=i=>Fe(Eo)?Eo.value=i:null)},null,8,["modelValue"])):xe("v-if",!0),E(Oe).info?(k(),T(ty,{key:2,modelValue:E(ia),"onUpdate:modelValue":o[2]||(o[2]=i=>Fe(ia)?ia.value=i:null)},null,8,["modelValue"])):xe("v-if",!0)],64))}}),iy=A(oy,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/internals/Controls.vue"]]),ly={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},cy=t("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),uy=[cy];function py(e,n){return k(),ee("svg",ly,uy)}const dy={name:"carbon-settings-adjust",render:py},fy={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},hy=t("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),my=t("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),gy=[hy,my];function _y(e,n){return k(),ee("svg",fy,gy)}const ky={name:"carbon-information",render:_y},by={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},vy=t("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),yy=[vy];function wy(e,n){return k(),ee("svg",by,yy)}const Sy={name:"carbon-download",render:wy},xy={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ey=t("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),Cy=t("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),$y=[Ey,Cy];function Py(e,n){return k(),ee("svg",xy,$y)}const Oy={name:"carbon-presentation-file",render:Py},Ty={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Fy=t("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),Ay=[Fy];function My(e,n){return k(),ee("svg",Ty,Ay)}const Iy={name:"carbon-pen",render:My},Ny={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Dy=t("g",{fill:"currentColor"},[t("path",{d:"M213.66 201L201 213.66a8 8 0 0 1-11.31 0L140 164a8 8 0 0 0-13 2.46l-19.46 44.77a8 8 0 0 1-14.85-.71L40.41 50.44a8 8 0 0 1 10-10l160.1 52.24a8 8 0 0 1 .71 14.85L166.45 127a8 8 0 0 0-2.45 13l49.67 49.67a8 8 0 0 1-.01 11.33Z",opacity:".2"}),t("path",{d:"m169.64 134.33l44.77-19.46a16 16 0 0 0-1.41-29.8L52.92 32.8A16 16 0 0 0 32.8 52.92L85.07 213a15.83 15.83 0 0 0 14.41 11h.78a15.83 15.83 0 0 0 14.61-9.59l19.46-44.77L184 219.31a16 16 0 0 0 22.63 0l12.68-12.68a16 16 0 0 0 0-22.63Zm-69.48 73.76l.06-.05Zm95.15-.09l-49.67-49.67a16 16 0 0 0-26 4.94l-19.42 44.65L48 48l159.87 52.21l-44.64 19.41a16 16 0 0 0-4.94 26L208 195.31Z"})],-1),Ly=[Dy];function jy(e,n){return k(),ee("svg",Ny,Ly)}const Ry={name:"ph-cursor-duotone",render:jy},By={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},qy=t("path",{fill:"currentColor",d:"M219.31 192a16 16 0 0 1 0 22.63l-4.68 4.68a16 16 0 0 1-22.63 0l-55.25-55.24l-21.88 50.34a15.84 15.84 0 0 1-14.61 9.59h-.78a15.82 15.82 0 0 1-14.41-11L32.8 52.92A15.95 15.95 0 0 1 52.92 32.8L213 85.07a16 16 0 0 1 1.41 29.8l-50.34 21.88Z"},null,-1),Wy=[qy];function Vy(e,n){return k(),ee("svg",By,Wy)}const ff={name:"ph-cursor-fill",render:Vy},Hy={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},zy=t("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),Uy=[zy];function Ky(e,n){return k(),ee("svg",Hy,Uy)}const Gy={name:"carbon-sun",render:Ky},Zy={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Yy=t("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),Jy=[Yy];function Xy(e,n){return k(),ee("svg",Zy,Jy)}const Qy={name:"carbon-moon",render:Xy},ew={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},nw=t("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),tw=[nw];function sw(e,n){return k(),ee("svg",ew,tw)}const aw={name:"carbon-apps",render:sw},rw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ow=t("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),iw=[ow];function lw(e,n){return k(),ee("svg",rw,iw)}const cw={name:"carbon-arrow-right",render:lw},uw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},pw=t("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),dw=[pw];function fw(e,n){return k(),ee("svg",uw,dw)}const hw={name:"carbon-arrow-left",render:fw},mw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},gw=t("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),_w=[gw];function kw(e,n){return k(),ee("svg",mw,_w)}const bw={name:"carbon-maximize",render:kw},vw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},yw=t("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),ww=[yw];function Sw(e,n){return k(),ee("svg",vw,ww)}const xw={name:"carbon-minimize",render:Sw},Ew={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Cw=t("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),$w=[Cw];function Pw(e,n){return k(),ee("svg",Ew,$w)}const Ow={name:"carbon-checkmark",render:Pw},Tw={class:"select-list"},Fw={class:"title"},Aw={class:"items"},Mw=["onClick"],Iw=Me({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:n}){const s=e;C(F);const a=Jn(s,"modelValue",n,{passive:!0});return(o,i)=>{const l=Ow;return k(),ee("div",Tw,[t("div",Fw,Cn(e.title),1),t("div",Aw,[(k(!0),ee(Ae,null,Da(e.items,c=>(k(),ee("div",{key:c.value,class:He(["item",{active:E(a)===c.value}]),onClick:()=>{var u;a.value=c.value,(u=c.onClick)==null||u.call(c)}},[N(l,{class:He(["text-green-500",{"opacity-0":E(a)!==c.value}])},null,8,["class"]),r(" "+Cn(c.display||c.value),1)],10,Mw))),128))])])}}});const Nw=A(Iw,[["__scopeId","data-v-3f89fa11"],["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/internals/SelectList.vue"]]),Dw={class:"text-sm"},Lw=Me({__name:"Settings",setup(e){C(F);const n=[{display:"Fit",value:0},{display:"1:1",value:1}];return(s,a)=>(k(),ee("div",Dw,[N(Nw,{modelValue:E(lr),"onUpdate:modelValue":a[0]||(a[0]=o=>Fe(lr)?lr.value=o:null),title:"Scale",items:n},null,8,["modelValue"])]))}}),jw=A(Lw,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/internals/Settings.vue"]]),Rw={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},Bw=Me({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:n}){const s=e;C(F);const a=Jn(s,"modelValue",n,{passive:!0}),o=se();return C1(o,()=>{a.value=!1}),(i,l)=>(k(),ee("div",{ref_key:"el",ref:o,class:"flex relative"},[t("button",{class:He({disabled:e.disabled}),onClick:l[0]||(l[0]=c=>a.value=!E(a))},[Ln(i.$slots,"button",{class:He({disabled:e.disabled})})],2),(k(),T(Bp,null,[E(a)?(k(),ee("div",Rw,[Ln(i.$slots,"menu")])):xe("v-if",!0)],1024))],512))}}),qw=A(Bw,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/internals/MenuButton.vue"]]),Ww={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},Vw={__name:"VerticalDivider",setup(e){return C(F),(n,s)=>(k(),ee("div",Ww))}},er=A(Vw,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),Hw={render(){return[]}},zw={class:"slidev-icon-btn"},Uw={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},Kw={class:"my-auto"},Gw={class:"opacity-50"},Zw=Me({__name:"NavControls",props:{persist:{default:!1}},setup(e){const n=e;C(F);const s=mi.smaller("md"),{isFullscreen:a,toggle:o}=tf,i=I(()=>yi.value?`?password=${yi.value}`:"");I(()=>`/presenter/${Ke.value}${i.value}`);const l=I(()=>`/${Ke.value}${i.value}`),c=se(),u=()=>{c.value&&Ps.value&&c.value.contains(Ps.value)&&Ps.value.blur()},p=I(()=>n.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),d=et(),f=et();return ja(()=>import("./DrawingControls-6784ae38.js"),[]).then(h=>f.value=h.default),(h,m)=>{const g=xw,b=bw,y=hw,$=cw,S=aw,x=Qy,P=Gy,R=ff,H=Ry,Y=Iy,D=Oy,G=yr("RouterLink"),ae=Sy,fe=ky,Q=dy;return k(),ee("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[t("div",{class:He(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",E(p)]),onMouseleave:u},[E(rt)?xe("v-if",!0):(k(),ee("button",{key:0,class:"slidev-icon-btn",onClick:m[0]||(m[0]=(...de)=>E(o)&&E(o)(...de))},[E(a)?(k(),T(g,{key:0})):(k(),T(b,{key:1}))])),t("button",{class:He(["slidev-icon-btn",{disabled:!E(f5)}]),onClick:m[1]||(m[1]=(...de)=>E(At)&&E(At)(...de))},[N(y)],2),t("button",{class:He(["slidev-icon-btn",{disabled:!E(d5)}]),title:"Next",onClick:m[2]||(m[2]=(...de)=>E(Ft)&&E(Ft)(...de))},[N($)],2),E(rt)?xe("v-if",!0):(k(),ee("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:m[3]||(m[3]=de=>E(sf)())},[N(S)])),E(bi)?xe("v-if",!0):(k(),ee("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:m[4]||(m[4]=de=>E(cf)())},[E(ul)?(k(),T(x,{key:0})):(k(),T(P,{key:1}))])),N(er),E(rt)?xe("v-if",!0):(k(),ee(Ae,{key:3},[!E(_n)&&!E(s)&&E(d)?(k(),ee(Ae,{key:0},[N(E(d)),N(er)],64)):xe("v-if",!0),E(_n)?(k(),ee("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:m[5]||(m[5]=de=>Co.value=!E(Co))},[E(Co)?(k(),T(R,{key:0})):(k(),T(H,{key:1,class:"opacity-50"}))])):xe("v-if",!0)],64)),(!E(Oe).drawings.presenterOnly||E(_n))&&!E(rt)?(k(),ee(Ae,{key:4},[t("button",{class:"slidev-icon-btn relative",title:"Drawing",onClick:m[6]||(m[6]=de=>Xn.value=!E(Xn))},[N(Y),E(Xn)?(k(),ee("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:tn({background:E(Yt).color})},null,4)):xe("v-if",!0)]),N(er)],64)):xe("v-if",!0),E(rt)?xe("v-if",!0):(k(),ee(Ae,{key:5},[E(_n)?(k(),T(G,{key:0,to:E(l),class:"slidev-icon-btn",title:"Play Mode"},{default:w(()=>[N(D)]),_:1},8,["to"])):xe("v-if",!0),xe("v-if",!0),xe("v-if",!0)],64)),(k(),ee(Ae,{key:6},[E(Oe).download?(k(),ee("button",{key:0,class:"slidev-icon-btn",onClick:m[8]||(m[8]=(...de)=>E(wi)&&E(wi)(...de))},[N(ae)])):xe("v-if",!0)],64)),!E(_n)&&E(Oe).info&&!E(rt)?(k(),ee("button",{key:7,class:"slidev-icon-btn",onClick:m[9]||(m[9]=de=>ia.value=!E(ia))},[N(fe)])):xe("v-if",!0),!E(_n)&&!E(rt)?(k(),T(qw,{key:8},{button:w(()=>[t("button",zw,[N(Q)])]),menu:w(()=>[N(jw)]),_:1})):xe("v-if",!0),E(rt)?xe("v-if",!0):(k(),T(er,{key:9})),t("div",Uw,[t("div",Kw,[r(Cn(E(Ke))+" ",1),t("span",Gw,"/ "+Cn(E(Cf)),1)])]),N(E(Hw))],34)],512)}}}),Yw=A(Zw,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/internals/NavControls.vue"]]),hf={render(){return[]}},mf={render(){return[]}},Jw={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},Xw=Me({__name:"PresenterMouse",setup(e){return C(F),(n,s)=>{const a=ff;return E(yo).cursor?(k(),ee("div",Jw,[N(a,{class:"absolute",style:tn({left:`${E(yo).cursor.x}%`,top:`${E(yo).cursor.y}%`})},null,8,["style"])])):xe("v-if",!0)}}}),Qw=A(Xw,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),e2=Me({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(e){C(F),we(un,()=>{var a,o;(a=un.value)!=null&&a.meta&&un.value.meta.preload!==!1&&(un.value.meta.__preloaded=!0),(o=Po.value)!=null&&o.meta&&Po.value.meta.preload!==!1&&(Po.value.meta.__preloaded=!0)},{immediate:!0});const n=et();ja(()=>import("./DrawingLayer-fddd98eb.js"),[]).then(a=>n.value=a.default);const s=I(()=>Ye.filter(a=>{var o;return((o=a.meta)==null?void 0:o.__preloaded)||a===un.value}));return(a,o)=>(k(),ee(Ae,null,[xe(" Global Bottom "),N(E(mf)),xe(" Slides "),N(x_,le(E(g5),{id:"slideshow",tag:"div"}),{default:w(()=>[(k(!0),ee(Ae,null,Da(E(s),i=>{var l;return Ji((k(),T(E(fl),{key:i.path,is:i==null?void 0:i.component,clicks:i===E(un)?E(Nn):0,"clicks-elements":((l=i.meta)==null?void 0:l.__clicksElements)||[],"clicks-disabled":!1,class:He(E(dl)(i)),route:i,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[md,i===E(un)]])}),128))]),_:1},16),xe(" Global Top "),N(E(hf)),E(n)?(k(),T(E(n),{key:0})):xe("v-if",!0),E(_n)?xe("v-if",!0):(k(),T(Qw,{key:1}))],64))}});const n2=A(e2,[["__scopeId","data-v-afb4231e"],["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/internals/SlidesShow.vue"]]),t2=Me({__name:"PrintStyle",setup(e){C(F);function n(s,{slots:a}){if(a.default)return Pn("style",a.default())}return(s,a)=>(k(),T(n,null,{default:w(()=>[r(" @page { size: "+Cn(E(Tt))+"px "+Cn(E(rl))+"px; margin: 0px; } ",1)]),_:1}))}}),gf=A(t2,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/internals/PrintStyle.vue"]]),s2=Me({__name:"Play",setup(e){C(F),Iv();const n=se();function s(i){var l;ou.value||((l=i.target)==null?void 0:l.id)==="slide-container"&&(i.screenX/window.innerWidth>.6?Ft():At())}_5(n);const a=I(()=>Hb.value||ou.value);et();const o=et();return ja(()=>import("./DrawingControls-6784ae38.js"),[]).then(i=>o.value=i.default),(i,l)=>(k(),ee(Ae,null,[E(Ms)?(k(),T(gf,{key:0})):xe("v-if",!0),t("div",{id:"page-root",ref_key:"root",ref:n,class:"grid grid-cols-[1fr_max-content]",style:tn(E(ol))},[N(pf,{class:"w-full h-full",style:tn({background:"var(--slidev-slide-container-background, black)"}),width:E(Ms)?E(as).width.value:void 0,scale:E(lr),onPointerdown:s},{default:w(()=>[N(n2,{context:"slide"})]),controls:w(()=>[t("div",{class:He(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[E(a)?"opacity-100 right-0":"opacity-0 p-2",E(Sa)?"pointer-events-none":""]])},[N(Yw,{class:"m-auto",persist:E(a)},null,8,["persist"])],2),!E(Oe).drawings.presenterOnly&&!E(rt)&&E(o)?(k(),T(E(o),{key:0,class:"ml-0"})):xe("v-if",!0)]),_:1},8,["style","width","scale"]),xe("v-if",!0)],4),N(iy)],64))}}),a2=A(s2,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function _f(e){return typeof e>"u"||e===null}function r2(e){return typeof e=="object"&&e!==null}function o2(e){return Array.isArray(e)?e:_f(e)?[]:[e]}function i2(e,n){var s,a,o,i;if(n)for(i=Object.keys(n),s=0,a=i.length;s<a;s+=1)o=i[s],e[o]=n[o];return e}function l2(e,n){var s="",a;for(a=0;a<n;a+=1)s+=e;return s}function c2(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var u2=_f,p2=r2,d2=o2,f2=l2,h2=c2,m2=i2,hl={isNothing:u2,isObject:p2,toArray:d2,repeat:f2,isNegativeZero:h2,extend:m2};function kf(e,n){var s="",a=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(s+='in "'+e.mark.name+'" '),s+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!n&&e.mark.snippet&&(s+=`

`+e.mark.snippet),a+" "+s):a}function Ea(e,n){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=n,this.message=kf(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Ea.prototype=Object.create(Error.prototype);Ea.prototype.constructor=Ea;Ea.prototype.toString=function(n){return this.name+": "+kf(this,n)};var Gt=Ea,g2=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],_2=["scalar","sequence","mapping"];function k2(e){var n={};return e!==null&&Object.keys(e).forEach(function(s){e[s].forEach(function(a){n[String(a)]=s})}),n}function b2(e,n){if(n=n||{},Object.keys(n).forEach(function(s){if(g2.indexOf(s)===-1)throw new Gt('Unknown option "'+s+'" is met in definition of "'+e+'" YAML type.')}),this.options=n,this.tag=e,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(s){return s},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.representName=n.representName||null,this.defaultStyle=n.defaultStyle||null,this.multi=n.multi||!1,this.styleAliases=k2(n.styleAliases||null),_2.indexOf(this.kind)===-1)throw new Gt('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var rn=b2;function _u(e,n){var s=[];return e[n].forEach(function(a){var o=s.length;s.forEach(function(i,l){i.tag===a.tag&&i.kind===a.kind&&i.multi===a.multi&&(o=l)}),s[o]=a}),s}function v2(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},n,s;function a(o){o.multi?(e.multi[o.kind].push(o),e.multi.fallback.push(o)):e[o.kind][o.tag]=e.fallback[o.tag]=o}for(n=0,s=arguments.length;n<s;n+=1)arguments[n].forEach(a);return e}function vi(e){return this.extend(e)}vi.prototype.extend=function(n){var s=[],a=[];if(n instanceof rn)a.push(n);else if(Array.isArray(n))a=a.concat(n);else if(n&&(Array.isArray(n.implicit)||Array.isArray(n.explicit)))n.implicit&&(s=s.concat(n.implicit)),n.explicit&&(a=a.concat(n.explicit));else throw new Gt("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");s.forEach(function(i){if(!(i instanceof rn))throw new Gt("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(i.loadKind&&i.loadKind!=="scalar")throw new Gt("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(i.multi)throw new Gt("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),a.forEach(function(i){if(!(i instanceof rn))throw new Gt("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var o=Object.create(vi.prototype);return o.implicit=(this.implicit||[]).concat(s),o.explicit=(this.explicit||[]).concat(a),o.compiledImplicit=_u(o,"implicit"),o.compiledExplicit=_u(o,"explicit"),o.compiledTypeMap=v2(o.compiledImplicit,o.compiledExplicit),o};var y2=vi,w2=new rn("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),S2=new rn("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),x2=new rn("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),E2=new y2({explicit:[w2,S2,x2]});function C2(e){if(e===null)return!0;var n=e.length;return n===1&&e==="~"||n===4&&(e==="null"||e==="Null"||e==="NULL")}function $2(){return null}function P2(e){return e===null}var O2=new rn("tag:yaml.org,2002:null",{kind:"scalar",resolve:C2,construct:$2,predicate:P2,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function T2(e){if(e===null)return!1;var n=e.length;return n===4&&(e==="true"||e==="True"||e==="TRUE")||n===5&&(e==="false"||e==="False"||e==="FALSE")}function F2(e){return e==="true"||e==="True"||e==="TRUE"}function A2(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var M2=new rn("tag:yaml.org,2002:bool",{kind:"scalar",resolve:T2,construct:F2,predicate:A2,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function I2(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function N2(e){return 48<=e&&e<=55}function D2(e){return 48<=e&&e<=57}function L2(e){if(e===null)return!1;var n=e.length,s=0,a=!1,o;if(!n)return!1;if(o=e[s],(o==="-"||o==="+")&&(o=e[++s]),o==="0"){if(s+1===n)return!0;if(o=e[++s],o==="b"){for(s++;s<n;s++)if(o=e[s],o!=="_"){if(o!=="0"&&o!=="1")return!1;a=!0}return a&&o!=="_"}if(o==="x"){for(s++;s<n;s++)if(o=e[s],o!=="_"){if(!I2(e.charCodeAt(s)))return!1;a=!0}return a&&o!=="_"}if(o==="o"){for(s++;s<n;s++)if(o=e[s],o!=="_"){if(!N2(e.charCodeAt(s)))return!1;a=!0}return a&&o!=="_"}}if(o==="_")return!1;for(;s<n;s++)if(o=e[s],o!=="_"){if(!D2(e.charCodeAt(s)))return!1;a=!0}return!(!a||o==="_")}function j2(e){var n=e,s=1,a;if(n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),a=n[0],(a==="-"||a==="+")&&(a==="-"&&(s=-1),n=n.slice(1),a=n[0]),n==="0")return 0;if(a==="0"){if(n[1]==="b")return s*parseInt(n.slice(2),2);if(n[1]==="x")return s*parseInt(n.slice(2),16);if(n[1]==="o")return s*parseInt(n.slice(2),8)}return s*parseInt(n,10)}function R2(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!hl.isNegativeZero(e)}var B2=new rn("tag:yaml.org,2002:int",{kind:"scalar",resolve:L2,construct:j2,predicate:R2,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),q2=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function W2(e){return!(e===null||!q2.test(e)||e[e.length-1]==="_")}function V2(e){var n,s;return n=e.replace(/_/g,"").toLowerCase(),s=n[0]==="-"?-1:1,"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?s===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:s*parseFloat(n,10)}var H2=/^[-+]?[0-9]+e/;function z2(e,n){var s;if(isNaN(e))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(hl.isNegativeZero(e))return"-0.0";return s=e.toString(10),H2.test(s)?s.replace("e",".e"):s}function U2(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||hl.isNegativeZero(e))}var K2=new rn("tag:yaml.org,2002:float",{kind:"scalar",resolve:W2,construct:V2,predicate:U2,represent:z2,defaultStyle:"lowercase"}),G2=E2.extend({implicit:[O2,M2,B2,K2]}),Z2=G2,bf=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),vf=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function Y2(e){return e===null?!1:bf.exec(e)!==null||vf.exec(e)!==null}function J2(e){var n,s,a,o,i,l,c,u=0,p=null,d,f,h;if(n=bf.exec(e),n===null&&(n=vf.exec(e)),n===null)throw new Error("Date resolve error");if(s=+n[1],a=+n[2]-1,o=+n[3],!n[4])return new Date(Date.UTC(s,a,o));if(i=+n[4],l=+n[5],c=+n[6],n[7]){for(u=n[7].slice(0,3);u.length<3;)u+="0";u=+u}return n[9]&&(d=+n[10],f=+(n[11]||0),p=(d*60+f)*6e4,n[9]==="-"&&(p=-p)),h=new Date(Date.UTC(s,a,o,i,l,c,u)),p&&h.setTime(h.getTime()-p),h}function X2(e){return e.toISOString()}var Q2=new rn("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:Y2,construct:J2,instanceOf:Date,represent:X2});function e3(e){return e==="<<"||e===null}var n3=new rn("tag:yaml.org,2002:merge",{kind:"scalar",resolve:e3}),ml=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function t3(e){if(e===null)return!1;var n,s,a=0,o=e.length,i=ml;for(s=0;s<o;s++)if(n=i.indexOf(e.charAt(s)),!(n>64)){if(n<0)return!1;a+=6}return a%8===0}function s3(e){var n,s,a=e.replace(/[\r\n=]/g,""),o=a.length,i=ml,l=0,c=[];for(n=0;n<o;n++)n%4===0&&n&&(c.push(l>>16&255),c.push(l>>8&255),c.push(l&255)),l=l<<6|i.indexOf(a.charAt(n));return s=o%4*6,s===0?(c.push(l>>16&255),c.push(l>>8&255),c.push(l&255)):s===18?(c.push(l>>10&255),c.push(l>>2&255)):s===12&&c.push(l>>4&255),new Uint8Array(c)}function a3(e){var n="",s=0,a,o,i=e.length,l=ml;for(a=0;a<i;a++)a%3===0&&a&&(n+=l[s>>18&63],n+=l[s>>12&63],n+=l[s>>6&63],n+=l[s&63]),s=(s<<8)+e[a];return o=i%3,o===0?(n+=l[s>>18&63],n+=l[s>>12&63],n+=l[s>>6&63],n+=l[s&63]):o===2?(n+=l[s>>10&63],n+=l[s>>4&63],n+=l[s<<2&63],n+=l[64]):o===1&&(n+=l[s>>2&63],n+=l[s<<4&63],n+=l[64],n+=l[64]),n}function r3(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var o3=new rn("tag:yaml.org,2002:binary",{kind:"scalar",resolve:t3,construct:s3,predicate:r3,represent:a3}),i3=Object.prototype.hasOwnProperty,l3=Object.prototype.toString;function c3(e){if(e===null)return!0;var n=[],s,a,o,i,l,c=e;for(s=0,a=c.length;s<a;s+=1){if(o=c[s],l=!1,l3.call(o)!=="[object Object]")return!1;for(i in o)if(i3.call(o,i))if(!l)l=!0;else return!1;if(!l)return!1;if(n.indexOf(i)===-1)n.push(i);else return!1}return!0}function u3(e){return e!==null?e:[]}var p3=new rn("tag:yaml.org,2002:omap",{kind:"sequence",resolve:c3,construct:u3}),d3=Object.prototype.toString;function f3(e){if(e===null)return!0;var n,s,a,o,i,l=e;for(i=new Array(l.length),n=0,s=l.length;n<s;n+=1){if(a=l[n],d3.call(a)!=="[object Object]"||(o=Object.keys(a),o.length!==1))return!1;i[n]=[o[0],a[o[0]]]}return!0}function h3(e){if(e===null)return[];var n,s,a,o,i,l=e;for(i=new Array(l.length),n=0,s=l.length;n<s;n+=1)a=l[n],o=Object.keys(a),i[n]=[o[0],a[o[0]]];return i}var m3=new rn("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:f3,construct:h3}),g3=Object.prototype.hasOwnProperty;function _3(e){if(e===null)return!0;var n,s=e;for(n in s)if(g3.call(s,n)&&s[n]!==null)return!1;return!0}function k3(e){return e!==null?e:{}}var b3=new rn("tag:yaml.org,2002:set",{kind:"mapping",resolve:_3,construct:k3});Z2.extend({implicit:[Q2,n3],explicit:[o3,p3,m3,b3]});function ku(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}var v3=new Array(256),y3=new Array(256);for(var _s=0;_s<256;_s++)v3[_s]=ku(_s)?1:0,y3[_s]=ku(_s);function w3(e){return Array.from(new Set(e))}function bu(...e){let n,s,a;e.length===1?(n=0,a=1,[s]=e):[n,s,a=1]=e;const o=[];let i=n;for(;i<s;)o.push(i),i+=a||1;return o}function yf(e,n){if(!n||n==="all"||n==="*")return bu(1,e+1);const s=[];for(const a of n.split(/[,;]/g))if(!a.includes("-"))s.push(+a);else{const[o,i]=a.split("-",2);s.push(...bu(+o,i?+i+1:e+1))}return w3(s).filter(a=>a<=e).sort((a,o)=>a-o)}function wf(e){const n=I(()=>e.value.path),s=I(()=>Ye.length-1),a=I(()=>parseInt(n.value.split(/\//g).slice(-1)[0])||1),o=I(()=>no(a.value)),i=I(()=>Ye.find(h=>h.path===`${a.value}`)),l=I(()=>{var h,m,g;return(g=(m=(h=i.value)==null?void 0:h.meta)==null?void 0:m.slide)==null?void 0:g.id}),c=I(()=>{var h,m;return((m=(h=i.value)==null?void 0:h.meta)==null?void 0:m.layout)||(a.value===1?"cover":"default")}),u=I(()=>Ye.find(h=>h.path===`${Math.min(Ye.length,a.value+1)}`)),p=I(()=>Ye.filter(h=>{var m,g;return(g=(m=h.meta)==null?void 0:m.slide)==null?void 0:g.title}).reduce((h,m)=>(_l(h,m),h),[])),d=I(()=>kl(p.value,i.value)),f=I(()=>bl(d.value));return{route:e,path:n,total:s,currentPage:a,currentPath:o,currentRoute:i,currentSlideId:l,currentLayout:c,nextRoute:u,rawTree:p,treeWithActiveStatuses:d,tree:f}}function Sf(e,n,s){const a=se(0);nn(()=>{bn.afterEach(async()=>{await nn(),a.value+=1})});const o=I(()=>{var u,p;return a.value,((p=(u=n.value)==null?void 0:u.meta)==null?void 0:p.__clicksElements)||[]}),i=I(()=>{var u,p;return+(((p=(u=n.value)==null?void 0:u.meta)==null?void 0:p.clicks)??o.value.length)}),l=I(()=>s.value<Ye.length-1||e.value<i.value),c=I(()=>s.value>1||e.value>0);return{clicks:e,clicksElements:o,clicksTotal:i,hasNext:l,hasPrev:c}}const S3=["id"],x3=Me({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(e,{emit:n}){const s=e,a=Jn(s,"clicksElements",n),o=I(()=>({height:`${rl}px`,width:`${Tt}px`})),i=et();ja(()=>Promise.resolve().then(()=>Vv),void 0).then(p=>i.value=p.default);const l=I(()=>s.clicks),c=Sf(l,s.nav.currentRoute,s.nav.currentPage),u=I(()=>`${s.route.path.toString().padStart(3,"0")}-${(l.value+1).toString().padStart(2,"0")}`);return En(F,Ve({nav:{...s.nav,...c},configs:Oe,themeConfigs:I(()=>Oe.themeConfig)})),(p,d)=>{var f;return k(),ee("div",{id:E(u),class:"print-slide-container",style:tn(E(o))},[N(E(mf)),N(E(fl),{is:(f=e.route)==null?void 0:f.component,"clicks-elements":E(a),"onUpdate:clicksElements":d[0]||(d[0]=h=>Fe(a)?a.value=h:null),clicks:E(l),"clicks-disabled":!1,class:He(E(dl)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),E(i)?(k(),T(E(i),{key:0,page:+e.route.path},null,8,["page"])):xe("v-if",!0),N(E(hf))],12,S3)}}}),vu=A(x3,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),E3=Me({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(e){var i;const n=e;C(F);const s=Ve(((i=n.route.meta)==null?void 0:i.__clicksElements)||[]),a=I(()=>n.route),o=wf(a);return(l,c)=>(k(),ee(Ae,null,[N(vu,{"clicks-elements":s,"onUpdate:clicksElements":c[0]||(c[0]=u=>s=u),clicks:0,nav:E(o),route:E(a)},null,8,["clicks-elements","nav","route"]),E(la)?xe("v-if",!0):(k(!0),ee(Ae,{key:0},Da(s.length,u=>(k(),T(vu,{key:u,clicks:u,nav:E(o),route:E(a)},null,8,["clicks","nav","route"]))),128))],64))}}),C3=A(E3,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/internals/PrintSlide.vue"]]),$3={id:"print-content"},P3=Me({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(e){const n=e;C(F);const s=I(()=>n.width),a=I(()=>n.width/Ot),o=I(()=>s.value/a.value),i=I(()=>o.value<Ot?s.value/Tt:a.value*Ot/Tt);let l=Ye.slice(0,-1);jn.value.query.range&&(l=yf(l.length,jn.value.query.range).map(p=>l[p-1]));const c=I(()=>({"select-none":!Oe.selectable,"slidev-code-line-numbers":Oe.lineNumbers}));return En(Cd,i),(u,p)=>(k(),ee("div",{id:"print-container",class:He(E(c))},[t("div",$3,[(k(!0),ee(Ae,null,Da(E(l),d=>(k(),T(C3,{key:d.path,route:d},null,8,["route"]))),128))]),Ln(u.$slots,"controls")],2))}});const O3=A(P3,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/internals/PrintContainer.vue"]]),T3=Me({__name:"Print",setup(e){return C(F),cs(()=>{Ms?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(n,s)=>(k(),ee(Ae,null,[E(Ms)?(k(),T(gf,{key:0})):xe("v-if",!0),t("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:tn(E(ol))},[N(O3,{class:"w-full h-full",style:tn({background:"var(--slidev-slide-container-background, black)"}),width:E(as).width.value},null,8,["style","width"])],4)],64))}});const F3=A(T3,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/internals/Print.vue"]]);const A3={class:"slidev-layout end"},M3={__name:"end",setup(e){return C(F),(n,s)=>(k(),ee("div",A3," END "))}},I3=A(M3,[["__scopeId","data-v-e532b98d"],["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/layouts/end.vue"]]),N3="/2023-06-dwx-fp-csharp-to-fsharp/theme/mathema-logo.svg",D3={class:"slidev-layout cover"},L3={class:"flex flex-col justify-between items-start ml-5"},j3=t("img",{src:N3,alt:"Mathema Logo",class:"w-50 object-fit-contain"},null,-1),R3={class:"flex flex-col justify-center items-start ml-5 mt-10"},B3={class:"w-full flex justify-center"},q3=["src"],W3=t("div",{class:"gray-triangle"},null,-1),V3=t("div",{class:"red-triangle"},null,-1),H3={__name:"cover",setup(e){const n=C(F);return(s,a)=>(k(),ee("div",D3,[t("div",L3,[j3,t("div",R3,[Ln(s.$slots,"default")]),t("div",B3,[t("img",{src:E(n).configs.occasionLogoUrl,alt:"Occasion Logo",class:"w-50 object-fit-contain"},null,8,q3)])]),W3,V3]))}},z3=A(H3,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/mathema-2023/layouts/cover.vue"]]),U3=t("h1",null,"Von C# zu F#",-1),K3=t("h4",null,"Einführung in die funktionale Programmierung",-1),G3=t("h5",null,"Patrick Drechsler & Martin Grotz",-1),Z3={__name:"1",setup(e){const n={layout:"cover",theme:"./mathema-2023",defaults:{layout:"default-with-footer"},occasion:"DWX 2023",occasionLogoUrl:"images/DWX_LogoIcon_2023-scaled.jpg.jpg",company:"MATHEMA GmbH",presenter:"Patrick Drechsler & Martin Grotz",contact:"patrick.drechsler@mathema.de & martin.grotz@mathema.de",info:`## Von C# zu F# – Einführung in die funktionale Programmierung
`,canvasWidth:980,srcSequence:"./pages/00-title.md"};return C(F),(s,a)=>(k(),T(z3,j(L(n)),{default:w(()=>[U3,K3,G3]),_:1},16))}},Y3=A(Z3,[["__file","/@slidev/slides/1.md"]]),J3={__name:"SlidesTotal",setup(e){const n=C(F);return(s,a)=>(k(),ee("span",null,Cn(E(n).nav.total),1))}},X3=A(J3,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/builtin/SlidesTotal.vue"]]),Q3={__name:"SlideCurrentNo",setup(e){const n=C(F);return(s,a)=>(k(),ee("span",null,Cn(E(n).nav.currentPage),1))}},eS=A(Q3,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/builtin/SlideCurrentNo.vue"]]),nS={class:"slidev-layout default-with-footer"},tS={class:"my-auto w-full"},sS={class:"w-11/12 fixed bottom-0 flex justify-between mb-2 text-xs footer"},aS={style:{"min-width":"4rem"}},rS={__name:"default-with-footer",setup(e){const n=C(F);return(s,a)=>{const o=eS,i=X3;return k(),ee("div",nS,[t("div",tS,[Ln(s.$slots,"default"),t("div",sS,[t("span",null,Cn(E(n).configs.occasion),1),t("span",null,Cn(E(n).configs.company)+" - "+Cn(E(n).configs.presenter)+" - "+Cn(E(n).configs.contact),1),t("span",aS,[N(o),r(" / "),N(i)])])])])}}},q=A(rS,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/mathema-2023/layouts/default-with-footer.vue"]]),oS=t("h2",null,"Lernziele",-1),iS=t("ul",null,[t("li",null,"Grundlagen der funktionalen Programmierung"),t("li",null,"Funktionale Programmierung mit C#"),t("li",null,"Grundlagen von F#"),t("li",null,"Grundlegende Konzepte der funktionalen Komposition")],-1),lS={__name:"2",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/01-intro.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[oS,iS]),_:1},16))}},cS=A(lS,[["__file","/@slidev/slides/2.md"]]),uS={class:"slidev-layout two-columns w-full h-full grid grid-cols-2"},pS=Me({__name:"two-cols",props:{class:{type:String}},setup(e){const n=e;return C(F),(s,a)=>(k(),ee("div",uS,[t("div",{class:He(["col-left",n.class])},[Ln(s.$slots,"default")],2),t("div",{class:He(["col-right",n.class])},[Ln(s.$slots,"right")],2)]))}}),Qr=A(pS,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/layouts/two-cols.vue"]]),dS=t("h2",null,"Patrick Drechsler",-1),fS=t("ul",null,[t("li",null,"Software Entwickler"),t("li",null,"Beruflich: C#"),t("li",null,[r("Interessen: "),t("ul",null,[t("li",null,"Funktionale Programmierung"),t("li",null,"Software Crafting"),t("li",null,"Domain-Driven Design")])])],-1),hS=t("h2",null,"Martin Grotz",-1),mS=t("ul",null,[t("li",null,"Team Lead"),t("li",null,"Beruflich: C#, TypeScript/JavaScript"),t("li",null,[r("Interessen: "),t("ul",null,[t("li",null,"Funktionale Programmierung"),t("li",null,"Web&Mobile Development"),t("li",null,"Soft Skills")])])],-1),gS={__name:"3",setup(e){const n={layout:"two-cols",srcSequence:"./pages/01-intro.md"};return C(F),(s,a)=>(k(),T(Qr,j(L(n)),{right:w(o=>[hS,mS]),default:w(()=>[dS,fS]),_:1},16))}},_S=A(gS,[["__file","/@slidev/slides/3.md"]]),kS=t("h2",null,"FP 101",-1),bS=t("ul",null,[t("li",null,"Immutability"),t("li",null,"Functions as First Class Citizens"),t("li",null,"Pure Functions")],-1),vS=t("p",null,"That’s it!",-1),yS={__name:"4",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/02-fp-basics_und_immutability.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[kS,bS,vS]),_:1},16))}},wS=A(yS,[["__file","/@slidev/slides/4.md"]]),SS={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},xS=t("path",{fill:"currentColor",d:"M200 32h-36.26a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32Zm72 184H56V48h26.75A47.93 47.93 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.93 47.93 0 0 0-2.75-16H200Z"},null,-1),ES=[xS];function CS(e,n){return k(),ee("svg",SS,ES)}const $S={name:"ph-clipboard",render:CS},PS={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},OS=t("path",{fill:"currentColor",d:"M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),TS=[OS];function FS(e,n){return k(),ee("svg",PS,TS)}const AS={name:"ph-check-circle",render:FS},MS=["title"],IS=Me({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const n=e;C(F);const s=C(sa),a=C(Kt),o=C(aa);function i(f=5){const h=[],m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",g=m.length;for(let b=0;b<f;b++)h.push(m.charAt(Math.floor(Math.random()*g)));return h.join("")}const l=se(),c=Fn();us(()=>{const f=n.at==null?a==null?void 0:a.value.length:n.at,h=I(()=>o!=null&&o.value?n.ranges.length-1:Math.min(Math.max(0,((s==null?void 0:s.value)||0)-(f||0)),n.ranges.length-1)),m=I(()=>n.ranges[h.value]||"");if(n.ranges.length>=2&&!(o!=null&&o.value)){const g=i(),b=Ak(n.ranges.length-1).map(y=>g+y);a!=null&&a.value&&(a.value.push(...b),Gr(()=>b.forEach(y=>ri(a.value,y)),c))}cs(()=>{if(!l.value)return;const b=l.value.querySelector(".shiki-dark")?Array.from(l.value.querySelectorAll(".shiki")):[l.value];for(const y of b){const $=Array.from(y.querySelectorAll(".line")),S=yf($.length,m.value);if($.forEach((x,P)=>{const R=S.includes(P+1);x.classList.toggle(zt,!0),x.classList.toggle("highlighted",R),x.classList.toggle("dishonored",!R)}),n.maxHeight){const x=y.querySelector(".line.highlighted");x&&x.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:u,copy:p}=D1();function d(){var h,m;const f=(m=(h=l.value)==null?void 0:h.querySelector(".slidev-code"))==null?void 0:m.textContent;f&&p(f)}return(f,h)=>{const m=AS,g=$S;return k(),ee("div",{ref_key:"el",ref:l,class:"slidev-code-wrapper relative group",style:tn({"max-height":n.maxHeight,"overflow-y":n.maxHeight?"scroll":void 0})},[Ln(f.$slots,"default"),E(Oe).codeCopy?(k(),ee("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:E(u)?"Copied":"Copy",onClick:h[0]||(h[0]=b=>d())},[E(u)?(k(),T(m,{key:0,class:"p-2 w-8 h-8"})):(k(),T(g,{key:1,class:"p-2 w-8 h-8"}))],8,MS)):xe("v-if",!0)],4)}}}),_e=A(IS,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),NS=t("h3",null,"Immutability in C#",-1),DS=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token keyword"},"public"),r(),t("span",{class:"token keyword"},"class"),r(),t("span",{class:"token class-name"},"Customer")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"{")]),r(`
`),t("span",{class:"line"},[r("  "),t("span",{class:"token keyword"},"public"),r(),t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"string")]),r(" Name "),t("span",{class:"token punctuation"},"{"),r(),t("span",{class:"token keyword"},"get"),t("span",{class:"token punctuation"},";"),r(),t("span",{class:"token keyword"},"set"),t("span",{class:"token punctuation"},";"),r(),t("span",{class:"token punctuation"},"}"),r(),t("span",{class:"token comment"},"// set -> mutable 😡")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),LS=t("p",null,"vs",-1),jS=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token keyword"},"public"),r(),t("span",{class:"token keyword"},"class"),r(),t("span",{class:"token class-name"},"Customer")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"{")]),r(`
`),t("span",{class:"line"},[r("  "),t("span",{class:"token keyword"},"public"),r(),t("span",{class:"token function"},"Customer"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"string")]),r(" name"),t("span",{class:"token punctuation"},")")]),r(`
`),t("span",{class:"line"},[r("  "),t("span",{class:"token punctuation"},"{")]),r(`
`),t("span",{class:"line"},[r("    Name "),t("span",{class:"token operator"},"="),r(" name"),t("span",{class:"token punctuation"},";")]),r(`
`),t("span",{class:"line"},[r("  "),t("span",{class:"token punctuation"},"}")]),r(`
`),t("span",{class:"line"},"  "),r(`
`),t("span",{class:"line"},[r("  "),t("span",{class:"token keyword"},"public"),r(),t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"string")]),r(" Name "),t("span",{class:"token punctuation"},"{"),r(),t("span",{class:"token keyword"},"get"),t("span",{class:"token punctuation"},";"),r(),t("span",{class:"token punctuation"},"}"),r(),t("span",{class:"token comment"},"// <- immutable 😀")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),RS={__name:"5",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/02-fp-basics_und_immutability.md"};return C(F),(s,a)=>{const o=_e;return k(),T(q,j(L(n)),{default:w(()=>[NS,N(o,le({},{ranges:[""]}),{default:w(()=>[DS]),_:1},16),LS,N(o,le({},{ranges:[""]}),{default:w(()=>[jS]),_:1},16)]),_:1},16)}}},BS=A(RS,[["__file","/@slidev/slides/5.md"]]),qS=t("p",null,"Syntax matters!",-1),WS=t("p",null,"Classic C#",-1),VS=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"int")]),r(),t("span",{class:"token function"},"Add"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),r(" a"),t("span",{class:"token punctuation"},","),r(),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),r(" b"),t("span",{class:"token punctuation"},")")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"{")]),r(`
`),t("span",{class:"line"},[r("  "),t("span",{class:"token keyword"},"return"),r(" a "),t("span",{class:"token operator"},"+"),r(" b"),t("span",{class:"token punctuation"},";")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),HS=t("p",null,"Expression body",-1),zS=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"int")]),r(),t("span",{class:"token function"},"Add"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),r(" a"),t("span",{class:"token punctuation"},","),r(),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),r(" b"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token operator"},"=>"),r(" a "),t("span",{class:"token operator"},"+"),r(" b"),t("span",{class:"token punctuation"},";")])])],-1),US={__name:"6",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/02-fp-basics_und_immutability.md"};return C(F),(s,a)=>{const o=_e;return k(),T(q,j(L(n)),{default:w(()=>[qS,WS,N(o,le({},{ranges:[""]}),{default:w(()=>[VS]),_:1},16),HS,N(o,le({},{ranges:[""]}),{default:w(()=>[zS]),_:1},16)]),_:1},16)}}},KS=A(US,[["__file","/@slidev/slides/6.md"]]),GS=t("p",null,"Syntax matters!",-1),ZS=t("p",null,"Classic C#",-1),YS=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"int")]),r(),t("span",{class:"token function"},"Add"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),r(" a"),t("span",{class:"token punctuation"},","),r(),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),r(" b"),t("span",{class:"token punctuation"},")")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"{")]),r(`
`),t("span",{class:"line"},[r("  Console"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"WriteLine"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"bla"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),r(),t("span",{class:"token comment"},"// <- side effect!")]),r(`
`),t("span",{class:"line"},[r("  "),t("span",{class:"token keyword"},"return"),r(" a "),t("span",{class:"token operator"},"+"),r(" b"),t("span",{class:"token punctuation"},";")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),JS=t("p",null,"Expression body: Seiteneffekte sind schwieriger reinzubauen",-1),XS=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"int")]),r(),t("span",{class:"token function"},"Add"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),r(" a"),t("span",{class:"token punctuation"},","),r(),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),r(" b"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token operator"},"=>"),r(" a "),t("span",{class:"token operator"},"+"),r(" b"),t("span",{class:"token punctuation"},";")])])],-1),QS={__name:"7",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/02-fp-basics_und_immutability.md"};return C(F),(s,a)=>{const o=_e;return k(),T(q,j(L(n)),{default:w(()=>[GS,ZS,N(o,le({},{ranges:[""]}),{default:w(()=>[YS]),_:1},16),JS,N(o,le({},{ranges:[""]}),{default:w(()=>[XS]),_:1},16)]),_:1},16)}}},ex=A(QS,[["__file","/@slidev/slides/7.md"]]),nx=t("h1",null,"Value Objects",-1),tx={__name:"8",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/value-objects.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[nx]),_:1},16))}},sx=A(tx,[["__file","/@slidev/slides/8.md"]]),ax=t("h2",null,"Value Objects",-1),rx=t("p",null,"Warum?",-1),ox=t("ul",null,[t("li",null,[r("Methoden sollten nicht lügen! "),t("ul",null,[t("li",null,"Null: NullPointerException, Null-Checks"),t("li",null,"Antipattern: Primitive Obsession")])])],-1),ix={__name:"9",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/value-objects.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[ax,rx,ox]),_:1},16))}},lx=A(ix,[["__file","/@slidev/slides/9.md"]]),cx=t("h3",null,"Beispiele",-1),ux=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"// 😡")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"void")]),r(),t("span",{class:"token function"},"Einzahlen"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),r(" wert"),t("span",{class:"token punctuation"},","),r(),t("span",{class:"token class-name"},"SomeEnum"),r(" waehrung"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token punctuation"},"{"),r(),t("span",{class:"token comment"},"/* ... */"),r(),t("span",{class:"token punctuation"},"}")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[t("span",{class:"token comment"},"// 😀")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"void")]),r(),t("span",{class:"token function"},"Einzahlen"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},"Geld"),r(" geld"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token punctuation"},"{"),r(),t("span",{class:"token comment"},"/* ... */"),r(),t("span",{class:"token punctuation"},"}")])])],-1),px=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token keyword"},"class"),r(),t("span",{class:"token class-name"},"Kunde"),r(),t("span",{class:"token punctuation"},"{")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"int")]),r(" Alter "),t("span",{class:"token punctuation"},"{"),r(),t("span",{class:"token keyword"},"get"),t("span",{class:"token punctuation"},";"),r(),t("span",{class:"token keyword"},"set"),t("span",{class:"token punctuation"},";"),r(),t("span",{class:"token punctuation"},"}"),r(),t("span",{class:"token comment"},"// 😡")]),r(`
`),t("span",{class:"line"},"    "),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token comment"},"// ist `i` das aktuelle Alter oder das Geburtsjahr??")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"bool")]),r(),t("span",{class:"token function"},"IstVolljaehrig"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),r(" i"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token punctuation"},"{"),r(),t("span",{class:"token comment"},"/* ... */"),t("span",{class:"token punctuation"},"}")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"class"),r(),t("span",{class:"token class-name"},"Kunde"),r(),t("span",{class:"token punctuation"},"{")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token return-type class-name"},"Alter"),r(" Alter "),t("span",{class:"token punctuation"},"{"),r(),t("span",{class:"token keyword"},"get"),t("span",{class:"token punctuation"},";"),r(),t("span",{class:"token keyword"},"set"),t("span",{class:"token punctuation"},";"),r(),t("span",{class:"token punctuation"},"}"),r(),t("span",{class:"token comment"},"// 😀")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"bool")]),r(),t("span",{class:"token function"},"IstVolljaehrig"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},"Alter"),r(" alter"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token punctuation"},"{"),r(),t("span",{class:"token comment"},"/* ... */"),t("span",{class:"token punctuation"},"}")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"bool")]),r(),t("span",{class:"token function"},"IstVolljaehrig"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},"Geburtsjahr"),r(" geburtsjahr"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token punctuation"},"{"),r(),t("span",{class:"token comment"},"/* ... */"),t("span",{class:"token punctuation"},"}")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),dx={__name:"10",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/value-objects.md"};return C(F),(s,a)=>{const o=_e;return k(),T(q,j(L(n)),{default:w(()=>[cx,N(o,le({},{ranges:[""]}),{default:w(()=>[ux]),_:1},16),N(o,le({},{ranges:[""]}),{default:w(()=>[px]),_:1},16)]),_:1},16)}}},fx=A(dx,[["__file","/@slidev/slides/10.md"]]),hx="/2023-06-dwx-fp-csharp-to-fsharp/images/wikipedia-value-objects.png",mx=t("p",null,[t("img",{src:hx,alt:"img"})],-1),gx={__name:"11",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/value-objects.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[mx]),_:1},16))}},_x=A(gx,[["__file","/@slidev/slides/11.md"]]),kx=t("h2",null,"Value Objects",-1),bx=t("ul",null,[t("li",null,"nur gültige Objekte erlaubt"),t("li",null,"immutable"),t("li",null,"equality by structure")],-1),vx={__name:"12",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/value-objects.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[kx,bx]),_:1},16))}},yx=A(vx,[["__file","/@slidev/slides/12.md"]]),wx=t("h3",null,"Nur gültige Objekte",-1),Sx=t("p",null,"Es muss bei der Erstellung gewährleistet sein, dass das Objekt gültig ist.",-1),xx={__name:"13",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/value-objects.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[wx,Sx]),_:1},16))}},Ex=A(xx,[["__file","/@slidev/slides/13.md"]]),Cx=t("h3",null,"Nur gültige Objekte",-1),$x=t("p",null,"Optionen:",-1),Px=t("ul",null,[t("li",null,"Konstruktor mit allen Parametern"),t("li",null,"statische Hilfsmethode & privater Konstruktor")],-1),Ox={__name:"14",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/value-objects.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[Cx,$x,Px]),_:1},16))}},Tx=A(Ox,[["__file","/@slidev/slides/14.md"]]),Fx=t("h4",null,"Value Objects erstellen / 1",-1),Ax=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token keyword"},"class"),r(),t("span",{class:"token class-name"},"Geld"),r()]),r(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"{")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"int")]),r(" Betrag "),t("span",{class:"token punctuation"},"{"),r(),t("span",{class:"token keyword"},"get"),t("span",{class:"token punctuation"},";"),r(),t("span",{class:"token punctuation"},"}")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token return-type class-name"},"Waehrung"),r(" Waehrung "),t("span",{class:"token punctuation"},"{"),r(),t("span",{class:"token keyword"},"get"),t("span",{class:"token punctuation"},";"),r(),t("span",{class:"token punctuation"},"}")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token function"},"Geld"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),r(" betrag"),t("span",{class:"token punctuation"},","),r(),t("span",{class:"token class-name"},"Waehrung"),r(" waehrung"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token punctuation"},"{")]),r(`
`),t("span",{class:"line"},[r("        "),t("span",{class:"token keyword"},"if"),r(),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"!"),t("span",{class:"token function"},"IsValid"),t("span",{class:"token punctuation"},"("),r("betrag"),t("span",{class:"token punctuation"},","),r(" Waehrung"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),r()]),r(`
`),t("span",{class:"line"},[r("            "),t("span",{class:"token keyword"},"throw"),r(),t("span",{class:"token keyword"},"new"),r(),t("span",{class:"token constructor-invocation class-name"},"InvalidGeldException"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[r("        Betrag "),t("span",{class:"token operator"},"="),r(" betrag"),t("span",{class:"token punctuation"},";")]),r(`
`),t("span",{class:"line"},[r("        Waehrung "),t("span",{class:"token operator"},"="),r(" waehrung"),t("span",{class:"token punctuation"},";")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token punctuation"},"}")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"bool")]),r(),t("span",{class:"token function"},"IsValid"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),r(" betrag"),t("span",{class:"token punctuation"},","),r(),t("span",{class:"token class-name"},"Waehrung"),r(" waehrung"),t("span",{class:"token punctuation"},")")]),r(`
`),t("span",{class:"line"},[r("        "),t("span",{class:"token operator"},"=>"),r(" betrag "),t("span",{class:"token operator"},">"),r(),t("span",{class:"token number"},"0"),r(),t("span",{class:"token operator"},"&&"),r(" waehrung "),t("span",{class:"token operator"},"!="),r(" Waehrung"),t("span",{class:"token punctuation"},"."),r("Undefined"),t("span",{class:"token punctuation"},";")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),Mx={__name:"15",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/value-objects.md"};return C(F),(s,a)=>{const o=_e;return k(),T(q,j(L(n)),{default:w(()=>[Fx,N(o,le({},{ranges:[""]}),{default:w(()=>[Ax]),_:1},16)]),_:1},16)}}},Ix=A(Mx,[["__file","/@slidev/slides/15.md"]]),Nx=t("h4",null,"Value Objects erstellen / 2",-1),Dx=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token keyword"},"class"),r(),t("span",{class:"token class-name"},"Geld"),r()]),r(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"{")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"int")]),r(" Betrag "),t("span",{class:"token punctuation"},"{"),r(),t("span",{class:"token keyword"},"get"),t("span",{class:"token punctuation"},";"),r(),t("span",{class:"token punctuation"},"}")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token return-type class-name"},"Waehrung"),r(" Waehrung "),t("span",{class:"token punctuation"},"{"),r(),t("span",{class:"token keyword"},"get"),t("span",{class:"token punctuation"},";"),r(),t("span",{class:"token punctuation"},"}")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token keyword"},"static"),r(),t("span",{class:"token return-type class-name"},"Geld"),r(),t("span",{class:"token function"},"Create"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),r(" betrag"),t("span",{class:"token punctuation"},","),r(),t("span",{class:"token class-name"},"Waehrung"),r(" waehrung"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token punctuation"},"{")]),r(`
`),t("span",{class:"line"},[r("        "),t("span",{class:"token keyword"},"return"),r(),t("span",{class:"token keyword"},"new"),r(),t("span",{class:"token constructor-invocation class-name"},"Geld"),t("span",{class:"token punctuation"},"("),r("betrag"),t("span",{class:"token punctuation"},","),r(" waehrung"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token punctuation"},"}")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token comment"},"// private ctor")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token keyword"},"private"),r(),t("span",{class:"token function"},"Geld"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),r(" betrag"),t("span",{class:"token punctuation"},","),r(),t("span",{class:"token class-name"},"Waehrung"),r(" waehrung"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token punctuation"},"{")]),r(`
`),t("span",{class:"line"},[r("        "),t("span",{class:"token keyword"},"if"),r(),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"!"),t("span",{class:"token function"},"IsValid"),t("span",{class:"token punctuation"},"("),r("betrag"),t("span",{class:"token punctuation"},","),r(" Waehrung"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),r()]),r(`
`),t("span",{class:"line"},[r("            "),t("span",{class:"token keyword"},"throw"),r(),t("span",{class:"token keyword"},"new"),r(),t("span",{class:"token constructor-invocation class-name"},"InvalidGeldException"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[r("        Betrag "),t("span",{class:"token operator"},"="),r(" betrag"),t("span",{class:"token punctuation"},";")]),r(`
`),t("span",{class:"line"},[r("        Waehrung "),t("span",{class:"token operator"},"="),r(" waehrung"),t("span",{class:"token punctuation"},";")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token punctuation"},"}")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"bool")]),r(),t("span",{class:"token function"},"IsValid"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),r(" betrag"),t("span",{class:"token punctuation"},","),r(),t("span",{class:"token class-name"},"Waehrung"),r(" waehrung"),t("span",{class:"token punctuation"},")")]),r(`
`),t("span",{class:"line"},[r("        "),t("span",{class:"token operator"},"=>"),r(" betrag "),t("span",{class:"token operator"},">"),r(),t("span",{class:"token number"},"0"),r(),t("span",{class:"token operator"},"&&"),r(" waehrung "),t("span",{class:"token operator"},"!="),r(" Waehrung"),t("span",{class:"token punctuation"},"."),r("Undefined"),t("span",{class:"token punctuation"},";")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),Lx={__name:"16",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/value-objects.md"};return C(F),(s,a)=>{const o=_e;return k(),T(q,j(L(n)),{default:w(()=>[Nx,N(o,le({},{ranges:[""]}),{default:w(()=>[Dx]),_:1},16)]),_:1},16)}}},jx=A(Lx,[["__file","/@slidev/slides/16.md"]]),Rx=t("h3",null,"Immutability",-1),Bx=t("p",null,[r("Damit ein C# Objekt unveränderlich wird, muss gewährleistet sein, dass es auch "),t("strong",null,"nach Erstellung nicht verändert wird"),r(".")],-1),qx=t("ul",null,[t("li",null,"interne Werte dürfen ausschließlich vom Konstruktor verändert werden"),t("li",null,"kein public oder private setter"),t("li",null,"kein parameterloser Konstrukor")],-1),Wx={__name:"17",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/value-objects.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[Rx,Bx,qx]),_:1},16))}},Vx=A(Wx,[["__file","/@slidev/slides/17.md"]]),Hx=t("h3",null,"Equality by structure",-1),zx=t("p",null,"Zwei Objekte sind gleich, wenn sie die gleichen Werte haben.",-1),Ux={__name:"18",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/value-objects.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[Hx,zx]),_:1},16))}},Kx=A(Ux,[["__file","/@slidev/slides/18.md"]]),Gx=t("h3",null,"Exkurs: Vergleichbarkeit",-1),Zx=t("ul",null,[t("li",null,"Equality by reference"),t("li",null,"Equality by id"),t("li",null,"Equality by structure")],-1),Yx={__name:"19",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/value-objects.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[Gx,Zx]),_:1},16))}},Jx=A(Yx,[["__file","/@slidev/slides/19.md"]]),Xx=t("h3",null,"Equality by structure",-1),Qx=t("p",null,"Zwei Objekte sind gleich, wenn sie die gleichen Werte haben.",-1),eE=t("ul",null,[t("li",null,[t("code",null,"Equals"),r(" und "),t("code",null,"GetHashcode"),r(" überschreiben")])],-1),nE=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token keyword"},"override"),r(),t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"bool")]),r(),t("span",{class:"token function"},"Equals"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},"Geld"),r(" other"),t("span",{class:"token punctuation"},")")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token operator"},"=>"),r(" other"),t("span",{class:"token punctuation"},"."),r("Betrag   "),t("span",{class:"token operator"},"=="),r(),t("span",{class:"token keyword"},"this"),t("span",{class:"token punctuation"},"."),r("Betrag "),t("span",{class:"token operator"},"&&")]),r(`
`),t("span",{class:"line"},[r("       other"),t("span",{class:"token punctuation"},"."),r("Waehrung "),t("span",{class:"token operator"},"=="),r(),t("span",{class:"token keyword"},"this"),t("span",{class:"token punctuation"},"."),r("Waehrung"),t("span",{class:"token punctuation"},";")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"override"),r(),t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"int")]),r(),t("span",{class:"token function"},"GetHashCode"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token punctuation"},"{"),r(),t("span",{class:"token comment"},"/* ... */"),r(),t("span",{class:"token punctuation"},"}")])])],-1),tE={__name:"20",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/value-objects.md"};return C(F),(s,a)=>{const o=_e;return k(),T(q,j(L(n)),{default:w(()=>[Xx,Qx,eE,N(o,le({},{ranges:[""]}),{default:w(()=>[nE]),_:1},16)]),_:1},16)}}},sE=A(tE,[["__file","/@slidev/slides/20.md"]]),aE=t("h3",null,"C# 9 and greater…",-1),rE=t("p",null,"C# records sind ein erster Schritt in die richtige Richtung:",-1),oE=t("ul",null,[t("li",null,"immutable")],-1),iE={__name:"21",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/value-objects.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[aE,rE,oE]),_:1},16))}},lE=A(iE,[["__file","/@slidev/slides/21.md"]]),cE=t("h3",null,"Exkurs",-1),uE=t("ul",null,[t("li",null,"manchmal genügt ein (leichtgewichtiges C#) record"),t("li",null,"aber: eigentlich will man soviel Logik wie möglich in ein Objekt packen (OO, Value Objekt, DDD)"),t("li",null,[r("(OO vs FP) und DDD "),t("ul",null,[t("li",null,"OO: Objekt mit Verhalten -> Ursprung von Value Objekt (und DDD)"),t("li",null,"FP: Strikte Trennung von Daten und Verhalten")])])],-1),pE=t("p",null,"Das Schöne an den unterschiedlichen Meinungen ist:",-1),dE=t("ul",null,[t("li",null,"man kann es situationsbedingt einfach lösen"),t("li",null,"Und sich das Beste rauspicken")],-1),fE={__name:"22",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/value-objects.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[cE,uE,pE,dE]),_:1},16))}},hE=A(fE,[["__file","/@slidev/slides/22.md"]]),mE=t("h2",null,"FP 101 - functions",-1),gE=t("h3",null,"1st class functions in C#",-1),_E=t("p",null,"Funktionen können als Parameter verwendet werden",-1),kE={__name:"23",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/02-fp-basics_first_class_functions.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[mE,gE,_E]),_:1},16))}},bE=A(kE,[["__file","/@slidev/slides/23.md"]]),vE=t("h4",null,"Strategy-Pattern",-1),yE=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token keyword"},"interface"),r(),t("span",{class:"token class-name"},"ICalculateSalary")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"{")]),r(`
`),t("span",{class:"line"},[r("  "),t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"int")]),r(),t("span",{class:"token function"},"ByInput"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),r(" i"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),r("            "),t("span",{class:"token comment"},"// <- Methodensignatur")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"class"),r(),t("span",{class:"token class-name"},"Manager"),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token type-list"},[t("span",{class:"token class-name"},"ICalculateSalary")])]),r(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"{")]),r(`
`),t("span",{class:"line"},[r("  "),t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"int")]),r(),t("span",{class:"token function"},"ByInput"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),r(" i"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token operator"},"=>"),r(" i"),t("span",{class:"token operator"},"*"),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},";"),r("     "),t("span",{class:"token comment"},"// <- Implementierung")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),wE=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token keyword"},"class"),r(),t("span",{class:"token class-name"},"SomeService")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"{")]),r(`
`),t("span",{class:"line"},[r("  "),t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"int")]),r(),t("span",{class:"token function"},"DoSomething"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},"ICalculateSalary"),r(" salary"),t("span",{class:"token punctuation"},","),r(),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),r(" i"),t("span",{class:"token punctuation"},")"),r()]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token operator"},"=>"),r(" salary"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"ByInput"),t("span",{class:"token punctuation"},"("),r("i"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),r("        "),t("span",{class:"token comment"},'// <- "deligiert"')]),r(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),SE=t("p",null,"(Verhalten als Parameter übergeben)",-1),xE={__name:"24",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/02-fp-basics_first_class_functions.md"};return C(F),(s,a)=>{const o=_e;return k(),T(q,j(L(n)),{default:w(()=>[vE,N(o,le({},{ranges:[""]}),{default:w(()=>[yE]),_:1},16),N(o,le({},{ranges:[""]}),{default:w(()=>[wE]),_:1},16),SE]),_:1},16)}}},EE=A(xE,[["__file","/@slidev/slides/24.md"]]),CE=t("h3",null,"Funktionen als Rückgabewert",-1),$E=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[t("span",{class:"token return-type class-name"},[r("Func"),t("span",{class:"token punctuation"},"<"),t("span",{class:"token keyword"},"double"),t("span",{class:"token punctuation"},","),r(),t("span",{class:"token keyword"},"string"),t("span",{class:"token punctuation"},">")]),r(),t("span",{class:"token function"},"GetConverterFn"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"bool")]),r(" withDecimals"),t("span",{class:"token punctuation"},")"),r()]),r(`
`),t("span",{class:"line"},[r("  "),t("span",{class:"token operator"},"=>"),r(),t("span",{class:"token class-name"},[r("withDecimals "),t("span",{class:"token punctuation"},"?")]),r(" ToStringWithDecimals "),t("span",{class:"token punctuation"},":"),r(" ToStringNoDecimals"),t("span",{class:"token punctuation"},";")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),PE={__name:"25",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/02-fp-basics_first_class_functions.md"};return C(F),(s,a)=>{const o=_e;return k(),T(q,j(L(n)),{default:w(()=>[CE,N(o,le({},{ranges:[""]}),{default:w(()=>[$E]),_:1},16)]),_:1},16)}}},OE=A(PE,[["__file","/@slidev/slides/25.md"]]),TE=t("h2",null,"FP 101 - Pure Functions",-1),FE=t("h3",null,"Pure Functions in C#",-1),AE=t("ul",null,[t("li",null,"haben niemals Seiteneffekte!"),t("li",null,[r("sollten immer nach "),t("code",null,"static"),r(" umwandelbar sein")])],-1),ME={__name:"26",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/02-fp-basics_pure_functions.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[TE,FE,AE]),_:1},16))}},IE=A(ME,[["__file","/@slidev/slides/26.md"]]),NE=t("h2",null,"Imperativ…",-1),DE=t("p",null,[t("strong",null,"Wie"),r(" mache ich etwas")],-1),LE=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"var")]),r(" people "),t("span",{class:"token operator"},"="),r(),t("span",{class:"token keyword"},"new"),r(),t("span",{class:"token constructor-invocation class-name"},[r("List"),t("span",{class:"token punctuation"},"<"),r("Person"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"{")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token keyword"},"new"),r(),t("span",{class:"token constructor-invocation class-name"},"Person"),r(),t("span",{class:"token punctuation"},"{"),r(" Age "),t("span",{class:"token operator"},"="),r(),t("span",{class:"token number"},"20"),t("span",{class:"token punctuation"},","),r(" Income "),t("span",{class:"token operator"},"="),r(),t("span",{class:"token number"},"1000"),r(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},",")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token keyword"},"new"),r(),t("span",{class:"token constructor-invocation class-name"},"Person"),r(),t("span",{class:"token punctuation"},"{"),r(" Age "),t("span",{class:"token operator"},"="),r(),t("span",{class:"token number"},"26"),t("span",{class:"token punctuation"},","),r(" Income "),t("span",{class:"token operator"},"="),r(),t("span",{class:"token number"},"1100"),r(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},",")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token keyword"},"new"),r(),t("span",{class:"token constructor-invocation class-name"},"Person"),r(),t("span",{class:"token punctuation"},"{"),r(" Age "),t("span",{class:"token operator"},"="),r(),t("span",{class:"token number"},"35"),t("span",{class:"token punctuation"},","),r(" Income "),t("span",{class:"token operator"},"="),r(),t("span",{class:"token number"},"1300"),r(),t("span",{class:"token punctuation"},"}")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"var")]),r(" incomes "),t("span",{class:"token operator"},"="),r(),t("span",{class:"token keyword"},"new"),r(),t("span",{class:"token constructor-invocation class-name"},[r("List"),t("span",{class:"token punctuation"},"<"),t("span",{class:"token keyword"},"int"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"foreach"),r(),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"var")]),r(" person "),t("span",{class:"token keyword"},"in"),r(" people"),t("span",{class:"token punctuation"},")")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"{")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token keyword"},"if"),r(),t("span",{class:"token punctuation"},"("),r("person"),t("span",{class:"token punctuation"},"."),r("Age "),t("span",{class:"token operator"},">"),r(),t("span",{class:"token number"},"25"),t("span",{class:"token punctuation"},")")]),r(`
`),t("span",{class:"line"},[r("        incomes"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"Add"),t("span",{class:"token punctuation"},"("),r("person"),t("span",{class:"token punctuation"},"."),r("Income"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"var")]),r(" avg "),t("span",{class:"token operator"},"="),r(" incomes"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"Sum"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token operator"},"/"),r(" incomes"),t("span",{class:"token punctuation"},"."),r("Count"),t("span",{class:"token punctuation"},";")])])],-1),jE=t("p",null,"versus…",-1),RE={__name:"27",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/02-fp-basics_pure_functions.md"};return C(F),(s,a)=>{const o=_e;return k(),T(q,j(L(n)),{default:w(()=>[NE,DE,N(o,le({},{ranges:[""]}),{default:w(()=>[LE]),_:1},16),jE]),_:1},16)}}},BE=A(RE,[["__file","/@slidev/slides/27.md"]]),qE=t("h2",null,"Deklarativ",-1),WE=t("p",null,[t("strong",null,"Was"),r(" will ich erreichen?")],-1),VE=t("p",null,"Bsp: Filter / Map / Reduce",-1),HE=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"var")]),r(" people "),t("span",{class:"token operator"},"="),r(),t("span",{class:"token keyword"},"new"),r(),t("span",{class:"token constructor-invocation class-name"},[r("List"),t("span",{class:"token punctuation"},"<"),r("Person"),t("span",{class:"token punctuation"},">")]),r(),t("span",{class:"token punctuation"},"{")]),r(`
`),t("span",{class:"line"},[r("  "),t("span",{class:"token keyword"},"new"),r(),t("span",{class:"token constructor-invocation class-name"},"Person"),r(),t("span",{class:"token punctuation"},"{"),r(" Age "),t("span",{class:"token operator"},"="),r(),t("span",{class:"token number"},"20"),t("span",{class:"token punctuation"},","),r(" Income "),t("span",{class:"token operator"},"="),r(),t("span",{class:"token number"},"1000"),r(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},",")]),r(`
`),t("span",{class:"line"},[r("  "),t("span",{class:"token keyword"},"new"),r(),t("span",{class:"token constructor-invocation class-name"},"Person"),r(),t("span",{class:"token punctuation"},"{"),r(" Age "),t("span",{class:"token operator"},"="),r(),t("span",{class:"token number"},"26"),t("span",{class:"token punctuation"},","),r(" Income "),t("span",{class:"token operator"},"="),r(),t("span",{class:"token number"},"1100"),r(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},",")]),r(`
`),t("span",{class:"line"},[r("  "),t("span",{class:"token keyword"},"new"),r(),t("span",{class:"token constructor-invocation class-name"},"Person"),r(),t("span",{class:"token punctuation"},"{"),r(" Age "),t("span",{class:"token operator"},"="),r(),t("span",{class:"token number"},"35"),t("span",{class:"token punctuation"},","),r(" Income "),t("span",{class:"token operator"},"="),r(),t("span",{class:"token number"},"1300"),r(),t("span",{class:"token punctuation"},"}")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"var")]),r(" averageIncomeAbove25 "),t("span",{class:"token operator"},"="),r(" people")]),r(`
`),t("span",{class:"line"},[r("  "),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"Where"),t("span",{class:"token punctuation"},"("),r("p "),t("span",{class:"token operator"},"=>"),r(" p"),t("span",{class:"token punctuation"},"."),r("Age "),t("span",{class:"token operator"},">"),r(),t("span",{class:"token number"},"25"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token comment"},'// "Filter"')]),r(`
`),t("span",{class:"line"},[r("  "),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"Select"),t("span",{class:"token punctuation"},"("),r("p "),t("span",{class:"token operator"},"=>"),r(" p"),t("span",{class:"token punctuation"},"."),r("Income"),t("span",{class:"token punctuation"},")"),r("  "),t("span",{class:"token comment"},'// "Map"')]),r(`
`),t("span",{class:"line"},[r("  "),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"Average"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),r("             "),t("span",{class:"token comment"},'// "Reduce"')])])],-1),zE=t("ul",null,[t("li",null,"aussagekräftiger"),t("li",null,"weniger fehleranfällig")],-1),UE={__name:"28",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/02-fp-basics_pure_functions.md"};return C(F),(s,a)=>{const o=_e;return k(),T(q,j(L(n)),{default:w(()=>[qE,WE,VE,N(o,le({},{ranges:[""]}),{default:w(()=>[HE]),_:1},16),zE]),_:1},16)}}},KE=A(UE,[["__file","/@slidev/slides/28.md"]]);function yu(e){return e.startsWith("/")?"/2023-06-dwx-fp-csharp-to-fsharp"+e.slice(1):e}function GE(e,n=!1){const s=e&&(e[0]==="#"||e.startsWith("rgb")),a={background:s?e:void 0,color:e&&!s?"white":void 0,backgroundImage:s?void 0:e?n?`linear-gradient(#0005, #0008), url(${yu(e)})`:`url("${yu(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return a.background||delete a.background,a}const ZE={class:"grid grid-cols-2 w-full h-full auto-rows-fr"},YE=Me({__name:"image-right",props:{image:{type:String},class:{type:String}},setup(e){const n=e;C(F);const s=I(()=>GE(n.image));return(a,o)=>(k(),ee("div",ZE,[t("div",{class:He(["slidev-layout default",n.class])},[Ln(a.$slots,"default")],2),t("div",{class:"w-full w-full",style:tn(E(s))},null,4)]))}}),JE=A(YE,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/layouts/image-right.vue"]]),XE=t("h3",null,"Alternative Beschreibung",-1),QE=t("p",null,'aus "Grokking Simplicity"',-1),eC=t("p",null,"Code wird in drei Arten geteilt:",-1),nC=t("ul",null,[t("li",null,"Calculations"),t("li",null,"Actions"),t("li",null,"Data")],-1),tC=t("p",null,'👉 Unterschied zur "klassischen" Objektorientierung:',-1),sC=t("ul",null,[t("li",null,[r("Trennung zwischen Verhalten und Datenstrukur "),t("ul",null,[t("li",null,"Calculations: Pure Functions"),t("li",null,"Actions: Seiteneffekte"),t("li",null,"Data")])])],-1),aC={__name:"29",setup(e){const n={layout:"image-right",image:"/images/book-grokking-simplicity.png",srcSequence:"./pages/grokking-simplicity-01.md"};return C(F),(s,a)=>(k(),T(JE,j(L(n)),{default:w(()=>[XE,QE,eC,nC,tC,sC]),_:1},16))}},rC=A(aC,[["__file","/@slidev/slides/29.md"]]),oC="/2023-06-dwx-fp-csharp-to-fsharp/images/fp-languages-overview.png";const gl=e=>(qm("data-v-4cc7b31b"),e=e(),Wm(),e),iC=gl(()=>t("p",null,[t("img",{class:"absolute top-0 right-10 w-150",src:oC})],-1)),lC=gl(()=>t("div",{id:"sig1"},'Image: "Get Programming with F#", Isaac Abraham',-1)),cC=gl(()=>t("ul",null,[t("li",null,"Die Abbildung stellt keine Wertung dar!"),t("li",null,"Man sollte verstehen, wo auf dieser Abbildung man sich befindet")],-1)),uC={__name:"30",setup(e){const n={layout:"two-cols",srcSequence:"./pages/02-fp-basics_sprachen.md"};return C(F),(s,a)=>(k(),T(Qr,j(L(n)),{right:w(o=>[cC]),default:w(()=>[iC,lC]),_:1},16))}},pC=A(uC,[["__scopeId","data-v-4cc7b31b"],["__file","/@slidev/slides/30.md"]]),dC=t("h2",null,"Mögliches Vorhandensein eines Werts",-1),fC=t("h4",null,"oder: null ist gefährlich.",-1),hC={__name:"31",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/option.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[dC,fC]),_:1},16))}},mC=A(hC,[["__file","/@slidev/slides/31.md"]]),gC=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"// Enthält die Signatur die ganze Wahrheit?")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"public"),r(),t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"string")]),r(),t("span",{class:"token generic-method"},[t("span",{class:"token function"},"Stringify"),t("span",{class:"token generic class-name"},[t("span",{class:"token punctuation"},"<"),r("T"),t("span",{class:"token punctuation"},">")])]),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},"T"),r(" data"),t("span",{class:"token punctuation"},")")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"{")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token keyword"},"return"),r(),t("span",{class:"token keyword"},"null"),t("span",{class:"token punctuation"},";")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),_C={__name:"32",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/option.md"};return C(F),(s,a)=>{const o=_e;return k(),T(q,j(L(n)),{default:w(()=>[N(o,le({},{ranges:[""]}),{default:w(()=>[gC]),_:1},16)]),_:1},16)}}},kC=A(_C,[["__file","/@slidev/slides/32.md"]]),bC=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"// Sind Magic Values eine gute Idee?")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"public"),r(),t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"int")]),r(),t("span",{class:"token function"},"Intify"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"string")]),r(" s"),t("span",{class:"token punctuation"},")")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"{")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),r(" result "),t("span",{class:"token operator"},"="),r(),t("span",{class:"token operator"},"-"),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},";")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token keyword"},"int"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"TryParse"),t("span",{class:"token punctuation"},"("),r("s"),t("span",{class:"token punctuation"},","),r(),t("span",{class:"token keyword"},"out"),r(" result"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token keyword"},"return"),r(" result"),t("span",{class:"token punctuation"},";")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),vC={__name:"33",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/option.md"};return C(F),(s,a)=>{const o=_e;return k(),T(q,j(L(n)),{default:w(()=>[N(o,le({},{ranges:[""]}),{default:w(()=>[bC]),_:1},16)]),_:1},16)}}},yC=A(vC,[["__file","/@slidev/slides/33.md"]]),wC=t("p",null,"Gemein!",-1),SC=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token keyword"},"public"),r(),t("span",{class:"token keyword"},"class"),r(),t("span",{class:"token class-name"},"Data")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"{")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token keyword"},"public"),r(),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"string")]),r(" Name"),t("span",{class:"token punctuation"},";")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"public"),r(),t("span",{class:"token keyword"},"class"),r(),t("span",{class:"token class-name"},"Do")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"{")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token keyword"},"public"),r(),t("span",{class:"token return-type class-name"},"Data"),r(),t("span",{class:"token function"},"CreateData"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token operator"},"=>"),r(),t("span",{class:"token keyword"},"null"),t("span",{class:"token punctuation"},";")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token keyword"},"public"),r(),t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"string")]),r(),t("span",{class:"token function"},"CreateAndUseData"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token punctuation"},"{")]),r(`
`),t("span",{class:"line"},[r("        "),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"var")]),r(" data "),t("span",{class:"token operator"},"="),r(),t("span",{class:"token function"},"CreateData"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),r(`
`),t("span",{class:"line"},[r("        "),t("span",{class:"token comment"},"// kein null-Check -> ist dem Compiler egal")]),r(`
`),t("span",{class:"line"},[r("        "),t("span",{class:"token keyword"},"return"),r(" data"),t("span",{class:"token punctuation"},"."),r("Name"),t("span",{class:"token punctuation"},";")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token punctuation"},"}")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),xC={__name:"34",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/option.md"};return C(F),(s,a)=>{const o=_e;return k(),T(q,j(L(n)),{default:w(()=>[wC,N(o,le({},{ranges:[""]}),{default:w(()=>[SC]),_:1},16)]),_:1},16)}}},EC=A(xC,[["__file","/@slidev/slides/34.md"]]),CC=t("h2",null,"Option",-1),$C=t("pre",{class:"slidev-code language-fsharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token keyword"},"type"),r(),t("span",{class:"token class-name"},"Option"),t("span",{class:"token operator"},"<"),r("'T"),t("span",{class:"token operator"},">"),r(),t("span",{class:"token operator"},"="),r(" Some"),t("span",{class:"token operator"},"<"),r("'T"),t("span",{class:"token operator"},">"),r(),t("span",{class:"token operator"},"|"),r(" None")])])],-1),PC=t("ul",null,[t("li",null,'entweder ein Wert ist da - dann ist er in "Some" eingepackt'),t("li",null,'oder es ist kein Wert da, dann gibt es ein leeres "None"'),t("li",null,"alternative Bezeichnungen: Optional, Maybe")],-1),OC={__name:"35",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/option.md"};return C(F),(s,a)=>{const o=_e;return k(),T(q,j(L(n)),{default:w(()=>[CC,N(o,le({},{ranges:[""]}),{default:w(()=>[$C]),_:1},16),PC]),_:1},16)}}},TC=A(OC,[["__file","/@slidev/slides/35.md"]]),FC=t("h2",null,"Mit Option",-1),AC=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token keyword"},"public"),r(),t("span",{class:"token return-type class-name"},[r("Option"),t("span",{class:"token punctuation"},"<"),t("span",{class:"token keyword"},"int"),t("span",{class:"token punctuation"},">")]),r(),t("span",{class:"token function"},"IntifyOption"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"string")]),r(" s"),t("span",{class:"token punctuation"},")")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"{")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),r(" result "),t("span",{class:"token operator"},"="),r(),t("span",{class:"token operator"},"-"),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},";")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"bool")]),r(" success "),t("span",{class:"token operator"},"="),r(),t("span",{class:"token keyword"},"int"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"TryParse"),t("span",{class:"token punctuation"},"("),r("s"),t("span",{class:"token punctuation"},","),r(),t("span",{class:"token keyword"},"out"),r(" result"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token keyword"},"return"),r(),t("span",{class:"token return-type class-name"},[r("success "),t("span",{class:"token punctuation"},"?")]),r(),t("span",{class:"token function"},"Some"),t("span",{class:"token punctuation"},"("),r("result"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token punctuation"},":"),r(" None"),t("span",{class:"token punctuation"},";")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),MC={__name:"36",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/option.md"};return C(F),(s,a)=>{const o=_e;return k(),T(q,j(L(n)),{default:w(()=>[FC,N(o,le({},{ranges:[""]}),{default:w(()=>[AC]),_:1},16)]),_:1},16)}}},IC=A(MC,[["__file","/@slidev/slides/36.md"]]),NC=t("h3",null,"Wie komme ich an einen eingepackten Wert ran?",-1),DC=t("blockquote",null,[t("p",null,"Pattern matching allows you to match a value against some patterns to select a branch of the code.")],-1),LC=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token keyword"},"public"),r(),t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"string")]),r(),t("span",{class:"token generic-method"},[t("span",{class:"token function"},"Stringify"),t("span",{class:"token generic class-name"},[t("span",{class:"token punctuation"},"<"),r("T"),t("span",{class:"token punctuation"},">")])]),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[r("Option"),t("span",{class:"token punctuation"},"<"),r("T"),t("span",{class:"token punctuation"},">")]),r(" data"),t("span",{class:"token punctuation"},")")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"{")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token keyword"},"return"),r(" data"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"Match"),t("span",{class:"token punctuation"},"(")]),r(`
`),t("span",{class:"line"},[r("        None"),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token operator"},"=>"),r(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},",")]),r(`
`),t("span",{class:"line"},[r("        Some"),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token punctuation"},"("),r("existingData"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token operator"},"=>"),r(" existingData"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"ToString"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),jC={__name:"37",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/option.md"};return C(F),(s,a)=>{const o=_e;return k(),T(q,j(L(n)),{default:w(()=>[NC,DC,N(o,le({},{ranges:[""]}),{default:w(()=>[LC]),_:1},16)]),_:1},16)}}},RC=A(jC,[["__file","/@slidev/slides/37.md"]]),BC=t("h3",null,"Vorteile",-1),qC=t("ul",null,[t("li",null,"Explizite Semantik: Wert ist da - oder eben nicht"),t("li",null,'Auch für Nicht-Programmierer verständlich(er): "optional" vs. "nullable"'),t("li",null,"Die Signatur von Match erzwingt eine Behandlung beider Fälle - nie wieder vergessene Null-Checks!"),t("li",null,'Achtung: In C# bleibt das Problem, dass "Option" auch ein Objekt ist - und daher selbst null sein kann'),t("li",null,[r("daher mindestens: in C# explizites NULL enablen mit "),t("code",null,"<Nullable>enable</Nullable>")])],-1),WC={__name:"38",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/option.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[BC,qC]),_:1},16))}},VC=A(WC,[["__file","/@slidev/slides/38.md"]]),HC=t("p",null,"In FP unterscheidet man die Art der Wrapper-Klassen (z.B. IEnumerable) anhand der Funktionen, die sie bereitstellen",-1),zC={__name:"39",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/option.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[HC]),_:1},16))}},UC=A(zC,[["__file","/@slidev/slides/39.md"]]),KC="/2023-06-dwx-fp-csharp-to-fsharp/images/book-csharp-fp-with-comment.png",GC=t("h3",null,"LaYumba",-1),ZC=t("p",null,[t("img",{src:KC,alt:"img"})],-1),YC=t("ul",null,[t("li",null,"NuGet Paket"),t("li",null,"kann nicht alles"),t("li",null,"Fokus: Didaktik (Ähnlichkeit mit F#, Haskell)"),t("li",null,[r('"einfache" Variante von '),t("a",{href:"https://github.com/louthy/language-ext",target:"_blank",rel:"noopener"},"language-ext")])],-1),JC={__name:"40",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/layumba.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[GC,ZC,YC]),_:1},16))}},XC=A(JC,[["__file","/@slidev/slides/40.md"]]),QC="/2023-06-dwx-fp-csharp-to-fsharp/images/language-ext-screenshot-github-0.png",e$=t("h3",null,"language-ext",-1),n$=t("p",null,[t("img",{src:QC,alt:"img"})],-1),t$={__name:"41",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/layumba.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[e$,n$]),_:1},16))}},s$=A(t$,[["__file","/@slidev/slides/41.md"]]),a$="/2023-06-dwx-fp-csharp-to-fsharp/images/language-ext-screenshot-github-1.png",r$=t("h3",null,"language-ext",-1),o$=t("p",null,[t("img",{src:a$,alt:"img"})],-1),i$={__name:"42",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/layumba.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[r$,o$]),_:1},16))}},l$=A(i$,[["__file","/@slidev/slides/42.md"]]),c$="/2023-06-dwx-fp-csharp-to-fsharp/images/language-ext-screenshot-github-2.png",u$=t("h3",null,"language-ext",-1),p$=t("p",null,[t("img",{src:c$,alt:"img"})],-1),d$={__name:"43",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/layumba.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[u$,p$]),_:1},16))}},f$=A(d$,[["__file","/@slidev/slides/43.md"]]),h$="/2023-06-dwx-fp-csharp-to-fsharp/images/language-ext-screenshot-github-3.png",m$=t("h3",null,"language-ext",-1),g$=t("p",null,[t("img",{src:h$,alt:"img"})],-1),_$={__name:"44",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/layumba.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[m$,g$]),_:1},16))}},k$=A(_$,[["__file","/@slidev/slides/44.md"]]),b$="/2023-06-dwx-fp-csharp-to-fsharp/images/language-ext-screenshot-github-4.png",v$=t("h3",null,"language-ext",-1),y$=t("p",null,[t("img",{src:b$,alt:"img"})],-1),w$={__name:"45",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/layumba.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[v$,y$]),_:1},16))}},S$=A(w$,[["__file","/@slidev/slides/45.md"]]),x$="/2023-06-dwx-fp-csharp-to-fsharp/images/language-ext-screenshot-github-5.png",E$=t("h3",null,"language-ext",-1),C$=t("p",null,[t("img",{src:x$,alt:"img"})],-1),$$={__name:"46",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/layumba.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[E$,C$]),_:1},16))}},P$=A($$,[["__file","/@slidev/slides/46.md"]]),O$=t("h3",null,"Mittelweg: C# Functional Extensions",-1),T$=t("ul",null,[t("li",null,[r("Nuget-Paket: "),t("a",{href:"https://github.com/vkhorikov/CSharpFunctionalExtensions",target:"_blank",rel:"noopener"},"https://github.com/vkhorikov/CSharpFunctionalExtensions")]),t("li",null,"hat alles was man braucht, ohne zu kompliziert zu sein")],-1),F$={__name:"47",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/layumba.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[O$,T$]),_:1},16))}},A$=A(F$,[["__file","/@slidev/slides/47.md"]]),eo="/2023-06-dwx-fp-csharp-to-fsharp/images/fsharp256.png",M$=t("h1",null,"Einführung in F#",-1),I$=t("p",null,[t("img",{src:eo,alt:"img"})],-1),N$={__name:"48",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/fsharp.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[M$,I$]),_:1},16))}},D$=A(N$,[["__file","/@slidev/slides/48.md"]]),L$=t("h2",null,"F#",-1),j$=t("ul",null,[t("li",null,"Ursprünglich: Microsoft Forschungsprojekt"),t("li",null,"Heute: Community-driven"),t("li",null,"inspiriert von OCaml"),t("li",null,"Multi-Paradigma"),t("li",null,"Fokus auf funktionale Programmierung")],-1),R$=t("p",null,[t("img",{class:"absolute top-10 right-10 w-100",src:eo})],-1),B$={__name:"49",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/fsharp.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[L$,j$,R$]),_:1},16))}},q$=A(B$,[["__file","/@slidev/slides/49.md"]]),W$=t("h2",null,"F#",-1),V$=t("ul",null,[t("li",null,"erzwingt keine puren Funktionen, sondern erlaubt Seiteneffekte"),t("li",null,"Statisch typisiert"),t("li",null,"integriert ins .NET Ökosystem"),t("li",null,"C# / VB.NET Interop")],-1),H$=t("p",null,[t("img",{class:"absolute top-10 right-10 w-100",src:eo})],-1),z$={__name:"50",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/fsharp.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[W$,V$,H$]),_:1},16))}},U$=A(z$,[["__file","/@slidev/slides/50.md"]]),K$=t("h2",null,"Besonderheiten",-1),G$=t("ul",null,[t("li",null,"Significant whitespace"),t("li",null,"Reihenfolge der Definitionen in Datei wichtig"),t("li",null,"Reihenfolge der Dateien im Projekt wichtig")],-1),Z$=t("p",null,[t("img",{class:"absolute top-10 right-10 w-100",src:eo})],-1),Y$={__name:"51",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/fsharp.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[K$,G$,Z$]),_:1},16))}},J$=A(Y$,[["__file","/@slidev/slides/51.md"]]),X$=t("h2",null,"Immutability als Default",-1),Q$=t("pre",{class:"slidev-code language-fsharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"// Achtung: = ist hier keine Zuweisung, sondern heißt ")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token comment"},'// "linke und rechte Seite sind gleich und bleiben es auch immer"')]),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),r(" x "),t("span",{class:"token operator"},"="),r(),t("span",{class:"token number"},"3")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),r(" add a b "),t("span",{class:"token operator"},"="),r(" a "),t("span",{class:"token operator"},"+"),r(" b")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),r(" m "),t("span",{class:"token operator"},"="),r(),t("span",{class:"token keyword"},"if"),r(),t("span",{class:"token number"},"3"),r(),t("span",{class:"token operator"},">"),r(),t("span",{class:"token number"},"0"),r(),t("span",{class:"token keyword"},"then"),r(),t("span",{class:"token number"},"7"),r(),t("span",{class:"token keyword"},"else"),r(),t("span",{class:"token number"},"42")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[t("span",{class:"token comment"},"// Mutability nur auf Wunsch - normalerweise unnötig")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),r(),t("span",{class:"token keyword"},"mutable"),r(" y "),t("span",{class:"token operator"},"="),r(),t("span",{class:"token number"},"3")]),r(`
`),t("span",{class:"line"},[r("y "),t("span",{class:"token operator"},"<-"),r(),t("span",{class:"token number"},"42")])])],-1),eP={__name:"52",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/fsharp.md"};return C(F),(s,a)=>{const o=_e;return k(),T(q,j(L(n)),{default:w(()=>[X$,N(o,le({},{ranges:[""]}),{default:w(()=>[Q$]),_:1},16)]),_:1},16)}}},nP=A(eP,[["__file","/@slidev/slides/52.md"]]),tP=t("h2",null,"Typ-Inferenz",-1),sP=t("pre",{class:"slidev-code language-fsharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"// Typen werden automatisch abgeleitet sofern möglich")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),r(" double a "),t("span",{class:"token operator"},"="),r(" a "),t("span",{class:"token operator"},"*"),r(),t("span",{class:"token number"},"2"),r(),t("span",{class:"token comment"},"// int -> int")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[t("span",{class:"token comment"},"// Explizite Angaben möglich")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),r(" doubleExplicit "),t("span",{class:"token punctuation"},"("),r("a"),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token class-name"},"int"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token punctuation"},":"),r(" int "),t("span",{class:"token operator"},"="),r(" a "),t("span",{class:"token operator"},"*"),r(),t("span",{class:"token number"},"2")])])],-1),aP={__name:"53",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/fsharp.md"};return C(F),(s,a)=>{const o=_e;return k(),T(q,j(L(n)),{default:w(()=>[tP,N(o,le({},{ranges:[""]}),{default:w(()=>[sP]),_:1},16)]),_:1},16)}}},rP=A(aP,[["__file","/@slidev/slides/53.md"]]),oP=t("h2",null,"Currying",-1),iP=t("blockquote",null,[t("p",null,"Currying ist die Umwandlung einer Funktion mit mehreren Argumenten in eine Funktion mit einem Argument, die wiederum eine Funktion zurückgibt mit dem Rest der Argumente.")],-1),lP=t("pre",{class:"slidev-code language-fsharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"// int -> int -> int -> int")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token comment"},"// eigentlich: int -> (int -> (int -> int))")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),r(" addThree a b c "),t("span",{class:"token operator"},"="),r(" a "),t("span",{class:"token operator"},"+"),r(" b "),t("span",{class:"token operator"},"+"),r(" c")])])],-1),cP={__name:"54",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/fsharp.md"};return C(F),(s,a)=>{const o=_e;return k(),T(q,j(L(n)),{default:w(()=>[oP,iP,N(o,le({},{ranges:[""]}),{default:w(()=>[lP]),_:1},16)]),_:1},16)}}},uP=A(cP,[["__file","/@slidev/slides/54.md"]]),pP=t("h2",null,"Partial Application",-1),dP=t("ul",null,[t("li",null,"Eine Funktion mit mehreren Parametern bekommt nur einen Teil ihrer Argumente übergeben - der Rest bleibt offen und kann später ausgefüllt werden")],-1),fP=t("pre",{class:"slidev-code language-fsharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"// Partial Application")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),r(" add a b "),t("span",{class:"token operator"},"="),r(" a "),t("span",{class:"token operator"},"+"),r(" b "),t("span",{class:"token comment"},"// int -> (int -> (int))")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),r(" add2 "),t("span",{class:"token operator"},"="),r(" add "),t("span",{class:"token number"},"2"),r(),t("span",{class:"token comment"},"// (int -> (int))")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),r(" six "),t("span",{class:"token operator"},"="),r(" add2 "),t("span",{class:"token number"},"4"),r(),t("span",{class:"token comment"},"// (int)")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),r(" ten "),t("span",{class:"token operator"},"="),r(" add2 "),t("span",{class:"token number"},"8"),r(),t("span",{class:"token comment"},"// (int)")])])],-1),hP={__name:"55",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/fsharp.md"};return C(F),(s,a)=>{const o=_e;return k(),T(q,j(L(n)),{default:w(()=>[pP,dP,N(o,le({},{ranges:[""]}),{default:w(()=>[fP]),_:1},16)]),_:1},16)}}},mP=A(hP,[["__file","/@slidev/slides/55.md"]]),gP=t("h2",null,"Pipe-Operator",-1),_P=t("pre",{class:"slidev-code language-fsharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"// der letzte Parameter kann mit dem Ergebnis ")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token comment"},"// der vorherigen Expression ausgefüllt werden")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),r(" double a "),t("span",{class:"token operator"},"="),r(" a "),t("span",{class:"token operator"},"*"),r(),t("span",{class:"token number"},"2")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token number"},"4"),r(),t("span",{class:"token operator"},"|>"),r(" double "),t("span",{class:"token comment"},"// ergibt 8")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token number"},"4"),r(),t("span",{class:"token operator"},"|>"),r(" double "),t("span",{class:"token operator"},"|>"),r(" double "),t("span",{class:"token comment"},"// ergibt 16")])])],-1),kP={__name:"56",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/fsharp.md"};return C(F),(s,a)=>{const o=_e;return k(),T(q,j(L(n)),{default:w(()=>[gP,N(o,le({},{ranges:[""]}),{default:w(()=>[_P]),_:1},16)]),_:1},16)}}},bP=A(kP,[["__file","/@slidev/slides/56.md"]]),vP=t("h2",null,"Discriminated Unions",-1),yP=t("pre",{class:"slidev-code language-fsharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},'// Discriminated Unions ("Tagged Union", "Sum Type", "Choice Type")')]),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"type"),r(),t("span",{class:"token class-name"},"Vehicle"),r(),t("span",{class:"token operator"},"="),r(" Bike "),t("span",{class:"token operator"},"|"),r(" Car "),t("span",{class:"token operator"},"|"),r(" Bus")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[t("span",{class:"token comment"},"// Pattern Matching zur Behandlung der verschiedenen Fälle")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),r(" vehicle "),t("span",{class:"token operator"},"="),r(" Bike")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),r(" laneText "),t("span",{class:"token operator"},"="),r()]),r(`
`),t("span",{class:"line"},[r("  "),t("span",{class:"token keyword"},"match"),r(" vehicle "),t("span",{class:"token keyword"},"with")]),r(`
`),t("span",{class:"line"},[r("  "),t("span",{class:"token operator"},"|"),r(" Bike "),t("span",{class:"token operator"},"->"),r(),t("span",{class:"token string"},'"Use the bike lane"')]),r(`
`),t("span",{class:"line"},[r("  "),t("span",{class:"token operator"},"|"),r(" Car "),t("span",{class:"token operator"},"->"),r(),t("span",{class:"token string"},'"Use the car driving lane"')]),r(`
`),t("span",{class:"line"},[r("  "),t("span",{class:"token operator"},"|"),r(" Bus "),t("span",{class:"token operator"},"->"),r(),t("span",{class:"token string"},'"The bus uses its own lane"')])])],-1),wP={__name:"57",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/fsharp.md"};return C(F),(s,a)=>{const o=_e;return k(),T(q,j(L(n)),{default:w(()=>[vP,N(o,le({},{ranges:[""]}),{default:w(()=>[yP]),_:1},16)]),_:1},16)}}},SP=A(wP,[["__file","/@slidev/slides/57.md"]]),xP=t("h2",null,"Discriminated Unions mit Werten",-1),EP=t("pre",{class:"slidev-code language-fsharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"// auch mit unterschiedlichen(!) Daten an jedem Fall möglich")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"type"),r(),t("span",{class:"token class-name"},"Shape"),r(),t("span",{class:"token operator"},"=")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token operator"},"|"),r(" Circle "),t("span",{class:"token keyword"},"of"),r(),t("span",{class:"token class-name"},"float")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token operator"},"|"),r(" Rectangle "),t("span",{class:"token keyword"},"of"),r(),t("span",{class:"token class-name"},[r("float "),t("span",{class:"token operator"},"*"),r(" float")])]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),r(" c "),t("span",{class:"token operator"},"="),r(" Circle "),t("span",{class:"token number"},"42.42")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"match"),r(" c "),t("span",{class:"token keyword"},"with")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token operator"},"|"),r(" Circle radius "),t("span",{class:"token operator"},"->"),r(" radius "),t("span",{class:"token operator"},"*"),r(" radius "),t("span",{class:"token operator"},"*"),r(" System"),t("span",{class:"token punctuation"},"."),r("Math"),t("span",{class:"token punctuation"},"."),r("PI")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token operator"},"|"),r(),t("span",{class:"token function"},"Rectangle"),t("span",{class:"token punctuation"},"("),r("width"),t("span",{class:"token punctuation"},","),r(" height"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token operator"},"->"),r(" width "),t("span",{class:"token operator"},"*"),r(" height")])])],-1),CP={__name:"58",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/fsharp.md"};return C(F),(s,a)=>{const o=_e;return k(),T(q,j(L(n)),{default:w(()=>[xP,N(o,le({},{ranges:[""]}),{default:w(()=>[EP]),_:1},16)]),_:1},16)}}},$P=A(CP,[["__file","/@slidev/slides/58.md"]]),PP=t("h2",null,"Record Types",-1),OP=t("pre",{class:"slidev-code language-fsharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"// Record Type")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"type"),r(),t("span",{class:"token class-name"},"ShoppingCart"),r(),t("span",{class:"token operator"},"="),r(),t("span",{class:"token punctuation"},"{")]),r(`
`),t("span",{class:"line"},[r("    products"),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token class-name"},"Product"),r(" list")]),r(`
`),t("span",{class:"line"},[r("    total"),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token class-name"},"float")]),r(`
`),t("span",{class:"line"},[r("    createdAt"),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token class-name"},[r("System"),t("span",{class:"token punctuation"},"."),r("DateTime")])]),r(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[t("span",{class:"token comment"},"// Typ muss nur angegeben werden wenn er nicht eindeutig ist")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),r(" shoppingCart "),t("span",{class:"token operator"},"="),r(),t("span",{class:"token punctuation"},"{")]),r(`
`),t("span",{class:"line"},[r("    products "),t("span",{class:"token operator"},"="),r(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]")]),r(`
`),t("span",{class:"line"},[r("    total "),t("span",{class:"token operator"},"="),r(),t("span",{class:"token number"},"42.42")]),r(`
`),t("span",{class:"line"},[r("    createdAt "),t("span",{class:"token operator"},"="),r(" System"),t("span",{class:"token punctuation"},"."),r("DateTime"),t("span",{class:"token punctuation"},"."),r("Now")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),TP={__name:"59",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/fsharp.md"};return C(F),(s,a)=>{const o=_e;return k(),T(q,j(L(n)),{default:w(()=>[PP,N(o,le({},{ranges:[""]}),{default:w(()=>[OP]),_:1},16)]),_:1},16)}}},FP=A(TP,[["__file","/@slidev/slides/59.md"]]),AP=t("h2",null,"…Also known as…",-1),MP=t("ul",null,[t("li",null,[r("Discriminated Union "),t("ul",null,[t("li",null,"OR-Type"),t("li",null,"Sum-Type: Der Zustand ergibt sich aus der Summe der Auswahlmöglichkeiten (*)")])]),t("li",null,[r("Record Type "),t("ul",null,[t("li",null,"AND-Type"),t("li",null,"Product-Type: Der Zustand ergibt sich aus dem kartesischen Produkt aller Möglichkeiten jedes Feldes (*)")])])],-1),IP=t("p",null,"(*) Algebraic Data Types",-1),NP={__name:"60",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/fsharp.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[AP,MP,IP]),_:1},16))}},DP=A(NP,[["__file","/@slidev/slides/60.md"]]),LP=t("h3",null,"Algebraic Data Types: Sum Type",-1),jP=t("pre",{class:"slidev-code language-fsharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token keyword"},"type"),r(),t("span",{class:"token class-name"},"Vehicle"),r(),t("span",{class:"token operator"},"="),r(" Bike "),t("span",{class:"token operator"},"|"),r(" Car "),t("span",{class:"token operator"},"|"),r(" Bus")])])],-1),RP=t("p",null,[r("Alle möglichen Zustaende von "),t("code",null,"Vehicle"),r(" sind: "),t("code",null,"Bike"),r(", "),t("code",null,"Car"),r(", oder "),t("code",null,"Bus"),r(".")],-1),BP=t("p",null,[r("Dies entspricht der "),t("strong",null,"Summe"),r(" der Auswahlmöglichkeiten.")],-1),qP={__name:"61",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/fsharp.md"};return C(F),(s,a)=>{const o=_e;return k(),T(q,j(L(n)),{default:w(()=>[LP,N(o,le({},{ranges:[""]}),{default:w(()=>[jP]),_:1},16),RP,BP]),_:1},16)}}},WP=A(qP,[["__file","/@slidev/slides/61.md"]]),VP=t("h3",null,"Algebraic Data Types: Product Type",-1),HP=t("pre",{class:"slidev-code language-fsharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token keyword"},"type"),r(),t("span",{class:"token class-name"},"TruthTable"),r(),t("span",{class:"token punctuation"},"{")]),r(`
`),t("span",{class:"line"},[r("  Wert1"),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token class-name"},"bool")]),r(`
`),t("span",{class:"line"},[r("  Wert2"),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token class-name"},"bool")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),zP=t("p",null,[r("Alle möglichen Zustände von "),t("code",null,"TruthTable"),r(" sind:")],-1),UP=t("ul",null,[t("li",null,[t("code",null,"true"),r(", "),t("code",null,"false")]),t("li",null,[t("code",null,"true"),r(", "),t("code",null,"true")]),t("li",null,[t("code",null,"false"),r(", "),t("code",null,"false")]),t("li",null,[t("code",null,"false"),r(", "),t("code",null,"true")])],-1),KP=t("p",null,[r("Diese Menge nennt man kartesisches "),t("strong",null,"Produkt"),r(".")],-1),GP={__name:"62",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/fsharp.md"};return C(F),(s,a)=>{const o=_e;return k(),T(q,j(L(n)),{default:w(()=>[VP,N(o,le({},{ranges:[""]}),{default:w(()=>[HP]),_:1},16),zP,UP,KP]),_:1},16)}}},ZP=A(GP,[["__file","/@slidev/slides/62.md"]]),YP=t("h2",null,"Record Types",-1),JP=t("ul",null,[t("li",null,"Immutable by default"),t("li",null,"Unmöglich einen ungültigen Record zu erzeugen"),t("li",null,"Structural Equality"),t("li",null,"Hint: C# Value Objects out of the box"),t("li",null,[r("✨ seit C# 9: "),t("code",null,"records")])],-1),XP={__name:"63",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/fsharp.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[YP,JP]),_:1},16))}},QP=A(XP,[["__file","/@slidev/slides/63.md"]]),e6=t("h2",null,"Structural Equality",-1),n6=t("pre",{class:"slidev-code language-fsharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"// Structural Equality")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"type"),r(),t("span",{class:"token class-name"},"Thing"),r(),t("span",{class:"token operator"},"="),r(),t("span",{class:"token punctuation"},"{"),r("content"),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token class-name"},"string"),t("span",{class:"token punctuation"},";"),r(" id"),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token class-name"},"int"),t("span",{class:"token punctuation"},"}")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),r(" thing1 "),t("span",{class:"token operator"},"="),r(),t("span",{class:"token punctuation"},"{"),r("content "),t("span",{class:"token operator"},"="),r(),t("span",{class:"token string"},'"abc"'),t("span",{class:"token punctuation"},";"),r(" id "),t("span",{class:"token operator"},"="),r(),t("span",{class:"token number"},"15"),t("span",{class:"token punctuation"},"}")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),r(" thing2 "),t("span",{class:"token operator"},"="),r(),t("span",{class:"token punctuation"},"{"),r("content "),t("span",{class:"token operator"},"="),r(),t("span",{class:"token string"},'"abc"'),t("span",{class:"token punctuation"},";"),r(" id "),t("span",{class:"token operator"},"="),r(),t("span",{class:"token number"},"15"),t("span",{class:"token punctuation"},"}")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),r(" equal "),t("span",{class:"token operator"},"="),r(),t("span",{class:"token punctuation"},"("),r("thing1 "),t("span",{class:"token operator"},"="),r(" thing2"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token comment"},"// true")])])],-1),t6=t("ul",null,[t("li",null,'Record Types mit Structural Equality sind ideal, um sehr kompakt "Value Objects" ausdrücken zu können')],-1),s6={__name:"64",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/fsharp.md"};return C(F),(s,a)=>{const o=_e;return k(),T(q,j(L(n)),{default:w(()=>[e6,N(o,le({},{ranges:[""]}),{default:w(()=>[n6]),_:1},16),t6]),_:1},16)}}},a6=A(s6,[["__file","/@slidev/slides/64.md"]]),r6=t("h2",null,"Structural Equality vs. DDD Aggregates",-1),o6=t("ul",null,[t("li",null,"Möchte man die Standard-Equality nicht, ist es best practice, Equality und Comparison zu verbieten"),t("li",null,"dann muss explizit auf eine Eigenschaft verglichen werden (z.B. die Id)")],-1),i6=t("pre",{class:"slidev-code language-fsharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token annotation"},[t("span",{class:"token punctuation"},"[<"),t("span",{class:"token annotation-content"},[r("NoEquality"),t("span",{class:"token punctuation"},";"),r(" NoComparison")]),t("span",{class:"token punctuation"},">]")])]),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"type"),r(),t("span",{class:"token class-name"},"NonEquatableNonComparable"),r(),t("span",{class:"token operator"},"="),r(),t("span",{class:"token punctuation"},"{")]),r(`
`),t("span",{class:"line"},[r("    Id"),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token class-name"},"int")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),l6={__name:"65",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/fsharp.md"};return C(F),(s,a)=>{const o=_e;return k(),T(q,j(L(n)),{default:w(()=>[r6,o6,N(o,le({},{ranges:[""]}),{default:w(()=>[i6]),_:1},16)]),_:1},16)}}},c6=A(l6,[["__file","/@slidev/slides/65.md"]]),u6="/2023-06-dwx-fp-csharp-to-fsharp/images/tweet-don-syme-fsharp-csharp.png",p6=t("h3",null,"C# 9 and greater…",-1),d6=t("ul",null,[t("li",null,"(✅) record types"),t("li",null,"💥 discriminated unions (Tip on next slide)"),t("li",null,"(✅) pattern matching"),t("li",null,"(✅) immutability / non-nullability")],-1),f6=t("p",null,[t("img",{src:u6,alt:"/images/tweet-don-syme-fsharp-csharp.png"})],-1),h6=t("p",null,[t("a",{href:"https://twitter.com/dsymetweets/status/1294280620823240706",target:"_blank",rel:"noopener"},"https://twitter.com/dsymetweets/status/1294280620823240706")],-1),m6={__name:"66",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/csharp9.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[p6,d6,f6,h6]),_:1},16))}},g6=A(m6,[["__file","/@slidev/slides/66.md"]]),_6=t("h3",null,"Discriminated Unions in C#",-1),k6=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token keyword"},"record"),r(),t("span",{class:"token class-name"},"Rectangle"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),r(" Width"),t("span",{class:"token punctuation"},","),r(),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),r(" Height"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"record"),r(),t("span",{class:"token class-name"},"Circle"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),r(" Radius"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[t("span",{class:"token comment"},"// Discriminated Union")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"class"),r(),t("span",{class:"token class-name"},"Shape"),r(),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token type-list"},[t("span",{class:"token class-name"},[r("OneOfBase"),t("span",{class:"token punctuation"},"<"),r("Circle"),t("span",{class:"token punctuation"},","),r(" Rectangle"),t("span",{class:"token punctuation"},">")])])]),r(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"{")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token keyword"},"private"),r(),t("span",{class:"token function"},"Shape"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[r("OneOf"),t("span",{class:"token punctuation"},"<"),r("Circle"),t("span",{class:"token punctuation"},","),r(" Rectangle"),t("span",{class:"token punctuation"},">")]),r(" _"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token keyword"},"base"),t("span",{class:"token punctuation"},"("),r("_"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token keyword"},"static"),r(),t("span",{class:"token keyword"},"implicit"),r(),t("span",{class:"token keyword"},"operator"),r(),t("span",{class:"token function"},"Shape"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},"Rectangle"),r(" _"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token operator"},"=>"),r(),t("span",{class:"token keyword"},"new"),t("span",{class:"token punctuation"},"("),r("_"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token keyword"},"static"),r(),t("span",{class:"token keyword"},"implicit"),r(),t("span",{class:"token keyword"},"operator"),r(),t("span",{class:"token function"},"Shape"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},"Circle"),r(" _"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token operator"},"=>"),r(),t("span",{class:"token keyword"},"new"),t("span",{class:"token punctuation"},"("),r("_"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[t("span",{class:"token comment"},"// Usage: Pattern Matching")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"static"),r(),t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"string")]),r(),t("span",{class:"token function"},"Describe"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},"Shape"),r(" shape"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token operator"},"=>")]),r(`
`),t("span",{class:"line"},[r("    shape"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"Match"),t("span",{class:"token punctuation"},"(")]),r(`
`),t("span",{class:"line"},[r("        circle "),t("span",{class:"token operator"},"=>"),r()]),r(`
`),t("span",{class:"line"},[r("            "),t("span",{class:"token interpolation-string"},[t("span",{class:"token string"},'$"Circle has radius '),t("span",{class:"token interpolation"},[t("span",{class:"token punctuation"},"{"),t("span",{class:"token expression language-csharp"},[r("circle"),t("span",{class:"token punctuation"},"."),r("Radius")]),t("span",{class:"token punctuation"},"}")]),t("span",{class:"token string"},'"')]),t("span",{class:"token punctuation"},",")]),r(`
`),t("span",{class:"line"},[r("        rectangle "),t("span",{class:"token operator"},"=>"),r()]),r(`
`),t("span",{class:"line"},[r("            "),t("span",{class:"token interpolation-string"},[t("span",{class:"token string"},'$"H: '),t("span",{class:"token interpolation"},[t("span",{class:"token punctuation"},"{"),t("span",{class:"token expression language-csharp"},[r("rectangle"),t("span",{class:"token punctuation"},"."),r("Height")]),t("span",{class:"token punctuation"},"}")]),t("span",{class:"token string"},' "')]),r(),t("span",{class:"token operator"},"+")]),r(`
`),t("span",{class:"line"},[r("            "),t("span",{class:"token interpolation-string"},[t("span",{class:"token string"},'$"W: '),t("span",{class:"token interpolation"},[t("span",{class:"token punctuation"},"{"),t("span",{class:"token expression language-csharp"},[r("rectangle"),t("span",{class:"token punctuation"},"."),r("Width")]),t("span",{class:"token punctuation"},"}")]),t("span",{class:"token string"},'"')]),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")])])],-1),b6=t("ul",null,[t("li",null,[r('"OneOf" '),t("a",{href:"https://github.com/mcintyre321/OneOf",target:"_blank",rel:"noopener"},"https://github.com/mcintyre321/OneOf")])],-1),v6=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token punctuation"},"["),t("span",{class:"token attribute"},[t("span",{class:"token class-name"},"Fact")]),t("span",{class:"token punctuation"},"]")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"public"),r(),t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"void")]),r(),t("span",{class:"token function"},"Shape_tests"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"{")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token class-name"},"Shape"),r(" shape1 "),t("span",{class:"token operator"},"="),r(),t("span",{class:"token keyword"},"new"),r(),t("span",{class:"token constructor-invocation class-name"},"Circle"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"42"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token class-name"},"Shape"),r(" shape2 "),t("span",{class:"token operator"},"="),r(),t("span",{class:"token keyword"},"new"),r(),t("span",{class:"token constructor-invocation class-name"},"Rectangle"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},","),r(),t("span",{class:"token number"},"3"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"var")]),r(" result1 "),t("span",{class:"token operator"},"="),r(),t("span",{class:"token function"},"Describe"),t("span",{class:"token punctuation"},"("),r("shape1"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"var")]),r(" result2 "),t("span",{class:"token operator"},"="),r(),t("span",{class:"token function"},"Describe"),t("span",{class:"token punctuation"},"("),r("shape2"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[r("    result1"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"Should"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"Be"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"Circle has radius 42"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),r(`
`),t("span",{class:"line"},[r("    result2"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"Should"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"Be"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"H: 3 W: 2"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),y6={__name:"67",setup(e){const n={layout:"two-cols",srcSequence:"./pages/csharp9.md"};return C(F),(s,a)=>{const o=_e;return k(),T(Qr,j(L(n)),{right:w(i=>[N(o,le({},{ranges:[""]}),{default:w(()=>[v6]),_:1},16)]),default:w(()=>[_6,N(o,le({},{ranges:[""]}),{default:w(()=>[k6]),_:1},16),b6]),_:1},16)}}},w6=A(y6,[["__file","/@slidev/slides/67.md"]]),S6=t("h2",null,"Kleine Funktionen zu größeren verbinden",-1),x6=t("ul",null,[t("li",null,'Gängige Vorgehensweise: Kleine Funktionen werden zu immer größeren Funktionalitäten zusammengesteckt ("Komposition")'),t("li",null,"Problem: Nicht alle Funktionen passen gut zusammen")],-1),E6={__name:"68",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/funktor.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[S6,x6]),_:1},16))}},C6=A(E6,[["__file","/@slidev/slides/68.md"]]),$6=t("h3",null,"Problem: Wert in Container, Funktion kann nichts damit anfangen",-1),P6=t("pre",{class:"slidev-code language-fsharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"// F#")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"module"),r(" X")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),r(" toUpper "),t("span",{class:"token punctuation"},"("),r("s"),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token class-name"},"string"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token punctuation"},":"),r(" string "),t("span",{class:"token operator"},"="),r(" s"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"ToUpper"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),r(" stringToOption "),t("span",{class:"token punctuation"},"("),r("s"),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token class-name"},"string"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token punctuation"},":"),r(" string option "),t("span",{class:"token operator"},"=")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token keyword"},"if"),r(" String"),t("span",{class:"token punctuation"},"."),r("IsNullOrWhiteSpace s "),t("span",{class:"token keyword"},"then")]),r(`
`),t("span",{class:"line"},"        None"),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token keyword"},"else")]),r(`
`),t("span",{class:"line"},"        Some s"),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),r(" nonEmptyStringToUpper "),t("span",{class:"token punctuation"},"("),r("s"),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token class-name"},"string"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token operator"},"?"),t("span",{class:"token operator"},"?"),t("span",{class:"token operator"},"?"),r(),t("span",{class:"token operator"},"=")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token keyword"},"let"),r(" nonEmpty "),t("span",{class:"token operator"},"="),r(" stringToOption s")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token comment"},'// passt nicht: "string" erwartet, aber "string option" bekommen')]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token keyword"},"let"),r(" nonEmptyUpper "),t("span",{class:"token operator"},"="),r(" toUpper nonEmpty")])])],-1),O6={__name:"69",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/funktor.md"};return C(F),(s,a)=>{const o=_e;return k(),T(q,j(L(n)),{default:w(()=>[$6,N(o,le({},{ranges:[""]}),{default:w(()=>[P6]),_:1},16)]),_:1},16)}}},T6=A(O6,[["__file","/@slidev/slides/69.md"]]),F6=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"// C#")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"using"),r(),t("span",{class:"token namespace"},[r("LaYumba"),t("span",{class:"token punctuation"},"."),r("Functional")]),t("span",{class:"token punctuation"},";")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"using"),r(),t("span",{class:"token keyword"},"static"),r(),t("span",{class:"token class-name"},[r("LaYumba"),t("span",{class:"token punctuation"},"."),r("Functional"),t("span",{class:"token punctuation"},"."),r("F")]),t("span",{class:"token punctuation"},";")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"static"),r(),t("span",{class:"token keyword"},"class"),r(),t("span",{class:"token class-name"},"X")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"{")]),r(`
`),t("span",{class:"line"},[r("  "),t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"string")]),r(),t("span",{class:"token function"},"ToUpper"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"string")]),r(" s"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token operator"},"=>"),r(" s"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"ToUpper"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[r("  "),t("span",{class:"token return-type class-name"},[r("Option"),t("span",{class:"token punctuation"},"<"),t("span",{class:"token keyword"},"string"),t("span",{class:"token punctuation"},">")]),r(),t("span",{class:"token function"},"StringToOption"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"string")]),r(" s"),t("span",{class:"token punctuation"},")")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token operator"},"=>"),r(),t("span",{class:"token keyword"},"string"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"IsNullOrEmpty"),t("span",{class:"token punctuation"},"("),r("s"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token punctuation"},"?"),r(" None "),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token function"},"Some"),t("span",{class:"token punctuation"},"("),r("s"),t("span",{class:"token punctuation"},")")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[r("  "),t("span",{class:"token function"},"NonEmptyStringToUpper"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"string")]),r(" s"),t("span",{class:"token punctuation"},")")]),r(`
`),t("span",{class:"line"},[r("  "),t("span",{class:"token punctuation"},"{")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"var")]),r(" nonEmpty "),t("span",{class:"token operator"},"="),r(),t("span",{class:"token function"},"StringToOption"),t("span",{class:"token punctuation"},"("),r("s"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token comment"},'// passt nicht: "string" erwartet, aber "string option" bekommen')]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token keyword"},"return"),r(),t("span",{class:"token function"},"ToUpper"),t("span",{class:"token punctuation"},"("),r("s"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),r(`
`),t("span",{class:"line"},[r("  "),t("span",{class:"token punctuation"},"}")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),A6={__name:"70",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/funktor.md"};return C(F),(s,a)=>{const o=_e;return k(),T(q,j(L(n)),{default:w(()=>[N(o,le({},{ranges:[""]}),{default:w(()=>[F6]),_:1},16)]),_:1},16)}}},M6=A(A6,[["__file","/@slidev/slides/70.md"]]),I6="/2023-06-dwx-fp-csharp-to-fsharp/images/Funktor_1.png",N6=t("h3",null,'Funktor ("Mappable")',-1),D6=t("p",null,[t("img",{src:I6,alt:"img"})],-1),L6={__name:"71",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/funktor.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[N6,D6]),_:1},16))}},j6=A(L6,[["__file","/@slidev/slides/71.md"]]),R6=t("h3",null,'Funktor ("Mappable")',-1),B6=t("ul",null,[t("li",null,'Container mit "map" Funktion (die bestimmten Regeln folgt): "Mappable"'),t("li",null,[r("Bezeichnung in der FP-Welt: "),t("strong",null,"Funktor")])],-1),q6=t("pre",{class:"slidev-code language-fsharp"},[t("code",null,[t("span",{class:"line"},[r("  map"),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token punctuation"},"("),r("a "),t("span",{class:"token operator"},"->"),r(" b"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token operator"},"->"),r(" F a "),t("span",{class:"token operator"},"->"),r(" F b")])])],-1),W6={__name:"72",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/funktor.md"};return C(F),(s,a)=>{const o=_e;return k(),T(q,j(L(n)),{default:w(()=>[R6,B6,N(o,le({},{ranges:[""]}),{default:w(()=>[q6]),_:1},16),r(' - Andere Bezeichnungen für "map": fmap (z.B. in Haskell), Select (LINQ), <$>, <!> ')]),_:1},16)}}},V6=A(W6,[["__file","/@slidev/slides/72.md"]]),H6=t("h3",null,"Wert in Container, Funktion passt nicht",-1),z6=t("pre",{class:"slidev-code language-fsharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),r(" toUpper "),t("span",{class:"token punctuation"},"("),r("s"),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token class-name"},"string"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token punctuation"},":"),r(" string "),t("span",{class:"token operator"},"="),r(" s"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"ToUpper"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),r(" stringToOption "),t("span",{class:"token punctuation"},"("),r("s"),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token class-name"},"string"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token punctuation"},":"),r(" string option "),t("span",{class:"token operator"},"=")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token keyword"},"if"),r(" String"),t("span",{class:"token punctuation"},"."),r("IsNullOrWhiteSpace s "),t("span",{class:"token keyword"},"then")]),r(`
`),t("span",{class:"line"},"        None"),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token keyword"},"else")]),r(`
`),t("span",{class:"line"},"        Some s"),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),r(" nonEmptyStringToUpper "),t("span",{class:"token punctuation"},"("),r("s"),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token class-name"},"string"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token punctuation"},":"),r(" string option "),t("span",{class:"token operator"},"=")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token keyword"},"let"),r(" nonEmpty "),t("span",{class:"token operator"},"="),r(" stringToOption s")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token keyword"},"let"),r(" nonEmptyUpper "),t("span",{class:"token operator"},"="),r(" Option"),t("span",{class:"token punctuation"},"."),r("map toUpper nonEmpty")])])],-1),U6={__name:"73",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/funktor.md"};return C(F),(s,a)=>{const o=_e;return k(),T(q,j(L(n)),{default:w(()=>[H6,N(o,le({},{ranges:[""]}),{default:w(()=>[z6]),_:1},16)]),_:1},16)}}},K6=A(U6,[["__file","/@slidev/slides/73.md"]]),G6=t("h3",null,"Problem: Verkettung eingepackter Werte",-1),Z6=t("pre",{class:"slidev-code language-fsharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),r(" storeInDatabase "),t("span",{class:"token punctuation"},"("),r("path"),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token class-name"},"string"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token punctuation"},"("),r("content"),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token class-name"},"string"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token punctuation"},":"),r(" string option "),t("span",{class:"token operator"},"="),r()]),r(`
`),t("span",{class:"line"},[r("  "),t("span",{class:"token keyword"},"try")]),r(`
`),t("span",{class:"line"},[r("    System"),t("span",{class:"token punctuation"},"."),r("IO"),t("span",{class:"token punctuation"},"."),r("File"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"WriteAllText"),t("span",{class:"token punctuation"},"("),r("path"),t("span",{class:"token punctuation"},","),r(" content"),t("span",{class:"token punctuation"},")")]),r(`
`),t("span",{class:"line"},"    Some content"),r(`
`),t("span",{class:"line"},[r("  "),t("span",{class:"token keyword"},"with")]),r(`
`),t("span",{class:"line"},[r("    ex "),t("span",{class:"token operator"},"->"),r(" None")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),r(" stringToOption "),t("span",{class:"token punctuation"},"("),r("s"),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token class-name"},"string"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token punctuation"},":"),r(" string option "),t("span",{class:"token operator"},"=")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token keyword"},"if"),r(" String"),t("span",{class:"token punctuation"},"."),r("IsNullOrWhiteSpace s "),t("span",{class:"token keyword"},"then"),r(" None "),t("span",{class:"token keyword"},"else"),r(" Some s")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),r(" toUpper "),t("span",{class:"token punctuation"},"("),r("s"),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token class-name"},"string"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token punctuation"},":"),r(" string "),t("span",{class:"token operator"},"="),r(" s"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"ToUpper"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),r(" nonEmptyStringStoreInPersistenceAndToUpper "),t("span",{class:"token punctuation"},"("),r("path"),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token class-name"},"string"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token punctuation"},"("),r("content"),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token class-name"},"string"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token operator"},"?"),t("span",{class:"token operator"},"?"),t("span",{class:"token operator"},"?"),r(),t("span",{class:"token operator"},"=")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token keyword"},"let"),r(" nonEmpty "),t("span",{class:"token operator"},"="),r(" stringToOption content")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token comment"},'// passt nicht: "string" erwartet, aber "string option" bekommen')]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token keyword"},"let"),r(" stored "),t("span",{class:"token operator"},"="),r(" storeInDatabase path nonEmpty")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token comment"},'// passt nicht: "string option" erwartet, ')]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token comment"},'// aber "string option option" bekommen')]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token keyword"},"let"),r(" nonEmptyUpper "),t("span",{class:"token operator"},"="),r(" Option"),t("span",{class:"token punctuation"},"."),r("map toUpper stored")])])],-1),Y6={__name:"74",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/monade.md"};return C(F),(s,a)=>{const o=_e;return k(),T(q,j(L(n)),{default:w(()=>[G6,N(o,le({},{ranges:[""]}),{default:w(()=>[Z6]),_:1},16)]),_:1},16)}}},J6=A(Y6,[["__file","/@slidev/slides/74.md"]]),X6="/2023-06-dwx-fp-csharp-to-fsharp/images/Monade_1.png",Q6=t("h3",null,'Monade ("Chainable")',-1),eO=t("p",null,[t("img",{src:X6,alt:"img"})],-1),nO={__name:"75",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/monade.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[Q6,eO]),_:1},16))}},tO=A(nO,[["__file","/@slidev/slides/75.md"]]),sO=t("h3",null,'Monade ("Chainable")',-1),aO=t("ul",null,[t("li",null,'Container mit "bind" Funktion (die bestimmten Regeln folgt): "Chainable"'),t("li",null,[r("Bezeichnung in der FP-Welt: "),t("strong",null,"Monade")])],-1),rO=t("pre",{class:"slidev-code language-fsharp"},[t("code",null,[t("span",{class:"line"},[r("  bind"),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token punctuation"},"("),r("a "),t("span",{class:"token operator"},"->"),r(" M b"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token operator"},"->"),r(" M a "),t("span",{class:"token operator"},"->"),r(" M b")])])],-1),oO={__name:"76",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/monade.md"};return C(F),(s,a)=>{const o=_e;return k(),T(q,j(L(n)),{default:w(()=>[sO,aO,N(o,le({},{ranges:[""]}),{default:w(()=>[rO]),_:1},16),r(' - Andere Bezeichnungen für "bind": flatMap, SelectMany (LINQ), >>= ')]),_:1},16)}}},iO=A(oO,[["__file","/@slidev/slides/76.md"]]),lO=t("h2",null,"Verkettung",-1),cO=t("pre",{class:"slidev-code language-fsharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),r(" storeInDatabase "),t("span",{class:"token punctuation"},"("),r("path"),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token class-name"},"string"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token punctuation"},"("),r("content"),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token class-name"},"string"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token punctuation"},":"),r(" string option "),t("span",{class:"token operator"},"="),r()]),r(`
`),t("span",{class:"line"},[r("  "),t("span",{class:"token keyword"},"try")]),r(`
`),t("span",{class:"line"},[r("    System"),t("span",{class:"token punctuation"},"."),r("IO"),t("span",{class:"token punctuation"},"."),r("File"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"WriteAllText"),t("span",{class:"token punctuation"},"("),r("path"),t("span",{class:"token punctuation"},","),r(" content"),t("span",{class:"token punctuation"},")")]),r(`
`),t("span",{class:"line"},"    Some content"),r(`
`),t("span",{class:"line"},[r("  "),t("span",{class:"token keyword"},"with")]),r(`
`),t("span",{class:"line"},[r("    ex "),t("span",{class:"token operator"},"->"),r(" None")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),r(" stringToOption "),t("span",{class:"token punctuation"},"("),r("s"),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token class-name"},"string"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token punctuation"},":"),r(" string option "),t("span",{class:"token operator"},"=")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token keyword"},"if"),r(" String"),t("span",{class:"token punctuation"},"."),r("IsNullOrWhiteSpace s "),t("span",{class:"token keyword"},"then"),r(" None "),t("span",{class:"token keyword"},"else"),r(" Some s")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),r(" toUpper "),t("span",{class:"token punctuation"},"("),r("s"),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token class-name"},"string"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token punctuation"},":"),r(" string "),t("span",{class:"token operator"},"="),r(" s"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"ToUpper"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),r(" nonEmptyStringStoreInPersistenceAndToUpper "),t("span",{class:"token punctuation"},"("),r("path"),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token class-name"},"string"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token punctuation"},"("),r("content"),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token class-name"},"string"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token punctuation"},":"),r(" string option "),t("span",{class:"token operator"},"=")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token keyword"},"let"),r(" nonEmpty "),t("span",{class:"token operator"},"="),r(" stringToOption content")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token keyword"},"let"),r(" stored "),t("span",{class:"token operator"},"="),r(" Option"),t("span",{class:"token punctuation"},"."),r("bind "),t("span",{class:"token punctuation"},"("),r("storeInDatabase path"),t("span",{class:"token punctuation"},")"),r(" nonEmpty")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token keyword"},"let"),r(" nonEmptyUpper "),t("span",{class:"token operator"},"="),r(" Option"),t("span",{class:"token punctuation"},"."),r("map toUpper stored")])])],-1),uO={__name:"77",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/monade.md"};return C(F),(s,a)=>{const o=_e;return k(),T(q,j(L(n)),{default:w(()=>[lO,N(o,le({},{ranges:[""]}),{default:w(()=>[cO]),_:1},16)]),_:1},16)}}},pO=A(uO,[["__file","/@slidev/slides/77.md"]]),dO=t("h2",null,"Railway Oriented Programming",-1),fO=t("p",null,'Funktionale Programmierung wird oft als "Zusammenstecken" von Funktionen dargestellt…',-1),hO={__name:"78",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/railway.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[dO,fO]),_:1},16))}},mO=A(hO,[["__file","/@slidev/slides/78.md"]]),gO=t("p",null,"Beispiel:",-1),_O=t("pre",{class:"slidev-code language-txt"},[t("code",null,[t("span",{class:"line"},"f1: Eingabe string, Ausgabe int"),r(`
`),t("span",{class:"line"},"f1: string -> int // FP Syntax"),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},"f2: Eingabe int, Ausgabe bool"),r(`
`),t("span",{class:"line"},"f2: int -> bool // FP Syntax")])],-1),kO={__name:"79",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/railway.md"};return C(F),(s,a)=>{const o=_e;return k(),T(q,j(L(n)),{default:w(()=>[gO,N(o,le({},{ranges:[""]}),{default:w(()=>[_O]),_:1},16)]),_:1},16)}}},bO=A(kO,[["__file","/@slidev/slides/79.md"]]),vO=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"// Klassisch ===========================================================")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"int")]),r(),t("span",{class:"token function"},"F1"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"string")]),r(" s"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token operator"},"=>"),r(),t("span",{class:"token keyword"},"int"),t("span",{class:"token punctuation"},"."),r("TryParse"),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"("),r("s"),t("span",{class:"token punctuation"},","),r(),t("span",{class:"token keyword"},"out"),r(),t("span",{class:"token keyword"},"var"),r(" i"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token punctuation"},"?")]),r(" i "),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"bool")]),r(),t("span",{class:"token function"},"F2"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),r(" i"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token operator"},"=>"),r(" i "),t("span",{class:"token operator"},">"),r(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[t("span",{class:"token comment"},'// "verschachtelter" Aufruf')]),r(`
`),t("span",{class:"line"},[t("span",{class:"token function"},"F2"),t("span",{class:"token punctuation"},"("),t("span",{class:"token function"},"F1"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"1"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token comment"},"// -> true")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token function"},"F2"),t("span",{class:"token punctuation"},"("),t("span",{class:"token function"},"F1"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"0"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token comment"},"// -> false")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[t("span",{class:"token comment"},'// "composition"')]),r(`
`),t("span",{class:"line"},[t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"bool")]),r(),t("span",{class:"token function"},"F3"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"string")]),r(" s"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token operator"},"=>"),r(),t("span",{class:"token function"},"F2"),t("span",{class:"token punctuation"},"("),t("span",{class:"token function"},"F1"),t("span",{class:"token punctuation"},"("),r("s"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")])])],-1),yO=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"// Method Chaining =====================================================")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token comment"},"// mit C# extension methods")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"static"),r(),t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"int")]),r(),t("span",{class:"token function"},"F1"),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"this"),r(),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"string")]),r(" s"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token operator"},"=>"),r(),t("span",{class:"token keyword"},"int"),t("span",{class:"token punctuation"},"."),r("TryParse"),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"("),r("s"),t("span",{class:"token punctuation"},","),r(),t("span",{class:"token keyword"},"out"),r(),t("span",{class:"token keyword"},"var"),r(" i"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token punctuation"},"?")]),r(" i "),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"static"),r(),t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"bool")]),r(),t("span",{class:"token function"},"F2"),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"this"),r(),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),r(" i"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token operator"},"=>"),r(" i "),t("span",{class:"token operator"},">"),r(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[t("span",{class:"token comment"},"// Lesbarer (erst F1, dann F2)")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token string"},'"1"'),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"F1"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"F2"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token comment"},"// ->true")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token string"},'"0"'),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"F1"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"F2"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token comment"},"// ->false")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[t("span",{class:"token comment"},"// Lesbarer (erst F1, dann F2)")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token return-type class-name"},[t("span",{class:"token keyword"},"bool")]),r(),t("span",{class:"token function"},"F3"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"string")]),r(" s"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token operator"},"=>"),r(" s"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"F1"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"F2"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")])])],-1),wO={__name:"80",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/railway.md"};return C(F),(s,a)=>{const o=_e;return k(),T(q,j(L(n)),{default:w(()=>[N(o,le({},{ranges:[""]}),{default:w(()=>[vO]),_:1},16),N(o,le({},{ranges:[""]}),{default:w(()=>[yO]),_:1},16)]),_:1},16)}}},SO=A(wO,[["__file","/@slidev/slides/80.md"]]),xO=t("p",null,"Problem: Keine standardisierte Strategie für Fehlerbehandlung",-1),EO={__name:"81",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/railway.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[xO]),_:1},16))}},CO=A(EO,[["__file","/@slidev/slides/81.md"]]),$O=t("ul",null,[t("li",null,[r("Wenn wir davon ausgehen, dass Funktionen auch einen Fehlerfall haben, benötigen wir einen "),t("strong",null,"neuen Datentyp"),r(", der das abbilden kann")])],-1),PO={__name:"82",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/railway.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[$O]),_:1},16))}},OO=A(PO,[["__file","/@slidev/slides/82.md"]]),TO=t("h4",null,"Result/Either",-1),FO=t("ul",null,[t("li",null,[r("kann entweder "),t("ul",null,[t("li",null,"das Ergebnis beinhalten, oder"),t("li",null,"einen Fehlerfall")])])],-1),AO={__name:"83",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/railway.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[TO,FO]),_:1},16))}},MO=A(AO,[["__file","/@slidev/slides/83.md"]]),IO=t("ul",null,[t("li",null,'In Railway-Sprech bedeutet dass, dass man "zweigleisig" fährt:'),t("li",null,[r("Jede "),t("strong",null,"Funktion"),r(" bekommt eine Eingabe, und "),t("ul",null,[t("li",null,[r('hat "im Bauch" eine Weiche, die entscheidet ob '),t("ul",null,[t("li",null,"auf das Fehlergleis oder"),t("li",null,"auf das Erfolgsgleis umgeschaltet wird.")])])])]),t("li",null,[r("Die Wrapperklasse mit der "),t("strong",null,"Funktion"),r(" ist das Entscheidende!")])],-1),NO={__name:"84",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/railway.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[IO]),_:1},16))}},DO=A(NO,[["__file","/@slidev/slides/84.md"]]),LO="/2023-06-dwx-fp-csharp-to-fsharp/images/rop-tracks-Page-2.png",jO=t("ul",null,[t("li",null,"In anderen Worten: die Funktionen haben aktuell 1 Eingabe (1 Gleis), und 2 Ausgaben (2 Gleise)")],-1),RO=t("p",null,[t("img",{class:"absolute bottom-50 left-10 w-200",src:LO})],-1),BO={__name:"85",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/railway.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[jO,RO]),_:1},16))}},qO=A(BO,[["__file","/@slidev/slides/85.md"]]),WO="/2023-06-dwx-fp-csharp-to-fsharp/images/rop-tracks-Page-4.png",VO=t("ul",null,[t("li",null,"Man benötigt also einen Mechanismus, der eine 2-gleisige Ausgabe so umwandelt, dass eine Funktion, die eine 1-gleisige Eingabe erwartet, damit umgehen kann")],-1),HO=t("p",null,[t("img",{class:"absolute bottom-10 left-20 w-180",src:WO})],-1),zO={__name:"86",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/railway.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[VO,HO]),_:1},16))}},UO=A(zO,[["__file","/@slidev/slides/86.md"]]),KO=t("h4",null,"Was muss dieser Mechanismus können?",-1),GO=t("ul",null,[t("li",null,"wenn die Eingabe fehlerhaft ist, muss die Funktion nichts tun, und kann den Fehler weiterreichen"),t("li",null,"wenn die Eingabe nicht fehlerhaft ist, wird der Wert an die Funktion gegeben")],-1),ZO={__name:"87",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/railway.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[KO,GO]),_:1},16))}},YO=A(ZO,[["__file","/@slidev/slides/87.md"]]),JO=t("pre",{class:"slidev-code language-haskell"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token hvariable"},"bind"),t("span",{class:"token operator"},":"),r(),t("span",{class:"token punctuation"},"("),t("span",{class:"token hvariable"},"string"),r(),t("span",{class:"token operator"},"->"),r(),t("span",{class:"token constant"},"Result"),r(),t("span",{class:"token hvariable"},"int"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token operator"},"->"),r(),t("span",{class:"token constant"},"Result"),r(),t("span",{class:"token hvariable"},"string"),r(),t("span",{class:"token operator"},"->"),r(),t("span",{class:"token constant"},"Result"),r(),t("span",{class:"token hvariable"},"int")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[t("span",{class:"token hvariable"},"bind"),t("span",{class:"token operator"},":"),r(),t("span",{class:"token punctuation"},"("),t("span",{class:"token hvariable"},"a"),r(),t("span",{class:"token operator"},"->"),r(),t("span",{class:"token constant"},"M"),r(),t("span",{class:"token hvariable"},"b"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token operator"},"->"),r(),t("span",{class:"token constant"},"M"),r(),t("span",{class:"token hvariable"},"a"),r(),t("span",{class:"token operator"},"->"),r(),t("span",{class:"token constant"},"M"),r(),t("span",{class:"token hvariable"},"b")])])],-1),XO=t("ul",null,[t("li",null,[r("FP-Jargon: eine Wrapper-Klasse, die "),t("code",null,"bind"),r(" bereitstellt, wird "),t("strong",null,"Monade"),r(" genannt (sehr stark vereinfacht!).")])],-1),QO={__name:"88",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/railway.md"};return C(F),(s,a)=>{const o=_e;return k(),T(q,j(L(n)),{default:w(()=>[N(o,le({},{ranges:[""]}),{default:w(()=>[JO]),_:1},16),XO]),_:1},16)}}},eT=A(QO,[["__file","/@slidev/slides/88.md"]]),nT=t("ul",null,[t("li",null,[t("code",null,"Either"),r(" besteht aus zwei Teilen "),t("ul",null,[t("li",null,[t("code",null,"Left")]),t("li",null,[t("code",null,"Right"),r(' ("richtig"…)')])])]),t("li",null,[t("code",null,"Result"),r(" besteht aus zwei Teilen "),t("ul",null,[t("li",null,[t("code",null,"Failure")]),t("li",null,[t("code",null,"Success")])])])],-1),tT={__name:"89",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/railway.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[nT]),_:1},16))}},sT=A(tT,[["__file","/@slidev/slides/89.md"]]),aT=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token return-type class-name"},[r("Option"),t("span",{class:"token punctuation"},"<"),t("span",{class:"token keyword"},"string"),t("span",{class:"token punctuation"},">")]),r(),t("span",{class:"token function"},"IsValidOpt"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"string")]),r(" s"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token operator"},"=>")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token keyword"},"string"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"IsNullOrEmpty"),t("span",{class:"token punctuation"},"("),r("s"),t("span",{class:"token punctuation"},")")]),r(`
`),t("span",{class:"line"},[r("        "),t("span",{class:"token punctuation"},"?"),r(" None")]),r(`
`),t("span",{class:"line"},[r("        "),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token function"},"Some"),t("span",{class:"token punctuation"},"("),r("s"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")])])],-1),rT=t("ul",null,[t("li",null,[t("code",null,"Option"),r(" hat "),t("code",null,"Some(T)"),r(" und "),t("code",null,"None")]),t("li",null,[t("code",null,"Either"),r("/"),t("code",null,"Result"),r(" ist ähnlich zu "),t("code",null,"Option")]),t("li",null,[t("code",null,"None"),r(" wird durch "),t("code",null,"Failure"),r("/"),t("code",null,"Left"),r(" ersetzt (frei wählbar, z.B. selbst definierter Error Typ).")])],-1),oT=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token return-type class-name"},[r("Either"),t("span",{class:"token punctuation"},"<"),t("span",{class:"token keyword"},"string"),t("span",{class:"token punctuation"},","),r(),t("span",{class:"token keyword"},"string"),t("span",{class:"token punctuation"},">")]),r(),t("span",{class:"token function"},"IsValidEither"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"string")]),r(" s"),t("span",{class:"token punctuation"},")")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token operator"},"=>"),r(),t("span",{class:"token keyword"},"string"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"IsNullOrEmpty"),t("span",{class:"token punctuation"},"("),r("s"),t("span",{class:"token punctuation"},")")]),r(`
`),t("span",{class:"line"},[r("        "),t("span",{class:"token punctuation"},"?"),r(),t("span",{class:"token punctuation"},"("),r("Either"),t("span",{class:"token operator"},"<"),t("span",{class:"token keyword"},"string"),t("span",{class:"token punctuation"},","),r(),t("span",{class:"token keyword"},"string"),t("span",{class:"token operator"},">"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token function"},"Left"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"ups"'),t("span",{class:"token punctuation"},")")]),r(`
`),t("span",{class:"line"},[r("        "),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token function"},"Right"),t("span",{class:"token punctuation"},"("),r("s"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")])])],-1),iT={__name:"90",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/railway.md"};return C(F),(s,a)=>{const o=_e;return k(),T(q,j(L(n)),{default:w(()=>[N(o,le({},{ranges:[""]}),{default:w(()=>[aT]),_:1},16),rT,N(o,le({},{ranges:[""]}),{default:w(()=>[oT]),_:1},16)]),_:1},16)}}},lT=A(iT,[["__file","/@slidev/slides/90.md"]]),cT=t("h3",null,"Problem: Funktion mit mehreren eingepackten Parametern",-1),uT=t("pre",{class:"slidev-code language-fsharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),r(" add "),t("span",{class:"token punctuation"},"("),r("a"),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token class-name"},"int"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token punctuation"},"("),r("b"),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token class-name"},"int"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token punctuation"},":"),r(" int "),t("span",{class:"token operator"},"="),r(" a "),t("span",{class:"token operator"},"+"),r(" b")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),r(" onlyPositive "),t("span",{class:"token punctuation"},"("),r("i"),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token class-name"},"int"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token punctuation"},":"),r(" int option "),t("span",{class:"token operator"},"=")]),r(`
`),t("span",{class:"line"},[r("  "),t("span",{class:"token keyword"},"if"),r(" i "),t("span",{class:"token operator"},">"),r(),t("span",{class:"token number"},"0"),r(),t("span",{class:"token keyword"},"then")]),r(`
`),t("span",{class:"line"},"    Some i"),r(`
`),t("span",{class:"line"},[r("  "),t("span",{class:"token keyword"},"else")]),r(`
`),t("span",{class:"line"},"    None"),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),r(" addTwoNumbers "),t("span",{class:"token punctuation"},"("),r("a"),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token class-name"},"int"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token punctuation"},"("),r("b"),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token class-name"},"int"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token punctuation"},":"),r(" int option "),t("span",{class:"token operator"},"=")]),r(`
`),t("span",{class:"line"},[r("  "),t("span",{class:"token keyword"},"let"),r(" positiveA "),t("span",{class:"token operator"},"="),r(" onlyPositive a")]),r(`
`),t("span",{class:"line"},[r("  "),t("span",{class:"token keyword"},"let"),r(" positiveB "),t("span",{class:"token operator"},"="),r(" onlyPositive b")]),r(`
`),t("span",{class:"line"},[r("  "),t("span",{class:"token comment"},"// passt nicht, 2x int erwartet, aber 2x int option übergeben")]),r(`
`),t("span",{class:"line"},[r("  "),t("span",{class:"token keyword"},"let"),r(" sum "),t("span",{class:"token operator"},"="),r(" add positiveA positiveB")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[r("  "),t("span",{class:"token comment"},"// für zwei (und drei) in F# bereits vordefiniert:")]),r(`
`),t("span",{class:"line"},[r("  "),t("span",{class:"token keyword"},"let"),r(" sum "),t("span",{class:"token operator"},"="),r(" Option"),t("span",{class:"token punctuation"},"."),r("map2 add positiveA positiveB")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[r("  "),t("span",{class:"token comment"},"// aber was, wenn man mehr Parameter hat?")])])],-1),pT={__name:"91",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/applicative.md"};return C(F),(s,a)=>{const o=_e;return k(),T(q,j(L(n)),{default:w(()=>[cT,N(o,le({},{ranges:[""]}),{default:w(()=>[uT]),_:1},16)]),_:1},16)}}},dT=A(pT,[["__file","/@slidev/slides/91.md"]]),fT="/2023-06-dwx-fp-csharp-to-fsharp/images/Applicative_1_small.png",hT=t("h3",null,"Applicative",-1),mT=t("p",null,[t("img",{class:"absolute bottom-10 right-10 w-150",src:fT})],-1),gT={__name:"92",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/applicative.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[hT,mT]),_:1},16))}},_T=A(gT,[["__file","/@slidev/slides/92.md"]]),kT=t("h3",null,"Applicative",-1),bT=t("ul",null,[t("li",null,'Container mit "apply" Funktion (die bestimmten Regeln folgt): Applicative'),t("li",null,[r("Bezeichnung in der FP-Welt: "),t("strong",null,"Applicative Functor")])],-1),vT=t("pre",{class:"slidev-code language-fsharp"},[t("code",null,[t("span",{class:"line"},[r("  apply"),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token class-name"},"AF"),r(),t("span",{class:"token punctuation"},"("),r("a "),t("span",{class:"token operator"},"->"),r(" b"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token operator"},"->"),r(" AF a "),t("span",{class:"token operator"},"->"),r(" AF b")])])],-1),yT=t("ul",null,[t("li",null,'Andere Bezeichnungen für "apply": ap, <*>')],-1),wT={__name:"93",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/applicative.md"};return C(F),(s,a)=>{const o=_e;return k(),T(q,j(L(n)),{default:w(()=>[kT,bT,N(o,le({},{ranges:[""]}),{default:w(()=>[vT]),_:1},16),yT]),_:1},16)}}},ST=A(wT,[["__file","/@slidev/slides/93.md"]]),xT=t("h3",null,"Funktion mit mehreren Parametern",-1),ET=t("pre",{class:"slidev-code language-fsharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"// F#")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),r(" sum "),t("span",{class:"token punctuation"},"("),r("a"),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token class-name"},"int"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token punctuation"},"("),r("b"),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token class-name"},"int"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token punctuation"},"("),r("c"),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token class-name"},"int"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token punctuation"},":"),r(" int "),t("span",{class:"token operator"},"="),r(" a "),t("span",{class:"token operator"},"+"),r(" b "),t("span",{class:"token operator"},"+"),r(" c")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),r(" onlyPositive "),t("span",{class:"token punctuation"},"("),r("i"),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token class-name"},"int"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token punctuation"},":"),r(" int option "),t("span",{class:"token operator"},"=")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token keyword"},"if"),r(" i "),t("span",{class:"token operator"},">"),r(),t("span",{class:"token number"},"0"),r(),t("span",{class:"token keyword"},"then"),r(" Some i")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token keyword"},"else"),r(" None")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),r(" addNumbers "),t("span",{class:"token punctuation"},"("),r("a"),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token class-name"},"int"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token punctuation"},"("),r("b"),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token class-name"},"int"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token punctuation"},"("),r("c"),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token class-name"},"int"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token punctuation"},":"),r(" int option "),t("span",{class:"token operator"},"=")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token keyword"},"let"),r(" positiveA "),t("span",{class:"token operator"},"="),r(" onlyPositive a")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token keyword"},"let"),r(" positiveB "),t("span",{class:"token operator"},"="),r(" onlyPositive b")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token keyword"},"let"),r(" positiveC "),t("span",{class:"token operator"},"="),r(" onlyPositive c")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token comment"},"// sum ist vom Typ: (int -> int -> int -> int)")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token comment"},"// jede Zeile füllt ein Argument mehr aus")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token comment"},"// (Partial Application dank Currying)")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token keyword"},"let"),r(),t("span",{class:"token punctuation"},"("),r("sum' "),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token punctuation"},"("),r("int "),t("span",{class:"token operator"},"->"),r(" int "),t("span",{class:"token operator"},"->"),r(" int"),t("span",{class:"token punctuation"},")"),r(" option"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token operator"},"="),r(" Option"),t("span",{class:"token punctuation"},"."),r("map sum positiveA")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token keyword"},"let"),r(),t("span",{class:"token punctuation"},"("),r("sum'' "),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token punctuation"},"("),r("int "),t("span",{class:"token operator"},"->"),r(" int"),t("span",{class:"token punctuation"},")"),r(" option"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token operator"},"="),r(" Option"),t("span",{class:"token punctuation"},"."),r("apply sum' positiveB")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token keyword"},"let"),r(),t("span",{class:"token punctuation"},"("),r("sum''' "),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token punctuation"},"("),r("int"),t("span",{class:"token punctuation"},")"),r(" option"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token operator"},"="),r(" Option"),t("span",{class:"token punctuation"},"."),r("apply sum'' positiveC")])])],-1),CT={__name:"94",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/applicative.md"};return C(F),(s,a)=>{const o=_e;return k(),T(q,j(L(n)),{default:w(()=>[xT,N(o,le({},{ranges:[""]}),{default:w(()=>[ET]),_:1},16)]),_:1},16)}}},$T=A(CT,[["__file","/@slidev/slides/94.md"]]),PT=t("h3",null,"Funktion mit mehreren Parametern",-1),OT=t("pre",{class:"slidev-code language-csharp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"// C#")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token class-name"},[r("Func"),t("span",{class:"token punctuation"},"<"),t("span",{class:"token keyword"},"int"),t("span",{class:"token punctuation"},","),r(),t("span",{class:"token keyword"},"int"),t("span",{class:"token punctuation"},","),r(),t("span",{class:"token keyword"},"int"),t("span",{class:"token punctuation"},","),r(),t("span",{class:"token keyword"},"int"),t("span",{class:"token punctuation"},">")]),r(" sum "),t("span",{class:"token operator"},"="),r(),t("span",{class:"token punctuation"},"("),r("a"),t("span",{class:"token punctuation"},","),r(" b"),t("span",{class:"token punctuation"},","),r(" c"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token operator"},"=>"),r(" a "),t("span",{class:"token operator"},"+"),r(" b "),t("span",{class:"token operator"},"+"),r(" c"),t("span",{class:"token punctuation"},";")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[t("span",{class:"token class-name"},[r("Func"),t("span",{class:"token punctuation"},"<"),t("span",{class:"token keyword"},"int"),t("span",{class:"token punctuation"},","),r(" Validation"),t("span",{class:"token punctuation"},"<"),t("span",{class:"token keyword"},"int"),t("span",{class:"token punctuation"},">"),t("span",{class:"token punctuation"},">")]),r(" onlyPositive "),t("span",{class:"token operator"},"="),r(" i")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token operator"},"=>"),r(" i "),t("span",{class:"token operator"},">"),r(),t("span",{class:"token number"},"0")]),r(`
`),t("span",{class:"line"},[r("        "),t("span",{class:"token punctuation"},"?"),r(),t("span",{class:"token function"},"Valid"),t("span",{class:"token punctuation"},"("),r("i"),t("span",{class:"token punctuation"},")")]),r(`
`),t("span",{class:"line"},[r("        "),t("span",{class:"token punctuation"},":"),r(),t("span",{class:"token function"},"Error"),t("span",{class:"token punctuation"},"("),t("span",{class:"token interpolation-string"},[t("span",{class:"token string"},'$"Number '),t("span",{class:"token interpolation"},[t("span",{class:"token punctuation"},"{"),t("span",{class:"token expression language-csharp"},"i"),t("span",{class:"token punctuation"},"}")]),t("span",{class:"token string"},' is not positive."')]),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[t("span",{class:"token return-type class-name"},[r("Validation"),t("span",{class:"token punctuation"},"<"),t("span",{class:"token keyword"},"int"),t("span",{class:"token punctuation"},">")]),r(),t("span",{class:"token function"},"AddNumbers"),t("span",{class:"token punctuation"},"("),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),r(" a"),t("span",{class:"token punctuation"},","),r(),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),r(" b"),t("span",{class:"token punctuation"},","),r(),t("span",{class:"token class-name"},[t("span",{class:"token keyword"},"int")]),r(" c"),t("span",{class:"token punctuation"},")"),r(),t("span",{class:"token punctuation"},"{")]),r(`
`),t("span",{class:"line"},[r("    "),t("span",{class:"token keyword"},"return"),r(),t("span",{class:"token function"},"Valid"),t("span",{class:"token punctuation"},"("),r("sum"),t("span",{class:"token punctuation"},")"),r("              "),t("span",{class:"token comment"},"// returns int -> int -> int -> int")]),r(`
`),t("span",{class:"line"},[r("        "),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"Apply"),t("span",{class:"token punctuation"},"("),t("span",{class:"token function"},"onlyPositive"),t("span",{class:"token punctuation"},"("),r("a"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),r("    "),t("span",{class:"token comment"},"// returns int -> int -> int")]),r(`
`),t("span",{class:"line"},[r("        "),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"Apply"),t("span",{class:"token punctuation"},"("),t("span",{class:"token function"},"onlyPositive"),t("span",{class:"token punctuation"},"("),r("b"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),r("    "),t("span",{class:"token comment"},"// returns int -> int")]),r(`
`),t("span",{class:"line"},[r("        "),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"Apply"),t("span",{class:"token punctuation"},"("),t("span",{class:"token function"},"onlyPositive"),t("span",{class:"token punctuation"},"("),r("c"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),r("   "),t("span",{class:"token comment"},"// returns int")]),r(`
`),t("span",{class:"line"}),r(`
`),t("span",{class:"line"},[t("span",{class:"token function"},"AddNumbers"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),r(),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},","),r(),t("span",{class:"token number"},"3"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),r("    "),t("span",{class:"token comment"},"// --> Valid(6)")]),r(`
`),t("span",{class:"line"},[t("span",{class:"token function"},"AddNumbers"),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"-"),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),r(),t("span",{class:"token operator"},"-"),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},","),r(),t("span",{class:"token operator"},"-"),t("span",{class:"token number"},"3"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),r(),t("span",{class:"token comment"},"// --> [")]),r(`
`),t("span",{class:"line"},[r("                        "),t("span",{class:"token comment"},'// Error("Number -1 is not positive"),')]),r(`
`),t("span",{class:"line"},[r("                        "),t("span",{class:"token comment"},'// Error("Number -2 is not positive"),')]),r(`
`),t("span",{class:"line"},[r("                        "),t("span",{class:"token comment"},'// Error("Number -3 is not positive")')]),r(`
`),t("span",{class:"line"},[r("                        "),t("span",{class:"token comment"},"// ]")])])],-1),TT={__name:"95",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/applicative.md"};return C(F),(s,a)=>{const o=_e;return k(),T(q,j(L(n)),{default:w(()=>[PT,N(o,le({},{ranges:[""]}),{default:w(()=>[OT]),_:1},16)]),_:1},16)}}},FT=A(TT,[["__file","/@slidev/slides/95.md"]]),AT="/2023-06-dwx-fp-csharp-to-fsharp/images/BusConf.png",MT=t("h3",null,"Veranstaltungen: BusConf",-1),IT=t("ul",null,[t("li",null,[t("a",{href:"https://www.bus-conf.org/",target:"_blank",rel:"noopener"},"https://www.bus-conf.org/")])],-1),NT=t("p",null,[t("img",{class:"absolute top-10 right-10 w-120",src:AT})],-1),DT={__name:"96",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/veranstaltungen.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[MT,IT,NT]),_:1},16))}},LT=A(DT,[["__file","/@slidev/slides/96.md"]]),jT="/2023-06-dwx-fp-csharp-to-fsharp/images/LambdaLounge.png",RT=t("h3",null,"Veranstaltungen: Lambda Lounge Nürnberg",-1),BT=t("ul",null,[t("li",null,[t("a",{href:"https://www.meetup.com/de-DE/Lambda-Lounge-Funktionale-Programmierung-Nurnberg/",target:"_blank",rel:"noopener"},"https://www.meetup.com/de-DE/Lambda-Lounge-Funktionale-Programmierung-Nurnberg/")])],-1),qT=t("p",null,[t("img",{class:"absolute bottom-10 right-10 w-110",src:jT})],-1),WT={__name:"97",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/veranstaltungen.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[RT,BT,qT]),_:1},16))}},VT=A(WT,[["__file","/@slidev/slides/97.md"]]),HT="/2023-06-dwx-fp-csharp-to-fsharp/images/Softwerkskammer.png",zT=t("h3",null,"Veranstaltungen: Softwerkskammer",-1),UT=t("ul",null,[t("li",null,[t("a",{href:"https://www.softwerkskammer.org/groups/magdeburg",target:"_blank",rel:"noopener"},"https://www.softwerkskammer.org/groups/magdeburg")])],-1),KT=t("p",null,[t("img",{class:"absolute top-10 right-10 w-90",src:HT})],-1),GT={__name:"98",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/veranstaltungen.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[zT,UT,KT]),_:1},16))}},ZT=A(GT,[["__file","/@slidev/slides/98.md"]]),YT=t("h2",null,"F# in bestehendes Projekt integrieren",-1),JT={__name:"99",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/introducing_fsharp.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[YT]),_:1},16))}},XT=A(JT,[["__file","/@slidev/slides/99.md"]]),QT="/2023-06-dwx-fp-csharp-to-fsharp/images/FsUnit.png",eF=t("h3",null,"Tests",-1),nF=t("ul",null,[t("li",null,[t("a",{href:"https://github.com/fsprojects/FsUnit",target:"_blank",rel:"noopener"},"FsUnit"),r(" für lesbarere Tests")])],-1),tF=t("p",null,[t("img",{class:"absolute top-35 left-20 w-200",src:QT})],-1),sF={__name:"100",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/introducing_fsharp.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[eF,nF,tF]),_:1},16))}},aF=A(sF,[["__file","/@slidev/slides/100.md"]]),rF="/2023-06-dwx-fp-csharp-to-fsharp/images/FsCheck.png",oF=t("h3",null,"Tests",-1),iF=t("ul",null,[t("li",null,[t("a",{href:"https://fscheck.github.io/FsCheck/",target:"_blank",rel:"noopener"},"FsCheck"),r(" für Property Based Testing")])],-1),lF=t("p",null,[t("img",{class:"absolute top-35 left-20 w-200",src:rF})],-1),cF={__name:"101",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/introducing_fsharp.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[oF,iF,lF]),_:1},16))}},uF=A(cF,[["__file","/@slidev/slides/101.md"]]),pF="/2023-06-dwx-fp-csharp-to-fsharp/images/Unquote.png",dF=t("h3",null,"Tests",-1),fF=t("ul",null,[t("li",null,[t("a",{href:"https://github.com/SwensenSoftware/unquote",target:"_blank",rel:"noopener"},"Unquote"),r(' für besseren "Callstack" bei fehlschlagenden Tests')])],-1),hF=t("p",null,[t("img",{class:"absolute top-35 left-20 w-200",src:pF})],-1),mF={__name:"102",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/introducing_fsharp.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[dF,fF,hF]),_:1},16))}},gF=A(mF,[["__file","/@slidev/slides/102.md"]]),_F="/2023-06-dwx-fp-csharp-to-fsharp/images/FAKE.png",kF=t("h3",null,"Builds",-1),bF=t("ul",null,[t("li",null,[t("a",{href:"https://fake.build/",target:"_blank",rel:"noopener"},"FAKE"),r(" als erweiterbare DSL für Build-Tasks")])],-1),vF=t("p",null,[t("img",{class:"absolute top-35 left-20 w-200",src:_F})],-1),yF={__name:"103",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/introducing_fsharp.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[kF,bF,vF]),_:1},16))}},wF=A(yF,[["__file","/@slidev/slides/103.md"]]),SF="/2023-06-dwx-fp-csharp-to-fsharp/images/Paket.png",xF=t("h3",null,"Builds",-1),EF=t("ul",null,[t("li",null,[t("a",{href:"https://github.com/fsprojects/Paket",target:"_blank",rel:"noopener"},"Paket"),r(" als Alternative zu Nuget")])],-1),CF=t("p",null,[t("img",{class:"absolute top-35 left-20 w-200",src:SF})],-1),$F={__name:"104",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/introducing_fsharp.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[xF,EF,CF]),_:1},16))}},PF=A($F,[["__file","/@slidev/slides/104.md"]]),OF="/2023-06-dwx-fp-csharp-to-fsharp/images/Farmer.png",TF=t("h3",null,"Builds",-1),FF=t("ul",null,[t("li",null,[t("a",{href:"https://compositionalit.github.io/farmer/",target:"_blank",rel:"noopener"},"Farmer"),r(": Making repeatable Azure deployments easy!")])],-1),AF=t("p",null,[t("img",{class:"absolute top-35 left-20 w-120",src:OF})],-1),MF={__name:"105",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/introducing_fsharp.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[TF,FF,AF]),_:1},16))}},IF=A(MF,[["__file","/@slidev/slides/105.md"]]),NF="/2023-06-dwx-fp-csharp-to-fsharp/images/Fable.png",DF=t("h2",null,"Web",-1),LF=t("ul",null,[t("li",null,[r("Webseiten mit "),t("a",{href:"https://fable.io/",target:"_blank",rel:"noopener"},"Fable")])],-1),jF=t("p",null,[t("img",{class:"absolute top-45 left-40 w-130",src:NF})],-1),RF={__name:"106",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/introducing_fsharp.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[DF,LF,jF]),_:1},16))}},BF=A(RF,[["__file","/@slidev/slides/106.md"]]),qF="/2023-06-dwx-fp-csharp-to-fsharp/images/Fabulous.png",WF=t("h2",null,"Web",-1),VF=t("ul",null,[t("li",null,[r("Mobile Apps mit "),t("a",{href:"https://fabulous.dev/",target:"_blank",rel:"noopener"},"Fabulous"),r(" (Xamarin)")])],-1),HF=t("p",null,[t("img",{class:"absolute top-45 left-20 w-150",src:qF})],-1),zF={__name:"107",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/introducing_fsharp.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[WF,VF,HF]),_:1},16))}},UF=A(zF,[["__file","/@slidev/slides/107.md"]]),KF="/2023-06-dwx-fp-csharp-to-fsharp/images/SAFE.png",GF=t("h2",null,"Web",-1),ZF=t("ul",null,[t("li",null,"Full-Stack-Webanwendungen mit dem SAFE-Stack")],-1),YF=t("p",null,[t("img",{class:"absolute top-45 left-20 w-180",src:KF})],-1),JF={__name:"108",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/introducing_fsharp.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[GF,ZF,YF]),_:1},16))}},XF=A(JF,[["__file","/@slidev/slides/108.md"]]),QF=t("h1",null,"Fazit",-1),e4=t("ul",null,[t("li",null,"Konzepte der Funktionalen Programmierung halten in mehr und mehr Programmiersprachen Einzug"),t("li",null,'Ideen der Funktionalen Programmierung können auch "nicht-funktionalen" Code verbessern'),t("li",null,"Zusätzliches Werkzeug im Werkzeugkasten")],-1),n4=t("h3",null,"Die Beschäftigung damit lohnt sich!",-1),t4={__name:"109",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/99-exit.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[QF,e4,n4]),_:1},16))}},s4=A(t4,[["__file","/@slidev/slides/109.md"]]),a4=t("h1",null,"Danke",-1),r4={__name:"110",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/99-exit.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[a4]),_:1},16))}},o4=A(r4,[["__file","/@slidev/slides/110.md"]]),i4=t("h2",null,"Ressourcen",-1),l4=t("ul",null,[t("li",null,[r("FP "),t("ul",null,[t("li",null,[r("Blog: "),t("a",{href:"https://blog.ploeh.dk/",target:"_blank",rel:"noopener"},"Mark Seeman")]),t("li",null,[r("Book: "),t("a",{href:"https://pragprog.com/book/swdddf/domain-modeling-made-functional",target:"_blank",rel:"noopener"},"Domain Modeling Made Functional")]),t("li",null,[r("Book: "),t("a",{href:"https://www.manning.com/books/grokking-simplicity",target:"_blank",rel:"noopener"},"Grokking Simplicity")])])]),t("li",null,[r("C# "),t("ul",null,[t("li",null,[r("Book: "),t("a",{href:"https://www.manning.com/books/functional-programming-in-c-sharp",target:"_blank",rel:"noopener"},"Functional Programming in C#")]),t("li",null,[r("Blog: "),t("a",{href:"https://enterprisecraftsmanship.com/",target:"_blank",rel:"noopener"},"Vladimir Khorikov")])])]),t("li",null,[r("F# "),t("ul",null,[t("li",null,[t("a",{href:"https://fsharp.org/",target:"_blank",rel:"noopener"},"F# Homepage")]),t("li",null,[t("a",{href:"https://fsharpforfunandprofit.com/",target:"_blank",rel:"noopener"},"F# for Fun and Profit")]),t("li",null,[t("a",{href:"https://fsharpforfunandprofit.com/rop/",target:"_blank",rel:"noopener"},"Railway Oriented Programming")])])])],-1),c4={__name:"111",setup(e){const n={layout:"default-with-footer",srcSequence:"./pages/99-exit.md"};return C(F),(s,a)=>(k(),T(q,j(L(n)),{default:w(()=>[i4,l4]),_:1},16))}},u4=A(c4,[["__file","/@slidev/slides/111.md"]]),p4={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},d4=t("path",{fill:"#0A66C2",d:"M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4c-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009c-.002-12.157 9.851-22.014 22.008-22.016c12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"},null,-1),f4=[d4];function h4(e,n){return k(),ee("svg",p4,f4)}const m4={name:"logos-linkedin-icon",render:h4},g4={class:"slidev-icon",viewBox:"0 0 256 274",width:"1.2em",height:"1.2em"},_4=t("path",{fill:"#3088D4",d:"M249.874 164.085c-3.753 19.307-33.613 40.438-67.908 44.533c-17.883 2.134-35.49 4.095-54.266 3.234c-30.705-1.407-54.933-7.33-54.933-7.33c0 2.99.184 5.836.553 8.498c3.992 30.302 30.047 32.118 54.728 32.964c24.912.852 47.094-6.142 47.094-6.142l1.023 22.521s-17.425 9.357-48.465 11.078c-17.116.94-38.369-.43-63.122-6.983c-53.686-14.21-62.92-71.436-64.332-129.502c-.43-17.24-.165-33.497-.165-47.094c0-59.375 38.903-76.779 38.903-76.779C58.6 4.074 92.259.286 127.25 0h.86c34.991.286 68.673 4.074 88.287 13.083c0 0 38.901 17.404 38.901 76.78c0 0 .488 43.807-5.425 74.222"},null,-1),k4=t("path",{fill:"#FFF",d:"M209.413 94.469v71.894H180.93V96.582c0-14.71-6.19-22.176-18.57-22.176c-13.687 0-20.547 8.857-20.547 26.37v38.195h-28.315v-38.195c0-17.513-6.862-26.37-20.55-26.37c-12.379 0-18.568 7.466-18.568 22.176v69.78H45.897V94.47c0-14.694 3.741-26.37 11.256-35.009c7.75-8.638 17.898-13.066 30.496-13.066c14.575 0 25.613 5.602 32.911 16.808l7.095 11.893l7.096-11.893c7.296-11.206 18.334-16.808 32.911-16.808c12.597 0 22.745 4.428 30.496 13.066c7.513 8.639 11.255 20.315 11.255 35.009"},null,-1),b4=[_4,k4];function v4(e,n){return k(),ee("svg",g4,b4)}const y4={name:"logos-mastodon-icon",render:v4},w4={class:"slidev-icon",viewBox:"0 0 256 209",width:"1.2em",height:"1.2em"},S4=t("path",{fill:"#55acee",d:"M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52c0 4.117.465 8.125 1.36 11.97c-43.65-2.191-82.35-23.1-108.255-54.876c-4.52 7.757-7.11 16.78-7.11 26.404c0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661c0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475c-17.975 14.086-40.622 22.483-65.228 22.483c-4.24 0-8.42-.249-12.529-.734c23.243 14.902 50.85 23.597 80.51 23.597c96.607 0 149.434-80.031 149.434-149.435c0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"},null,-1),x4=[S4];function E4(e,n){return k(),ee("svg",w4,x4)}const C4={name:"logos-twitter",render:E4},$4={class:"slidev-icon",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},P4=t("path",{fill:"currentColor",d:"M16.36 14c.08-.66.14-1.32.14-2c0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2c0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2c0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.923 7.923 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2c0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.65 15.65 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"},null,-1),O4=[P4];function T4(e,n){return k(),ee("svg",$4,O4)}const F4={name:"mdi-web",render:T4},A4={class:"slidev-icon",viewBox:"0 0 256 250",width:"1.2em",height:"1.2em"},M4=t("path",{fill:"#161614",d:"M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39c-.929-.417-1.45-1.284-1.15-1.922c.276-.655 1.279-.838 2.205-.399c.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591c-.837-.892-.994-2.086-.375-2.66c.63-.566 1.787-.301 2.626.591c.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104c-.784-1.138-.784-2.503.017-3.05c.795-.547 2.058-.055 2.861 1.075c.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49c-1.119-1.032-1.43-2.496-.726-3.27c.71-.776 2.213-.558 3.315.49c1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033c-1.448-.439-2.395-1.613-2.103-2.626c.301-1.01 1.747-1.484 3.207-1.028c1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95c-1.53.034-2.769-.82-2.786-1.86c0-1.065 1.202-1.932 2.733-1.958c1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37c-1.485.271-2.861-.365-3.05-1.386c-.184-1.056.893-2.114 2.376-2.387c1.514-.263 2.868.356 3.061 1.403Z"},null,-1),I4=[M4];function N4(e,n){return k(),ee("svg",A4,I4)}const D4={name:"logos-github-icon",render:N4},L4={class:"slidev-icon",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},j4=t("path",{fill:"currentColor",d:"m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"},null,-1),R4=[j4];function B4(e,n){return k(),ee("svg",L4,R4)}const q4={name:"mdi-email",render:B4},W4="/2023-06-dwx-fp-csharp-to-fsharp/images/qr-code-dwx2023.png",V4=t("h3",null,"Patrick Drechsler",-1),H4=t("a",{href:"mailto:patrick.drechsler@mathema.de",target:"_blank",rel:"noopener"},"patrick.drechsler@mathema.de",-1),z4=t("a",{href:"https://github.com/draptik",target:"_blank",rel:"noopener"},"https://github.com/draptik",-1),U4=t("a",{href:"https://draptik.github.io",target:"_blank",rel:"noopener"},"https://draptik.github.io",-1),K4=t("a",{href:"https://www.linkedin.com/in/patrick-drechsler-985a2911/",target:"_blank",rel:"noopener"},"https://www.linkedin.com/in/patrick-drechsler-985a2911/",-1),G4=t("p",null,"Slides:",-1),Z4=t("ul",null,[t("li",null,"QR-Code 👉"),t("li",null,[t("a",{href:"https://mathema-gmbh.github.io/2023-06-dwx-fp-csharp-to-fsharp/",target:"_blank",rel:"noopener"},"https://mathema-gmbh.github.io/2023-06-dwx-fp-csharp-to-fsharp/")])],-1),Y4=t("h3",null,"Martin Grotz",-1),J4=t("a",{href:"mailto:martin.grotz@mathema.de",target:"_blank",rel:"noopener"},"martin.grotz@mathema.de",-1),X4=t("a",{href:"https://github.com/groma84",target:"_blank",rel:"noopener"},"https://github.com/groma84",-1),Q4=t("a",{href:"https://elm.finde-ich-super.de",target:"_blank",rel:"noopener"},"https://elm.finde-ich-super.de",-1),e5=t("li",null,"groma.bsky.social",-1),n5=t("p",null,[t("img",{class:"absolute bottom-0 right-50 w-60",src:W4})],-1),t5={__name:"112",setup(e){const n={layout:"two-cols",srcSequence:"./pages/99-exit.md"};return C(F),(s,a)=>{const o=q4,i=D4,l=F4,c=C4,u=y4,p=m4;return k(),T(Qr,j(L(n)),{right:w(d=>[Y4,t("ul",null,[t("li",null,[N(o),r(),J4]),t("li",null,[N(i),r(),X4]),t("li",null,[N(l),r(" Blog: "),Q4]),t("li",null,[N(c),r(" @mobilgroma")]),t("li",null,[N(u),r(" @groma@kanoa.de")]),e5]),n5]),default:w(()=>[V4,t("ul",null,[t("li",null,[N(o),r(),H4]),t("li",null,[N(i),r(),z4]),t("li",null,[N(l),r(" Blog: "),U4]),t("li",null,[N(c),r(" @drechsler")]),t("li",null,[N(u),r(" @drechsler@floss.social")]),t("li",null,[N(p),r(),K4])]),G4,Z4]),_:1},16)}}},s5=A(t5,[["__file","/@slidev/slides/112.md"]]),a5=[{path:"1",name:"page-1",component:Y3,meta:{theme:"./mathema-2023",defaults:{layout:"default-with-footer"},occasion:"DWX 2023",occasionLogoUrl:"images/DWX_LogoIcon_2023-scaled.jpg.jpg",company:"MATHEMA GmbH",presenter:"Patrick Drechsler & Martin Grotz",contact:"patrick.drechsler@mathema.de & martin.grotz@mathema.de",info:`## Von C# zu F# – Einführung in die funktionale Programmierung
`,canvasWidth:980,layout:"cover",srcSequence:"./pages/00-title.md",slide:{raw:null,title:"Von C# zu F#",level:1,content:`# Von C# zu F#

#### Einführung in die funktionale Programmierung

##### Patrick Drechsler & Martin Grotz`,frontmatter:{theme:"./mathema-2023",defaults:{layout:"default-with-footer"},occasion:"DWX 2023",occasionLogoUrl:"images/DWX_LogoIcon_2023-scaled.jpg.jpg",company:"MATHEMA GmbH",presenter:"Patrick Drechsler & Martin Grotz",contact:"patrick.drechsler@mathema.de & martin.grotz@mathema.de",info:`## Von C# zu F# – Einführung in die funktionale Programmierung
`,canvasWidth:980,layout:"cover",srcSequence:"./pages/00-title.md"},index:0,start:0,end:6,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/00-title.md",raw:`# Von C# zu F#

#### Einführung in die funktionale Programmierung

##### Patrick Drechsler & Martin Grotz
`,title:"Von C# zu F#",level:1,content:`# Von C# zu F#

#### Einführung in die funktionale Programmierung

##### Patrick Drechsler & Martin Grotz`,frontmatter:{title:"Von C# zu F#"},index:0,start:0,end:6},inline:{raw:`---
theme: ./mathema-2023

defaults:
  layout: "default-with-footer"

# infos for the footer (on slides with the default-with-footer layout)
occasion: "DWX 2023"
occasionLogoUrl: "images/DWX_LogoIcon_2023-scaled.jpg.jpg"
company: "MATHEMA GmbH"
presenter: "Patrick Drechsler & Martin Grotz"
contact: "patrick.drechsler@mathema.de & martin.grotz@mathema.de"

info: |
  ## Von C# zu F# – Einführung in die funktionale Programmierung

canvasWidth: 980

layout: cover
src: ./pages/00-title.md
---
`,content:"",frontmatter:{theme:"./mathema-2023",defaults:{layout:"default-with-footer"},occasion:"DWX 2023",occasionLogoUrl:"images/DWX_LogoIcon_2023-scaled.jpg.jpg",company:"MATHEMA GmbH",presenter:"Patrick Drechsler & Martin Grotz",contact:"patrick.drechsler@mathema.de & martin.grotz@mathema.de",info:`## Von C# zu F# – Einführung in die funktionale Programmierung
`,canvasWidth:980,layout:"cover"},index:0,start:0,end:22},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/00-title.md",noteHTML:"",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:cS,meta:{title:"Lernziele",srcSequence:"./pages/01-intro.md",slide:{raw:null,title:"Lernziele",level:2,content:`## Lernziele

- Grundlagen der funktionalen Programmierung
- Funktionale Programmierung mit C#
- Grundlagen von F#
- Grundlegende Konzepte der funktionalen Komposition`,frontmatter:{title:"Lernziele",srcSequence:"./pages/01-intro.md"},index:1,start:0,end:8,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/01-intro.md",raw:`
## Lernziele

- Grundlagen der funktionalen Programmierung
- Funktionale Programmierung mit C#
- Grundlagen von F#
- Grundlegende Konzepte der funktionalen Komposition
`,title:"Lernziele",level:2,content:`## Lernziele

- Grundlagen der funktionalen Programmierung
- Funktionale Programmierung mit C#
- Grundlagen von F#
- Grundlegende Konzepte der funktionalen Komposition`,frontmatter:{title:"Lernziele"},index:0,start:0,end:8},inline:{raw:`---
src: ./pages/01-intro.md
---
`,content:"",frontmatter:{},index:1,start:22,end:26},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/01-intro.md",noteHTML:"",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:_S,meta:{layout:"two-cols",srcSequence:"./pages/01-intro.md",slide:{raw:`---
layout: two-cols
---

## Patrick Drechsler

- Software Entwickler
- Beruflich: C#
- Interessen:
    - Funktionale Programmierung
    - Software Crafting
    - Domain-Driven Design

::right::

## Martin Grotz

- Team Lead
- Beruflich: C#, TypeScript/JavaScript
- Interessen:
    - Funktionale Programmierung
    - Web&Mobile Development
    - Soft Skills

`,title:"Patrick Drechsler",level:2,content:`## Patrick Drechsler

- Software Entwickler
- Beruflich: C#
- Interessen:
    - Funktionale Programmierung
    - Software Crafting
    - Domain-Driven Design

::right::

## Martin Grotz

- Team Lead
- Beruflich: C#, TypeScript/JavaScript
- Interessen:
    - Funktionale Programmierung
    - Web&Mobile Development
    - Soft Skills`,frontmatter:{layout:"two-cols",srcSequence:"./pages/01-intro.md"},index:2,start:8,end:33,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/01-intro.md",raw:`---
layout: two-cols
---

## Patrick Drechsler

- Software Entwickler
- Beruflich: C#
- Interessen:
    - Funktionale Programmierung
    - Software Crafting
    - Domain-Driven Design

::right::

## Martin Grotz

- Team Lead
- Beruflich: C#, TypeScript/JavaScript
- Interessen:
    - Funktionale Programmierung
    - Web&Mobile Development
    - Soft Skills

`,title:"Patrick Drechsler",level:2,content:`## Patrick Drechsler

- Software Entwickler
- Beruflich: C#
- Interessen:
    - Funktionale Programmierung
    - Software Crafting
    - Domain-Driven Design

::right::

## Martin Grotz

- Team Lead
- Beruflich: C#, TypeScript/JavaScript
- Interessen:
    - Funktionale Programmierung
    - Web&Mobile Development
    - Soft Skills`,frontmatter:{layout:"two-cols"},index:1,start:8,end:33},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/01-intro.md",noteHTML:"",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:wS,meta:{title:"FP 101",srcSequence:"./pages/02-fp-basics_und_immutability.md",slide:{raw:null,title:"FP 101",level:2,content:`## FP 101

- Immutability
- Functions as First Class Citizens
- Pure Functions

That's it!`,frontmatter:{title:"FP 101",srcSequence:"./pages/02-fp-basics_und_immutability.md"},index:3,start:0,end:8,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/02-fp-basics_und_immutability.md",raw:`## FP 101

- Immutability
- Functions as First Class Citizens
- Pure Functions

That's it!
`,title:"FP 101",level:2,content:`## FP 101

- Immutability
- Functions as First Class Citizens
- Pure Functions

That's it!`,frontmatter:{title:"FP 101"},index:0,start:0,end:8},inline:{raw:`---
src: ./pages/02-fp-basics_und_immutability.md
---
`,content:"",frontmatter:{},index:2,start:26,end:30},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/02-fp-basics_und_immutability.md",noteHTML:"",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:BS,meta:{srcSequence:"./pages/02-fp-basics_und_immutability.md",slide:{raw:`
### Immutability in C# #

\`\`\`csharp
public class Customer
{
  public string Name { get; set; } // set -> mutable 😡
}
\`\`\`

vs

\`\`\`csharp
public class Customer
{
  public Customer(string name)
  {
    Name = name;
  }
  
  public string Name { get; } // <- immutable 😀
}
\`\`\`
`,title:"Immutability in C# #",level:3,content:`### Immutability in C# #

\`\`\`csharp
public class Customer
{
  public string Name { get; set; } // set -> mutable 😡
}
\`\`\`

vs

\`\`\`csharp
public class Customer
{
  public Customer(string name)
  {
    Name = name;
  }
  
  public string Name { get; } // <- immutable 😀
}
\`\`\``,frontmatter:{srcSequence:"./pages/02-fp-basics_und_immutability.md"},index:4,start:9,end:33,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/02-fp-basics_und_immutability.md",raw:`
### Immutability in C# #

\`\`\`csharp
public class Customer
{
  public string Name { get; set; } // set -> mutable 😡
}
\`\`\`

vs

\`\`\`csharp
public class Customer
{
  public Customer(string name)
  {
    Name = name;
  }
  
  public string Name { get; } // <- immutable 😀
}
\`\`\`
`,title:"Immutability in C# #",level:3,content:`### Immutability in C# #

\`\`\`csharp
public class Customer
{
  public string Name { get; set; } // set -> mutable 😡
}
\`\`\`

vs

\`\`\`csharp
public class Customer
{
  public Customer(string name)
  {
    Name = name;
  }
  
  public string Name { get; } // <- immutable 😀
}
\`\`\``,frontmatter:{},index:1,start:9,end:33},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/02-fp-basics_und_immutability.md",noteHTML:"",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:KS,meta:{srcSequence:"./pages/02-fp-basics_und_immutability.md",slide:{raw:`
Syntax matters!

Classic C#

\`\`\`csharp
int Add(int a, int b)
{
  return a + b;
}
\`\`\`

Expression body

\`\`\`csharp
int Add(int a, int b) => a + b;
\`\`\`
`,content:`Syntax matters!

Classic C#

\`\`\`csharp
int Add(int a, int b)
{
  return a + b;
}
\`\`\`

Expression body

\`\`\`csharp
int Add(int a, int b) => a + b;
\`\`\``,frontmatter:{srcSequence:"./pages/02-fp-basics_und_immutability.md"},index:5,start:34,end:52,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/02-fp-basics_und_immutability.md",raw:`
Syntax matters!

Classic C#

\`\`\`csharp
int Add(int a, int b)
{
  return a + b;
}
\`\`\`

Expression body

\`\`\`csharp
int Add(int a, int b) => a + b;
\`\`\`
`,content:`Syntax matters!

Classic C#

\`\`\`csharp
int Add(int a, int b)
{
  return a + b;
}
\`\`\`

Expression body

\`\`\`csharp
int Add(int a, int b) => a + b;
\`\`\``,frontmatter:{},index:2,start:34,end:52},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/02-fp-basics_und_immutability.md",noteHTML:"",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:ex,meta:{srcSequence:"./pages/02-fp-basics_und_immutability.md",slide:{raw:`
Syntax matters!

Classic C#

\`\`\`csharp
int Add(int a, int b)
{
  Console.WriteLine("bla"); // <- side effect!
  return a + b;
}
\`\`\`

Expression body: Seiteneffekte sind schwieriger reinzubauen

\`\`\`csharp
int Add(int a, int b) => a + b;
\`\`\`
`,content:`Syntax matters!

Classic C#

\`\`\`csharp
int Add(int a, int b)
{
  Console.WriteLine("bla"); // <- side effect!
  return a + b;
}
\`\`\`

Expression body: Seiteneffekte sind schwieriger reinzubauen

\`\`\`csharp
int Add(int a, int b) => a + b;
\`\`\``,frontmatter:{srcSequence:"./pages/02-fp-basics_und_immutability.md"},index:6,start:53,end:72,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/02-fp-basics_und_immutability.md",raw:`
Syntax matters!

Classic C#

\`\`\`csharp
int Add(int a, int b)
{
  Console.WriteLine("bla"); // <- side effect!
  return a + b;
}
\`\`\`

Expression body: Seiteneffekte sind schwieriger reinzubauen

\`\`\`csharp
int Add(int a, int b) => a + b;
\`\`\`
`,content:`Syntax matters!

Classic C#

\`\`\`csharp
int Add(int a, int b)
{
  Console.WriteLine("bla"); // <- side effect!
  return a + b;
}
\`\`\`

Expression body: Seiteneffekte sind schwieriger reinzubauen

\`\`\`csharp
int Add(int a, int b) => a + b;
\`\`\``,frontmatter:{},index:3,start:53,end:72},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/02-fp-basics_und_immutability.md",noteHTML:"",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:sx,meta:{title:"Value Objects",srcSequence:"./pages/value-objects.md",slide:{raw:null,title:"Value Objects",level:1,content:"# Value Objects",frontmatter:{title:"Value Objects",srcSequence:"./pages/value-objects.md"},index:7,start:0,end:2,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",raw:`# Value Objects
`,title:"Value Objects",level:1,content:"# Value Objects",frontmatter:{title:"Value Objects"},index:0,start:0,end:2},inline:{raw:`---
src: ./pages/value-objects.md
---
`,content:"",frontmatter:{},index:3,start:30,end:34},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",noteHTML:"",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:lx,meta:{srcSequence:"./pages/value-objects.md",slide:{raw:`
## Value Objects

Warum?

- Methoden sollten nicht lügen!
  - Null: NullPointerException, Null-Checks
  - Antipattern: Primitive Obsession
`,title:"Value Objects",level:2,content:`## Value Objects

Warum?

- Methoden sollten nicht lügen!
  - Null: NullPointerException, Null-Checks
  - Antipattern: Primitive Obsession`,frontmatter:{srcSequence:"./pages/value-objects.md"},index:8,start:3,end:12,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",raw:`
## Value Objects

Warum?

- Methoden sollten nicht lügen!
  - Null: NullPointerException, Null-Checks
  - Antipattern: Primitive Obsession
`,title:"Value Objects",level:2,content:`## Value Objects

Warum?

- Methoden sollten nicht lügen!
  - Null: NullPointerException, Null-Checks
  - Antipattern: Primitive Obsession`,frontmatter:{},index:1,start:3,end:12},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",noteHTML:"",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:fx,meta:{srcSequence:"./pages/value-objects.md",slide:{raw:`
### Beispiele

\`\`\`csharp
// 😡
void Einzahlen(int wert, SomeEnum waehrung) { /* ... */ }

// 😀
void Einzahlen(Geld geld) { /* ... */ }
\`\`\`

\`\`\`csharp
class Kunde {
    int Alter { get; set; } // 😡
    
    // ist \`i\` das aktuelle Alter oder das Geburtsjahr??
    bool IstVolljaehrig(int i) { /* ... */}
}

class Kunde {
    Alter Alter { get; set; } // 😀

    bool IstVolljaehrig(Alter alter) { /* ... */}

    bool IstVolljaehrig(Geburtsjahr geburtsjahr) { /* ... */}
}
\`\`\`
`,title:"Beispiele",level:3,content:`### Beispiele

\`\`\`csharp
// 😡
void Einzahlen(int wert, SomeEnum waehrung) { /* ... */ }

// 😀
void Einzahlen(Geld geld) { /* ... */ }
\`\`\`

\`\`\`csharp
class Kunde {
    int Alter { get; set; } // 😡
    
    // ist \`i\` das aktuelle Alter oder das Geburtsjahr??
    bool IstVolljaehrig(int i) { /* ... */}
}

class Kunde {
    Alter Alter { get; set; } // 😀

    bool IstVolljaehrig(Alter alter) { /* ... */}

    bool IstVolljaehrig(Geburtsjahr geburtsjahr) { /* ... */}
}
\`\`\``,frontmatter:{srcSequence:"./pages/value-objects.md"},index:9,start:13,end:41,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",raw:`
### Beispiele

\`\`\`csharp
// 😡
void Einzahlen(int wert, SomeEnum waehrung) { /* ... */ }

// 😀
void Einzahlen(Geld geld) { /* ... */ }
\`\`\`

\`\`\`csharp
class Kunde {
    int Alter { get; set; } // 😡
    
    // ist \`i\` das aktuelle Alter oder das Geburtsjahr??
    bool IstVolljaehrig(int i) { /* ... */}
}

class Kunde {
    Alter Alter { get; set; } // 😀

    bool IstVolljaehrig(Alter alter) { /* ... */}

    bool IstVolljaehrig(Geburtsjahr geburtsjahr) { /* ... */}
}
\`\`\`
`,title:"Beispiele",level:3,content:`### Beispiele

\`\`\`csharp
// 😡
void Einzahlen(int wert, SomeEnum waehrung) { /* ... */ }

// 😀
void Einzahlen(Geld geld) { /* ... */ }
\`\`\`

\`\`\`csharp
class Kunde {
    int Alter { get; set; } // 😡
    
    // ist \`i\` das aktuelle Alter oder das Geburtsjahr??
    bool IstVolljaehrig(int i) { /* ... */}
}

class Kunde {
    Alter Alter { get; set; } // 😀

    bool IstVolljaehrig(Alter alter) { /* ... */}

    bool IstVolljaehrig(Geburtsjahr geburtsjahr) { /* ... */}
}
\`\`\``,frontmatter:{},index:2,start:13,end:41},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",noteHTML:"",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:_x,meta:{srcSequence:"./pages/value-objects.md",slide:{raw:`
![img](/images/wikipedia-value-objects.png)
`,content:"![img](/images/wikipedia-value-objects.png)",frontmatter:{srcSequence:"./pages/value-objects.md"},index:10,start:42,end:45,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",raw:`
![img](/images/wikipedia-value-objects.png)
`,content:"![img](/images/wikipedia-value-objects.png)",frontmatter:{},index:3,start:42,end:45},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",noteHTML:"",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:yx,meta:{srcSequence:"./pages/value-objects.md",slide:{raw:`
## Value Objects

- nur gültige Objekte erlaubt
- immutable
- equality by structure
`,title:"Value Objects",level:2,content:`## Value Objects

- nur gültige Objekte erlaubt
- immutable
- equality by structure`,frontmatter:{srcSequence:"./pages/value-objects.md"},index:11,start:46,end:53,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",raw:`
## Value Objects

- nur gültige Objekte erlaubt
- immutable
- equality by structure
`,title:"Value Objects",level:2,content:`## Value Objects

- nur gültige Objekte erlaubt
- immutable
- equality by structure`,frontmatter:{},index:4,start:46,end:53},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",noteHTML:"",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:Ex,meta:{srcSequence:"./pages/value-objects.md",slide:{raw:`
### Nur gültige Objekte

Es muss bei der Erstellung gewährleistet sein, dass das Objekt gültig ist.
`,title:"Nur gültige Objekte",level:3,content:`### Nur gültige Objekte

Es muss bei der Erstellung gewährleistet sein, dass das Objekt gültig ist.`,frontmatter:{srcSequence:"./pages/value-objects.md"},index:12,start:54,end:59,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",raw:`
### Nur gültige Objekte

Es muss bei der Erstellung gewährleistet sein, dass das Objekt gültig ist.
`,title:"Nur gültige Objekte",level:3,content:`### Nur gültige Objekte

Es muss bei der Erstellung gewährleistet sein, dass das Objekt gültig ist.`,frontmatter:{},index:5,start:54,end:59},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",noteHTML:"",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:Tx,meta:{srcSequence:"./pages/value-objects.md",slide:{raw:`
### Nur gültige Objekte

Optionen:

- Konstruktor mit allen Parametern
- statische Hilfsmethode & privater Konstruktor
`,title:"Nur gültige Objekte",level:3,content:`### Nur gültige Objekte

Optionen:

- Konstruktor mit allen Parametern
- statische Hilfsmethode & privater Konstruktor`,frontmatter:{srcSequence:"./pages/value-objects.md"},index:13,start:60,end:68,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",raw:`
### Nur gültige Objekte

Optionen:

- Konstruktor mit allen Parametern
- statische Hilfsmethode & privater Konstruktor
`,title:"Nur gültige Objekte",level:3,content:`### Nur gültige Objekte

Optionen:

- Konstruktor mit allen Parametern
- statische Hilfsmethode & privater Konstruktor`,frontmatter:{},index:6,start:60,end:68},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",noteHTML:"",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:Ix,meta:{srcSequence:"./pages/value-objects.md",slide:{raw:`
#### Value Objects erstellen / 1

\`\`\`csharp
class Geld 
{
    int Betrag { get; }
    Waehrung Waehrung { get; }

    Geld(int betrag, Waehrung waehrung) {
        if (!IsValid(betrag, Waehrung)) 
            throw new InvalidGeldException();

        Betrag = betrag;
        Waehrung = waehrung;
    }

    bool IsValid(int betrag, Waehrung waehrung)
        => betrag > 0 && waehrung != Waehrung.Undefined;
}
\`\`\`
`,title:"Value Objects erstellen / 1",level:4,content:`#### Value Objects erstellen / 1

\`\`\`csharp
class Geld 
{
    int Betrag { get; }
    Waehrung Waehrung { get; }

    Geld(int betrag, Waehrung waehrung) {
        if (!IsValid(betrag, Waehrung)) 
            throw new InvalidGeldException();

        Betrag = betrag;
        Waehrung = waehrung;
    }

    bool IsValid(int betrag, Waehrung waehrung)
        => betrag > 0 && waehrung != Waehrung.Undefined;
}
\`\`\``,frontmatter:{srcSequence:"./pages/value-objects.md"},index:14,start:69,end:91,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",raw:`
#### Value Objects erstellen / 1

\`\`\`csharp
class Geld 
{
    int Betrag { get; }
    Waehrung Waehrung { get; }

    Geld(int betrag, Waehrung waehrung) {
        if (!IsValid(betrag, Waehrung)) 
            throw new InvalidGeldException();

        Betrag = betrag;
        Waehrung = waehrung;
    }

    bool IsValid(int betrag, Waehrung waehrung)
        => betrag > 0 && waehrung != Waehrung.Undefined;
}
\`\`\`
`,title:"Value Objects erstellen / 1",level:4,content:`#### Value Objects erstellen / 1

\`\`\`csharp
class Geld 
{
    int Betrag { get; }
    Waehrung Waehrung { get; }

    Geld(int betrag, Waehrung waehrung) {
        if (!IsValid(betrag, Waehrung)) 
            throw new InvalidGeldException();

        Betrag = betrag;
        Waehrung = waehrung;
    }

    bool IsValid(int betrag, Waehrung waehrung)
        => betrag > 0 && waehrung != Waehrung.Undefined;
}
\`\`\``,frontmatter:{},index:7,start:69,end:91},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",noteHTML:"",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:jx,meta:{srcSequence:"./pages/value-objects.md",slide:{raw:`
#### Value Objects erstellen / 2

\`\`\`csharp
class Geld 
{
    int Betrag { get; }
    Waehrung Waehrung { get; }

    static Geld Create(int betrag, Waehrung waehrung) {
        return new Geld(betrag, waehrung);
    }

    // private ctor
    private Geld(int betrag, Waehrung waehrung) {
        if (!IsValid(betrag, Waehrung)) 
            throw new InvalidGeldException();

        Betrag = betrag;
        Waehrung = waehrung;
    }

    bool IsValid(int betrag, Waehrung waehrung)
        => betrag > 0 && waehrung != Waehrung.Undefined;
}
\`\`\`
`,title:"Value Objects erstellen / 2",level:4,content:`#### Value Objects erstellen / 2

\`\`\`csharp
class Geld 
{
    int Betrag { get; }
    Waehrung Waehrung { get; }

    static Geld Create(int betrag, Waehrung waehrung) {
        return new Geld(betrag, waehrung);
    }

    // private ctor
    private Geld(int betrag, Waehrung waehrung) {
        if (!IsValid(betrag, Waehrung)) 
            throw new InvalidGeldException();

        Betrag = betrag;
        Waehrung = waehrung;
    }

    bool IsValid(int betrag, Waehrung waehrung)
        => betrag > 0 && waehrung != Waehrung.Undefined;
}
\`\`\``,frontmatter:{srcSequence:"./pages/value-objects.md"},index:15,start:92,end:119,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",raw:`
#### Value Objects erstellen / 2

\`\`\`csharp
class Geld 
{
    int Betrag { get; }
    Waehrung Waehrung { get; }

    static Geld Create(int betrag, Waehrung waehrung) {
        return new Geld(betrag, waehrung);
    }

    // private ctor
    private Geld(int betrag, Waehrung waehrung) {
        if (!IsValid(betrag, Waehrung)) 
            throw new InvalidGeldException();

        Betrag = betrag;
        Waehrung = waehrung;
    }

    bool IsValid(int betrag, Waehrung waehrung)
        => betrag > 0 && waehrung != Waehrung.Undefined;
}
\`\`\`
`,title:"Value Objects erstellen / 2",level:4,content:`#### Value Objects erstellen / 2

\`\`\`csharp
class Geld 
{
    int Betrag { get; }
    Waehrung Waehrung { get; }

    static Geld Create(int betrag, Waehrung waehrung) {
        return new Geld(betrag, waehrung);
    }

    // private ctor
    private Geld(int betrag, Waehrung waehrung) {
        if (!IsValid(betrag, Waehrung)) 
            throw new InvalidGeldException();

        Betrag = betrag;
        Waehrung = waehrung;
    }

    bool IsValid(int betrag, Waehrung waehrung)
        => betrag > 0 && waehrung != Waehrung.Undefined;
}
\`\`\``,frontmatter:{},index:8,start:92,end:119},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",noteHTML:"",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:Vx,meta:{srcSequence:"./pages/value-objects.md",slide:{raw:`
### Immutability

Damit ein C# Objekt unveränderlich wird, muss gewährleistet sein, dass es auch **nach Erstellung nicht verändert wird**.

- interne Werte dürfen ausschließlich vom Konstruktor verändert werden
- kein public oder private setter
- kein parameterloser Konstrukor
`,title:"Immutability",level:3,content:`### Immutability

Damit ein C# Objekt unveränderlich wird, muss gewährleistet sein, dass es auch **nach Erstellung nicht verändert wird**.

- interne Werte dürfen ausschließlich vom Konstruktor verändert werden
- kein public oder private setter
- kein parameterloser Konstrukor`,frontmatter:{srcSequence:"./pages/value-objects.md"},index:16,start:120,end:129,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",raw:`
### Immutability

Damit ein C# Objekt unveränderlich wird, muss gewährleistet sein, dass es auch **nach Erstellung nicht verändert wird**.

- interne Werte dürfen ausschließlich vom Konstruktor verändert werden
- kein public oder private setter
- kein parameterloser Konstrukor
`,title:"Immutability",level:3,content:`### Immutability

Damit ein C# Objekt unveränderlich wird, muss gewährleistet sein, dass es auch **nach Erstellung nicht verändert wird**.

- interne Werte dürfen ausschließlich vom Konstruktor verändert werden
- kein public oder private setter
- kein parameterloser Konstrukor`,frontmatter:{},index:9,start:120,end:129},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",noteHTML:"",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:Kx,meta:{srcSequence:"./pages/value-objects.md",slide:{raw:`
### Equality by structure

Zwei Objekte sind gleich, wenn sie die gleichen Werte haben.
`,title:"Equality by structure",level:3,content:`### Equality by structure

Zwei Objekte sind gleich, wenn sie die gleichen Werte haben.`,frontmatter:{srcSequence:"./pages/value-objects.md"},index:17,start:130,end:135,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",raw:`
### Equality by structure

Zwei Objekte sind gleich, wenn sie die gleichen Werte haben.
`,title:"Equality by structure",level:3,content:`### Equality by structure

Zwei Objekte sind gleich, wenn sie die gleichen Werte haben.`,frontmatter:{},index:10,start:130,end:135},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",noteHTML:"",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:Jx,meta:{srcSequence:"./pages/value-objects.md",slide:{raw:`
### Exkurs: Vergleichbarkeit

- Equality by reference
- Equality by id
- Equality by structure
`,title:"Exkurs: Vergleichbarkeit",level:3,content:`### Exkurs: Vergleichbarkeit

- Equality by reference
- Equality by id
- Equality by structure`,frontmatter:{srcSequence:"./pages/value-objects.md"},index:18,start:136,end:143,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",raw:`
### Exkurs: Vergleichbarkeit

- Equality by reference
- Equality by id
- Equality by structure
`,title:"Exkurs: Vergleichbarkeit",level:3,content:`### Exkurs: Vergleichbarkeit

- Equality by reference
- Equality by id
- Equality by structure`,frontmatter:{},index:11,start:136,end:143},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",noteHTML:"",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:sE,meta:{srcSequence:"./pages/value-objects.md",slide:{raw:`
### Equality by structure

Zwei Objekte sind gleich, wenn sie die gleichen Werte haben.

- \`Equals\` und \`GetHashcode\` überschreiben

\`\`\`csharp
override bool Equals(Geld other)
    => other.Betrag   == this.Betrag &&
       other.Waehrung == this.Waehrung;

override int GetHashCode() { /* ... */ }
\`\`\`
`,title:"Equality by structure",level:3,content:`### Equality by structure

Zwei Objekte sind gleich, wenn sie die gleichen Werte haben.

- \`Equals\` und \`GetHashcode\` überschreiben

\`\`\`csharp
override bool Equals(Geld other)
    => other.Betrag   == this.Betrag &&
       other.Waehrung == this.Waehrung;

override int GetHashCode() { /* ... */ }
\`\`\``,frontmatter:{srcSequence:"./pages/value-objects.md"},index:19,start:144,end:159,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",raw:`
### Equality by structure

Zwei Objekte sind gleich, wenn sie die gleichen Werte haben.

- \`Equals\` und \`GetHashcode\` überschreiben

\`\`\`csharp
override bool Equals(Geld other)
    => other.Betrag   == this.Betrag &&
       other.Waehrung == this.Waehrung;

override int GetHashCode() { /* ... */ }
\`\`\`
`,title:"Equality by structure",level:3,content:`### Equality by structure

Zwei Objekte sind gleich, wenn sie die gleichen Werte haben.

- \`Equals\` und \`GetHashcode\` überschreiben

\`\`\`csharp
override bool Equals(Geld other)
    => other.Betrag   == this.Betrag &&
       other.Waehrung == this.Waehrung;

override int GetHashCode() { /* ... */ }
\`\`\``,frontmatter:{},index:12,start:144,end:159},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",noteHTML:"",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:lE,meta:{srcSequence:"./pages/value-objects.md",slide:{raw:`
### C# 9 and greater...

C# records sind ein erster Schritt in die richtige Richtung:

- immutable
`,title:"C# 9 and greater...",level:3,content:`### C# 9 and greater...

C# records sind ein erster Schritt in die richtige Richtung:

- immutable`,frontmatter:{srcSequence:"./pages/value-objects.md"},index:20,start:160,end:167,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",raw:`
### C# 9 and greater...

C# records sind ein erster Schritt in die richtige Richtung:

- immutable
`,title:"C# 9 and greater...",level:3,content:`### C# 9 and greater...

C# records sind ein erster Schritt in die richtige Richtung:

- immutable`,frontmatter:{},index:13,start:160,end:167},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",noteHTML:"",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:hE,meta:{srcSequence:"./pages/value-objects.md",slide:{raw:`
### Exkurs

- manchmal genügt ein (leichtgewichtiges C#) record
- aber: eigentlich will man soviel Logik wie möglich in ein Objekt packen (OO, Value Objekt, DDD)
- (OO vs FP) und DDD
    - OO: Objekt mit Verhalten -> Ursprung von Value Objekt (und DDD)
    - FP: Strikte Trennung von Daten und Verhalten

Das Schöne an den unterschiedlichen Meinungen ist: 

- man kann es situationsbedingt einfach lösen 
- Und sich das Beste rauspicken
`,title:"Exkurs",level:3,content:`### Exkurs

- manchmal genügt ein (leichtgewichtiges C#) record
- aber: eigentlich will man soviel Logik wie möglich in ein Objekt packen (OO, Value Objekt, DDD)
- (OO vs FP) und DDD
    - OO: Objekt mit Verhalten -> Ursprung von Value Objekt (und DDD)
    - FP: Strikte Trennung von Daten und Verhalten

Das Schöne an den unterschiedlichen Meinungen ist: 

- man kann es situationsbedingt einfach lösen 
- Und sich das Beste rauspicken`,frontmatter:{srcSequence:"./pages/value-objects.md"},index:21,start:168,end:182,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",raw:`
### Exkurs

- manchmal genügt ein (leichtgewichtiges C#) record
- aber: eigentlich will man soviel Logik wie möglich in ein Objekt packen (OO, Value Objekt, DDD)
- (OO vs FP) und DDD
    - OO: Objekt mit Verhalten -> Ursprung von Value Objekt (und DDD)
    - FP: Strikte Trennung von Daten und Verhalten

Das Schöne an den unterschiedlichen Meinungen ist: 

- man kann es situationsbedingt einfach lösen 
- Und sich das Beste rauspicken
`,title:"Exkurs",level:3,content:`### Exkurs

- manchmal genügt ein (leichtgewichtiges C#) record
- aber: eigentlich will man soviel Logik wie möglich in ein Objekt packen (OO, Value Objekt, DDD)
- (OO vs FP) und DDD
    - OO: Objekt mit Verhalten -> Ursprung von Value Objekt (und DDD)
    - FP: Strikte Trennung von Daten und Verhalten

Das Schöne an den unterschiedlichen Meinungen ist: 

- man kann es situationsbedingt einfach lösen 
- Und sich das Beste rauspicken`,frontmatter:{},index:14,start:168,end:182},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/value-objects.md",noteHTML:"",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:bE,meta:{title:"FP 101 - functions",srcSequence:"./pages/02-fp-basics_first_class_functions.md",slide:{raw:null,title:"FP 101 - functions",level:2,content:`## FP 101 - functions

### 1st class functions in C#

Funktionen können als Parameter verwendet werden`,frontmatter:{title:"FP 101 - functions",srcSequence:"./pages/02-fp-basics_first_class_functions.md"},index:22,start:0,end:6,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/02-fp-basics_first_class_functions.md",raw:`## FP 101 - functions

### 1st class functions in C#

Funktionen können als Parameter verwendet werden
`,title:"FP 101 - functions",level:2,content:`## FP 101 - functions

### 1st class functions in C#

Funktionen können als Parameter verwendet werden`,frontmatter:{title:"FP 101 - functions"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/02-fp-basics_first_class_functions.md
---
`,content:"",frontmatter:{},index:4,start:34,end:38},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/02-fp-basics_first_class_functions.md",noteHTML:"",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:EE,meta:{srcSequence:"./pages/02-fp-basics_first_class_functions.md",slide:{raw:`
#### Strategy-Pattern

\`\`\`csharp
interface ICalculateSalary
{
  int ByInput(int i);            // <- Methodensignatur
}

class Manager: ICalculateSalary
{
  int ByInput(int i) => i*2;     // <- Implementierung
}
\`\`\`

\`\`\`csharp
class SomeService
{
  int DoSomething(ICalculateSalary salary, int i) 
    => salary.ByInput(i);        // <- "deligiert"
}
\`\`\`

(Verhalten als Parameter übergeben)
`,title:"Strategy-Pattern",level:4,content:`#### Strategy-Pattern

\`\`\`csharp
interface ICalculateSalary
{
  int ByInput(int i);            // <- Methodensignatur
}

class Manager: ICalculateSalary
{
  int ByInput(int i) => i*2;     // <- Implementierung
}
\`\`\`

\`\`\`csharp
class SomeService
{
  int DoSomething(ICalculateSalary salary, int i) 
    => salary.ByInput(i);        // <- "deligiert"
}
\`\`\`

(Verhalten als Parameter übergeben)`,frontmatter:{srcSequence:"./pages/02-fp-basics_first_class_functions.md"},index:23,start:7,end:32,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/02-fp-basics_first_class_functions.md",raw:`
#### Strategy-Pattern

\`\`\`csharp
interface ICalculateSalary
{
  int ByInput(int i);            // <- Methodensignatur
}

class Manager: ICalculateSalary
{
  int ByInput(int i) => i*2;     // <- Implementierung
}
\`\`\`

\`\`\`csharp
class SomeService
{
  int DoSomething(ICalculateSalary salary, int i) 
    => salary.ByInput(i);        // <- "deligiert"
}
\`\`\`

(Verhalten als Parameter übergeben)
`,title:"Strategy-Pattern",level:4,content:`#### Strategy-Pattern

\`\`\`csharp
interface ICalculateSalary
{
  int ByInput(int i);            // <- Methodensignatur
}

class Manager: ICalculateSalary
{
  int ByInput(int i) => i*2;     // <- Implementierung
}
\`\`\`

\`\`\`csharp
class SomeService
{
  int DoSomething(ICalculateSalary salary, int i) 
    => salary.ByInput(i);        // <- "deligiert"
}
\`\`\`

(Verhalten als Parameter übergeben)`,frontmatter:{},index:1,start:7,end:32},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/02-fp-basics_first_class_functions.md",noteHTML:"",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:OE,meta:{srcSequence:"./pages/02-fp-basics_first_class_functions.md",slide:{raw:`
### Funktionen als Rückgabewert

\`\`\`csharp

Func<double, string> GetConverterFn(bool withDecimals) 
  => withDecimals ? ToStringWithDecimals : ToStringNoDecimals;
}

\`\`\``,title:"Funktionen als Rückgabewert",level:3,content:`### Funktionen als Rückgabewert

\`\`\`csharp

Func<double, string> GetConverterFn(bool withDecimals) 
  => withDecimals ? ToStringWithDecimals : ToStringNoDecimals;
}

\`\`\``,frontmatter:{srcSequence:"./pages/02-fp-basics_first_class_functions.md"},index:24,start:33,end:43,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/02-fp-basics_first_class_functions.md",raw:`
### Funktionen als Rückgabewert

\`\`\`csharp

Func<double, string> GetConverterFn(bool withDecimals) 
  => withDecimals ? ToStringWithDecimals : ToStringNoDecimals;
}

\`\`\``,title:"Funktionen als Rückgabewert",level:3,content:`### Funktionen als Rückgabewert

\`\`\`csharp

Func<double, string> GetConverterFn(bool withDecimals) 
  => withDecimals ? ToStringWithDecimals : ToStringNoDecimals;
}

\`\`\``,frontmatter:{},index:2,start:33,end:43},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/02-fp-basics_first_class_functions.md",noteHTML:"",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:IE,meta:{title:"FP 101 - Pure Functions",srcSequence:"./pages/02-fp-basics_pure_functions.md",slide:{raw:null,title:"FP 101 - Pure Functions",level:2,content:`## FP 101 - Pure Functions

### Pure Functions in C# #

- haben niemals Seiteneffekte!
- sollten immer nach \`static\` umwandelbar sein`,frontmatter:{title:"FP 101 - Pure Functions",srcSequence:"./pages/02-fp-basics_pure_functions.md"},index:25,start:0,end:7,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/02-fp-basics_pure_functions.md",raw:`## FP 101 - Pure Functions

### Pure Functions in C# #

- haben niemals Seiteneffekte!
- sollten immer nach \`static\` umwandelbar sein
`,title:"FP 101 - Pure Functions",level:2,content:`## FP 101 - Pure Functions

### Pure Functions in C# #

- haben niemals Seiteneffekte!
- sollten immer nach \`static\` umwandelbar sein`,frontmatter:{title:"FP 101 - Pure Functions"},index:0,start:0,end:7},inline:{raw:`---
src: ./pages/02-fp-basics_pure_functions.md
---
`,content:"",frontmatter:{},index:5,start:38,end:42},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/02-fp-basics_pure_functions.md",noteHTML:"",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:BE,meta:{srcSequence:"./pages/02-fp-basics_pure_functions.md",slide:{raw:`
## Imperativ...

**Wie** mache ich etwas 

\`\`\`csharp
var people = new List<Person>();
{
    new Person { Age = 20, Income = 1000 },
    new Person { Age = 26, Income = 1100 },
    new Person { Age = 35, Income = 1300 }
};

var incomes = new List<int>();
foreach (var person in people)
{
    if (person.Age > 25)
        incomes.Add(person.Income);
}

var avg = incomes.Sum() / incomes.Count;
\`\`\`

versus...
`,title:"Imperativ...",level:2,content:`## Imperativ...

**Wie** mache ich etwas 

\`\`\`csharp
var people = new List<Person>();
{
    new Person { Age = 20, Income = 1000 },
    new Person { Age = 26, Income = 1100 },
    new Person { Age = 35, Income = 1300 }
};

var incomes = new List<int>();
foreach (var person in people)
{
    if (person.Age > 25)
        incomes.Add(person.Income);
}

var avg = incomes.Sum() / incomes.Count;
\`\`\`

versus...`,frontmatter:{srcSequence:"./pages/02-fp-basics_pure_functions.md"},index:26,start:8,end:33,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/02-fp-basics_pure_functions.md",raw:`
## Imperativ...

**Wie** mache ich etwas 

\`\`\`csharp
var people = new List<Person>();
{
    new Person { Age = 20, Income = 1000 },
    new Person { Age = 26, Income = 1100 },
    new Person { Age = 35, Income = 1300 }
};

var incomes = new List<int>();
foreach (var person in people)
{
    if (person.Age > 25)
        incomes.Add(person.Income);
}

var avg = incomes.Sum() / incomes.Count;
\`\`\`

versus...
`,title:"Imperativ...",level:2,content:`## Imperativ...

**Wie** mache ich etwas 

\`\`\`csharp
var people = new List<Person>();
{
    new Person { Age = 20, Income = 1000 },
    new Person { Age = 26, Income = 1100 },
    new Person { Age = 35, Income = 1300 }
};

var incomes = new List<int>();
foreach (var person in people)
{
    if (person.Age > 25)
        incomes.Add(person.Income);
}

var avg = incomes.Sum() / incomes.Count;
\`\`\`

versus...`,frontmatter:{},index:1,start:8,end:33},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/02-fp-basics_pure_functions.md",noteHTML:"",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:KE,meta:{srcSequence:"./pages/02-fp-basics_pure_functions.md",slide:{raw:`
## Deklarativ

**Was** will ich erreichen?

Bsp: Filter / Map / Reduce

\`\`\`csharp
var people = new List<Person> {
  new Person { Age = 20, Income = 1000 },
  new Person { Age = 26, Income = 1100 },
  new Person { Age = 35, Income = 1300 }
}

var averageIncomeAbove25 = people
  .Where(p => p.Age > 25) // "Filter"
  .Select(p => p.Income)  // "Map"
  .Average();             // "Reduce"
\`\`\`

- aussagekräftiger
- weniger fehleranfällig
`,title:"Deklarativ",level:2,content:`## Deklarativ

**Was** will ich erreichen?

Bsp: Filter / Map / Reduce

\`\`\`csharp
var people = new List<Person> {
  new Person { Age = 20, Income = 1000 },
  new Person { Age = 26, Income = 1100 },
  new Person { Age = 35, Income = 1300 }
}

var averageIncomeAbove25 = people
  .Where(p => p.Age > 25) // "Filter"
  .Select(p => p.Income)  // "Map"
  .Average();             // "Reduce"
\`\`\`

- aussagekräftiger
- weniger fehleranfällig`,frontmatter:{srcSequence:"./pages/02-fp-basics_pure_functions.md"},index:27,start:34,end:57,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/02-fp-basics_pure_functions.md",raw:`
## Deklarativ

**Was** will ich erreichen?

Bsp: Filter / Map / Reduce

\`\`\`csharp
var people = new List<Person> {
  new Person { Age = 20, Income = 1000 },
  new Person { Age = 26, Income = 1100 },
  new Person { Age = 35, Income = 1300 }
}

var averageIncomeAbove25 = people
  .Where(p => p.Age > 25) // "Filter"
  .Select(p => p.Income)  // "Map"
  .Average();             // "Reduce"
\`\`\`

- aussagekräftiger
- weniger fehleranfällig
`,title:"Deklarativ",level:2,content:`## Deklarativ

**Was** will ich erreichen?

Bsp: Filter / Map / Reduce

\`\`\`csharp
var people = new List<Person> {
  new Person { Age = 20, Income = 1000 },
  new Person { Age = 26, Income = 1100 },
  new Person { Age = 35, Income = 1300 }
}

var averageIncomeAbove25 = people
  .Where(p => p.Age > 25) // "Filter"
  .Select(p => p.Income)  // "Map"
  .Average();             // "Reduce"
\`\`\`

- aussagekräftiger
- weniger fehleranfällig`,frontmatter:{},index:2,start:34,end:57},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/02-fp-basics_pure_functions.md",noteHTML:"",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:rC,meta:{layout:"image-right",image:"/images/book-grokking-simplicity.png",title:"Alternative Beschreibung",srcSequence:"./pages/grokking-simplicity-01.md",slide:{raw:null,title:"Alternative Beschreibung",level:3,content:`### Alternative Beschreibung

aus "Grokking Simplicity"

Code wird in drei Arten geteilt:

- Calculations
- Actions
- Data

👉 Unterschied zur "klassischen" Objektorientierung:

- Trennung zwischen Verhalten und Datenstrukur
  - Calculations: Pure Functions
  - Actions: Seiteneffekte
  - Data`,frontmatter:{layout:"image-right",image:"/images/book-grokking-simplicity.png",title:"Alternative Beschreibung",srcSequence:"./pages/grokking-simplicity-01.md"},index:28,start:0,end:22,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/grokking-simplicity-01.md",raw:`---
layout: image-right
image: /images/book-grokking-simplicity.png
---

### Alternative Beschreibung

aus "Grokking Simplicity"

Code wird in drei Arten geteilt:

- Calculations
- Actions
- Data

👉 Unterschied zur "klassischen" Objektorientierung:

- Trennung zwischen Verhalten und Datenstrukur
  - Calculations: Pure Functions
  - Actions: Seiteneffekte
  - Data
`,title:"Alternative Beschreibung",level:3,content:`### Alternative Beschreibung

aus "Grokking Simplicity"

Code wird in drei Arten geteilt:

- Calculations
- Actions
- Data

👉 Unterschied zur "klassischen" Objektorientierung:

- Trennung zwischen Verhalten und Datenstrukur
  - Calculations: Pure Functions
  - Actions: Seiteneffekte
  - Data`,frontmatter:{layout:"image-right",image:"/images/book-grokking-simplicity.png",title:"Alternative Beschreibung"},index:0,start:0,end:22},inline:{raw:`---
src: ./pages/grokking-simplicity-01.md
---
`,content:"",frontmatter:{},index:6,start:42,end:46},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/grokking-simplicity-01.md",noteHTML:"",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:pC,meta:{layout:"two-cols",srcSequence:"./pages/02-fp-basics_sprachen.md",slide:{raw:null,content:`<img
  class="absolute top-0 right-10 w-150"
  src="/images/fp-languages-overview.png"
/>

<div id="sig1">Image: "Get Programming with F#", Isaac Abraham</div>

::right::

- Die Abbildung stellt keine Wertung dar!
- Man sollte verstehen, wo auf dieser Abbildung man sich befindet

<style>
#sig1 {
  margin-top:350px;
  font-size: 12px;
}
</style>`,frontmatter:{layout:"two-cols",srcSequence:"./pages/02-fp-basics_sprachen.md"},index:29,start:0,end:23,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/02-fp-basics_sprachen.md",raw:`---
layout: two-cols
---

<img
  class="absolute top-0 right-10 w-150"
  src="/images/fp-languages-overview.png"
/>

<div id="sig1">Image: "Get Programming with F#", Isaac Abraham</div>

::right::

- Die Abbildung stellt keine Wertung dar!
- Man sollte verstehen, wo auf dieser Abbildung man sich befindet

<style>
#sig1 {
  margin-top:350px;
  font-size: 12px;
}
</style>
`,content:`<img
  class="absolute top-0 right-10 w-150"
  src="/images/fp-languages-overview.png"
/>

<div id="sig1">Image: "Get Programming with F#", Isaac Abraham</div>

::right::

- Die Abbildung stellt keine Wertung dar!
- Man sollte verstehen, wo auf dieser Abbildung man sich befindet

<style>
#sig1 {
  margin-top:350px;
  font-size: 12px;
}
</style>`,frontmatter:{layout:"two-cols"},index:0,start:0,end:23},inline:{raw:`---
src: ./pages/02-fp-basics_sprachen.md
---
`,content:"",frontmatter:{},index:7,start:46,end:50},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/02-fp-basics_sprachen.md",noteHTML:"",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:mC,meta:{title:"Mögliches Vorhandensein eines Werts",srcSequence:"./pages/option.md",slide:{raw:null,title:"Mögliches Vorhandensein eines Werts",level:2,content:`## Mögliches Vorhandensein eines Werts

#### oder: null ist gefährlich.`,frontmatter:{title:"Mögliches Vorhandensein eines Werts",srcSequence:"./pages/option.md"},index:30,start:0,end:4,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/option.md",raw:`## Mögliches Vorhandensein eines Werts

#### oder: null ist gefährlich.
`,title:"Mögliches Vorhandensein eines Werts",level:2,content:`## Mögliches Vorhandensein eines Werts

#### oder: null ist gefährlich.`,frontmatter:{title:"Mögliches Vorhandensein eines Werts"},index:0,start:0,end:4},inline:{raw:`---
src: ./pages/option.md
---
`,content:"",frontmatter:{},index:8,start:50,end:54},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/option.md",noteHTML:"",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:kC,meta:{srcSequence:"./pages/option.md",slide:{raw:`
\`\`\`csharp
// Enthält die Signatur die ganze Wahrheit?
public string Stringify<T>(T data)
{
    return null;
}
\`\`\`
`,content:"```csharp\n// Enthält die Signatur die ganze Wahrheit?\npublic string Stringify<T>(T data)\n{\n    return null;\n}\n```",frontmatter:{srcSequence:"./pages/option.md"},index:31,start:5,end:14,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/option.md",raw:`
\`\`\`csharp
// Enthält die Signatur die ganze Wahrheit?
public string Stringify<T>(T data)
{
    return null;
}
\`\`\`
`,content:"```csharp\n// Enthält die Signatur die ganze Wahrheit?\npublic string Stringify<T>(T data)\n{\n    return null;\n}\n```",frontmatter:{},index:1,start:5,end:14},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/option.md",noteHTML:"",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:yC,meta:{srcSequence:"./pages/option.md",slide:{raw:`
\`\`\`csharp
// Sind Magic Values eine gute Idee?
public int Intify(string s)
{
    int result = -1;
    int.TryParse(s, out result);
    return result;
}
\`\`\`
`,content:`\`\`\`csharp
// Sind Magic Values eine gute Idee?
public int Intify(string s)
{
    int result = -1;
    int.TryParse(s, out result);
    return result;
}
\`\`\``,frontmatter:{srcSequence:"./pages/option.md"},index:32,start:15,end:26,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/option.md",raw:`
\`\`\`csharp
// Sind Magic Values eine gute Idee?
public int Intify(string s)
{
    int result = -1;
    int.TryParse(s, out result);
    return result;
}
\`\`\`
`,content:`\`\`\`csharp
// Sind Magic Values eine gute Idee?
public int Intify(string s)
{
    int result = -1;
    int.TryParse(s, out result);
    return result;
}
\`\`\``,frontmatter:{},index:2,start:15,end:26},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/option.md",noteHTML:"",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:EC,meta:{srcSequence:"./pages/option.md",slide:{raw:`
Gemein!

\`\`\`csharp
public class Data
{
    public string Name;
}

public class Do
{
    public Data CreateData() => null;

    public string CreateAndUseData()
    {
        var data = CreateData();
        // kein null-Check -> ist dem Compiler egal
        return data.Name;
    }
}
\`\`\`
`,content:`Gemein!

\`\`\`csharp
public class Data
{
    public string Name;
}

public class Do
{
    public Data CreateData() => null;

    public string CreateAndUseData()
    {
        var data = CreateData();
        // kein null-Check -> ist dem Compiler egal
        return data.Name;
    }
}
\`\`\``,frontmatter:{srcSequence:"./pages/option.md"},index:33,start:27,end:49,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/option.md",raw:`
Gemein!

\`\`\`csharp
public class Data
{
    public string Name;
}

public class Do
{
    public Data CreateData() => null;

    public string CreateAndUseData()
    {
        var data = CreateData();
        // kein null-Check -> ist dem Compiler egal
        return data.Name;
    }
}
\`\`\`
`,content:`Gemein!

\`\`\`csharp
public class Data
{
    public string Name;
}

public class Do
{
    public Data CreateData() => null;

    public string CreateAndUseData()
    {
        var data = CreateData();
        // kein null-Check -> ist dem Compiler egal
        return data.Name;
    }
}
\`\`\``,frontmatter:{},index:3,start:27,end:49},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/option.md",noteHTML:"",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:TC,meta:{srcSequence:"./pages/option.md",slide:{raw:`
## Option

\`\`\`fsharp
type Option<'T> = Some<'T> | None
\`\`\`

- entweder ein Wert ist da - dann ist er in "Some" eingepackt
- oder es ist kein Wert da, dann gibt es ein leeres "None"
- alternative Bezeichnungen: Optional, Maybe
`,title:"Option",level:2,content:`## Option

\`\`\`fsharp
type Option<'T> = Some<'T> | None
\`\`\`

- entweder ein Wert ist da - dann ist er in "Some" eingepackt
- oder es ist kein Wert da, dann gibt es ein leeres "None"
- alternative Bezeichnungen: Optional, Maybe`,frontmatter:{srcSequence:"./pages/option.md"},index:34,start:50,end:61,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/option.md",raw:`
## Option

\`\`\`fsharp
type Option<'T> = Some<'T> | None
\`\`\`

- entweder ein Wert ist da - dann ist er in "Some" eingepackt
- oder es ist kein Wert da, dann gibt es ein leeres "None"
- alternative Bezeichnungen: Optional, Maybe
`,title:"Option",level:2,content:`## Option

\`\`\`fsharp
type Option<'T> = Some<'T> | None
\`\`\`

- entweder ein Wert ist da - dann ist er in "Some" eingepackt
- oder es ist kein Wert da, dann gibt es ein leeres "None"
- alternative Bezeichnungen: Optional, Maybe`,frontmatter:{},index:4,start:50,end:61},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/option.md",noteHTML:"",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:IC,meta:{srcSequence:"./pages/option.md",slide:{raw:`
## Mit Option

\`\`\`csharp
public Option<int> IntifyOption(string s)
{
    int result = -1;
    bool success = int.TryParse(s, out result);
    return success ? Some(result) : None;
}
\`\`\`
`,title:"Mit Option",level:2,content:`## Mit Option

\`\`\`csharp
public Option<int> IntifyOption(string s)
{
    int result = -1;
    bool success = int.TryParse(s, out result);
    return success ? Some(result) : None;
}
\`\`\``,frontmatter:{srcSequence:"./pages/option.md"},index:35,start:62,end:74,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/option.md",raw:`
## Mit Option

\`\`\`csharp
public Option<int> IntifyOption(string s)
{
    int result = -1;
    bool success = int.TryParse(s, out result);
    return success ? Some(result) : None;
}
\`\`\`
`,title:"Mit Option",level:2,content:`## Mit Option

\`\`\`csharp
public Option<int> IntifyOption(string s)
{
    int result = -1;
    bool success = int.TryParse(s, out result);
    return success ? Some(result) : None;
}
\`\`\``,frontmatter:{},index:5,start:62,end:74},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/option.md",noteHTML:"",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:RC,meta:{srcSequence:"./pages/option.md",slide:{raw:`
### Wie komme ich an einen eingepackten Wert ran?

> Pattern matching allows you to match a value against some patterns to select a branch of the code.

\`\`\`csharp
public string Stringify<T>(Option<T> data)
{
    return data.Match(
        None: () => "",
        Some: (existingData) => existingData.ToString()
    );
}
\`\`\`
`,title:"Wie komme ich an einen eingepackten Wert ran?",level:3,content:`### Wie komme ich an einen eingepackten Wert ran?

> Pattern matching allows you to match a value against some patterns to select a branch of the code.

\`\`\`csharp
public string Stringify<T>(Option<T> data)
{
    return data.Match(
        None: () => "",
        Some: (existingData) => existingData.ToString()
    );
}
\`\`\``,frontmatter:{srcSequence:"./pages/option.md"},index:36,start:75,end:90,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/option.md",raw:`
### Wie komme ich an einen eingepackten Wert ran?

> Pattern matching allows you to match a value against some patterns to select a branch of the code.

\`\`\`csharp
public string Stringify<T>(Option<T> data)
{
    return data.Match(
        None: () => "",
        Some: (existingData) => existingData.ToString()
    );
}
\`\`\`
`,title:"Wie komme ich an einen eingepackten Wert ran?",level:3,content:`### Wie komme ich an einen eingepackten Wert ran?

> Pattern matching allows you to match a value against some patterns to select a branch of the code.

\`\`\`csharp
public string Stringify<T>(Option<T> data)
{
    return data.Match(
        None: () => "",
        Some: (existingData) => existingData.ToString()
    );
}
\`\`\``,frontmatter:{},index:6,start:75,end:90},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/option.md",noteHTML:"",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:VC,meta:{srcSequence:"./pages/option.md",slide:{raw:`
### Vorteile

- Explizite Semantik: Wert ist da - oder eben nicht
- Auch für Nicht-Programmierer verständlich(er): "optional" vs. "nullable"
- Die Signatur von Match erzwingt eine Behandlung beider Fälle - nie wieder vergessene Null-Checks!
- Achtung: In C# bleibt das Problem, dass "Option" auch ein Objekt ist - und daher selbst null sein kann
- daher mindestens: in C# explizites NULL enablen mit \`<Nullable>enable</Nullable>\` 
`,title:"Vorteile",level:3,content:`### Vorteile

- Explizite Semantik: Wert ist da - oder eben nicht
- Auch für Nicht-Programmierer verständlich(er): "optional" vs. "nullable"
- Die Signatur von Match erzwingt eine Behandlung beider Fälle - nie wieder vergessene Null-Checks!
- Achtung: In C# bleibt das Problem, dass "Option" auch ein Objekt ist - und daher selbst null sein kann
- daher mindestens: in C# explizites NULL enablen mit \`<Nullable>enable</Nullable>\``,frontmatter:{srcSequence:"./pages/option.md"},index:37,start:91,end:100,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/option.md",raw:`
### Vorteile

- Explizite Semantik: Wert ist da - oder eben nicht
- Auch für Nicht-Programmierer verständlich(er): "optional" vs. "nullable"
- Die Signatur von Match erzwingt eine Behandlung beider Fälle - nie wieder vergessene Null-Checks!
- Achtung: In C# bleibt das Problem, dass "Option" auch ein Objekt ist - und daher selbst null sein kann
- daher mindestens: in C# explizites NULL enablen mit \`<Nullable>enable</Nullable>\` 
`,title:"Vorteile",level:3,content:`### Vorteile

- Explizite Semantik: Wert ist da - oder eben nicht
- Auch für Nicht-Programmierer verständlich(er): "optional" vs. "nullable"
- Die Signatur von Match erzwingt eine Behandlung beider Fälle - nie wieder vergessene Null-Checks!
- Achtung: In C# bleibt das Problem, dass "Option" auch ein Objekt ist - und daher selbst null sein kann
- daher mindestens: in C# explizites NULL enablen mit \`<Nullable>enable</Nullable>\``,frontmatter:{},index:7,start:91,end:100},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/option.md",noteHTML:"",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:UC,meta:{srcSequence:"./pages/option.md",slide:{raw:`
In FP unterscheidet man die Art der Wrapper-Klassen (z.B. IEnumerable) anhand der Funktionen, die sie bereitstellen
`,content:"In FP unterscheidet man die Art der Wrapper-Klassen (z.B. IEnumerable) anhand der Funktionen, die sie bereitstellen",frontmatter:{srcSequence:"./pages/option.md"},index:38,start:101,end:104,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/option.md",raw:`
In FP unterscheidet man die Art der Wrapper-Klassen (z.B. IEnumerable) anhand der Funktionen, die sie bereitstellen
`,content:"In FP unterscheidet man die Art der Wrapper-Klassen (z.B. IEnumerable) anhand der Funktionen, die sie bereitstellen",frontmatter:{},index:8,start:101,end:104},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/option.md",noteHTML:"",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:XC,meta:{title:"LaYumba",srcSequence:"./pages/layumba.md",slide:{raw:null,title:"LaYumba",level:3,content:`### LaYumba

![img](/images/book-csharp-fp-with-comment.png)

- NuGet Paket
- kann nicht alles
- Fokus: Didaktik (Ähnlichkeit mit F#, Haskell)
- "einfache" Variante von [language-ext](https://github.com/louthy/language-ext)`,frontmatter:{title:"LaYumba",srcSequence:"./pages/layumba.md"},index:39,start:0,end:9,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/layumba.md",raw:`### LaYumba

![img](/images/book-csharp-fp-with-comment.png)

- NuGet Paket
- kann nicht alles
- Fokus: Didaktik (Ähnlichkeit mit F#, Haskell)
- "einfache" Variante von [language-ext](https://github.com/louthy/language-ext)
`,title:"LaYumba",level:3,content:`### LaYumba

![img](/images/book-csharp-fp-with-comment.png)

- NuGet Paket
- kann nicht alles
- Fokus: Didaktik (Ähnlichkeit mit F#, Haskell)
- "einfache" Variante von [language-ext](https://github.com/louthy/language-ext)`,frontmatter:{title:"LaYumba"},index:0,start:0,end:9},inline:{raw:`---
src: ./pages/layumba.md
---
`,content:"",frontmatter:{},index:9,start:54,end:58},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/layumba.md",noteHTML:"",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:s$,meta:{srcSequence:"./pages/layumba.md",slide:{raw:`
### language-ext

![img](/images/language-ext-screenshot-github-0.png)
`,title:"language-ext",level:3,content:`### language-ext

![img](/images/language-ext-screenshot-github-0.png)`,frontmatter:{srcSequence:"./pages/layumba.md"},index:40,start:10,end:15,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/layumba.md",raw:`
### language-ext

![img](/images/language-ext-screenshot-github-0.png)
`,title:"language-ext",level:3,content:`### language-ext

![img](/images/language-ext-screenshot-github-0.png)`,frontmatter:{},index:1,start:10,end:15},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/layumba.md",noteHTML:"",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:l$,meta:{srcSequence:"./pages/layumba.md",slide:{raw:`
### language-ext

![img](/images/language-ext-screenshot-github-1.png)
`,title:"language-ext",level:3,content:`### language-ext

![img](/images/language-ext-screenshot-github-1.png)`,frontmatter:{srcSequence:"./pages/layumba.md"},index:41,start:16,end:21,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/layumba.md",raw:`
### language-ext

![img](/images/language-ext-screenshot-github-1.png)
`,title:"language-ext",level:3,content:`### language-ext

![img](/images/language-ext-screenshot-github-1.png)`,frontmatter:{},index:2,start:16,end:21},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/layumba.md",noteHTML:"",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:f$,meta:{srcSequence:"./pages/layumba.md",slide:{raw:`
### language-ext

![img](/images/language-ext-screenshot-github-2.png)
`,title:"language-ext",level:3,content:`### language-ext

![img](/images/language-ext-screenshot-github-2.png)`,frontmatter:{srcSequence:"./pages/layumba.md"},index:42,start:22,end:27,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/layumba.md",raw:`
### language-ext

![img](/images/language-ext-screenshot-github-2.png)
`,title:"language-ext",level:3,content:`### language-ext

![img](/images/language-ext-screenshot-github-2.png)`,frontmatter:{},index:3,start:22,end:27},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/layumba.md",noteHTML:"",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:k$,meta:{srcSequence:"./pages/layumba.md",slide:{raw:`
### language-ext

![img](/images/language-ext-screenshot-github-3.png)
`,title:"language-ext",level:3,content:`### language-ext

![img](/images/language-ext-screenshot-github-3.png)`,frontmatter:{srcSequence:"./pages/layumba.md"},index:43,start:28,end:33,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/layumba.md",raw:`
### language-ext

![img](/images/language-ext-screenshot-github-3.png)
`,title:"language-ext",level:3,content:`### language-ext

![img](/images/language-ext-screenshot-github-3.png)`,frontmatter:{},index:4,start:28,end:33},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/layumba.md",noteHTML:"",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:S$,meta:{srcSequence:"./pages/layumba.md",slide:{raw:`
### language-ext

![img](/images/language-ext-screenshot-github-4.png)
`,title:"language-ext",level:3,content:`### language-ext

![img](/images/language-ext-screenshot-github-4.png)`,frontmatter:{srcSequence:"./pages/layumba.md"},index:44,start:34,end:39,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/layumba.md",raw:`
### language-ext

![img](/images/language-ext-screenshot-github-4.png)
`,title:"language-ext",level:3,content:`### language-ext

![img](/images/language-ext-screenshot-github-4.png)`,frontmatter:{},index:5,start:34,end:39},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/layumba.md",noteHTML:"",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:P$,meta:{srcSequence:"./pages/layumba.md",slide:{raw:`
### language-ext

![img](/images/language-ext-screenshot-github-5.png)
`,title:"language-ext",level:3,content:`### language-ext

![img](/images/language-ext-screenshot-github-5.png)`,frontmatter:{srcSequence:"./pages/layumba.md"},index:45,start:40,end:45,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/layumba.md",raw:`
### language-ext

![img](/images/language-ext-screenshot-github-5.png)
`,title:"language-ext",level:3,content:`### language-ext

![img](/images/language-ext-screenshot-github-5.png)`,frontmatter:{},index:6,start:40,end:45},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/layumba.md",noteHTML:"",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:A$,meta:{srcSequence:"./pages/layumba.md",slide:{raw:`
### Mittelweg: C# Functional Extensions

- Nuget-Paket: [https://github.com/vkhorikov/CSharpFunctionalExtensions](https://github.com/vkhorikov/CSharpFunctionalExtensions)
- hat alles was man braucht, ohne zu kompliziert zu sein`,title:"Mittelweg: C# Functional Extensions",level:3,content:`### Mittelweg: C# Functional Extensions

- Nuget-Paket: [https://github.com/vkhorikov/CSharpFunctionalExtensions](https://github.com/vkhorikov/CSharpFunctionalExtensions)
- hat alles was man braucht, ohne zu kompliziert zu sein`,frontmatter:{srcSequence:"./pages/layumba.md"},index:46,start:46,end:51,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/layumba.md",raw:`
### Mittelweg: C# Functional Extensions

- Nuget-Paket: [https://github.com/vkhorikov/CSharpFunctionalExtensions](https://github.com/vkhorikov/CSharpFunctionalExtensions)
- hat alles was man braucht, ohne zu kompliziert zu sein`,title:"Mittelweg: C# Functional Extensions",level:3,content:`### Mittelweg: C# Functional Extensions

- Nuget-Paket: [https://github.com/vkhorikov/CSharpFunctionalExtensions](https://github.com/vkhorikov/CSharpFunctionalExtensions)
- hat alles was man braucht, ohne zu kompliziert zu sein`,frontmatter:{},index:7,start:46,end:51},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/layumba.md",noteHTML:"",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:D$,meta:{title:"Einführung in F# #",srcSequence:"./pages/fsharp.md",slide:{raw:null,title:"Einführung in F# #",level:1,content:`# Einführung in F# #

![img](/images/fsharp256.png)`,frontmatter:{title:"Einführung in F# #",srcSequence:"./pages/fsharp.md"},index:47,start:0,end:4,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",raw:`# Einführung in F# #

![img](/images/fsharp256.png)
`,title:"Einführung in F# #",level:1,content:`# Einführung in F# #

![img](/images/fsharp256.png)`,frontmatter:{title:"Einführung in F# #"},index:0,start:0,end:4},inline:{raw:`---
src: ./pages/fsharp.md
---
`,content:"",frontmatter:{},index:10,start:58,end:62},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",noteHTML:"",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:q$,meta:{srcSequence:"./pages/fsharp.md",slide:{raw:`
## F# #

- Ursprünglich: Microsoft Forschungsprojekt
- Heute: Community-driven
- inspiriert von OCaml
- Multi-Paradigma
- Fokus auf funktionale Programmierung

<img
  class="absolute top-10 right-10 w-100"
  src="/images/fsharp256.png"
/>
`,title:"F# #",level:2,content:`## F# #

- Ursprünglich: Microsoft Forschungsprojekt
- Heute: Community-driven
- inspiriert von OCaml
- Multi-Paradigma
- Fokus auf funktionale Programmierung

<img
  class="absolute top-10 right-10 w-100"
  src="/images/fsharp256.png"
/>`,frontmatter:{srcSequence:"./pages/fsharp.md"},index:48,start:5,end:19,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",raw:`
## F# #

- Ursprünglich: Microsoft Forschungsprojekt
- Heute: Community-driven
- inspiriert von OCaml
- Multi-Paradigma
- Fokus auf funktionale Programmierung

<img
  class="absolute top-10 right-10 w-100"
  src="/images/fsharp256.png"
/>
`,title:"F# #",level:2,content:`## F# #

- Ursprünglich: Microsoft Forschungsprojekt
- Heute: Community-driven
- inspiriert von OCaml
- Multi-Paradigma
- Fokus auf funktionale Programmierung

<img
  class="absolute top-10 right-10 w-100"
  src="/images/fsharp256.png"
/>`,frontmatter:{},index:1,start:5,end:19},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",noteHTML:"",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:U$,meta:{srcSequence:"./pages/fsharp.md",slide:{raw:`
## F# #

- erzwingt keine puren Funktionen, sondern erlaubt Seiteneffekte
- Statisch typisiert
- integriert ins .NET Ökosystem
- C# / VB.NET Interop

<img
  class="absolute top-10 right-10 w-100"
  src="/images/fsharp256.png"
/>
`,title:"F# #",level:2,content:`## F# #

- erzwingt keine puren Funktionen, sondern erlaubt Seiteneffekte
- Statisch typisiert
- integriert ins .NET Ökosystem
- C# / VB.NET Interop

<img
  class="absolute top-10 right-10 w-100"
  src="/images/fsharp256.png"
/>`,frontmatter:{srcSequence:"./pages/fsharp.md"},index:49,start:20,end:33,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",raw:`
## F# #

- erzwingt keine puren Funktionen, sondern erlaubt Seiteneffekte
- Statisch typisiert
- integriert ins .NET Ökosystem
- C# / VB.NET Interop

<img
  class="absolute top-10 right-10 w-100"
  src="/images/fsharp256.png"
/>
`,title:"F# #",level:2,content:`## F# #

- erzwingt keine puren Funktionen, sondern erlaubt Seiteneffekte
- Statisch typisiert
- integriert ins .NET Ökosystem
- C# / VB.NET Interop

<img
  class="absolute top-10 right-10 w-100"
  src="/images/fsharp256.png"
/>`,frontmatter:{},index:2,start:20,end:33},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",noteHTML:"",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:J$,meta:{srcSequence:"./pages/fsharp.md",slide:{raw:`
## Besonderheiten

- Significant whitespace
- Reihenfolge der Definitionen in Datei wichtig
- Reihenfolge der Dateien im Projekt wichtig

<img
  class="absolute top-10 right-10 w-100"
  src="/images/fsharp256.png"
/>
`,title:"Besonderheiten",level:2,content:`## Besonderheiten

- Significant whitespace
- Reihenfolge der Definitionen in Datei wichtig
- Reihenfolge der Dateien im Projekt wichtig

<img
  class="absolute top-10 right-10 w-100"
  src="/images/fsharp256.png"
/>`,frontmatter:{srcSequence:"./pages/fsharp.md"},index:50,start:34,end:46,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",raw:`
## Besonderheiten

- Significant whitespace
- Reihenfolge der Definitionen in Datei wichtig
- Reihenfolge der Dateien im Projekt wichtig

<img
  class="absolute top-10 right-10 w-100"
  src="/images/fsharp256.png"
/>
`,title:"Besonderheiten",level:2,content:`## Besonderheiten

- Significant whitespace
- Reihenfolge der Definitionen in Datei wichtig
- Reihenfolge der Dateien im Projekt wichtig

<img
  class="absolute top-10 right-10 w-100"
  src="/images/fsharp256.png"
/>`,frontmatter:{},index:3,start:34,end:46},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",noteHTML:"",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:nP,meta:{srcSequence:"./pages/fsharp.md",slide:{raw:`
## Immutability als Default

\`\`\`fsharp
// Achtung: = ist hier keine Zuweisung, sondern heißt 
// "linke und rechte Seite sind gleich und bleiben es auch immer"
let x = 3
let add a b = a + b
let m = if 3 > 0 then 7 else 42

// Mutability nur auf Wunsch - normalerweise unnötig
let mutable y = 3
y <- 42
\`\`\`
`,title:"Immutability als Default",level:2,content:`## Immutability als Default

\`\`\`fsharp
// Achtung: = ist hier keine Zuweisung, sondern heißt 
// "linke und rechte Seite sind gleich und bleiben es auch immer"
let x = 3
let add a b = a + b
let m = if 3 > 0 then 7 else 42

// Mutability nur auf Wunsch - normalerweise unnötig
let mutable y = 3
y <- 42
\`\`\``,frontmatter:{srcSequence:"./pages/fsharp.md"},index:51,start:47,end:62,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",raw:`
## Immutability als Default

\`\`\`fsharp
// Achtung: = ist hier keine Zuweisung, sondern heißt 
// "linke und rechte Seite sind gleich und bleiben es auch immer"
let x = 3
let add a b = a + b
let m = if 3 > 0 then 7 else 42

// Mutability nur auf Wunsch - normalerweise unnötig
let mutable y = 3
y <- 42
\`\`\`
`,title:"Immutability als Default",level:2,content:`## Immutability als Default

\`\`\`fsharp
// Achtung: = ist hier keine Zuweisung, sondern heißt 
// "linke und rechte Seite sind gleich und bleiben es auch immer"
let x = 3
let add a b = a + b
let m = if 3 > 0 then 7 else 42

// Mutability nur auf Wunsch - normalerweise unnötig
let mutable y = 3
y <- 42
\`\`\``,frontmatter:{},index:4,start:47,end:62},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",noteHTML:"",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:rP,meta:{srcSequence:"./pages/fsharp.md",slide:{raw:`
## Typ-Inferenz

\`\`\`fsharp
// Typen werden automatisch abgeleitet sofern möglich
let double a = a * 2 // int -> int

// Explizite Angaben möglich
let doubleExplicit (a: int) : int = a * 2
\`\`\`
`,title:"Typ-Inferenz",level:2,content:`## Typ-Inferenz

\`\`\`fsharp
// Typen werden automatisch abgeleitet sofern möglich
let double a = a * 2 // int -> int

// Explizite Angaben möglich
let doubleExplicit (a: int) : int = a * 2
\`\`\``,frontmatter:{srcSequence:"./pages/fsharp.md"},index:52,start:63,end:74,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",raw:`
## Typ-Inferenz

\`\`\`fsharp
// Typen werden automatisch abgeleitet sofern möglich
let double a = a * 2 // int -> int

// Explizite Angaben möglich
let doubleExplicit (a: int) : int = a * 2
\`\`\`
`,title:"Typ-Inferenz",level:2,content:`## Typ-Inferenz

\`\`\`fsharp
// Typen werden automatisch abgeleitet sofern möglich
let double a = a * 2 // int -> int

// Explizite Angaben möglich
let doubleExplicit (a: int) : int = a * 2
\`\`\``,frontmatter:{},index:5,start:63,end:74},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",noteHTML:"",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:uP,meta:{srcSequence:"./pages/fsharp.md",slide:{raw:`
## Currying

> Currying ist die Umwandlung einer Funktion mit mehreren Argumenten in eine Funktion mit einem Argument, die wiederum eine Funktion zurückgibt mit dem Rest der Argumente.

\`\`\`fsharp
// int -> int -> int -> int
// eigentlich: int -> (int -> (int -> int))
let addThree a b c = a + b + c
\`\`\`
`,title:"Currying",level:2,content:`## Currying

> Currying ist die Umwandlung einer Funktion mit mehreren Argumenten in eine Funktion mit einem Argument, die wiederum eine Funktion zurückgibt mit dem Rest der Argumente.

\`\`\`fsharp
// int -> int -> int -> int
// eigentlich: int -> (int -> (int -> int))
let addThree a b c = a + b + c
\`\`\``,frontmatter:{srcSequence:"./pages/fsharp.md"},index:53,start:75,end:86,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",raw:`
## Currying

> Currying ist die Umwandlung einer Funktion mit mehreren Argumenten in eine Funktion mit einem Argument, die wiederum eine Funktion zurückgibt mit dem Rest der Argumente.

\`\`\`fsharp
// int -> int -> int -> int
// eigentlich: int -> (int -> (int -> int))
let addThree a b c = a + b + c
\`\`\`
`,title:"Currying",level:2,content:`## Currying

> Currying ist die Umwandlung einer Funktion mit mehreren Argumenten in eine Funktion mit einem Argument, die wiederum eine Funktion zurückgibt mit dem Rest der Argumente.

\`\`\`fsharp
// int -> int -> int -> int
// eigentlich: int -> (int -> (int -> int))
let addThree a b c = a + b + c
\`\`\``,frontmatter:{},index:6,start:75,end:86},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",noteHTML:"",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:mP,meta:{srcSequence:"./pages/fsharp.md",slide:{raw:`
## Partial Application

- Eine Funktion mit mehreren Parametern bekommt nur einen Teil ihrer Argumente übergeben - der Rest bleibt offen und kann später ausgefüllt werden

\`\`\`fsharp
// Partial Application
let add a b = a + b // int -> (int -> (int))
let add2 = add 2 // (int -> (int))
let six = add2 4 // (int)
let ten = add2 8 // (int)
\`\`\`
`,title:"Partial Application",level:2,content:`## Partial Application

- Eine Funktion mit mehreren Parametern bekommt nur einen Teil ihrer Argumente übergeben - der Rest bleibt offen und kann später ausgefüllt werden

\`\`\`fsharp
// Partial Application
let add a b = a + b // int -> (int -> (int))
let add2 = add 2 // (int -> (int))
let six = add2 4 // (int)
let ten = add2 8 // (int)
\`\`\``,frontmatter:{srcSequence:"./pages/fsharp.md"},index:54,start:87,end:100,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",raw:`
## Partial Application

- Eine Funktion mit mehreren Parametern bekommt nur einen Teil ihrer Argumente übergeben - der Rest bleibt offen und kann später ausgefüllt werden

\`\`\`fsharp
// Partial Application
let add a b = a + b // int -> (int -> (int))
let add2 = add 2 // (int -> (int))
let six = add2 4 // (int)
let ten = add2 8 // (int)
\`\`\`
`,title:"Partial Application",level:2,content:`## Partial Application

- Eine Funktion mit mehreren Parametern bekommt nur einen Teil ihrer Argumente übergeben - der Rest bleibt offen und kann später ausgefüllt werden

\`\`\`fsharp
// Partial Application
let add a b = a + b // int -> (int -> (int))
let add2 = add 2 // (int -> (int))
let six = add2 4 // (int)
let ten = add2 8 // (int)
\`\`\``,frontmatter:{},index:7,start:87,end:100},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",noteHTML:"",id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:bP,meta:{srcSequence:"./pages/fsharp.md",slide:{raw:`
## Pipe-Operator

\`\`\`fsharp
// der letzte Parameter kann mit dem Ergebnis 
// der vorherigen Expression ausgefüllt werden
let double a = a * 2
4 |> double // ergibt 8
4 |> double |> double // ergibt 16
\`\`\`
`,title:"Pipe-Operator",level:2,content:`## Pipe-Operator

\`\`\`fsharp
// der letzte Parameter kann mit dem Ergebnis 
// der vorherigen Expression ausgefüllt werden
let double a = a * 2
4 |> double // ergibt 8
4 |> double |> double // ergibt 16
\`\`\``,frontmatter:{srcSequence:"./pages/fsharp.md"},index:55,start:101,end:112,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",raw:`
## Pipe-Operator

\`\`\`fsharp
// der letzte Parameter kann mit dem Ergebnis 
// der vorherigen Expression ausgefüllt werden
let double a = a * 2
4 |> double // ergibt 8
4 |> double |> double // ergibt 16
\`\`\`
`,title:"Pipe-Operator",level:2,content:`## Pipe-Operator

\`\`\`fsharp
// der letzte Parameter kann mit dem Ergebnis 
// der vorherigen Expression ausgefüllt werden
let double a = a * 2
4 |> double // ergibt 8
4 |> double |> double // ergibt 16
\`\`\``,frontmatter:{},index:8,start:101,end:112},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",noteHTML:"",id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",name:"page-57",component:SP,meta:{srcSequence:"./pages/fsharp.md",slide:{raw:`
## Discriminated Unions

\`\`\`fsharp
// Discriminated Unions ("Tagged Union", "Sum Type", "Choice Type")
type Vehicle = Bike | Car | Bus

// Pattern Matching zur Behandlung der verschiedenen Fälle
let vehicle = Bike
let laneText = 
  match vehicle with
  | Bike -> "Use the bike lane"
  | Car -> "Use the car driving lane"
  | Bus -> "The bus uses its own lane"

\`\`\`
`,title:"Discriminated Unions",level:2,content:`## Discriminated Unions

\`\`\`fsharp
// Discriminated Unions ("Tagged Union", "Sum Type", "Choice Type")
type Vehicle = Bike | Car | Bus

// Pattern Matching zur Behandlung der verschiedenen Fälle
let vehicle = Bike
let laneText = 
  match vehicle with
  | Bike -> "Use the bike lane"
  | Car -> "Use the car driving lane"
  | Bus -> "The bus uses its own lane"

\`\`\``,frontmatter:{srcSequence:"./pages/fsharp.md"},index:56,start:113,end:130,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",raw:`
## Discriminated Unions

\`\`\`fsharp
// Discriminated Unions ("Tagged Union", "Sum Type", "Choice Type")
type Vehicle = Bike | Car | Bus

// Pattern Matching zur Behandlung der verschiedenen Fälle
let vehicle = Bike
let laneText = 
  match vehicle with
  | Bike -> "Use the bike lane"
  | Car -> "Use the car driving lane"
  | Bus -> "The bus uses its own lane"

\`\`\`
`,title:"Discriminated Unions",level:2,content:`## Discriminated Unions

\`\`\`fsharp
// Discriminated Unions ("Tagged Union", "Sum Type", "Choice Type")
type Vehicle = Bike | Car | Bus

// Pattern Matching zur Behandlung der verschiedenen Fälle
let vehicle = Bike
let laneText = 
  match vehicle with
  | Bike -> "Use the bike lane"
  | Car -> "Use the car driving lane"
  | Bus -> "The bus uses its own lane"

\`\`\``,frontmatter:{},index:9,start:113,end:130},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",noteHTML:"",id:56,no:57},__clicksElements:[],__preloaded:!1}},{path:"58",name:"page-58",component:$P,meta:{srcSequence:"./pages/fsharp.md",slide:{raw:`
## Discriminated Unions mit Werten

\`\`\`fsharp
// auch mit unterschiedlichen(!) Daten an jedem Fall möglich
type Shape =
    | Circle of float
    | Rectangle of float * float

let c = Circle 42.42

match c with
| Circle radius -> radius * radius * System.Math.PI
| Rectangle(width, height) -> width * height
\`\`\`
`,title:"Discriminated Unions mit Werten",level:2,content:`## Discriminated Unions mit Werten

\`\`\`fsharp
// auch mit unterschiedlichen(!) Daten an jedem Fall möglich
type Shape =
    | Circle of float
    | Rectangle of float * float

let c = Circle 42.42

match c with
| Circle radius -> radius * radius * System.Math.PI
| Rectangle(width, height) -> width * height
\`\`\``,frontmatter:{srcSequence:"./pages/fsharp.md"},index:57,start:131,end:147,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",raw:`
## Discriminated Unions mit Werten

\`\`\`fsharp
// auch mit unterschiedlichen(!) Daten an jedem Fall möglich
type Shape =
    | Circle of float
    | Rectangle of float * float

let c = Circle 42.42

match c with
| Circle radius -> radius * radius * System.Math.PI
| Rectangle(width, height) -> width * height
\`\`\`
`,title:"Discriminated Unions mit Werten",level:2,content:`## Discriminated Unions mit Werten

\`\`\`fsharp
// auch mit unterschiedlichen(!) Daten an jedem Fall möglich
type Shape =
    | Circle of float
    | Rectangle of float * float

let c = Circle 42.42

match c with
| Circle radius -> radius * radius * System.Math.PI
| Rectangle(width, height) -> width * height
\`\`\``,frontmatter:{},index:10,start:131,end:147},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",noteHTML:"",id:57,no:58},__clicksElements:[],__preloaded:!1}},{path:"59",name:"page-59",component:FP,meta:{srcSequence:"./pages/fsharp.md",slide:{raw:`
## Record Types

\`\`\`fsharp
// Record Type
type ShoppingCart = {
    products: Product list
    total: float
    createdAt: System.DateTime
}

// Typ muss nur angegeben werden wenn er nicht eindeutig ist
let shoppingCart = {
    products = []
    total = 42.42
    createdAt = System.DateTime.Now
}
\`\`\`
`,title:"Record Types",level:2,content:`## Record Types

\`\`\`fsharp
// Record Type
type ShoppingCart = {
    products: Product list
    total: float
    createdAt: System.DateTime
}

// Typ muss nur angegeben werden wenn er nicht eindeutig ist
let shoppingCart = {
    products = []
    total = 42.42
    createdAt = System.DateTime.Now
}
\`\`\``,frontmatter:{srcSequence:"./pages/fsharp.md"},index:58,start:148,end:167,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",raw:`
## Record Types

\`\`\`fsharp
// Record Type
type ShoppingCart = {
    products: Product list
    total: float
    createdAt: System.DateTime
}

// Typ muss nur angegeben werden wenn er nicht eindeutig ist
let shoppingCart = {
    products = []
    total = 42.42
    createdAt = System.DateTime.Now
}
\`\`\`
`,title:"Record Types",level:2,content:`## Record Types

\`\`\`fsharp
// Record Type
type ShoppingCart = {
    products: Product list
    total: float
    createdAt: System.DateTime
}

// Typ muss nur angegeben werden wenn er nicht eindeutig ist
let shoppingCart = {
    products = []
    total = 42.42
    createdAt = System.DateTime.Now
}
\`\`\``,frontmatter:{},index:11,start:148,end:167},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",noteHTML:"",id:58,no:59},__clicksElements:[],__preloaded:!1}},{path:"60",name:"page-60",component:DP,meta:{srcSequence:"./pages/fsharp.md",slide:{raw:`
## ...Also known as...

- Discriminated Union
  - OR-Type
  - Sum-Type: Der Zustand ergibt sich aus der Summe der Auswahlmöglichkeiten (*)
- Record Type
  - AND-Type
  - Product-Type: Der Zustand ergibt sich aus dem kartesischen Produkt aller Möglichkeiten jedes Feldes (*)

(*) Algebraic Data Types
`,title:"...Also known as...",level:2,content:`## ...Also known as...

- Discriminated Union
  - OR-Type
  - Sum-Type: Der Zustand ergibt sich aus der Summe der Auswahlmöglichkeiten (*)
- Record Type
  - AND-Type
  - Product-Type: Der Zustand ergibt sich aus dem kartesischen Produkt aller Möglichkeiten jedes Feldes (*)

(*) Algebraic Data Types`,frontmatter:{srcSequence:"./pages/fsharp.md"},index:59,start:168,end:180,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",raw:`
## ...Also known as...

- Discriminated Union
  - OR-Type
  - Sum-Type: Der Zustand ergibt sich aus der Summe der Auswahlmöglichkeiten (*)
- Record Type
  - AND-Type
  - Product-Type: Der Zustand ergibt sich aus dem kartesischen Produkt aller Möglichkeiten jedes Feldes (*)

(*) Algebraic Data Types
`,title:"...Also known as...",level:2,content:`## ...Also known as...

- Discriminated Union
  - OR-Type
  - Sum-Type: Der Zustand ergibt sich aus der Summe der Auswahlmöglichkeiten (*)
- Record Type
  - AND-Type
  - Product-Type: Der Zustand ergibt sich aus dem kartesischen Produkt aller Möglichkeiten jedes Feldes (*)

(*) Algebraic Data Types`,frontmatter:{},index:12,start:168,end:180},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",noteHTML:"",id:59,no:60},__clicksElements:[],__preloaded:!1}},{path:"61",name:"page-61",component:WP,meta:{srcSequence:"./pages/fsharp.md",slide:{raw:"\n### Algebraic Data Types: Sum Type\n\n```fsharp\ntype Vehicle = Bike | Car | Bus\n```\n\nAlle möglichen Zustaende von `Vehicle` sind: `Bike`, `Car`, oder `Bus`. \n\nDies entspricht der **Summe** der Auswahlmöglichkeiten.\n",title:"Algebraic Data Types: Sum Type",level:3,content:"### Algebraic Data Types: Sum Type\n\n```fsharp\ntype Vehicle = Bike | Car | Bus\n```\n\nAlle möglichen Zustaende von `Vehicle` sind: `Bike`, `Car`, oder `Bus`. \n\nDies entspricht der **Summe** der Auswahlmöglichkeiten.",frontmatter:{srcSequence:"./pages/fsharp.md"},index:60,start:181,end:192,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",raw:"\n### Algebraic Data Types: Sum Type\n\n```fsharp\ntype Vehicle = Bike | Car | Bus\n```\n\nAlle möglichen Zustaende von `Vehicle` sind: `Bike`, `Car`, oder `Bus`. \n\nDies entspricht der **Summe** der Auswahlmöglichkeiten.\n",title:"Algebraic Data Types: Sum Type",level:3,content:"### Algebraic Data Types: Sum Type\n\n```fsharp\ntype Vehicle = Bike | Car | Bus\n```\n\nAlle möglichen Zustaende von `Vehicle` sind: `Bike`, `Car`, oder `Bus`. \n\nDies entspricht der **Summe** der Auswahlmöglichkeiten.",frontmatter:{},index:13,start:181,end:192},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",noteHTML:"",id:60,no:61},__clicksElements:[],__preloaded:!1}},{path:"62",name:"page-62",component:ZP,meta:{srcSequence:"./pages/fsharp.md",slide:{raw:"\n### Algebraic Data Types: Product Type\n\n```fsharp\ntype TruthTable {\n  Wert1: bool\n  Wert2: bool\n}\n```\n\nAlle möglichen Zustände von `TruthTable` sind:\n\n- `true`, `false`\n- `true`, `true`\n- `false`, `false`\n- `false`, `true`\n\nDiese Menge nennt man kartesisches **Produkt**.\n",title:"Algebraic Data Types: Product Type",level:3,content:"### Algebraic Data Types: Product Type\n\n```fsharp\ntype TruthTable {\n  Wert1: bool\n  Wert2: bool\n}\n```\n\nAlle möglichen Zustände von `TruthTable` sind:\n\n- `true`, `false`\n- `true`, `true`\n- `false`, `false`\n- `false`, `true`\n\nDiese Menge nennt man kartesisches **Produkt**.",frontmatter:{srcSequence:"./pages/fsharp.md"},index:61,start:193,end:212,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",raw:"\n### Algebraic Data Types: Product Type\n\n```fsharp\ntype TruthTable {\n  Wert1: bool\n  Wert2: bool\n}\n```\n\nAlle möglichen Zustände von `TruthTable` sind:\n\n- `true`, `false`\n- `true`, `true`\n- `false`, `false`\n- `false`, `true`\n\nDiese Menge nennt man kartesisches **Produkt**.\n",title:"Algebraic Data Types: Product Type",level:3,content:"### Algebraic Data Types: Product Type\n\n```fsharp\ntype TruthTable {\n  Wert1: bool\n  Wert2: bool\n}\n```\n\nAlle möglichen Zustände von `TruthTable` sind:\n\n- `true`, `false`\n- `true`, `true`\n- `false`, `false`\n- `false`, `true`\n\nDiese Menge nennt man kartesisches **Produkt**.",frontmatter:{},index:14,start:193,end:212},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",noteHTML:"",id:61,no:62},__clicksElements:[],__preloaded:!1}},{path:"63",name:"page-63",component:QP,meta:{srcSequence:"./pages/fsharp.md",slide:{raw:`
## Record Types

- Immutable by default
- Unmöglich einen ungültigen Record zu erzeugen
- Structural Equality
- Hint: C# Value Objects out of the box
- ✨ seit C# 9: \`records\`
`,title:"Record Types",level:2,content:`## Record Types

- Immutable by default
- Unmöglich einen ungültigen Record zu erzeugen
- Structural Equality
- Hint: C# Value Objects out of the box
- ✨ seit C# 9: \`records\``,frontmatter:{srcSequence:"./pages/fsharp.md"},index:62,start:213,end:222,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",raw:`
## Record Types

- Immutable by default
- Unmöglich einen ungültigen Record zu erzeugen
- Structural Equality
- Hint: C# Value Objects out of the box
- ✨ seit C# 9: \`records\`
`,title:"Record Types",level:2,content:`## Record Types

- Immutable by default
- Unmöglich einen ungültigen Record zu erzeugen
- Structural Equality
- Hint: C# Value Objects out of the box
- ✨ seit C# 9: \`records\``,frontmatter:{},index:15,start:213,end:222},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",noteHTML:"",id:62,no:63},__clicksElements:[],__preloaded:!1}},{path:"64",name:"page-64",component:a6,meta:{srcSequence:"./pages/fsharp.md",slide:{raw:`
## Structural Equality

\`\`\`fsharp
// Structural Equality
type Thing = {content: string; id: int}
let thing1 = {content = "abc"; id = 15}
let thing2 = {content = "abc"; id = 15}
let equal = (thing1 = thing2) // true
\`\`\`

- Record Types mit Structural Equality sind ideal, um sehr kompakt "Value Objects" ausdrücken zu können
`,title:"Structural Equality",level:2,content:`## Structural Equality

\`\`\`fsharp
// Structural Equality
type Thing = {content: string; id: int}
let thing1 = {content = "abc"; id = 15}
let thing2 = {content = "abc"; id = 15}
let equal = (thing1 = thing2) // true
\`\`\`

- Record Types mit Structural Equality sind ideal, um sehr kompakt "Value Objects" ausdrücken zu können`,frontmatter:{srcSequence:"./pages/fsharp.md"},index:63,start:223,end:236,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",raw:`
## Structural Equality

\`\`\`fsharp
// Structural Equality
type Thing = {content: string; id: int}
let thing1 = {content = "abc"; id = 15}
let thing2 = {content = "abc"; id = 15}
let equal = (thing1 = thing2) // true
\`\`\`

- Record Types mit Structural Equality sind ideal, um sehr kompakt "Value Objects" ausdrücken zu können
`,title:"Structural Equality",level:2,content:`## Structural Equality

\`\`\`fsharp
// Structural Equality
type Thing = {content: string; id: int}
let thing1 = {content = "abc"; id = 15}
let thing2 = {content = "abc"; id = 15}
let equal = (thing1 = thing2) // true
\`\`\`

- Record Types mit Structural Equality sind ideal, um sehr kompakt "Value Objects" ausdrücken zu können`,frontmatter:{},index:16,start:223,end:236},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",noteHTML:"",id:63,no:64},__clicksElements:[],__preloaded:!1}},{path:"65",name:"page-65",component:c6,meta:{srcSequence:"./pages/fsharp.md",slide:{raw:`
## Structural Equality vs. DDD Aggregates

- Möchte man die Standard-Equality nicht, ist es best practice, Equality und Comparison zu verbieten
- dann muss explizit auf eine Eigenschaft verglichen werden (z.B. die Id)

\`\`\`fsharp
[<NoEquality; NoComparison>]
type NonEquatableNonComparable = {
    Id: int
}
\`\`\`
`,title:"Structural Equality vs. DDD Aggregates",level:2,content:`## Structural Equality vs. DDD Aggregates

- Möchte man die Standard-Equality nicht, ist es best practice, Equality und Comparison zu verbieten
- dann muss explizit auf eine Eigenschaft verglichen werden (z.B. die Id)

\`\`\`fsharp
[<NoEquality; NoComparison>]
type NonEquatableNonComparable = {
    Id: int
}
\`\`\``,frontmatter:{srcSequence:"./pages/fsharp.md"},index:64,start:237,end:250,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",raw:`
## Structural Equality vs. DDD Aggregates

- Möchte man die Standard-Equality nicht, ist es best practice, Equality und Comparison zu verbieten
- dann muss explizit auf eine Eigenschaft verglichen werden (z.B. die Id)

\`\`\`fsharp
[<NoEquality; NoComparison>]
type NonEquatableNonComparable = {
    Id: int
}
\`\`\`
`,title:"Structural Equality vs. DDD Aggregates",level:2,content:`## Structural Equality vs. DDD Aggregates

- Möchte man die Standard-Equality nicht, ist es best practice, Equality und Comparison zu verbieten
- dann muss explizit auf eine Eigenschaft verglichen werden (z.B. die Id)

\`\`\`fsharp
[<NoEquality; NoComparison>]
type NonEquatableNonComparable = {
    Id: int
}
\`\`\``,frontmatter:{},index:17,start:237,end:250},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/fsharp.md",noteHTML:"",id:64,no:65},__clicksElements:[],__preloaded:!1}},{path:"66",name:"page-66",component:g6,meta:{title:"C# 9 and greater...",srcSequence:"./pages/csharp9.md",slide:{raw:null,title:"C# 9 and greater...",level:3,content:`### C# 9 and greater...

- (✅) record types
- 💥 discriminated unions (Tip on next slide)
- (✅) pattern matching
- (✅) immutability / non-nullability

![/images/tweet-don-syme-fsharp-csharp.png](/images/tweet-don-syme-fsharp-csharp.png)

https://twitter.com/dsymetweets/status/1294280620823240706`,frontmatter:{title:"C# 9 and greater...",srcSequence:"./pages/csharp9.md"},index:65,start:0,end:11,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/csharp9.md",raw:`### C# 9 and greater...

- (✅) record types
- 💥 discriminated unions (Tip on next slide)
- (✅) pattern matching
- (✅) immutability / non-nullability

![/images/tweet-don-syme-fsharp-csharp.png](/images/tweet-don-syme-fsharp-csharp.png)

https://twitter.com/dsymetweets/status/1294280620823240706
`,title:"C# 9 and greater...",level:3,content:`### C# 9 and greater...

- (✅) record types
- 💥 discriminated unions (Tip on next slide)
- (✅) pattern matching
- (✅) immutability / non-nullability

![/images/tweet-don-syme-fsharp-csharp.png](/images/tweet-don-syme-fsharp-csharp.png)

https://twitter.com/dsymetweets/status/1294280620823240706`,frontmatter:{title:"C# 9 and greater..."},index:0,start:0,end:11},inline:{raw:`---
src: ./pages/csharp9.md
---
`,content:"",frontmatter:{},index:11,start:62,end:66},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/csharp9.md",noteHTML:"",id:65,no:66},__clicksElements:[],__preloaded:!1}},{path:"67",name:"page-67",component:w6,meta:{layout:"two-cols",srcSequence:"./pages/csharp9.md",slide:{raw:`---
layout: two-cols
---

### Discriminated Unions in C#


\`\`\`csharp
record Rectangle(int Width, int Height);
record Circle(int Radius);

// Discriminated Union
class Shape : OneOfBase<Circle, Rectangle>
{
    private Shape(OneOf<Circle, Rectangle> _) : base(_) {}
    static implicit operator Shape(Rectangle _) => new(_);
    static implicit operator Shape(Circle _) => new(_);
}

// Usage: Pattern Matching
static string Describe(Shape shape) =>
    shape.Match(
        circle => 
            $"Circle has radius {circle.Radius}",
        rectangle => 
            $"H: {rectangle.Height} " +
            $"W: {rectangle.Width}");
\`\`\`

- "OneOf" [https://github.com/mcintyre321/OneOf](https://github.com/mcintyre321/OneOf)

::right::

\`\`\`csharp
[Fact]
public void Shape_tests()
{
    Shape shape1 = new Circle(42);
    Shape shape2 = new Rectangle(2, 3);

    var result1 = Describe(shape1);
    var result2 = Describe(shape2);

    result1.Should().Be("Circle has radius 42");
    result2.Should().Be("H: 3 W: 2");
}
\`\`\`

<!-- <style>
.slidev-code * {
    font-size: smaller !important;
}
</style> -->`,title:"Discriminated Unions in C#",level:3,content:`### Discriminated Unions in C#


\`\`\`csharp
record Rectangle(int Width, int Height);
record Circle(int Radius);

// Discriminated Union
class Shape : OneOfBase<Circle, Rectangle>
{
    private Shape(OneOf<Circle, Rectangle> _) : base(_) {}
    static implicit operator Shape(Rectangle _) => new(_);
    static implicit operator Shape(Circle _) => new(_);
}

// Usage: Pattern Matching
static string Describe(Shape shape) =>
    shape.Match(
        circle => 
            $"Circle has radius {circle.Radius}",
        rectangle => 
            $"H: {rectangle.Height} " +
            $"W: {rectangle.Width}");
\`\`\`

- "OneOf" [https://github.com/mcintyre321/OneOf](https://github.com/mcintyre321/OneOf)

::right::

\`\`\`csharp
[Fact]
public void Shape_tests()
{
    Shape shape1 = new Circle(42);
    Shape shape2 = new Rectangle(2, 3);

    var result1 = Describe(shape1);
    var result2 = Describe(shape2);

    result1.Should().Be("Circle has radius 42");
    result2.Should().Be("H: 3 W: 2");
}
\`\`\``,frontmatter:{layout:"two-cols",srcSequence:"./pages/csharp9.md"},note:`<style>
.slidev-code * {
    font-size: smaller !important;
}
</style>`,index:66,start:11,end:64,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/csharp9.md",raw:`---
layout: two-cols
---

### Discriminated Unions in C#


\`\`\`csharp
record Rectangle(int Width, int Height);
record Circle(int Radius);

// Discriminated Union
class Shape : OneOfBase<Circle, Rectangle>
{
    private Shape(OneOf<Circle, Rectangle> _) : base(_) {}
    static implicit operator Shape(Rectangle _) => new(_);
    static implicit operator Shape(Circle _) => new(_);
}

// Usage: Pattern Matching
static string Describe(Shape shape) =>
    shape.Match(
        circle => 
            $"Circle has radius {circle.Radius}",
        rectangle => 
            $"H: {rectangle.Height} " +
            $"W: {rectangle.Width}");
\`\`\`

- "OneOf" [https://github.com/mcintyre321/OneOf](https://github.com/mcintyre321/OneOf)

::right::

\`\`\`csharp
[Fact]
public void Shape_tests()
{
    Shape shape1 = new Circle(42);
    Shape shape2 = new Rectangle(2, 3);

    var result1 = Describe(shape1);
    var result2 = Describe(shape2);

    result1.Should().Be("Circle has radius 42");
    result2.Should().Be("H: 3 W: 2");
}
\`\`\`

<!-- <style>
.slidev-code * {
    font-size: smaller !important;
}
</style> -->`,title:"Discriminated Unions in C#",level:3,content:`### Discriminated Unions in C#


\`\`\`csharp
record Rectangle(int Width, int Height);
record Circle(int Radius);

// Discriminated Union
class Shape : OneOfBase<Circle, Rectangle>
{
    private Shape(OneOf<Circle, Rectangle> _) : base(_) {}
    static implicit operator Shape(Rectangle _) => new(_);
    static implicit operator Shape(Circle _) => new(_);
}

// Usage: Pattern Matching
static string Describe(Shape shape) =>
    shape.Match(
        circle => 
            $"Circle has radius {circle.Radius}",
        rectangle => 
            $"H: {rectangle.Height} " +
            $"W: {rectangle.Width}");
\`\`\`

- "OneOf" [https://github.com/mcintyre321/OneOf](https://github.com/mcintyre321/OneOf)

::right::

\`\`\`csharp
[Fact]
public void Shape_tests()
{
    Shape shape1 = new Circle(42);
    Shape shape2 = new Rectangle(2, 3);

    var result1 = Describe(shape1);
    var result2 = Describe(shape2);

    result1.Should().Be("Circle has radius 42");
    result2.Should().Be("H: 3 W: 2");
}
\`\`\``,frontmatter:{layout:"two-cols"},note:`<style>
.slidev-code * {
    font-size: smaller !important;
}
</style>`,index:1,start:11,end:64},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/csharp9.md",noteHTML:`<style>
.slidev-code * {
    font-size: smaller !important;
}
</style>`,id:66,no:67},__clicksElements:[],__preloaded:!1}},{path:"68",name:"page-68",component:C6,meta:{title:"Kleine Funktionen zu größeren verbinden",srcSequence:"./pages/funktor.md",slide:{raw:null,title:"Kleine Funktionen zu größeren verbinden",level:2,content:`## Kleine Funktionen zu größeren verbinden

- Gängige Vorgehensweise: Kleine Funktionen werden zu immer größeren Funktionalitäten zusammengesteckt ("Komposition")
- Problem: Nicht alle Funktionen passen gut zusammen`,frontmatter:{title:"Kleine Funktionen zu größeren verbinden",srcSequence:"./pages/funktor.md"},index:67,start:0,end:5,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/funktor.md",raw:`## Kleine Funktionen zu größeren verbinden

- Gängige Vorgehensweise: Kleine Funktionen werden zu immer größeren Funktionalitäten zusammengesteckt ("Komposition")
- Problem: Nicht alle Funktionen passen gut zusammen
`,title:"Kleine Funktionen zu größeren verbinden",level:2,content:`## Kleine Funktionen zu größeren verbinden

- Gängige Vorgehensweise: Kleine Funktionen werden zu immer größeren Funktionalitäten zusammengesteckt ("Komposition")
- Problem: Nicht alle Funktionen passen gut zusammen`,frontmatter:{title:"Kleine Funktionen zu größeren verbinden"},index:0,start:0,end:5},inline:{raw:`---
src: ./pages/funktor.md
---
`,content:"",frontmatter:{},index:12,start:66,end:70},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/funktor.md",noteHTML:"",id:67,no:68},__clicksElements:[],__preloaded:!1}},{path:"69",name:"page-69",component:T6,meta:{srcSequence:"./pages/funktor.md",slide:{raw:`
### Problem: Wert in Container, Funktion kann nichts damit anfangen

\`\`\`fsharp
// F#
module X

let toUpper (s: string) : string = s.ToUpper()

let stringToOption (s: string) : string option =
    if String.IsNullOrWhiteSpace s then
        None
    else
        Some s

let nonEmptyStringToUpper (s: string) : ??? =
    let nonEmpty = stringToOption s
    // passt nicht: "string" erwartet, aber "string option" bekommen
    let nonEmptyUpper = toUpper nonEmpty
\`\`\`
`,title:"Problem: Wert in Container, Funktion kann nichts damit anfangen",level:3,content:`### Problem: Wert in Container, Funktion kann nichts damit anfangen

\`\`\`fsharp
// F#
module X

let toUpper (s: string) : string = s.ToUpper()

let stringToOption (s: string) : string option =
    if String.IsNullOrWhiteSpace s then
        None
    else
        Some s

let nonEmptyStringToUpper (s: string) : ??? =
    let nonEmpty = stringToOption s
    // passt nicht: "string" erwartet, aber "string option" bekommen
    let nonEmptyUpper = toUpper nonEmpty
\`\`\``,frontmatter:{srcSequence:"./pages/funktor.md"},index:68,start:6,end:27,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/funktor.md",raw:`
### Problem: Wert in Container, Funktion kann nichts damit anfangen

\`\`\`fsharp
// F#
module X

let toUpper (s: string) : string = s.ToUpper()

let stringToOption (s: string) : string option =
    if String.IsNullOrWhiteSpace s then
        None
    else
        Some s

let nonEmptyStringToUpper (s: string) : ??? =
    let nonEmpty = stringToOption s
    // passt nicht: "string" erwartet, aber "string option" bekommen
    let nonEmptyUpper = toUpper nonEmpty
\`\`\`
`,title:"Problem: Wert in Container, Funktion kann nichts damit anfangen",level:3,content:`### Problem: Wert in Container, Funktion kann nichts damit anfangen

\`\`\`fsharp
// F#
module X

let toUpper (s: string) : string = s.ToUpper()

let stringToOption (s: string) : string option =
    if String.IsNullOrWhiteSpace s then
        None
    else
        Some s

let nonEmptyStringToUpper (s: string) : ??? =
    let nonEmpty = stringToOption s
    // passt nicht: "string" erwartet, aber "string option" bekommen
    let nonEmptyUpper = toUpper nonEmpty
\`\`\``,frontmatter:{},index:1,start:6,end:27},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/funktor.md",noteHTML:"",id:68,no:69},__clicksElements:[],__preloaded:!1}},{path:"70",name:"page-70",component:M6,meta:{srcSequence:"./pages/funktor.md",slide:{raw:`
\`\`\`csharp
// C#
using LaYumba.Functional;
using static LaYumba.Functional.F;

static class X
{
  string ToUpper(string s) => s.ToUpper();

  Option<string> StringToOption(string s)
    => string.IsNullOrEmpty(s) ? None : Some(s)

  NonEmptyStringToUpper(string s)
  {
    var nonEmpty = StringToOption(s);
    // passt nicht: "string" erwartet, aber "string option" bekommen
    return ToUpper(s);
  }
}
\`\`\`
`,content:`\`\`\`csharp
// C#
using LaYumba.Functional;
using static LaYumba.Functional.F;

static class X
{
  string ToUpper(string s) => s.ToUpper();

  Option<string> StringToOption(string s)
    => string.IsNullOrEmpty(s) ? None : Some(s)

  NonEmptyStringToUpper(string s)
  {
    var nonEmpty = StringToOption(s);
    // passt nicht: "string" erwartet, aber "string option" bekommen
    return ToUpper(s);
  }
}
\`\`\``,frontmatter:{srcSequence:"./pages/funktor.md"},index:69,start:28,end:50,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/funktor.md",raw:`
\`\`\`csharp
// C#
using LaYumba.Functional;
using static LaYumba.Functional.F;

static class X
{
  string ToUpper(string s) => s.ToUpper();

  Option<string> StringToOption(string s)
    => string.IsNullOrEmpty(s) ? None : Some(s)

  NonEmptyStringToUpper(string s)
  {
    var nonEmpty = StringToOption(s);
    // passt nicht: "string" erwartet, aber "string option" bekommen
    return ToUpper(s);
  }
}
\`\`\`
`,content:`\`\`\`csharp
// C#
using LaYumba.Functional;
using static LaYumba.Functional.F;

static class X
{
  string ToUpper(string s) => s.ToUpper();

  Option<string> StringToOption(string s)
    => string.IsNullOrEmpty(s) ? None : Some(s)

  NonEmptyStringToUpper(string s)
  {
    var nonEmpty = StringToOption(s);
    // passt nicht: "string" erwartet, aber "string option" bekommen
    return ToUpper(s);
  }
}
\`\`\``,frontmatter:{},index:2,start:28,end:50},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/funktor.md",noteHTML:"",id:69,no:70},__clicksElements:[],__preloaded:!1}},{path:"71",name:"page-71",component:j6,meta:{srcSequence:"./pages/funktor.md",slide:{raw:`
### Funktor ("Mappable")

![img](/images/Funktor_1.png)
`,title:'Funktor ("Mappable")',level:3,content:`### Funktor ("Mappable")

![img](/images/Funktor_1.png)`,frontmatter:{srcSequence:"./pages/funktor.md"},index:70,start:51,end:56,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/funktor.md",raw:`
### Funktor ("Mappable")

![img](/images/Funktor_1.png)
`,title:'Funktor ("Mappable")',level:3,content:`### Funktor ("Mappable")

![img](/images/Funktor_1.png)`,frontmatter:{},index:3,start:51,end:56},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/funktor.md",noteHTML:"",id:70,no:71},__clicksElements:[],__preloaded:!1}},{path:"72",name:"page-72",component:V6,meta:{srcSequence:"./pages/funktor.md",slide:{raw:`
### Funktor ("Mappable")

- Container mit "map" Funktion (die bestimmten Regeln folgt): "Mappable"
- Bezeichnung in der FP-Welt: **Funktor**

\`\`\`fsharp
  map: (a -> b) -> F a -> F b
\`\`\`
- Andere Bezeichnungen für "map": fmap (z.B. in Haskell), Select (LINQ), &lt;$&gt;, &lt;!&gt;
`,title:'Funktor ("Mappable")',level:3,content:`### Funktor ("Mappable")

- Container mit "map" Funktion (die bestimmten Regeln folgt): "Mappable"
- Bezeichnung in der FP-Welt: **Funktor**

\`\`\`fsharp
  map: (a -> b) -> F a -> F b
\`\`\`
- Andere Bezeichnungen für "map": fmap (z.B. in Haskell), Select (LINQ), &lt;$&gt;, &lt;!&gt;`,frontmatter:{srcSequence:"./pages/funktor.md"},index:71,start:57,end:68,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/funktor.md",raw:`
### Funktor ("Mappable")

- Container mit "map" Funktion (die bestimmten Regeln folgt): "Mappable"
- Bezeichnung in der FP-Welt: **Funktor**

\`\`\`fsharp
  map: (a -> b) -> F a -> F b
\`\`\`
- Andere Bezeichnungen für "map": fmap (z.B. in Haskell), Select (LINQ), &lt;$&gt;, &lt;!&gt;
`,title:'Funktor ("Mappable")',level:3,content:`### Funktor ("Mappable")

- Container mit "map" Funktion (die bestimmten Regeln folgt): "Mappable"
- Bezeichnung in der FP-Welt: **Funktor**

\`\`\`fsharp
  map: (a -> b) -> F a -> F b
\`\`\`
- Andere Bezeichnungen für "map": fmap (z.B. in Haskell), Select (LINQ), &lt;$&gt;, &lt;!&gt;`,frontmatter:{},index:4,start:57,end:68},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/funktor.md",noteHTML:"",id:71,no:72},__clicksElements:[],__preloaded:!1}},{path:"73",name:"page-73",component:K6,meta:{srcSequence:"./pages/funktor.md",slide:{raw:`
### Wert in Container, Funktion passt nicht

\`\`\`fsharp
let toUpper (s: string) : string = s.ToUpper()

let stringToOption (s: string) : string option =
    if String.IsNullOrWhiteSpace s then
        None
    else
        Some s

let nonEmptyStringToUpper (s: string) : string option =
    let nonEmpty = stringToOption s
    let nonEmptyUpper = Option.map toUpper nonEmpty
\`\`\`
`,title:"Wert in Container, Funktion passt nicht",level:3,content:`### Wert in Container, Funktion passt nicht

\`\`\`fsharp
let toUpper (s: string) : string = s.ToUpper()

let stringToOption (s: string) : string option =
    if String.IsNullOrWhiteSpace s then
        None
    else
        Some s

let nonEmptyStringToUpper (s: string) : string option =
    let nonEmpty = stringToOption s
    let nonEmptyUpper = Option.map toUpper nonEmpty
\`\`\``,frontmatter:{srcSequence:"./pages/funktor.md"},index:72,start:69,end:86,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/funktor.md",raw:`
### Wert in Container, Funktion passt nicht

\`\`\`fsharp
let toUpper (s: string) : string = s.ToUpper()

let stringToOption (s: string) : string option =
    if String.IsNullOrWhiteSpace s then
        None
    else
        Some s

let nonEmptyStringToUpper (s: string) : string option =
    let nonEmpty = stringToOption s
    let nonEmptyUpper = Option.map toUpper nonEmpty
\`\`\`
`,title:"Wert in Container, Funktion passt nicht",level:3,content:`### Wert in Container, Funktion passt nicht

\`\`\`fsharp
let toUpper (s: string) : string = s.ToUpper()

let stringToOption (s: string) : string option =
    if String.IsNullOrWhiteSpace s then
        None
    else
        Some s

let nonEmptyStringToUpper (s: string) : string option =
    let nonEmpty = stringToOption s
    let nonEmptyUpper = Option.map toUpper nonEmpty
\`\`\``,frontmatter:{},index:5,start:69,end:86},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/funktor.md",noteHTML:"",id:72,no:73},__clicksElements:[],__preloaded:!1}},{path:"74",name:"page-74",component:J6,meta:{title:"Problem: Verkettung eingepackter Werte",srcSequence:"./pages/monade.md",slide:{raw:null,title:"Problem: Verkettung eingepackter Werte",level:3,content:`### Problem: Verkettung eingepackter Werte

\`\`\`fsharp
let storeInDatabase (path: string) (content: string) : string option = 
  try
    System.IO.File.WriteAllText(path, content)
    Some content
  with
    ex -> None

let stringToOption (s: string) : string option =
    if String.IsNullOrWhiteSpace s then None else Some s

let toUpper (s: string) : string = s.ToUpper()

let nonEmptyStringStoreInPersistenceAndToUpper (path: string) (content: string) : ??? =
    let nonEmpty = stringToOption content
    // passt nicht: "string" erwartet, aber "string option" bekommen
    let stored = storeInDatabase path nonEmpty
    // passt nicht: "string option" erwartet, 
    // aber "string option option" bekommen
    let nonEmptyUpper = Option.map toUpper stored
\`\`\``,frontmatter:{title:"Problem: Verkettung eingepackter Werte",srcSequence:"./pages/monade.md"},index:73,start:0,end:24,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/monade.md",raw:`### Problem: Verkettung eingepackter Werte

\`\`\`fsharp
let storeInDatabase (path: string) (content: string) : string option = 
  try
    System.IO.File.WriteAllText(path, content)
    Some content
  with
    ex -> None

let stringToOption (s: string) : string option =
    if String.IsNullOrWhiteSpace s then None else Some s

let toUpper (s: string) : string = s.ToUpper()

let nonEmptyStringStoreInPersistenceAndToUpper (path: string) (content: string) : ??? =
    let nonEmpty = stringToOption content
    // passt nicht: "string" erwartet, aber "string option" bekommen
    let stored = storeInDatabase path nonEmpty
    // passt nicht: "string option" erwartet, 
    // aber "string option option" bekommen
    let nonEmptyUpper = Option.map toUpper stored
\`\`\`
`,title:"Problem: Verkettung eingepackter Werte",level:3,content:`### Problem: Verkettung eingepackter Werte

\`\`\`fsharp
let storeInDatabase (path: string) (content: string) : string option = 
  try
    System.IO.File.WriteAllText(path, content)
    Some content
  with
    ex -> None

let stringToOption (s: string) : string option =
    if String.IsNullOrWhiteSpace s then None else Some s

let toUpper (s: string) : string = s.ToUpper()

let nonEmptyStringStoreInPersistenceAndToUpper (path: string) (content: string) : ??? =
    let nonEmpty = stringToOption content
    // passt nicht: "string" erwartet, aber "string option" bekommen
    let stored = storeInDatabase path nonEmpty
    // passt nicht: "string option" erwartet, 
    // aber "string option option" bekommen
    let nonEmptyUpper = Option.map toUpper stored
\`\`\``,frontmatter:{title:"Problem: Verkettung eingepackter Werte"},index:0,start:0,end:24},inline:{raw:`---
src: ./pages/monade.md
---
`,content:"",frontmatter:{},index:13,start:70,end:74},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/monade.md",noteHTML:"",id:73,no:74},__clicksElements:[],__preloaded:!1}},{path:"75",name:"page-75",component:tO,meta:{srcSequence:"./pages/monade.md",slide:{raw:`
### Monade ("Chainable")

![img](/images/Monade_1.png)
`,title:'Monade ("Chainable")',level:3,content:`### Monade ("Chainable")

![img](/images/Monade_1.png)`,frontmatter:{srcSequence:"./pages/monade.md"},index:74,start:25,end:30,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/monade.md",raw:`
### Monade ("Chainable")

![img](/images/Monade_1.png)
`,title:'Monade ("Chainable")',level:3,content:`### Monade ("Chainable")

![img](/images/Monade_1.png)`,frontmatter:{},index:1,start:25,end:30},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/monade.md",noteHTML:"",id:74,no:75},__clicksElements:[],__preloaded:!1}},{path:"76",name:"page-76",component:iO,meta:{srcSequence:"./pages/monade.md",slide:{raw:`
### Monade ("Chainable")

- Container mit "bind" Funktion (die bestimmten Regeln folgt): "Chainable"
- Bezeichnung in der FP-Welt: **Monade**

\`\`\`fsharp
  bind: (a -> M b) -> M a -> M b
\`\`\`
- Andere Bezeichnungen für "bind": flatMap, SelectMany (LINQ), &gt;&gt;=
`,title:'Monade ("Chainable")',level:3,content:`### Monade ("Chainable")

- Container mit "bind" Funktion (die bestimmten Regeln folgt): "Chainable"
- Bezeichnung in der FP-Welt: **Monade**

\`\`\`fsharp
  bind: (a -> M b) -> M a -> M b
\`\`\`
- Andere Bezeichnungen für "bind": flatMap, SelectMany (LINQ), &gt;&gt;=`,frontmatter:{srcSequence:"./pages/monade.md"},index:75,start:31,end:42,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/monade.md",raw:`
### Monade ("Chainable")

- Container mit "bind" Funktion (die bestimmten Regeln folgt): "Chainable"
- Bezeichnung in der FP-Welt: **Monade**

\`\`\`fsharp
  bind: (a -> M b) -> M a -> M b
\`\`\`
- Andere Bezeichnungen für "bind": flatMap, SelectMany (LINQ), &gt;&gt;=
`,title:'Monade ("Chainable")',level:3,content:`### Monade ("Chainable")

- Container mit "bind" Funktion (die bestimmten Regeln folgt): "Chainable"
- Bezeichnung in der FP-Welt: **Monade**

\`\`\`fsharp
  bind: (a -> M b) -> M a -> M b
\`\`\`
- Andere Bezeichnungen für "bind": flatMap, SelectMany (LINQ), &gt;&gt;=`,frontmatter:{},index:2,start:31,end:42},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/monade.md",noteHTML:"",id:75,no:76},__clicksElements:[],__preloaded:!1}},{path:"77",name:"page-77",component:pO,meta:{srcSequence:"./pages/monade.md",slide:{raw:`
## Verkettung

\`\`\`fsharp
let storeInDatabase (path: string) (content: string) : string option = 
  try
    System.IO.File.WriteAllText(path, content)
    Some content
  with
    ex -> None

let stringToOption (s: string) : string option =
    if String.IsNullOrWhiteSpace s then None else Some s

let toUpper (s: string) : string = s.ToUpper()

let nonEmptyStringStoreInPersistenceAndToUpper (path: string) (content: string) : string option =
    let nonEmpty = stringToOption content
    let stored = Option.bind (storeInDatabase path) nonEmpty
    let nonEmptyUpper = Option.map toUpper stored
\`\`\`
`,title:"Verkettung",level:2,content:`## Verkettung

\`\`\`fsharp
let storeInDatabase (path: string) (content: string) : string option = 
  try
    System.IO.File.WriteAllText(path, content)
    Some content
  with
    ex -> None

let stringToOption (s: string) : string option =
    if String.IsNullOrWhiteSpace s then None else Some s

let toUpper (s: string) : string = s.ToUpper()

let nonEmptyStringStoreInPersistenceAndToUpper (path: string) (content: string) : string option =
    let nonEmpty = stringToOption content
    let stored = Option.bind (storeInDatabase path) nonEmpty
    let nonEmptyUpper = Option.map toUpper stored
\`\`\``,frontmatter:{srcSequence:"./pages/monade.md"},index:76,start:43,end:65,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/monade.md",raw:`
## Verkettung

\`\`\`fsharp
let storeInDatabase (path: string) (content: string) : string option = 
  try
    System.IO.File.WriteAllText(path, content)
    Some content
  with
    ex -> None

let stringToOption (s: string) : string option =
    if String.IsNullOrWhiteSpace s then None else Some s

let toUpper (s: string) : string = s.ToUpper()

let nonEmptyStringStoreInPersistenceAndToUpper (path: string) (content: string) : string option =
    let nonEmpty = stringToOption content
    let stored = Option.bind (storeInDatabase path) nonEmpty
    let nonEmptyUpper = Option.map toUpper stored
\`\`\`
`,title:"Verkettung",level:2,content:`## Verkettung

\`\`\`fsharp
let storeInDatabase (path: string) (content: string) : string option = 
  try
    System.IO.File.WriteAllText(path, content)
    Some content
  with
    ex -> None

let stringToOption (s: string) : string option =
    if String.IsNullOrWhiteSpace s then None else Some s

let toUpper (s: string) : string = s.ToUpper()

let nonEmptyStringStoreInPersistenceAndToUpper (path: string) (content: string) : string option =
    let nonEmpty = stringToOption content
    let stored = Option.bind (storeInDatabase path) nonEmpty
    let nonEmptyUpper = Option.map toUpper stored
\`\`\``,frontmatter:{},index:3,start:43,end:65},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/monade.md",noteHTML:"",id:76,no:77},__clicksElements:[],__preloaded:!1}},{path:"78",name:"page-78",component:mO,meta:{title:"Railway Oriented Programming",srcSequence:"./pages/railway.md",slide:{raw:null,title:"Railway Oriented Programming",level:2,content:`## Railway Oriented Programming

Funktionale Programmierung wird oft als "Zusammenstecken" von Funktionen dargestellt...`,frontmatter:{title:"Railway Oriented Programming",srcSequence:"./pages/railway.md"},index:77,start:0,end:4,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",raw:`## Railway Oriented Programming

Funktionale Programmierung wird oft als "Zusammenstecken" von Funktionen dargestellt...
`,title:"Railway Oriented Programming",level:2,content:`## Railway Oriented Programming

Funktionale Programmierung wird oft als "Zusammenstecken" von Funktionen dargestellt...`,frontmatter:{title:"Railway Oriented Programming"},index:0,start:0,end:4},inline:{raw:`---
src: ./pages/railway.md
---
`,content:"",frontmatter:{},index:14,start:74,end:78},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",noteHTML:"",id:77,no:78},__clicksElements:[],__preloaded:!1}},{path:"79",name:"page-79",component:bO,meta:{srcSequence:"./pages/railway.md",slide:{raw:`
Beispiel:

\`\`\`txt
f1: Eingabe string, Ausgabe int
f1: string -> int // FP Syntax

f2: Eingabe int, Ausgabe bool
f2: int -> bool // FP Syntax
\`\`\`
`,content:`Beispiel:

\`\`\`txt
f1: Eingabe string, Ausgabe int
f1: string -> int // FP Syntax

f2: Eingabe int, Ausgabe bool
f2: int -> bool // FP Syntax
\`\`\``,frontmatter:{srcSequence:"./pages/railway.md"},index:78,start:5,end:16,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",raw:`
Beispiel:

\`\`\`txt
f1: Eingabe string, Ausgabe int
f1: string -> int // FP Syntax

f2: Eingabe int, Ausgabe bool
f2: int -> bool // FP Syntax
\`\`\`
`,content:`Beispiel:

\`\`\`txt
f1: Eingabe string, Ausgabe int
f1: string -> int // FP Syntax

f2: Eingabe int, Ausgabe bool
f2: int -> bool // FP Syntax
\`\`\``,frontmatter:{},index:1,start:5,end:16},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",noteHTML:"",id:78,no:79},__clicksElements:[],__preloaded:!1}},{path:"80",name:"page-80",component:SO,meta:{srcSequence:"./pages/railway.md",slide:{raw:`
\`\`\`csharp
// Klassisch ===========================================================
int F1(string s) => int.TryParse(s, out var i) ? i : 0;
bool F2(int i) => i > 0;

// "verschachtelter" Aufruf
F2(F1("1")) // -> true
F2(F1("0")) // -> false

// "composition"
bool F3(string s) => F2(F1(s));
\`\`\`

\`\`\`csharp
// Method Chaining =====================================================
// mit C# extension methods
static int F1(this string s) => int.TryParse(s, out var i) ? i : 0;
static bool F2(this int i) => i > 0;

// Lesbarer (erst F1, dann F2)
"1".F1().F2() // ->true
"0".F1().F2() // ->false

// Lesbarer (erst F1, dann F2)
bool F3(string s) => s.F1().F2();
\`\`\`
`,content:`\`\`\`csharp
// Klassisch ===========================================================
int F1(string s) => int.TryParse(s, out var i) ? i : 0;
bool F2(int i) => i > 0;

// "verschachtelter" Aufruf
F2(F1("1")) // -> true
F2(F1("0")) // -> false

// "composition"
bool F3(string s) => F2(F1(s));
\`\`\`

\`\`\`csharp
// Method Chaining =====================================================
// mit C# extension methods
static int F1(this string s) => int.TryParse(s, out var i) ? i : 0;
static bool F2(this int i) => i > 0;

// Lesbarer (erst F1, dann F2)
"1".F1().F2() // ->true
"0".F1().F2() // ->false

// Lesbarer (erst F1, dann F2)
bool F3(string s) => s.F1().F2();
\`\`\``,frontmatter:{srcSequence:"./pages/railway.md"},index:79,start:17,end:45,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",raw:`
\`\`\`csharp
// Klassisch ===========================================================
int F1(string s) => int.TryParse(s, out var i) ? i : 0;
bool F2(int i) => i > 0;

// "verschachtelter" Aufruf
F2(F1("1")) // -> true
F2(F1("0")) // -> false

// "composition"
bool F3(string s) => F2(F1(s));
\`\`\`

\`\`\`csharp
// Method Chaining =====================================================
// mit C# extension methods
static int F1(this string s) => int.TryParse(s, out var i) ? i : 0;
static bool F2(this int i) => i > 0;

// Lesbarer (erst F1, dann F2)
"1".F1().F2() // ->true
"0".F1().F2() // ->false

// Lesbarer (erst F1, dann F2)
bool F3(string s) => s.F1().F2();
\`\`\`
`,content:`\`\`\`csharp
// Klassisch ===========================================================
int F1(string s) => int.TryParse(s, out var i) ? i : 0;
bool F2(int i) => i > 0;

// "verschachtelter" Aufruf
F2(F1("1")) // -> true
F2(F1("0")) // -> false

// "composition"
bool F3(string s) => F2(F1(s));
\`\`\`

\`\`\`csharp
// Method Chaining =====================================================
// mit C# extension methods
static int F1(this string s) => int.TryParse(s, out var i) ? i : 0;
static bool F2(this int i) => i > 0;

// Lesbarer (erst F1, dann F2)
"1".F1().F2() // ->true
"0".F1().F2() // ->false

// Lesbarer (erst F1, dann F2)
bool F3(string s) => s.F1().F2();
\`\`\``,frontmatter:{},index:2,start:17,end:45},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",noteHTML:"",id:79,no:80},__clicksElements:[],__preloaded:!1}},{path:"81",name:"page-81",component:CO,meta:{srcSequence:"./pages/railway.md",slide:{raw:`
Problem: Keine standardisierte Strategie für Fehlerbehandlung 
`,content:"Problem: Keine standardisierte Strategie für Fehlerbehandlung",frontmatter:{srcSequence:"./pages/railway.md"},index:80,start:46,end:49,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",raw:`
Problem: Keine standardisierte Strategie für Fehlerbehandlung 
`,content:"Problem: Keine standardisierte Strategie für Fehlerbehandlung",frontmatter:{},index:3,start:46,end:49},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",noteHTML:"",id:80,no:81},__clicksElements:[],__preloaded:!1}},{path:"82",name:"page-82",component:OO,meta:{srcSequence:"./pages/railway.md",slide:{raw:`
- Wenn wir davon ausgehen, dass Funktionen auch einen Fehlerfall haben, benötigen wir einen **neuen Datentyp**, der das abbilden kann
`,content:"- Wenn wir davon ausgehen, dass Funktionen auch einen Fehlerfall haben, benötigen wir einen **neuen Datentyp**, der das abbilden kann",frontmatter:{srcSequence:"./pages/railway.md"},index:81,start:50,end:53,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",raw:`
- Wenn wir davon ausgehen, dass Funktionen auch einen Fehlerfall haben, benötigen wir einen **neuen Datentyp**, der das abbilden kann
`,content:"- Wenn wir davon ausgehen, dass Funktionen auch einen Fehlerfall haben, benötigen wir einen **neuen Datentyp**, der das abbilden kann",frontmatter:{},index:4,start:50,end:53},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",noteHTML:"",id:81,no:82},__clicksElements:[],__preloaded:!1}},{path:"83",name:"page-83",component:MO,meta:{srcSequence:"./pages/railway.md",slide:{raw:`
#### Result/Either

- kann entweder 
  - das Ergebnis beinhalten, oder 
  - einen Fehlerfall
`,title:"Result/Either",level:4,content:`#### Result/Either

- kann entweder 
  - das Ergebnis beinhalten, oder 
  - einen Fehlerfall`,frontmatter:{srcSequence:"./pages/railway.md"},index:82,start:54,end:61,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",raw:`
#### Result/Either

- kann entweder 
  - das Ergebnis beinhalten, oder 
  - einen Fehlerfall
`,title:"Result/Either",level:4,content:`#### Result/Either

- kann entweder 
  - das Ergebnis beinhalten, oder 
  - einen Fehlerfall`,frontmatter:{},index:5,start:54,end:61},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",noteHTML:"",id:82,no:83},__clicksElements:[],__preloaded:!1}},{path:"84",name:"page-84",component:DO,meta:{srcSequence:"./pages/railway.md",slide:{raw:`
- In Railway-Sprech bedeutet dass, dass man "zweigleisig" fährt:
- Jede **Funktion** bekommt eine Eingabe, und 
  - hat "im Bauch" eine Weiche, die entscheidet ob 
    - auf das Fehlergleis oder 
    - auf das Erfolgsgleis umgeschaltet wird.
- Die Wrapperklasse mit der **Funktion** ist das Entscheidende!
`,content:`- In Railway-Sprech bedeutet dass, dass man "zweigleisig" fährt:
- Jede **Funktion** bekommt eine Eingabe, und 
  - hat "im Bauch" eine Weiche, die entscheidet ob 
    - auf das Fehlergleis oder 
    - auf das Erfolgsgleis umgeschaltet wird.
- Die Wrapperklasse mit der **Funktion** ist das Entscheidende!`,frontmatter:{srcSequence:"./pages/railway.md"},index:83,start:62,end:70,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",raw:`
- In Railway-Sprech bedeutet dass, dass man "zweigleisig" fährt:
- Jede **Funktion** bekommt eine Eingabe, und 
  - hat "im Bauch" eine Weiche, die entscheidet ob 
    - auf das Fehlergleis oder 
    - auf das Erfolgsgleis umgeschaltet wird.
- Die Wrapperklasse mit der **Funktion** ist das Entscheidende!
`,content:`- In Railway-Sprech bedeutet dass, dass man "zweigleisig" fährt:
- Jede **Funktion** bekommt eine Eingabe, und 
  - hat "im Bauch" eine Weiche, die entscheidet ob 
    - auf das Fehlergleis oder 
    - auf das Erfolgsgleis umgeschaltet wird.
- Die Wrapperklasse mit der **Funktion** ist das Entscheidende!`,frontmatter:{},index:6,start:62,end:70},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",noteHTML:"",id:83,no:84},__clicksElements:[],__preloaded:!1}},{path:"85",name:"page-85",component:qO,meta:{srcSequence:"./pages/railway.md",slide:{raw:`
- In anderen Worten: die Funktionen haben aktuell 1 Eingabe (1 Gleis), und 2 Ausgaben (2 Gleise)

<img
  class="absolute bottom-50 left-10 w-200"
  src="/images/rop-tracks-Page-2.png"
/>

`,content:`- In anderen Worten: die Funktionen haben aktuell 1 Eingabe (1 Gleis), und 2 Ausgaben (2 Gleise)

<img
  class="absolute bottom-50 left-10 w-200"
  src="/images/rop-tracks-Page-2.png"
/>`,frontmatter:{srcSequence:"./pages/railway.md"},index:84,start:71,end:80,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",raw:`
- In anderen Worten: die Funktionen haben aktuell 1 Eingabe (1 Gleis), und 2 Ausgaben (2 Gleise)

<img
  class="absolute bottom-50 left-10 w-200"
  src="/images/rop-tracks-Page-2.png"
/>

`,content:`- In anderen Worten: die Funktionen haben aktuell 1 Eingabe (1 Gleis), und 2 Ausgaben (2 Gleise)

<img
  class="absolute bottom-50 left-10 w-200"
  src="/images/rop-tracks-Page-2.png"
/>`,frontmatter:{},index:7,start:71,end:80},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",noteHTML:"",id:84,no:85},__clicksElements:[],__preloaded:!1}},{path:"86",name:"page-86",component:UO,meta:{srcSequence:"./pages/railway.md",slide:{raw:`
- Man benötigt also einen Mechanismus, der eine 2-gleisige Ausgabe so umwandelt, dass eine Funktion, die eine 1-gleisige Eingabe erwartet, damit umgehen kann

<img
  class="absolute bottom-10 left-20 w-180"
  src="/images/rop-tracks-Page-4.png"
/>
`,content:`- Man benötigt also einen Mechanismus, der eine 2-gleisige Ausgabe so umwandelt, dass eine Funktion, die eine 1-gleisige Eingabe erwartet, damit umgehen kann

<img
  class="absolute bottom-10 left-20 w-180"
  src="/images/rop-tracks-Page-4.png"
/>`,frontmatter:{srcSequence:"./pages/railway.md"},index:85,start:81,end:89,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",raw:`
- Man benötigt also einen Mechanismus, der eine 2-gleisige Ausgabe so umwandelt, dass eine Funktion, die eine 1-gleisige Eingabe erwartet, damit umgehen kann

<img
  class="absolute bottom-10 left-20 w-180"
  src="/images/rop-tracks-Page-4.png"
/>
`,content:`- Man benötigt also einen Mechanismus, der eine 2-gleisige Ausgabe so umwandelt, dass eine Funktion, die eine 1-gleisige Eingabe erwartet, damit umgehen kann

<img
  class="absolute bottom-10 left-20 w-180"
  src="/images/rop-tracks-Page-4.png"
/>`,frontmatter:{},index:8,start:81,end:89},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",noteHTML:"",id:85,no:86},__clicksElements:[],__preloaded:!1}},{path:"87",name:"page-87",component:YO,meta:{srcSequence:"./pages/railway.md",slide:{raw:`
#### Was muss dieser Mechanismus können?

- wenn die Eingabe fehlerhaft ist, muss die Funktion nichts tun, und kann den Fehler weiterreichen
- wenn die Eingabe nicht fehlerhaft ist, wird der Wert an die Funktion gegeben
`,title:"Was muss dieser Mechanismus können?",level:4,content:`#### Was muss dieser Mechanismus können?

- wenn die Eingabe fehlerhaft ist, muss die Funktion nichts tun, und kann den Fehler weiterreichen
- wenn die Eingabe nicht fehlerhaft ist, wird der Wert an die Funktion gegeben`,frontmatter:{srcSequence:"./pages/railway.md"},index:86,start:90,end:96,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",raw:`
#### Was muss dieser Mechanismus können?

- wenn die Eingabe fehlerhaft ist, muss die Funktion nichts tun, und kann den Fehler weiterreichen
- wenn die Eingabe nicht fehlerhaft ist, wird der Wert an die Funktion gegeben
`,title:"Was muss dieser Mechanismus können?",level:4,content:`#### Was muss dieser Mechanismus können?

- wenn die Eingabe fehlerhaft ist, muss die Funktion nichts tun, und kann den Fehler weiterreichen
- wenn die Eingabe nicht fehlerhaft ist, wird der Wert an die Funktion gegeben`,frontmatter:{},index:9,start:90,end:96},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",noteHTML:"",id:86,no:87},__clicksElements:[],__preloaded:!1}},{path:"88",name:"page-88",component:eT,meta:{srcSequence:"./pages/railway.md",slide:{raw:`
\`\`\`haskell
bind: (string -> Result int) -> Result string -> Result int

bind: (a -> M b) -> M a -> M b
\`\`\`

- FP-Jargon: eine Wrapper-Klasse, die \`bind\` bereitstellt, wird **Monade** genannt (sehr stark vereinfacht!).

`,content:"```haskell\nbind: (string -> Result int) -> Result string -> Result int\n\nbind: (a -> M b) -> M a -> M b\n```\n\n- FP-Jargon: eine Wrapper-Klasse, die `bind` bereitstellt, wird **Monade** genannt (sehr stark vereinfacht!).",frontmatter:{srcSequence:"./pages/railway.md"},index:87,start:97,end:107,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",raw:`
\`\`\`haskell
bind: (string -> Result int) -> Result string -> Result int

bind: (a -> M b) -> M a -> M b
\`\`\`

- FP-Jargon: eine Wrapper-Klasse, die \`bind\` bereitstellt, wird **Monade** genannt (sehr stark vereinfacht!).

`,content:"```haskell\nbind: (string -> Result int) -> Result string -> Result int\n\nbind: (a -> M b) -> M a -> M b\n```\n\n- FP-Jargon: eine Wrapper-Klasse, die `bind` bereitstellt, wird **Monade** genannt (sehr stark vereinfacht!).",frontmatter:{},index:10,start:97,end:107},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",noteHTML:"",id:87,no:88},__clicksElements:[],__preloaded:!1}},{path:"89",name:"page-89",component:sT,meta:{srcSequence:"./pages/railway.md",slide:{raw:'\n- `Either` besteht aus zwei Teilen\n  - `Left`\n  - `Right` ("richtig"...)\n- `Result` besteht aus zwei Teilen\n  - `Failure`\n  - `Success`\n',content:'- `Either` besteht aus zwei Teilen\n  - `Left`\n  - `Right` ("richtig"...)\n- `Result` besteht aus zwei Teilen\n  - `Failure`\n  - `Success`',frontmatter:{srcSequence:"./pages/railway.md"},index:88,start:108,end:116,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",raw:'\n- `Either` besteht aus zwei Teilen\n  - `Left`\n  - `Right` ("richtig"...)\n- `Result` besteht aus zwei Teilen\n  - `Failure`\n  - `Success`\n',content:'- `Either` besteht aus zwei Teilen\n  - `Left`\n  - `Right` ("richtig"...)\n- `Result` besteht aus zwei Teilen\n  - `Failure`\n  - `Success`',frontmatter:{},index:11,start:108,end:116},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",noteHTML:"",id:88,no:89},__clicksElements:[],__preloaded:!1}},{path:"90",name:"page-90",component:lT,meta:{srcSequence:"./pages/railway.md",slide:{raw:'\n```csharp\nOption<string> IsValidOpt(string s) =>\n    string.IsNullOrEmpty(s)\n        ? None\n        : Some(s);\n```\n\n- `Option` hat `Some(T)` und `None`\n- `Either`/`Result` ist ähnlich zu `Option`\n- `None` wird durch `Failure`/`Left` ersetzt (frei wählbar, z.B. selbst definierter Error Typ).\n\n```csharp\nEither<string, string> IsValidEither(string s)\n    => string.IsNullOrEmpty(s)\n        ? (Either<string, string>) Left("ups")\n        : Right(s);\n```\n',content:'```csharp\nOption<string> IsValidOpt(string s) =>\n    string.IsNullOrEmpty(s)\n        ? None\n        : Some(s);\n```\n\n- `Option` hat `Some(T)` und `None`\n- `Either`/`Result` ist ähnlich zu `Option`\n- `None` wird durch `Failure`/`Left` ersetzt (frei wählbar, z.B. selbst definierter Error Typ).\n\n```csharp\nEither<string, string> IsValidEither(string s)\n    => string.IsNullOrEmpty(s)\n        ? (Either<string, string>) Left("ups")\n        : Right(s);\n```',frontmatter:{srcSequence:"./pages/railway.md"},index:89,start:117,end:136,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",raw:'\n```csharp\nOption<string> IsValidOpt(string s) =>\n    string.IsNullOrEmpty(s)\n        ? None\n        : Some(s);\n```\n\n- `Option` hat `Some(T)` und `None`\n- `Either`/`Result` ist ähnlich zu `Option`\n- `None` wird durch `Failure`/`Left` ersetzt (frei wählbar, z.B. selbst definierter Error Typ).\n\n```csharp\nEither<string, string> IsValidEither(string s)\n    => string.IsNullOrEmpty(s)\n        ? (Either<string, string>) Left("ups")\n        : Right(s);\n```\n',content:'```csharp\nOption<string> IsValidOpt(string s) =>\n    string.IsNullOrEmpty(s)\n        ? None\n        : Some(s);\n```\n\n- `Option` hat `Some(T)` und `None`\n- `Either`/`Result` ist ähnlich zu `Option`\n- `None` wird durch `Failure`/`Left` ersetzt (frei wählbar, z.B. selbst definierter Error Typ).\n\n```csharp\nEither<string, string> IsValidEither(string s)\n    => string.IsNullOrEmpty(s)\n        ? (Either<string, string>) Left("ups")\n        : Right(s);\n```',frontmatter:{},index:12,start:117,end:136},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/railway.md",noteHTML:"",id:89,no:90},__clicksElements:[],__preloaded:!1}},{path:"91",name:"page-91",component:dT,meta:{title:"Problem: Funktion mit mehreren eingepackten Parametern",srcSequence:"./pages/applicative.md",slide:{raw:null,title:"Problem: Funktion mit mehreren eingepackten Parametern",level:3,content:`### Problem: Funktion mit mehreren eingepackten Parametern

\`\`\`fsharp
let add (a: int) (b: int) : int = a + b

let onlyPositive (i: int) : int option =
  if i > 0 then
    Some i
  else
    None

let addTwoNumbers (a: int) (b: int) : int option =
  let positiveA = onlyPositive a
  let positiveB = onlyPositive b
  // passt nicht, 2x int erwartet, aber 2x int option übergeben
  let sum = add positiveA positiveB

  // für zwei (und drei) in F# bereits vordefiniert:
  let sum = Option.map2 add positiveA positiveB

  // aber was, wenn man mehr Parameter hat?
\`\`\``,frontmatter:{title:"Problem: Funktion mit mehreren eingepackten Parametern",srcSequence:"./pages/applicative.md"},index:90,start:0,end:23,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/applicative.md",raw:`### Problem: Funktion mit mehreren eingepackten Parametern

\`\`\`fsharp
let add (a: int) (b: int) : int = a + b

let onlyPositive (i: int) : int option =
  if i > 0 then
    Some i
  else
    None

let addTwoNumbers (a: int) (b: int) : int option =
  let positiveA = onlyPositive a
  let positiveB = onlyPositive b
  // passt nicht, 2x int erwartet, aber 2x int option übergeben
  let sum = add positiveA positiveB

  // für zwei (und drei) in F# bereits vordefiniert:
  let sum = Option.map2 add positiveA positiveB

  // aber was, wenn man mehr Parameter hat?
\`\`\`
`,title:"Problem: Funktion mit mehreren eingepackten Parametern",level:3,content:`### Problem: Funktion mit mehreren eingepackten Parametern

\`\`\`fsharp
let add (a: int) (b: int) : int = a + b

let onlyPositive (i: int) : int option =
  if i > 0 then
    Some i
  else
    None

let addTwoNumbers (a: int) (b: int) : int option =
  let positiveA = onlyPositive a
  let positiveB = onlyPositive b
  // passt nicht, 2x int erwartet, aber 2x int option übergeben
  let sum = add positiveA positiveB

  // für zwei (und drei) in F# bereits vordefiniert:
  let sum = Option.map2 add positiveA positiveB

  // aber was, wenn man mehr Parameter hat?
\`\`\``,frontmatter:{title:"Problem: Funktion mit mehreren eingepackten Parametern"},index:0,start:0,end:23},inline:{raw:`---
src: ./pages/applicative.md
---
`,content:"",frontmatter:{},index:15,start:78,end:82},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/applicative.md",noteHTML:"",id:90,no:91},__clicksElements:[],__preloaded:!1}},{path:"92",name:"page-92",component:_T,meta:{srcSequence:"./pages/applicative.md",slide:{raw:`
### Applicative

<img
  class="absolute bottom-10 right-10 w-150"
  src="/images/Applicative_1_small.png"
/>
`,title:"Applicative",level:3,content:`### Applicative

<img
  class="absolute bottom-10 right-10 w-150"
  src="/images/Applicative_1_small.png"
/>`,frontmatter:{srcSequence:"./pages/applicative.md"},index:91,start:24,end:32,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/applicative.md",raw:`
### Applicative

<img
  class="absolute bottom-10 right-10 w-150"
  src="/images/Applicative_1_small.png"
/>
`,title:"Applicative",level:3,content:`### Applicative

<img
  class="absolute bottom-10 right-10 w-150"
  src="/images/Applicative_1_small.png"
/>`,frontmatter:{},index:1,start:24,end:32},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/applicative.md",noteHTML:"",id:91,no:92},__clicksElements:[],__preloaded:!1}},{path:"93",name:"page-93",component:ST,meta:{srcSequence:"./pages/applicative.md",slide:{raw:`
### Applicative

- Container mit "apply" Funktion (die bestimmten Regeln folgt): Applicative
- Bezeichnung in der FP-Welt: **Applicative Functor**

\`\`\`fsharp
  apply: AF (a -> b) -> AF a -> AF b
\`\`\`

- Andere Bezeichnungen für "apply": ap, &lt;*&gt;
`,title:"Applicative",level:3,content:`### Applicative

- Container mit "apply" Funktion (die bestimmten Regeln folgt): Applicative
- Bezeichnung in der FP-Welt: **Applicative Functor**

\`\`\`fsharp
  apply: AF (a -> b) -> AF a -> AF b
\`\`\`

- Andere Bezeichnungen für "apply": ap, &lt;*&gt;`,frontmatter:{srcSequence:"./pages/applicative.md"},index:92,start:33,end:45,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/applicative.md",raw:`
### Applicative

- Container mit "apply" Funktion (die bestimmten Regeln folgt): Applicative
- Bezeichnung in der FP-Welt: **Applicative Functor**

\`\`\`fsharp
  apply: AF (a -> b) -> AF a -> AF b
\`\`\`

- Andere Bezeichnungen für "apply": ap, &lt;*&gt;
`,title:"Applicative",level:3,content:`### Applicative

- Container mit "apply" Funktion (die bestimmten Regeln folgt): Applicative
- Bezeichnung in der FP-Welt: **Applicative Functor**

\`\`\`fsharp
  apply: AF (a -> b) -> AF a -> AF b
\`\`\`

- Andere Bezeichnungen für "apply": ap, &lt;*&gt;`,frontmatter:{},index:2,start:33,end:45},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/applicative.md",noteHTML:"",id:92,no:93},__clicksElements:[],__preloaded:!1}},{path:"94",name:"page-94",component:$T,meta:{srcSequence:"./pages/applicative.md",slide:{raw:`
### Funktion mit mehreren Parametern

\`\`\`fsharp
// F#
let sum (a: int) (b: int) (c: int) : int = a + b + c

let onlyPositive (i: int) : int option =
    if i > 0 then Some i
    else None

let addNumbers (a: int) (b: int) (c: int) : int option =
    let positiveA = onlyPositive a
    let positiveB = onlyPositive b
    let positiveC = onlyPositive c

    // sum ist vom Typ: (int -> int -> int -> int)
    // jede Zeile füllt ein Argument mehr aus
    // (Partial Application dank Currying)
    let (sum' : (int -> int -> int) option) = Option.map sum positiveA
    let (sum'' : (int -> int) option) = Option.apply sum' positiveB
    let (sum''' : (int) option) = Option.apply sum'' positiveC
\`\`\`
`,title:"Funktion mit mehreren Parametern",level:3,content:`### Funktion mit mehreren Parametern

\`\`\`fsharp
// F#
let sum (a: int) (b: int) (c: int) : int = a + b + c

let onlyPositive (i: int) : int option =
    if i > 0 then Some i
    else None

let addNumbers (a: int) (b: int) (c: int) : int option =
    let positiveA = onlyPositive a
    let positiveB = onlyPositive b
    let positiveC = onlyPositive c

    // sum ist vom Typ: (int -> int -> int -> int)
    // jede Zeile füllt ein Argument mehr aus
    // (Partial Application dank Currying)
    let (sum' : (int -> int -> int) option) = Option.map sum positiveA
    let (sum'' : (int -> int) option) = Option.apply sum' positiveB
    let (sum''' : (int) option) = Option.apply sum'' positiveC
\`\`\``,frontmatter:{srcSequence:"./pages/applicative.md"},index:93,start:46,end:70,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/applicative.md",raw:`
### Funktion mit mehreren Parametern

\`\`\`fsharp
// F#
let sum (a: int) (b: int) (c: int) : int = a + b + c

let onlyPositive (i: int) : int option =
    if i > 0 then Some i
    else None

let addNumbers (a: int) (b: int) (c: int) : int option =
    let positiveA = onlyPositive a
    let positiveB = onlyPositive b
    let positiveC = onlyPositive c

    // sum ist vom Typ: (int -> int -> int -> int)
    // jede Zeile füllt ein Argument mehr aus
    // (Partial Application dank Currying)
    let (sum' : (int -> int -> int) option) = Option.map sum positiveA
    let (sum'' : (int -> int) option) = Option.apply sum' positiveB
    let (sum''' : (int) option) = Option.apply sum'' positiveC
\`\`\`
`,title:"Funktion mit mehreren Parametern",level:3,content:`### Funktion mit mehreren Parametern

\`\`\`fsharp
// F#
let sum (a: int) (b: int) (c: int) : int = a + b + c

let onlyPositive (i: int) : int option =
    if i > 0 then Some i
    else None

let addNumbers (a: int) (b: int) (c: int) : int option =
    let positiveA = onlyPositive a
    let positiveB = onlyPositive b
    let positiveC = onlyPositive c

    // sum ist vom Typ: (int -> int -> int -> int)
    // jede Zeile füllt ein Argument mehr aus
    // (Partial Application dank Currying)
    let (sum' : (int -> int -> int) option) = Option.map sum positiveA
    let (sum'' : (int -> int) option) = Option.apply sum' positiveB
    let (sum''' : (int) option) = Option.apply sum'' positiveC
\`\`\``,frontmatter:{},index:3,start:46,end:70},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/applicative.md",noteHTML:"",id:93,no:94},__clicksElements:[],__preloaded:!1}},{path:"95",name:"page-95",component:FT,meta:{srcSequence:"./pages/applicative.md",slide:{raw:`
### Funktion mit mehreren Parametern

\`\`\`csharp
// C#
Func<int, int, int, int> sum = (a, b, c) => a + b + c;

Func<int, Validation<int>> onlyPositive = i
    => i > 0
        ? Valid(i)
        : Error($"Number {i} is not positive.");

Validation<int> AddNumbers(int a, int b, int c) {
    return Valid(sum)              // returns int -> int -> int -> int
        .Apply(onlyPositive(a))    // returns int -> int -> int
        .Apply(onlyPositive(b))    // returns int -> int
        .Apply(onlyPositive(c));   // returns int

AddNumbers(1, 2, 3);    // --> Valid(6)
AddNumbers(-1, -2, -3); // --> [
                        // Error("Number -1 is not positive"),
                        // Error("Number -2 is not positive"),
                        // Error("Number -3 is not positive")
                        // ]
\`\`\`
`,title:"Funktion mit mehreren Parametern",level:3,content:`### Funktion mit mehreren Parametern

\`\`\`csharp
// C#
Func<int, int, int, int> sum = (a, b, c) => a + b + c;

Func<int, Validation<int>> onlyPositive = i
    => i > 0
        ? Valid(i)
        : Error($"Number {i} is not positive.");

Validation<int> AddNumbers(int a, int b, int c) {
    return Valid(sum)              // returns int -> int -> int -> int
        .Apply(onlyPositive(a))    // returns int -> int -> int
        .Apply(onlyPositive(b))    // returns int -> int
        .Apply(onlyPositive(c));   // returns int

AddNumbers(1, 2, 3);    // --> Valid(6)
AddNumbers(-1, -2, -3); // --> [
                        // Error("Number -1 is not positive"),
                        // Error("Number -2 is not positive"),
                        // Error("Number -3 is not positive")
                        // ]
\`\`\``,frontmatter:{srcSequence:"./pages/applicative.md"},index:94,start:71,end:97,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/applicative.md",raw:`
### Funktion mit mehreren Parametern

\`\`\`csharp
// C#
Func<int, int, int, int> sum = (a, b, c) => a + b + c;

Func<int, Validation<int>> onlyPositive = i
    => i > 0
        ? Valid(i)
        : Error($"Number {i} is not positive.");

Validation<int> AddNumbers(int a, int b, int c) {
    return Valid(sum)              // returns int -> int -> int -> int
        .Apply(onlyPositive(a))    // returns int -> int -> int
        .Apply(onlyPositive(b))    // returns int -> int
        .Apply(onlyPositive(c));   // returns int

AddNumbers(1, 2, 3);    // --> Valid(6)
AddNumbers(-1, -2, -3); // --> [
                        // Error("Number -1 is not positive"),
                        // Error("Number -2 is not positive"),
                        // Error("Number -3 is not positive")
                        // ]
\`\`\`
`,title:"Funktion mit mehreren Parametern",level:3,content:`### Funktion mit mehreren Parametern

\`\`\`csharp
// C#
Func<int, int, int, int> sum = (a, b, c) => a + b + c;

Func<int, Validation<int>> onlyPositive = i
    => i > 0
        ? Valid(i)
        : Error($"Number {i} is not positive.");

Validation<int> AddNumbers(int a, int b, int c) {
    return Valid(sum)              // returns int -> int -> int -> int
        .Apply(onlyPositive(a))    // returns int -> int -> int
        .Apply(onlyPositive(b))    // returns int -> int
        .Apply(onlyPositive(c));   // returns int

AddNumbers(1, 2, 3);    // --> Valid(6)
AddNumbers(-1, -2, -3); // --> [
                        // Error("Number -1 is not positive"),
                        // Error("Number -2 is not positive"),
                        // Error("Number -3 is not positive")
                        // ]
\`\`\``,frontmatter:{},index:4,start:71,end:97},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/applicative.md",noteHTML:"",id:94,no:95},__clicksElements:[],__preloaded:!1}},{path:"96",name:"page-96",component:LT,meta:{title:"Veranstaltungen: BusConf",srcSequence:"./pages/veranstaltungen.md",slide:{raw:null,title:"Veranstaltungen: BusConf",level:3,content:`### Veranstaltungen: BusConf

- [https://www.bus-conf.org/](https://www.bus-conf.org/)

<img
  class="absolute top-10 right-10 w-120"
  src="/images/BusConf.png"
/>`,frontmatter:{title:"Veranstaltungen: BusConf",srcSequence:"./pages/veranstaltungen.md"},index:95,start:0,end:9,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/veranstaltungen.md",raw:`### Veranstaltungen: BusConf

- [https://www.bus-conf.org/](https://www.bus-conf.org/)

<img
  class="absolute top-10 right-10 w-120"
  src="/images/BusConf.png"
/>
`,title:"Veranstaltungen: BusConf",level:3,content:`### Veranstaltungen: BusConf

- [https://www.bus-conf.org/](https://www.bus-conf.org/)

<img
  class="absolute top-10 right-10 w-120"
  src="/images/BusConf.png"
/>`,frontmatter:{title:"Veranstaltungen: BusConf"},index:0,start:0,end:9},inline:{raw:`---
src: ./pages/veranstaltungen.md
---
`,content:"",frontmatter:{},index:16,start:82,end:86},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/veranstaltungen.md",noteHTML:"",id:95,no:96},__clicksElements:[],__preloaded:!1}},{path:"97",name:"page-97",component:VT,meta:{srcSequence:"./pages/veranstaltungen.md",slide:{raw:`
### Veranstaltungen: Lambda Lounge Nürnberg

- [https://www.meetup.com/de-DE/Lambda-Lounge-Funktionale-Programmierung-Nurnberg/](https://www.meetup.com/de-DE/Lambda-Lounge-Funktionale-Programmierung-Nurnberg/)

<img
  class="absolute bottom-10 right-10 w-110"
  src="/images/LambdaLounge.png"
/>
`,title:"Veranstaltungen: Lambda Lounge Nürnberg",level:3,content:`### Veranstaltungen: Lambda Lounge Nürnberg

- [https://www.meetup.com/de-DE/Lambda-Lounge-Funktionale-Programmierung-Nurnberg/](https://www.meetup.com/de-DE/Lambda-Lounge-Funktionale-Programmierung-Nurnberg/)

<img
  class="absolute bottom-10 right-10 w-110"
  src="/images/LambdaLounge.png"
/>`,frontmatter:{srcSequence:"./pages/veranstaltungen.md"},index:96,start:10,end:20,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/veranstaltungen.md",raw:`
### Veranstaltungen: Lambda Lounge Nürnberg

- [https://www.meetup.com/de-DE/Lambda-Lounge-Funktionale-Programmierung-Nurnberg/](https://www.meetup.com/de-DE/Lambda-Lounge-Funktionale-Programmierung-Nurnberg/)

<img
  class="absolute bottom-10 right-10 w-110"
  src="/images/LambdaLounge.png"
/>
`,title:"Veranstaltungen: Lambda Lounge Nürnberg",level:3,content:`### Veranstaltungen: Lambda Lounge Nürnberg

- [https://www.meetup.com/de-DE/Lambda-Lounge-Funktionale-Programmierung-Nurnberg/](https://www.meetup.com/de-DE/Lambda-Lounge-Funktionale-Programmierung-Nurnberg/)

<img
  class="absolute bottom-10 right-10 w-110"
  src="/images/LambdaLounge.png"
/>`,frontmatter:{},index:1,start:10,end:20},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/veranstaltungen.md",noteHTML:"",id:96,no:97},__clicksElements:[],__preloaded:!1}},{path:"98",name:"page-98",component:ZT,meta:{srcSequence:"./pages/veranstaltungen.md",slide:{raw:`
### Veranstaltungen: Softwerkskammer

- [https://www.softwerkskammer.org/groups/magdeburg](https://www.softwerkskammer.org/groups/magdeburg)

<img
  class="absolute top-10 right-10 w-90"
  src="/images/Softwerkskammer.png"
/>
`,title:"Veranstaltungen: Softwerkskammer",level:3,content:`### Veranstaltungen: Softwerkskammer

- [https://www.softwerkskammer.org/groups/magdeburg](https://www.softwerkskammer.org/groups/magdeburg)

<img
  class="absolute top-10 right-10 w-90"
  src="/images/Softwerkskammer.png"
/>`,frontmatter:{srcSequence:"./pages/veranstaltungen.md"},index:97,start:21,end:31,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/veranstaltungen.md",raw:`
### Veranstaltungen: Softwerkskammer

- [https://www.softwerkskammer.org/groups/magdeburg](https://www.softwerkskammer.org/groups/magdeburg)

<img
  class="absolute top-10 right-10 w-90"
  src="/images/Softwerkskammer.png"
/>
`,title:"Veranstaltungen: Softwerkskammer",level:3,content:`### Veranstaltungen: Softwerkskammer

- [https://www.softwerkskammer.org/groups/magdeburg](https://www.softwerkskammer.org/groups/magdeburg)

<img
  class="absolute top-10 right-10 w-90"
  src="/images/Softwerkskammer.png"
/>`,frontmatter:{},index:2,start:21,end:31},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/veranstaltungen.md",noteHTML:"",id:97,no:98},__clicksElements:[],__preloaded:!1}},{path:"99",name:"page-99",component:XT,meta:{title:"F# in bestehendes Projekt integrieren",srcSequence:"./pages/introducing_fsharp.md",slide:{raw:null,title:"F# in bestehendes Projekt integrieren",level:2,content:"## F# in bestehendes Projekt integrieren",frontmatter:{title:"F# in bestehendes Projekt integrieren",srcSequence:"./pages/introducing_fsharp.md"},index:98,start:0,end:2,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/introducing_fsharp.md",raw:`## F# in bestehendes Projekt integrieren
`,title:"F# in bestehendes Projekt integrieren",level:2,content:"## F# in bestehendes Projekt integrieren",frontmatter:{title:"F# in bestehendes Projekt integrieren"},index:0,start:0,end:2},inline:{raw:`---
src: ./pages/introducing_fsharp.md
---
`,content:"",frontmatter:{},index:17,start:86,end:90},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/introducing_fsharp.md",noteHTML:"",id:98,no:99},__clicksElements:[],__preloaded:!1}},{path:"100",name:"page-100",component:aF,meta:{srcSequence:"./pages/introducing_fsharp.md",slide:{raw:`
### Tests

- [FsUnit](https://github.com/fsprojects/FsUnit) für lesbarere Tests

<img
  class="absolute top-35 left-20 w-200"
  src="/images/FsUnit.png"
/>
`,title:"Tests",level:3,content:`### Tests

- [FsUnit](https://github.com/fsprojects/FsUnit) für lesbarere Tests

<img
  class="absolute top-35 left-20 w-200"
  src="/images/FsUnit.png"
/>`,frontmatter:{srcSequence:"./pages/introducing_fsharp.md"},index:99,start:3,end:13,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/introducing_fsharp.md",raw:`
### Tests

- [FsUnit](https://github.com/fsprojects/FsUnit) für lesbarere Tests

<img
  class="absolute top-35 left-20 w-200"
  src="/images/FsUnit.png"
/>
`,title:"Tests",level:3,content:`### Tests

- [FsUnit](https://github.com/fsprojects/FsUnit) für lesbarere Tests

<img
  class="absolute top-35 left-20 w-200"
  src="/images/FsUnit.png"
/>`,frontmatter:{},index:1,start:3,end:13},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/introducing_fsharp.md",noteHTML:"",id:99,no:100},__clicksElements:[],__preloaded:!1}},{path:"101",name:"page-101",component:uF,meta:{srcSequence:"./pages/introducing_fsharp.md",slide:{raw:`
### Tests

- [FsCheck](https://fscheck.github.io/FsCheck/) für Property Based Testing

<img
  class="absolute top-35 left-20 w-200"
  src="/images/FsCheck.png"
/>
`,title:"Tests",level:3,content:`### Tests

- [FsCheck](https://fscheck.github.io/FsCheck/) für Property Based Testing

<img
  class="absolute top-35 left-20 w-200"
  src="/images/FsCheck.png"
/>`,frontmatter:{srcSequence:"./pages/introducing_fsharp.md"},index:100,start:14,end:24,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/introducing_fsharp.md",raw:`
### Tests

- [FsCheck](https://fscheck.github.io/FsCheck/) für Property Based Testing

<img
  class="absolute top-35 left-20 w-200"
  src="/images/FsCheck.png"
/>
`,title:"Tests",level:3,content:`### Tests

- [FsCheck](https://fscheck.github.io/FsCheck/) für Property Based Testing

<img
  class="absolute top-35 left-20 w-200"
  src="/images/FsCheck.png"
/>`,frontmatter:{},index:2,start:14,end:24},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/introducing_fsharp.md",noteHTML:"",id:100,no:101},__clicksElements:[],__preloaded:!1}},{path:"102",name:"page-102",component:gF,meta:{srcSequence:"./pages/introducing_fsharp.md",slide:{raw:`
### Tests

- [Unquote](https://github.com/SwensenSoftware/unquote) für besseren "Callstack" bei fehlschlagenden Tests

<img
  class="absolute top-35 left-20 w-200"
  src="/images/Unquote.png"
/>
`,title:"Tests",level:3,content:`### Tests

- [Unquote](https://github.com/SwensenSoftware/unquote) für besseren "Callstack" bei fehlschlagenden Tests

<img
  class="absolute top-35 left-20 w-200"
  src="/images/Unquote.png"
/>`,frontmatter:{srcSequence:"./pages/introducing_fsharp.md"},index:101,start:25,end:35,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/introducing_fsharp.md",raw:`
### Tests

- [Unquote](https://github.com/SwensenSoftware/unquote) für besseren "Callstack" bei fehlschlagenden Tests

<img
  class="absolute top-35 left-20 w-200"
  src="/images/Unquote.png"
/>
`,title:"Tests",level:3,content:`### Tests

- [Unquote](https://github.com/SwensenSoftware/unquote) für besseren "Callstack" bei fehlschlagenden Tests

<img
  class="absolute top-35 left-20 w-200"
  src="/images/Unquote.png"
/>`,frontmatter:{},index:3,start:25,end:35},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/introducing_fsharp.md",noteHTML:"",id:101,no:102},__clicksElements:[],__preloaded:!1}},{path:"103",name:"page-103",component:wF,meta:{srcSequence:"./pages/introducing_fsharp.md",slide:{raw:`
### Builds

- [FAKE](https://fake.build/) als erweiterbare DSL für Build-Tasks

<img
  class="absolute top-35 left-20 w-200"
  src="/images/FAKE.png"
/>
`,title:"Builds",level:3,content:`### Builds

- [FAKE](https://fake.build/) als erweiterbare DSL für Build-Tasks

<img
  class="absolute top-35 left-20 w-200"
  src="/images/FAKE.png"
/>`,frontmatter:{srcSequence:"./pages/introducing_fsharp.md"},index:102,start:36,end:46,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/introducing_fsharp.md",raw:`
### Builds

- [FAKE](https://fake.build/) als erweiterbare DSL für Build-Tasks

<img
  class="absolute top-35 left-20 w-200"
  src="/images/FAKE.png"
/>
`,title:"Builds",level:3,content:`### Builds

- [FAKE](https://fake.build/) als erweiterbare DSL für Build-Tasks

<img
  class="absolute top-35 left-20 w-200"
  src="/images/FAKE.png"
/>`,frontmatter:{},index:4,start:36,end:46},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/introducing_fsharp.md",noteHTML:"",id:102,no:103},__clicksElements:[],__preloaded:!1}},{path:"104",name:"page-104",component:PF,meta:{srcSequence:"./pages/introducing_fsharp.md",slide:{raw:`
### Builds

- [Paket](https://github.com/fsprojects/Paket) als Alternative zu Nuget

<img
  class="absolute top-35 left-20 w-200"
  src="/images/Paket.png"
/>
`,title:"Builds",level:3,content:`### Builds

- [Paket](https://github.com/fsprojects/Paket) als Alternative zu Nuget

<img
  class="absolute top-35 left-20 w-200"
  src="/images/Paket.png"
/>`,frontmatter:{srcSequence:"./pages/introducing_fsharp.md"},index:103,start:47,end:57,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/introducing_fsharp.md",raw:`
### Builds

- [Paket](https://github.com/fsprojects/Paket) als Alternative zu Nuget

<img
  class="absolute top-35 left-20 w-200"
  src="/images/Paket.png"
/>
`,title:"Builds",level:3,content:`### Builds

- [Paket](https://github.com/fsprojects/Paket) als Alternative zu Nuget

<img
  class="absolute top-35 left-20 w-200"
  src="/images/Paket.png"
/>`,frontmatter:{},index:5,start:47,end:57},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/introducing_fsharp.md",noteHTML:"",id:103,no:104},__clicksElements:[],__preloaded:!1}},{path:"105",name:"page-105",component:IF,meta:{srcSequence:"./pages/introducing_fsharp.md",slide:{raw:`
### Builds

- [Farmer](https://compositionalit.github.io/farmer/): Making repeatable Azure deployments easy!

<img
  class="absolute top-35 left-20 w-120"
  src="/images/Farmer.png"
/>
`,title:"Builds",level:3,content:`### Builds

- [Farmer](https://compositionalit.github.io/farmer/): Making repeatable Azure deployments easy!

<img
  class="absolute top-35 left-20 w-120"
  src="/images/Farmer.png"
/>`,frontmatter:{srcSequence:"./pages/introducing_fsharp.md"},index:104,start:58,end:68,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/introducing_fsharp.md",raw:`
### Builds

- [Farmer](https://compositionalit.github.io/farmer/): Making repeatable Azure deployments easy!

<img
  class="absolute top-35 left-20 w-120"
  src="/images/Farmer.png"
/>
`,title:"Builds",level:3,content:`### Builds

- [Farmer](https://compositionalit.github.io/farmer/): Making repeatable Azure deployments easy!

<img
  class="absolute top-35 left-20 w-120"
  src="/images/Farmer.png"
/>`,frontmatter:{},index:6,start:58,end:68},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/introducing_fsharp.md",noteHTML:"",id:104,no:105},__clicksElements:[],__preloaded:!1}},{path:"106",name:"page-106",component:BF,meta:{srcSequence:"./pages/introducing_fsharp.md",slide:{raw:`
## Web

- Webseiten mit [Fable](https://fable.io/)

<img
  class="absolute top-45 left-40 w-130"
  src="/images/Fable.png"
/>
`,title:"Web",level:2,content:`## Web

- Webseiten mit [Fable](https://fable.io/)

<img
  class="absolute top-45 left-40 w-130"
  src="/images/Fable.png"
/>`,frontmatter:{srcSequence:"./pages/introducing_fsharp.md"},index:105,start:69,end:79,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/introducing_fsharp.md",raw:`
## Web

- Webseiten mit [Fable](https://fable.io/)

<img
  class="absolute top-45 left-40 w-130"
  src="/images/Fable.png"
/>
`,title:"Web",level:2,content:`## Web

- Webseiten mit [Fable](https://fable.io/)

<img
  class="absolute top-45 left-40 w-130"
  src="/images/Fable.png"
/>`,frontmatter:{},index:7,start:69,end:79},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/introducing_fsharp.md",noteHTML:"",id:105,no:106},__clicksElements:[],__preloaded:!1}},{path:"107",name:"page-107",component:UF,meta:{srcSequence:"./pages/introducing_fsharp.md",slide:{raw:`
## Web

- Mobile Apps mit [Fabulous](https://fabulous.dev/) (Xamarin)

<img
  class="absolute top-45 left-20 w-150"
  src="/images/Fabulous.png"
/>
`,title:"Web",level:2,content:`## Web

- Mobile Apps mit [Fabulous](https://fabulous.dev/) (Xamarin)

<img
  class="absolute top-45 left-20 w-150"
  src="/images/Fabulous.png"
/>`,frontmatter:{srcSequence:"./pages/introducing_fsharp.md"},index:106,start:80,end:90,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/introducing_fsharp.md",raw:`
## Web

- Mobile Apps mit [Fabulous](https://fabulous.dev/) (Xamarin)

<img
  class="absolute top-45 left-20 w-150"
  src="/images/Fabulous.png"
/>
`,title:"Web",level:2,content:`## Web

- Mobile Apps mit [Fabulous](https://fabulous.dev/) (Xamarin)

<img
  class="absolute top-45 left-20 w-150"
  src="/images/Fabulous.png"
/>`,frontmatter:{},index:8,start:80,end:90},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/introducing_fsharp.md",noteHTML:"",id:106,no:107},__clicksElements:[],__preloaded:!1}},{path:"108",name:"page-108",component:XF,meta:{srcSequence:"./pages/introducing_fsharp.md",slide:{raw:`
## Web

- Full-Stack-Webanwendungen mit dem SAFE-Stack

<img
  class="absolute top-45 left-20 w-180"
  src="/images/SAFE.png"
/>
`,title:"Web",level:2,content:`## Web

- Full-Stack-Webanwendungen mit dem SAFE-Stack

<img
  class="absolute top-45 left-20 w-180"
  src="/images/SAFE.png"
/>`,frontmatter:{srcSequence:"./pages/introducing_fsharp.md"},index:107,start:91,end:101,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/introducing_fsharp.md",raw:`
## Web

- Full-Stack-Webanwendungen mit dem SAFE-Stack

<img
  class="absolute top-45 left-20 w-180"
  src="/images/SAFE.png"
/>
`,title:"Web",level:2,content:`## Web

- Full-Stack-Webanwendungen mit dem SAFE-Stack

<img
  class="absolute top-45 left-20 w-180"
  src="/images/SAFE.png"
/>`,frontmatter:{},index:9,start:91,end:101},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/introducing_fsharp.md",noteHTML:"",id:107,no:108},__clicksElements:[],__preloaded:!1}},{path:"109",name:"page-109",component:s4,meta:{title:"Fazit",srcSequence:"./pages/99-exit.md",slide:{raw:null,title:"Fazit",level:1,content:`# Fazit

- Konzepte der Funktionalen Programmierung halten in mehr und mehr Programmiersprachen Einzug
- Ideen der Funktionalen Programmierung können auch "nicht-funktionalen" Code verbessern
- Zusätzliches Werkzeug im Werkzeugkasten

### Die Beschäftigung damit lohnt sich!`,frontmatter:{title:"Fazit",srcSequence:"./pages/99-exit.md"},index:108,start:0,end:8,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/99-exit.md",raw:`# Fazit

- Konzepte der Funktionalen Programmierung halten in mehr und mehr Programmiersprachen Einzug
- Ideen der Funktionalen Programmierung können auch "nicht-funktionalen" Code verbessern
- Zusätzliches Werkzeug im Werkzeugkasten

### Die Beschäftigung damit lohnt sich!
`,title:"Fazit",level:1,content:`# Fazit

- Konzepte der Funktionalen Programmierung halten in mehr und mehr Programmiersprachen Einzug
- Ideen der Funktionalen Programmierung können auch "nicht-funktionalen" Code verbessern
- Zusätzliches Werkzeug im Werkzeugkasten

### Die Beschäftigung damit lohnt sich!`,frontmatter:{title:"Fazit"},index:0,start:0,end:8},inline:{raw:`---
src: ./pages/99-exit.md
---
`,content:"",frontmatter:{},index:18,start:90,end:94},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/99-exit.md",noteHTML:"",id:108,no:109},__clicksElements:[],__preloaded:!1}},{path:"110",name:"page-110",component:o4,meta:{srcSequence:"./pages/99-exit.md",slide:{raw:`
# Danke
`,title:"Danke",level:1,content:"# Danke",frontmatter:{srcSequence:"./pages/99-exit.md"},index:109,start:9,end:12,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/99-exit.md",raw:`
# Danke
`,title:"Danke",level:1,content:"# Danke",frontmatter:{},index:1,start:9,end:12},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/99-exit.md",noteHTML:"",id:109,no:110},__clicksElements:[],__preloaded:!1}},{path:"111",name:"page-111",component:u4,meta:{srcSequence:"./pages/99-exit.md",slide:{raw:`
## Ressourcen

- FP
  - Blog: [Mark Seeman](https://blog.ploeh.dk/)
  - Book: [Domain Modeling Made Functional](https://pragprog.com/book/swdddf/domain-modeling-made-functional)
  - Book: [Grokking Simplicity](https://www.manning.com/books/grokking-simplicity)
- C#
  - Book: [Functional Programming in C#](https://www.manning.com/books/functional-programming-in-c-sharp)
  - Blog: [Vladimir Khorikov](https://enterprisecraftsmanship.com/)
- F#
  - [F# Homepage](https://fsharp.org/)
  - [F# for Fun and Profit](https://fsharpforfunandprofit.com/)
  - [Railway Oriented Programming](https://fsharpforfunandprofit.com/rop/)
`,title:"Ressourcen",level:2,content:`## Ressourcen

- FP
  - Blog: [Mark Seeman](https://blog.ploeh.dk/)
  - Book: [Domain Modeling Made Functional](https://pragprog.com/book/swdddf/domain-modeling-made-functional)
  - Book: [Grokking Simplicity](https://www.manning.com/books/grokking-simplicity)
- C#
  - Book: [Functional Programming in C#](https://www.manning.com/books/functional-programming-in-c-sharp)
  - Blog: [Vladimir Khorikov](https://enterprisecraftsmanship.com/)
- F#
  - [F# Homepage](https://fsharp.org/)
  - [F# for Fun and Profit](https://fsharpforfunandprofit.com/)
  - [Railway Oriented Programming](https://fsharpforfunandprofit.com/rop/)`,frontmatter:{srcSequence:"./pages/99-exit.md"},index:110,start:13,end:28,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/99-exit.md",raw:`
## Ressourcen

- FP
  - Blog: [Mark Seeman](https://blog.ploeh.dk/)
  - Book: [Domain Modeling Made Functional](https://pragprog.com/book/swdddf/domain-modeling-made-functional)
  - Book: [Grokking Simplicity](https://www.manning.com/books/grokking-simplicity)
- C#
  - Book: [Functional Programming in C#](https://www.manning.com/books/functional-programming-in-c-sharp)
  - Blog: [Vladimir Khorikov](https://enterprisecraftsmanship.com/)
- F#
  - [F# Homepage](https://fsharp.org/)
  - [F# for Fun and Profit](https://fsharpforfunandprofit.com/)
  - [Railway Oriented Programming](https://fsharpforfunandprofit.com/rop/)
`,title:"Ressourcen",level:2,content:`## Ressourcen

- FP
  - Blog: [Mark Seeman](https://blog.ploeh.dk/)
  - Book: [Domain Modeling Made Functional](https://pragprog.com/book/swdddf/domain-modeling-made-functional)
  - Book: [Grokking Simplicity](https://www.manning.com/books/grokking-simplicity)
- C#
  - Book: [Functional Programming in C#](https://www.manning.com/books/functional-programming-in-c-sharp)
  - Blog: [Vladimir Khorikov](https://enterprisecraftsmanship.com/)
- F#
  - [F# Homepage](https://fsharp.org/)
  - [F# for Fun and Profit](https://fsharpforfunandprofit.com/)
  - [Railway Oriented Programming](https://fsharpforfunandprofit.com/rop/)`,frontmatter:{},index:2,start:13,end:28},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/99-exit.md",noteHTML:"",id:110,no:111},__clicksElements:[],__preloaded:!1}},{path:"112",name:"page-112",component:s5,meta:{layout:"two-cols",srcSequence:"./pages/99-exit.md",slide:{raw:`---
layout: two-cols
---

### Patrick Drechsler

- <mdi-email /> patrick.drechsler@mathema.de
- <logos-github-icon /> https://github.com/draptik
- <mdi-web /> Blog: https://draptik.github.io
- <logos-twitter /> @drechsler
- <logos-mastodon-icon /> @drechsler@floss.social
- <logos-linkedin-icon /> https://www.linkedin.com/in/patrick-drechsler-985a2911/

Slides: 

- QR-Code 👉
- https://mathema-gmbh.github.io/2023-06-dwx-fp-csharp-to-fsharp/

::right::

### Martin Grotz

- <mdi-email /> martin.grotz@mathema.de
- <logos-github-icon /> https://github.com/groma84
- <mdi-web /> Blog: https://elm.finde-ich-super.de
- <logos-twitter /> @mobilgroma
- <logos-mastodon-icon /> @groma@kanoa.de
-  groma.bsky.social
  
<img 
  class="absolute bottom-0 right-50 w-60"
  src="/images/qr-code-dwx2023.png" >
`,title:"Patrick Drechsler",level:3,content:`### Patrick Drechsler

- <mdi-email /> patrick.drechsler@mathema.de
- <logos-github-icon /> https://github.com/draptik
- <mdi-web /> Blog: https://draptik.github.io
- <logos-twitter /> @drechsler
- <logos-mastodon-icon /> @drechsler@floss.social
- <logos-linkedin-icon /> https://www.linkedin.com/in/patrick-drechsler-985a2911/

Slides: 

- QR-Code 👉
- https://mathema-gmbh.github.io/2023-06-dwx-fp-csharp-to-fsharp/

::right::

### Martin Grotz

- <mdi-email /> martin.grotz@mathema.de
- <logos-github-icon /> https://github.com/groma84
- <mdi-web /> Blog: https://elm.finde-ich-super.de
- <logos-twitter /> @mobilgroma
- <logos-mastodon-icon /> @groma@kanoa.de
-  groma.bsky.social
  
<img 
  class="absolute bottom-0 right-50 w-60"
  src="/images/qr-code-dwx2023.png" >`,frontmatter:{layout:"two-cols",srcSequence:"./pages/99-exit.md"},index:111,start:28,end:61,source:{filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/99-exit.md",raw:`---
layout: two-cols
---

### Patrick Drechsler

- <mdi-email /> patrick.drechsler@mathema.de
- <logos-github-icon /> https://github.com/draptik
- <mdi-web /> Blog: https://draptik.github.io
- <logos-twitter /> @drechsler
- <logos-mastodon-icon /> @drechsler@floss.social
- <logos-linkedin-icon /> https://www.linkedin.com/in/patrick-drechsler-985a2911/

Slides: 

- QR-Code 👉
- https://mathema-gmbh.github.io/2023-06-dwx-fp-csharp-to-fsharp/

::right::

### Martin Grotz

- <mdi-email /> martin.grotz@mathema.de
- <logos-github-icon /> https://github.com/groma84
- <mdi-web /> Blog: https://elm.finde-ich-super.de
- <logos-twitter /> @mobilgroma
- <logos-mastodon-icon /> @groma@kanoa.de
-  groma.bsky.social
  
<img 
  class="absolute bottom-0 right-50 w-60"
  src="/images/qr-code-dwx2023.png" >
`,title:"Patrick Drechsler",level:3,content:`### Patrick Drechsler

- <mdi-email /> patrick.drechsler@mathema.de
- <logos-github-icon /> https://github.com/draptik
- <mdi-web /> Blog: https://draptik.github.io
- <logos-twitter /> @drechsler
- <logos-mastodon-icon /> @drechsler@floss.social
- <logos-linkedin-icon /> https://www.linkedin.com/in/patrick-drechsler-985a2911/

Slides: 

- QR-Code 👉
- https://mathema-gmbh.github.io/2023-06-dwx-fp-csharp-to-fsharp/

::right::

### Martin Grotz

- <mdi-email /> martin.grotz@mathema.de
- <logos-github-icon /> https://github.com/groma84
- <mdi-web /> Blog: https://elm.finde-ich-super.de
- <logos-twitter /> @mobilgroma
- <logos-mastodon-icon /> @groma@kanoa.de
-  groma.bsky.social
  
<img 
  class="absolute bottom-0 right-50 w-60"
  src="/images/qr-code-dwx2023.png" >`,frontmatter:{layout:"two-cols"},index:3,start:28,end:61},filepath:"/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/pages/99-exit.md",noteHTML:"",id:111,no:112},__clicksElements:[],__preloaded:!1}},{path:"113",component:I3,meta:{layout:"end"}}],Ye=a5,r5=[{name:"play",path:"/",component:a2,children:[...Ye]},{name:"print",path:"/print",component:F3},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}],bn=qb({history:B0("/2023-06-dwx-fp-csharp-to-fsharp"),routes:r5});function o5(e,n,{mode:s="replace"}={}){return I({get(){const a=bn.currentRoute.value.query[e];return a==null?n??null:Array.isArray(a)?a.filter(Boolean):a},set(a){nn(()=>{bn[E(s)]({query:{...bn.currentRoute.value.query,[e]:a}})})}})}const xf=se(0);nn(()=>{bn.afterEach(async()=>{await nn(),xf.value+=1})});const Ef=se(0),jn=I(()=>bn.currentRoute.value),Ms=I(()=>jn.value.query.print!==void 0),i5=I(()=>jn.value.query.print==="clicks"),rt=I(()=>jn.value.query.embedded!==void 0),_n=I(()=>jn.value.path.startsWith("/presenter")),l5=I(()=>jn.value.path.startsWith("/notes")),la=I(()=>Ms.value&&!i5.value),yi=I(()=>jn.value.query.password);I(()=>!_n.value&&(!Oe.remote||yi.value===Oe.remote));const wu=o5("clicks","0"),Cf=I(()=>Ye.length-1),c5=I(()=>jn.value.path),Ke=I(()=>parseInt(c5.value.split(/\//g).slice(-1)[0])||1);I(()=>no(Ke.value));const un=I(()=>Ye.find(e=>e.path===`${Ke.value}`));I(()=>{var e,n,s;return(s=(n=(e=un.value)==null?void 0:e.meta)==null?void 0:n.slide)==null?void 0:s.id});I(()=>{var e,n;return((n=(e=un.value)==null?void 0:e.meta)==null?void 0:n.layout)||(Ke.value===1?"cover":"default")});const Po=I(()=>Ye.find(e=>e.path===`${Math.min(Ye.length,Ke.value+1)}`)),u5=I(()=>Ye.find(e=>e.path===`${Math.max(1,Ke.value-1)}`)),p5=I(()=>{var e,n;return xf.value,((n=(e=un.value)==null?void 0:e.meta)==null?void 0:n.__clicksElements)||[]}),Nn=I({get(){if(la.value)return 99999;let e=+(wu.value||0);return isNaN(e)&&(e=0),e},set(e){wu.value=e.toString()}}),Ar=I(()=>{var e,n;return+(((n=(e=un.value)==null?void 0:e.meta)==null?void 0:n.clicks)??p5.value.length)}),d5=I(()=>Ke.value<Ye.length-1||Nn.value<Ar.value),f5=I(()=>Ke.value>1||Nn.value>0),h5=I(()=>Ye.filter(e=>{var n,s;return(s=(n=e.meta)==null?void 0:n.slide)==null?void 0:s.title}).reduce((e,n)=>(_l(e,n),e),[])),m5=I(()=>kl(h5.value,un.value));I(()=>bl(m5.value));const g5=I(()=>y5(Ef.value,un.value,u5.value));we(un,(e,n)=>{Ef.value=Number(e==null?void 0:e.path)-Number(n==null?void 0:n.path)});function Ft(){Ar.value<=Nn.value?Ca():Nn.value+=1}async function At(){Nn.value<=0?await $a():Nn.value-=1}function no(e){return _n.value?`/presenter/${e}`:`/${e}`}function Ca(){const e=Math.min(Ye.length,Ke.value+1);return Is(e)}async function $a(e=!0){const n=Math.max(1,Ke.value-1);await Is(n),e&&Ar.value&&bn.replace({query:{...jn.value.query,clicks:Ar.value}})}function Is(e,n){return bn.push({path:no(e),query:{...jn.value.query,clicks:n}})}function _5(e){const n=se(0),{direction:s,distanceX:a,distanceY:o}=c0(e,{onSwipeStart(i){i.pointerType==="touch"&&(Sa.value||(n.value=Zk()))},onSwipeEnd(i){if(i.pointerType!=="touch"||!n.value||Sa.value)return;const l=Math.abs(a.value),c=Math.abs(o.value);l/window.innerWidth>.3||l>100?s.value===lt.LEFT?Ft():At():(c/window.innerHeight>.4||c>200)&&(s.value===lt.DOWN?$a():Ca())}})}async function wi(){const{saveAs:e}=await ja(()=>import("./FileSaver.min-17c85779.js").then(n=>n.F),[]);e(Od(Oe.download)?Oe.download:Oe.exportFilename?`${Oe.exportFilename}.pdf`:"/2023-06-dwx-fp-csharp-to-fsharpslidev-exported.pdf",`${Oe.title}.pdf`)}async function k5(e){var n,s;if(e==null){const a=(s=(n=un.value)==null?void 0:n.meta)==null?void 0:s.slide;if(!(a!=null&&a.filepath))return!1;e=`${a.filepath}:${a.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function _l(e,n,s=1){var o,i,l,c,u;const a=(i=(o=n.meta)==null?void 0:o.slide)==null?void 0:i.level;a&&a>s&&e.length>0?_l(e[e.length-1].children,n,s+1):e.push({children:[],level:s,path:n.path,hideInToc:Boolean((l=n.meta)==null?void 0:l.hideInToc),title:(u=(c=n.meta)==null?void 0:c.slide)==null?void 0:u.title})}function kl(e,n,s=!1,a){return e.map(o=>{const i={...o,active:o.path===(n==null?void 0:n.path),hasActiveParent:s};return i.children.length>0&&(i.children=kl(i.children,n,i.active||i.hasActiveParent,i)),a&&(i.active||i.activeParent)&&(a.activeParent=!0),i})}function bl(e,n=1){return e.filter(s=>!s.hideInToc).map(s=>({...s,children:bl(s.children,n+1)}))}const b5={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function v5(e,n=!1){if(!e||(typeof e=="string"&&(e={name:e}),!e.name))return;let s=e.name.includes("|")?e.name:b5[e.name]||e.name;if(s.includes("|")){const[a,o]=s.split("|").map(i=>i.trim());s=n?o:a}if(s)return{...e,name:s}}function y5(e,n,s){var o,i;let a=e>0?(o=s==null?void 0:s.meta)==null?void 0:o.transition:(i=n==null?void 0:n.meta)==null?void 0:i.transition;return a||(a=Oe.transition),v5(a,e<0)}function w5(){const e=Oe.titleTemplate.replace("%s",Oe.title||"Slidev");al({title:e}),Ek(Oe.htmlAttrs),jk(`${e} - shared`),Wk(`${e} - drawings`);const n=`${location.origin}_${Fk()}`;function s(){l5.value||!_n.value&&!Tk.includes(location.host.split(":")[0])||(_n.value?(Hs("page",+Ke.value),Hs("clicks",Nn.value)):(Hs("viewerPage",+Ke.value),Hs("viewerClicks",Nn.value)),Hs("lastUpdate",{id:n,type:_n.value?"presenter":"viewer",time:new Date().getTime()}))}bn.afterEach(s),we(Nn,s),Rk(a=>{var i;bn.currentRoute.value.path.match(/^\/(\d+|presenter)\/?/)&&((i=a.lastUpdate)==null?void 0:i.type)==="presenter"&&(+a.page!=+Ke.value||+Nn.value!=+a.clicks)&&bn.replace({path:no(a.page),query:{...bn.currentRoute.value.query,clicks:a.clicks||0}})})}const S5=Me({__name:"App",setup(e){return C(F),w5(),(n,s)=>{const a=yr("RouterView"),o=yr("StarportCarrier");return k(),ee(Ae,null,[N(a),N(o)],64)}}}),x5=A(S5,[["__file","/home/runner/work/2023-fp-intro-csharp-fsharp/2023-fp-intro-csharp-fsharp/presentation/node_modules/@slidev/client/App.vue"]]);function Oo(e){return e!==null&&typeof e=="object"}function Si(e,n,s=".",a){if(!Oo(n))return Si(e,{},s,a);const o=Object.assign({},n);for(const i in e){if(i==="__proto__"||i==="constructor")continue;const l=e[i];l!=null&&(a&&a(o,i,l,s)||(Array.isArray(l)&&Array.isArray(o[i])?o[i]=[...l,...o[i]]:Oo(l)&&Oo(o[i])?o[i]=Si(l,o[i],(s?`${s}.`:"")+i.toString(),a):o[i]=l))}return o}function E5(e){return(...n)=>n.reduce((s,a)=>Si(s,a,"",e),{})}const C5=E5(),$f=1/60*1e3,$5=typeof performance<"u"?()=>performance.now():()=>Date.now(),Pf=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e($5()),$f);function P5(e){let n=[],s=[],a=0,o=!1,i=!1;const l=new WeakSet,c={schedule:(u,p=!1,d=!1)=>{const f=d&&o,h=f?n:s;return p&&l.add(u),h.indexOf(u)===-1&&(h.push(u),f&&o&&(a=n.length)),u},cancel:u=>{const p=s.indexOf(u);p!==-1&&s.splice(p,1),l.delete(u)},process:u=>{if(o){i=!0;return}if(o=!0,[n,s]=[s,n],s.length=0,a=n.length,a)for(let p=0;p<a;p++){const d=n[p];d(u),l.has(d)&&(c.schedule(d),e())}o=!1,i&&(i=!1,c.process(u))}};return c}const O5=40;let xi=!0,Pa=!1,Ei=!1;const Os={delta:0,timestamp:0},Ba=["read","update","preRender","render","postRender"],to=Ba.reduce((e,n)=>(e[n]=P5(()=>Pa=!0),e),{}),Ci=Ba.reduce((e,n)=>{const s=to[n];return e[n]=(a,o=!1,i=!1)=>(Pa||A5(),s.schedule(a,o,i)),e},{}),T5=Ba.reduce((e,n)=>(e[n]=to[n].cancel,e),{});Ba.reduce((e,n)=>(e[n]=()=>to[n].process(Os),e),{});const F5=e=>to[e].process(Os),Of=e=>{Pa=!1,Os.delta=xi?$f:Math.max(Math.min(e-Os.timestamp,O5),1),Os.timestamp=e,Ei=!0,Ba.forEach(F5),Ei=!1,Pa&&(xi=!1,Pf(Of))},A5=()=>{Pa=!0,xi=!0,Ei||Pf(Of)},Tf=()=>Os;function Ff(e,n){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(s[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)n.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(s[a[o]]=e[a[o]]);return s}var vl=function(){},Oa=function(){};vl=function(e,n){!e&&typeof console<"u"&&console.warn(n)},Oa=function(e,n){if(!e)throw new Error(n)};const $i=(e,n,s)=>Math.min(Math.max(s,e),n),To=.001,M5=.01,Su=10,I5=.05,N5=1;function D5({duration:e=800,bounce:n=.25,velocity:s=0,mass:a=1}){let o,i;vl(e<=Su*1e3,"Spring duration must be 10 seconds or less");let l=1-n;l=$i(I5,N5,l),e=$i(M5,Su,e/1e3),l<1?(o=p=>{const d=p*l,f=d*e,h=d-s,m=Pi(p,l),g=Math.exp(-f);return To-h/m*g},i=p=>{const f=p*l*e,h=f*s+s,m=Math.pow(l,2)*Math.pow(p,2)*e,g=Math.exp(-f),b=Pi(Math.pow(p,2),l);return(-o(p)+To>0?-1:1)*((h-m)*g)/b}):(o=p=>{const d=Math.exp(-p*e),f=(p-s)*e+1;return-To+d*f},i=p=>{const d=Math.exp(-p*e),f=(s-p)*(e*e);return d*f});const c=5/e,u=j5(o,i,c);if(e=e*1e3,isNaN(u))return{stiffness:100,damping:10,duration:e};{const p=Math.pow(u,2)*a;return{stiffness:p,damping:l*2*Math.sqrt(a*p),duration:e}}}const L5=12;function j5(e,n,s){let a=s;for(let o=1;o<L5;o++)a=a-e(a)/n(a);return a}function Pi(e,n){return e*Math.sqrt(1-n*n)}const R5=["duration","bounce"],B5=["stiffness","damping","mass"];function xu(e,n){return n.some(s=>e[s]!==void 0)}function q5(e){let n=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!xu(e,B5)&&xu(e,R5)){const s=D5(e);n=Object.assign(Object.assign(Object.assign({},n),s),{velocity:0,mass:1}),n.isResolvedFromDuration=!0}return n}function yl(e){var{from:n=0,to:s=1,restSpeed:a=2,restDelta:o}=e,i=Ff(e,["from","to","restSpeed","restDelta"]);const l={done:!1,value:n};let{stiffness:c,damping:u,mass:p,velocity:d,duration:f,isResolvedFromDuration:h}=q5(i),m=Eu,g=Eu;function b(){const y=d?-(d/1e3):0,$=s-n,S=u/(2*Math.sqrt(c*p)),x=Math.sqrt(c/p)/1e3;if(o===void 0&&(o=Math.min(Math.abs(s-n)/100,.4)),S<1){const P=Pi(x,S);m=R=>{const H=Math.exp(-S*x*R);return s-H*((y+S*x*$)/P*Math.sin(P*R)+$*Math.cos(P*R))},g=R=>{const H=Math.exp(-S*x*R);return S*x*H*(Math.sin(P*R)*(y+S*x*$)/P+$*Math.cos(P*R))-H*(Math.cos(P*R)*(y+S*x*$)-P*$*Math.sin(P*R))}}else if(S===1)m=P=>s-Math.exp(-x*P)*($+(y+x*$)*P);else{const P=x*Math.sqrt(S*S-1);m=R=>{const H=Math.exp(-S*x*R),Y=Math.min(P*R,300);return s-H*((y+S*x*$)*Math.sinh(Y)+P*$*Math.cosh(Y))/P}}}return b(),{next:y=>{const $=m(y);if(h)l.done=y>=f;else{const S=g(y)*1e3,x=Math.abs(S)<=a,P=Math.abs(s-$)<=o;l.done=x&&P}return l.value=l.done?s:$,l},flipTarget:()=>{d=-d,[n,s]=[s,n],b()}}}yl.needsInterpolation=(e,n)=>typeof e=="string"||typeof n=="string";const Eu=e=>0,Af=(e,n,s)=>{const a=n-e;return a===0?1:(s-e)/a},wl=(e,n,s)=>-s*e+s*n+e,Mf=(e,n)=>s=>Math.max(Math.min(s,n),e),ca=e=>e%1?Number(e.toFixed(5)):e,Ta=/(-)?([\d]*\.?[\d])+/g,Oi=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,W5=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function qa(e){return typeof e=="string"}const Wa={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},ua=Object.assign(Object.assign({},Wa),{transform:Mf(0,1)}),nr=Object.assign(Object.assign({},Wa),{default:1}),Sl=e=>({test:n=>qa(n)&&n.endsWith(e)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${e}`}),qt=Sl("deg"),pa=Sl("%"),ve=Sl("px"),Cu=Object.assign(Object.assign({},pa),{parse:e=>pa.parse(e)/100,transform:e=>pa.transform(e*100)}),xl=(e,n)=>s=>Boolean(qa(s)&&W5.test(s)&&s.startsWith(e)||n&&Object.prototype.hasOwnProperty.call(s,n)),If=(e,n,s)=>a=>{if(!qa(a))return a;const[o,i,l,c]=a.match(Ta);return{[e]:parseFloat(o),[n]:parseFloat(i),[s]:parseFloat(l),alpha:c!==void 0?parseFloat(c):1}},Jt={test:xl("hsl","hue"),parse:If("hue","saturation","lightness"),transform:({hue:e,saturation:n,lightness:s,alpha:a=1})=>"hsla("+Math.round(e)+", "+pa.transform(ca(n))+", "+pa.transform(ca(s))+", "+ca(ua.transform(a))+")"},V5=Mf(0,255),Fo=Object.assign(Object.assign({},Wa),{transform:e=>Math.round(V5(e))}),Ct={test:xl("rgb","red"),parse:If("red","green","blue"),transform:({red:e,green:n,blue:s,alpha:a=1})=>"rgba("+Fo.transform(e)+", "+Fo.transform(n)+", "+Fo.transform(s)+", "+ca(ua.transform(a))+")"};function H5(e){let n="",s="",a="",o="";return e.length>5?(n=e.substr(1,2),s=e.substr(3,2),a=e.substr(5,2),o=e.substr(7,2)):(n=e.substr(1,1),s=e.substr(2,1),a=e.substr(3,1),o=e.substr(4,1),n+=n,s+=s,a+=a,o+=o),{red:parseInt(n,16),green:parseInt(s,16),blue:parseInt(a,16),alpha:o?parseInt(o,16)/255:1}}const Ti={test:xl("#"),parse:H5,transform:Ct.transform},gn={test:e=>Ct.test(e)||Ti.test(e)||Jt.test(e),parse:e=>Ct.test(e)?Ct.parse(e):Jt.test(e)?Jt.parse(e):Ti.parse(e),transform:e=>qa(e)?e:e.hasOwnProperty("red")?Ct.transform(e):Jt.transform(e)},Nf="${c}",Df="${n}";function z5(e){var n,s,a,o;return isNaN(e)&&qa(e)&&((s=(n=e.match(Ta))===null||n===void 0?void 0:n.length)!==null&&s!==void 0?s:0)+((o=(a=e.match(Oi))===null||a===void 0?void 0:a.length)!==null&&o!==void 0?o:0)>0}function Lf(e){typeof e=="number"&&(e=`${e}`);const n=[];let s=0;const a=e.match(Oi);a&&(s=a.length,e=e.replace(Oi,Nf),n.push(...a.map(gn.parse)));const o=e.match(Ta);return o&&(e=e.replace(Ta,Df),n.push(...o.map(Wa.parse))),{values:n,numColors:s,tokenised:e}}function jf(e){return Lf(e).values}function Rf(e){const{values:n,numColors:s,tokenised:a}=Lf(e),o=n.length;return i=>{let l=a;for(let c=0;c<o;c++)l=l.replace(c<s?Nf:Df,c<s?gn.transform(i[c]):ca(i[c]));return l}}const U5=e=>typeof e=="number"?0:e;function K5(e){const n=jf(e);return Rf(e)(n.map(U5))}const Va={test:z5,parse:jf,createTransformer:Rf,getAnimatableNone:K5},G5=new Set(["brightness","contrast","saturate","opacity"]);function Z5(e){let[n,s]=e.slice(0,-1).split("(");if(n==="drop-shadow")return e;const[a]=s.match(Ta)||[];if(!a)return e;const o=s.replace(a,"");let i=G5.has(n)?1:0;return a!==s&&(i*=100),n+"("+i+o+")"}const Y5=/([a-z-]*)\(.*?\)/g,Fi=Object.assign(Object.assign({},Va),{getAnimatableNone:e=>{const n=e.match(Y5);return n?n.map(Z5).join(" "):e}});function Ao(e,n,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?e+(n-e)*6*s:s<1/2?n:s<2/3?e+(n-e)*(2/3-s)*6:e}function $u({hue:e,saturation:n,lightness:s,alpha:a}){e/=360,n/=100,s/=100;let o=0,i=0,l=0;if(!n)o=i=l=s;else{const c=s<.5?s*(1+n):s+n-s*n,u=2*s-c;o=Ao(u,c,e+1/3),i=Ao(u,c,e),l=Ao(u,c,e-1/3)}return{red:Math.round(o*255),green:Math.round(i*255),blue:Math.round(l*255),alpha:a}}const J5=(e,n,s)=>{const a=e*e,o=n*n;return Math.sqrt(Math.max(0,s*(o-a)+a))},X5=[Ti,Ct,Jt],Pu=e=>X5.find(n=>n.test(e)),Ou=e=>`'${e}' is not an animatable color. Use the equivalent color code instead.`,Bf=(e,n)=>{let s=Pu(e),a=Pu(n);Oa(!!s,Ou(e)),Oa(!!a,Ou(n));let o=s.parse(e),i=a.parse(n);s===Jt&&(o=$u(o),s=Ct),a===Jt&&(i=$u(i),a=Ct);const l=Object.assign({},o);return c=>{for(const u in l)u!=="alpha"&&(l[u]=J5(o[u],i[u],c));return l.alpha=wl(o.alpha,i.alpha,c),s.transform(l)}},Q5=e=>typeof e=="number",eA=(e,n)=>s=>n(e(s)),qf=(...e)=>e.reduce(eA);function Wf(e,n){return Q5(e)?s=>wl(e,n,s):gn.test(e)?Bf(e,n):Hf(e,n)}const Vf=(e,n)=>{const s=[...e],a=s.length,o=e.map((i,l)=>Wf(i,n[l]));return i=>{for(let l=0;l<a;l++)s[l]=o[l](i);return s}},nA=(e,n)=>{const s=Object.assign(Object.assign({},e),n),a={};for(const o in s)e[o]!==void 0&&n[o]!==void 0&&(a[o]=Wf(e[o],n[o]));return o=>{for(const i in a)s[i]=a[i](o);return s}};function Tu(e){const n=Va.parse(e),s=n.length;let a=0,o=0,i=0;for(let l=0;l<s;l++)a||typeof n[l]=="number"?a++:n[l].hue!==void 0?i++:o++;return{parsed:n,numNumbers:a,numRGB:o,numHSL:i}}const Hf=(e,n)=>{const s=Va.createTransformer(n),a=Tu(e),o=Tu(n);return a.numHSL===o.numHSL&&a.numRGB===o.numRGB&&a.numNumbers>=o.numNumbers?qf(Vf(a.parsed,o.parsed),s):(vl(!0,`Complex values '${e}' and '${n}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),l=>`${l>0?n:e}`)},tA=(e,n)=>s=>wl(e,n,s);function sA(e){if(typeof e=="number")return tA;if(typeof e=="string")return gn.test(e)?Bf:Hf;if(Array.isArray(e))return Vf;if(typeof e=="object")return nA}function aA(e,n,s){const a=[],o=s||sA(e[0]),i=e.length-1;for(let l=0;l<i;l++){let c=o(e[l],e[l+1]);if(n){const u=Array.isArray(n)?n[l]:n;c=qf(u,c)}a.push(c)}return a}function rA([e,n],[s]){return a=>s(Af(e,n,a))}function oA(e,n){const s=e.length,a=s-1;return o=>{let i=0,l=!1;if(o<=e[0]?l=!0:o>=e[a]&&(i=a-1,l=!0),!l){let u=1;for(;u<s&&!(e[u]>o||u===a);u++);i=u-1}const c=Af(e[i],e[i+1],o);return n[i](c)}}function zf(e,n,{clamp:s=!0,ease:a,mixer:o}={}){const i=e.length;Oa(i===n.length,"Both input and output ranges must be the same length"),Oa(!a||!Array.isArray(a)||a.length===i-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),e[0]>e[i-1]&&(e=[].concat(e),n=[].concat(n),e.reverse(),n.reverse());const l=aA(n,a,o),c=i===2?rA(e,l):oA(e,l);return s?u=>c($i(e[0],e[i-1],u)):c}const so=e=>n=>1-e(1-n),El=e=>n=>n<=.5?e(2*n)/2:(2-e(2*(1-n)))/2,iA=e=>n=>Math.pow(n,e),Uf=e=>n=>n*n*((e+1)*n-e),lA=e=>{const n=Uf(e);return s=>(s*=2)<1?.5*n(s):.5*(2-Math.pow(2,-10*(s-1)))},Kf=1.525,cA=4/11,uA=8/11,pA=9/10,Gf=e=>e,Cl=iA(2),dA=so(Cl),Zf=El(Cl),Yf=e=>1-Math.sin(Math.acos(e)),Jf=so(Yf),fA=El(Jf),$l=Uf(Kf),hA=so($l),mA=El($l),gA=lA(Kf),_A=4356/361,kA=35442/1805,bA=16061/1805,Mr=e=>{if(e===1||e===0)return e;const n=e*e;return e<cA?7.5625*n:e<uA?9.075*n-9.9*e+3.4:e<pA?_A*n-kA*e+bA:10.8*e*e-20.52*e+10.72},vA=so(Mr),yA=e=>e<.5?.5*(1-Mr(1-e*2)):.5*Mr(e*2-1)+.5;function wA(e,n){return e.map(()=>n||Zf).splice(0,e.length-1)}function SA(e){const n=e.length;return e.map((s,a)=>a!==0?a/(n-1):0)}function xA(e,n){return e.map(s=>s*n)}function pr({from:e=0,to:n=1,ease:s,offset:a,duration:o=300}){const i={done:!1,value:e},l=Array.isArray(n)?n:[e,n],c=xA(a&&a.length===l.length?a:SA(l),o);function u(){return zf(c,l,{ease:Array.isArray(s)?s:wA(l,s)})}let p=u();return{next:d=>(i.value=p(d),i.done=d>=o,i),flipTarget:()=>{l.reverse(),p=u()}}}function EA({velocity:e=0,from:n=0,power:s=.8,timeConstant:a=350,restDelta:o=.5,modifyTarget:i}){const l={done:!1,value:n};let c=s*e;const u=n+c,p=i===void 0?u:i(u);return p!==u&&(c=p-n),{next:d=>{const f=-c*Math.exp(-d/a);return l.done=!(f>o||f<-o),l.value=l.done?p:p+f,l},flipTarget:()=>{}}}const Fu={keyframes:pr,spring:yl,decay:EA};function CA(e){if(Array.isArray(e.to))return pr;if(Fu[e.type])return Fu[e.type];const n=new Set(Object.keys(e));return n.has("ease")||n.has("duration")&&!n.has("dampingRatio")?pr:n.has("dampingRatio")||n.has("stiffness")||n.has("mass")||n.has("damping")||n.has("restSpeed")||n.has("restDelta")?yl:pr}function Xf(e,n,s=0){return e-n-s}function $A(e,n,s=0,a=!0){return a?Xf(n+-e,n,s):n-(e-n)+s}function PA(e,n,s,a){return a?e>=n+s:e<=-s}const OA=e=>{const n=({delta:s})=>e(s);return{start:()=>Ci.update(n,!0),stop:()=>T5.update(n)}};function Qf(e){var n,s,{from:a,autoplay:o=!0,driver:i=OA,elapsed:l=0,repeat:c=0,repeatType:u="loop",repeatDelay:p=0,onPlay:d,onStop:f,onComplete:h,onRepeat:m,onUpdate:g}=e,b=Ff(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:y}=b,$,S=0,x=b.duration,P,R=!1,H=!0,Y;const D=CA(b);!((s=(n=D).needsInterpolation)===null||s===void 0)&&s.call(n,a,y)&&(Y=zf([0,100],[a,y],{clamp:!1}),a=0,y=100);const G=D(Object.assign(Object.assign({},b),{from:a,to:y}));function ae(){S++,u==="reverse"?(H=S%2===0,l=$A(l,x,p,H)):(l=Xf(l,x,p),u==="mirror"&&G.flipTarget()),R=!1,m&&m()}function fe(){$.stop(),h&&h()}function Q(De){if(H||(De=-De),l+=De,!R){const Ge=G.next(Math.max(0,l));P=Ge.value,Y&&(P=Y(P)),R=H?Ge.done:l<=0}g==null||g(P),R&&(S===0&&(x??(x=l)),S<c?PA(l,x,p,H)&&ae():fe())}function de(){d==null||d(),$=i(Q),$.start()}return o&&de(),{stop:()=>{f==null||f(),$.stop()}}}function eh(e,n){return n?e*(1e3/n):0}function TA({from:e=0,velocity:n=0,min:s,max:a,power:o=.8,timeConstant:i=750,bounceStiffness:l=500,bounceDamping:c=10,restDelta:u=1,modifyTarget:p,driver:d,onUpdate:f,onComplete:h,onStop:m}){let g;function b(x){return s!==void 0&&x<s||a!==void 0&&x>a}function y(x){return s===void 0?a:a===void 0||Math.abs(s-x)<Math.abs(a-x)?s:a}function $(x){g==null||g.stop(),g=Qf(Object.assign(Object.assign({},x),{driver:d,onUpdate:P=>{var R;f==null||f(P),(R=x.onUpdate)===null||R===void 0||R.call(x,P)},onComplete:h,onStop:m}))}function S(x){$(Object.assign({type:"spring",stiffness:l,damping:c,restDelta:u},x))}if(b(e))S({from:e,velocity:n,to:y(e)});else{let x=o*n+e;typeof p<"u"&&(x=p(x));const P=y(x),R=P===s?-1:1;let H,Y;const D=G=>{H=Y,Y=G,n=eh(G-H,Tf().delta),(R===1&&G>P||R===-1&&G<P)&&S({from:G,to:P,velocity:n})};$({type:"decay",from:e,velocity:n,timeConstant:i,power:o,restDelta:u,modifyTarget:p,onUpdate:b(x)?D:void 0})}return{stop:()=>g==null?void 0:g.stop()}}const nh=(e,n)=>1-3*n+3*e,th=(e,n)=>3*n-6*e,sh=e=>3*e,Ir=(e,n,s)=>((nh(n,s)*e+th(n,s))*e+sh(n))*e,ah=(e,n,s)=>3*nh(n,s)*e*e+2*th(n,s)*e+sh(n),FA=1e-7,AA=10;function MA(e,n,s,a,o){let i,l,c=0;do l=n+(s-n)/2,i=Ir(l,a,o)-e,i>0?s=l:n=l;while(Math.abs(i)>FA&&++c<AA);return l}const IA=8,NA=.001;function DA(e,n,s,a){for(let o=0;o<IA;++o){const i=ah(n,s,a);if(i===0)return n;const l=Ir(n,s,a)-e;n-=l/i}return n}const dr=11,tr=1/(dr-1);function LA(e,n,s,a){if(e===n&&s===a)return Gf;const o=new Float32Array(dr);for(let l=0;l<dr;++l)o[l]=Ir(l*tr,e,s);function i(l){let c=0,u=1;const p=dr-1;for(;u!==p&&o[u]<=l;++u)c+=tr;--u;const d=(l-o[u])/(o[u+1]-o[u]),f=c+d*tr,h=ah(f,e,s);return h>=NA?DA(l,f,e,s):h===0?f:MA(l,c,c+tr,e,s)}return l=>l===0||l===1?l:Ir(i(l),n,a)}const Mo={};class jA{constructor(){this.subscriptions=new Set}add(n){return this.subscriptions.add(n),()=>this.subscriptions.delete(n)}notify(n,s,a){if(this.subscriptions.size)for(const o of this.subscriptions)o(n,s,a)}clear(){this.subscriptions.clear()}}const Au=e=>!isNaN(parseFloat(e));class RA{constructor(n){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new jA,this.canTrackVelocity=!1,this.updateAndNotify=s=>{this.prev=this.current,this.current=s;const{delta:a,timestamp:o}=Tf();this.lastUpdated!==o&&(this.timeDelta=a,this.lastUpdated=o),Ci.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>Ci.postRender(this.velocityCheck),this.velocityCheck=({timestamp:s})=>{this.canTrackVelocity||(this.canTrackVelocity=Au(this.current)),s!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=n,this.canTrackVelocity=Au(this.current)}onChange(n){return this.updateSubscribers.add(n)}clearListeners(){this.updateSubscribers.clear()}set(n){this.updateAndNotify(n)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?eh(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(n){return this.stop(),new Promise(s=>{const{stop:a}=n(s);this.stopAnimation=a}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function BA(e){return new RA(e)}const{isArray:qA}=Array;function WA(){const e=se({}),n=a=>{const o=i=>{e.value[i]&&(e.value[i].stop(),e.value[i].destroy(),delete e.value[i])};a?qA(a)?a.forEach(o):o(a):Object.keys(e.value).forEach(o)},s=(a,o,i)=>{if(e.value[a])return e.value[a];const l=BA(o);return l.onChange(c=>i[a]=c),e.value[a]=l,l};return p1(n),{motionValues:e,get:s,stop:n}}const VA=e=>Array.isArray(e),Wt=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),Io=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),HA=e=>({type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}),No=()=>({type:"keyframes",ease:"linear",duration:300}),zA=e=>({type:"keyframes",duration:800,values:e}),Mu={default:HA,x:Wt,y:Wt,z:Wt,rotate:Wt,rotateX:Wt,rotateY:Wt,rotateZ:Wt,scaleX:Io,scaleY:Io,scale:Io,backgroundColor:No,color:No,opacity:No},rh=(e,n)=>{let s;return VA(n)?s=zA:s=Mu[e]||Mu.default,{to:n,...s(n)}},Iu={...Wa,transform:Math.round},oh={color:gn,backgroundColor:gn,outlineColor:gn,fill:gn,stroke:gn,borderColor:gn,borderTopColor:gn,borderRightColor:gn,borderBottomColor:gn,borderLeftColor:gn,borderWidth:ve,borderTopWidth:ve,borderRightWidth:ve,borderBottomWidth:ve,borderLeftWidth:ve,borderRadius:ve,radius:ve,borderTopLeftRadius:ve,borderTopRightRadius:ve,borderBottomRightRadius:ve,borderBottomLeftRadius:ve,width:ve,maxWidth:ve,height:ve,maxHeight:ve,size:ve,top:ve,right:ve,bottom:ve,left:ve,padding:ve,paddingTop:ve,paddingRight:ve,paddingBottom:ve,paddingLeft:ve,margin:ve,marginTop:ve,marginRight:ve,marginBottom:ve,marginLeft:ve,rotate:qt,rotateX:qt,rotateY:qt,rotateZ:qt,scale:nr,scaleX:nr,scaleY:nr,scaleZ:nr,skew:qt,skewX:qt,skewY:qt,distance:ve,translateX:ve,translateY:ve,translateZ:ve,x:ve,y:ve,z:ve,perspective:ve,transformPerspective:ve,opacity:ua,originX:Cu,originY:Cu,originZ:ve,zIndex:Iu,filter:Fi,WebkitFilter:Fi,fillOpacity:ua,strokeOpacity:ua,numOctaves:Iu},Pl=e=>oh[e],ih=(e,n)=>n&&typeof e=="number"&&n.transform?n.transform(e):e;function UA(e,n){let s=Pl(e);return s!==Fi&&(s=Va),s.getAnimatableNone?s.getAnimatableNone(n):void 0}const KA={linear:Gf,easeIn:Cl,easeInOut:Zf,easeOut:dA,circIn:Yf,circInOut:fA,circOut:Jf,backIn:$l,backInOut:mA,backOut:hA,anticipate:gA,bounceIn:vA,bounceInOut:yA,bounceOut:Mr},Nu=e=>{if(Array.isArray(e)){const[n,s,a,o]=e;return LA(n,s,a,o)}else if(typeof e=="string")return KA[e];return e},GA=e=>Array.isArray(e)&&typeof e[0]!="number",Du=(e,n)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&Va.test(n)&&!n.startsWith("url("));function ZA(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function YA({ease:e,times:n,delay:s,...a}){const o={...a};return n&&(o.offset=n),e&&(o.ease=GA(e)?e.map(Nu):Nu(e)),s&&(o.elapsed=-s),o}function JA(e,n,s){return Array.isArray(n.to)&&(e.duration||(e.duration=800)),ZA(n),XA(e)||(e={...e,...rh(s,n.to)}),{...n,...YA(e)}}function XA({delay:e,repeat:n,repeatType:s,repeatDelay:a,from:o,...i}){return!!Object.keys(i).length}function QA(e,n){return e[n]||e.default||e}function e8(e,n,s,a,o){const i=QA(a,e);let l=i.from===null||i.from===void 0?n.get():i.from;const c=Du(e,s);l==="none"&&c&&typeof s=="string"&&(l=UA(e,s));const u=Du(e,l);function p(f){const h={from:l,to:s,velocity:a.velocity?a.velocity:n.getVelocity(),onUpdate:m=>n.set(m)};return i.type==="inertia"||i.type==="decay"?TA({...h,...i}):Qf({...JA(i,h,e),onUpdate:m=>{h.onUpdate(m),i.onUpdate&&i.onUpdate(m)},onComplete:()=>{a.onComplete&&a.onComplete(),o&&o(),f&&f()}})}function d(f){return n.set(s),a.onComplete&&a.onComplete(),o&&o(),f&&f(),{stop:()=>{}}}return!u||!c||i.type===!1?d:p}function n8(){const{motionValues:e,stop:n,get:s}=WA();return{motionValues:e,stop:n,push:(o,i,l,c={},u)=>{const p=l[o],d=s(o,p,l);if(c&&c.immediate){d.set(i);return}const f=e8(o,d,i,c,u);d.start(f)}}}function t8(e,n={},{motionValues:s,push:a,stop:o}=n8()){const i=E(n),l=se(!1);we(s,f=>{l.value=Object.values(f).filter(h=>h.isAnimating()).length>0},{immediate:!0,deep:!0});const c=f=>{if(!i||!i[f])throw new Error(`The variant ${f} does not exist.`);return i[f]},u=f=>(typeof f=="string"&&(f=c(f)),Promise.all(Object.entries(f).map(([h,m])=>{if(h!=="transition")return new Promise(g=>a(h,m,e,f.transition||rh(h,f[h]),g))}).filter(Boolean)));return{isAnimating:l,apply:u,set:f=>{const h=oi(f)?f:c(f);Object.entries(h).forEach(([m,g])=>{m!=="transition"&&a(m,g,e,{immediate:!0})})},leave:async f=>{let h;if(i&&(i.leave&&(h=i.leave),!i.leave&&i.initial&&(h=i.initial)),!h){f();return}await u(h),f()},stop:o}}const Ol=typeof window<"u",s8=()=>Ol&&window.onpointerdown===null,a8=()=>Ol&&window.ontouchstart===null,r8=()=>Ol&&window.onmousedown===null;function o8({target:e,state:n,variants:s,apply:a}){const o=E(s),i=se(!1),l=se(!1),c=se(!1),u=I(()=>{let d=[];return o&&(o.hovered&&(d=[...d,...Object.keys(o.hovered)]),o.tapped&&(d=[...d,...Object.keys(o.tapped)]),o.focused&&(d=[...d,...Object.keys(o.focused)])),d}),p=I(()=>{const d={};Object.assign(d,n.value),i.value&&o.hovered&&Object.assign(d,o.hovered),l.value&&o.tapped&&Object.assign(d,o.tapped),c.value&&o.focused&&Object.assign(d,o.focused);for(const f in d)u.value.includes(f)||delete d[f];return d});o.hovered&&(Te(e,"mouseenter",()=>i.value=!0),Te(e,"mouseleave",()=>{i.value=!1,l.value=!1}),Te(e,"mouseout",()=>{i.value=!1,l.value=!1})),o.tapped&&(r8()&&(Te(e,"mousedown",()=>l.value=!0),Te(e,"mouseup",()=>l.value=!1)),s8()&&(Te(e,"pointerdown",()=>l.value=!0),Te(e,"pointerup",()=>l.value=!1)),a8()&&(Te(e,"touchstart",()=>l.value=!0),Te(e,"touchend",()=>l.value=!1))),o.focused&&(Te(e,"focus",()=>c.value=!0),Te(e,"blur",()=>c.value=!1)),we(p,a)}function i8({set:e,target:n,apply:s,variants:a,variant:o}){const i=E(a);we(()=>n,()=>{i&&(i.initial&&e("initial"),i.enter&&(o.value="enter"))},{immediate:!0,flush:"pre"})}function l8({state:e,apply:n}){we(e,s=>{s&&n(s)},{immediate:!0})}function c8({target:e,variants:n,variant:s}){const a=E(n);a&&(a.visible||a.visibleOnce)&&o0(e,([{isIntersecting:o}])=>{a.visible?o?s.value="visible":s.value="initial":a.visibleOnce&&(o&&s.value!=="visibleOnce"?s.value="visibleOnce":s.value||(s.value="initial"))})}function u8(e,n={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){n.lifeCycleHooks&&i8(e),n.syncVariants&&l8(e),n.visibilityHooks&&c8(e),n.eventListeners&&o8(e)}function lh(e={}){const n=Ve({...e}),s=se({});return we(n,()=>{const a={};for(const[o,i]of Object.entries(n)){const l=Pl(o),c=ih(i,l);a[o]=c}s.value=a},{immediate:!0,deep:!0}),{state:n,style:s}}function Tl(e,n){we(()=>$n(e),s=>{s&&n(s)},{immediate:!0})}const p8={x:"translateX",y:"translateY",z:"translateZ"};function ch(e={},n=!0){const s=Ve({...e}),a=se("");return we(s,o=>{let i="",l=!1;if(n&&(o.x||o.y||o.z)){const c=[o.x||0,o.y||0,o.z||0].map(ve.transform).join(",");i+=`translate3d(${c}) `,l=!0}for(const[c,u]of Object.entries(o)){if(n&&(c==="x"||c==="y"||c==="z"))continue;const p=Pl(c),d=ih(u,p);i+=`${p8[c]||c}(${d}) `}n&&!l&&(i+="translateZ(0px) "),a.value=i.trim()},{immediate:!0,deep:!0}),{state:s,transform:a}}const d8=["","X","Y","Z"],f8=["perspective","translate","scale","rotate","skew"],uh=["transformPerspective","x","y","z"];f8.forEach(e=>{d8.forEach(n=>{const s=e+n;uh.push(s)})});const h8=new Set(uh);function Fl(e){return h8.has(e)}const m8=new Set(["originX","originY","originZ"]);function ph(e){return m8.has(e)}function g8(e){const n={},s={};return Object.entries(e).forEach(([a,o])=>{Fl(a)||ph(a)?n[a]=o:s[a]=o}),{transform:n,style:s}}function dh(e){const{transform:n,style:s}=g8(e),{transform:a}=ch(n),{style:o}=lh(s);return a.value&&(o.value.transform=a.value),o.value}function _8(e,n){let s,a;const{state:o,style:i}=lh();return Tl(e,l=>{a=l;for(const c of Object.keys(oh))l.style[c]===null||l.style[c]===""||Fl(c)||ph(c)||(o[c]=l.style[c]);s&&Object.entries(s).forEach(([c,u])=>l.style[c]=u),n&&n(o)}),we(i,l=>{if(!a){s=l;return}for(const c in l)a.style[c]=l[c]},{immediate:!0}),{style:o}}function k8(e){const n=e.trim().split(/\) |\)/);if(n.length===1)return{};const s=a=>a.endsWith("px")||a.endsWith("deg")?parseFloat(a):isNaN(Number(a))?Number(a):a;return n.reduce((a,o)=>{if(!o)return a;const[i,l]=o.split("("),u=l.split(",").map(d=>s(d.endsWith(")")?d.replace(")",""):d.trim())),p=u.length===1?u[0]:u;return{...a,[i]:p}},{})}function b8(e,n){Object.entries(k8(n)).forEach(([s,a])=>{const o=["x","y","z"];if(s==="translate3d"){if(a===0){o.forEach(i=>e[i]=0);return}a.forEach((i,l)=>e[o[l]]=i);return}if(a=parseFloat(a),s==="translateX"){e.x=a;return}if(s==="translateY"){e.y=a;return}if(s==="translateZ"){e.z=a;return}e[s]=a})}function v8(e,n){let s,a;const{state:o,transform:i}=ch();return Tl(e,l=>{a=l,l.style.transform&&b8(o,l.style.transform),s&&(l.style.transform=s),n&&n(o)}),we(i,l=>{if(!a){s=l;return}a.style.transform=l},{immediate:!0}),{transform:o}}function y8(e,n){const s=Ve({}),a=l=>Object.entries(l).forEach(([c,u])=>s[c]=u),{style:o}=_8(e,a),{transform:i}=v8(e,a);return we(s,l=>{Object.entries(l).forEach(([c,u])=>{const p=Fl(c)?i:o;p[c]&&p[c]===u||(p[c]=u)})},{immediate:!0,deep:!0}),Tl(e,()=>n&&a(n)),{motionProperties:s,style:o,transform:i}}function w8(e={}){const n=E(e),s=se();return{state:I(()=>{if(s.value)return n[s.value]}),variant:s}}function fh(e,n={},s){const{motionProperties:a}=y8(e),{variant:o,state:i}=w8(n),l=t8(a,n),c={target:e,variant:o,variants:n,state:i,motionProperties:a,...l};return u8(c,s),c}const S8=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],x8=(e,n)=>{const s=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};s&&(s.variants&&oi(s.variants)&&(n.value={...n.value,...s.variants}),S8.forEach(a=>{if(a==="delay"){if(s&&s[a]&&Gk(s[a])){const o=s[a];n&&n.value&&(n.value.enter&&(n.value.enter.transition||(n.value.enter.transition={}),n.value.enter.transition={delay:o,...n.value.enter.transition}),n.value.visible&&(n.value.visible.transition||(n.value.visible.transition={}),n.value.visible.transition={delay:o,...n.value.visible.transition}),n.value.visibleOnce&&(n.value.visibleOnce.transition||(n.value.visibleOnce.transition={}),n.value.visibleOnce.transition={delay:o,...n.value.visibleOnce.transition}))}return}a==="visible-once"&&(a="visibleOnce"),s&&s[a]&&oi(s[a])&&(n.value[a]=s[a])}))},Do=e=>({created:(s,a,o)=>{const i=a.value&&typeof a.value=="string"?a.value:o.key;i&&Mo[i]&&Mo[i].stop();const l=se(e||{});typeof a.value=="object"&&(l.value=a.value),x8(o,l);const c=fh(s,l);s.motionInstance=c,i&&(Mo[i]=c)},getSSRProps(s,a){let{initial:o}=s.value||a&&(a==null?void 0:a.props)||{};o=E(o);const i=C5((e==null?void 0:e.initial)||{},o||{});return!i||Object.keys(i).length===0?void 0:{style:dh(i)}}}),E8={initial:{opacity:0},enter:{opacity:1}},C8={initial:{opacity:0},visible:{opacity:1}},$8={initial:{opacity:0},visibleOnce:{opacity:1}},P8={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},O8={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},T8={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},F8={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},A8={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},M8={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},I8={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},N8={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},D8={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},L8={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},j8={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},R8={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},B8={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},q8={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},W8={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},V8={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},H8={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},z8={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},U8={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},K8={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},G8={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},Z8={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},Y8={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},J8={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},X8={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},Q8={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},eM={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},Ai={__proto__:null,fade:E8,fadeVisible:C8,fadeVisibleOnce:$8,pop:P8,popVisible:O8,popVisibleOnce:T8,rollBottom:B8,rollLeft:F8,rollRight:I8,rollTop:L8,rollVisibleBottom:q8,rollVisibleLeft:A8,rollVisibleOnceBottom:W8,rollVisibleOnceLeft:M8,rollVisibleOnceRight:D8,rollVisibleOnceTop:R8,rollVisibleRight:N8,rollVisibleTop:j8,slideBottom:X8,slideLeft:V8,slideRight:U8,slideTop:Z8,slideVisibleBottom:Q8,slideVisibleLeft:H8,slideVisibleOnceBottom:eM,slideVisibleOnceLeft:z8,slideVisibleOnceRight:G8,slideVisibleOnceTop:J8,slideVisibleRight:K8,slideVisibleTop:Y8},nM=Me({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(e){var c;const n=Jg(),s=Ve({});if(!e.is&&!n.default)return()=>Pn("div",{});const a=I(()=>{let u;return e.preset&&(u=Ai[e.preset]),u}),o=I(()=>({initial:e.initial,enter:e.enter,leave:e.leave,visible:e.visible,visibleOnce:e.visibleOnce,hovered:e.hovered,tapped:e.tapped,focused:e.focused})),i=I(()=>{const u={...o.value,...a.value||{},...e.variants||{}};return e.delay&&(u.enter.transition={...u.enter.transition},u.enter.transition.delay=parseInt(e.delay)),u}),l=I(()=>{if(!e.is)return;let u=e.is;return typeof l.value=="string"&&!Ju(u)&&(u=yr(u)),u});if(((c=process==null?void 0:process.env)==null?void 0:c.NODE_ENV)==="development"||process!=null&&process.dev){const u=p=>{var d;(d=p.variants)!=null&&d.initial&&p.set("initial"),setTimeout(()=>{var f,h,m;(f=p.variants)!=null&&f.enter&&p.apply("enter"),(h=p.variants)!=null&&h.visible&&p.apply("visible"),(m=p.variants)!=null&&m.visibleOnce&&p.apply("visibleOnce")},10)};Kr(()=>Object.entries(s).forEach(([p,d])=>u(d)))}return{slots:n,component:l,motionConfig:i,instances:s}},render({slots:e,motionConfig:n,instances:s,component:a}){var c;const o=dh(n.initial||{}),i=(u,p)=>(u.props||(u.props={}),u.props.style=o,u.props.onVnodeMounted=({el:d})=>{const f=fh(d,n);s[p]=f},u);if(a){const u=Pn(a,void 0,e);return i(u,0),u}return(((c=e.default)==null?void 0:c.call(e))||[]).map((u,p)=>i(u,p))}});function tM(e){const n="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",s="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",a=new RegExp(n.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,o=>`-${o}`).toLowerCase().replace(/\s+/g,"-").replace(a,o=>s.charAt(n.indexOf(o))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const sM={install(e,n){if(e.directive("motion",Do()),e.component("Motion",nM),!n||n&&!n.excludePresets)for(const s in Ai){const a=Ai[s];e.directive(`motion-${tM(s)}`,Do(a))}if(n&&n.directives)for(const s in n.directives){const a=n.directives[s];a.initial,e.directive(`motion-${s}`,Do(a))}}};var Lu;const da=typeof window<"u",aM=Object.prototype.toString,rM=e=>aM.call(e)==="[object Object]";da&&((Lu=window==null?void 0:window.navigator)!=null&&Lu.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function oM(e){return ji()?(op(e),!0):!1}function iM(e){var n;const s=E(e);return(n=s==null?void 0:s.$el)!=null?n:s}const lM=da?window:void 0,ju=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ru="__vueuse_ssr_handlers__";ju[Ru]=ju[Ru]||{};function cM(e,n={}){const{immediate:s=!0,window:a=lM}=n,o=se(!1);let i=null;function l(){!o.value||!a||(e(),i=a.requestAnimationFrame(l))}function c(){!o.value&&a&&(o.value=!0,l())}function u(){o.value=!1,i!=null&&a&&(a.cancelAnimationFrame(i),i=null)}return s&&c(),oM(u),{isActive:o,pause:u,resume:c}}var Bu;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Bu||(Bu={}));const ao="vue-starport-injection",hh="vue-starport-options",uM={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},mh={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var pM=Object.defineProperty,Nr=Object.getOwnPropertySymbols,gh=Object.prototype.hasOwnProperty,_h=Object.prototype.propertyIsEnumerable,qu=(e,n,s)=>n in e?pM(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,dM=(e,n)=>{for(var s in n||(n={}))gh.call(n,s)&&qu(e,s,n[s]);if(Nr)for(var s of Nr(n))_h.call(n,s)&&qu(e,s,n[s]);return e},Wu=(e,n)=>{var s={};for(var a in e)gh.call(e,a)&&n.indexOf(a)<0&&(s[a]=e[a]);if(e!=null&&Nr)for(var a of Nr(e))n.indexOf(a)<0&&_h.call(e,a)&&(s[a]=e[a]);return s};const fM=Me({name:"StarportProxy",props:dM({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},mh),setup(e,n){const s=C(ao),a=I(()=>s.getInstance(e.port,e.component)),o=se(),i=a.value.generateId(),l=se(!1);return a.value.isVisible||(a.value.land(),l.value=!0),us(async()=>{if(a.value.el){console.error(`[Vue Starport] Multiple proxies of "${a.value.componentName}" with port "${e.port}" detected. The later one will be ignored.`);return}if(a.value.el=o.value,await nn(),l.value=!0,a.value.rect.update(),a.value.rect.width===0||a.value.rect.height===0){const c=a.value.rect.width===0?"width":"height";console.warn(`[Vue Starport] The proxy of component "${a.value.componentName}" (port "${e.port}") has no ${c} on initial render, have you set the size for it?`),console.warn("element:",a.value.el),console.warn("rect:",a.value.rect)}}),Na(async()=>{a.value.rect.update(),a.value.liftOff(),a.value.el=void 0,l.value=!1,!a.value.options.keepAlive&&(await nn(),await nn(),!a.value.el&&s.dispose(a.value.port))}),we(()=>e,async()=>{a.value.props&&await nn();const c=e,{props:u}=c,p=Wu(c,["props"]);a.value.props=u||{},a.value.setLocalOptions(p)},{deep:!0,immediate:!0}),()=>{const c=e,{initialProps:u,mountedProps:p}=c,d=Wu(c,["initialProps","mountedProps"]),f=le(d,(l.value?p:u)||{});return Pn("div",le(f,{id:i,ref:o,"data-starport-proxy":a.value.componentId,"data-starport-landed":a.value.isLanded?"true":void 0,"data-starport-floating":a.value.isLanded?void 0:"true"}),n.slots.default?Pn(n.slots.default):void 0)}}});var hM=Object.defineProperty,mM=Object.defineProperties,gM=Object.getOwnPropertyDescriptors,Vu=Object.getOwnPropertySymbols,_M=Object.prototype.hasOwnProperty,kM=Object.prototype.propertyIsEnumerable,Hu=(e,n,s)=>n in e?hM(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,bM=(e,n)=>{for(var s in n||(n={}))_M.call(n,s)&&Hu(e,s,n[s]);if(Vu)for(var s of Vu(n))kM.call(n,s)&&Hu(e,s,n[s]);return e},vM=(e,n)=>mM(e,gM(n));const yM=Me({name:"Starport",inheritAttrs:!0,props:mh,setup(e,n){const s=se(!1);return us(()=>{if(s.value=!0,!C(ao))throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.")}),()=>{var l,c;const a=(c=(l=n.slots).default)==null?void 0:c.call(l);if(!a)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(a.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${a.length}`);const o=a[0];let i=o.type;return(!rM(i)||Nt(i))&&(i={render(){return a}}),Pn(fM,vM(bM({},e),{key:e.port,component:qr(i),props:o.props}))}}});function wM(e){const n=Ve({height:0,width:0,left:0,top:0,update:a,listen:i,pause:l,margin:"0px",padding:"0px"}),s=da?document.documentElement||document.body:void 0;function a(){if(!da)return;const c=iM(e);if(!c)return;const{height:u,width:p,left:d,top:f}=c.getBoundingClientRect(),h=window.getComputedStyle(c),m=h.margin,g=h.padding;Object.assign(n,{height:u,width:p,left:d,top:s.scrollTop+f,margin:m,padding:g})}const o=cM(a,{immediate:!1});function i(){da&&(a(),o.resume())}function l(){o.pause()}return n}let SM=(e,n=21)=>(s=n)=>{let a="",o=s;for(;o--;)a+=e[Math.random()*e.length|0];return a};const zu=SM("abcdefghijklmnopqrstuvwxyz",5);function Uu(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function xM(e){var n;return e.name||((n=e.__file)==null?void 0:n.split(/[\/\\.]/).slice(-2)[0])||""}var EM=Object.defineProperty,Ku=Object.getOwnPropertySymbols,CM=Object.prototype.hasOwnProperty,$M=Object.prototype.propertyIsEnumerable,Gu=(e,n,s)=>n in e?EM(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,Lo=(e,n)=>{for(var s in n||(n={}))CM.call(n,s)&&Gu(e,s,n[s]);if(Ku)for(var s of Ku(n))$M.call(n,s)&&Gu(e,s,n[s]);return e};function PM(e,n,s={}){const a=xM(n),o=Uu(a)||zu(),i=se(),l=se(null),c=se(!1),u=se(!1),p=Ih(!0),d=se({}),f=I(()=>Lo(Lo(Lo({},uM),s),d.value)),h=se(0);let m;p.run(()=>{m=wM(i),we(i,async $=>{$&&(u.value=!0),await nn(),i.value||(u.value=!1)})});const g=Uu(e);function b(){return`starport-${o}-${g}-${zu()}`}const y=b();return Ve({el:i,id:y,port:e,props:l,rect:m,scope:p,isLanded:c,isVisible:u,options:f,liftOffTime:h,component:n,componentName:a,componentId:o,generateId:b,setLocalOptions($={}){d.value=JSON.parse(JSON.stringify($))},elRef(){return i},liftOff(){c.value&&(c.value=!1,h.value=Date.now(),m.listen())},land(){c.value||(c.value=!0,m.pause())}})}function OM(e){const n=Ve(new Map);function s(o,i){let l=n.get(o);return l||(l=PM(o,i,e),n.set(o,l)),l.component=i,l}function a(o){var i;(i=n.get(o))==null||i.scope.stop(),n.delete(o)}return{portMap:n,dispose:a,getInstance:s}}var TM=Object.defineProperty,FM=Object.defineProperties,AM=Object.getOwnPropertyDescriptors,Zu=Object.getOwnPropertySymbols,MM=Object.prototype.hasOwnProperty,IM=Object.prototype.propertyIsEnumerable,Yu=(e,n,s)=>n in e?TM(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,NM=(e,n)=>{for(var s in n||(n={}))MM.call(n,s)&&Yu(e,s,n[s]);if(Zu)for(var s of Zu(n))IM.call(n,s)&&Yu(e,s,n[s]);return e},DM=(e,n)=>FM(e,AM(n));const LM=Me({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const n=C(ao);if(!n)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const s=I(()=>n.getInstance(e.port,e.component)),a=I(()=>{var l;return((l=s.value.el)==null?void 0:l.id)||s.value.id}),o=I(()=>{const l=Date.now()-s.value.liftOffTime,c=Math.max(0,s.value.options.duration-l),u=s.value.rect,p={position:"absolute",left:0,top:0,width:`${u.width}px`,height:`${u.height}px`,margin:u.margin,padding:u.padding,transform:`translate3d(${u.left}px,${u.top}px,0px)`};return!s.value.isVisible||!s.value.el?DM(NM({},p),{zIndex:-1,display:"none"}):(s.value.isLanded?p.display="none":Object.assign(p,{transitionProperty:"all",transitionDuration:`${c}ms`,transitionTimingFunction:s.value.options.easing}),p)}),i={onTransitionend(l){s.value.isLanded||console.warn(`[Vue Starport] Transition duration of component "${s.value.componentName}" is too short (${l.elapsedTime}s) that may cause animation glitches. Try to increase the duration of that component, or decrease the duration the Starport (current: ${s.value.options.duration/1e3}s).`)}};return()=>{const l=!!(s.value.isLanded&&s.value.el);return Pn("div",{style:o.value,"data-starport-craft":s.value.componentId,"data-starport-landed":s.value.isLanded?"true":void 0,"data-starport-floating":s.value.isLanded?void 0:"true",onTransitionend:s.value.land},Pn(Lg,{to:l?`#${a.value}`:"body",disabled:!l},Pn(s.value.component,le(i,s.value.props))))}}}),jM=Me({name:"StarportCarrier",setup(e,{slots:n}){const s=OM(C(hh,{}));return Fn().appContext.app.provide(ao,s),()=>{var o;return[(o=n.default)==null?void 0:o.call(n),Array.from(s.portMap.entries()).map(([i,{component:l}])=>Pn(LM,{key:i,port:i,component:l}))]}}});function RM(e={}){return{install(n){n.provide(hh,e),n.component("Starport",yM),n.component("StarportCarrier",jM)}}}function BM(e){function n(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}n(),window.addEventListener("resize",n),e.app.use(sM),e.app.use(RM({keepAlive:!0}))}function wn(e,n,s){var a;return((a=e.instance)==null?void 0:a.$).provides[n]??s}function qM(){return{install(e){e.directive("click",{name:"v-click",mounted(n,s){var d,f,h,m;if(la.value||(d=wn(s,aa))!=null&&d.value)return;const a=wn(s,Kt),o=wn(s,sa),i=wn(s,ai),l=s.modifiers.hide!==!1&&s.modifiers.hide!=null,c=s.modifiers.fade!==!1&&s.modifiers.fade!=null,u=((f=a==null?void 0:a.value)==null?void 0:f.length)||0,p=c?Ok:bo;if(a&&!((h=a==null?void 0:a.value)!=null&&h.includes(n))&&a.value.push(n),s.value==null&&(s.value=a==null?void 0:a.value.length),!(i!=null&&i.value.has(s.value)))i==null||i.value.set(s.value,[n]);else if(!((m=i==null?void 0:i.value.get(s.value))!=null&&m.includes(n))){const g=(i==null?void 0:i.value.get(s.value))||[];i==null||i.value.set(s.value,[n].concat(g))}n==null||n.classList.toggle(zt,!0),o&&we(o,()=>{const g=(o==null?void 0:o.value)??0,b=s.value!=null?g>=s.value:g>u;n.classList.contains(vo)||n.classList.toggle(p,!b),l!==!1&&l!==void 0&&n.classList.toggle(p,b),n.classList.toggle(Vs,!1);const y=i==null?void 0:i.value.get(g);y==null||y.forEach(($,S)=>{$.classList.toggle(Xa,!1),S===y.length-1?$.classList.toggle(Vs,!0):$.classList.toggle(Xa,!0)}),n.classList.contains(Vs)||n.classList.toggle(Xa,b)},{immediate:!0})},unmounted(n,s){n==null||n.classList.toggle(zt,!1);const a=wn(s,Kt);a!=null&&a.value&&ri(a.value,n)}}),e.directive("after",{name:"v-after",mounted(n,s){var c,u;if(la.value||(c=wn(s,aa))!=null&&c.value)return;const a=wn(s,Kt),o=wn(s,sa),i=wn(s,ai),l=a==null?void 0:a.value.length;s.value==null&&(s.value=a==null?void 0:a.value.length),i!=null&&i.value.has(s.value)?(u=i==null?void 0:i.value.get(s.value))==null||u.push(n):i==null||i.value.set(s.value,[n]),n==null||n.classList.toggle(zt,!0),o&&we(o,()=>{const p=(o.value??0)>=(s.value??l??0);n.classList.contains(vo)||n.classList.toggle(bo,!p),n.classList.toggle(Vs,!1),n.classList.contains(Vs)||n.classList.toggle(Xa,p)},{immediate:!0})},unmounted(n){n==null||n.classList.toggle(zt,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(n,s){var l,c,u;if(la.value||(l=wn(s,aa))!=null&&l.value)return;const a=wn(s,Kt),o=wn(s,sa),i=((c=a==null?void 0:a.value)==null?void 0:c.length)||0;a&&!((u=a==null?void 0:a.value)!=null&&u.includes(n))&&a.value.push(n),n==null||n.classList.toggle(zt,!0),o&&we(o,()=>{const p=(o==null?void 0:o.value)??0,d=s.value!=null?p>=s.value:p>i;n.classList.toggle(bo,d),n.classList.toggle(vo,d)},{immediate:!0})},unmounted(n,s){n==null||n.classList.toggle(zt,!1);const a=wn(s,Kt);a!=null&&a.value&&ri(a.value,n)}})}}}function WM(e,n){const s=wf(e),a=Sf(n,s.currentRoute,s.currentPage);return{nav:{...s,...a,downloadPDF:wi,next:Ft,nextSlide:Ca,openInEditor:k5,prev:At,prevSlide:$a},configs:Oe,themeConfigs:I(()=>Oe.themeConfig)}}function VM(){return{install(e){const n=WM(jn,Nn);e.provide(F,Ve(n))}}}const Ls=I_(x5);Ls.use(bn);Ls.use(Ck());Ls.use(qM());Ls.use(VM());BM({app:Ls,router:bn});Ls.mount("#app");export{Ji as A,md as B,zM as C,fn as D,Iy as E,Ae as F,Cd as G,us as H,we as I,Cv as J,Na as K,er as V,A as _,t as a,F as b,ee as c,Me as d,HM as e,Ln as f,E as g,T as h,C as i,He as j,N as k,Ys as l,xe as m,tn as n,k as o,Da as p,Yt as q,se as r,Xn as s,ki as t,Un as u,yv as v,w,wv as x,Sv as y,Ev as z};
