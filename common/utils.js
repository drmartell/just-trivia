export const clearAllRadios = (thisRadioButtonGroup) =>
    thisRadioButtonGroup.forEach(radioButton => radioButton.checked = false);
    // for (var i = 0; i < radList.length; i++) {
    //     if (radioButtonGroup[i].checked) document.getElementById(radioButtonGroup[i].id).checked = false;
    // }

export const getBoss = (thisRadioButtonGroup) => thisRadioButtonGroup.value || null;
