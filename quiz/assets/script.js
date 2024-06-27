const quizData = [
    { question: "肩甲骨を動かす筋肉はどれですか？", a: "大胸筋", b: "三角筋", c: "広背筋", d: "僧帽筋", correct: "d", explanation: "僧帽筋は肩甲骨を動かす筋肉です。" },
    { question: "上腕二頭筋の主な機能は何ですか？", a: "肘の伸展", b: "肘の屈曲", c: "肩の外転", d: "肩の内転", correct: "b", explanation: "上腕二頭筋は肘を屈曲させる主要な筋肉です。" },
    { question: "大腿四頭筋はどの関節を動かしますか？", a: "肘関節", b: "股関節", c: "膝関節", d: "足関節", correct: "c", explanation: "大腿四頭筋は膝関節を動かします。" },
    { question: "腓腹筋はどの動作に関与しますか？", a: "足の背屈", b: "足の底屈", c: "足の外転", d: "足の内転", correct: "b", explanation: "腓腹筋は足を底屈させる主要な筋肉です。" },
    { question: "脛骨に付着する筋肉はどれですか？", a: "大腿直筋", b: "前脛骨筋", c: "外腹斜筋", d: "大臀筋", correct: "b", explanation: "前脛骨筋は脛骨に付着する筋肉です。" },
    { question: "背中の下部に位置する筋肉はどれですか？", a: "僧帽筋", b: "広背筋", c: "棘上筋", d: "棘下筋", correct: "b", explanation: "広背筋は背中の下部に位置する筋肉です。" },
    { question: "胸鎖乳突筋の主な機能は何ですか？", a: "頭部の屈曲", b: "頭部の伸展", c: "頭部の回旋", d: "肩の内転", correct: "c", explanation: "胸鎖乳突筋は頭部の回旋に関与します。" },
    { question: "外腹斜筋の作用はどれですか？", a: "脊柱の伸展", b: "脊柱の屈曲", c: "脊柱の回旋", d: "脊柱の側屈", correct: "b", explanation: "外腹斜筋は脊柱の屈曲に関与します。" },
    { question: "肩甲骨を内転させる筋肉はどれですか？", a: "棘上筋", b: "棘下筋", c: "菱形筋", d: "小円筋", correct: "c", explanation: "菱形筋は肩甲骨を内転させる筋肉です。" },
    { question: "腹直筋の主な機能は何ですか？", a: "胸郭の伸展", b: "胸郭の屈曲", c: "肩甲骨の内転", d: "肩甲骨の外転", correct: "b", explanation: "腹直筋は胸郭の屈曲に関与します。" },
    { question: "大臀筋の主な作用はどれですか？", a: "股関節の屈曲", b: "股関節の伸展", c: "膝関節の屈曲", d: "膝関節の伸展", correct: "b", explanation: "大臀筋は股関節を伸展させる主要な筋肉です。" },
    { question: "前腕屈筋群が作用するのはどの関節ですか？", a: "肩関節", b: "肘関節", c: "手関節", d: "指関節", correct: "c", explanation: "前腕屈筋群は手関節に作用します。" },
    { question: "大腿二頭筋はどの動作に関与しますか？", a: "股関節の伸展", b: "股関節の屈曲", c: "膝関節の伸展", d: "膝関節の屈曲", correct: "d", explanation: "大腿二頭筋は膝関節の屈曲に関与します。" },
    { question: "菱形筋の主な機能は何ですか？", a: "肩甲骨の内転", b: "肩甲骨の外転", c: "肩甲骨の下方回旋", d: "肩甲骨の上方回旋", correct: "a", explanation: "菱形筋は肩甲骨を内転させる主要な筋肉です。" },
    { question: "大腿直筋はどの筋群に属しますか？", a: "大腿四頭筋", b: "ハムストリングス", c: "腸腰筋", d: "腓腹筋", correct: "a", explanation: "大腿直筋は大腿四頭筋の一部です。" },
    { question: "腕橈骨筋の主な作用は何ですか？", a: "前腕の回外", b: "前腕の回内", c: "肘の屈曲", d: "肘の伸展", correct: "c", explanation: "腕橈骨筋は肘を屈曲させる主要な筋肉です。" },
    { question: "僧帽筋の上部繊維の主な機能は何ですか？", a: "肩甲骨の上方回旋", b: "肩甲骨の下方回旋", c: "肩甲骨の内転", d: "肩甲骨の外転", correct: "a", explanation: "僧帽筋の上部繊維は肩甲骨を上方回旋させます。" },
    { question: "腸腰筋はどの動作に関与しますか？", a: "股関節の屈曲", b: "股関節の伸展", c: "膝関節の屈曲", d: "膝関節の伸展", correct: "a", explanation: "腸腰筋は股関節を屈曲させる主要な筋肉です。" },
    { question: "内腹斜筋の作用はどれですか？", a: "脊柱の伸展", b: "脊柱の屈曲", c: "脊柱の回旋", d: "脊柱の側屈", correct: "c", explanation: "内腹斜筋は脊柱の回旋に関与します。" },
    { question: "肩甲下筋の主な機能は何ですか？", a: "肩の外旋", b: "肩の内旋", c: "肩の外転", d: "肩の内転", correct: "b", explanation: "肩甲下筋は肩を内旋させる主要な筋肉です。" },
    { question: "腓腹筋とヒラメ筋が共同して行う動作はどれですか？", a: "足の背屈", b: "足の底屈", c: "足の外転", d: "足の内転", correct: "b", explanation: "腓腹筋とヒラメ筋は足を底屈させる主要な筋肉です。" },
    { question: "前鋸筋の主な機能は何ですか？", a: "肩甲骨の内転", b: "肩甲骨の外転", c: "肩甲骨の上方回旋", d: "肩甲骨の下方回旋", correct: "b", explanation: "前鋸筋は肩甲骨を外転させる主要な筋肉です。" },
    { question: "広背筋の主な作用はどれですか？", a: "肩の外転", b: "肩の内転", c: "肩の屈曲", d: "肩の伸展", correct: "b", explanation: "広背筋は肩を内転させる主要な筋肉です。" },
    { question: "上腕三頭筋の主な機能は何ですか？", a: "肘の伸展", b: "肘の屈曲", c: "肩の外旋", d: "肩の内旋", correct: "a", explanation: "上腕三頭筋は肘を伸展させる主要な筋肉です。" },
    { question: "小円筋はどの動作に関与しますか？", a: "肩の外旋", b: "肩の内旋", c: "肩の外転", d: "肩の内転", correct: "a", explanation: "小円筋は肩を外旋させる主要な筋肉です。" },
    { question: "大円筋の主な機能は何ですか？", a: "肩の外旋", b: "肩の内旋", c: "肩の外転", d: "肩の内転", correct: "b", explanation: "大円筋は肩を内旋させる主要な筋肉です。" },
    { question: "大腿筋膜張筋はどの動作に関与しますか？", a: "股関節の屈曲", b: "股関節の伸展", c: "膝関節の屈曲", d: "膝関節の伸展", correct: "a", explanation: "大腿筋膜張筋は股関節の屈曲に関与します。" },
    { question: "棘上筋の主な作用はどれですか？", a: "肩の外旋", b: "肩の内旋", c: "肩の外転", d: "肩の内転", correct: "c", explanation: "棘上筋は肩を外転させる主要な筋肉です。" },
    { question: "棘下筋の主な機能は何ですか？", a: "肩の外旋", b: "肩の内旋", c: "肩の外転", d: "肩の内転", correct: "a", explanation: "棘下筋は肩を外旋させる主要な筋肉です。" },
    { question: "前腕伸筋群が作用するのはどの関節ですか？", a: "肩関節", b: "肘関節", c: "手関節", d: "指関節", correct: "c", explanation: "前腕伸筋群は手関節に作用します。" },
    { question: "半腱様筋はどの筋群に属しますか？", a: "大腿四頭筋", b: "ハムストリングス", c: "腸腰筋", d: "腓腹筋", correct: "b", explanation: "半腱様筋はハムストリングスに属する筋肉です。" },
    { question: "半膜様筋の主な作用は何ですか？", a: "股関節の屈曲", b: "股関節の伸展", c: "膝関節の伸展", d: "膝関節の屈曲", correct: "b", explanation: "半膜様筋は股関節を伸展させる主要な筋肉です。" },
    { question: "腰方形筋はどの動作に関与しますか？", a: "脊柱の伸展", b: "脊柱の屈曲", c: "脊柱の側屈", d: "脊柱の回旋", correct: "c", explanation: "腰方形筋は脊柱の側屈に関与します。" },
    { question: "腹斜筋の主な機能は何ですか？", a: "胸郭の伸展", b: "胸郭の屈曲", c: "胸郭の回旋", d: "胸郭の側屈", correct: "c", explanation: "腹斜筋は胸郭の回旋に関与します。" },
    { question: "腓腹筋はどの筋群に属しますか？", a: "ハムストリングス", b: "下腿三頭筋", c: "大腿四頭筋", d: "腸腰筋", correct: "b", explanation: "腓腹筋は下腿三頭筋に属する筋肉です。" },
    { question: "脛骨前筋の主な作用は何ですか？", a: "足の底屈", b: "足の背屈", c: "足の外転", d: "足の内転", correct: "b", explanation: "脛骨前筋は足を背屈させる主要な筋肉です。" },
    { question: "大胸筋の主な作用はどれですか？", a: "肩の外旋", b: "肩の内旋", c: "肩の外転", d: "肩の内転", correct: "b", explanation: "大胸筋は肩を内旋させる主要な筋肉です。" },
    { question: "下腿三頭筋の一部でない筋肉はどれですか？", a: "腓腹筋", b: "ヒラメ筋", c: "足底筋", d: "大腿直筋", correct: "d", explanation: "大腿直筋は下腿三頭筋の一部ではなく、大腿四頭筋の一部です。" },
    { question: "外腹斜筋と内腹斜筋が共同して行う動作はどれですか？", a: "脊柱の伸展", b: "脊柱の屈曲", c: "脊柱の回旋", d: "脊柱の側屈", correct: "b", explanation: "外腹斜筋と内腹斜筋は脊柱の屈曲に関与します。" },
    { question: "広背筋が関与する動作はどれですか？", a: "肩の外旋", b: "肩の内旋", c: "肩の外転", d: "肩の内転", correct: "b", explanation: "広背筋は肩を内旋させる主要な筋肉です。" },
    { question: "上腕三頭筋の長頭が関与する動作はどれですか？", a: "肘の屈曲", b: "肘の伸展", c: "肩の外旋", d: "肩の内旋", correct: "b", explanation: "上腕三頭筋の長頭は肘を伸展させる主要な筋肉です。" },
    { question: "棘上筋の機能はどれですか？", a: "肩の外旋", b: "肩の内旋", c: "肩の外転", d: "肩の内転", correct: "c", explanation: "棘上筋は肩を外転させる主要な筋肉です。" },
    { question: "胸鎖乳突筋が関与する動作はどれですか？", a: "頭部の屈曲", b: "頭部の伸展", c: "頭部の回旋", d: "頭部の側屈", correct: "c", explanation: "胸鎖乳突筋は頭部の回旋に関与します。" },
    { question: "腹直筋の作用はどれですか？", a: "胸郭の伸展", b: "胸郭の屈曲", c: "胸郭の側屈", d: "胸郭の回旋", correct: "b", explanation: "腹直筋は胸郭の屈曲に関与します。" },
    { question: "上腕二頭筋の短頭が関与する動作はどれですか？", a: "肘の屈曲", b: "肘の伸展", c: "肩の外旋", d: "肩の内旋", correct: "a", explanation: "上腕二頭筋の短頭は肘を屈曲させる主要な筋肉です。" },
    { question: "僧帽筋の下部繊維が関与する動作はどれですか？", a: "肩甲骨の上方回旋", b: "肩甲骨の下方回旋", c: "肩甲骨の内転", d: "肩甲骨の外転", correct: "b", explanation: "僧帽筋の下部繊維は肩甲骨を下方回旋させる主要な筋肉です。" },
    { question: "広背筋の主な作用はどれですか？", a: "肩の外旋", b: "肩の内旋", c: "肩の外転", d: "肩の内転", correct: "b", explanation: "広背筋は肩を内旋させる主要な筋肉です。" },
    { question: "腸腰筋が関与する動作はどれですか？", a: "股関節の屈曲", b: "股関節の伸展", c: "膝関節の屈曲", d: "膝関節の伸展", correct: "a", explanation: "腸腰筋は股関節を屈曲させる主要な筋肉です。" },
    { question: "菱形筋の作用はどれですか？", a: "肩甲骨の内転", b: "肩甲骨の外転", c: "肩甲骨の上方回旋", d: "肩甲骨の下方回旋", correct: "a", explanation: "菱形筋は肩甲骨を内転させる主要な筋肉です。" },
    { question: "大腿四頭筋の一部でない筋肉はどれですか？", a: "大腿直筋", b: "外側広筋", c: "内側広筋", d: "半腱様筋", correct: "d", explanation: "半腱様筋は大腿四頭筋の一部ではなく、ハムストリングスの一部です。" }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
let selectedQuizData = [];

function getRandomQuizData() {
    const shuffled = quizData.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
}

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = selectedQuizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if(answer) {
        if(answer === selectedQuizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if(currentQuiz < selectedQuizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${selectedQuizData.length} questions correctly</h2>
                <ul>
                    ${selectedQuizData.map((q, index) => `
                        <li>
                            <strong>Q${index + 1}:</strong> ${q.question}<br>
                            <strong>Correct Answer:</strong> ${q[q.correct]}<br>
                            <strong>Explanation:</strong> ${q.explanation}
                        </li>
                    `).join('')}
                </ul>
                <button onclick="location.reload()">再チャレンジ</button>
            `;
        }
    }
});

// クイズデータをランダムに取得して表示
selectedQuizData = getRandomQuizData();
loadQuiz();
