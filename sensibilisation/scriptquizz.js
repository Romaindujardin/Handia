//The data
var quizzData = [{
        question: "Combien existe-t-il de types de handicap ?",
        options: ["5", "6", "4", "3"],
        answer: 2
    },

    {
        question: "Quel est le pourcentage de handicaps invisibles ?",
        options: ["80%", "60%", "10%", "25%"],
        answer: 1
    },

    {
        question: "Quel est le pourcentage de personnes qui naissent avec un handicap ?",
        options: ["1%", "7%", "29%", "16%"],
        answer: 4
    },

    {
        question: "Combien de personnes sont handicapées au cours de leur vie ?",
        options: ["1/2", "1/4", "1/6", "Aucune de ces réponses"],
        answer: 1
    },

    {
        question: "Quel est le quota de travailleurs handicapés dans une entreprise ?",
        options: ["19%", "1%", "6%", "10%"],
        answer: 3
    },

    {
        question: "Quelle est l'une des différences entre la dyslexie et la dysorthographie ?",
        options: [
            "La difficulté d'apprentissage de la lecture",
            "La difficulté d'apprentissage de l'expression écrite",
            "La difficulté d'apprentissage de l'écriture",
            "aucune de ces réponses"
        ],

        answer: 2
    },

    {
        question: "Le handicap est-il la 5e cause de discrimination en France ?",
        options: [
            "Vrai",
            "Faux",
        ],

        answer: 2
    },

    {
        question: "Quel était le pourcentage d'étudiants handicapés en 2020 ?",
        options: ["11%", "19%", "2%", "7%"],
        answer: 3
    },

    {
        question: "Quel est le pourcentage de personnes avec un handicap cognitif ?",
        options: [
            "8%",
            "45%",
            "22%",
            "36%"
        ],

        answer: 4
    },

    {
        question: "Quel est le pourcentage de personnes avec un handicap psychique ?",
        options: [
            "12,6%",
            "27,4%",
            "4%",
            "34,9%"
        ],

        answer: 1
    }
];



// The question asked
function Question(props) {
    return /*#__PURE__*/ React.createElement("h2", null, props.question);
}

//One line of the answers
function Answer(props) {
    var style = {
        width: "80%",
        padding: 12,
        margin: 2,
        backgroundColor: "#4A148C",
        borderColor: "#280c4b",
        fontSize: "20px",
        color: "white"
    };

    return /*#__PURE__*/ (
        React.createElement("li", null, /*#__PURE__*/
            React.createElement("button", { style: style, onClick: () => props.handleClick(props.number) }, props.option)));


}

//The component containing all the answers
function Answers(props) {
    var style = {
        paddingLeft: 0,
        listStyleType: "none"
    };

    var answers = [];
    for (let i = 0; i < 4; i++) {
        answers.push( /*#__PURE__*/ React.createElement(Answer, { key: i, number: i + 1, option: props.options[i], handleClick: props.handleClick }));
    }
    return /*#__PURE__*/ React.createElement("ul", { style: style }, answers);
}

//One line of score display (correct or wrong)
function ScoreDisplay(props) {
    return /*#__PURE__*/ (
        React.createElement("h3", null,
            props.name, " Réponses : ", /*#__PURE__*/ React.createElement("span", { className: props.color }, props.score)));


}

//The main app 
class Quizz extends React.Component {
    constructor(props) {
            super(props);
            this.state = { index: 0, correct: 0, incorrect: 0 };
            this.handleClick = this.handleClick.bind(this);
        }
        //function depending on the line clicked
    handleClick(number) {
            if (number === this.props.data[this.state.index].answer) {
                this.setState({ index: this.state.index + 1, correct: this.state.correct + 1 });
            } else {
                this.setState({ index: this.state.index + 1, incorrect: this.state.incorrect + 1 });
            }
        }
        //function used to reset the game
    restart() {
        this.setState({ index: 0, correct: 0, incorrect: 0 });
    }

    render() {
        //boolean that tells if we reached the end of the game
        let end = this.props.data.length === this.state.index;

        //show the question and answers only if we did not reach the end, the restart button otherwise, the score is always displayed
        return /*#__PURE__*/ (
            React.createElement("div", null, !end && /*#__PURE__*/ React.createElement(Question, { question: this.props.data[this.state.index].question }), !end && /*#__PURE__*/ React.createElement(Answers, { options: this.props.data[this.state.index].options, handleClick: this.handleClick }), /*#__PURE__*/
                React.createElement(ScoreDisplay, { name: "Bonnes", score: this.state.correct, color: "Bonnes" }), /*#__PURE__*/
                React.createElement(ScoreDisplay, { name: "Mauvaises", score: this.state.incorrect, color: "Mauvaises" }),
                end && (
                    /*#__PURE__*/
                    React.createElement("div", null,
                        /*#__PURE__*/
                        React.createElement("button", { id: "Recommencer", onClick: () => this.restart() }, "Recommencer"),
                        /*#__PURE__*/
                        React.createElement("button", { id: "bouton-valider", onClick: () => afficherPageSuivante() }, "Se sensibiliser")
                    )
                )
            ))



    }
}


ReactDOM.render( /*#__PURE__*/ React.createElement(Quizz, { data: quizzData }), document.getElementById("root"));
