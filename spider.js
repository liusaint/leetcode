



const superagent = require('superagent');
const cheerio = require('cheerio');

const url = 'https://leetcode-cn.com/problemset/all/';

superagent.get(url).end(function (err, res) {
    // 抛错拦截
     if(err){
         throw Error(err);
     }
   /**
   * res.text 包含未解析前的响应内容
   * 我们通过cheerio的load方法解析整个文档，就是html页面所有内容，可以通过console.log($.html());在控制台查看
   */
   let $ = cheerio.load(res.text);
   console.log(res.text)
});