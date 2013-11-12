var fs = require('fs');
var spawn = require('child_process').spawn;
require('should');

describe('When grunt-inject is run', function () {

  var processOutput = '';

  before(function (done) {
    var injectProcess = spawn('grunt', ['inject:dev']);


    injectProcess.stdout.setEncoding('utf8');

    injectProcess.stdout.on('data', function (data) {
      processOutput += data;
    });

    injectProcess.on('close', function () {
      injectProcess.kill();
      done();
    });
  });

  it('logs thhe expected output', function() {
    processOutput.should.include('Dev scripts');
    processOutput.should.include('injected');
    processOutput.should.include('into test/output/index.html');
  });

  it('injects the JavaScript source file into the html', function() {
    fs.readFileSync('test/fixtures/output.html', 'utf8').should.eql(fs.readFileSync('test/output/index.html', 'utf8'));
  });

});
