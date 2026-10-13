/********************************
Umetrip Remove Ads - Version 1.0
Please note that you may need to reinstall app for script to work.

QuantumultX rewrite link:
https://raw.githubusercontent.com/zirawell/R-Store/main/Rule/QuanX/Adblock/App/H/航旅纵横/rewrite/umetrip.conf

Surge module link:
https://raw.githubusercontent.com/zirawell/R-Store/main/Rule/Surge/Adblock/App/H/航旅纵横/umetrip.sgmodule
********************************/

const url = $request.url;
const header = $request.headers;
const ua = $request.headers.rpid || $request.headers.Rpid;
const blockIds = [
	"1430064",
	"1000029"
];

const modifyIds = [
	"1000002",
	"1060067"
];

if (blockIds.includes(ua)) {
	$done({status: "HTTP/1.1 404 Not Found", body: "", headers: ""});
} else if (modifyIds.includes(ua)){
	let body = $response.body;
	let text = isHex(body) ? hexToText(body) : body;
	text = stripAll(text);
	$done({ body: isHex(body) ? textToHex(text) : text });
} else {
	$done();
}


function stripAll(a){let out='',i=0;let cntClose=0,cntAd=0;while(i<a.length){if(a[i]!=='{'){out+=a[i++];continue}const end=findMatchingBrace(a,i);if(end===-1){out+=a.slice(i);break}const chunk=a.slice(i,end+1);if(shouldRemove(chunk)){if(/"closeClick"\s*:\s*true/.test(chunk))cntClose++;if(/"department"\s*:\s*"advert"/.test(chunk)||/"trackName"\s*:\s*"advert"/.test(chunk)||/"serviceTrack"\s*:\s*"advert_\d+/.test(chunk))cntAd++}else{out+=chunk}i=end+1}return out}
function isHex(s){return typeof s==='string'&&/^[\s0-9a-fA-F]+$/.test(s)&&s.replace(/\s/g,'').length%2===0}
function hexToText(a){a=a.replace(/\s/g,'');const bytes=new Uint8Array(a.length/2);for(let i=0;i<bytes.length;i++){bytes[i]=parseInt(a.substr(i*2,2),16)}return new TextDecoder('utf-8',{fatal:false}).decode(bytes)}
function textToHex(a){const bytes=new TextEncoder().encode(a);return Array.from(bytes).map(b=>b.toString(16).padStart(2,'0')).join(' ')}
function findMatchingBrace(a,b){let depth=0,inStr=false,esc=false;for(let i=b;i<a.length;i++){const c=a[i];if(inStr){if(esc)esc=false;else if(c==='\\')esc=true;else if(c==='"')inStr=false}else{if(c==='"')inStr=true;else if(c==='{')depth++;else if(c==='}'&&--depth===0)return i}}return-1}
function shouldRemove(a){if(/"department"\s*:\s*"advert"/.test(a)||/"trackName"\s*:\s*"advert"/.test(a)||/"serviceTrack"\s*:\s*"advert_\d+/.test(a)){return true}try{const obj=JSON.parse(a);if(obj&&obj.closeClick===true)return true}catch(e){if(/"closeClick"\s*:\s*true/.test(a))return true}return false}
