const keysClicked = [];
const winningCode = 'dankempton';

window.addEventListener('keyup', (e) => {
    console.log(e.key);
    keysClicked.push(e.key);
    keysClicked.splice(-winningCode.length-1, keysClicked.length - winningCode.length);
    if (keysClicked.join("").includes(winningCode)) {
        console.log('YOU WINNNNNNNNN', '🎉');
        cornify_add();
    }
    console.log(keysClicked);
})
