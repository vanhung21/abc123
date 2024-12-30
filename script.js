const playButton = document.getElementById("playButton");
const audio = document.getElementById("myAudio");

playButton.addEventListener("click", () => {
    audio.play();
});

const hightlight = document.getElementById("hightlight");
// console.log(hightlight);

const messages = [
  "Chào mừng Mai meo đến với 'thế giới' do Huy tạo ra :))))) ",
  "Đọc hết những dòng chữ chạy trên màn hình này đã nhé!!!",
  "Anh đã tạo ra 1 món quà nho nhỏ với tâm huyết to to",
  "NHƯNG, trước tiên em phải trả lời 1 số câu hỏi đã",
  "Sau khi trả lời đúng hết thì em mới nhận được quà =))))",
  "Nhớ là đừng ăn gian, em không ăn gian được đâu",
  "Bây giờ thì ấn nút Start để bắt đầu nàoooo!!!",
  "Ấn vào từng câu hỏi để làm nhóeeee!!!",
  "OK let's goooooooo",
  "À quên, sau khi em start sẽ có nhạc với tâm tình của anh",
  "Vừa làm vừa nghe nhóooo"
];

let messLength = messages.length;

// console.log(messLength);
let messIndex = 0;
let charIndex = 0;

function typing(messIndex) {
  let currentMess = messages[messIndex];
  if (charIndex < currentMess.length) {
    let currentChar = currentMess.substring(0, charIndex + 1);
    // console.log(currentChar);
    hightlight.textContent = currentChar;
    charIndex++;
  } else {
    if (messIndex < messLength - 1) {
      messIndex++;
    } else {
      messIndex = 0;
    }
    charIndex = 0;
  }
  //   console.log(currentMess);
  setTimeout(typing, 125, messIndex);
}

typing(0);

const fireworks = document.querySelector(".fireworks");

setInterval(() => {
  const firework = document.createElement("div");
  firework.classList.add("firework");

  // Vị trí ngẫu nhiên
  firework.style.left = Math.random() * 100 + "%";
  firework.style.top = Math.random() * 100 + "%";

  // Màu sắc ngẫu nhiên
  firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

  fireworks.appendChild(firework);

  // Xóa pháo hoa sau khi kết thúc animation
  setTimeout(() => {
    firework.remove();
  }, 2000);
}, 10); // Thay đổi khoảng thời gian tại đây

const timelineItems = document.querySelectorAll(".timeline-item");

timelineItems.forEach((item) => {
  const content = item.querySelector(".timeline-content");
  const details = item.querySelector(".timeline-details");
  const dateElement = item.querySelector(".timeline-date");
  let isShown = false; // Biến cờ để theo dõi trạng thái hiển thị

  dateElement.addEventListener("click", () => {
    isShown = !isShown;
    details.style.display = isShown ? "block" : "none";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementsByClassName("open")[0]
    .addEventListener("click", function () {
      document
        .getElementsByClassName("card-packaging")[0]
        .classList.add("is-open");
    });

  document
    .getElementsByClassName("close")[0]
    .addEventListener("click", function () {
      document
        .getElementsByClassName("card-packaging")[0]
        .classList.remove("is-open");
    });
});

const showCardButton = document.getElementById("showCardButton");
const myButton = document.getElementById("myButton");
const modalhide = document.getElementById("modal_hide");
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const result = document.getElementById("result");
const cardSection = document.querySelector(".section-card");

showCardButton.style.display = "none";

let isConfirmed = false;

showCardButton.addEventListener("click", () => {
  if (cardSection.classList.contains("active")) {
    cardSection.classList.toggle("active");
    showCardButton.textContent = "Click vào đây để nhận quà";
  } else {
    if (!cardSection.classList.contains("active")) {
      modalhide.style.display = "block";
    }
    showCardButton.textContent = "Click vào đây để ẩn quà";
  }
});

noButton.addEventListener("click", () => {
  modalhide.style.display = "none";
});

yesButton.addEventListener("click", () => {
  cardSection.classList.toggle("active");
  modalhide.style.display = "none";
  result.style.display = "block";
  isConfirmed = true;
});

let prevX = 0;
let prevY = 0;

noButton.addEventListener("mouseover", () => {
  // Tính toán vị trí ngẫu nhiên mới trong phạm vi 500x500px ở giữa màn hình và cách vị trí cũ ít nhất 50px
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const minX = windowWidth / 2 - 250;
  const minY = windowHeight / 2 - 250;
  const maxX = windowWidth / 2 + 250;
  const maxY = windowHeight / 2 + 250;

  let newX = prevX;
  let newY = prevY;

  do {
    newX = Math.random() * (maxX - minX) + minX;
    newY = Math.random() * (maxY - minY) + minY;
  } while (Math.abs(newX - prevX) < 50 || Math.abs(newY - prevY) < 50);

  // Cập nhật vị trí mới cho modal và lưu trữ vị trí cũ
  modalhide.style.left = newX + "px";
  modalhide.style.top = newY + "px";
  prevX = newX;
  prevY = newY;
});

let count = 0;

noButton.addEventListener("mouseover", () => {
  count++;
  if (count === 10) {
    alert("Không click được vào không đâu, đừng cố bạn ôi, ahihi");
    count = 0; // Reset lại count sau khi alert
  }
});

function kiemTra() {
  // Lấy các phần tử radio
  const cauHoi1 = document.querySelector('input[name="cauhoi1"]:checked');
  const cauHoi2 = document.querySelector('input[name="cauhoi2"]:checked');
  const cauHoi3 = document.querySelector('input[name="cauhoi3"]:checked');
  const cauHoi4 = document.querySelector('input[name="cauhoi4"]:checked');

  // Kiểm tra xem cả 2 câu hỏi đã được trả lời chưa
  if (!cauHoi1 || !cauHoi2 || !cauHoi3 || !cauHoi4) {
    alert("Phải trả lời hết các câu hỏi đã bạn êi!!! Đã bảo là đừng có ăn gian rồi màaa");
    return;
  }

  // Kiểm tra đáp án
  if (cauHoi1.value === 'a' && cauHoi2.value === 'a' && cauHoi3.value === 'b' && cauHoi4.value === 'b') {
    // Ẩn form câu hỏi
    document.getElementById('myForm').style.display = 'none';

    // Hiển thị nút chúc mừng
    document.getElementById('showCardButton').style.display = 'block';
  } else {
    alert("Haizzzzz!!! Có câu trả lời sai dồi kìaaaa...trả lời lại đê");
  }
}

const showForm = document.getElementById('playButton');
const myForm = document.getElementById('myForm');

playButton.addEventListener('click', () => {
  myForm.style.display = 'block';
  playButton.style.display = 'none';
});