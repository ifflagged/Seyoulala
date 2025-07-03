/*
# > 一汽大众
# 一汽大众应用净化；
# 由向晚制作维护；

# 更新时间: 20250603
# 规则链接: https://raw.githubusercontent.com/XiangwanGuan/Shadowrocket/main/Rewrite/XiangwanConfig/FAWVW.js

[rewrite_local]
^https?:\/\/oneapp-api\.faw-vw\.com\/search\/firstPage\/getPromptList\/v1\?.* url script-response-body https://xiangwanguan.github.io/Shadowrocket/Rewrite/JavaScript/FAWVW.js
^https?:\/\/oneapp-api\.faw-vw\.com\/benefits\/benefitsCard\/getInfo\/v1\?.* url script-response-body https://xiangwanguan.github.io/Shadowrocket/Rewrite/JavaScript/FAWVW.js
^https?:\/\/oneapp-api\.faw-vw\.com\/content\/booth\/getBoothList\/v1\?.*showPositionCode=VWAPP_HOME_BUOY url script-response-body https://xiangwanguan.github.io/Shadowrocket/Rewrite/JavaScript/FAWVW.js
^https?:\/\/oneapp-api\.faw-vw\.com\/content\/booth\/getBoothList\/v1\?.*showPositionCode=VWAPP_(ICE|MEB)_(OPEN_SCREEN_ADS|CAR_ZHIHU_COLLEGE) url script-response-body https://xiangwanguan.github.io/Shadowrocket/Rewrite/JavaScript/FAWVW.js
^https?:\/\/oneapp-api\.faw-vw\.com\/content\/booth\/getBoothList\/v1\?.*showPositionCode=VWAPP_(ICE|MEB)_HOME_(OWNER_BANNER|PROSPECTS_BANNER|CUSTOM_BANNER|KONGO|CUSTOM_KONGO) url script-response-body https://xiangwanguan.github.io/Shadowrocket/Rewrite/JavaScript/FAWVW.js
^https?:\/\/oneapp-api\.faw-vw\.com\/content\/(customize\/getCustomizePageName|recommend\/getRecommendInfoFlows)\/v1\?.* url script-response-body https://xiangwanguan.github.io/Shadowrocket/Rewrite/JavaScript/FAWVW.js
^https?:\/\/oneapp-api\.faw-vw\.com\/content\/(activity\/getSquareActivityList|theme\/getThemeList|post\/getPostsByTags)\/v1\?.* url script-response-body https://xiangwanguan.github.io/Shadowrocket/Rewrite/JavaScript/FAWVW.js
^https?:\/\/oneapp-api\.faw-vw\.com\/content\/(evaluate\/getEvaluateCards|collection\/getCollectionList)\/v1\?.* url script-response-body https://xiangwanguan.github.io/Shadowrocket/Rewrite/JavaScript/FAWVW.js

[mitm]
hostname = oneapp-api.faw-vw.com
*/

try {
    const url = $request.url;
    let body;

    if (url.includes("collection/getCollectionList")) {
        body = { returnStatus: "SUCCEED", hasMore: false, data: {} };
    } else {
        body = { returnStatus: "SUCCEED", hasMore: false, data: [] };
    }

    $done({
        status: 200,
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" }
    });
} catch (e) {
    $done();
}
