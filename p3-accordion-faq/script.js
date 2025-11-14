const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        if (faq.classList.contains("open")) {
            faqs.forEach(f => {
                f.classList.remove("open");
            });
        } else {
            faqs.forEach(f => {
                f.classList.remove("open");
            })
            faq.classList.add("open");
        }
    })
});