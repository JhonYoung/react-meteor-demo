DORA = {
	promise: (type, url, data, query = {debug: 1}) => {
		return promise = new Promise((resolve, reject) => {
		    let res = HTTP.call(type, url, {query, data}, function (err, res) {
			    if (res) {
			      	resolve(res);
			    } else {
			      	reject(err);
			    }
		    });
		});
	},
	setUser: (user) => {
		user = JSON.stringify(user);
		localStorage.setItem("user", user);
	},

	getUser: () => {
		return JSON.parse(localStorage.getItem("user")) || {};
	}

}