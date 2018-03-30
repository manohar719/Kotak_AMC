module.exports = function(grunt) {
   // var mozjpeg = require('imagemin-mozjpeg');

    grunt.initConfig({

        // imagemin: { // Task
        //     dynamic: { // Another target
        //         files: [{
        //             expand: true, // Enable dynamic expansion
        //             cwd: 'images/', // Src matches are relative to this path
        //             src: ['**/*.{png,jpg,gif}'], // Actual patterns to match
        //             dest: 'imagesmin/' // Destination path prefix
        //         }]
        //     }
        // },

        // sprite: {
        //     all: {
        //         src: 'images/*.png',
        //         dest: 'source/assets/img/spritesheet.png',
        //         destCss: 'source/scss/sprites.css',
        //         padding: 50
        //     }
        // },

        // csslint: {
        //     options: {
        //         "important": false,
        //         "regex-selectors": false,
        //         "unique-headings": false,
        //         "universal-selector": false,
        //         "unqualified-attributes": false,
        //         "box-sizing": false,
        //         "outline-none": false,
        //         "compatible-vendor-prefixes": false,
        //         "adjoining-classes": false,
        //         "qualified-headings": false,
        //         "vendor-prefix": false,
        //         "box-model": false,
        //         "ids": false,
        //         "fallback-colors": false,
        //         "display-property-grouping": false,
        //         "font-sizes": false,
        //         "known-properties": false,
        //         "overqualified-elements": false,
        //         "star-property-hack": false
        //     },
        //     src: ['source/assets/css/*.css']
        // },
        useminPrepare: {
            html: {
                src: ['source/*.html']
            },
            options: {
                dest: 'build/'
            }
        },
        cssmin: {
            combine: {
                files: {
                    'build/assets/css/style.css': ['source/assets/css/*.css']
                }
            }
        },
        uglify: {
            build: {
                files: {
                    'build/assets/js/custom.js': ['source/assets/js/global.js',
                        'source/assets/js/sidenav.js'
                    ],
                    'build/assets/js/vendor.js': [
                        'source/assets/js/vendor/jquery-1.10.2.min.js',
                        'source/assets/js/vendor/modernizr-2.6.2.min.js',
                        'source/assets/js/vendor/detectizr.min.js',
                        'source/assets/js/vendor/owl.carousel.min.js',
                        'source/assets/js/vendor/aos.js',
                        'source/assets/js/vendor/responsive-img.min.js'
                    ]
                }
            }
        },
        usemin: {
            html: ['build/*.html']
        },
        copy: {
            html: {
                expand: true,
                cwd: 'source/',
                src: ['*.html'],
                dest: 'build/'
            },
            images: {
                expand: true,
                cwd: 'source/assets/img/',
                src: '**',
                dest: 'build/assets/img/'
            },
            fonts: {
                expand: true,
                cwd: 'source/assets/font/',
                src: '**',
                dest: 'build/assets/font/'

            },
            js: {
                expand: true,
                cwd: 'source/assets/js/',
                src: '**',
                dest: 'build/assets/js/'
            }
        },
        jade: {
            compile: {
                options: {
                    client: false,
                    pretty: '\t'
                },
                files: [{
                    expand: true,
                    cwd: 'source/jade/',
                    src: ['*.jade'],
                    dest: 'source/',
                    ext: '.html'
                }]
            }
        },
        sass: {
            options: {
                sourcemap: 'none'
            },
            compile: {
                files: [{
                    expand: true,
                    cwd: 'source/scss/',
                    src: ['*.scss'],
                    dest: 'source/assets/css/',
                    ext: '.css'
                }]
            }
        },
        // iconfont: {
        //     options: {},
        //     your_target: {
        //         fontName: 'svgfont', // overrides font name, would default to 'your_target' in this example 
        //         src: 'source/assets/img/svg/*.svg',
        //         dest: 'source/assets/font'
        //     }
        // },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'assets/css/*.css',
                        'source/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './source'
                }
            }
        },
        watch: {
            grunt: { files: ['Gruntfile.js'] },
            jade: {
                files: ['source/jade/*.jade', 'source/layout/*.*', 'source/modules/*.*', 'source/include/*.*'],
                tasks: ['jade']
            },
            scss: {
                files: ['source/scss/*.scss'],
                tasks: ['sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    //grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    // grunt.loadNpmTasks('grunt-iconfont');
    // grunt.loadNpmTasks('grunt-webfont');
    grunt.registerTask('htmlize', ['jade']);
    grunt.registerTask('watcher', ['browserSync', 'watch']);
    grunt.registerTask('css', ['sass']);
    //grunt.registerTask('default', ['imagemin']);
    grunt.registerTask('default', ['browserSync', 'watch']); //'jshint', 
    grunt.registerTask('build', ['copy', 'useminPrepare', 'usemin', 'cssmin', 'uglify']);

};
