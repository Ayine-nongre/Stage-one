const express = require('express')

const app = express()

app.get('/api', function(req, res){
    const date = new Date()
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    console.log(date)
    res.status(200).json({
        slack_name: req.query.slack_name,
        current_day: days[date.getDay()],
        utc_time: date,
        track: req.query.track,
        github_file_url: "https://github.com/username/repo/blob/main/file_name.ext",
        github_repo_url: "https://github.com/username/repo",
        status_code: 200
    })
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running")
})
