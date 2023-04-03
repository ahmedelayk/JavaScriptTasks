var txt = document.getElementById('PAR');
console.log(txt);

function ChangeFont(font){
  console.log(getComputedStyle(txt).fontFamily);
  txt.style.fontFamily = font;
}
// console.log(getComputedStyle(txt).fontFamily);

function ChangeAlign(align){
  txt.style.textAlign = align;
}


function ChangeLineHeight(height){
  txt.style.lineHeight = height;
}


function ChangeLSpace(space){
  txt.style.letterSpacing = space ;
}

function ChangeIndent(indent){
  txt.style.textIndent = indent ;
}

function ChangeTransform(value){
  txt.style.textTransform = value ;
}

function ChangeDecorate(value){
  txt.style.textDecoration = value ;
}

function ChangeBorder(value){
  txt.style.borderStyle = value ;
}

function ChangeBorderColor(value){
  txt.style.borderColor = value ;
}









