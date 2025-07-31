// تمييز رابط التنقل النشط تلقائيًا بناءً على اسم الملف
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");
  const current = location.pathname.split("/").pop();
  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === current || (href === "index.html" && current === "")) {
      link.classList.add("active");
    }
  });

  // مثال: التعامل مع إرسال نموذج (يمكن ربطه لاحقًا بخدمة عبر API)
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("شكرًا! تم إرسال الرسالة. سنرد عليك قريبًا.");
      contactForm.reset();
    });
  }
});
