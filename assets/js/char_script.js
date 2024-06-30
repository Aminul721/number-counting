// Element.prototype.characterCounting = function(e) {
//     var t, n, i, s;
//     let l = [],
//         r = this.querySelectorAll("p");
//     r.forEach((e, t) => { l.push(e.innerText.length) });
//     let o, a, c = function t(n) {
//             let i = 0;
//             for (let s = 0; s < n.length; s++)
//                 if ((i += n[s]) >= e.maxChar) return s
//         }(l),
//         h = (t = l, n = c, 0 === n ? e.maxChar : 1 === n ? a = e.maxChar - t[0] : (total = (o = t.slice(0, n)).reduce((e, t) => e + t, 0), a = e.maxChar - total)),
//         u, d, p, T;
//     i = r, s = c, u = i[s].innerHTML, d = u.slice(0, h), p = u.slice(h, i[s].innerHTML.length), i[s].innerHTML = `${d}<span class="end-dots">...</span>`, T = document.createElement("button"), T.innerText = e.buttonShowText, i[s].parentNode.appendChild(T), i[s].parentNode.querySelector("button").addEventListener("click", function(t) { if (t.preventDefault(), this.classList.toggle("less-content"), this.classList.contains("less-content")) { this.innerText = e.buttonHideText, r[s].querySelector(".end-dots").remove, i[s].innerHTML = `${d}${p}`; for (let n = s + 1; n < l.length; n++) r[n].setAttribute("style", " height: auto; transition: 0.3s all ease-in-out; opacity:1;visibility: visible;") } else { this.innerText = e.buttonShowText, i[s].innerHTML = `${d}<span class="end-dots">...</span>`; for (let o = s + 1; o < l.length; o++) r[o].style.display = "none" } });
//     for (let f = c + 1; f < l.length; f++) r[f].style.display = "none"
// };


Element.prototype.characterCounting = function(obj) {
    const numbers = []; // get all paragraph content length
    const items = this.querySelectorAll('p');

    items.forEach((item, index) => {
        numbers.push(item.innerText.length) // get the content length
    });

    let index = getIndex(numbers);
    let getVisibleCharacters = getVisibleCharacter(numbers, index);
    hideCharacter(items, index)

    // hide rest element which is out of maxChar
    for (let i = index + 1; i < numbers.length; i++) {
        items[i].style.display = "none";
    }

    // get all visible elements character 
    function getVisibleCharacter(arr, index) {
        let elementsContents, totalChar;
        if (index === 0) {
            return totalChar = obj.maxChar;
        } else if (index === 1) {
            totalChar = obj.maxChar - arr[0];
            return totalChar;
        } else {
            elementsContents = arr.slice(0, index);
            total = elementsContents.reduce((prev, curr) => {
                return prev + curr;
            }, 0);
            totalChar = obj.maxChar - total;
            return totalChar
        }
    }

    // find out the index of element which element makes result greater than maxChar
    function getIndex(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
            if (sum >= obj.maxChar) {
                return i;
            }
        }
    }

    // hide character from the index element 
    function hideCharacter(arr, index) {
        let selectedElement = arr[index].innerHTML;
        let displayedChar = selectedElement.slice(0, getVisibleCharacters);
        let hideChar = selectedElement.slice(getVisibleCharacters, arr[index].innerHTML.length);
        arr[index].innerHTML = `${displayedChar}<span class="end-dots">...</span>`;

        // append a button 
        let moreContentdiv = document.createElement('div');
        moreContentdiv.className = "text_more_less";
        
        let moreContentButton = document.createElement('button');
        moreContentdiv.appendChild(moreContentButton);

        moreContentButton.innerText = obj.buttonShowText;
        arr[index].parentNode.appendChild(moreContentdiv);

        // Event Listener for button
        arr[index].parentNode.querySelector('button').addEventListener('click', function(e) {
            e.preventDefault();
            this.classList.toggle("less_content");

            if (this.classList.contains('less_content')) {
                this.innerText = obj.buttonHideText;
                items[index].querySelector('.end-dots').remove;
                arr[index].innerHTML = `${displayedChar}${hideChar}`;

                for (let i = index + 1; i < numbers.length; i++) {
                    items[i].setAttribute('style', ` height: auto; transition: 0.3s all ease-in-out; opacity:1;visibility: visible;`)
                        // items[i].style.transition = "0.3s all ease-in-out";
                        // items[i].style.height = "100%";

                }
            } else {
                this.innerText = obj.buttonShowText;
                arr[index].innerHTML = `${displayedChar}<span class="end-dots">...</span>`;

                for (let i = index + 1; i < numbers.length; i++) {
                    items[i].style.display = "none";
                }
            }
        })
    }
}