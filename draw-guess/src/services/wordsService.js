var words = ["about", "above", "accident", "actor", "adult", "afraid", "age","agree", "aid",
"air", "airport","album","alcohol","alone","always","anger", "animal",
"answer","apologize","arms","autumn","baby","ball","balloon","bank",
"bird","blood","boat","body","bomb","bone","book","bottle","bottom","box",
"boy","brain","bridge","bus","camera","cat","celebrate","center","cheer",
"circle","clean","clock","clothes","cloud","computer","cook","cow","cry",
"dance","danger","date","daughter","deep","degree","diet","different","dinner",
"dive","doctor","document","dog","dollar","door","double","dream","drink",
"drive","drop","each","early","easy","eat","ecology","economy","egg",
"emotion","empty","enjoy","equal","even","face","fall","family","famous",
"farm","fast","fat","favorite","feel","film","fish","flee","floor","flow",
"flower","food","foot","forest","free","friend","fruit","fuel","full","fun",
"game","gift","girl","glass","glasses","gold","gun","hair","half","happy",
"hard","hat","hate","head","health","hear","helicopter","hero","hill",
"holiday","home","horse","hospital","hotel","huge","husband","ice","icecream",
"idea","island","jewel","job","joke","jump","kiss","knife","left","love",
"luck","mail","many","map","meal","milk","minute","missing","mistake",
"money","month","moon","mother","movie","music","nice","night","ocean","oil",
"old","open","paper","passenger","passport","people","picture","pig","pilot",
"planet","plant","play","pregnant","prize","restaurant","room","root","rope",
"run","sad","sand","school","science","sea","search","second","secret","sheep",
"shine", "shoe","show","shrink","sick","single","sky","sleep","slow","small",
"snow","sport","spring","spy","square","star","start","step","sugar","summer",
"sun","tall","target","tea","team","tear","technology","telephone",
"telescope","television","theater","tie","today","together","train","travel",
"tree","trip","truck","universe","vacation","victory","video","visa","wait",
"walk","wall","want","warm","water","wave","we","weak","wheat","white","who",
"whole","why","wide","wife","wild","will","willing","win","wind","window",
"winter","wire","wise","wish","with","withdraw","without","witness", "woman",
"wonder","wonderful","wood","word","work","world","worry","worse","worth",
"zero","zoo"]

function getRandomWords(){

    let wordsToShow = []; 
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
    }

        for (let i = 0; i < 3; i ++ ) {
            wordsToShow.push(words[getRandomIntInclusive(0,words.length-1)])
        }
    console.log('words to show', wordsToShow);
    return wordsToShow; 
}

export default {
    getRandomWords
}