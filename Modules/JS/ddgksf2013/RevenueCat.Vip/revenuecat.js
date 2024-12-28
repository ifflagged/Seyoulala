/***********************************

> ScriptName        𝐑𝐞𝐯𝐞𝐧𝐮𝐞𝐂𝐚𝐭多合一脚本[墨鱼版]
> Author            @ddgksf2013
> ForHelp           若有屏蔽广告的需求，可公众号后台回复APP名称
> WechatID          墨鱼手记
> TgChannel         https://t.me/ddgksf2021
> Contribute        https://t.me/ddgksf2013_bot
> Feedback          📮 𝐝𝐝𝐠𝐤𝐬𝐟𝟐𝟎𝟏𝟑@𝟏𝟔𝟑.𝐜𝐨𝐦 📮
> UpdateTime        2024-07-10
> Suitable          自行观看“# > ”注释内容，解锁是暂时的，购买也不是永久的[订阅、跑路]
> Attention         📣个别失效的APP请相关需求者自行降级、或寻找替代品、或购买支持
> Attention         如需引用请注明出处，谢谢合作！
> ScriptURL         https://gist.githubusercontent.com/ddgksf2013/dbb1695cd96743eef18f3fac5c6fe227/raw/revenuecat.js


# ========解锁列表======== #
https://appraven.net/collection/77299969

[rewrite_local]

# ～ RevenueCat@ddgksf2013
^https:\/\/api\.(revenuecat|rc-backup)\.com\/.+\/(receipts$|subscribers\/[^/]+$) url script-response-body https://gist.githubusercontent.com/ddgksf2013/dbb1695cd96743eef18f3fac5c6fe227/raw/revenuecat.js
^https:\/\/api\.(revenuecat|rc-backup)\.com\/.+\/(receipts|subscribers) url script-request-header https://raw.githubusercontent.com/ddgksf2013/Scripts/master/deleteHeader.js

[mitm]

hostname=api.revenuecat.com, api.rc-backup.com

***********************************/




