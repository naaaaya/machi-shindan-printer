
var questions = [["ついつい買っちゃうのは？", "パン", "おにぎり"],
                  ["お店で店員さんに話しかけられるのは", "うれしい", "苦手"],
                  ["やるなら", "ホームパーティ", "ピクニック"],
                  ["人混みを歩くのは", "平気", "苦手"],
                  ["目的を決めずに出かけることがある", "はい", "いいえ"],
                  ["休日にはアウトドアを楽しむ", "はい", "いいえ"],
                  ["地元のイベントには積極的に参加する", "はい", "いいえ"],
                  ["間取りをみるのが好き", "はい", "いいえ"],
                  ["みんなとワイワイするより一人で過ごすほうが好きだ", "はい", "いいえ"]];
var towns = ["二子玉川", "麻布十番", "上野", "荻窪", "千駄ヶ谷", "清澄白河", "笹塚", "三軒茶屋"];
var answers = "";
var q_num = 1;
var last_question_num = "";

function clickedYes(){
  answers += "y";
  console.log(answers);
  nextQuestion();
}
function clickedNo(){
  answers += "n";
  console.log(answers);
  nextQuestion();
}

function nextQuestion(){
  q_num += 1;
  document.getElementById("q_text").innerText = "問題" + q_num;
  if (q_num == 5) {
    town_num = culcResult(answers, last_question_num);
    showResult(town_num);
  } else if (q_num == 2) {
    second_question(answers);
  } else if (q_num == 3) {
    third_question(answers)
  } else if (q_num == 4) {
    last_question_num = forth_question(answers);
  }
}

function second_question(answers){
  if (answers == 'y') {
    question_num = 0;
  } else if (answers == 'n') {
    question_num = 1;
  }
  changeQuestion(question_num);
}


function third_question(answers){
  if (answers == 'yy') {
    question_num = 2;
  } else if (answers == 'yn' || answers == 'ny') {
    question_num = 3;
  } else if (answers == 'nn') {
    question_num = 4;
  }
  changeQuestion(question_num);
}

function forth_question(answers){
  if (answers == 'yyy') {
    question_num = 5;
  } else if (answers == 'yny' || answers == 'nyy'|| answers == 'yyn') {
    question_num = 6;
  } else if (answers == 'ynn' || answers == 'nyn'|| answers == 'nny') {
    question_num = 7;
  } else if (answers == 'nnn') {
    question_num = 8;
  }
  changeQuestion(question_num);
  return question_num;
}

function changeQuestion(question_num) {
  var question = questions[question_num];
  document.getElementById("q_text").innerText = question[0];
  document.getElementById("yes-btn").innerText = question[1];
  document.getElementById("no-btn").innerText = question[2];
}


function culcResult(answers, last_question_num) {
  var last_answer = answers.slice(-1);
  if (last_question_num == 5) {
    if (last_answer == 'y') {
      town_num = 0;
    } else {
      town_num = 1;
    }
  } else if (last_question_num == 6) {
    if (last_answer == 'y') {
      town_num = 2;
    } else {
      town_num = 3;
    }
  } else if (last_question_num == 7) {
    if (last_answer == 'y') {
      town_num = 4;
    } else {
      town_num = 5;
    }
  } else if (last_question_num == 8) {
    if (last_answer == 'y') {
      town_num = 6;
    } else {
      town_num = 7;
    }
  }
  console.log(answers);
  console.log(town_num);
  return town_num;
}

function showResult(town_num){
  town_name = towns[town_num];
  img_num = town_num + 1;
  document.getElementsByClassName("modal")[0].setAttribute("style", "margin-top: 150px");
  document.getElementById("yes-btn").style.display = "none";
  document.getElementById("no-btn").style.display = "none";
  document.getElementById("print-btn").style.display = "block";
  var ele = document.createElement('input');
    // データを設定
    ele.setAttribute('type', 'hidden');
    ele.setAttribute('name', 'result');
    ele.setAttribute('value', img_num);
    // 要素を追加
    document.getElementsByClassName("button_to")[0].appendChild(ele);
  document.getElementById("q_text").innerText = "あなたにおすすめのまちは";
  var areaName = document.createElement('h1');
  areaName.setAttribute("class", "area_name");
  areaName.innerText = '「' + town_name + '」';
  document.getElementById("q_text").appendChild(areaName);
  showResultImage(img_num);
}

function showResultImage(img_num){
  var resultImage = document.createElement('img');
  var src = "/assets/" + Number(img_num).toString()  + "-icon.png";
  resultImage.setAttribute("src", src);
  resultImage.setAttribute("style", "display: block");
  resultImage.setAttribute("class", 'result-img');
  document.getElementById("q_text").appendChild(resultImage);
  document.getElementById("print-btn").style.display = "block";
}
