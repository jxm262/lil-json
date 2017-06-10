import jsonfile from 'jsonfile'
import minimist from 'minimist'
import shrink from './shrink'


let argv = minimist(process.argv.slice(2))

function run(args) {
    const files = args['_']

    files.forEach((file) => {
        if (!file.endsWith(".json")) {
            console.log("unable to parse  - " + file + " does not contain a .json extension")
            return
        }

        const fileName = file.slice(0,-5)
        const json = jsonfile.readFileSync(file)
        const lilJson = shrink(json)
        const lilJsonFileName = fileName + ".lil.json"

        jsonfile.writeFileSync(lilJsonFileName, lilJson)
    })
}

run(argv)
