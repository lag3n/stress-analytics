let outerDiv = document.createElement('div')
outerDiv.id = 'bottom'

let talkDiv = document.createElement('div')
talkDiv.className = "talk-bubble tri-right btm-right"
talkDiv.id = "form-div"

let outerForm = document.createElement('form')
outerForm.id = 'my-form'
outerForm.method = 'POST'
outerForm.action = 'https://script.google.com/macros/s/AKfycbxqfX-aFHBWO7N2EIMhwKbtWeezvxwblDk5ltHRFWiREQR3mMncFDGXz57bcHe-t1I/exec'

let formText = document.createElement('div')
formText.class = "talktext"

let q1 = document.createElement('div')
q1.class = 'form-wrapper'

let p1 = document.createElement('p')
p1.innerText = "What's the Problem?"

let tarea = document.createElement('textarea')
tarea.name="composeContent" 
tarea.id="Textarea1" 
tarea.row="6" 
tarea.style="width:100%"

let margin = document.createElement('div')
margin.style = "margin:2em"

let q2 = document.createElement('div')
q2.class = 'form-wrapper'

let p2 = document.createElement('p')
p2.innerText = "How Stressed Are You?"

let sliderForm = document.createElement('form')
sliderForm.action="/p/quote.php" 
sliderForm.method="GET"

let innerElts = document.createElement('div')
innerElts.id = 'debt-amount-slider'

let i1 = document.createElement('input')
i1.type = 'radio'
i1.name="debt-amount" 
i1.id="1" 
i1.value="1" 
i1.className='Rating' 
i1.required = true

let l1 = document.createElement('label')
l1.for="1" 
l1.setAttribute('data-debt-amount', "Minor Problem")

let i2 = document.createElement('input')
i2.type = 'radio'
i2.name="debt-amount" 
i2.id="2" 
i2.value="2" 
i2.className='Rating' 
i2.required = true

let l2 = document.createElement('label')
l2.for="2" 
l2.setAttribute('data-debt-amount',"")

let i3 = document.createElement('input')
i3.type = 'radio'
i3.name="debt-amount" 
i3.id="3" 
i3.value="3" 
i3.className='Rating' 
i3.required = true

let l3 = document.createElement('label')
l3.for="3" 
l3.setAttribute('data-debt-amount',"")

let i4 = document.createElement('input')
i4.type = 'radio'
i4.name="debt-amount" 
i4.id="4" 
i4.value="4" 
i4.className='Rating' 
i4.required = true

let l4 = document.createElement('label')
l4.for="4" 
l4.setAttribute('data-debt-amount',"")

let i5 = document.createElement('input')
i5.type = 'radio'
i5.name="debt-amount" 
i5.id="5" 
i5.value="5" 
i5.className='Rating' 
i5.required = true

let l5 = document.createElement('label')
l5.for="5" 
l5.setAttribute('data-debt-amount',"Major Problem")

let subBtn = document.createElement('button')
subBtn.type='submit'
subBtn.id="subBtn"

let overallBtn = document.createElement('button')
overallBtn.type="button" 
overallBtn.className="btn btn-danger btn-floating btn-lg" 
overallBtn.id="btn-back-to-top"

let innerIcon = document.createElement('i')
innerIcon.className = 'fas fa-arrow-up'

innerElts.appendChild(i1)
innerElts.appendChild(l1)
innerElts.appendChild(i2)
innerElts.appendChild(l2)
innerElts.appendChild(i3)
innerElts.appendChild(l3)
innerElts.appendChild(i4)
innerElts.appendChild(l4)
innerElts.appendChild(i5)
innerElts.appendChild(l5)
sliderForm.appendChild(innerElts)

q2.appendChild(p2)
q2.appendChild(sliderForm)

q1.appendChild(p1)
q1.appendChild(tarea)

formText.appendChild(q1)
formText.appendChild(margin)
formText.appendChild(q2)
formText.appendChild(margin)
formText.appendChild(margin)
formText.appendChild(subBtn)

outerForm.appendChild(formText)
talkDiv.appendChild(outerForm)
outerDiv.appendChild(talkDiv)
overallBtn.appendChild(innerIcon)
outerDiv.appendChild(overallBtn)

document.body.appendChild(outerDiv)

document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        document.getElementById('form-div').hidden = true
    }
};
    window.addEventListener('load', function() {
        let mybutton = document.getElementById("btn-back-to-top");
        let ratings = document.getElementsByClassName('Rating');

        // When the user clicks on the button, scroll to the top of the document
        mybutton.addEventListener("click", backToTop);

        function backToTop() {
            document.getElementById('form-div').hidden = !document.getElementById('form-div').hidden 
        }


        const form = document.getElementById('my-form');
        form.addEventListener("submit", function(e) {
            document.getElementById('subBtn').disabled = true
            e.preventDefault();
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