let renderer = {
    render(i) {
        var questionField = config[i].question +
            "\n" + config[i].а.trueAnswer +
            "\n" + config[i].б.falseAnswer +
            "\n" + config[i].в.falseAnswer +
            "\n" + config[i].г.falseAnswer;
        console.log(questionField);
    },
};