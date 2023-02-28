let biggestDiv = document.createElement('div')
biggestDiv.id = 'wrapper'

let outerDiv = document.createElement('div')
outerDiv.id = 'bottom'

let talkDiv = document.createElement('div')
talkDiv.className = "chat-popup"
talkDiv.id = "myForm"
talkDiv.style = 'background-color:#FCF5E5; margin-bottom:2em; margin-right: 2em; display:flex; justify-content: center;'

let outerForm = document.createElement('form')
outerForm.id = 'my-form'
outerForm.method = 'POST'
outerForm.action = 'https://script.google.com/macros/s/AKfycbxqfX-aFHBWO7N2EIMhwKbtWeezvxwblDk5ltHRFWiREQR3mMncFDGXz57bcHe-t1I/exec'

let formText = document.createElement('div')
formText.className = "talktext"

let q1 = document.createElement('div')
q1.className = 'form-wrapper'

let p1 = document.createElement('p')
p1.innerText = "What's the Problem?"

let tarea = document.createElement('textarea')
tarea.name="composeContent" 
tarea.id="Textarea1" 
tarea.row="6" 
tarea.style="width:100%"

let margin = document.createElement('div')
margin.style = "margin:2em"

let margin2 = document.createElement('div')
margin2.style = "margin:2em"

let margin3 = document.createElement('div')
margin3.style = "margin:2em"

let q2 = document.createElement('div')
q2.className = 'form-wrapper'

let p2 = document.createElement('p')
p2.innerText = "How Stressed Are You?"

let innerFormDiv = document.createElement('div')
innerFormDiv.style = "display: flex; justify-content: center;"

let second_form = document.createElement('form')
second_form.className = "rating-form"

let l1 = document.createElement('label')
l1.setAttribute('for', 'super-happy')
let rad1 = document.createElement('input')
rad1.type = 'radio'
rad1.name = 'rating'
rad1.className = 'super-happy'
rad1.id = 'super-happy'
rad1.value = 'super-happy'
let svg1 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
svg1.setAttributeNS(null, 'viewBox', "0 0 24 24")
svg1.setAttributeNS(null, 'width', "2rem")
svg1.setAttributeNS(null, 'height', "2rem")
let path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path')
path1.setAttributeNS(null,'d','M12,17.5C14.33,17.5 16.3,16.04 17.11,14H6.89C7.69,16.04 9.67,17.5 12,17.5M8.5,11A1.5,1.5 0 0,0 10,9.5A1.5,1.5 0 0,0 8.5,8A1.5,1.5 0 0,0 7,9.5A1.5,1.5 0 0,0 8.5,11M15.5,11A1.5,1.5 0 0,0 17,9.5A1.5,1.5 0 0,0 15.5,8A1.5,1.5 0 0,0 14,9.5A1.5,1.5 0 0,0 15.5,11M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z')
svg1.appendChild(path1)
let wrapDiv1 = document.createElement('div')
wrapDiv1.style = "display:flex; justify-content:center;margin-top:0.5em;margin-bottom:0.5em"
wrapDiv1.appendChild(rad1)
l1.appendChild(wrapDiv1)
l1.appendChild(svg1)

let l2 = document.createElement('label')
l2.setAttribute('for', 'happy')
let rad2 = document.createElement('input')
rad2.type = 'radio'
rad2.name = 'rating'
rad2.className = 'happy'
rad2.id = 'happy'
rad2.value = 'happy'
let svg2 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
svg2.setAttributeNS(null, 'viewBox', "0 0 24 24")
svg2.setAttributeNS(null, 'width', "2rem")
svg2.setAttributeNS(null, 'height', "2rem")
let path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path')
path2.setAttributeNS(null, 'd', 'M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z')
svg2.appendChild(path2)
let wrapDiv2 = document.createElement('div')
wrapDiv2.style = "display:flex; justify-content:center;margin-top:0.5em;margin-bottom:0.5em"
wrapDiv2.appendChild(rad2)
l2.appendChild(wrapDiv2)
l2.appendChild(svg2)

