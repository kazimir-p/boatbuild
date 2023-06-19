//HAMBURGER

const hamburgerButton = document.getElementById('hamburger')
const pageChange = document.getElementById('logoAlt')
const listChange = document.getElementById('menuCol')
const listChangeAlt = document.getElementById('menuRow')

function toggleButton() {
     pageChange.classList.toggle('show')
    listChange.classList.toggle('show')
    listChangeAlt.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)

//IMG GALLERY

//default image for whole screen and for the image display element
// changeImgDisplay.style.backgroundImage = "url('src/imgs/lištaC.jpg')"
// const galleryEl = document.getElementById('gallery')
// galleryEl.style.backgroundImage = "url('src/imgs/lištaC.jpg')"


// function displayImg(showImg){
//   changeImgDisplay.style.backgroundImage = "url('" + showImg.src + "')"

//   messageContainer.innerHTML = showImg.alt; 
 
// }

//from pictureSizing
const displayContainer =  document.querySelector('#display-el')



function displayImg(showImg){
  displayContainer.style.backgroundImage = "url('" + showImg.src + "')"

  messageContainer.innerHTML = showImg.alt; 
 
}



//messageContainer to display message inside of img
const messageContainer = document.querySelector('#message-el') 
displayContainer.appendChild(messageContainer)

//default image for whole screen and for the image display element
displayContainer.style.backgroundImage = "url('src/imgs/lištaC.jpg')"
const galleryEl = document.getElementById('gallery')
galleryEl.style.backgroundImage = "url('src/imgs/lištaC.jpg')"


 
//HOVER FRAMES ON picts 
 const images = document.getElementsByClassName("x");
for(let i = 0; i < images.length; i++){
images[i].addEventListener("mouseover", onSelection);
}

function onSelection(){
    for(let i = 0; i < images.length; i++)
    images[i].style.border = "";
    if(this.style.border === "")
    {
    this.style.border = "2px solid rgba(202, 55, 29, 0.436)";
    }
    else
    {
    this.style.border = "";
    }
}


//MONTH DAY HOUR COUNTER

const timeLeft = document.getElementById('time-left')

const dayMark = new Date('05/15/2023')

const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24

let timerId

function countDown() {
const today = new Date()
const timeSpan = dayMark - today

const days = Math.floor(timeSpan / day)
const hours = Math.floor((timeSpan % day) / hour)
const minutes = Math.floor((timeSpan % hour) / minute)

timeLeft.innerHTML = days + '  days  ' + "  " + hours + '  h  ' + minutes + '  min '
}

timerId = setInterval(countDown, second)

// "RAP" DIV LANGUAGE ALTERNATE  

const boxA = document.getElementById('rapOne');

boxA.addEventListener('mouseover', function handleMouseOver() {
  boxA.innerText = "some time ago friends gave us a small sailboat they had lying by the pond. for a long time we hesitated should we try to repair it, then we kind of forgot about the whole thing. but then one day the crawly work begun.";
});

boxA.addEventListener('mouseout', function handleMouseOut() {
  boxA.innerText = 'před časem nám kamarádi darovali plachetničku, kterou měli odloženou u rybníka. dlouho jsme váhali, zda se do její opravy máme pouštět, než jsme na celou věc trochu zapomněli. jednoho dne však začala plíživá práce...';
});

const boxB = document.getElementById('rapTwo');

boxB.addEventListener('mouseover', function handleMouseOver() {
  boxB.innerText = "what originally supposed to be just minor repair of a few visibly damaged bits, ended up diggin' deep in rotten plywood, re-creating parts, learning on the way...";
});

boxB.addEventListener('mouseout', function handleMouseOut() {
  boxB.innerText = 'to, co původně měla být jen výměna pár viditelně poškozených částí, skončilo vrtáním se v shnilé překližce, renovováním dílů, učením se za pochodu.';
});

const boxC = document.getElementById('rapThree');

boxC.addEventListener('mouseover', function handleMouseOver() {boxC.innerText = "I didn't want to just fill in some holes and put the boat on water as soon as possible 'so we can have fun before it sinks'. but, repairing  it completely meant long and lonely road.";
});


boxC.addEventListener('mouseout', function handleMouseOut() {
  boxC.innerText = 'nechtěl jsem jen zazáplatovat pár děr a spustit plachetku na vodu co nejdřív, "abychom si užili, než se rozpadne". avšak zevrubná oprava znamenala dlouhou, osamělou cestu... ';
});

