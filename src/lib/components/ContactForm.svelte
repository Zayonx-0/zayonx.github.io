<script>
    let email = '';
    let subject = '';
    let message = '';

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = {
            email,
            subject,
            message
        };

        // Replace this URL with your form submission endpoint
        const response = await fetch('https://formspree.io/f/xwpevwbq', { // replace with your form endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert('Message sent successfully!');
            email = '';
            subject = '';
            message = '';
        } else {
            alert('Failed to send message.');
        }
    }
</script>

<form on:submit={handleSubmit}>
    <label for="email">Email:</label>
    <input type="email" id="email" bind:value={email} required>

    <label for="subject">Subject:</label>
    <input type="text" id="subject" bind:value={subject} required>

    <label for="message">Message:</label>
    <textarea id="message" bind:value={message} required></textarea>

    <button type="submit">Send Message</button>
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
        max-width: 400px;
        margin: auto;
    }

    label, input, textarea, button {
        margin-bottom: 10px;
    }
</style>
