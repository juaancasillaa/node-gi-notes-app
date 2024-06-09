//setting usefull tools to link to app.js
const chalk = require ('chalk')
const { command, describe, demandCommand } = require('yargs')
const yargs = require ('yargs')
const notes = require ('./notes.js')

//customize yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add', 
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption:true,
            type: 'string'
        }
    },
    handler (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notes.removeNote(argv.title)
    }
})

//create read command
yargs.command ({
    command: 'read',
    describe: 'reading a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readnote(argv.title)
    }
})

//create list command
yargs.command ({
    command: 'list',
    describe: 'listing a note',
    handler() {
        console.log('Listing the note')
    }
})
//add, remove, read, list

yargs.parse()
// console.log(yargs.argv)