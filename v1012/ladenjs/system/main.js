#!/usr/bin/env node 
console.clear();
const { Command } = require('commander');
const { landenServer } = require('./ws');
const { net } = require('net')
const program = new Command();
program.version('0.0.1');

program
    .option('-l, --ServerStatus')
program.parse(process.argv);

const options = program.opts();
if(options.ServerStatus) if(landenServer.listening = true){console.log('Server is online')}