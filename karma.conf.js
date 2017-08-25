// Karma configuration
// Generated on Sun Aug 20 2017 20:50:31 GMT+0800 (CST)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        // 相对目录 如果这里填了 files和 exclide(排除) 里的文件夹都相对于我们的 basepath
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        // frameworks 需要用到的断言库jasmine 、moncha 、chai
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        // 测试具体的文件是 哪些
        files: [
            '*.js'
        ],


        // list of files to exclude
        // 那些文件不被测试
        exclude: [
            'karma.conf.js',
            'system.js',
            'homework.js'
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        // 插件  例如需要 引一下测 覆盖率的 插件
        preprocessors: {},


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        // 选择测试的浏览器
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}