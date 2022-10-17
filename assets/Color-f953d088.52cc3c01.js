var Wr=Object.defineProperty;var c=(a,r)=>Wr(a,"name",{value:r,configurable:!0});import"./iframe.7bdf2208.js";import"./es.map.constructor.2b1d8279.js";import{W as Hr,T as Kr,F as Dr,I as Ur,z as Jr,a as Qr,B as dr,C as Yr,D as Zr}from"./index.8b55e2ba.js";import{R as I,r as p}from"./index.e6529758.js";import{a as j}from"./index.a1918b32.js";import{j as k,a as Z}from"./jsx-runtime.2f26d2e4.js";import"./es.number.to-fixed.ba51712e.js";import"./string.f2a7ac01.js";var q,A;function _(a,r,e){return r in a?Object.defineProperty(a,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[r]=e,a}c(_,"_defineProperty");function lr(a){return lr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},lr(a)}c(lr,"_typeof");function T(a,r){return ne(a)||ae(a,r)||ee(a,r)||re()}c(T,"_slicedToArray");function re(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}c(re,"_nonIterableRest");function ee(a,r){if(!!a){if(typeof a=="string")return mr(a,r);var e=Object.prototype.toString.call(a).slice(8,-1);if(e==="Object"&&a.constructor&&(e=a.constructor.name),e==="Map"||e==="Set")return Array.from(a);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return mr(a,r)}}c(ee,"_unsupportedIterableToArray");function mr(a,r){(r==null||r>a.length)&&(r=a.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=a[e];return n}c(mr,"_arrayLikeToArray");function ae(a,r){var e=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(e!=null){var n=[],t=!0,o=!1,i,u;try{for(e=e.call(a);!(t=(i=e.next()).done)&&(n.push(i.value),!(r&&n.length===r));t=!0);}catch(l){o=!0,u=l}finally{try{!t&&e.return!=null&&e.return()}finally{if(o)throw u}}return n}}c(ae,"_iterableToArrayLimit");function ne(a){if(Array.isArray(a))return a}c(ne,"_arrayWithHoles");function L(){return(L=Object.assign||function(a){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n])}return a}).apply(this,arguments)}c(L,"u");function pr(a,r){if(a==null)return{};var e,n,t={},o=Object.keys(a);for(n=0;n<o.length;n++)r.indexOf(e=o[n])>=0||(t[e]=a[e]);return t}c(pr,"c");function cr(a){var r=p.exports.useRef(a),e=p.exports.useRef(function(n){r.current&&r.current(n)});return r.current=a,e.current}c(cr,"i");var $=c(function(r,e,n){return e===void 0&&(e=0),n===void 0&&(n=1),r>n?n:r<e?e:r},"s"),V=c(function(r){return"touches"in r},"f"),sr=c(function(r){return r&&r.ownerDocument.defaultView||self},"v"),yr=c(function(r,e,n){var t=r.getBoundingClientRect(),o=V(e)?function(i,u){for(var l=0;l<i.length;l++)if(i[l].identifier===u)return i[l];return i[0]}(e.touches,n):e;return{left:$((o.pageX-(t.left+sr(r).pageXOffset))/t.width),top:$((o.pageY-(t.top+sr(r).pageYOffset))/t.height)}},"d"),xr=c(function(r){!V(r)&&r.preventDefault()},"h"),gr=I.memo(function(a){var r=a.onMove,e=a.onKey,n=pr(a,["onMove","onKey"]),t=p.exports.useRef(null),o=cr(r),i=cr(e),u=p.exports.useRef(null),l=p.exports.useRef(!1),s=p.exports.useMemo(function(){var M=c(function(d){xr(d),(V(d)?d.touches.length>0:d.buttons>0)&&t.current?o(yr(t.current,d,u.current)):R(!1)},"e"),S=c(function(){return R(!1)},"r");function R(y){var d=l.current,g=sr(t.current),b=y?g.addEventListener:g.removeEventListener;b(d?"touchmove":"mousemove",M),b(d?"touchend":"mouseup",S)}return c(R,"t"),[function(y){var d=y.nativeEvent,g=t.current;if(g&&(xr(d),!function(C,E){return E&&!V(C)}(d,l.current)&&g)){if(V(d)){l.current=!0;var b=d.changedTouches||[];b.length&&(u.current=b[0].identifier)}g.focus(),o(yr(g,d,u.current)),R(!0)}},function(y){var d=y.which||y.keyCode;d<37||d>40||(y.preventDefault(),i({left:d===39?.05:d===37?-.05:0,top:d===40?.05:d===38?-.05:0}))},R]},[i,o]),f=s[0],h=s[1],x=s[2];return p.exports.useEffect(function(){return x},[x]),k("div",{...L({},n,{onTouchStart:f,onMouseDown:f,className:"react-colorful__interactive",ref:t,onKeyDown:h,tabIndex:0,role:"slider"})})}),K=c(function(r){return r.filter(Boolean).join(" ")},"g"),br=c(function(r){var e=r.color,n=r.left,t=r.top,o=t===void 0?.5:t,i=K(["react-colorful__pointer",r.className]);return k("div",{className:i,style:{top:100*o+"%",left:100*n+"%"},children:k("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:e}})})},"p"),O=c(function(r,e,n){return e===void 0&&(e=0),n===void 0&&(n=Math.pow(10,e)),Math.round(n*r)/n},"b"),te={grad:.9,turn:360,rad:360/(2*Math.PI)},nr=c(function(r){return r[0]==="#"&&(r=r.substr(1)),r.length<6?{r:parseInt(r[0]+r[0],16),g:parseInt(r[1]+r[1],16),b:parseInt(r[2]+r[2],16),a:1}:{r:parseInt(r.substr(0,2),16),g:parseInt(r.substr(2,2),16),b:parseInt(r.substr(4,2),16),a:1}},"x"),oe=c(function(r,e){return e===void 0&&(e="deg"),Number(r)*(te[e]||1)},"C"),ie=c(function(r){var e=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(r);return e?ue({h:oe(e[1],e[2]),s:Number(e[3]),l:Number(e[4]),a:e[5]===void 0?1:Number(e[5])/(e[6]?100:1)}):{h:0,s:0,v:0,a:1}},"E"),ue=c(function(r){var e=r.s,n=r.l;return{h:r.h,s:(e*=(n<50?n:100-n)/100)>0?2*e/(n+e)*100:0,v:n+e,a:r.a}},"M"),Nr=c(function(r){var e=r.s,n=r.v,t=r.a,o=(200-e)*n/100;return{h:O(r.h),s:O(o>0&&o<200?e*n/100/(o<=100?o:200-o)*100:0),l:O(o/2),a:O(t,2)}},"N"),vr=c(function(r){var e=Nr(r);return"hsl("+e.h+", "+e.s+"%, "+e.l+"%)"},"w"),Y=c(function(r){var e=Nr(r);return"hsla("+e.h+", "+e.s+"%, "+e.l+"%, "+e.a+")"},"y"),Tr=c(function(r){var e=r.h,n=r.s,t=r.v,o=r.a;e=e/360*6,n/=100,t/=100;var i=Math.floor(e),u=t*(1-n),l=t*(1-(e-i)*n),s=t*(1-(1-e+i)*n),f=i%6;return{r:O(255*[t,l,u,u,s,t][f]),g:O(255*[s,t,t,l,u,u][f]),b:O(255*[u,u,s,t,t,l][f]),a:O(o,2)}},"q"),le=c(function(r){var e=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(r);return e?Fr({r:Number(e[1])/(e[2]?100/255:1),g:Number(e[3])/(e[4]?100/255:1),b:Number(e[5])/(e[6]?100/255:1),a:e[7]===void 0?1:Number(e[7])/(e[8]?100:1)}):{h:0,s:0,v:0,a:1}},"I"),tr=c(function(r){var e=r.toString(16);return e.length<2?"0"+e:e},"z"),Fr=c(function(r){var e=r.r,n=r.g,t=r.b,o=r.a,i=Math.max(e,n,t),u=i-Math.min(e,n,t),l=u?i===e?(n-t)/u:i===n?2+(t-e)/u:4+(e-n)/u:0;return{h:O(60*(l<0?l+6:l)),s:O(i?u/i*100:0),v:O(i/255*100),a:o}},"B"),Pr=I.memo(function(a){var r=a.hue,e=a.onChange,n=K(["react-colorful__hue",a.className]);return I.createElement("div",{className:n},I.createElement(gr,{onMove:c(function(o){e({h:360*o.left})},"onMove"),onKey:c(function(o){e({h:$(r+360*o.left,0,360)})},"onKey"),"aria-label":"Hue","aria-valuetext":O(r)},I.createElement(br,{className:"react-colorful__hue-pointer",left:r/360,color:vr({h:r,s:100,v:100,a:1})})))}),jr=I.memo(function(a){var r=a.hsva,e=a.onChange,n={backgroundColor:vr({h:r.h,s:100,v:100,a:1})};return I.createElement("div",{className:"react-colorful__saturation",style:n},I.createElement(gr,{onMove:c(function(o){e({s:100*o.left,v:100-100*o.top})},"onMove"),onKey:c(function(o){e({s:$(r.s+100*o.left,0,100),v:$(r.v-100*o.top,0,100)})},"onKey"),"aria-label":"Color","aria-valuetext":"Saturation "+O(r.s)+"%, Brightness "+O(r.v)+"%"},I.createElement(br,{className:"react-colorful__saturation-pointer",top:1-r.v/100,left:r.s/100,color:vr(r)})))}),zr=c(function(r,e){if(r===e)return!0;for(var n in r)if(r[n]!==e[n])return!1;return!0},"A"),Lr=c(function(r,e){return r.replace(/\s/g,"")===e.replace(/\s/g,"")},"S");function Br(a,r,e){var n=cr(e),t=p.exports.useState(function(){return a.toHsva(r)}),o=t[0],i=t[1],u=p.exports.useRef({color:r,hsva:o});p.exports.useEffect(function(){if(!a.equal(r,u.current.color)){var s=a.toHsva(r);u.current={hsva:s,color:r},i(s)}},[r,a]),p.exports.useEffect(function(){var s;zr(o,u.current.hsva)||a.equal(s=a.fromHsva(o),u.current.color)||(u.current={hsva:o,color:s},n(s))},[o,a,n]);var l=p.exports.useCallback(function(s){i(function(f){return Object.assign({},f,s)})},[]);return[o,l]}c(Br,"T");var ce=typeof window<"u"?p.exports.useLayoutEffect:p.exports.useEffect,se=c(function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},"X"),wr=new Map,$r=c(function(r){ce(function(){var e=r.current?r.current.ownerDocument:document;if(e!==void 0&&!wr.has(e)){var n=e.createElement("style");n.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,wr.set(e,n);var t=se();t&&n.setAttribute("nonce",t),e.head.appendChild(n)}},[])},"V"),ve=c(function(r){var e=r.className,n=r.colorModel,t=r.color,o=t===void 0?n.defaultColor:t,i=r.onChange,u=pr(r,["className","colorModel","color","onChange"]),l=p.exports.useRef(null);$r(l);var s=Br(n,o,i),f=s[0],h=s[1],x=K(["react-colorful",e]);return Z("div",{...L({},u,{ref:l,className:x}),children:[k(jr,{hsva:f,onChange:h}),k(Pr,{hue:f.h,onChange:h,className:"react-colorful__last-control"})]})},"$"),fe={defaultColor:"000",toHsva:c(function(r){return Fr(nr(r))},"toHsva"),fromHsva:c(function(r){return n=(e=Tr(r)).g,t=e.b,"#"+tr(e.r)+tr(n)+tr(t);var e,n,t},"fromHsva"),equal:c(function(r,e){return r.toLowerCase()===e.toLowerCase()||zr(nr(r),nr(e))},"equal")},he=c(function(r){return I.createElement(ve,L({},r,{colorModel:fe}))},"J"),de=c(function(r){var e=r.className,n=r.hsva,t=r.onChange,o={backgroundImage:"linear-gradient(90deg, "+Y(Object.assign({},n,{a:0}))+", "+Y(Object.assign({},n,{a:1}))+")"},i=K(["react-colorful__alpha",e]);return I.createElement("div",{className:i},k("div",{className:"react-colorful__alpha-gradient",style:o}),I.createElement(gr,{onMove:c(function(l){t({a:l.left})},"onMove"),onKey:c(function(l){t({a:$(n.a+l.left)})},"onKey"),"aria-label":"Alpha","aria-valuetext":O(100*n.a)+"%"},I.createElement(br,{className:"react-colorful__alpha-pointer",left:n.a,color:Y(n)})))},"Q"),Xr=c(function(r){var e=r.className,n=r.colorModel,t=r.color,o=t===void 0?n.defaultColor:t,i=r.onChange,u=pr(r,["className","colorModel","color","onChange"]),l=p.exports.useRef(null);$r(l);var s=Br(n,o,i),f=s[0],h=s[1],x=K(["react-colorful",e]);return Z("div",{...L({},u,{ref:l,className:x}),children:[k(jr,{hsva:f,onChange:h}),k(Pr,{hue:f.h,onChange:h}),k(de,{hsva:f,onChange:h,className:"react-colorful__last-control"})]})},"U"),pe={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:ie,fromHsva:Y,equal:Lr},ge=c(function(r){return k(Xr,{...L({},r,{colorModel:pe})})},"re"),be={defaultColor:"rgba(0, 0, 0, 1)",toHsva:le,fromHsva:c(function(r){var e=Tr(r);return"rgba("+e.r+", "+e.g+", "+e.b+", "+e.a+")"},"fromHsva"),equal:Lr},me=c(function(r){return k(Xr,{...L({},r,{colorModel:be})})},"pe"),ye={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},W=ye,qr={};for(var or=0,kr=Object.keys(W);or<kr.length;or++){var Mr=kr[or];qr[W[Mr]]=Mr}var v={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}},Ar=v;for(var ir=0,Cr=Object.keys(v);ir<Cr.length;ir++){var H=Cr[ir];if(!("channels"in v[H]))throw new Error("missing channels property: "+H);if(!("labels"in v[H]))throw new Error("missing channel labels property: "+H);if(v[H].labels.length!==v[H].channels)throw new Error("channel and label counts mismatch: "+H);var Sr=v[H],xe=Sr.channels,we=Sr.labels;delete v[H].channels,delete v[H].labels,Object.defineProperty(v[H],"channels",{value:xe}),Object.defineProperty(v[H],"labels",{value:we})}v.rgb.hsl=function(a){var r=a[0]/255,e=a[1]/255,n=a[2]/255,t=Math.min(r,e,n),o=Math.max(r,e,n),i=o-t,u,l;o===t?u=0:r===o?u=(e-n)/i:e===o?u=2+(n-r)/i:n===o&&(u=4+(r-e)/i),u=Math.min(u*60,360),u<0&&(u+=360);var s=(t+o)/2;return o===t?l=0:s<=.5?l=i/(o+t):l=i/(2-o-t),[u,l*100,s*100]};v.rgb.hsv=function(a){var r,e,n,t,o,i=a[0]/255,u=a[1]/255,l=a[2]/255,s=Math.max(i,u,l),f=s-Math.min(i,u,l),h=c(function(M){return(s-M)/6/f+1/2},"diffc");return f===0?(t=0,o=0):(o=f/s,r=h(i),e=h(u),n=h(l),i===s?t=n-e:u===s?t=1/3+r-n:l===s&&(t=2/3+e-r),t<0?t+=1:t>1&&(t-=1)),[t*360,o*100,s*100]};v.rgb.hwb=function(a){var r=a[0],e=a[1],n=a[2],t=v.rgb.hsl(a)[0],o=1/255*Math.min(r,Math.min(e,n));return n=1-1/255*Math.max(r,Math.max(e,n)),[t,o*100,n*100]};v.rgb.cmyk=function(a){var r=a[0]/255,e=a[1]/255,n=a[2]/255,t=Math.min(1-r,1-e,1-n),o=(1-r-t)/(1-t)||0,i=(1-e-t)/(1-t)||0,u=(1-n-t)/(1-t)||0;return[o*100,i*100,u*100,t*100]};function ke(a,r){return Math.pow(a[0]-r[0],2)+Math.pow(a[1]-r[1],2)+Math.pow(a[2]-r[2],2)}c(ke,"comparativeDistance");v.rgb.keyword=function(a){var r=qr[a];if(r)return r;for(var e=1/0,n,t=0,o=Object.keys(W);t<o.length;t++){var i=o[t],u=W[i],l=ke(a,u);l<e&&(e=l,n=i)}return n};v.keyword.rgb=function(a){return W[a]};v.rgb.xyz=function(a){var r=a[0]/255,e=a[1]/255,n=a[2]/255;r=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92,e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92,n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92;var t=r*.4124+e*.3576+n*.1805,o=r*.2126+e*.7152+n*.0722,i=r*.0193+e*.1192+n*.9505;return[t*100,o*100,i*100]};v.rgb.lab=function(a){var r=v.rgb.xyz(a),e=r[0],n=r[1],t=r[2];e/=95.047,n/=100,t/=108.883,e=e>.008856?Math.pow(e,1/3):7.787*e+16/116,n=n>.008856?Math.pow(n,1/3):7.787*n+16/116,t=t>.008856?Math.pow(t,1/3):7.787*t+16/116;var o=116*n-16,i=500*(e-n),u=200*(n-t);return[o,i,u]};v.hsl.rgb=function(a){var r=a[0]/360,e=a[1]/100,n=a[2]/100,t,o,i;if(e===0)return i=n*255,[i,i,i];n<.5?t=n*(1+e):t=n+e-n*e;for(var u=2*n-t,l=[0,0,0],s=0;s<3;s++)o=r+1/3*-(s-1),o<0&&o++,o>1&&o--,6*o<1?i=u+(t-u)*6*o:2*o<1?i=t:3*o<2?i=u+(t-u)*(2/3-o)*6:i=u,l[s]=i*255;return l};v.hsl.hsv=function(a){var r=a[0],e=a[1]/100,n=a[2]/100,t=e,o=Math.max(n,.01);n*=2,e*=n<=1?n:2-n,t*=o<=1?o:2-o;var i=(n+e)/2,u=n===0?2*t/(o+t):2*e/(n+e);return[r,u*100,i*100]};v.hsv.rgb=function(a){var r=a[0]/60,e=a[1]/100,n=a[2]/100,t=Math.floor(r)%6,o=r-Math.floor(r),i=255*n*(1-e),u=255*n*(1-e*o),l=255*n*(1-e*(1-o));switch(n*=255,t){case 0:return[n,l,i];case 1:return[u,n,i];case 2:return[i,n,l];case 3:return[i,u,n];case 4:return[l,i,n];case 5:return[n,i,u]}};v.hsv.hsl=function(a){var r=a[0],e=a[1]/100,n=a[2]/100,t=Math.max(n,.01),o,i;i=(2-e)*n;var u=(2-e)*t;return o=e*t,o/=u<=1?u:2-u,o=o||0,i/=2,[r,o*100,i*100]};v.hwb.rgb=function(a){var r=a[0]/360,e=a[1]/100,n=a[2]/100,t=e+n,o;t>1&&(e/=t,n/=t);var i=Math.floor(6*r),u=1-n;o=6*r-i,(i&1)!==0&&(o=1-o);var l=e+o*(u-e),s,f,h;switch(i){default:case 6:case 0:s=u,f=l,h=e;break;case 1:s=l,f=u,h=e;break;case 2:s=e,f=u,h=l;break;case 3:s=e,f=l,h=u;break;case 4:s=l,f=e,h=u;break;case 5:s=u,f=e,h=l;break}return[s*255,f*255,h*255]};v.cmyk.rgb=function(a){var r=a[0]/100,e=a[1]/100,n=a[2]/100,t=a[3]/100,o=1-Math.min(1,r*(1-t)+t),i=1-Math.min(1,e*(1-t)+t),u=1-Math.min(1,n*(1-t)+t);return[o*255,i*255,u*255]};v.xyz.rgb=function(a){var r=a[0]/100,e=a[1]/100,n=a[2]/100,t,o,i;return t=r*3.2406+e*-1.5372+n*-.4986,o=r*-.9689+e*1.8758+n*.0415,i=r*.0557+e*-.204+n*1.057,t=t>.0031308?1.055*Math.pow(t,1/2.4)-.055:t*12.92,o=o>.0031308?1.055*Math.pow(o,1/2.4)-.055:o*12.92,i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:i*12.92,t=Math.min(Math.max(0,t),1),o=Math.min(Math.max(0,o),1),i=Math.min(Math.max(0,i),1),[t*255,o*255,i*255]};v.xyz.lab=function(a){var r=a[0],e=a[1],n=a[2];r/=95.047,e/=100,n/=108.883,r=r>.008856?Math.pow(r,1/3):7.787*r+16/116,e=e>.008856?Math.pow(e,1/3):7.787*e+16/116,n=n>.008856?Math.pow(n,1/3):7.787*n+16/116;var t=116*e-16,o=500*(r-e),i=200*(e-n);return[t,o,i]};v.lab.xyz=function(a){var r=a[0],e=a[1],n=a[2],t,o,i;o=(r+16)/116,t=e/500+o,i=o-n/200;var u=Math.pow(o,3),l=Math.pow(t,3),s=Math.pow(i,3);return o=u>.008856?u:(o-16/116)/7.787,t=l>.008856?l:(t-16/116)/7.787,i=s>.008856?s:(i-16/116)/7.787,t*=95.047,o*=100,i*=108.883,[t,o,i]};v.lab.lch=function(a){var r=a[0],e=a[1],n=a[2],t,o=Math.atan2(n,e);t=o*360/2/Math.PI,t<0&&(t+=360);var i=Math.sqrt(e*e+n*n);return[r,i,t]};v.lch.lab=function(a){var r=a[0],e=a[1],n=a[2],t=n/360*2*Math.PI,o=e*Math.cos(t),i=e*Math.sin(t);return[r,o,i]};v.rgb.ansi16=function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,e=T(a,3),n=e[0],t=e[1],o=e[2],i=r===null?v.rgb.hsv(a)[2]:r;if(i=Math.round(i/50),i===0)return 30;var u=30+(Math.round(o/255)<<2|Math.round(t/255)<<1|Math.round(n/255));return i===2&&(u+=60),u};v.hsv.ansi16=function(a){return v.rgb.ansi16(v.hsv.rgb(a),a[2])};v.rgb.ansi256=function(a){var r=a[0],e=a[1],n=a[2];if(r===e&&e===n)return r<8?16:r>248?231:Math.round((r-8)/247*24)+232;var t=16+36*Math.round(r/255*5)+6*Math.round(e/255*5)+Math.round(n/255*5);return t};v.ansi16.rgb=function(a){var r=a%10;if(r===0||r===7)return a>50&&(r+=3.5),r=r/10.5*255,[r,r,r];var e=(~~(a>50)+1)*.5,n=(r&1)*e*255,t=(r>>1&1)*e*255,o=(r>>2&1)*e*255;return[n,t,o]};v.ansi256.rgb=function(a){if(a>=232){var r=(a-232)*10+8;return[r,r,r]}a-=16;var e,n=Math.floor(a/36)/5*255,t=Math.floor((e=a%36)/6)/5*255,o=e%6/5*255;return[n,t,o]};v.rgb.hex=function(a){var r=((Math.round(a[0])&255)<<16)+((Math.round(a[1])&255)<<8)+(Math.round(a[2])&255),e=r.toString(16).toUpperCase();return"000000".substring(e.length)+e};v.hex.rgb=function(a){var r=a.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!r)return[0,0,0];var e=r[0];r[0].length===3&&(e=e.split("").map(function(u){return u+u}).join(""));var n=parseInt(e,16),t=n>>16&255,o=n>>8&255,i=n&255;return[t,o,i]};v.rgb.hcg=function(a){var r=a[0]/255,e=a[1]/255,n=a[2]/255,t=Math.max(Math.max(r,e),n),o=Math.min(Math.min(r,e),n),i=t-o,u,l;return i<1?u=o/(1-i):u=0,i<=0?l=0:t===r?l=(e-n)/i%6:t===e?l=2+(n-r)/i:l=4+(r-e)/i,l/=6,l%=1,[l*360,i*100,u*100]};v.hsl.hcg=function(a){var r=a[1]/100,e=a[2]/100,n=e<.5?2*r*e:2*r*(1-e),t=0;return n<1&&(t=(e-.5*n)/(1-n)),[a[0],n*100,t*100]};v.hsv.hcg=function(a){var r=a[1]/100,e=a[2]/100,n=r*e,t=0;return n<1&&(t=(e-n)/(1-n)),[a[0],n*100,t*100]};v.hcg.rgb=function(a){var r=a[0]/360,e=a[1]/100,n=a[2]/100;if(e===0)return[n*255,n*255,n*255];var t=[0,0,0],o=r%1*6,i=o%1,u=1-i,l=0;switch(Math.floor(o)){case 0:t[0]=1,t[1]=i,t[2]=0;break;case 1:t[0]=u,t[1]=1,t[2]=0;break;case 2:t[0]=0,t[1]=1,t[2]=i;break;case 3:t[0]=0,t[1]=u,t[2]=1;break;case 4:t[0]=i,t[1]=0,t[2]=1;break;default:t[0]=1,t[1]=0,t[2]=u}return l=(1-e)*n,[(e*t[0]+l)*255,(e*t[1]+l)*255,(e*t[2]+l)*255]};v.hcg.hsv=function(a){var r=a[1]/100,e=a[2]/100,n=r+e*(1-r),t=0;return n>0&&(t=r/n),[a[0],t*100,n*100]};v.hcg.hsl=function(a){var r=a[1]/100,e=a[2]/100,n=e*(1-r)+.5*r,t=0;return n>0&&n<.5?t=r/(2*n):n>=.5&&n<1&&(t=r/(2*(1-n))),[a[0],t*100,n*100]};v.hcg.hwb=function(a){var r=a[1]/100,e=a[2]/100,n=r+e*(1-r);return[a[0],(n-r)*100,(1-n)*100]};v.hwb.hcg=function(a){var r=a[1]/100,e=a[2]/100,n=1-e,t=n-r,o=0;return t<1&&(o=(n-t)/(1-t)),[a[0],t*100,o*100]};v.apple.rgb=function(a){return[a[0]/65535*255,a[1]/65535*255,a[2]/65535*255]};v.rgb.apple=function(a){return[a[0]/255*65535,a[1]/255*65535,a[2]/255*65535]};v.gray.rgb=function(a){return[a[0]/100*255,a[0]/100*255,a[0]/100*255]};v.gray.hsl=function(a){return[0,0,a[0]]};v.gray.hsv=v.gray.hsl;v.gray.hwb=function(a){return[0,100,a[0]]};v.gray.cmyk=function(a){return[0,0,0,a[0]]};v.gray.lab=function(a){return[a[0],0,0]};v.gray.hex=function(a){var r=Math.round(a[0]/100*255)&255,e=(r<<16)+(r<<8)+r,n=e.toString(16).toUpperCase();return"000000".substring(n.length)+n};v.rgb.gray=function(a){var r=(a[0]+a[1]+a[2])/3;return[r/255*100]};var rr=Ar;function Me(){for(var a={},r=Object.keys(rr),e=r.length,n=0;n<e;n++)a[r[n]]={distance:-1,parent:null};return a}c(Me,"buildGraph");function Ce(a){var r=Me(),e=[a];for(r[a].distance=0;e.length;)for(var n=e.pop(),t=Object.keys(rr[n]),o=t.length,i=0;i<o;i++){var u=t[i],l=r[u];l.distance===-1&&(l.distance=r[n].distance+1,l.parent=n,e.unshift(u))}return r}c(Ce,"deriveBFS");function Se(a,r){return function(e){return r(a(e))}}c(Se,"link");function Ee(a,r){for(var e=[r[a].parent,a],n=rr[r[a].parent][a],t=r[a].parent;r[t].parent;)e.unshift(r[t].parent),n=Se(rr[r[t].parent][t],n),t=r[t].parent;return n.conversion=e,n}c(Ee,"wrapConversion");var _e=c(function(r){for(var e=Ce(r),n={},t=Object.keys(e),o=t.length,i=0;i<o;i++){var u=t[i],l=e[u];l.parent!==null&&(n[u]=Ee(u,e))}return n},"route$1"),fr=Ar,Oe=_e,B={},Ie=Object.keys(fr);function Re(a){var r=c(function(){for(var n=arguments.length,t=new Array(n),o=0;o<n;o++)t[o]=arguments[o];var i=t[0];return i==null?i:(i.length>1&&(t=i),a(t))},"wrappedFn");return"conversion"in a&&(r.conversion=a.conversion),r}c(Re,"wrapRaw");function He(a){var r=c(function(){for(var n=arguments.length,t=new Array(n),o=0;o<n;o++)t[o]=arguments[o];var i=t[0];if(i==null)return i;i.length>1&&(t=i);var u=a(t);if(lr(u)==="object")for(var l=u.length,s=0;s<l;s++)u[s]=Math.round(u[s]);return u},"wrappedFn");return"conversion"in a&&(r.conversion=a.conversion),r}c(He,"wrapRounded");Ie.forEach(function(a){B[a]={},Object.defineProperty(B[a],"channels",{value:fr[a].channels}),Object.defineProperty(B[a],"labels",{value:fr[a].labels});var r=Oe(a),e=Object.keys(r);e.forEach(function(n){var t=r[n];B[a][n]=He(t),B[a][n].raw=Re(t)})});var N=B,Ne=Zr,Te=c(function(){return Ne.Date.now()},"now$1"),Fe=Te,Pe=/\s/;function je(a){for(var r=a.length;r--&&Pe.test(a.charAt(r)););return r}c(je,"trimmedEndIndex$1");var ze=je,Le=ze,Be=/^\s+/;function $e(a){return a&&a.slice(0,Le(a)+1).replace(Be,"")}c($e,"baseTrim$1");var Xe=$e,qe=Xe,Er=dr,Ae=Yr,_r=0/0,Ve=/^[-+]0x[0-9a-f]+$/i,Ge=/^0b[01]+$/i,We=/^0o[0-7]+$/i,Ke=parseInt;function De(a){if(typeof a=="number")return a;if(Ae(a))return _r;if(Er(a)){var r=typeof a.valueOf=="function"?a.valueOf():a;a=Er(r)?r+"":r}if(typeof a!="string")return a===0?a:+a;a=qe(a);var e=Ge.test(a);return e||We.test(a)?Ke(a.slice(2),e?2:8):Ve.test(a)?_r:+a}c(De,"toNumber$1");var Ue=De,Je=dr,ur=Fe,Or=Ue,Qe="Expected a function",Ye=Math.max,Ze=Math.min;function ra(a,r,e){var n,t,o,i,u,l,s=0,f=!1,h=!1,x=!0;if(typeof a!="function")throw new TypeError(Qe);r=Or(r)||0,Je(e)&&(f=!!e.leading,h="maxWait"in e,o=h?Ye(Or(e.maxWait)||0,r):o,x="trailing"in e?!!e.trailing:x);function M(w){var F=n,P=t;return n=t=void 0,s=w,i=a.apply(P,F),i}c(M,"invokeFunc");function S(w){return s=w,u=setTimeout(d,r),f?M(w):i}c(S,"leadingEdge");function R(w){var F=w-l,P=w-s,D=r-F;return h?Ze(D,o-P):D}c(R,"remainingWait");function y(w){var F=w-l,P=w-s;return l===void 0||F>=r||F<0||h&&P>=o}c(y,"shouldInvoke");function d(){var w=ur();if(y(w))return g(w);u=setTimeout(d,R(w))}c(d,"timerExpired");function g(w){return u=void 0,x&&n?M(w):(n=t=void 0,i)}c(g,"trailingEdge");function b(){u!==void 0&&clearTimeout(u),s=0,n=l=t=u=void 0}c(b,"cancel");function C(){return u===void 0?i:g(ur())}c(C,"flush");function E(){var w=ur(),F=y(w);if(n=arguments,t=this,l=w,F){if(u===void 0)return S(l);if(h)return clearTimeout(u),u=setTimeout(d,r),M(l)}return u===void 0&&(u=setTimeout(d,r)),i}return c(E,"debounced"),E.cancel=b,E.flush=C,E}c(ra,"debounce$1");var ea=ra,aa=ea,na=dr,ta="Expected a function";function oa(a,r,e){var n=!0,t=!0;if(typeof a!="function")throw new TypeError(ta);return na(e)&&(n="leading"in e?!!e.leading:n,t="trailing"in e?!!e.trailing:t),aa(a,r,{leading:n,maxWait:r,trailing:t})}c(oa,"throttle");var ia=oa,ua=j.div({position:"relative",maxWidth:250}),la=j(Hr)({position:"absolute",zIndex:1,top:4,left:4}),ca=j.div({width:200,margin:5,".react-colorful__saturation":{borderRadius:"4px 4px 0 0"},".react-colorful__hue":{boxShadow:"inset 0 0 0 1px rgb(0 0 0 / 5%)"},".react-colorful__last-control":{borderRadius:"0 0 4px 4px"}}),sa=j(Kr)(function(a){var r=a.theme;return{fontFamily:r.typography.fonts.base}}),va=j.div({display:"grid",gridTemplateColumns:"repeat(9, 16px)",gap:6,padding:3,marginTop:5,width:200}),fa=j.div(function(a){var r=a.theme,e=a.active;return{width:16,height:16,boxShadow:e?"".concat(r.appBorderColor," 0 0 0 1px inset, ").concat(r.color.mediumdark,"50 0 0 0 4px"):"".concat(r.appBorderColor," 0 0 0 1px inset"),borderRadius:r.appBorderRadius}}),ha=`url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`,Ir=c(function(r){var e=r.value,n=r.active,t=r.onClick,o=r.style,i=Qr(r,["value","active","onClick","style"]),u="linear-gradient(".concat(e,", ").concat(e,"), ").concat(ha,", linear-gradient(#fff, #fff)");return k(fa,{...Object.assign({},i,{active:n,onClick:t},{style:Object.assign(Object.assign({},o),{backgroundImage:u})})})},"Swatch"),da=j(Dr.Input)(function(a){var r=a.theme;return{width:"100%",paddingLeft:30,paddingRight:30,boxSizing:"border-box",fontFamily:r.typography.fonts.base}}),pa=j(Ur)(function(a){var r=a.theme;return{position:"absolute",zIndex:1,top:6,right:7,width:20,height:20,padding:4,boxSizing:"border-box",cursor:"pointer",color:r.input.color}}),m;(function(a){a.RGB="rgb",a.HSL="hsl",a.HEX="hex"})(m||(m={}));var J=Object.values(m),ga=/\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,ba=/^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,ma=/^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,hr=/^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,ya=/^\s*#?([0-9a-f]{3})\s*$/i,xa=(q={},_(q,m.HEX,he),_(q,m.RGB,me),_(q,m.HSL,ge),q),Q=(A={},_(A,m.HEX,"transparent"),_(A,m.RGB,"rgba(0, 0, 0, 0)"),_(A,m.HSL,"hsla(0, 0%, 0%, 0)"),A),Rr=c(function(r){var e=r==null?void 0:r.match(ga);if(!e)return[0,0,0,1];var n=T(e,5),t=n[1],o=n[2],i=n[3],u=n[4],l=u===void 0?1:u;return[t,o,i,l].map(Number)},"stringToArgs"),G=c(function(r){var e;if(!!r){var n=!0;if(ba.test(r)){var t,o=Rr(r),i=T(o,4),u=i[0],l=i[1],s=i[2],f=i[3],h=N.rgb.hsl([u,l,s])||[0,0,0],x=T(h,3),M=x[0],S=x[1],R=x[2];return t={valid:n,value:r,keyword:N.rgb.keyword([u,l,s]),colorSpace:m.RGB},_(t,m.RGB,r),_(t,m.HSL,"hsla(".concat(M,", ").concat(S,"%, ").concat(R,"%, ").concat(f,")")),_(t,m.HEX,"#".concat(N.rgb.hex([u,l,s]).toLowerCase())),t}if(ma.test(r)){var y,d=Rr(r),g=T(d,4),b=g[0],C=g[1],E=g[2],w=g[3],F=N.hsl.rgb([b,C,E])||[0,0,0],P=T(F,3),D=P[0],Vr=P[1],Gr=P[2];return y={valid:n,value:r,keyword:N.hsl.keyword([b,C,E]),colorSpace:m.HSL},_(y,m.RGB,"rgba(".concat(D,", ").concat(Vr,", ").concat(Gr,", ").concat(w,")")),_(y,m.HSL,r),_(y,m.HEX,"#".concat(N.hsl.hex([b,C,E]).toLowerCase())),y}var U=r.replace("#",""),X=N.keyword.rgb(U)||N.hex.rgb(U),ar=N.rgb.hsl(X),z=r;if(/[^#a-f0-9]/i.test(r)?z=U:hr.test(r)&&(z="#".concat(U)),z.startsWith("#"))n=hr.test(z);else try{N.keyword.hex(z)}catch{n=!1}return e={valid:n,value:z,keyword:N.rgb.keyword(X),colorSpace:m.HEX},_(e,m.RGB,"rgba(".concat(X[0],", ").concat(X[1],", ").concat(X[2],", 1)")),_(e,m.HSL,"hsla(".concat(ar[0],", ").concat(ar[1],"%, ").concat(ar[2],"%, 1)")),_(e,m.HEX,z),e}},"parseValue"),wa=c(function(r,e,n){if(!r||!(e!=null&&e.valid))return Q[n];if(n!==m.HEX)return(e==null?void 0:e[n])||Q[n];if(!e.hex.startsWith("#"))try{return"#".concat(N.keyword.hex(e.hex))}catch{return Q.hex}var t=e.hex.match(ya);if(!t)return hr.test(e.hex)?e.hex:Q.hex;var o=t[1].split(""),i=T(o,3),u=i[0],l=i[1],s=i[2];return"#".concat(u).concat(u).concat(l).concat(l).concat(s).concat(s)},"getRealValue"),ka=c(function(r,e){var n=p.exports.useState(r||""),t=T(n,2),o=t[0],i=t[1],u=p.exports.useState(function(){return G(o)}),l=T(u,2),s=l[0],f=l[1],h=p.exports.useState((s==null?void 0:s.colorSpace)||m.HEX),x=T(h,2),M=x[0],S=x[1];p.exports.useEffect(function(){r===void 0&&(i(""),f(void 0),S(m.HEX))},[r]);var R=p.exports.useMemo(function(){return wa(o,s,M).toLowerCase()},[o,s,M]),y=p.exports.useCallback(function(g){var b=G(g);i((b==null?void 0:b.value)||g||""),b&&(f(b),S(b.colorSpace),e(b.value))},[e]),d=p.exports.useCallback(function(){var g=J.indexOf(M)+1;g>=J.length&&(g=0),S(J[g]);var b=(s==null?void 0:s[J[g]])||"";i(b),e(b)},[s,M,e]);return{value:o,realValue:R,updateValue:y,color:s,colorSpace:M,cycleColorSpace:d}},"useColorInput"),er=c(function(r){return r.replace(/\s*/,"").toLowerCase()},"id"),Ma=c(function(r,e,n){var t=p.exports.useState(e!=null&&e.valid?[e]:[]),o=T(t,2),i=o[0],u=o[1];p.exports.useEffect(function(){e===void 0&&u([])},[e]);var l=p.exports.useMemo(function(){var f=(r||[]).map(function(h){return typeof h=="string"?G(h):h.title?Object.assign(Object.assign({},G(h.color)),{keyword:h.title}):G(h.color)});return f.concat(i).filter(Boolean).slice(-27)},[r,i]),s=p.exports.useCallback(function(f){!(f!=null&&f.valid)||l.some(function(h){return er(h[n])===er(f[n])})||u(function(h){return h.concat(f)})},[n,l]);return{presets:l,addPreset:s}},"usePresets"),Fa=c(function(r){var e=r.name,n=r.value,t=r.onChange,o=r.onFocus,i=r.onBlur,u=r.presetColors,l=r.startOpen,s=ka(n,ia(t,200)),f=s.value,h=s.realValue,x=s.updateValue,M=s.color,S=s.colorSpace,R=s.cycleColorSpace,y=Ma(u,M,S),d=y.presets,g=y.addPreset,b=xa[S];return Z(ua,{children:[k(la,{trigger:"click",startOpen:l,closeOnClick:!0,onVisibilityChange:c(function(){return g(M)},"onVisibilityChange"),tooltip:Z(ca,{children:[k(b,{...Object.assign({color:h==="transparent"?"#000000":h},{onChange:x,onFocus:o,onBlur:i})}),d.length>0&&k(va,{children:d.map(function(C,E){return k(Hr,{hasChrome:!1,tooltip:k(sa,{note:C.keyword||C.value}),children:k(Ir,{value:C[S],active:M&&er(C[S])===er(M[S]),onClick:c(function(){return x(C.value)},"onClick")})},"".concat(C.value,"-").concat(E))})})]}),children:k(Ir,{value:h,style:{margin:4}})}),k(da,{id:Jr(e),value:f,onChange:c(function(E){return x(E.target.value)},"onChange"),onFocus:c(function(E){return E.target.select()},"onFocus"),placeholder:"Choose color..."}),f?k(pa,{icon:"markup",onClick:R}):null]})},"ColorControl");export{Fa as ColorControl,Fa as default};
//# sourceMappingURL=Color-f953d088.52cc3c01.js.map
