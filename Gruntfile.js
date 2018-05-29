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
      build: ["./dist/app", "./src/**/*.js", "./dist/*.js"],
      front: ["./dist/public"],
      postbuild: ["./src/**/*.js"]
    },
    exec: {
      frontdist: {
        command: 'cd public && npm run build'
      },
      front: {
        command: 'cd public && npm run start'
      },
      build: {
        command: 'tsc -p "./"'
      },
      vue: {
        command: 'cd public && npm run start'
      },
      test: {
        command: "npm run test"
      }
    },
    copy: {
      frontdist: {
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
  grunt.registerTask("build", "Compiles node code", [
    "clean:build",
    "exec:build",
    "copy:build",
    "clean:postbuild"
  ]);
  grunt.registerTask("front", "Compiles node code", [
    "exec:front"
  ]);
  grunt.registerTask("frontdev", "Compiles node code", [
    "clean:front",
    "exec:frontdist",
    "copy:frontdist"
  ]);
  grunt.registerTask("vue", "Compiles node code", [
    "exec:vue"
  ]);
  grunt.registerTask("dist", "Compiles node code", [
    "build", "frontdev"
  ]);
  grunt.registerTask("test", "test source code", ["exec:test"]);
  grunt.registerTask("default", "My default task", ["build"]);
};
