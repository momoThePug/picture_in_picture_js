module.exports = function (grunt) {
  grunt.initConfig({
    bump: {
      options: {
        files: ["package.json"],
        updateConfigs: [],
        commit: true,
        commitMessage: "Release v%VERSION%",
        commitFiles: ["package.json"],
        createTag: true,
        tagName: "%VERSION%",
        tagMessage: "Version %VERSION%",
        push: true,
        pushTo: "upstream",
        gitDescribeOptions: "--tags --always --abbrev=1 --dirty=-d",
        globalReplace: false,
        prereleaseName: false,
        metadata: "",
        regExp: false
      }
    },
    clean: {
      build: ["./dist/app", "./src/**/*.js", "./src/**/*.d.ts", "./dist/**/*.d.ts", "./dist/*.js", "./dist/tsconfig.json"],
      vue: ["./dist/public"],
      postbuild: ["./src/**/*.js"]
    },
    exec: {
      compile: {
        command: 'npm run compile'
      },
      vue_build: {
        command: "npm run vue_build"
      }
    },
    copy: {
      vue_build: {
        files: [
          {
            expand: true,
            cwd: "./public/dist",
            src: ["**/*"],
            dest: "./dist/public"
          }
        ]
      },
      build: {
        files: [
          {
            expand: true,
            cwd: "./src",
            src: ["**/*", "!**/*.ts", "!**/test", "!**/*.map", "!**/public"],
            dest: "./dist"
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-exec");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks('grunt-bump');
  
  /*Custom tasks*/
 grunt.registerTask("build", "Compiles node code", [
    "clean:build",
    "exec:compile",
    "copy:build",
    "clean:postbuild"
  ]);
  grunt.registerTask("dist", "Compiles node code", [
    "build", 
    "clean:vue",
    "exec:vue_build",
    "copy:vue_build"
  ]);
};