// ========= 动态ID ========= //
const mapping = {
  'Haushaltsbuch': ['full_access','com.fabian.hasse.haushaltsbuch.upgrade.combined'],
  '%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip+watch_vip'],
  'FinancialNote': ['category'],
  'QingLong': ['Premium'],
  'CircleTime/': ['Premium'],
  'ScreenRecordCase/': ['Premium'],
  'Chronicling/': ['Premium'],
  'Yosum/': ['Premium'],
  'Currency-Converter/': ['pro'],
  'Precious/': ['Pro'],
  'GBA/': ['xGBA.pro'],
  'mark_cup/': ['premiun'],
  'Photomator': ['pixelmator_photo_pro_access'],
  'StepUp/': ['premiun'],
  'SleepMaster/': ['premium','sm_14999_lifetime'],
  'Grain/': ['gold','lifetimeMembership'],
  'AudioPlayer': ['Pro'],
  'FoJiCam/': ['ProVersionLifeTime'],
  'pdfai_app/': ['premium'],
  'LUTCamera': ['ProVersion', 'com.uzero.funforcam.monthlysub'],
  'totowallet': ['all', 'com.ziheng.totowallet.yearly'],
  'Today%20App/': ['Premium', 'TodayApp_Lifetime'],
  'Aphrodite': ['all'],
  'timetrack.io': ['atimelogger-premium-plus'],
  'LiveWallpaper': ['Pro access'],
  'SharkSMS': ['VIP','com.lixkit.diary.permanent_68'],
  '%E7%BE%8E%E5%A6%86%E6%97%A5%E5%8E%86': ['Pro access'],
  'Aula/': ['Pro access'],
  'Project%20Delta/': ['rc_entitlement_obscura_ultra'],
  'apollo': ['all'],
  'Unfold': ['REDUCED_PRO_YEARLY','UNFOLD_PRO_YEARLY'],
  'LockFlow/': ['unlimited_access'],
  'iplayTV/': ['com.ll.btplayer.12'],
  'widget_art': ['all'],
  'OneBox': ['all'],
  'Taskbit/': ['Pro'],
  'Spark': ['premium'],
  'Medication%20List/': ['Premium'],
  'Pillow': ['premium'],
  'DecibelMeter/': ['Premium'],
  '1Blocker': ['premium'],
  'VSCO': ['membership'],
  'UTC': ['Entitlement.Pro'],
  '%E8%AC%8E%E5%BA%95%E9%BB%91%E8%86%A0': ['Entitlement.Pro'],
  '%E8%AC%8E%E5%BA%95%E6%99%82%E9%90%98': ['Entitlement.Pro'],
  'OffScreen': ['Entitlement.Pro'],
  'ScannerPro': ['plus'],
  'Duplete/': ['Pro'],
  'Ooga/': ['Ooga'],
  'WhiteCloud': ['allaccess','wc_pro_1y'],
  'HTTPBot': ['pro'],
  'audiomack': ['Premium1'],
  'server_bee': ['Pro'],
  'simple-': ['patron'],
  'streaks': ['patron'],
  'andyworks-calculator': ['patron'],
  'vibes': ['patron'],
  'CountDuck': ['premium', 'Lifetime'],
  'IPTVUltra': ['premium'],
  'Happy%3ADays': ['pro', 'happy_999_lifetime'],
  'PDF_convertor/': ['VIP', 'com.pdf.convertor.forever'],
  'ChatGPTApp': ['Advanced'],
  'APTV': ['pro'],
  'TouchRetouchBasic': ['premium'],
  'My%20Jump%20Lab': ['lifetime'],
  '%E7%9B%AE%E6%A0%87%E5%9C%B0%E5%9B%BE': ['pro'],
  'Paku': ['pro'],
  'Awesome%20Habits': ['premium'],
  'Gear': ['pro', 'com.gear.app.yearly'],
  'MoneyThings': ['Premium'],
  'Anybox': ['pro'],
  'Fileball': ['filebox_pro'],
  'Noto': ['pro'],
  'Grow': ['grow.pro', 'grow_lifetime'],
  'WidgetSmith': ['Premium'],
  'Percento': ['premium'],
  'Planny': ['premium'],
  'CPUMonitor': ['Pro'],
  'Locket': ['Gold'],
  'My%20Tim': ['Pro'],
  'Photom': ['premium', 'pixelmator_photo_pro_subscription_v1_pro_offer'],
  'mizframa': ['premium', 'mf_20_lifetime2'],
  'YzyFit/': ['pro', 'yzyfit_lft_v2'],
  'ImageX': ['imagex.pro.ios', 'imagex.pro.ios.lifetime'],
  'Fin': ['premium', 'com.circles.fin.premium.yearly'],
  'Ledger': ['Pro', 'com.lifetime.pro'],
  'One4Wall': ['lifetime', 'lifetime_key'],
  'PhotoMark/': ['Pro', 'com.photo.mark.forever'],
  'SimpleScan/': ['premium', 'com.atlantia.SimpleScan.Purchases.Lifetime'],
  'OneWidget': ['allaccess'],
  'CardPhoto': ['premium'],
  'ProCamera': ['pro_camera_up_entitlement','com.cocologics.ProCamera.Up.Yearly'],
  'Journal_iOS/': ['PRO'],
  'LemonKeepAccounts/': ['VIP','lm_1_1month'],
  'PDF%20Viewer': ['sub.pro'],
  'PhotoRoom': ['business'],
  'Decision': ['com.nixwang.decision.entitlements.pro'],
  'Tangerine': ['Premium'],
  'PastePal': ['premium'],
  'Fiery': ['premium'],
  'Airmail': ['Airmail Premium'],
  'Stress': ['StressWatch Pro'],
  'PinPaper': ['allaccess'],
  'Echo': ['PLUS'],
  'MyThings': ['pro','xyz.jiaolong.MyThings.pro.infinity'],
  'Overdue': ['Pro'],
  'BlackBox': ['plus','app.filmnoir.appstore.purchases.lifetime'],
  'Spektr': ['premium'],
  'MusicMate': ['premium','mm_lifetime_68_premium'],
  '%E4%BA%8B%E7%BA%BF': ['pro','xyz.jiaolong.eventline.pro.lifetime'],
  'Tasks': ['Pro'],
  'Currency': ['plus'],
  'money_manager': ['premium'],
  'fastdiet': ['premium'],
  'Blurer': ['paid_access'],
  'Everlog': ['premium'],
  'reader': ['vip2','com.valo.reader.vip2.year'],
  'GetFace': ['Pro access'],
  'intervalFlow': ['All Access','wodtimer_lf_free'],
  'Period%20Calendar': ['Premium','com.lbrc.PeriodCalendar.premium.yearly'],
  'Cookie': ['allaccess','app.ft.Bookkeeping.lifetime'],
  'ScientificCalculator': ['premium','com.simpleinnovation.calculator.ai.premium.yearly.base'],
  'MOZE': ['premium'],
  '1LemonKeepAccounts/': ['vip'],
  'To%20Me/': ['Premium'],
  '%E8%A8%80%E5%A4%96%E7%AD%86%E8%A8%98/': ['Premium'],
  'alcohol.tracker': ['pro','drinklog_lifetime'],
  'DayPoem': ['Pro Lifetime'],
  'Budget%20Flow': ['full_access','com.fabian.hasse.haushaltsbuch.upgrade.combined'],
  'G%20E%20I%20S%20T': ['memorado_premium'],
  'multitimer_app': ['premium','timus_lt'],
  'Darkroom': ['co.bergen.Darkroom.entitlement.allToolsAndFilters'],
  'tiimo': ['full_access'],
  'FaceMa/': ['Pro access'],
  'Record2Text/': ['Pro access'],
  'jinduoduo_calculator': ['jinduoduoapp','mobile_vip'],
  'Focused%20Work': ['Pro'],
  'GoToSleep': ['Pro'],
  'kegel': ['kegel_pro'],
  'Ochi': ['Pro'],
  'Pomodoro': ['Plus','com.MINE.PomodoroTimer.plus.yearly'],
  'universal/': ['Premium','remotetv.yearly.07'],
  'ShellBean/': ['pro','com.ningle.shellbean.subscription.year'],
  'AI%20Art%20Generator/': ['Unlimited Access'],
  'Email%20Me': ['premium'],
  'GoodThing/': ['pro','goodhappens_basic_year'],
  'Reels%20Editor': ['Unlimited Access'],
  'com.dison.diary': ['vip'],
  'iRead': ['vip'],
  'jizhi': ['jizhi_vip'],
  'card/': ['vip'],
  'EraseIt/': ['ProVersionLifeTime'],
  'Alpenglow': ['newPro'],
  'MindBreathYoga/': ['lifetimeusa'],
  'MetadataEditor': ['unlimited_access'],
  '%E6%9F%A5%E5%A6%86%E5%A6%86': ['Pro access'],
  '%E5%85%83%E6%B0%94%E8%AE%A1%E6%97%B6': ['plus'],
  'WidgetCat': ['MiaoWidgetPro'],
  'Emphasis/': ['premium'],
  'FormScanner/': ['Pro','formscanner_lifetime'],
  'streamer/': ['Premium'],
  'NeatNook/': ['com.neatnook.pro','com.neatnook.pro.forever'],
  'Blackout/': ['premium','blackout_299_lt'],
  'Budgetify/': ['premium','budgetify_3999_lt'],
  'Dedupe/': ['Pro','com.curiouscreatorsco.Dedupe.pro.lifetime.notrial.39_99'],
  'Wozi': ['wozi_pro_2023']
};

