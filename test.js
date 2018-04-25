var beautyJs = require('js-beautify');


var ori = "/** * @param {string} word * @return {boolean} */var detectCapitalUse = function(word) {    var bigReg = /[A-Z]+/g;    var smallReg = /[a-z]+/g;    var wordLen = word.length;​​    function match(word, reg) {​        if (word == '') {            return true;        }        var len = word.length;        var match = word.match(reg);        if (match && match[0].length == len) {            return true;        }        return false;    }​    if (match(word, bigReg) || match(word, smallReg)) {        return true;    }​    if (match(word.slice(0, 1), bigReg) && match(word.slice(1), smallReg)) {        return true;    }​    return false;};​"

// console.log(beautyJs(ori, { indent_size: 2, space_in_empty_paren: true }));


// $(".CodeMirror-line").text() 

// (function(){
// 	// 'use strict'
// var a  = b = 5;
// })()
// 

var fs = require('fs');
var obj = {
	index:1,
	title: '二叉树展开为链表',
	href: 'https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list',
}

function createFile(obj) {
	//已解决的页面。
	obj.codeHref = obj.href + '/submissions/';
	var fileName = obj.href.split('https://leetcode-cn.com/problems/')[1];
	//使用中文名+链接中的英文命名
	var folderName = 'Algorithms/'+obj.index+obj.title　 + 　fileName;
	if (!fs.existsSync(folderName)) {
		fs.mkdirSync(folderName)
	}



	fs.writeFile(folderName + "/" + fileName + ".js", beautyJs(ori, {
		indent_size: 2,
		space_in_empty_paren: true
	}), function() {});


}

createFile(obj);
// 

(async() => {
	return;
//用于加载页面。
const puppeteer = require('puppeteer');
const url = 'https://leetcode-cn.com/problems/pascals-triangle-ii/submissions/1';
const browser = await puppeteer.launch();
const page = await browser.newPage();
//到登录页面
await page.goto(url);

await page.screenshot({
	path: 'page1.png'
}); //截个图
//等待页面加载出来，等同于window.onload
// await page.waitForNavigation({
// 	waitUntil: 'load'
// });

// await page.goto(url);
//延迟2s等页面内容加载出来。
// await timeout(2000);

// await page.screenshot({
// 	path: 'page2.png'
// }); //截个图

//获取url。
// const html = await page.$eval('body', e => e.outerHTML);
await browser.close();

})()


//一个简单的延时。
function timeout(inteval) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve()
        }, inteval);
    })
}
