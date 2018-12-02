#!/usr/bin/env node

(function() {
	readFromStdIn();

	function addEnclosingQuotes(jsonString) {
		return `'${jsonString}'`;
	}

	function escapeSingleQuotes(jsonString) {
		return jsonString.replace("'", "''");
	}

	function minify(json) {
		let jsonObject = JSON.parse(json);
		return JSON.stringify(jsonObject);
	}

	function print(jsonString) {
		console.log(jsonString);
	}

	function processJson(json) {
		let output = minify(json);
		output = escapeSingleQuotes(output);
		output = addEnclosingQuotes(output);
		return output;
	}

	function readFromStdIn() {
		let input = "";
		process.stdin
			.resume()
			.on("data", buffer => {
				input += buffer;
			})
			.on("end", () => {
				let output = processJson(input);
				print(output);
			});
	}
})();
