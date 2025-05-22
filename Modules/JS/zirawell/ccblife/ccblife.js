/********************************
CCBLife Remove Ads - Version 1.0
Please note that you may need to reinstall app for script to work.

QuantumultX rewrite link:
https://raw.githubusercontent.com/zirawell/R-Store/main/Rule/QuanX/Adblock/App/J/建行生活/rewrite/ccblife.conf

********************************/

const url = $request.url;
if (!$response.body) $done({});
let body = $response.body;
let obj = JSON.parse(body);

const moduleKeys = [
  "TAG_AD_INFO",                  // 精选-右下角悬浮广告
  "NOTICE_AD_INFO",               // 精选-中间文字推荐
  "HPBANNER_AD_INFO_SECOND",      // 精选-精选推荐
  "LIFE_TOP_ROTATION_INFO_V3",    // 生活-上方轮播图
  "EDITOR_RECOMMEND2_AD",         // 生活-小编推荐
  "LIFE_V3_SCENE_AGGREGATION",    // 生活-分期·好生活
  "THROUGH_COLUMN_INFO",          // 金融-中间轮播图
  "MEBCT_AD_INFO",                // 我的-底部横幅广告
  "MYSELF_ENTRANCE_AD",           // 我的-财富会员入口
  
];



if (url.includes("A3341AB04")) {
  if (obj?.data?.ICON_SKIN_INFO) {
    delete obj.data.ICON_SKIN_INFO;
  }
} else if (url.includes("A3341AB03")) {
  if (obj?.data) {
    moduleKeys.forEach(key => {
      if (obj.data[key]) {
        delete obj.data[key];
      }
    });
  }
} else if (url.includes("A3341A120")) {
  if (obj?.data?.POP_AD_INFO) {
    delete obj.data.POP_AD_INFO;
  }
// 金融-热门资讯
} else if (url.includes("A3341A068")) {
  if (obj?.data?.data?.recList && obj.data.data.recList.length > 0) {
    delete obj.data.data.recList;
  }
}

body = JSON.stringify(obj);
$done({body});