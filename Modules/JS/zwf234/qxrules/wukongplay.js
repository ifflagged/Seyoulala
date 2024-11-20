/*
QX：
[rewrite_local]
^http:\/\/iosv2\.cjapi\.papa21\.com\/user\/ios_store_pay_edition\/members_login\/check_members_identity_v2 url script-response-body https://raw.githubusercontent.com/byour13/Script/main/wukongplay.js

[MITM]
hostname = iosv2.cjapi.papa21.com
by byour13
*/

var obj = JSON.parse($response.body);
obj = {
  "error": 0,
  "data": {
    "error_msg": "",
    "is_success": true,
    "user_info": {
      "is_vip": "9A0684792021D73BE42B71491469ADFA",
      "clean_id": "39E71CC1F4A8F59725C62BE3AAAD424E",
      "play_token": "F0ED6D6872782A1B0A67BBD1C3257C1618919DB32B116CF8F06D8E68815ED4A043AE5F26DE7B7F50872055FD71DD5635B07CC3EB0EEC3395553BE79B824CDCA3",
      "is_expired": 0,
      "expired_time": 1800000000
    },
    "error_code": "",
    "data_info": []
  }
};

$done({body: JSON.stringify(obj)});
