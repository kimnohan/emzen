const spanEl = document.querySelector("main h2 span");
const txtArr = ['Front-End Developer','Web Publisher','UX Designer','Back-End Developer'] // 화면에 표시할 문장 데이터
let index = 0; // txtArr 문장 선택 값
let currentTxt = txtArr[index].split("");
console.log(currentTxt.pop());
console.log(spanEl.textContent = currentTxt.join(""));
(function(){
    function writeTxt(){
        spanEl.textContent += currentTxt.shift(); // shift() = 배열의 맨 앞에 값을 제거한다.
        if(currentTxt.length !== 0){
            setTimeout(writeTxt,Math.floor(Math.random()*100));
        } else{
            currentTxt = spanEl.textContent.split("");
            setTimeout(deleteTxt,3000);
        }
    }

    function deleteTxt(){
        currentTxt.pop(); //pop() = 배열의 마지막 요소 제거, 제거된 요소 리턴
        spanEl.textContent = currentTxt.join("");
        if(currentTxt.length !== 0){
            setTimeout(deleteTxt,Math.floor(Math.random()*100));
        }else{
            index = (index+1) % txtArr.length; //무한반복
            currentTxt = txtArr[index].split("");
            console.log(currentTxt);
            writeTxt();
        }
    }
    writeTxt();
})();
