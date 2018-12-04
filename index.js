#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

(function() {
	let filePath = process.argv[2];
	if (filePath) {
		readFromFile(filePath);
	} else {
		readFromStdIn();
	}

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

	async function readFromFile(relativePath) {
		let fullPath = path.resolve(__dirname, relativePath);
		await fs.readFile(fullPath, (err, data) => {
			let output = processJson(data);
			print(output);
		});
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
