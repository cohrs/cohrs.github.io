
const GitWebhooks = require('git-web-hooks')
 
new GitWebhooks({
 
    PORT: 3333 // optional. 3333 is default
 
}).on('payload', (req, res, payload) => {
 
    // do something based on payload contents
    console.log("GOT IT!")
    // then send a response to github
    res.end('got it!')
 
})
 
var cmd = GitWebhooks.command('yarn && pm2 restart 0')
 
// it's a Promise!
cmd.then(std => {
    console.log("TESTING")
    console.log(std.out, std.err)
}).catch(err => console.error)

