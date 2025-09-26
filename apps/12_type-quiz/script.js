const questions = [
    {value: 123, answer: 'number'},
    {value: 'hello', answer: 'string'},
    {value: true, answer: 'boolean'},
    {value: null, answer: 'object'},
    {value: [1,2,3], answer: 'object'},
]
let score = 0;
questions.forEach((q,i) => {
    const userAnswer = prompt(`Q${i+1}:値=${q.value}の型は？`);
    if(userAnswer === q.answer) {
        alert('正解');
        score++;
    }  else {
        alert(`不正解！答えは${q.answer}`);
    }
});

alert(`結果：${score}/${questions.length}正解!`);