const boxD = document.getElementById('rapFour');

boxD.addEventListener('mouseover', function handleMouseOver() {
  boxD.innerText ="the boat has been slowly transformed from wrack towards beautiful shape it once used to be in. the outcome is bit rough and unprecise. maybe because I am not really a boatbuilder. yet. ";
});

 
boxD.addEventListener('mouseout', function handleMouseOut() {
  boxD.innerText = "loď se pomalu přeměňovala z vraku do krásného tvaru, který kdysi měla. výsledek je trochu neohrabaný a nepřesný. možná proto, že nejsem doopravdy stavitel lodí. zatím.";
});
const boxE = document.getElementById('rapFive');
   
boxE.addEventListener('mouseover', function handleMouseOver() {
  boxE.innerText = "there are few things left to be done. though something else may occur to slow everything down. anyway, I dare say that it could be ready during summer. some sort of presentation is in order, hopefully with launching.";
});

boxE.addEventListener('mouseout', function handleMouseOut() {
  boxE.innerText = 'zbylo ještě pár věcí na dotažení a určitě se "nečekaně" vynoří další. přeci jen si troufnu říct, že opravu dokončím během léta. ještě to není jisté, ale snaha to stihnout je (patrná). uděláme ukázku lodi a snad ji také dáme na vodu...';
});
const boxF = document.getElementById('rapSix');
   
boxF.addEventListener('mouseover', function handleMouseOver() {
  boxF.innerText = "I didn't want to just fill in some holes and put the boat on water as soon as possible 'so we can have fun before it sinks'. but, repairing  it completely meant long and lonely road.";
});

boxF.addEventListener('mouseout', function handleMouseOut() {
  boxF.innerText = 'nechtěl jsem jen zazáplatovat pár děr a spustit plachetku na vodu co nejdřív, "abychom si užili, než se rozpadne". avšak zevrubná oprava znamenala dlouhou, osamělou cestu... ';
});
const boxG = document.getElementById('rapSeven');
   
boxG.addEventListener('mouseover', function handleMouseOver() {
  boxG.innerText = "the boat has been slowly transformed from wrack towards beautiful shape it once used to be in. the outcome is bit rough and unprecise. maybe because I am not really a boatbuilder. yet. ";
});

