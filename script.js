document.addEventListener("DOMContentLoaded", () => {

   
    AOS.init({
        duration: 800, 
        once: true,    
    });

   
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

  
    function applyTheme(theme) {
        if (theme === "dark") {
            body.classList.add("dark-mode");
            body.classList.remove("light-mode");
        } else {
            body.classList.add("light-mode");
            body.classList.remove("dark-mode");
        }
    }

   
    const savedTheme = localStorage.getItem("theme") || "light";
    applyTheme(savedTheme);

  
    themeToggle.addEventListener("click", () => {
        let newTheme = body.classList.contains("dark-mode") ? "light" : "dark";
        applyTheme(newTheme);
        localStorage.setItem("theme", newTheme); 
    });

   
    new Typed(".typing-name", {
        strings: ["Davi Martins D. Rabelo"],
        typeSpeed: 70,
        backSpeed: 50,
        loop: false,
        showCursor: false, 
    });

    new Typed(".typing-dev", {
        strings: ["Desenvolvedor Front-end", "Desenvolvedor Back-end"],
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 2000,
        startDelay: 2000,
        loop: true,
    });

   
    const phoneInput = document.getElementById("telefone");
    if (phoneInput) {
        IMask(phoneInput, {
            mask: "(00) 00000-0000"
        });
    }

    
    const modal = document.getElementById("project-modal");
    const openModalBtn = document.getElementById("open-modal-btn");
    const closeModalBtn = document.querySelector(".modal-close");

    if (modal && openModalBtn && closeModalBtn) {
        
        openModalBtn.addEventListener("click", () => {
            modal.style.display = "flex";
        });

        
        closeModalBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });

        
        window.addEventListener("click", (e) => {
            if (e.target == modal) {
                modal.style.display = "none";
            }
        });
    }

    
    const skillItems = document.querySelectorAll(".skill-item");

    skillItems.forEach(item => {
        const header = item.querySelector(".skill-header");

        header.addEventListener("click", () => {
            
            
            item.classList.toggle("active");
        });
    });

});


    const contactForm = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    if (contactForm && formMessage) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault(); 

            
            const submitButton = contactForm.querySelector('button[type="submit"]');
            submitButton.disabled = true;

           
            setTimeout(() => {
                
                formMessage.textContent = "Mensagem enviada com sucesso! Aguarde o retorno!";
                formMessage.classList.remove("hidden-message");
                formMessage.classList.add("success-message");
                
               
                contactForm.reset();
                
               
                submitButton.disabled = false;

               
                setTimeout(() => {
                    formMessage.classList.remove("success-message");
                    formMessage.classList.add("hidden-message");
                    formMessage.textContent = "";
                }, 5000);

            }, 1000); 
        });
    }