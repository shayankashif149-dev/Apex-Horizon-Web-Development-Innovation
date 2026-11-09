  // 1. Operational Slider Engine
        let currentIndex = 0;
        const slides = document.querySelectorAll('.cinema-slide');

        function renderSlide(targetIndex) {
            slides[currentIndex].classList.remove('active');
            currentIndex = (targetIndex + slides.length) % slides.length;
            slides[currentIndex].classList.add('active');
        }

        function shiftSlide(step) {
            renderSlide(currentIndex + step);
        }

        // Automatic Interval
        setInterval(() => shiftSlide(1), 6000);

        // 2. Active Scroll Router Indicator
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('.nav-item');

        window.addEventListener('scroll', () => {
            let currentSectionId = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= sectionTop - 150) {
                    currentSectionId = section.getAttribute('id');
                }
            });

            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href').includes(currentSectionId)) {
                    item.classList.add('active');
                }
            });
        });

        // 3. Operational Form Submission Engine
        function handleFormSubmit(event) {
            event.preventDefault();
            const status = document.getElementById('formStatus');
            const name = document.getElementById('clientName').value;
            
            status.style.display = 'block';
            status.style.color = '#00f2fe';
            status.innerText = "Transmitting data to Apex Horizon network...";

            setTimeout(() => {
                status.style.color = '#4facfe';
                status.innerText = `Thank you ${name}! Your transmission has been received successfully.`;
                document.getElementById('agencyForm').reset();
            }, 1500);
        }
