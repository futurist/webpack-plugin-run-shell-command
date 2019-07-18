const {spawn} = require('child_process');
class ExecPlugin {
  constructor(options) {
    this.options = options || {};
  }
  apply(compiler) {
    const run = (runOptions) => {
      if (!runOptions) return;
      const {command, args, options} = runOptions;
      const proc = spawn(command, args || [], Object.assign({
        stdio: 'inherit'
      }, options));
      return proc.on('close', error => {
        if (error) {
          throw error;
        }
      });
    };
    const compilationHook = () => {
      run(this.options.before);
    };
    const afterEmit = (compilation, callback) => {
      run(this.options.after);
      callback()
    };
    const done = (stats, callback) => {
      run(this.options.done);
      callback()
    };
    if (compiler.hooks) {
      compiler.hooks.thisCompilation.tap(this.constructor.name, compilationHook);
      compiler.hooks.afterEmit.tapAsync(this.constructor.name, afterEmit);
      compiler.hooks.done.tapAsync(this.constructor.name, done);
    } else {
      compiler.plugin('compilation', compilationHook);
      compiler.plugin('after-emit', afterEmit);
      compiler.plugin('done', done);
    }
  }
}

module.exports = ExecPlugin
