import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("<h1>KV</h1>")
})


app.get('/name', (req, res) => {
    res.send("KV")
})


app.get('/mess', (req, res) => {
    res.send("<h1>Get ready for trouble and make it double!!!</h1>")
})

const gitHubData = {
    "login": "karthikgveresh-lgtm",
    "id": 244912912,
    "node_id": "U_kgDODpkTEA",
    "avatar_url": "https://avatars.githubusercontent.com/u/244912912?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/karthikgveresh-lgtm",
    "html_url": "https://github.com/karthikgveresh-lgtm",
    "followers_url": "https://api.github.com/users/karthikgveresh-lgtm/followers",
    "following_url": "https://api.github.com/users/karthikgveresh-lgtm/following{/other_user}",
    "gists_url": "https://api.github.com/users/karthikgveresh-lgtm/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/karthikgveresh-lgtm/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/karthikgveresh-lgtm/subscriptions",
    "organizations_url": "https://api.github.com/users/karthikgveresh-lgtm/orgs",
    "repos_url": "https://api.github.com/users/karthikgveresh-lgtm/repos",
    "events_url": "https://api.github.com/users/karthikgveresh-lgtm/events{/privacy}",
    "received_events_url": "https://api.github.com/users/karthikgveresh-lgtm/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Karthik's_Repo",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "🚀 Frontend Developer | Crafting seamless user experiences with React, JavaScript, and CSS. 💻 sharpening my Data Structures & Algorithms. ",
    "twitter_username": null,
    "public_repos": 11,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2025-11-19T08:53:26Z",
    "updated_at": "2026-04-29T09:06:14Z"
}

app.get('/gitData', (req, res) => {
    res.json(gitHubData)
})

// get list of 5 jokes 

app.get('/jokes', (req, res) => {
    const jokes = [
        {
            "id": 1,
            "title": "one liner",
            "joke": "Why don't scientists trust atoms? Because they make up everything!"
        },
        {
            "id": 2,
            "joke": "I told my wife she was drawing her eyebrows too high. She looked surprised."
        },
        {
            "id": 3,
            "joke": "What do you call a fake noodle? An impasta!"
        },
        {
            "id": 4,
            "joke": "Why did the scarecrow win an award? Because he was outstanding in his field!"
        },
        {
            "id": 5,
            "joke": "I'm reading a book about anti-gravity. It's impossible to put down!"
        }
    ]
    res.send(jokes)
})


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})