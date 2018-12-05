# json4tsql
### **Minifying JSON for use in T-SQL**

**json4tsql** is a simple Node.js command-line tool that takes JSON and formats it to be used in T-SQL scripts. This includes minifying to remove whitespace, escaping all apostrophes, and then enclosing it in single quotes so that it can be pasted into your script as a single, one-line string.

## Installation

With npm:
```sh
$ npm install -g json4tsql
```

With yarn:
```sh
$ yarn global add json4tsql
```

## Usage

Parse a file:
```sh
$ json4tsql my-file.json
```

Parse from stdin through piping:
```sh
$ cat my-file.json | json4tsql
```
