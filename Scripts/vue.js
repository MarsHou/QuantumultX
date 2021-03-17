/*
VUE Vlog app unlocks pro

Surge & QX Mitm = api.vuevideo.net
*/

body = $response.body.replace(/\"isPremium\":false/, "\"isPremium\":true").replace(/\"valid\":false/, "\"valid\":true")
$done({body});