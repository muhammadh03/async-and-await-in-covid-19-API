let h1 = document.createElement('h1');
h1.innerHTML = 'COVID 19 TRACKER';
h1.style.textAlign = 'center';
h1.style.marginTop = '50px';

let div = document.createElement('div');
div.style.textAlign = 'center'

let input = document.createElement('input');
input.setAttribute('type','text');
input.setAttribute('id','country');
input.style.width = '30%';
input.setAttribute('placeholder','Enter the country')

let lineBreak = document.createElement('br');

let btn = document.createElement('button');
btn.setAttribute('type','button');
btn.classList.add('btn','btn-primary');
btn.innerHTML = 'search';
btn.style.margin = '10px';
btn.addEventListener('click', foo);

let outPut = document.createElement('div');

document.body.append(h1)
div.append(input,lineBreak,btn,outPut)
document.body.append(div);

async function foo(){
    let res = document.getElementById('country').value;
    console.log(res);
    let url = `https://api.covid19api.com/dayone/country/${res}`;
    let res1 = await fetch(url);
    let res2 = await res1.json();
    console.log(res2);
    let index = res2.length-1;
    console.log(res2[index].Active);

    outPut.innerHTML = 
    `Active: ${res2[index].Active} <br>
    Death: ${res2[index].Deaths} <br>
    Recovered: ${res2[index].Recovered}`
}