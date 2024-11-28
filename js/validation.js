$(document).ready(function() {
    $('#subscribe').on('submit', function(event) {
        const fields = [
            { element: $('input[name=email]'), pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, invalidMessage: "Email введена не правильно" },
        ];

        let isValid = true;

        fields.forEach(field => {
            const value = field.element.val().trim();

            if (value === '') {
                field.element.addClass('error');
                isValid = false;
                event.preventDefault();
            } else if (field.pattern && !field.pattern.test(value)) {
                field.element.addClass('error').val('');
                isValid = false;
                event.preventDefault();
            } else {
                field.element.removeClass('error');
            }
        });

        if (isValid) {
            alert("Ваше повідомлення відправлено");
        }
    });

    $('#contact-form').on('submit', function(event) {
        const fields = [
            { element: $('input[name=email]'), pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, invalidMessage: "Email введена не правильно" },
            { element: $('select[name=subject]') },
            { element: $('textarea[name=message]') }
        ];

        let isValid = true;

        fields.forEach(field => {
            const value = field.element.val().trim();

            if (value === '') {
                field.element.addClass('error');
                isValid = false;
                event.preventDefault();
            } else if (field.pattern && !field.pattern.test(value)) {
                field.element.addClass('error').val('');
                isValid = false;
                event.preventDefault();
            } else {
                field.element.removeClass('error');
            }
        });

        if (isValid) {
            alert("Ваше повідомлення відправлено");
        }
    });
});
