/*用于从https://leetcode-cn.com爬取题目和完成状态。
 *ls 20180421
 */

//node端的jQuery?
const cheerio = require('cheerio');

//登录页面
const loginUrl = 'https://leetcode-cn.com/accounts/login/';
// 要抓取的问题页面。
const url = 'https://leetcode-cn.com/problemset/algorithms/';
//用于加载页面。
const puppeteer = require('puppeteer');

const baseUrl = 'https://leetcode-cn.com';
const fs = require('fs');
const path = require('path');
//将用户名和密码保存在这个文件。这个文件不上传到github，避免泄露。
const setting = require('./config.js');
//登录。密码可别泄露了。。。
const user = setting.user;
const pwd = setting.password;



(async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    //到登录页面
    await page.goto(loginUrl);

    await page.type('#id_login', user);
    await page.type('#id_password', pwd);

    await page.click('.auth-action-btn');

    //等待页面加载出来，等同于window.onload
    await page.waitForNavigation({
        waitUntil: 'load'
    });

    await page.goto(url);
    //延迟2s等页面内容加载出来。
    await timeout(2000);
    await page.evaluate(() => {
        //设置每页的数量为全部。然后刷新。
        var pageSize = $('.reactable-pagination .form-control').find('option:last-child').val();
        localStorage.setItem('problem-list:itemsPerPage', pageSize);
        location.reload()

    });
    await timeout(4000);
    await page.screenshot({
        path: 'page.png'
    }); //截个图

    //获取url。
    const html = await page.$eval('body', e => e.outerHTML);
    await browser.close();

    let $ = cheerio.load(html);
    //获取问题信息
    var questionArr = [];
    $(".table-striped .reactable-data tr").each(function(i, el) {
        var tds = $(el).find('td');
        var obj = {
            status: tds.eq(0).attr('value') == 'ac' ? '√' : ' ',
            index: tds.eq(1).text(),
            title: tds.eq(2).text(),
            href: baseUrl + tds.eq(2).find('a').attr('href'),
            rate: tds.eq(4).text(),
            level: tds.eq(5).text(),
        }
        questionArr.push(obj);
    })

    //生成markdown表格的字符串
    var table = createTable(questionArr);

    var progress = $(".question-solved").text();
    console.log(progress)

    //读取readme.md。替换指定位置的内容 。填入表格。
    fs.readFile('./README.md', 'utf8', function(err, data) {
        if (err) throw err;
        var res = data.replace(/解题进度:[\s\S]+?\n/, '解题进度:' + progress + '\n');
        var res = res.replace(/### 表格[\s\S]+\n表格结束/, '### 表格\n' + table + '\n表格结束');
        fs.writeFileSync(path.join(__dirname, 'README.md'), res);

    });


})();

//生成表格
function createTable(arr) {
    var header = ` 序号 | 题名 | 通过率 | 难度 |状态  \n---|---|---|---|---\n`
    var resArr = arr.map(function(obj) {
        return ` ${obj.index} | [${obj.title}](${obj.href}) | ${obj.rate} | ${obj.level} | ${obj.status}`;
    })
    return header + resArr.join('\n');
}
//一个简单的延时。
function timeout(inteval) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve()
        }, inteval);
    })
}