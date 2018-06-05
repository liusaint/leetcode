// 批处理文件。

var fs = require("fs")
var path = require("path")

var root = path.join(__dirname, 'Algorithms/')

readDir(path.join(root))

function readDir(path) {
	fs.readdir(path, function(err, menu) {
		if (!menu)
			return;

		menu.forEach(function(ele) {

			var folder = fs.statSync(path + "/" + ele);
			if (folder.isDirectory()) {

				fs.readdir(path + "/" + ele, function(err, fileArr) {
					createFile(path + "/" + ele + "/" + fileArr[0], ele);
				})
			}

		})
	})
}


//给所有之前的文件加上题目。增加曝光度。
function createFile(path, folderName) {

	if (!fs.existsSync(path)) {
		return;
	}
	//加上这一句，增加被搜索到的概率。
	var prefix = '/* leetcode　' + folderName + ' JavaScript实现　' + '*/\n\n'
	var fileStr = fs.readFileSync(path, 'utf8');
	//如果已经处理过了就退出。
	if (fileStr.indexOf(prefix) > -1) {
		return;
	}

	fs.writeFile(path, prefix + fileStr, function() {});

};