module.exports = function(grunt) {
	//configuração do projeto.
	grunt.initConfig({
		jshint: {all : ['scripts.js']},
		concat: {
		dist  : {
			src: ['scripts.js','scripts1.js','scripts2.js'],
			dest: 'merged.js'
			}
		},
		uglify: {
			dist : {
				src : 'merged.js',
				dest: 'build/merged.min.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ["jshint","concat","uglify"]);
};
