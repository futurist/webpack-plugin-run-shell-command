const RunShellCommand = require('../')
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
