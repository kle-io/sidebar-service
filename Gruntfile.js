module.exports = (grunt) => {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    aws: grunt.file.readJSON('config/.aws.json'),
    aws_s3: {
      options: {
        accessKeyId: '<%= aws.AWS_ACCESS_KEY_ID %>',
        secretAccessKey: '<%= aws.AWS_SECRET_ACCESS_KEY %>',
        region: '<%= aws.AWS_DEFAULT_REGION %>',
      },
      production: {
        options: {
          bucket: '<%= aws.AWS_BUCKET %>',
          differential: true,
        },
        files: [
          {expand: true, dest: 'assets', cwd: 'public', src: ['**'], action: 'upload'},
        ],
      },
    },
  });
  grunt.loadNpmTasks('grunt-aws-s3');
};
