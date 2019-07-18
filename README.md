# webpack-plugin-run-shell-command

Webpack plugin to run shell command, use `child_process.spawn`.


## Install

```sh
npm i -D webpack-plugin-run-shell-command
```

## Usage

In your `webpack.config.js`:

```js
const RunShellCommand = require('webpack-plugin-run-shell-command')
module.exports = {
    plugins: [
        new RunShellCommand({
            before: {
                command: 'echo',
                args: ['-n', 'Before', 'run'],
                options: {
                    cwd: __dirname
                }
            },
            after: {
                command: 'echo',
                args: ['-n', 'After', 'run'],
                options: {
                    cwd: __dirname
                }
            },
            done: {
                command: 'echo',
                args: ['-n', 'All', 'done'],
                options: {
                    cwd: __dirname
                }
            }
        })
    ]
}
```

See [child_process.spwan](https://nodejs.org/docs/latest/api/child_process.html#child_process_child_process_spawnsync_command_args_options) documents.

