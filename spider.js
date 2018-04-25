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
//用于把拿到的js字符串格式化。
const beautyJs = require('js-beautify');
//将用户名和密码保存在这个文件。这个文件不上传到github，避免泄露。
const setting = require('./config.js');
//登录。密码可别泄露了。。。
const user = setting.user;
const pwd = setting.password;

let questionArr = [];

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.setViewport({
        width: 1200,
        height: 1920
    })
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
    // await page.evaluate(() => {
    //     //设置每页的数量为全部。然后刷新。
    //     var pageSize = $('.reactable-pagination .form-control').find('option:last-child').val();
    //     localStorage.setItem('problem-list:itemsPerPage', pageSize);
    //     location.reload()

    // });
    // await timeout(4000);
    await page.screenshot({
        path: 'page.png'
    }); //截个图

    // return;
    //获取url。
    const html = await page.$eval('body', e => e.outerHTML);
    // await browser.close();

    let $ = cheerio.load(html);

    $(".table-striped .reactable-data tr").each(function(i, el) {
        var tds = $(el).find('td');
        var obj = {
            status: tds.eq(0).attr('value') == 'ac' ? '√' : ' ',
            index: tds.eq(1).text(),
            title: tds.eq(2).text().trim(),
            href: baseUrl + tds.eq(2).find('a').attr('href'),
            rate: tds.eq(4).text(),
            level: tds.eq(5).text(),
        }
        // https://github.com/liusaint/ls-blog/tree/master/code/es6/es6.js
        // https://github.com/liusaint/leetcode
        // 
        if (obj.status == '√') {
            //已解决的页面。
            obj.codeHref = obj.href + '/submissions/';
            // obj.getHref = ''
            obj.fileName = obj.href.split('https://leetcode-cn.com/problems/')[1];
            //使用中文名+链接中的英文命名
            obj.folderName = 'Algorithms/' + obj.index + obj.title　 + 　obj.fileName;
            obj.fullPath = obj.folderName + "/" + obj.fileName + ".js";
            obj.gitHref = 'https://github.com/liusaint/leetcode/blob/master/' + obj.fullPath;

            obj.gitHref = obj.gitHref.replace(/\s/g, '%20');
        } else {
            obj.gitHref = '';
        }
        questionArr.push(obj);
    })

    createMd($);

    createFiles(browser, page);

})();

//生成表格
function createTable(arr) {
    var header = ` 序号 | 题名 | 通过率 | 难度 | 答案 |状态  \n---|---|---|---|---|---\n`
    var resArr = arr.map(function(obj) {
        var look = obj.gitHref ? `[查看](${obj.gitHref})` : '';
        return ` ${obj.index} | [${obj.title}](${obj.href}) | ${obj.rate} | ${obj.level} | ${look} | ${obj.status}`;
    })
    return header + resArr.join('\n');
}


//生成readme文件
function createMd($) {
    //生成markdown表格的字符串
    var table = createTable(questionArr);
    //进度
    var progress = $(".question-solved").text();


    //读取readme.md。替换指定位置的内容 。填入表格。
    fs.readFile('./README.md', 'utf8', function(err, data) {
        if (err) throw err;
        var res = data.replace(/解题进度:[\s\S]+?\n/, '解题进度:' + progress + '\n');
        var res = res.replace(/### 表格[\s\S]+\n表格结束/, '### 表格\n' + table + '\n表格结束');
        fs.writeFileSync(path.join(__dirname, 'README.md'), res);
    });

}


//根据爬到的文件调用　beautyJs格式化并生成文件。
function createFile(obj) {

    if (!fs.existsSync(obj.folderName)) {
        fs.mkdirSync(obj.folderName)
    }

    fs.writeFile(obj.fullPath, beautyJs(obj.code, {
        indent_size: 2,
        space_in_empty_paren: true
    }), function() {});

};


//遍历文件url。依次爬取每一个解答。
async function createFiles(browser, page) {

    questionArr.length = 8;
    for (var i = 0; i < questionArr.length; i++) {

        var obj = questionArr[i];
        if (!obj.gitHref) {
            continue;
        }
        //文件已经有了，跳过。
        if (fs.existsSync(obj.fullPath)) {
            continue;
        }
        //到登录页面
        console.log(obj.codeHref);
        await page.goto(obj.codeHref + "/1", {
            waitUntil: 'networkidle0'
        });


        await timeout(2000)
        await page.screenshot({
            path: obj.fileName + '.png'
        }); //截个图
        //跳转到详情页面。
        await page.evaluate(() => {
            $('a.text-success')[0].click()
        });

        await timeout(2000);

        await page.screenshot({
            path: obj.fileName + '11.png'
        }); //截个图


        obj.code = await page.evaluate(() => {
            //替换注释。不删除的话拿来的代码会有问题。
            if ($(".ace_cjk").parent().length > 0) {
                $(".ace_cjk").parent().each(function(index, el) {
                    var text = $(el).text();
                    text = text.replace("//", '');
                    $(el).text('/*' + text + "*/");
                })
            }
            return $(".ace_content").text();
        });

        createFile(obj);

    }

    browser.close();


}

//一个简单的延时。
function timeout(inteval) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve()
        }, inteval);
    })
}
