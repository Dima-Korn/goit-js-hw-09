const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

function saveFormData() {
    const formData = {
        email: emailInput.value.trim(),
        message: messageInput.value.trim() 
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function loadFormData() {
    const savedFormData = localStorage.getItem('feedback-form-state'); 
    if (savedFormData) {
        const formData = JSON.parse(savedFormData);
        emailInput.value = formData.email;
        messageInput.value = formData.message;
    }
}

loadFormData();

form.addEventListener('input', saveFormData);

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    if (emailInput.value.trim() !== '' && messageInput.value.trim() !== '') {
        const formData = {
            email: emailInput.value.trim(), 
            message: messageInput.value.trim() 
        };

        console.log(formData); 

        localStorage.removeItem('feedback-form-state'); 

        emailInput.value = '';
        messageInput.value = '';
    }
});
