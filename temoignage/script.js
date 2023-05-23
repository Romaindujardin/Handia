// Stores used quotes in empty array
var unqiue_quotes = [];

// Different Quotes array
var quotes = [{
        quote: "J'ai confiance en mon entourage et le cadre enseignant pour obtenir du soutien.",
        source: 'Etudiante',
        citation: 'Junia',
        category: '2023'
    },
    {
        quote: 'Je,suis épanouis malgré les défis de la dyslexie.',
        source: 'Etudiante',
        citation: 'Junia',
        category: '2023'
    },
    {
        quote: 'Je surmonte les obstacles et réussis mes études.',
        source: 'Etudiante',
        citation: 'Junia',
        category: '2023'
    },
    {
        quote: 'Je reconnais la dyslexie comme une force et développe ma persévérance et ma résilience.',
        source: 'Etudiante',
        citation: 'Junia',
        category: '2023'
    },
    {
        quote: "J'apprends différentes techniques pour compenser mes difficultés avec l'aide des enseignants, de mes parents et de mes amis.",
        source: 'Etudiante',
        citation: 'Junia',
        category: '2023'
    },
    {
        quote: "J'utilise une police spéciale et des logiciels pour faciliter ma lecture.",
        source: 'Etudiante',
        citation: 'Junia',
        category: '2023'
    },
    {
        quote: "J'ai découvert ma dyslexie petite, mais cela ne m'a pas empêché de suivre un cursus classique et d'intégrer une école d'ingénieur.",
        source: 'Etudiante',
        citation: 'Junia',
        category: '2023'
    },
    {
        quote: "L'adaptation du corps enseignant varie, certains appliquent uniquement les aménagements, d'autres sont plus attentionnés et ouverts.",
        source: 'Etudiante',
        citation: 'Junia',
        category: '2023'
    },
    {
        quote: "J'utilise des tiers-temps, un ordinateur pour les épreuves, et des sujets agrandis pour améliorer ma visibilité.",
        source: 'Etudiante',
        citation: 'Junia',
        category: '2023'
    },
    {
        quote: "J'ai une bonne entente avec les autres élèves lorsque je les préviens de ma dyslexie.",
        source: 'Etudiante',
        citation: 'Junia',
        category: '2023'
    },
    {
        quote: 'Il est important de faire connaître la dyslexie et de sensibiliser les gens.',
        source: 'Etudiante',
        citation: 'Junia',
        category: '2023'
    },
    {
        quote: "Ma dyslexie influence mes choix, mais je considère que c'est ma force.",
        source: 'Etudiante',
        citation: 'Junia',
        category: '2023'
    },
    {
        quote: "L'adaptation du corps enseignant me permet de bien m'intégrer en classe malgré ma peur d'aller au tableau.",
        source: 'Simon',
        citation: 'Junia',
        category: '2023'
    },
    {
        quote: "J'utilise des tiers-temps et un ordinateur, sans aménagements supplémentaires, et je bénéficie des logiciels de correction d'orthographe.",
        source: 'Simon',
        citation: 'Junia',
        category: '2023'
    },
    {
        quote: 'Malgré mes difficultés à me projeter, je reste confiant et assertif au quotidien.',
        source: 'Simon',
        citation: 'Junia',
        category: '2023'
    }



];

// Generates random quote
function getRandomQuote() {
    do {
        // loops through objects
        for (var i = 0; i < quotes.length; i += 1) {
            // random number
            var randomNumber = Math.floor(Math.random() * quotes.length);
            // Checks if quote has been used
            if (unqiue_quotes.indexOf(randomNumber) === -1) {
                // Stores quotes to unqiue quotes array
                console.log(randomNumber);
                unqiue_quotes.push(randomNumber);
                return quotes[randomNumber];
            }
        }

        // resets array
        if (unqiue_quotes.length === quotes.length) {
            console.log('Resets Array!');
            unqiue_quotes = [];
        }

    } while (unqiue_quotes.length < quotes.length);
}

// Random colors


// Displays quotes
function printQuote() {

    // Change background color


    var display_quote = getRandomQuote();

    // HTML added to div ID
    var quotesHTML = '<p class="quote">' + display_quote.quote + '</p>';
    quotesHTML += '<p class="source">' + display_quote.source;

    // Show if there is a citation property
    if (display_quote.citation) {
        quotesHTML += '<span class="citation">' + display_quote.citation + '</span>';
    }

    // Show if there is a year property
    if (display_quote.year) {
        quotesHTML += '<span class="year">' + display_quote.year + '</span>';
    }

    // Close source paragraph tag
    quotesHTML += '</p>';

    // prints HTML to page
    document.getElementById('quote-box').innerHTML = quotesHTML;
}

