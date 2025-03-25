const formId = document.getElementById("form-id") as HTMLFormElement;
const formName = document.getElementById("name") as HTMLInputElement;
const formEmail = document.getElementById("email") as HTMLInputElement;
const navLinks = document.querySelectorAll('a[href^="#"]') as NodeListOf<HTMLAnchorElement>;
const scrollToTop = document.getElementById('arrow-id') as HTMLAnchorElement

//form validation logic
const formValidation = () => {
    console.log("Form submitted with name: ", formName.value, "and email:", formEmail.value);
    
    formName.value = "";
    formEmail.value= "";
};

const handleSubmit = (event: Event) => {
    event.preventDefault();
    formValidation();
};

if (formId) {
    formId.addEventListener("submit", handleSubmit);
}


//smooth scrolling logic

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        
        const targetId = link.getAttribute('href');
        if (targetId) {
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                // get the position relative to the viewport.
                const rect = targetSection.getBoundingClientRect();
                const scrollPosition = rect.top;
                //get the absolute scroll position relative to the entire document
                const absoluteScrollPosition = scrollPosition + window.scrollY;
                //scroll the page smoothly to the target section
                window.scrollTo({
                    top:absoluteScrollPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});


//Scroll-to-top logic

window.addEventListener('scroll', () => {
    //preventing "scrollToTop's value not being null"
    if (scrollToTop) {
        // Show/hide the button based on scroll position
        if (window.scrollY > 500) {
            scrollToTop.classList.remove("hidden");
            scrollToTop.classList.add("fixed", "bottom-4", "right-4");
        } else {
            scrollToTop.classList.add("hidden");
            scrollToTop.classList.remove("fixed", "bottom-4", "right-4");
        }
    }
});

if (scrollToTop) {
    scrollToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}