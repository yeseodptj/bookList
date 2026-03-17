fetch(
  "https://script.google.com/macros/s/AKfycbw1MeXiG8VwVfHJFeUya1m8AmhpUAtO6gg3B67R9tMai_k_kLPP9QprMYCURKhDyKolOg/exec",
)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((book) => {
      const el = document.querySelector(
        `.book img[src="${book.id}.jpg"]`,
      )?.parentElement;

      if (!el) return;

      const statusBox = el.querySelector(".status");

      if (book.status === "borrowed") {
        el.dataset.status = "borrowed";
        statusBox.innerText = "❌ 대여중";
      }

      if (book.status === "available") {
        el.dataset.status = "available";
        statusBox.innerText = "✅ 대여 가능";
      }
    });
  });
