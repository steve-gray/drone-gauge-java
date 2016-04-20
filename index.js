'use strict';

const child = require('child_process');
const defaults = require('./defaults');
const defaultsDeep = require('defaults-deep');
const Drone = require('drone-node');
const path = require('path');

const plugin = new Drone.Plugin();
plugin.parse().then((params) => {
  try {
    // gets build and repository information for
    // the current running build
    const build = params.build;
    const repo  = params.repo;

    const vargs = params.vargs;
    const gaugeSettings = defaultsDeep(params.vargs || {}, defaults);

    // Build the gauge command line
    const workingDirectory = path.join(params.workspace.path, gaugeSettings.gauge_project_root);
    console.log('Gauge will be executed from the path: %s', workingDirectory);
    const gaugeArgs = [];
    gaugeArgs.push(gaugeSettings.gauge_specs);

    const childProcess = child.spawn('gauge',  gaugeArgs, {
        cwd: workingDirectory,
        stdio: 'inherit',
        shell: true,
      }, (err, stdout, stderr) => {
      // We could not exec(), fail and report.
      if (err) {
        console.log('Gauge task could not be launched:');
        console.log(err);
        process.exit(-1);
      }

      // Success, wire up the pipes to ensure output is logged
      console.log('Gauge process created.');
      stdout.pipe(process.stdout);
      stderr.pipe(process.stderr);
    });

    // The process has exited, mirror the exit code.
    childProcess.on('error', (err) => {
        console.log('Gauge process errored, exiting build-container: %s', err);
        process.exit(-2);
    });
    childProcess.on('exit', (code) => {
        console.log('Gauge process exited with code %s, exiting build-container.', code);
        process.exit(code);
    });
  } catch (err) {
    // Something else happened, somewhere...
    console.log('Gauge task failed with internal error:');
    console.log(err);
    process.exit(-1);
  }
});
