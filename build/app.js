class Game {
    constructor(canvasId) {
        this.loop = () => {
            if (this.currentScreen == 'levelScreen') {
                requestAnimationFrame(this.loop);
                this.writeTextToSpeechBubble();
                this.frameCounter++;
            }
        };
        this.mouseHandler = (event) => {
            console.log(`xPos ${event.clientX}, yPos ${event.clientY}`);
            if (event.clientX >= 12 && event.clientX < 948 && event.clientY >= 612 && event.clientY <= 827 && this.currentScreen === "levelScreen") {
                if (this.dialogue[this.currentSet].a1 != '') {
                    this.setId = this.dialogue[this.currentSet].a1id;
                    this.score += this.dialogue[this.currentSet].a1Score;
                    this.progressDialogue();
                }
                ;
            }
            ;
            if (event.clientX >= 972 && event.clientX < 1907 && event.clientY >= 612 && event.clientY <= 827 && this.currentScreen === "levelScreen") {
                if (this.dialogue[this.currentSet].a2 != '') {
                    this.setId = this.dialogue[this.currentSet].a2id;
                    this.score += this.dialogue[this.currentSet].a2Score;
                    this.progressDialogue();
                }
                ;
            }
            ;
            if (event.clientX >= 12 && event.clientX < 948 && event.clientY >= 851 && event.clientY <= 1067 && this.currentScreen === "levelScreen") {
                if (this.dialogue[this.currentSet].a3 != '') {
                    this.setId = this.dialogue[this.currentSet].a3id;
                    this.score += this.dialogue[this.currentSet].a3Score;
                    this.progressDialogue();
                }
                ;
            }
            ;
            if (event.clientX >= 972 && event.clientX < 1907 && event.clientY >= 851 && event.clientY <= 1067 && this.currentScreen === "levelScreen") {
                if (this.dialogue[this.currentSet].a4 != '') {
                    this.setId = this.dialogue[this.currentSet].a4id;
                    this.score += this.dialogue[this.currentSet].a4Score;
                    this.progressDialogue();
                }
                ;
            }
            ;
            if (event.clientX >= 674 && event.clientX < 1235 && event.clientY >= 562 && event.clientY <= 666 && this.currentScreen === "titleScreen") {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.levelScreen();
            }
            ;
        };
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext("2d");
        document.addEventListener("click", this.mouseHandler);
        this.dialogue = {
            set1: {
                id: 1,
                q1: 'Hey, mijn naam is Ad, \nhoe gaat het met je?',
                a1: 'A) Met mij gaat alles goed, met jou?',
                a1id: 2,
                a1Score: 0,
                a2: '',
                a3: '',
                a4: '',
            },
            set2: {
                id: 2,
                q1: 'Hoe heet je?',
                a1: 'A) Mijn naam is ...',
                a1id: 3,
                a1Score: 0,
                a2: '',
                a3: '',
                a4: '',
            },
            set3: {
                id: 3,
                q1: 'Aangenaam kennis te maken',
                a1: 'A) Vind ik ook',
                a1Score: 0,
                a1id: 4,
                a2: 'B) Insgelijks ',
                a2Score: 0,
                a2id: 4,
                a3: '',
                a4: '',
            },
            set4: {
                id: 4,
                q1: 'Die naam komt me bekend voor, \nken ik jou ergens van?',
                a1: 'A) Waarschijnlijk niet',
                a1Score: 0,
                a1id: 5,
                a2: 'B) Zou je me kunnen vertellen waarvan?',
                a2Score: 1000,
                a2id: 5,
                a3: 'C) Ik ken niemand die Ad heet',
                a3Score: 100,
                a3id: 5,
                a4: 'D) Dat zou best kunnen',
                a4Score: 0,
                a4id: 6,
            },
            set5: {
                index: 5,
                q1: 'Ik ken je van school',
                a1: 'A) Op welke school zit ik dan?',
                a1Score: 1000,
                a1id: 6,
                a2: 'B) Ik heb jouw naam echt nog nooit gehoord',
                a2Score: 100,
                a2id: 6,
                a3: 'C) Dat zou goed kunnen',
                a3Score: 0,
                a3id: 6,
                a4: ''
            },
            set6: {
                q1: 'Jij zit toch op de regenboog?',
                a1: 'A) Hoe ben je daar achter gekomen?',
                a1Score: 1000,
                a1id: 7,
                a2: 'B) Dat Klopt',
                a2Score: 0,
                a2id: 7,
                a3: '',
                a4: '',
            },
            set7: {
                q1: 'Dat hoorde ik van een vriend van je',
                a1: 'A) Dat kan best',
                a1Score: 0,
                a1id: 8,
                a2: '',
                a3: '',
                a4: '',
            },
            set8: {
                q1: 'Wat doe je graag in je vrije tijd?',
                a1: 'A) Tekenen',
                a1Score: 0,
                a1id: 9,
                a2: 'B) Sporten',
                a2Score: 0,
                a2id: 10,
                a3: 'C) Gamen',
                a3Score: 0,
                a3id: 11,
                a4: 'D) Koken',
                a4Score: 0,
                a4id: 12,
            },
            set9: {
                q1: 'Oh leuk, ik hou ook van tekenen',
                a1: 'A) Leuk',
                a1Score: 0,
                a1id: 13,
                a2: 'B) Dat is toevallig',
                a2Score: 1000,
                a2id: 13,
                a3: '',
                a4: '',
            },
            set10: {
                q1: 'Oh leuk, ik sport ook graag',
                a1: 'A) Aan welke sport doe je dan?',
                a1Score: 100,
                a1id: 14,
                a2: 'B) Leuk',
                a2Score: 0,
                a2id: 13,
                a3: 'C) Dat is toevallig',
                a3Score: 100,
                a3id: 13,
                a4: '',
            },
            set11: {
                q1: 'Oh leuk, ik game ook graag, \nvooral Fortnite',
                a1: 'A) Leuk',
                a1Score: 0,
                a1id: 13,
                a2: 'B) Dat is toevallig',
                a2Score: 100,
                a2id: 13,
                a3: 'C) Hoeveel kills heb je dan?',
                a3Score: 100,
                a3id: 15,
                a4: '',
            },
            set12: {
                q1: 'Daar ben je vast heel goed in',
                a1: 'A) Zeker',
                a1Score: 0,
                a1id: 13,
                a2: 'B) Ja',
                a2Score: 0,
                a2id: 13,
                a3: '',
                a4: '',
            },
            set13: {
                q1: 'We hebben best veel gemeen, \nwil je eens afspreken?',
                a1: 'A) Graag',
                a1Score: 0,
                a1id: 17,
                a2: 'B) Tuurlijk',
                a2Score: 0,
                a2id: 17,
                a3: 'C) Liever niet',
                a3Score: 1000,
                a3id: 18,
                a4: 'D) Ik ken je nauwelijks',
                a4Score: 1000,
                a4id: 18,
            },
            set14: {
                q1: 'Cricket',
                a1: 'A) Leuk',
                a1Score: 0,
                a1id: 13,
                a2: 'B) Daar heb ik nog nooit van gehoord',
                a2Score: 0,
                a2id: 16,
                a3: '',
                a4: ''
            },
            set15: {
                q1: '10.000',
                a1: 'A) Zo, dat is veel',
                a1Score: 0,
                a1id: 13,
                a2: '',
                a3: '',
                a4: ''
            },
            set16: {
                q1: 'Zoek het maar eens op',
                a1: 'A) Laat maar zitten',
                a1Score: 0,
                a1id: 13,
                a2: '',
                a3: '',
                a4: ''
            },
            set17: {
                q1: 'Bij mij thuis?',
                a1: 'A) Helemaal prima, wat is je adres?',
                a1Score: 0,
                a1id: 19,
                a2: 'B) Liever niet',
                a2Score: 1000,
                a2id: 18,
                a3: '',
                a4: ''
            },
            set18: {
                q1: 'Er kan toch niks misgaan',
                a1: 'A) Mij is altijd verteld dat ik niet mag afspreken met vreemdelingen',
                a1Score: 1000,
                a1id: 30,
                a2: '',
                a3: '',
                a4: ''
            },
            set19: {
                q1: 'Waldammeweg 120',
                a1: 'A) Ok, ik kom eraan',
                a1Score: 0,
                a1id: 30,
                a2: 'B) Eerst even aan mijn ouders vragen.',
                a2Score: 1000,
                a2id: 18,
                a3: '',
                a4: ''
            },
            set30: {
                q1: '',
                a1: '',
                a2: '',
                a3: '',
                a4: ''
            }
        };
        this.score = 0;
        this.setId = 1;
        this.currentSet = 'set' + this.setId.toString();
        this.questionInfo = {
            xPos: 1075,
            yPos: 60
        };
        this.answerInfo = {
            A: {
                xPos: 44,
                yPos: 641
            },
            B: {
                xPos: 1010,
                yPos: 641
            },
            C: {
                xPos: 44,
                yPos: 885
            },
            D: {
                xPos: 1010,
                yPos: 885
            }
        };
        this.array = [];
        this.frameCounter = 0;
        this.adDialogue = this.dialogue.set1.q1;
        this.joined = "";
        this.inLoop = false;
        this.currentScreen = "titleScreen";
        this.titleScreen();
    }
    ;
    writeTextToSpeechBubble() {
        if (this.frameCounter < this.adDialogue.length) {
            this.joined += (this.adDialogue[this.frameCounter]);
        }
        ;
        let lineheight = 40;
        let lines = this.joined.split('\n');
        for (let i = 0; i < lines.length; i++) {
            this.writeTextToCanvas(lines[i], 30, this.questionInfo.xPos, this.questionInfo.yPos + (i * lineheight), 'start', "rgb(69,66,63)");
            if (this.frameCounter > 0 && this.frameCounter < 10 || this.frameCounter > 20 && this.frameCounter < 30 || this.frameCounter > 40 && this.frameCounter < 50) {
                const characterImageOpenMouth = "./assets/images/miniAd2Mouth.png";
                this.loadImage(characterImageOpenMouth, this.characterPosition);
            }
            else {
                const characterImage = "./assets/images/miniAd2.png";
                this.loadImage(characterImage, this.characterPosition);
            }
        }
        ;
    }
    ;
    titleScreen() {
        const Button = "./assets/images/button.png";
        this.loadImage(Button, this.writeButtonToStartScreen);
        this.writeTextToCanvas("Meeting old", 140, this.canvas.width / 2, 175);
        this.writeTextToCanvas("\"friends\"", 140, this.canvas.width / 2, 300);
        this.currentScreen = "titleScreen";
    }
    ;
    levelScreen() {
        const characterImage = "./assets/images/miniAd2.png";
        this.loadImage(characterImage, this.characterPosition);
        const speechBubble = "./assets/images/speechBubble.png";
        this.loadImage(speechBubble, this.speechBubblePosition);
        const choiceBox = "./assets/images/choiceBox.png";
        this.loadImage(choiceBox, this.choiceBoxPosition);
        this.currentScreen = "levelScreen";
        if (this.inLoop == false) {
            this.loop();
            this.inLoop = true;
        }
    }
    ;
    scoreScreen() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.writeTextToCanvas(`Je score is ${this.score}`, 140, this.canvas.width / 2, 175);
        this.currentScreen = "scoreScreen";
    }
    progressDialogue() {
        if (this.setId != 30) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.levelScreen();
            this.joined = '';
            this.currentSet = 'set' + this.setId;
            this.adDialogue = this.dialogue[this.currentSet].q1;
            this.loadAnswers();
            this.frameCounter = 0;
        }
        else {
            this.scoreScreen();
        }
    }
    ;
    loadAnswers() {
        this.writeTextToCanvas(this.dialogue[this.currentSet].a1, 20, this.answerInfo.A.xPos, this.answerInfo.A.yPos, "start", "black");
        this.writeTextToCanvas(this.dialogue[this.currentSet].a2, 20, this.answerInfo.B.xPos, this.answerInfo.B.yPos, "start", "black");
        this.writeTextToCanvas(this.dialogue[this.currentSet].a3, this.answerInfo.C.fontSize, this.answerInfo.C.xPos, this.answerInfo.C.yPos, "start", "black");
        this.writeTextToCanvas(this.dialogue[this.currentSet].a4, 20, this.answerInfo.D.xPos, this.answerInfo.D.yPos, "start", "black");
    }
    ;
    choiceBoxPosition(img) {
        const x = this.canvas.width / 2;
        const y = this.canvas.height / 2;
        this.ctx.drawImage(img, x - img.width / 2, y - 540);
        this.loadAnswers();
    }
    ;
    writeButtonToStartScreen(img) {
        const x = this.canvas.width / 2;
        const y = this.canvas.height - 1000;
        this.ctx.drawImage(img, x - img.width / 2, y);
        this.writeTextToCanvas("Play", 70, x, y + 550, "center", "rgb(69,66,63)");
    }
    ;
    characterPosition(img) {
        const x = this.canvas.width / 2 - 100;
        const y = this.canvas.height / 2 - 768;
        this.ctx.drawImage(img, (x - img.width / 2), y);
    }
    ;
    speechBubblePosition(img) {
        const x = this.canvas.width / 2;
        const y = this.canvas.height / 2;
        this.ctx.drawImage(img, x + 70, y - 533);
    }
    ;
    writeTextToCanvas(text, fontSize = 20, xCoordinate, yCoordinate, alignment = "center", color = "white") {
        this.ctx.font = `${fontSize}px Undertale`;
        this.ctx.fillStyle = color;
        this.ctx.textAlign = alignment;
        this.ctx.fillText(text, xCoordinate, yCoordinate);
    }
    ;
    loadImage(source, callback) {
        const imageElement = new Image();
        imageElement.addEventListener("load", () => {
            callback.apply(this, [imageElement]);
        });
        imageElement.src = source;
    }
    ;
}
;
let init = function () {
    const meetingnewfriends = new Game(document.getElementById("canvas"));
};
window.addEventListener("load", init);
//# sourceMappingURL=app.js.map