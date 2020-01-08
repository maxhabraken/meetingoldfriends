class Game {
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    public frameCounter: number;
    public array: string[];
    public adDialogue: string;
    public joined: string;
    public currentScreen: any;
    public dialogue: any;
    public answerInfo: any;
    public questionInfo: any;
    public currentSetNumber: number;
    public currentSet: string;

    public constructor(canvasId: HTMLCanvasElement) {
        // Construct all of the canvas
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        // Set the context of the canvas
        this.ctx = this.canvas.getContext("2d");
        document.addEventListener("click", this.mouseHandler);


        this.dialogue = {
            set1: {
                q1: 'Hey, mijn naam is Ad, hoe gaat het met je?',
                a1: 'A) Met mij gaat alles goed, met jou?',
                a2: '',
                a3: '',
                a4: '',
            },
            set2: {
                q1: 'Hoe heet je?',
                a1: 'A) Mijn naam is ...',
                a2: '',
                a3: '',
                a4: '',
            },
            set3: {
                q1: 'Aangenaam kennis te maken',
                a1: '...',
                a2: '',
                a3: '',
                a4: '',
            },
            set4: {
                q1: 'Die naam komt me bekend voor, \nken ik jou ergens van?',
                a1: 'A) Waarschijnlijk niet',
                a2: 'B) Zou je me kunnen vertellen waarvan?',
                a3: 'C) Ik ken niemand die Ad heet.',
                a4: ''
            },
            set5: {
                q1: 'Ik ken je van school',
                a1: 'A) Op welke school zit ik dan?',
                a2: 'B) Ik heb die naam echt nog nooit gehoord',
                a3: 'C) Zou goed kunnen',
                a4: ''
            },
            set6: {
                q1: 'Jij zit toch op de regenboog?',
                a1: 'A) Hoe ben je daar achter gekomen?',
                a2: 'B) Dat Klopt',
                a3: '',
                a4: '',
            },
            set7: {
                q1: 'Dat hoorde ik van een vriend van je',
                a1: '...',
                a2: '',
                a3: '',
                a4: '',
            },
            set8: {
                q1: 'Wat doe je graag in je vrije tijd?',
                a1: 'A) Tekenen',
                a2: 'B) Sporten',
                a3: 'C) Gamen',
                a4: 'D) Koken',
            },
            set9: {
                q1: 'Oh leuk daar hou ik ook van!',
                a1: '...',
                a2: '',
                a3: '',
                a4: '',
            },
            set10: {
                q1: 'Daar ben je vast heel goed in',
                a1: '...',
                a2: '',
                a3: '',
                a4: '',
            },
        };

        this.currentSetNumber = 1;
        this.currentSet = 'set' + this.currentSetNumber.toString();

        console.log(this.dialogue[this.currentSet].q1)



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
        this.joined = ""


        // allows methods to check which screen the game is on
        this.currentScreen = "titleScreen";

        // allows you to write screens to the canvas
        this.titleScreen();
        // this.levelScreen();
        // this.loop();
    };

    public loop = () => {
        requestAnimationFrame(this.loop);

        if (this.frameCounter < this.adDialogue.length) {
            this.joined += (this.adDialogue[this.frameCounter])

        };
        this.writeTextToSpeechBubble();
        this.frameCounter++;

    };

    //draws startscreen
    public titleScreen() {
        //loads and draws images to canvas
        const Button = "./assets/images/button.png";
        this.loadImage(Button, this.writeButtonToStartScreen);
        //writes text to canvas
        this.writeTextToCanvas("Meeting old", 140, this.canvas.width / 2, 175);
        this.writeTextToCanvas("\"friends\"", 140, this.canvas.width / 2, 300);

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
        this.loop();
    };

    // verifies whether or not the choicebox is empty, if not the story progresses.
    public progressDialogue() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.levelScreen();
        this.currentSetNumber++;
        this.frameCounter = 0;
        this.currentSet = 'set' + this.currentSetNumber;
        this.joined = '';
        this.adDialogue = this.dialogue[this.currentSet].q1;
        this.loadAnswers();
    };

    private mouseHandler = (event: MouseEvent) => {
        //logs the coordinates of the position where the screen is clicked
        console.log(`xPos ${event.clientX}, yPos ${event.clientY}`);
        //hitbox of choiceBox 1
        if (event.clientX >= 12 && event.clientX < 948 && event.clientY >= 612 && event.clientY <= 827 && this.currentScreen === "levelScreen") {
            if (this.dialogue[this.currentSet].a1 != '') {
                this.progressDialogue();
            };
        };
        //hitbox of choiceBox 2
        if (event.clientX >= 972 && event.clientX < 1907 && event.clientY >= 612 && event.clientY <= 827 && this.currentScreen === "levelScreen") {
            if (this.dialogue[this.currentSet].a2 != '') {
                this.progressDialogue();
            };
        };
        //hitbox of choiceBox 3
        if (event.clientX >= 12 && event.clientX < 948 && event.clientY >= 851 && event.clientY <= 1067 && this.currentScreen === "levelScreen") {
            if (this.dialogue[this.currentSet].a3 != '') {
                this.progressDialogue();
            };
        };
        //hitbox of choiceBox 4
        if (event.clientX >= 972 && event.clientX < 1907 && event.clientY >= 851 && event.clientY <= 1067 && this.currentScreen === "levelScreen") {
            if (this.dialogue[this.currentSet].a4 != '') {
                this.progressDialogue();
            };
        };

        //hitbox of button
        if (event.clientX >= 674 && event.clientX < 1235 && event.clientY >= 562 && event.clientY <= 666 && this.currentScreen === "titleScreen") {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.levelScreen();
        };
    };



    //decides the positions of all the elements on the canvas
    private choiceBoxPosition(img: HTMLImageElement) {
        const x = this.canvas.width / 2;
        const y = this.canvas.height / 2;
        this.ctx.drawImage(img, x - img.width / 2, y - 540);
        this.loadAnswers();
    };

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

    public writeTextToSpeechBubble() {
        let lineheight = 40; //the height of a line for the sentence

        // use \n as a delimiter (you can choose any delimter), the split function uses this delimiter to cut the string into two strings
        // lines is an array with all the strings
        let lines = this.joined.split('\n');

        // loop over all the strings and write each string a number of lineheights under eacht oter 
        for (let i = 0; i < lines.length; i++) {
            this.writeTextToCanvas(lines[i], 30, this.questionInfo.xPos, this.questionInfo.yPos + (i * lineheight), 'start', "rgb(69,66,63)");
        };
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