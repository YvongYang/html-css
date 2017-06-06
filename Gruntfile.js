module.exports = function(grunt) {
	// Project configurations

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		clean: {
			build: {
				src: ['css/**/*.css']
			}
		},

	    stylus: {
		  build: {
		    options: {
		      linenos: true,
		      compress: false
		    },
		    files: [{
		      expand: true,
		      cwd: 'stylus',
		      src: ['**/*.styl'],
		      dest: 'css',
		      ext: '.css'
		    }]
		  }
		},

		autoprefixer: {
		  build: {
		    expand: true,
		    cwd: 'css',
		    src: ['**/*.css'],
		    dest: 'css'
		  }
		},

		cssmin: {
		  build: {
		    files: {
		      'css/index.css': ['css/**/*.css']
		    }
		  }
		}
	});

	//加载插件
	grunt.loadNpmTasks('grunt-contrib-clean');
    // Compile Stylus files to CSS
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    //配置任务
    grunt.registerTask('stylesheets', ['stylus', 'autoprefixer']);
    grunt.registerTask('default', ['clean', 'stylesheets', 'cssmin']);
  
}