boxG.addEventListener('mouseout', function handleMouseOut() {
  boxG.innerText = "loď se pomalu přeměňovala z vraku do krásného tvaru, který kdysi měla. výsledek je trochu neohrabaný a nepřesný. možná proto, že nejsem doopravdy stavitel lodí. zatím.";
});

    //  GALLERY WHEN RESPONSIVE

    const imgs = ["src/imgs/Vrak1.JPG","src/imgs/vrak2.JPG","src/imgs/snifinglueX1.jpg","src/imgs/pila1.jpg","src/imgs/Zátěž1.jpg","src/imgs/Nightwork4-winteriscoming.JPG","src/imgs/muzetovypadathruzostrasne.JPG","src/imgs/Nářadí2.JPG","src/imgs/bort1.JPG","src/imgs/Epoxy1.jpg","src/imgs/alenadejegzistuje_cut.JPG","src/imgs/monica.jpg","src/imgs/dej si kafe.jpg","src/imgs/takze.JPG","src/imgs/cilemjezmrzlina.jpg","src/imgs/pod vlajkou.jpg","src/imgs/ZrcA-chibí.JPG","src/imgs/ZrcC-hobluj.JPG","src/imgs/ZrcB-zátěž.JPG","src/imgs/ZrcD-back.JPG","src/imgs/LištaE-rotten.jpg","src/imgs/LištaG-hoblík.jpg","src/imgs/LištaA.jpg","src/imgs/LištaC.jpg","src/imgs/kandidat5.JPG","src/imgs/kandidat6.JPG","src/imgs/LištaH.jpg","src/imgs/LištaD-hoblík.jpg","src/imgs/musisdotohoriznout.JPG","src/imgs/Přepážka2-ready.JPG","src/imgs/Přepážka7-rekonstrukce.JPG","src/imgs/Přepážka3-sucházáplata.JPG","src/imgs/Přepážka5-sklo2.JPG","src/imgs/Přepážka6-sklo3.JPG","src/imgs/Přepážka9.JPG","src/imgs/Žebra2.JPG","src/imgs/Žebra3.jpg","src/imgs/Žebra4.JPG","src/imgs/Nightwork1.JPG","src/imgs/nightworkX1_sniffin.jpg","src/imgs/vylezevetrelec.JPG","src/imgs/papiraizolepastaci.JPG","src/imgs/pridatcitronovoupolevu.JPG","src/imgs/Paluba0-díra0.jpg","src/imgs/podpalubí-chybějící části.JPG","src/imgs/Paluba1-překližka.jpg","src/imgs/Paluba2.jpg","src/imgs/Paluba1a-střih.jpg","src/imgs/kandidat1.jpg","src/imgs/Zatěž2.jpg","src/imgs/Paluba4.jpg","src/imgs/palubaX6.jpg","src/imgs/Paluba5.jpg","src/imgs/Paluba6.jpg","src/imgs/kandidat2.jpg","src/imgs/Paluba7.jpg","src/imgs/Paluba8.jpg","src/imgs/Paluba11.jpg","src/imgs/Příd1.jpg","src/imgs/Příď4.jpg","src/imgs/pramacX1.jpg","src/imgs/kandidat3.jpg","src/imgs/muzebit.JPG","src/imgs/muzebit2.JPG","src/imgs/drivneztoprekrejelisti.JPG","src/imgs/jestejednavec2.JPG","src/imgs/geologickekladivko2.JPG","src/imgs/nechamtotakhledojara2.JPG","src/imgs/lesklyobjekt.jpg","src/imgs/cozbydeschovej.jpg","src/imgs/abezsenajist.jpg"] ;
    
    const textAlt= ["chybí tu pár součástek","možná jsme neměli do toho šťourat","dobře zvaž co budeš dělat","bude to hlučné","bude to těžké","bude tam zima a tma","může to vypadat hrůzostrašně","bude zapotřebí nářadí" ,"měřit a kreslit", "a budeš muset čichat lepidlo","ale naděje exsistuje","dělat to s láskou","dát si kafé a začít","takže z toho...", "vyrobit zmrzlinu","pod vlajkou","není zrcadlo","hobluj!","krásné závaží","nevypadá na zrcadlo, ale je","hnije to","...hobluj","stačí vyměnit lištu...","v sevření","snad to...","bude držet pohromadě","prasklo mi to","hobluj...","musíš do toho říznout","začistit","rekonstrukce","přišít záplatu","zalepit záplatu","ještě vrstva","záplata v noci tuhne","praskla žebra","nová žebra","další žebra","je tu zima","a tma","vyleze vetřelec?","papír a izolepa stačí?","přidat citronovou polevu","sponzor pořadu...","ošklivý a pevný","přiložit kus překližky a...","...zalepit","střih","zabal to, ať to nepoškrábeš","veliká zátěž","je to teď...","trochu jiné","hutné","uhlazené","a bude i","lesklé","ještě sklo","více skla","co s tím...","sklo na nose","brousit musíš","nešetři polevou","muže bít?","jo","dřív než to překreje listí","natři to","geologické kladívko?","nechám to takhle do jara","lesklý objekt","co zbyde, schovej","a běž se najíst" ] ;
    let i = 0;
    imgShow = document.getElementById('imgDisplay-el');
    imgShow.src = imgs[i];
    let next = document.getElementById('Bnext');
    let previous = document.getElementById('Bprevious');
    let textAltDisplayEl = document.getElementById('textAltDisplay')
    textAltDisplayEl.innerText = "chibí tu pár součástek"
    textAltDisplayEl.src = textAlt[i]
    next.addEventListener('click', nextImage);
   
    function nextImage(){
        if(i<imgs.length-1)
        {
            i++;
            imgShow.src = imgs[i];
            textAltDisplayEl.innerText = textAlt[i]
        }
        
    }
    previous.addEventListener('click', previousImage);
    
    function previousImage(){
        if(i>0)
        { 
        i--;
        imgShow.src = imgs[i];
        textAltDisplayEl.innerText = textAlt[i]
        }
    }
    
let buttConCase = document.createElement('div')
let screenResponsive = document.querySelector('#imgFrame')
buttConCase.classList.add('buttConCase-el')
screenResponsive.appendChild(buttConCase)





