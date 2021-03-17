/*
Splice app unlock pro.

Surge4.0:
http-response https:\/\/splice\.oracle\.\w+\.com\/devices\/me requires-body=1,max-size=0,script-path=Splice.js

QX 1.0.0:
https:\/\/splice\.oracle\.\w+\.com\/devices\/me url script-response-body Splice.js

Surge & QX Mitm = splice.oracle.*.com
*/

var obj = JSON.parse($response.body); 
obj['will_renew_subscription'] = true; 
obj['is_subscribed'] = true; 
$done({body: JSON.stringify(obj)});