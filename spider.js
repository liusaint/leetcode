const cheerio = require('cheerio');

const url = 'https://leetcode-cn.com/problemset/algorithms/';


const puppeteer = require('puppeteer');
var baseUrl = 'https://leetcode-cn.com';
const fs = require('fs');
const path = require('path');


(async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await timeout(2000);
    const html = await page.$eval('body', e => e.outerHTML);


    let $ = cheerio.load(html);



    console.log($(".table-striped .reactable-data tr").length)
    var questionArr = [];
    $(".table-striped .reactable-data tr").each(function(i, el) {
        var tds = $(el).find('td');

        var obj = {
            index: tds.eq(1).text(),
            title: tds.eq(2).text(),
            href: baseUrl + tds.eq(2).find('a').attr('href'),
            rate: tds.eq(4).text(),
            level: tds.eq(5).text(),
        }
        questionArr.push(obj);

    })

    var table = createTable(questionArr);
    // console.log(table);

    fs.readFile('./README.md', 'utf8', function(err, data) {
        if (err) throw err;
// console.log(data.match())
        var res = data.replace(/表格\s+###表格结束/,'表格\n'+table+'\n表格结束');
        fs.writeFileSync(path.join(__dirname, 'README.md'),res);
console.log(res)
    });


})();


function createTable(arr) {
    var header = `# | 题名 | 通过率 | 难度 \n---|---|---|---\n`
    var resArr = arr.map(function(obj) {
        return `${obj.index} | ${obj.title} | ${obj.rate} | ${obj.level}`;
    })

    return header + resArr.join('\n')

}

function timeout(inteval) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve()
        }, inteval);
    })
}

//1.差分页https://blog.csdn.net/Tyro_java/article/details/54730509