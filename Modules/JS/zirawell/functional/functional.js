/********************************
Functional Plugin - Version 1.0
Please note that you may need to reinstall app for script to work.

QuantumultX rewrite link:
https://raw.githubusercontent.com/zirawell/R-Store/main/Rule/QuanX/Adblock/App/#/功能类/rewrite/functional.conf

********************************/

const url = $request.url;
if (url?.match(/https?:\/\/119\.29\.29\.\d+\/d\?dn=/)) {
	var path = url.replace("query=1","query=0");
	console.log(path);
	$done({url:path});
} else {
	$done({});
}