function addnewwe() {
    // Create a new textarea element
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control', 'we', 'mt-2');
    newNode.setAttribute('rows', 3);
    newNode.setAttribute('placeholder', 'Enter here');

    // Append the new textarea element to the 'wem' div
    let weOb = document.getElementById('wem');
    let weAddButtonOb = document.getElementById('wenew');
    weOb.insertBefore(newNode, weAddButtonOb);
}

function addnewaq() {
    // Create a new textarea element
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control', 'aq', 'mt-2');
    newNode.setAttribute('rows', 3);
    newNode.setAttribute('placeholder', 'Enter here');

    // Append the new textarea element to the 'aqm' div
    let aqOb = document.getElementById('aqm');
    let aqAddButtonOb = document.getElementById('aqnew');
    aqOb.insertBefore(newNode, aqAddButtonOb);
}

function preview() {
    // Personal Information
    document.getElementById('namet').innerHTML = document.getElementById('name').value;
    document.getElementById('contactt').innerHTML = document.getElementById('contact').value;
    document.getElementById('addresst').innerHTML = document.getElementById('address').value;

    document.getElementById('namet1').innerHTML = document.getElementById('name').value;
    document.getElementById('contactt1').innerHTML = document.getElementById('contact').value;
    document.getElementById('addresst1').innerHTML = document.getElementById('address').value;

    // Important Links
    document.getElementById('fbt').innerHTML = document.getElementById('fb').value;
    document.getElementById('fbt').setAttribute('href', document.getElementById('fb').value);
    document.getElementById('igt').innerHTML = document.getElementById('ig').value;
    document.getElementById('igt').setAttribute('href', document.getElementById('ig').value);
    document.getElementById('linket').innerHTML = document.getElementById('linke').value;
    document.getElementById('linket').setAttribute('href', document.getElementById('linke').value);

    document.getElementById('fbt1').innerHTML = document.getElementById('fb').value;
    document.getElementById('fbt1').setAttribute('href', document.getElementById('fb').value);
    document.getElementById('igt1').innerHTML = document.getElementById('ig').value;
    document.getElementById('igt1').setAttribute('href', document.getElementById('ig').value);
    document.getElementById('linket1').innerHTML = document.getElementById('linke').value;
    document.getElementById('linket1').setAttribute('href', document.getElementById('linke').value);

    // Professional Information
    document.getElementById('objt').innerHTML = document.getElementById('obj').value;
    document.getElementById('objt1').innerHTML = document.getElementById('obj').value;

    // Work Experience
    let wes = document.getElementsByClassName('we');
    let str = '';
    for (let e of wes) {
        str += `<li> ${e.value} </li>`;
    }
    document.getElementById('wet').innerHTML = str;
    document.getElementById('wet1').innerHTML = str;

    // Academic Qualification
    let aqs = document.getElementsByClassName('aq');
    let str1 = '';
    for (let e of aqs) {
        str1 += `<li> ${e.value} </li>`;
    }
    document.getElementById('aqt').innerHTML = str1;
    document.getElementById('aqt1').innerHTML = str1;

    let opt = document.getElementById('op').value;

    if (opt == 'basic') {
        document.getElementById("resume-form").style.display="none";
        document.getElementById('resume-template').style.display = 'none';
        document.getElementById('resume-basic').style.display = 'block';
    } else {
        document.getElementById("resume-form").style.display="none";
        document.getElementById('resume-template').style.display = 'block';
        document.getElementById('resume-basic').style.display = 'none';
    }

    const profilePicInput = document.getElementById('profile-pic');
    const profilePicBasic = document.getElementById('profile-img-basic');
    const profilePicTemplate = document.getElementById('profile-img-template');
    const file = profilePicInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            profilePicBasic.src = e.target.result;
            profilePicTemplate.src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
}

function save() {
    window.print();
}
