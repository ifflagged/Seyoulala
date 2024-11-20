/*
QX：
[rewrite_local]
^https:\/\/api\.rr\.tv\/user\/profile* url script-response-body https://raw.githubusercontent.com/byour13/Script/main/rrtvvip.js

QX 
[MITM]
hostname = api.rr.tv
by byour13
*/

var obj = JSON.parse($response.body);
obj = {
  "requestId": "24786e8f1fb44d75b982f73532e00000",
  "code": "0000",
  "msg": "Success",
  "recordsTotal": null,
  "data": {
    "commentUser": false,
    "user": {
      "id": 180760000,
      "headImgUrl": "",
      "isConfirmed": false,
      "roleInfo": "normal",
      "level": 9999,
      "levelStr": "yyds",
      "sex": 0,
      "confirmInfo": "",
      "replyCount": 0,
      "articleCount": 0,
      "favoriteCount": 0,
      "silverCount": 10,
      "achievementCount": 0,
      "hasSignIn": false,
      "sign": "",
      "birthday": "2000-01-01",
      "city": "",
      "loginFrom": null,
      "token": null,
      "mobile": "5794620000",
      "nickName": "yyds",
      "isSilence": false,
      "silenceMsg": "",
      "isBlack": false,
      "score": 1614,
      "continuousDay": 0,
      "fansCount": 0,
      "focusUserCount": 0,
      "seriesCount": 0,
      "actorCount": 0,
      "focus": false,
      "wmSign": null,
      "medalList": [{
        "name": "yyds",
        "endTime": "9999-06-08 15:17:08",
        "imgUrl": "http://img.rr.tv/cover/20200424/o_1587720799676.png",
        "id": 1
      }],
      "privilegeList": [{
        "id": null,
        "createTimeStr": "",
        "createTime": null,
        "updateTime": null,
        "effectObject": "video",
        "action": "play",
        "function": "originalPainting",
        "func": "originalPainting",
        "description": "解锁原画",
        "icon": "jiesuoyuanhua",
        "endTime": 3675562920000
      }, {
        "id": null,
        "createTimeStr": "",
        "createTime": null,
        "updateTime": null,
        "effectObject": "mall",
        "action": "sale",
        "function": "mallDiscount",
        "func": "mallDiscount",
        "description": "龙醇商城九折",
        "icon": "longchunshangcheng",
        "endTime": 3675562920000
      }, {
        "id": null,
        "createTimeStr": "",
        "createTime": null,
        "updateTime": null,
        "effectObject": "article",
        "action": "write",
        "function": "highLight",
        "func": "highLight",
        "description": "高亮发帖",
        "icon": "gaoliangfatie",
        "endTime": 3675562920000
      }, {
        "id": null,
        "createTimeStr": "",
        "createTime": null,
        "updateTime": null,
        "effectObject": "nickName",
        "action": "show",
        "function": "nameHighLight",
        "func": "nameHighLight",
        "description": "高亮昵称",
        "icon": "gaoliangnicheng",
        "endTime": 3675562920000
      }, {
        "id": null,
        "createTimeStr": "",
        "createTime": null,
        "updateTime": null,
        "effectObject": "comment",
        "action": "write",
        "function": "highLight",
        "func": "highLight",
        "description": "高亮评论回复",
        "icon": "huifu",
        "endTime": 3675562920000
      }, {
        "id": null,
        "createTimeStr": "",
        "createTime": null,
        "updateTime": null,
        "effectObject": "danmu",
        "action": "send",
        "function": "superBarrageBlue",
        "func": "superBarrageBlue",
        "description": "超级弹幕",
        "icon": "chaojidanmu",
        "endTime": 3675562920000
      }, {
        "id": null,
        "createTimeStr": "",
        "createTime": null,
        "updateTime": null,
        "effectObject": "growth",
        "action": "play",
        "function": "0.15",
        "func": "0.15",
        "description": "看剧经验+15%",
        "icon": "jingyanzhijiacheng",
        "endTime": 3675562920000
      }, {
        "id": null,
        "createTimeStr": "",
        "createTime": null,
        "updateTime": null,
        "effectObject": "video",
        "action": "play",
        "function": "vipVideo",
        "func": "vipVideo",
        "description": "勋章专享剧集",
        "icon": "zhuanxiangjuji",
        "endTime": 3675562920000
      }, {
        "id": null,
        "createTimeStr": "",
        "createTime": null,
        "updateTime": null,
        "effectObject": "growth",
        "action": "play",
        "function": "0.4",
        "func": "0.4",
        "description": "看剧经验+40%",
        "icon": "jingyanzhijiacheng",
        "endTime": 3675562920000
      }, {
        "id": null,
        "createTimeStr": "",
        "createTime": null,
        "updateTime": null,
        "effectObject": "video",
        "action": "play",
        "function": "noLimit",
        "func": "noLimit",
        "description": "看剧无限制",
        "icon": "kanjuwuxianzhi",
        "endTime": 3675562920000
      }, {
        "id": null,
        "createTimeStr": "",
        "createTime": null,
        "updateTime": null,
        "effectObject": "video",
        "action": "play",
        "function": "noAd",
        "func": "noAd",
        "description": "看剧无广告",
        "icon": "kanjuwuguanggao",
        "endTime": 3675562920000
      }],
      "createTime": 1620544566000,
      "newUser": false,
      "certLabel": null,
      "certNote": null,
      "vipMedal": {
        "name": "yyds",
        "endTime": "9999-06-08 15:17:08",
        "imgUrl": "http://img.rr.tv/cover/20200424/o_1587720799676.png",
        "id": 1,
        "isExpired": false
      }
    }
  }
};

$done({body: JSON.stringify(obj)});