// =========    固定部分  ========= // 
// =========  @ddgksf2021 ========= // 
var _0xodY='jsjiami.com.v7';function _0x4028(_0x1b7cac,_0x4ef120){var _0x5e7b79=_0x5e7b();return _0x4028=function(_0x4028b1,_0x53b06){_0x4028b1=_0x4028b1-0xe8;var _0x2ad3b7=_0x5e7b79[_0x4028b1];if(_0x4028['MTPGDl']===undefined){var _0x597471=function(_0x39721f){var _0x63832a='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x1f0ee8='',_0x1287fc='';for(var _0x140ed2=0x0,_0x1eeb7f,_0x4d1652,_0x588da9=0x0;_0x4d1652=_0x39721f['charAt'](_0x588da9++);~_0x4d1652&&(_0x1eeb7f=_0x140ed2%0x4?_0x1eeb7f*0x40+_0x4d1652:_0x4d1652,_0x140ed2++%0x4)?_0x1f0ee8+=String['fromCharCode'](0xff&_0x1eeb7f>>(-0x2*_0x140ed2&0x6)):0x0){_0x4d1652=_0x63832a['indexOf'](_0x4d1652);}for(var _0x1a36b3=0x0,_0x5696e8=_0x1f0ee8['length'];_0x1a36b3<_0x5696e8;_0x1a36b3++){_0x1287fc+='%'+('00'+_0x1f0ee8['charCodeAt'](_0x1a36b3)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x1287fc);};var _0x24248a=function(_0x39199a,_0xa7492e){var _0x146c4a=[],_0x5ab4c6=0x0,_0x2be449,_0x19c978='';_0x39199a=_0x597471(_0x39199a);var _0x33b88e;for(_0x33b88e=0x0;_0x33b88e<0x100;_0x33b88e++){_0x146c4a[_0x33b88e]=_0x33b88e;}for(_0x33b88e=0x0;_0x33b88e<0x100;_0x33b88e++){_0x5ab4c6=(_0x5ab4c6+_0x146c4a[_0x33b88e]+_0xa7492e['charCodeAt'](_0x33b88e%_0xa7492e['length']))%0x100,_0x2be449=_0x146c4a[_0x33b88e],_0x146c4a[_0x33b88e]=_0x146c4a[_0x5ab4c6],_0x146c4a[_0x5ab4c6]=_0x2be449;}_0x33b88e=0x0,_0x5ab4c6=0x0;for(var _0x426eac=0x0;_0x426eac<_0x39199a['length'];_0x426eac++){_0x33b88e=(_0x33b88e+0x1)%0x100,_0x5ab4c6=(_0x5ab4c6+_0x146c4a[_0x33b88e])%0x100,_0x2be449=_0x146c4a[_0x33b88e],_0x146c4a[_0x33b88e]=_0x146c4a[_0x5ab4c6],_0x146c4a[_0x5ab4c6]=_0x2be449,_0x19c978+=String['fromCharCode'](_0x39199a['charCodeAt'](_0x426eac)^_0x146c4a[(_0x146c4a[_0x33b88e]+_0x146c4a[_0x5ab4c6])%0x100]);}return _0x19c978;};_0x4028['EjzuJS']=_0x24248a,_0x1b7cac=arguments,_0x4028['MTPGDl']=!![];}var _0x48e5e7=_0x5e7b79[0x0],_0x491486=_0x4028b1+_0x48e5e7,_0x2ddd5b=_0x1b7cac[_0x491486];return!_0x2ddd5b?(_0x4028['HyKquH']===undefined&&(_0x4028['HyKquH']=!![]),_0x2ad3b7=_0x4028['EjzuJS'](_0x2ad3b7,_0x53b06),_0x1b7cac[_0x491486]=_0x2ad3b7):_0x2ad3b7=_0x2ddd5b,_0x2ad3b7;},_0x4028(_0x1b7cac,_0x4ef120);}function _0x5e7b(){var _0xd0ce0f=(function(){return[_0xodY,'JFnWjhWsNjtiKUamiA.WcoqAm.fDpvlB7NGQHbEg==','pSk+WQnIAxa','WR3dJrRcOeJdGmojWPmsWO4','w8oiW4/dLSknjetdKuu','e8ohwdhdGM/cVLCokG','W7VdQshcU0ZdV8od','WR5zv1msWR4TWPqXxSkfEei','grr6ysJdQmkb','WOldR8kHWQRdV8kNWQLWCSogoqVcQG','WOVcNIH+CMhcO0ZdISodAComW6y','xdFcMXW','W7ZcIeRdOqBcGSkzW5XhW4tcPCkvwbi4WR0aWRWdsa','W4q6WP9YWRDKW7e','s8o7zmo9DSoZwHrcW7tdKCo4W71CFv3cV2m','ta5CDa'].concat((function(){return['WO/cKcmooctdTg7dNa','WRldUmozW6xcI8o+sWzY','seFcSmomDfZcNIS3WO8','nCobxZdcJfZcSfafla','gL9a','FKVdMSkYWQaqWOhdVmou','e8k/W6r3w1SFvCouWRbkkuC','W6ZdRGddJHHXfSkxhqa+W7BcKG','EXTRWR4cbSkpW71M','nSo+WPddSb5ri8kFmSo/WOX6','WPuRW7yDW6a','DtZcHtq','BX0ggZFcS8kYaXpcVZLv','W4rOWRaQW6/dHGhcHColWQtdJSkOzG','iwtdNwmhcrtdPIJcJmoQWP8','kWJcMCoBWRetWR/dGmoIWRO'].concat((function(){return['uGP+WR8jamkv','5OcW5zAW5l2q5OQ75yIY5yEh5PAX5OYE772755EG5Ao86Bgt5yQO5lQ277+46k+m5yIl5zwe5y2Y5OMK5yMN5lQA5lIe5lIe77+7','f8k8W7a2WP8yW5dcU8kuzJCi','WOJcLIn7zMlcQa/cQCk9vmkXWRZcLCocW7xdTCkJW60E','W7pcUmkyW67cVCo1EJPg','5PcF5lYN5OMU5yUQ8konTpcNVRhXHP+hmmohbKvfwSk3W4ioumo044oy6iE855w65z+dWQb9WPXkW5pcH8oxWQe+WPanWPOpW4SIWPVcPWpdHmourCoKW4FdK1u','W7WSa8oSswFcHaldVmosg3bxWQNcHCkPWQddMeZdQcVdNLtcNdhdNYtdQCoR','smo8ACoQymoIrZTFW7NdM8o4W7O','srP9WQGpamkpW7bTwG','jCkfWQddMCkpevjLAmoSv3r9W5ZdICovn3jaW4O','cGxdOSklib3dHqyfWPTkqCkj','gLiloX7dVCk0WPVcGSkr','CSoBW63cICowtauLpmk6DZC','W5D+WRCmW53cSCopWOJcSG','v8kkddddHeFcUwCs'];}()));}()));}());_0x5e7b=function(){return _0xd0ce0f;};return _0x5e7b();};var _0x127c15=_0x4028;(function(_0x4bc7f9,_0x29fead,_0x4431c2,_0x2edd29,_0x494ec4,_0x5df07e,_0x15abd2){return _0x4bc7f9=_0x4bc7f9>>0x2,_0x5df07e='hs',_0x15abd2='hs',function(_0x530286,_0x10bdbb,_0x5bcb7f,_0x4a0b6b,_0x4ebcb0){var _0x350f45=_0x4028;_0x4a0b6b='tfi',_0x5df07e=_0x4a0b6b+_0x5df07e,_0x4ebcb0='up',_0x15abd2+=_0x4ebcb0,_0x5df07e=_0x5bcb7f(_0x5df07e),_0x15abd2=_0x5bcb7f(_0x15abd2),_0x5bcb7f=0x0;var _0x48342c=_0x530286();while(!![]&&--_0x2edd29+_0x10bdbb){try{_0x4a0b6b=parseInt(_0x350f45(0xef,'@HSl'))/0x1+parseInt(_0x350f45(0x10e,'B!JC'))/0x2*(parseInt(_0x350f45(0xff,')X!W'))/0x3)+-parseInt(_0x350f45(0xee,'V0AN'))/0x4*(parseInt(_0x350f45(0x104,'DGxb'))/0x5)+-parseInt(_0x350f45(0x108,'B!JC'))/0x6*(-parseInt(_0x350f45(0x106,'V9kX'))/0x7)+parseInt(_0x350f45(0xfc,'V9kX'))/0x8*(parseInt(_0x350f45(0xfe,'wu4L'))/0x9)+parseInt(_0x350f45(0xe8,'wOec'))/0xa+-parseInt(_0x350f45(0x107,'heuF'))/0xb;}catch(_0x5ceb20){_0x4a0b6b=_0x5bcb7f;}finally{_0x4ebcb0=_0x48342c[_0x5df07e]();if(_0x4bc7f9<=_0x2edd29)_0x5bcb7f?_0x494ec4?_0x4a0b6b=_0x4ebcb0:_0x494ec4=_0x4ebcb0:_0x5bcb7f=_0x4ebcb0;else{if(_0x5bcb7f==_0x494ec4['replace'](/[NhfKqBWQEDnGbtUAFpJlgH=]/g,'')){if(_0x4a0b6b===_0x10bdbb){_0x48342c['un'+_0x5df07e](_0x4ebcb0);break;}_0x48342c[_0x15abd2](_0x4ebcb0);}}}}}(_0x4431c2,_0x29fead,function(_0x531647,_0x12563d,_0x1e9799,_0x4e5c9b,_0x48407f,_0x49779f,_0x160f02){return _0x12563d='\x73\x70\x6c\x69\x74',_0x531647=arguments[0x0],_0x531647=_0x531647[_0x12563d](''),_0x1e9799='\x72\x65\x76\x65\x72\x73\x65',_0x531647=_0x531647[_0x1e9799]('\x76'),_0x4e5c9b='\x6a\x6f\x69\x6e',(0x192055,_0x531647[_0x4e5c9b](''));});}(0x308,0x7d6d7,_0x5e7b,0xc4),_0x5e7b)&&(_0xodY=_0x5e7b);var ua=$request[_0x127c15(0xf1,'0b(q')][_0x127c15(0x111,')X!W')]||$request['headers']['user-agent'],obj=JSON[_0x127c15(0xeb,'wu4L')]($response[_0x127c15(0x10d,'V9kX')]);obj[_0x127c15(0xe9,'0b(q')]=_0x127c15(0xf2,'BmJH');var ddgksf2013={'is_sandbox':![],'ownership_type':'PURCHASED','billing_issues_detected_at':null,'period_type':_0x127c15(0x100,'oHVs'),'expires_date':_0x127c15(0xfa,'#)Ko'),'grace_period_expires_date':null,'unsubscribe_detected_at':null,'original_purchase_date':_0x127c15(0x10a,'DGxb'),'purchase_date':'2022-09-08T01:04:17Z','store':_0x127c15(0x113,'627Y')},ddgksf2021={'grace_period_expires_date':null,'purchase_date':_0x127c15(0xf4,'B!JC'),'product_identifier':'com.ddgksf2013.premium.yearly','expires_date':'2099-12-18T01:04:17Z'};const match=Object[_0x127c15(0x109,'O2qz')](mapping)[_0x127c15(0xec,'@HSl')](_0x32497e=>ua['includes'](_0x32497e));if(match){const [key,product_id]=mapping[match];product_id?(ddgksf2021[_0x127c15(0x10c,'rmzc')]=product_id,obj['subscriber'][_0x127c15(0x105,'#KD[')][product_id]=ddgksf2013):obj['subscriber'][_0x127c15(0xf8,'rmzc')]['com.ddgksf2013.premium.yearly']=ddgksf2013,obj[_0x127c15(0x103,')X!W')][_0x127c15(0xfd,'#)Ko')]={},obj[_0x127c15(0xf9,'0b(q')][_0x127c15(0xea,'$KRK')][key]=ddgksf2021;}else obj[_0x127c15(0x101,'DGxb')]['subscriptions'][_0x127c15(0xf7,'3N1A')]=ddgksf2013,obj[_0x127c15(0x110,'xSSl')][_0x127c15(0xf3,'TC(s')][_0x127c15(0x112,'8]JA')]=ddgksf2021;console['log'](_0x127c15(0xf6,'RVrN')),$done({'body':JSON[_0x127c15(0x10f,'2qRE')](obj)});var version_ = 'jsjiami.com.v7';