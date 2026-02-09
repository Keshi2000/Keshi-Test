/*
 * 闪连无限流量 (负数版) - Loon 专用
 */
let url = $request.url;
let header = $request.headers;

// 1. 请求阶段：修改 deviceid 骗取新用户 5G 权限
if (header['deviceid']) {
    let randomID = "Loon_" + Math.random().toString(36).substring(2, 10).toUpperCase();
    header['deviceid'] = randomID;
}

// 2. 响应阶段：修改数据实现“负数无限”显示
if ($response && $response.body) {
    let obj = JSON.parse($response.body);
    if (obj.data) {
        obj.data.quotaMax = "0"; // 设为 0 触发 App 负数计算逻辑
        obj.data.quotaConsumed = "0";
        obj.data.userType = "1"; // 显示为 VIP
        obj.data.deadline = "2099-12-31 23:59:59";
    }
    $done({ headers: header, body: JSON.stringify(obj) });
} else {
    $done({ headers: header });
}
