const questions2 = [
  { q: "س1: من هما العالمان اللذان أسسا نظرية الخلية؟", options: ["روبرت هوك و فان ليفنهوك","ماتياس شلايدن و ثيودور شوان","روبرت براون و داروين","شلايدن و مندل"], answer: 1 },
  { q: "س2: ما الذي تنص عليه نظرية الخلية؟", options: ["جميع الكائنات الحية تتكون من أنسجة","جميع الكائنات الحية تتكون من خلايا","جميع الكائنات الحية تتكون من عضيات","جميع الكائنات الحية تتكون من بروتينات"], answer: 1 },
  { q: "س3: أي من العبارات التالية تُعد من أسس نظرية الخلية؟", options: ["الخلية هي أصغر جزء في المادة","الخلايا تنتج من خلايا أخرى من خلال انقسامها","الخلية لا تستطيع التكاثر","جميع الكائنات الحية مكونة من جزيئات فقط"], answer: 1 },
  { q: "س4: أي مما يلي يُعتبر وصفًا دقيقًا لوظيفة الخلية حسب نظرية الخلية؟", options: ["الخلايا هي الوحدات الأساسية التركيبية والوظيفية للكائنات الحية","الخلايا مجرد غلاف يحوي أنوية","الخلايا مسؤولة فقط عن الانقسام","الخلايا لا علاقة لها بالوظائف الحيوية"], answer: 0 },
  { q: "س5: أي من النقاط التالية لا تُعد جزءًا من نظرية الخلية؟", options: ["جميع الكائنات الحية تتكون من خلايا","الخلايا تنتج من خلايا أخرى","الخلايا هي وحدات التركيب والوظيفة","الخلايا مكونة من نواة وعضيات فقط"], answer: 3 }
];

let score2 = 0;
const quizContainer2 = document.getElementById("quiz");
const resultDiv2 = document.getElementById("result");

function loadQuiz2() {
  score2 = 0;
  quizContainer2.innerHTML = "";
  resultDiv2.textContent = "";

  questions2.forEach((q) => {
    const div = document.createElement("div");
    div.className = "question";

    const questionText = document.createElement("h3");
    questionText.textContent = q.q;
    div.appendChild(questionText);

    const ul = document.createElement("ul");
    ul.className = "options";

    q.options.forEach((opt, idx) => {
      const li = document.createElement("li");
      li.textContent = opt;

      li.addEventListener("click", () => {
        if (li.classList.contains("correct") || li.classList.contains("wrong")) return;

        if (idx === q.answer) {
          li.classList.add("correct");
          score2++;
        } else {
          li.classList.add("wrong");
        }

        Array.from(ul.children).forEach(item => item.style.pointerEvents = "none");
      });

      ul.appendChild(li);
    });

    div.appendChild(ul);
    quizContainer2.appendChild(div);
  });
}

document.getElementById("showResult").addEventListener("click", () => {
  const percentage = ((score2 / questions2.length) * 100).toFixed(2);
  resultDiv2.textContent = `النتيجة النهائية: ${score2} من ${questions2.length} (${percentage}%)`;
});

document.getElementById("restart").addEventListener("click", () => {
  loadQuiz2();
});

loadQuiz2();
