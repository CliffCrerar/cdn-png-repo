const imagemin = require('imagemin');
const imageminOptipng = require('imagemin-optipng');
const imageminPngquant = require('imagemin-pngquant');
const imageminMozjpeg = require('imagemin-mozjpeg')
const path = require('path');

process.env.NODE_PATH = path.join(__dirname, '../');

(async() => {
    process.cwd()
    console.log('process.cdw(): ', process.cwd());
    imagemin([process.cwd() + '/convert/*.{png,jpeg,jpg}'], {
        destination: process.cwd() + '/out',
        plugins: [
            imageminOptipng(),
            imageminPngquant(),
            imageminMozjpeg()
        ]
    });

    console.log('Images optimized!');
})();


// for (let i = 0; i < loopLen; i++) {
//     processId = uuidv1();
//     var file = fileList[i];
//     optimizer(file);
//     console.log('optimizer(file): ', optimizer(file));
// }



// function optimizer(file) {
//     console.log(path.extname(file) === '.jpg');
//     console.log('file: ', file);
//     logger.write(file);

//     const fileToWrite = path.join(__dirname, path.basename(file, path.extname(file)) + '.png');
//     const fileToRead = path.join(readPath, file);
//     const writeStream = fs.createWriteStream(fileToWrite);

//     console.log('fileToRead: ', fileToRead);
//     var readStream = fs.createReadStream(fileToRead).pipe(optimizer).pipe(writeStream);

//     return new Promise((res, rej => {
//         writeStream.on(finish, (() => (res())));
//     }))
// }

// console.log('');

// async function convertToPng(file) {
//     if (path.extname(file) === '.jpg') return fs.createReadStream(newPngFileName);
//     console.log('file CONVERT: ', file, processId);
//     var newPngFileName = path.join(__dirname, 'tmp', processId + '.png');
//     var newFile = await Jimp.read(path.join(readPath, file));
//     console.log('newPngFileName: ', newPngFileName);
//     await newFile.write(newPngFileName);
//     return fs.createReadStream(newPngFileName);
// }


// function Log() {
//     this.orig = null;
//     this.procid = null;
//     this.writeLogFile = (param) =>
//         fs.appendFileSync(path.join(__dirname, 'log', 'optipng.log'), param + '\n', 'utf8');
//     (function(self) {
//         self.writeLogFile('param');
//     })(this);

//     this.write = (paramToWrite) => this.writeLogFile(paramToWrite);
// }

//console.log('fileList: ', fileList)2;2