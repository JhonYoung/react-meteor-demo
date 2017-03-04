DORA = {
	promise: (type, url, data) => {
		return promise = new Promise((resolve, reject) => {
		    let res = HTTP.call(type, url, {data}, function (err, res) {
			    if (res) {
			      	resolve(res);
			    } else {
			      	reject(err);
			    }
		    });
		});
	}
}