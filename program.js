var fs = require('fs');
var buffer = fs.readFile(process.argv[2], function(err, data){
	if(err) throw err;
	var stringBuffer = data.toString();
    console.log(stringBuffer.split('\n').length-1);
});
