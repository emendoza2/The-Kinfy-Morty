BABABABABABABABA
## Prerequisites
- A Mac or Linux box
- Patience

## Installation
On a Mac, fire up Terminal and type:
```bash
git clone https://github.com/emendoza2/The-Kinfy-Morty
cd The-Kinfy-Morty
npm install
```

## Guide
responses.json holds all the responses the bot can say, in three categories:

"commands" holds everything the bot does when you type K!{command}

"responses" holds plain text responses, for conversations, etc.

"mentions" holds everything the bot responds to after you mention the bot.


Look in the file for sample responses. Each one is encoded as a kay-value pair (bear with me here). For example:
```json
"I'm hungry": "I have no food"
```
In this case "I'm hungry" is what the triggers the response (the key), and "I have no food" is what the bot will say (the value). If you are an advanced coder, you can use standard js regex for the keys and values.

Here is another example:
```json
"Hi": ["Hello", "Hi", "Yo", "Hey there"]
```
This is how you enter multiple responses for one trigger. The bot can will respond in one of the four ways shown in-between the brackets. Remember to always put every word, phrase, and sentence, or otherwise sequence of characters, between quotes (`""`). 


Side note: the name is still very much a work in progress
