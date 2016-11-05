# cnntweet
CNN Digital Code Challenge - Twitter Feed


Installation
----

Install [Node.js](http://nodejs.org/).

Clone GitHub repo:

```
git clone https://github.com/russ134/cnntweet.git
```
Make a new config.js file using the current config.js as a template to replace the one in this app. Fill in your associated Twitter App API Keys. You will need to [create a Twitter application](https://apps.twitter.com/) in order to do this. Within config.js replace the following empty strings with the your Twitter API Keys:

```
twitter: {
	consumer_key: '',
	consumer_secret: '',
	access_token: '',
	access_token_secret: ''
}
``` 

```
npm install 
```

Run

```
node server.js
```

or

```
npm start
```

Finally go to [http://localhost:8080](http://localhost:8080) in your browser