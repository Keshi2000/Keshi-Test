/*
* 修改响应体中的流量数据
*/
let body = $response.body;
try {
    let obj = JSON.parse(body);
    if (obj.data) {
        // 将已用流量设为 0
        obj.data.quotaConsumed = "0";
        // 将总流量设为 1024GB (单位可能是字节)
        obj.data.quotaMax = "1099511627776";
        // 修改过期状态和时间
        obj.data.expired = false;
        obj.data.deadline = "2099-12-31 23:59:59";
        obj.data.isoDeadline = "2099-12-31T23:59:59.000+08:00";
    }
    $done({ body: JSON.stringify(obj) });
} catch (e) {
    $done({ body }); // 出错则返回原样，防止 App 崩溃
}
