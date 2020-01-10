// OOP project 2019 / 2020
// made by maxhabraken, VadimSchmitz and wongus
class Game {
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    public frameCounter: number;
    public array: string[];
    public adDialogue: string;
    public joined: string;
    public currentScreen: string;
    public dialogue: any;
    public answerInfo: any;
    public questionInfo: any;
    public setId: number;
    public currentSet: string;
    public score: number;
    public inLoop: boolean;



    public constructor(canvasId: HTMLCanvasElement) {
        // Construct all of the canvas
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        // Set the context of the canvas
        this.ctx = this.canvas.getContext("2d");
        document.addEventListener("click", this.mouseHandler);


        this.dialogue = {
            // linear part of the story
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
                a3: 'C) Dankje',
                a3Score: 0,
                a3id: 4,
                a4: 'D) Ja',
                a4Score: 100,
                a4id: 4
            },
            set4: {
                id: 4,
                q1: 'Die naam komt me bekend voor, \nken ik jou ergens van?',
                a1: 'A) Waarschijnlijk niet',
                a1Score: 0,
                a1id: 5,
                a2: 'B) Zou je me kunnen vertellen waarvan?',
                a2Score: 0,
                a2id: 5,
                a3: 'C) Ik ken niemand die Ad heet.',
                a3Score: 0,
                a3id: 5,
                a4: ''
            },
            set5: {
                index: 5,
                q1: 'Ik ken je van school',
                a1: 'A) Op welke school zit ik dan?',
                a1Score: 0,
                a1id: 6,
                a2: 'B) Ik heb die naam echt nog nooit gehoord',
                a2Score: 0,
                a2id: 6,
                a3: 'C) Zou goed kunnen',
                a3Score: 0,
                a3id: 6,
                a4: ''
            },
            set6: {
                q1: 'Jij zit toch op de regenboog?',
                a1: 'A) Hoe ben je daar achter gekomen?',
                a1Score: 0,
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
                a2Score: 100,
                a2id: 13,
                a3: '',
                a4: '',
            },
            set10: {
                q1: 'Oh leuk, ik sport ook graag',
                a1: 'A) Aan welke sport doe je dan?',
                a1Score: 0,
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
                a3Score: 100,
                a3id: 18,
                a4: 'D) Ik ken je nauwelijks',
                a4Score: 100,
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
                a1Score: 100,
                a1id: 13,
                a2: '',
                a3: '',
                a4: ''
            },
            set16: {
                q1: 'Zoek het op dan',
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
                a2Score: 100,
                a2id: 18,
                a3: '',
                a4: ''
            },
            set18: {
                q1: 'Er kan toch niks misgaan',
                a1: 'A) Mij is altijd verteld dat ik niet mag afspreken met vreemdelingen',
                a1Score: 100,
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
                a2Score: 0,
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
        this.adDialogue = this.dialogue.set1.q1
        this.joined = "";
        this.inLoop = false;


        // allows methods to check which screen the game is on
        this.currentScreen = "titleScreen";

        // allows you to write screens to the canvas
        this.titleScreen();
        // this.levelScreen();
        // this.loop();
    };

    public loop = () => {
        if (this.currentScreen == 'levelScreen') {
            requestAnimationFrame(this.loop);
        this.writeTextToSpeechBubble();
        this.frameCounter++;
        }
    };
    //animates the text in the speechbubble
    public writeTextToSpeechBubble() {
        if (this.frameCounter < this.adDialogue.length) {
            this.joined += (this.adDialogue[this.frameCounter]);
        };

        let lineheight = 40; //the height of a line for the sentence

        // use \n as a delimiter (you can choose any delimter), the split function uses this delimiter to cut the string into two strings
        // lines is an array with all the strings
        let lines = this.joined.split('\n');

        // loop over all the strings and write each string a number of lineheights under eacht oter 
        for (let i = 0; i < lines.length; i++) {
            this.writeTextToCanvas(lines[i], 30, this.questionInfo.xPos, this.questionInfo.yPos + (i * lineheight), 'start', "rgb(69,66,63)");

            if (this.frameCounter > 0 && this.frameCounter < 10 || this.frameCounter > 20 && this.frameCounter < 30 || this.frameCounter > 40 && this.frameCounter < 50) {
                const characterImageOpenMouth = "./assets/images/miniAd2Mouth.png"
                this.loadImage(characterImageOpenMouth, this.characterPosition);
            } else {
                const characterImage = "./assets/images/miniAd2.png";
                this.loadImage(characterImage, this.characterPosition);
            }
        };
    };

    //draws startscreen
    public titleScreen() {
        //loads and draws images to canvas
        const Button = "./assets/images/button.png";
        this.loadImage(Button, this.writeButtonToStartScreen);
        //writes text to canvas
        this.writeTextToCanvas("Meeting old", 140, this.canvas.width / 2, 175);
        this.writeTextToCanvas("\"friends\"", 140, this.canvas.width / 2, 300);
        //changes currentScreen to the correct screen
        this.currentScreen = "titleScreen";
    };

    //draws levelScreen
    public levelScreen() {
        //loads and draws images to canvas
        const characterImage = "./assets/images/miniAd2.png";
        this.loadImage(characterImage, this.characterPosition);
        const speechBubble = "./assets/images/speechBubble.png";
        this.loadImage(speechBubble, this.speechBubblePosition);
        const choiceBox = "./assets/images/choiceBox.png";
        this.loadImage(choiceBox, this.choiceBoxPosition);
        this.currentScreen = "levelScreen";
        //runs the loop that contains the animation for the scrolling text and the mouth movement
        if (this.inLoop == false) {
            this.loop();
            this.inLoop = true;
        }
    };

    public scoreScreen() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.writeTextToCanvas(`Je score is ${this.score}`, 140, this.canvas.width / 2, 175);
        this.currentScreen = "scoreScreen";
    }