// Changes quote automatically
var intervalID = window.setInterval(printQuote, 30000);

// Click event - Change quote on click
document.getElementById('loadQuote').addEventListener('click', printQuote, false);

function createTrackItem(index, name, duration) {
    var trackItem = document.createElement('div');
    trackItem.setAttribute("class", "playlist-track-ctn");
    trackItem.setAttribute("id", "ptc-" + index);
    trackItem.setAttribute("data-index", index);
    document.querySelector(".playlist-ctn").appendChild(trackItem);

    var playBtnItem = document.createElement('div');
    playBtnItem.setAttribute("class", "playlist-btn-play");
    playBtnItem.setAttribute("id", "pbp-" + index);
    document.querySelector("#ptc-" + index).appendChild(playBtnItem);

    var btnImg = document.createElement('i');
    btnImg.setAttribute("class", "fas fa-play");
    btnImg.setAttribute("height", "40");
    btnImg.setAttribute("width", "40");
    btnImg.setAttribute("id", "p-img-" + index);
    document.querySelector("#pbp-" + index).appendChild(btnImg);

    var trackInfoItem = document.createElement('div');
    trackInfoItem.setAttribute("class", "playlist-info-track");
    trackInfoItem.innerHTML = name
    document.querySelector("#ptc-" + index).appendChild(trackInfoItem);

    var trackDurationItem = document.createElement('div');
    trackDurationItem.setAttribute("class", "playlist-duration");
    trackDurationItem.innerHTML = duration
    document.querySelector("#ptc-" + index).appendChild(trackDurationItem);
}

var listAudio = [{
        name: "Après le collège ULIS",
        file: "../audio/Apres le college ULIS.mp4",
        duration: "00:12"
    },
    {
        name: "Ils trouveront leur voix ",
        file: "/audio/ils-trouveront-tous-leur-voix.mp4",
        duration: "00:06"
    },
    {
        name: "Progrès classe ULIS ",
        file: "../audio/Progrès classe ULIS.mp4",
        duration: "00:27"
    },
    {
        name: "Combien de temps êtes vous avec vos élèves ?",
        file: "../audio/Combien de temps êtes vous avec vos élèves -.mp4",
        duration: "00:12"
    },
    {
        name: "En quoi consiste votre rôle ?",
        file: "../audio/En quoi consiste votre rôle -.mp4",
        duration: "00:25"
    },
    {
        name: "Pourquoi être coordinatrice ULIS au lycée",
        file: "../audio/Pourquoi être coordinatrice ULIS au lycée -.mp4",
        duration: "00:21"
    },
    {
        name: "Qu'est ce que votre métier vous apporte ?",
        file: "../audio/Qu'est ce que votre métier vous apporte -.mp4",
        duration: "00:22"
    },
    {
        name: "Que pensez vous de la mise en avant du handicap ?",
        file: "../audio/Que pensez vous de la mise en avant du handicap -.mp4",
        duration: "00:12"
    },
]


for (var i = 0; i < listAudio.length; i++) {
    createTrackItem(i, listAudio[i].name, listAudio[i].duration);
}
var indexAudio = 0;

function loadNewTrack(index) {
    var player = document.querySelector('#source-audio')
    player.src = listAudio[index].file
    document.querySelector('.title').innerHTML = listAudio[index].name
    this.currentAudio = document.getElementById("myAudio");
    this.currentAudio.load()
    this.toggleAudio()
    this.updateStylePlaylist(this.indexAudio, index)
    this.indexAudio = index;
}

var playListItems = document.querySelectorAll(".playlist-track-ctn");

for (let i = 0; i < playListItems.length; i++) {
    playListItems[i].addEventListener("click", getClickedElement.bind(this));
}

function getClickedElement(event) {
    for (let i = 0; i < playListItems.length; i++) {
        if (playListItems[i] == event.target) {
            var clickedIndex = event.target.getAttribute("data-index")
            if (clickedIndex == this.indexAudio) { // alert('Same audio');
                this.toggleAudio()
            } else {
                loadNewTrack(clickedIndex);
            }
        }
    }
}

