var intervalID = window.setInterval(updateScreen, 200);
var console = document.getElementById("console");

var txt = [
    "FORCE: XX0022. ENCYPT://000.222.2345",
    "TRYPASS: ********* AUTH CODE: ALPHA GAMMA: 1___ PRIORITY 1",
    "RETRY: REINDEER FLOTILLA",
    "Z:> /FALKEN/USERNAME/TICTACTOE/ EXECUTE -PLAYERS 0",
    "================================================",
    "Priority 1 // local / scanning...",
    "scanning ports...",
    "IP FOUND (23.45.23.12.00000000)",
    "LOCATION FOUND (E.S.T:13.66.23.12.00110000)",
    "DEVICE FOUND (13.66.23.12.00110044)",
    "...",
    "...",
    "BRUTE.EXE -r -z",
    "...locating vulnerabilities...",
    "...vulnerabilities found...",
    "MCP/> DEPLOY CLU",
    "GETTING ALL DATA ZIP,,,....***************",
    "SCAN: __ Password....@akifh**hhfdal",
    "SCAN: __ IP Address....",
    "SCAN: __ USERNAME@codewithharry",
    "SCAN: __ IP:0012.0000.0553.0030",
    "SCAN: __ CID:0100.0000.0554.0080",
    "SCAN: __ PORT:0020.0000.0553.0080",
]

var docfrag = document.createDocumentFragment();

function updateScreen() {
    //Shuffle the "txt" array
    txt.push(txt.shift());
    //Rebuild document fragment
    txt.forEach(function (e) {
        var p = document.createElement("p");
        p.textContent = e;
        docfrag.appendChild(p);
    });
    //Clear DOM body
    // setTimeout(() => {

    // while (console.firstChild) {
    //   console.removeChild(console.firstChild);
    // }  


    for (let i = 0; i < txt.length; i++) {

        console.appendChild(docfrag);
    }

    // }, 2000);

    setTimeout(() => {

        for (let i = 0; i < txt.length; i++) {

            console.removeChild(console.firstChild);

        }

    }, 2000);






}



setTimeout(() => {



    const element1 = document.getElementById("blink");
    element1.remove();
    // console.remove();

}, 3000)
setTimeout(() => {

    console.remove();

}, 7000)



setTimeout(() => {









    async function install(element, text) {
        let first = document.getElementById(element)
        first.innerHTML = text
        let i = 0
        while (i !== 100) {
            let ran = Math.floor(Math.random() * 6)

            i = i + ran
            if (i > 100) {
                i = 100;

            }
            await new Promise(r => setTimeout(r, 100));
            first.innerHTML = `${text} ${"/##$DONE##........."}  ${i}%`
            // console.log(i)

        }
    }
    const hacker = async () => {
        let first = document.getElementById("first")
        // let p = 0;
        await new Promise(r => setTimeout(r, 100));





        await install("first", "Initializing Network [DATABASE] Injection ....")
        await install("lu", "Connecting To IP ADDRESS:147.1546.4555.5555")
        await install("second", "SOCIALMEDIA ***username*** @XYZDOMAIN.GET(INFO)")
        await install("thr", "GETTING  ACCESS ###@USERNAME....")
        await install("frt", "TRYING TO COMPUTE COMBINATIONS AMONG 4.5 Trillion PASSWOROD*#*#*#*#...")
        await install("fiv", "****PASSWORD FOUND****...")
        document.getElementById("six").innerHTML = "👁 YOU ARE UNDER-SURVILLIENCE OF THE CHINTU HACKER 👁!"
        // console.log("done")
        //first.innerHTML= "done"
    }
    hacker()

}, 3000);






























































































// document.addEventListener('DOMContentLoaded', () => {
//   //Shuffle the "txt" array
//   txt.push(txt.shift());
//   //Rebuild document fragment
//   txt.forEach(function (e) {
//     var p = document.createElement("p");
//     p.textContent = e;
//     docfrag.appendChild(p);
//   });
//   //Clear DOM body
//   setTimeout(() => {

//     while (console.firstChild) {
//       console.removeChild(console.firstChild);
//     }
//     console.appendChild(docfrag);

//   }, 1000);
//   // while (console.firstChild) {
//   //   console.removeChild(console.firstChild);
//   // }
//   // console.appendChild(docfrag);

//   setTimeout(() => {

//     document.removeChild.getElementById('#blink');

//   }, 5000);
// })