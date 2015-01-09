derby-poll
=============


setup an example poll:
```
MODEL.add("polls", {id: "food", title: "Favorite Food"});
```


setup some example questions:
```
var questionId = MODEL.add("questions", { poll:"food", question: "What is your favorite food?" })
```

setup some example answers:
```
MODEL.add("answers", { poll: "food", question: questionId value: "bacon" });
MODEL.add("answers", { poll: "food", question: questionId, value: "bagel" })
```
