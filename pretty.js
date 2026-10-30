#!/usr/bin/env node

const fs = require("fs");
const prettyFast = require("pretty-fast");

if (!process.argv[2]) process.exit(1);

let out = prettyFast(fs.readFileSync(process.argv[2], "utf8"), { indent: "  " }).code;
if (!out.endsWith("\n")) out += "\n";
process.stdout.write(out);