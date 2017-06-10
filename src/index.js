import minimist from 'minimist'

let argv = minimist(process.argv.slice(2))

function run(args) {
    const filePaths = args['_']
    console.log(filePaths);
}

function readFile(path) {

}

run(argv)



