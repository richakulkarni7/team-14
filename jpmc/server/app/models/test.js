const mongoose = require('mongoose');
const Test = mongoose.Schema({
    "sector 1": {
      "questions":{
        "no":"",
        "text":"",
        "level":"",
        "options":[],
        "correct":""
      }
    },
    "sector 2": {
      "questions":{
        "no":"",
        "text":"",
        "level":"",
        "options":[],
        "correct":""
      }
    },
    "sector 3": {
      "questions":{
        "no":"",
        "text":"",
        "level":"",
        "options":[],
        "correct":""
      }
    },
    "sector 4": {
      "questions":{
        "no":"",
        "text":"",
        "level":"",
        "options":[],
        "correct":""
      }
    },
    "sector 5": {
      "questions":{
        "no":"",
        "text":"",
        "level":"",
        "options":[],
        "correct":""
      }
    },

});

module.exports = mongoose.model('Test', Test);
