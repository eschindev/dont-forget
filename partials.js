function registerPartials(folder) {
    const partialsFolder = path.join(folder, '_includes')

    const partials = fs.readdirSync(partialsFolder)
        .filter(isValidPartial)
        .reduce((result, partial) => {
            const ext = path.extname(partial)
            const fileFullPath = path.join(partialsFolder, partial)
            const data = fs.readFileSync(fileFullPath, 'utf-8')

            // Store as `"filename without extension": content`.
            result[path.basename(partial, ext)] = data
            return result
        }, {})

    handlebars.registerPartial('myPartial', '{{prefix}}');
}