document.querySelector('#source-audio').src = listAudio[indexAudio].file
document.querySelector('.title').innerHTML = listAudio[indexAudio].name


var currentAudio = document.getElementById("myAudio");

currentAudio.load()

currentAudio.onloadedmetadata = function() {
    document.getElementsByClassName('duration')[0].innerHTML = this.getMinutes(this.currentAudio.duration)
}.bind(this);

var interval1;

function toggleAudio() {

    if (this.currentAudio.paused) {
        document.querySelector('#icon-play').style.display = 'none';
        document.querySelector('#icon-pause').style.display = 'block';
        document.querySelector('#ptc-' + this.indexAudio).classList.add("active-track");
        this.playToPause(this.indexAudio)
        this.currentAudio.play();
    } else {
        document.querySelector('#icon-play').style.display = 'block';
        document.querySelector('#icon-pause').style.display = 'none';
        this.pauseToPlay(this.indexAudio)
        this.currentAudio.pause();
    }
}

function pauseAudio() {
    this.currentAudio.pause();
    clearInterval(interval1);
}

var timer = document.getElementsByClassName('timer')[0]

var barProgress = document.getElementById("myBar");


var width = 0;

function onTimeUpdate() {
    var t = this.currentAudio.currentTime
    timer.innerHTML = this.getMinutes(t);
    this.setBarProgress();
    if (this.currentAudio.ended) {
        document.querySelector('#icon-play').style.display = 'block';
        document.querySelector('#icon-pause').style.display = 'none';
        this.pauseToPlay(this.indexAudio)
        if (this.indexAudio < listAudio.length - 1) {
            var index = parseInt(this.indexAudio) + 1
            this.loadNewTrack(index)
        }
    }
}


function setBarProgress() {
    var progress = (this.currentAudio.currentTime / this.currentAudio.duration) * 100;
    document.getElementById("myBar").style.width = progress + "%";
}


function getMinutes(t) {
    var min = parseInt(parseInt(t) / 60);
    var sec = parseInt(t % 60);
    if (sec < 10) {
        sec = "0" + sec
    }
    if (min < 10) {
        min = "0" + min
    }
    return min + ":" + sec
}

var progressbar = document.querySelector('#myProgress')
progressbar.addEventListener("click", seek.bind(this));


function seek(event) {
    var percent = event.offsetX / progressbar.offsetWidth;
    this.currentAudio.currentTime = percent * this.currentAudio.duration;
    barProgress.style.width = percent * 100 + "%";
}

function forward() {
    this.currentAudio.currentTime = this.currentAudio.currentTime + 5
    this.setBarProgress();
}

function rewind() {
    this.currentAudio.currentTime = this.currentAudio.currentTime - 5
    this.setBarProgress();
}


function next() {
    if (this.indexAudio < listAudio.length - 1) {
        var oldIndex = this.indexAudio
        this.indexAudio++;
        updateStylePlaylist(oldIndex, this.indexAudio)
        this.loadNewTrack(this.indexAudio);
    }
}

function previous() {
    if (this.indexAudio > 0) {
        var oldIndex = this.indexAudio
        this.indexAudio--;
        updateStylePlaylist(oldIndex, this.indexAudio)
        this.loadNewTrack(this.indexAudio);
    }
}

function updateStylePlaylist(oldIndex, newIndex) {
    document.querySelector('#ptc-' + oldIndex).classList.remove("active-track");
    this.pauseToPlay(oldIndex);
    document.querySelector('#ptc-' + newIndex).classList.add("active-track");
    this.playToPause(newIndex)
}

function playToPause(index) {
    var ele = document.querySelector('#p-img-' + index)
    ele.classList.remove("fa-play");
    ele.classList.add("fa-pause");
}

function pauseToPlay(index) {
    var ele = document.querySelector('#p-img-' + index)
    ele.classList.remove("fa-pause");
    ele.classList.add("fa-play");
}


function toggleMute() {
    var btnMute = document.querySelector('#toggleMute');
    var volUp = document.querySelector('#icon-vol-up');
    var volMute = document.querySelector('#icon-vol-mute');
    if (this.currentAudio.muted == false) {
        this.currentAudio.muted = true
        volUp.style.display = "none"
        volMute.style.display = "block"
    } else {
        this.currentAudio.muted = false
        volMute.style.display = "none"
        volUp.style.display = "block"
    }
}
