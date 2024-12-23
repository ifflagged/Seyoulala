/***********************************

> ScriptName        𝐑𝐞𝐯𝐞𝐧𝐮𝐞𝐂𝐚𝐭多合一脚本[墨鱼版]
> Author            @ddgksf2013
> ForHelp           若有屏蔽广告的需求，可公众号后台回复APP名称
> WechatID          墨鱼手记
> TgChannel         https://t.me/ddgksf2021
> Contribute        https://t.me/ddgksf2013_bot
> Feedback          📮 𝐝𝐝𝐠𝐤𝐬𝐟𝟐𝟎𝟏𝟑@𝟏𝟔𝟑.𝐜𝐨𝐦 📮
> UpdateTime        2024-07-09
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
  'Unfold/': ['PRO'],
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
var _0xodC='jsjiami.com.v7';function _0x5958(_0x1fd4e1,_0x57de03){var _0x1c4cf7=_0x1c4c();return _0x5958=function(_0x5958f0,_0x44edd7){_0x5958f0=_0x5958f0-0x180;var _0x4171d1=_0x1c4cf7[_0x5958f0];if(_0x5958['fbheRj']===undefined){var _0x54fb59=function(_0x86837b){var _0x52a903='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x4db122='',_0x4dd0f4='';for(var _0x48fe76=0x0,_0x1a7c3d,_0x3255ef,_0x552d20=0x0;_0x3255ef=_0x86837b['charAt'](_0x552d20++);~_0x3255ef&&(_0x1a7c3d=_0x48fe76%0x4?_0x1a7c3d*0x40+_0x3255ef:_0x3255ef,_0x48fe76++%0x4)?_0x4db122+=String['fromCharCode'](0xff&_0x1a7c3d>>(-0x2*_0x48fe76&0x6)):0x0){_0x3255ef=_0x52a903['indexOf'](_0x3255ef);}for(var _0x4a7544=0x0,_0x431c82=_0x4db122['length'];_0x4a7544<_0x431c82;_0x4a7544++){_0x4dd0f4+='%'+('00'+_0x4db122['charCodeAt'](_0x4a7544)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x4dd0f4);};var _0x25444a=function(_0x35b1f2,_0x4f31a5){var _0x224492=[],_0x8a0b35=0x0,_0x18d2de,_0x1490af='';_0x35b1f2=_0x54fb59(_0x35b1f2);var _0x1d7443;for(_0x1d7443=0x0;_0x1d7443<0x100;_0x1d7443++){_0x224492[_0x1d7443]=_0x1d7443;}for(_0x1d7443=0x0;_0x1d7443<0x100;_0x1d7443++){_0x8a0b35=(_0x8a0b35+_0x224492[_0x1d7443]+_0x4f31a5['charCodeAt'](_0x1d7443%_0x4f31a5['length']))%0x100,_0x18d2de=_0x224492[_0x1d7443],_0x224492[_0x1d7443]=_0x224492[_0x8a0b35],_0x224492[_0x8a0b35]=_0x18d2de;}_0x1d7443=0x0,_0x8a0b35=0x0;for(var _0x3736ca=0x0;_0x3736ca<_0x35b1f2['length'];_0x3736ca++){_0x1d7443=(_0x1d7443+0x1)%0x100,_0x8a0b35=(_0x8a0b35+_0x224492[_0x1d7443])%0x100,_0x18d2de=_0x224492[_0x1d7443],_0x224492[_0x1d7443]=_0x224492[_0x8a0b35],_0x224492[_0x8a0b35]=_0x18d2de,_0x1490af+=String['fromCharCode'](_0x35b1f2['charCodeAt'](_0x3736ca)^_0x224492[(_0x224492[_0x1d7443]+_0x224492[_0x8a0b35])%0x100]);}return _0x1490af;};_0x5958['JZIGVj']=_0x25444a,_0x1fd4e1=arguments,_0x5958['fbheRj']=!![];}var _0x2d0b3e=_0x1c4cf7[0x0],_0x363d36=_0x5958f0+_0x2d0b3e,_0x2e94f1=_0x1fd4e1[_0x363d36];return!_0x2e94f1?(_0x5958['VQnoyN']===undefined&&(_0x5958['VQnoyN']=!![]),_0x4171d1=_0x5958['JZIGVj'](_0x4171d1,_0x44edd7),_0x1fd4e1[_0x363d36]=_0x4171d1):_0x4171d1=_0x2e94f1,_0x4171d1;},_0x5958(_0x1fd4e1,_0x57de03);}var _0x3b4eb7=_0x5958;(function(_0x13803c,_0x4edb75,_0xcd65bf,_0x129049,_0x36a9db,_0x1437e6,_0x180900){return _0x13803c=_0x13803c>>0x2,_0x1437e6='hs',_0x180900='hs',function(_0x45a853,_0x1791e5,_0x56c1f0,_0x214297,_0x57429c){var _0x4b3b53=_0x5958;_0x214297='tfi',_0x1437e6=_0x214297+_0x1437e6,_0x57429c='up',_0x180900+=_0x57429c,_0x1437e6=_0x56c1f0(_0x1437e6),_0x180900=_0x56c1f0(_0x180900),_0x56c1f0=0x0;var _0x308665=_0x45a853();while(!![]&&--_0x129049+_0x1791e5){try{_0x214297=-parseInt(_0x4b3b53(0x19f,'yA4$'))/0x1*(-parseInt(_0x4b3b53(0x190,'yA4$'))/0x2)+-parseInt(_0x4b3b53(0x180,'q9uZ'))/0x3+-parseInt(_0x4b3b53(0x18a,'V(y]'))/0x4*(-parseInt(_0x4b3b53(0x195,'M15D'))/0x5)+-parseInt(_0x4b3b53(0x1a3,'WJfV'))/0x6+-parseInt(_0x4b3b53(0x191,'!^eg'))/0x7*(-parseInt(_0x4b3b53(0x18f,'8!p!'))/0x8)+-parseInt(_0x4b3b53(0x18b,'[K)s'))/0x9*(parseInt(_0x4b3b53(0x193,'u8!Z'))/0xa)+parseInt(_0x4b3b53(0x1a7,'CC@h'))/0xb;}catch(_0x279905){_0x214297=_0x56c1f0;}finally{_0x57429c=_0x308665[_0x1437e6]();if(_0x13803c<=_0x129049)_0x56c1f0?_0x36a9db?_0x214297=_0x57429c:_0x36a9db=_0x57429c:_0x56c1f0=_0x57429c;else{if(_0x56c1f0==_0x36a9db['replace'](/[BUdfxETCQSGelXHkJLng=]/g,'')){if(_0x214297===_0x1791e5){_0x308665['un'+_0x1437e6](_0x57429c);break;}_0x308665[_0x180900](_0x57429c);}}}}}(_0xcd65bf,_0x4edb75,function(_0x1a949c,_0x358931,_0x48a48d,_0x4277f0,_0x3bb3af,_0x30cfa7,_0x3ab497){return _0x358931='\x73\x70\x6c\x69\x74',_0x1a949c=arguments[0x0],_0x1a949c=_0x1a949c[_0x358931](''),_0x48a48d='\x72\x65\x76\x65\x72\x73\x65',_0x1a949c=_0x1a949c[_0x48a48d]('\x76'),_0x4277f0='\x6a\x6f\x69\x6e',(0x18e5d1,_0x1a949c[_0x4277f0](''));});}(0x2f0,0x2b0de,_0x1c4c,0xbe),_0x1c4c)&&(_0xodC=_0x1c4c);var ua=$request[_0x3b4eb7(0x184,'CC@h')][_0x3b4eb7(0x1a9,'X$qY')]||$request['headers'][_0x3b4eb7(0x1a1,'u8!Z')],obj=JSON[_0x3b4eb7(0x1ad,'8!p!')]($response['body']);obj['Attention']=_0x3b4eb7(0x18d,'yA4$');var ddgksf2013={'is_sandbox':!0x1,'ownership_type':_0x3b4eb7(0x188,'ipop'),'billing_issues_detected_at':null,'period_type':_0x3b4eb7(0x19e,'IF6&'),'expires_date':'2099-12-18T01:04:17Z','grace_period_expires_date':null,'unsubscribe_detected_at':null,'original_purchase_date':_0x3b4eb7(0x199,'NKP4'),'purchase_date':_0x3b4eb7(0x196,'[ahF'),'store':'app_store'},ddgksf2021={'grace_period_expires_date':null,'purchase_date':_0x3b4eb7(0x186,'8!p!'),'product_identifier':_0x3b4eb7(0x1ac,'v%4z'),'expires_date':_0x3b4eb7(0x1a6,'KpZc')};const match=Object[_0x3b4eb7(0x18c,'!^eg')](mapping)[_0x3b4eb7(0x194,'&AwW')](_0x9cca91=>ua['includes'](_0x9cca91));function _0x1c4c(){var _0x29f2be=(function(){return[_0xodC,'UjfQseEjHdxiBnamJTnil.cgSXomLx.EkSvfLG7C==','W6RdJSkYa8kti8kxs8kiBw0','DxRdUCkhhCkkW6hdOSksW5a','WO7cGCkVFcWQWRBdPSo1Da','WRuWl8odp8oiy0u/ruJcTmoO','u3ZcNSo1W6JcUX7dH0XxB8kbvJ09ocS4W5mDWQFdImofW7zeW6lcPG8w','W5FcPWTgcG','A8o5tCoZoWTGx1DfW64O','WR5BWPy','W7PKg3vpW5lcL8kjWPH7W63dGGFcO1zIt0alCSoEymonmHhcUmkoqCkg','W7hdRSkwyuTaWQFdGSolW5ZdPLe','m1ldISkDkSkCW5G','s8k4Der9WRa4WO0RkSkXW6W','WPxdTKShqMZcLZpcS8kWWOpcOSoDW4SUW5BdSmkGjmot','j8otW5G','BmkZWO5mWQddR1DLW6S'].concat((function(){return['W5pcGComfb3dU8o7W7Sdt8kwW5S','W7pdJCkwW5ZdHZPetsLm','jdb0fCoWfmkyr8orWOldUG','tCo/mmo1','5OoJ5zEk5lY55OIq5yMf5yAJ5PwR5O+z772e55sE5Acs6Bkx5yQM5lUm772R6kYR5yMY5zAo5y2B5OIV5yIi5lMT5lQZ5lMh772+','WOWAW5eZwxuDWR3dVmoaWRXnsa','WPBdVKacxwNcMf/dJmosWRRdKCkQ','WR1Iymk0rCkNwSo4bKVdOW','eCoBaCovW6NdRG8','dNCTwXldRmojW5lcGmoAW4WctW','gINdI1zuWQddS3RcHq','luSIAq','W6mcW4NdHeJdT8k4vComBq','W6KIWRzCz8kVW6qOgKFcOd4fW4RcJJaMWOxcQCko','vCoVk8o1W6ddQH/cMNlcHq','W6fMySkDECkrmgKvCvhcHa','ECodWPJcIaS3W7bRxmk1dmoWxCkIWO3cTaK0W7Tz'].concat((function(){return['ihddI2ddR8kRWORdLrVcStZdM2hcN8oIaCoSW5O','W70Jo8oWfSksCSohmuBdLCkfW5m','W7FdPmkvAu85WQ3dLCoSW7xdNW','W70Jo8oWfSksCSovif0','W4aoCmo+xSku','WR9UomoolmkIAmo4','W67cU8odz8ojeSkV','w2NcNKiEWRFdNvNcJmoZ','WQhdM8oSts3dQxThWP0KW77dSmkSWPfWWO/dMmkMC8kYWQa5kfBdPCkvWQXYWRi','W45wWOf0cZmyWQJdHCo5WPHr','WPBdVHH4nH7dNve','5Pgj5l2u5OIg5yMR8jYDTpcQNO3WO46wl8k0W5SHzmoHWQGQW4Syz+ocRoIfSEEuH+wCVSo/W75qWOFcKSk/W6tdU8kCghlcNHhcMvimW6j0zqeWgSo/W7RcLq','rwFdSH/dNW8uD1tcImokWOeDW54jWPldTXdcHCkl','AqtcMmoaF8oAW5hdLSkncmkxW5m'];}()));}()));}());_0x1c4c=function(){return _0x29f2be;};return _0x1c4c();};if(match){let [e,s]=mapping[match];s?(ddgksf2021[_0x3b4eb7(0x19a,'G1D7')]=s,obj[_0x3b4eb7(0x1aa,'C[ND')][_0x3b4eb7(0x18e,'WJfV')][s]=ddgksf2013):obj[_0x3b4eb7(0x19d,'yA4$')][_0x3b4eb7(0x192,'eoNv')][_0x3b4eb7(0x182,'%cWV')]=ddgksf2013,obj[_0x3b4eb7(0x197,'!^eg')][_0x3b4eb7(0x198,'*1RJ')][e]=ddgksf2021;}else obj['subscriber'][_0x3b4eb7(0x19b,'yA4$')][_0x3b4eb7(0x1a2,'Re$D')]=ddgksf2013,obj['subscriber'][_0x3b4eb7(0x189,'yUse')][_0x3b4eb7(0x187,'RBY@')]=ddgksf2021,console[_0x3b4eb7(0x181,'M15D')](_0x3b4eb7(0x1a5,'*1RJ'));$done({'body':JSON['stringify'](obj)});var version_ = 'jsjiami.com.v7';