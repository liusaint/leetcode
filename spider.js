const superagent = require('superagent');
const cheerio = require('cheerio');

const url = 'https://leetcode-cn.com/problemset/all/';

// superagent.get(url).end(function (err, res) {
//     // 抛错拦截
//      if(err){
//          throw Error(err);
//      }

//    let $ = cheerio.load(res.text);
//    console.log($.html())
//    // console.log($(".table-striped .reactable-data tr").length)
// });

const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await timeout(2000);

    let arr = await page.evaluate(() => {


        let trs = [...document.querySelectorAll('tbody.reactable-data tr')];
        return trs.map((tr) => {

            tds = [...tr.querySelectorAll('td')];
            return tr;
            return {
                // index: tds[0].text,
                // title: tds[1].querySelector('a').text,
                // href: tds[1].querySelector('a').href
                // td:tds
            }
        });
    });
    console.log(arr);
    // console.log(aTags);

    // await page.screenshot({path: 'example.png'});

    await browser.close();
})();

function timeout(inteval) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve()
        }, inteval);
    })
}