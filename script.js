function main() {
    let editor = document.getElementById('editor-page');
    const boldBtn = document.getElementById('bold-button');
    const italicBtn = document.getElementById('italic-button');
    
    if (editor !== null) {
        editor.innerHTML = localStorage.getItem('editor_text');
    }

    editor.addEventListener('keyup', addTextInStorage);
    boldBtn.addEventListener('click', makeTextBold);
    italicBtn.addEventListener('click', makeTextItalic);

    function addTextInStorage() {
        localStorage.setItem('editor_text', editor.innerHTML);
    }

    function makeTextBold() {
        if (window.getSelection()) {
            let select = window.getSelection().toString();
            let userText = localStorage.getItem('editor_text');
            userText = userText.replace(select, `<b>${select}</b>`);

            localStorage.setItem('editor_text', userText);
            editor.innerHTML = localStorage.getItem('editor_text');
        }
    }

    function makeTextItalic() {
        if (window.getSelection()) {
            let select = window.getSelection().toString();
            let userText = localStorage.getItem('editor_text');
            userText = userText.replace(select, `<em>${select}</em>`);

            localStorage.setItem('editor_text', userText);
            editor.innerHTML = localStorage.getItem('editor_text');
        }
    }
}
main();


