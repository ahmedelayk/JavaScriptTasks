
var selectBand = document.getElementById("band")
var selectArtist = document.getElementById("artist")

// get data from json file using XMLHttpRequest (AJAX)
var bandsData
var req = new XMLHttpRequest()
req.open('GET', './rockbands.json')
req.send()
req.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    bandsData = JSON.parse(this.responseText)
  }
}

// fill bands in first drop down list
onload = function(){
  firstOptionDisables(selectBand)
  for(var bandName in bandsData){
    createOption(selectBand, bandName)
  }
}
// handle event when choose one of the bands and artist
selectBand.addEventListener("change", function(event){
  selectArtist.innerHTML = ''
  firstOptionDisables(selectArtist)
  console.log(event.target.value)
  for(var i=0;i<bandsData[event.target.value].length;i++){
    createOption(selectArtist, bandsData[event.target.value][i]['name'])
  }
  selectArtist.addEventListener("change", function(ev){
    for(var i=0;i<bandsData[event.target.value].length;i++){
      if(bandsData[event.target.value][i]['name'] == ev.target.value){
        location.assign(bandsData[event.target.value][i]['value'])
      }
    }
  })
})
// function for create option and append it to select tag
function createOption(parent, val){
  var option = document.createElement('option')
  option.setAttribute("value", val)
  option.appendChild(document.createTextNode(val))
  parent.appendChild(option)
}
function firstOptionDisables(element){
  createOption(element, 'please select')
  element.firstElementChild.setAttribute('selected','selected')
  element.firstElementChild.setAttribute('disabled','disabled')
}