    //loads all the assets and text based on what the setnumber is
    public progressDialogue() {
        if (this.setId != 30) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.levelScreen();
            this.joined = '';
            this.currentSet = 'set' + this.setId;
            this.adDialogue = this.dialogue[this.currentSet].q1;
            this.loadAnswers();
            this.frameCounter = 0;
        } else {
            this.scoreScreen();
        }
    };

    private mouseHandler = (event: MouseEvent) => {
        //logs the coordinates of the position where the screen is clicked
        console.log(`xPos ${event.clientX}, yPos ${event.clientY}`);
        //hitbox of choiceBox 1
        if (event.clientX >= 12 && event.clientX < 948 && event.clientY >= 612 && event.clientY <= 827 && this.currentScreen === "levelScreen") {
            if (this.dialogue[this.currentSet].a1 != '') {
                this.setId = this.dialogue[this.currentSet].a1id;
                this.score += this.dialogue[this.currentSet].a1Score;
                this.progressDialogue();
            };
        };
        //hitbox of choiceBox 2
        if (event.clientX >= 972 && event.clientX < 1907 && event.clientY >= 612 && event.clientY <= 827 && this.currentScreen === "levelScreen") {
            if (this.dialogue[this.currentSet].a2 != '') {
                this.setId = this.dialogue[this.currentSet].a2id;
                this.score += this.dialogue[this.currentSet].a2Score;
                this.progressDialogue();
            };
        };
        //hitbox of choiceBox 3
        if (event.clientX >= 12 && event.clientX < 948 && event.clientY >= 851 && event.clientY <= 1067 && this.currentScreen === "levelScreen") {
            if (this.dialogue[this.currentSet].a3 != '') {
                this.setId = this.dialogue[this.currentSet].a3id;
                this.score += this.dialogue[this.currentSet].a3Score;
                this.progressDialogue();
            };
        };
        //hitbox of choiceBox 4
        if (event.clientX >= 972 && event.clientX < 1907 && event.clientY >= 851 && event.clientY <= 1067 && this.currentScreen === "levelScreen") {
            if (this.dialogue[this.currentSet].a4 != '') {
                this.setId = this.dialogue[this.currentSet].a4id;
                this.score += this.dialogue[this.currentSet].a4Score;
                this.progressDialogue();
            };
        };
        //hitbox for startbutton in the titlescreen, draws the levelscreen once it is clicked
        if (event.clientX >= 674 && event.clientX < 1235 && event.clientY >= 562 && event.clientY <= 666 && this.currentScreen === "titleScreen") {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.levelScreen();
        };
    };

    //loads the correct answers based on the set number
    private loadAnswers() {
        // write the first answer to the choiceBox
        this.writeTextToCanvas(this.dialogue[this.currentSet].a1, 20, this.answerInfo.A.xPos, this.answerInfo.A.yPos, "start", "black");
        // write the seconds answer to the choiceBox
        this.writeTextToCanvas(this.dialogue[this.currentSet].a2, 20, this.answerInfo.B.xPos, this.answerInfo.B.yPos, "start", "black");
        // write the third answer to the choiceBox
        this.writeTextToCanvas(this.dialogue[this.currentSet].a3, this.answerInfo.C.fontSize, this.answerInfo.C.xPos, this.answerInfo.C.yPos, "start", "black");
        // write the fourth answer to the choiceBox
        this.writeTextToCanvas(this.dialogue[this.currentSet].a4, 20, this.answerInfo.D.xPos, this.answerInfo.D.yPos, "start", "black");
    };

    //decides the positions of all the elements on the canvas
    private choiceBoxPosition(img: HTMLImageElement) {
        const x = this.canvas.width / 2;
        const y = this.canvas.height / 2;
        this.ctx.drawImage(img, x - img.width / 2, y - 540);
        this.loadAnswers();
    };

    private writeButtonToStartScreen(img: HTMLImageElement) {
        const x = this.canvas.width / 2;
        const y = this.canvas.height - 1000;
        this.ctx.drawImage(img, x - img.width / 2, y);
        this.writeTextToCanvas("Play", 70, x, y + 550, "center", "rgb(69,66,63)");
    };

    private characterPosition(img: HTMLImageElement) {
        const x = this.canvas.width / 2 - 100;
        const y = this.canvas.height / 2 - 768;
        this.ctx.drawImage(img, (x - img.width / 2), y);
    };

    private speechBubblePosition(img: HTMLImageElement) {
        const x = this.canvas.width / 2;
        const y = this.canvas.height / 2;
        this.ctx.drawImage(img, x + 70, y - 533);
    };

    /**
     * Writes text to the canvas
     * @param {string} text - Text to write
     * @param {number} fontSize - Font size in pixels
     * @param {number} xCoordinate - Horizontal coordinate in pixels
     * @param {number} yCoordinate - Vertical coordinate in pixels
     * @param {string} alignment - Where to align the text
     * @param {string} color - The color of the text
     */
    public writeTextToCanvas(
        text: string,
        fontSize: number = 20,
        xCoordinate: number,
        yCoordinate: number,
        alignment: CanvasTextAlign = "center",
        color: string = "white",
    ) {
        this.ctx.font = `${fontSize}px Undertale`;
        this.ctx.fillStyle = color;
        this.ctx.textAlign = alignment;
        this.ctx.fillText(text, xCoordinate, yCoordinate);
    };

    /**
     * Loads an image file into the DOM and writes it to the canvas. After the
     * image is loaded and ready to be drawn to the canvas, the specified
     * callback method will be invoked. the method will be called with the
     * loaded imageElement as a parameter.
     *
     * The callback method MUST be a method of this class with a header like:
     *
     *   private yourMethodNameHere(img: HTMLImageElement)
     *
     * In the body of that callback you can draw the image to the canvas
     * context like:
     *
     *   this.ctx.drawImage(img, someX, someY);
     *
     * This is the simplest way to draw images, because the browser must and
     * shall wait until the image is completely loaded into memory.
     *
     * @param {string} source - the name of the image file
     * @param {Function} callback - method that is invoked after the image is loaded
     */
    private loadImage(source: string, callback: Function) {
        const imageElement = new Image();

        // We must wait until the image file is loaded into the element
        // We add an event listener
        // We'll be using an arrow function for this, just because we must.
        imageElement.addEventListener("load", () => {
            callback.apply(this, [imageElement]);
        });

        // Now, set the src to start loading the image
        imageElement.src = source;
    };
};

// This will get an HTML element. I cast this element in de appropriate type using <>
let init = function () {
    const meetingnewfriends = new Game(document.getElementById("canvas") as HTMLCanvasElement);
};

// Add EventListener to load the game whenever the browser is ready
window.addEventListener("load", init);