/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
//注：github action用户cookie填写到Settings-Secrets里面，新增JD_COOKIE，多个账号的cookie使用`&`隔开或者换行
let CookieJDs = [
  'pin=sunjiayao111;wskey=AAJgc7nLAEDdx3w3EE3mHgKHNzWU6fu-ySvub2Ow1dcSbA0JIjLer3MpYJPTn7wCZJWLLp1XB15v0vLgeA55_5Ckw4DOc1Gj;whwswswws=b22Qwlu+va+jRs3AcPJstEKws5af3XPee7ApkYS4JtG5jZ2zUt2g3EQDjm5zsVkU/KrJ3SK94wXx9WDn2O36IQA==;unionwsws={"jmafinger":"b22Qwlu+va+jRs3AcPJstEKws5af3XPee7ApkYS4JtG5jZ2zUt2g3EQDjm5zsVkU\/KrJ3SK94wXx9WDn2O36IQA==","devicefinger":"eidI9c1381218dsc+DsA9eZSSC2MgH3UEPChm\/g7Amx0mcX\/u0\/\/+jRmpR0kjaU7Gsc880QyvUKxfxuzs2YIbI7COtcUJ14W7mxTFwZAMIHiysMHHUVx"}',//账号一ck
  '',//账号二ck,如有更多,依次类推
]
// 判断github action里面是否有京东ck
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('\n');
  } else {
    CookieJDs = process.env.JD_COOKIE.split();
  }
  console.log(`\n==================脚本执行来自 github action=====================\n`)
  console.log(`==================脚本执行-国际标准时间(UTC)：${new Date().toLocaleString()}=====================\n`)
  console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toLocaleString()}=====================\n`)
}
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i];
}
