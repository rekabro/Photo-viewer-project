let data = {
    first: 'kepek/1pappesz.jpg',
    title: 'Útnak indulunk',
    description: '"Biztosan eljön az Úr, mint a hajnal, eljön hozzánk, mint az őszi eső, és mint a tavaszi eső a földre" /Oz 6,3/'
  };
  
  $('#first').attr('src', data.first);
  $('#title').append(data.title);
  $('#description').append(data.description);

  let kepek = ['kepek/1pappesz.jpg', 'kepek/2kuruclesi.jpg', 'kepek/3varsag.jpg', 'kepek/4hagymas.jpg', 'kepek/5kereszt.jpg', 'kepek/6madaras.jpg', 'kepek/7csok.jpg', 'kepek/8arnyek.jpg'];
  let currentPhoto = 0;
  /*$('#first').attr('src', kepek[currentPhoto]);*/
  let loadPhoto = (photoNumber) => {
  $('#first').attr('src', kepek[photoNumber]);
  }
  /*loadPhoto(currentPhoto);*/

  let titles = ['Útnak indulunk', 'Az ifjú pár', 'Önfeledt falukázás Varságon', 'A világ tetején', 'Ha az Úr velünk...', 'Szerelem a Madarason', 'Egymásba feledkezve', 'Kezdődik az utunk'];
  let ezaTitle = 0;
  let loadTitle = (titleNumber) => {
  $('#title').append(titles[titleNumber]);
  }
  
  let descriptions = ['"Biztosan eljön az Úr, mint a hajnal, eljön hozzánk, mint az őszi eső, és mint a tavaszi eső a földre" /Oz 6,3/',
                      '"Ahogy engem szeretett az Atya, úgy szerettelek én is titeket. Maradjatok meg szeretetemben... Azért mondtam nektek ezeket, hogy az én örömöm bennetek legyen, és örömötök teljes legyen. /Jn 15, 9-11/"',
                      'A pillanat, amit ki kellene tágítani, hogy örökké tartson - hogy ez a végtelen érzés a mélyben megmaradjon',
                      'Egy egység vagyunk most, két út, mi végül összért',
                      '.. ki lehet ellenünk?!',
                      '"Nézzétek az ég madarait, nézzétek a rét virágait: csűrökbe sosem gyűjtenek. Miért nyugtalan a szívetek?"',
                      'szerelem, szenvedély',
                      ' Megvárni egy angyal türelmével...']
  let ezaLeiras = 0;
  let loadLeiras = (leirasNumber) => {
    $('#description').append(descriptions[leirasNumber]);
    }

  $('#rightArrow').click(() => {
 if (currentPhoto<7) { 
   currentPhoto++, ezaTitle++, ezaLeiras++;
 }  else  {
  $('#first').attr('src', kepek[0]);
  $('#title').empty().append(titles[0]);
  $('#description').empty().append(descriptions[0]);
 }
  loadPhoto(currentPhoto);
  $('#title').empty().append(titles[ezaTitle]);
  $('#description').empty().append(descriptions[ezaLeiras]);
  })
 
  $('#leftArrow').click(() => {
  if(currentPhoto>0) {
    currentPhoto--, ezaLeiras--, ezaTitle--;
  } loadPhoto(currentPhoto);
    $('#title').empty().append(titles[ezaTitle]);
    $('#description').empty().append(descriptions[ezaLeiras]);
  })
 
  $(event.target).attr(data-number);
  $('.thumbnail').click(() => {
      loadPhoto(kepek/data-number);
      $('#title').empty().append(titles[ezaTitle]);
      $('#description').empty().append(descriptions[ezaLeiras]);
    })
/*names.forEach((name) => { // for each item in names
  console.log(`Welcome, dear ${name}!`); // print out the item
})



$('.add').on('click', (event) => { // clicking on .add class-ed elements
  $('.container').append('<p>A new paragraph</p>'); // add a new element into .container
}); */