let l3 = document.createElement('label')
l3.setAttribute('for', 'neutral')
let rad3 = document.createElement('input')
rad3.type = 'radio'
rad3.name = 'rating'
rad3.className = 'neutral'
rad3.id = 'neutral'
rad3.value = 'neutral'
let svg3 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
svg3.setAttributeNS(null, 'viewBox', "0 0 24 24")
svg3.setAttributeNS(null, 'width', "2rem")
svg3.setAttributeNS(null, 'height', "2rem")
let path3 = document.createElementNS('http://www.w3.org/2000/svg', 'path')
path3.setAttributeNS(null,'d', 'M8.5,11A1.5,1.5 0 0,1 7,9.5A1.5,1.5 0 0,1 8.5,8A1.5,1.5 0 0,1 10,9.5A1.5,1.5 0 0,1 8.5,11M15.5,11A1.5,1.5 0 0,1 14,9.5A1.5,1.5 0 0,1 15.5,8A1.5,1.5 0 0,1 17,9.5A1.5,1.5 0 0,1 15.5,11M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M9,14H15A1,1 0 0,1 16,15A1,1 0 0,1 15,16H9A1,1 0 0,1 8,15A1,1 0 0,1 9,14Z')
svg3.appendChild(path3)
let wrapDiv3 = document.createElement('div')
wrapDiv3.style = "display:flex; justify-content:center;margin-top:0.5em;margin-bottom:0.5em"
wrapDiv3.appendChild(rad3)
l3.appendChild(wrapDiv3)
l3.appendChild(svg3)

let l4 = document.createElement('label')
l4.setAttribute('for', 'sad')
let rad4 = document.createElement('input')
rad4.type = 'radio'
rad4.name = 'rating'
rad4.className = 'sad'
rad4.id = 'sad'
rad4.value = 'sad'
let svg4 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
svg4.setAttributeNS(null, 'viewBox', "0 0 24 24")
svg4.setAttributeNS(null, 'width', "2rem")
svg4.setAttributeNS(null, 'height', "2rem")
let path4 = document.createElementNS('http://www.w3.org/2000/svg', 'path')
path4.setAttributeNS(null,'d', 'M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M15.5,8C16.3,8 17,8.7 17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M12,14C13.75,14 15.29,14.72 16.19,15.81L14.77,17.23C14.32,16.5 13.25,16 12,16C10.75,16 9.68,16.5 9.23,17.23L7.81,15.81C8.71,14.72 10.25,14 12,14Z')
svg4.appendChild(path4)
let wrapDiv4 = document.createElement('div')
wrapDiv4.style = "display:flex; justify-content:center;margin-top:0.5em;margin-bottom:0.5em"
wrapDiv4.appendChild(rad4)
l4.appendChild(wrapDiv4)
l4.appendChild(svg4)

let l5 = document.createElement('label')
l5.setAttribute('for', 'super-sad')
let rad5 = document.createElement('input')
rad5.type = 'radio'
rad5.name = 'rating'
rad5.className = 'super-sad'
rad5.id = 'super-sad'
rad5.value = 'super-sad'
let svg5 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
svg5.setAttributeNS(null, 'viewBox', "0 0 24 24")
svg5.setAttributeNS(null, 'width', "2rem")
svg5.setAttributeNS(null, 'height', "2rem")
let path5 = document.createElementNS('http://www.w3.org/2000/svg', 'path')
path5.setAttributeNS(null, 'd', 'M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M16.18,7.76L15.12,8.82L14.06,7.76L13,8.82L14.06,9.88L13,10.94L14.06,12L15.12,10.94L16.18,12L17.24,10.94L16.18,9.88L17.24,8.82L16.18,7.76M7.82,12L8.88,10.94L9.94,12L11,10.94L9.94,9.88L11,8.82L9.94,7.76L8.88,8.82L7.82,7.76L6.76,8.82L7.82,9.88L6.76,10.94L7.82,12M12,14C9.67,14 7.69,15.46 6.89,17.5H17.11C16.31,15.46 14.33,14 12,14Z')
svg5.appendChild(path5)
let wrapDiv5 = document.createElement('div')
wrapDiv5.style = "display:flex; justify-content:center;margin-top:0.5em;margin-bottom:0.5em"
wrapDiv5.appendChild(rad5)
l5.appendChild(wrapDiv5)
l5.appendChild(svg5)

