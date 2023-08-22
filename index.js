// MODEL ////////////////////////////////////////////////////////////////////////////////////
let word1 = '____';
let word2 = '____';
let word3 = '____';
let word4 = '____';



// VIEW /////////////////////////////////////////////////////////////////////////////////////
updateView()

function updateView() {
    
    let html = /*HTML*/`
        <div>
            <p>
                Once there was a
                <span id="word1">${word1}</span>
                <span id="word2">${word2}</span>
                that
                <span id="word3">${word3}</span>
                into the
                <span id="word4">${word4}</span><br><br>
                - and great things happened. The End.
            </p>
        </div>
        <div>
            <div>
                <button onclick="chooseWord1('green')">Green</button>
                <button onclick="chooseWord1('red')">Red</button>
            </div>
            <div>
                <button onclick="chooseWord2('cat')">Cat</button>
                <button onclick="chooseWord2('man')">Man</button>
            </div>
            <div>
                <button onclick="chooseWord3('stared')">Stared</button>
                <button onclick="chooseWord3('jumped')">Jumped</button>
            </div>
            <div>
                <button onclick="chooseWord4('pool')">Pool</button>
                <button onclick="chooseWord4('wall')">Wall</button>
            </div>
        </div>
    `
    document.getElementById('app').innerHTML = html;
}



// CONTROLLER ///////////////////////////////////////////////////////////////////////////////
function chooseWord1(para) {
    word1 = para;
    updateView()
}
function chooseWord2(para) {
    word2 = para;
    updateView()
}
function chooseWord3(para) {
    word3 = para;
    updateView()
}
function chooseWord4(para) {
    word4 = para;
    updateView()
}