/*
脚本名称：游戏数据修改
更新时间：2026-08-12
电报频道：https://t.me/GieGie777
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
^https?:\/\/javelin.mandrillvr.com\/api\/data\/get_game_data url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/bqwz.js

[mitm]
hostname = javelin.mandrillvr.com
*/

let body = $response.body;

// ==================== 基础资源修改 ====================
// 金币
body = body.replace(/\\"coin\\":\d+/g, '\\"coin\\":9999880');
// 钻石
body = body.replace(/\\"diamond\\":\d+/g, '\\"diamond\\":9999880');
// 经验
body = body.replace(/\\"exp\\":\d+/g, '\\"exp\\":9999880');
// 排位券
body = body.replace(/\\"rank_ticket\\":\d+/g, '\\"rank_ticket\\":666');
// PVE体力
body = body.replace(/\\"pve_power\\":\d+/g, '\\"pve_power\\":888');

// ==================== 英雄碎片全部改为999 ====================
// 您当前拥有的所有碎片ID（基于您提供的数据）
var fragmentIds = [
    '20002','20003','20006','20009','20011','20013','20015',
    '20016','20017','20018','20019','20020','20021','20022',
    '20026','20027','20028','20029','20030','20031','20032',
    '20034','20035','20036','20037','20038','20039','20041',
    '20043','20044','20045'
];

// 构建替换字符串
var fragStr = fragmentIds.map(function(id) {
    return '\\"' + id + '\\":999';
}).join(',');

// 执行替换
body = body.replace(/\\"hero_fragment\\":\{[^}]*\}/, '\\"hero_fragment\\":{' + fragStr + '}');

// ==================== 返回修改后的数据 ====================
$done({ body });