let subBtnDiv = document.createElement('div')
subBtnDiv.style = 'display:flex; justify-content: center'

let subBtn = document.createElement('button')
subBtn.type = 'submit'
subBtn.id = 'subBtn'
subBtn.innerText = 'Submit'

let fltBtn = document.createElement('button')
fltBtn.type = 'button'
fltBtn.className = 'btn btn-floating btn-lg'
fltBtn.id = 'btn-back-to-top'
fltBtn.setAttribute('onclick', 'openForm()')


let svgBtn = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
svgBtn.setAttributeNS(null, 'viewBox', "0 0 24 24")
svgBtn.setAttributeNS(null, 'width', "2rem")
svgBtn.setAttributeNS(null, 'height', "2rem")


let pathBtn = document.createElementNS('http://www.w3.org/2000/svg', 'path')
pathBtn.setAttributeNS(null, 'd','M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z')

svgBtn.appendChild(pathBtn)
fltBtn.appendChild(svgBtn)

innerFormDiv.appendChild(l1)
innerFormDiv.appendChild(l2)
innerFormDiv.appendChild(l3)
innerFormDiv.appendChild(l4)
innerFormDiv.appendChild(l5)


// second_form.appendChild(l1)
// second_form.appendChild(l2)
// second_form.appendChild(l3)
// second_form.appendChild(l4)
// second_form.appendChild(l5)

// innerFormDiv.appendChild(second_form)

q2.appendChild(p2)
q2.appendChild(innerFormDiv)

q1.appendChild(p1)
q1.appendChild(tarea)

subBtnDiv.appendChild(subBtn)

formText.appendChild(q1)
formText.appendChild(margin)
formText.appendChild(q2)
formText.appendChild(margin2)
formText.appendChild(margin3)
formText.appendChild(subBtnDiv)

outerForm.appendChild(formText)

talkDiv.appendChild(outerForm)

outerDiv.appendChild(talkDiv)

biggestDiv.appendChild(outerDiv)

biggestDiv.appendChild(fltBtn)

document.body.appendChild(biggestDiv)

function openForm() {
    document.getElementById("myForm").style.hidden = false;
}

function closeForm() {
    document.getElementById("myForm").style.hidden = true;
}

function toggle() {
    document.getElementById('myForm').hidden = !document.getElementById('myForm').hidden 
}


document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        document.getElementById('myForm').hidden = true
    }
};
    window.addEventListener('load', function() {
        let mybutton = document.getElementById("btn-back-to-top");
        let ratings = document.getElementsByName('rating');

        mybutton.addEventListener("click", toggle);


        const form = document.getElementById('my-form');
        form.addEventListener("submit", function(e) {
            console.log('asdfasdf')
            e.preventDefault();
            document.getElementById('subBtn').disabled = true
            let val, ind;
            for (let i = 0; i < ratings.length; i++){
                if (ratings[i].checked) {
                    val = ratings[i].value
                    ind = i
                    break
                }
            }
            const data = new FormData(form);
            data.append('Problem', document.getElementById('Textarea1').value)
            data.append('Rating', val)
            const action = e.target.action;
            fetch(action, {
                method: 'POST',
                body: data,
            })
            .then(() => {
                document.getElementById('Textarea1').value = '';
                ratings[ind].checked = false
                document.getElementById('subBtn').disabled = false
            })
        });
    })
