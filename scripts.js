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

  let titles = ['Útnak indulunk', 'Az ifjú pár', 'Önfeledt falukázás Varságon', 'A világ tetején', '"Ha az Úr velünk...', 'Szerelem a Madarason', 'Egymásba feledkezve', 'Kezdődik az utunk'];
  let ezaTitle = 0;
  let loadTitle = (titleNumber) => {
  $('#title').append(titles[titleNumber]);
  }
  
  let descriptions = ['"Biztosan eljön az Úr, mint a hajnal, eljön hozzánk, mint az őszi eső, és mint a tavaszi eső a földre" /Oz 6,3/',
                      '"Ahogy engem szeretett az Atya, úgy szerettelek én is titeket. Maradjatok meg szeretetemben... Azért mondtam nektek ezeket, hogy az én örömöm bennetek legyen, és örömötök teljes legyen." <br>/Jn 15, 9-11/',
                      '"A reggel tüzes tőrként pislog szemembe, szikrák párnáján alszom öledben csöndbe ölelve,<br> deres erek díszében dobog a hajnal ébredése életre hív napsugárhúrjain a szerelem szívverése." <br> /BV: Szikrapárnán/',
                      '"De egyszer csak találkozunk… A télben pillantásod megölel, megszűnik tér, idő – távol vagy tőlem és mégis közel - átizzik közöttünk az éter, felkérlek egy táncra - tűzben forgunk, az otthon melege ég retinámba." /BV: Testvértekintet/',
                      '.. ki lehet ellenünk? Ő, aki tulajdon Fiát sem kímélte, hanem odaadta értünk, mindnyájunkért, ne ajándékozna vele együtt mindent nekünk?" /Róm 8,31-32/',
                      '"Nézzétek az ég madarait: nem vetnek, nem aratnak, csűrökbe sem gyűjtenek, és a ti mennyei Atyátok táplálja őket. Nem értek ti sokkal többet ezeknél?" /Mt 6,26/',
                      'Két szív iker-dobbanása csöndünkbe ölelve egy ütemre vérez <br> láng-bőrödbe öltözött arcom meztelen-vakon vezetve érint és érez" <br>/BV: Csókvarázs/',
                      '"Megvárni, egy angyal és egy szent türelmével, amíg a dolgok - emberek, eszmék, helyzetek -, melyek hozzád tartoznak, eljutnak hozzád.. Ha nagyon sietsz feléjük, elkerülheted azt, ami fontos és személyesen a tiéd. Várj, nagy erővel, figyelmesen, egész sorsoddal és életeddel." /M. S./']
  let ezaLeiras = 0;
  let loadLeiras = (leirasNumber) => {
    $('#description').append(descriptions[leirasNumber]);
    }
let oneScreen = {
  kep: kepek[0],
  cim: titles[0],
  leiras: descriptions [0],
};

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
