document.addEventListener("DOMContentLoaded", function () {

    let header = document.createElement('header-container');

    let h1 = document.createElement('h1');
    let hOneText = document.createTextNode("This is an h1");
    h1.className = 'h1';


    h1.appendChild(hOneText);
    document.body.appendChild(h1);
    document.body.appendChild(header);


    let h2 = document.createElement('h2');
    let hTwoText = document.createTextNode('This is an h2');
    h2.className = 'h2';

    h2.appendChild(hTwoText);
    document.body.appendChild(h2);

    let h3 = document.createElement('h3');
    let hThreeText = document.createTextNode("This is an h3");
    h3.className = 'h3';

    h3.appendChild(hThreeText);
    document.body.appendChild(h3);

    let h4 = document.createElement('h4');
    let hFourText = document.createTextNode("This is an h4");
    h4.className = 'h4';

    h4.appendChild(hFourText);
    document.body.appendChild(h4);

    let h5 = document.createElement('h5');
    let hFiveText = document.createTextNode("This is an h5");
    h5.className = 'h5';

    h5.appendChild(hFiveText);
    document.body.appendChild(h5);

    let h6 = document.createElement('h6');
    let hSixText = document.createTextNode("This is an h6");
    h6.className = 'h6';

    h6.appendChild(hSixText);
    document.body.appendChild(h6);


    h1.addEventListener('dblclick', changeColor);
    h2.addEventListener('dblclick', changeColor);
    h3.addEventListener('dblclick', changeColor);
    h4.addEventListener('dblclick', changeColor);
    h5.addEventListener('dblclick', changeColor);
    h6.addEventListener('dblclick', changeColor);

    function changeColor(e) {
        let colors = ['blue', 'teal', 'turquoise', 'light green', 'lime', 'yellow', 'orange', 'sea foam'];
        let newColor = colors[Math.floor(Math.random() * colors.length)];
        e.target.style.color = newColor;
    };

    let button = document.querySelector('button');
    document.body.appendChild(button);

    button.addEventListener('click', insertItem);

    let list = document.createElement('ul');
    document.body.appendChild(list);

    let clickCount = 1;

    function insertItem() {
        let item = document.createElement('li');
        let text = document.createTextNode('This is list item ' + clickCount++);
        item.appendChild(text);
        list.appendChild(item);
        item.addEventListener('click', changeColor);

        function changeColor(e) {
            let colors = ['blue', 'teal', 'turquoise', 'light green', 'lime', 'yellow', 'orange', 'sea foam'];
            let newColor = colors[Math.floor(Math.random() * colors.length)];
            e.target.style.color = newColor;
        };

        item.addEventListener('dblclick', function() {
            list.removeChild(item);
        });
    }
})
