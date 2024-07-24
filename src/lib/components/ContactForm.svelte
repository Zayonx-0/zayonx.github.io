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

        const response = await fetch('https://formspree.io/f/xwpevwbq', { // replace with your form endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert('Message envoyé avec succès! Merci de m\'avoir contacté.');
            email = '';
            subject = '';
            message = '';
        } else {
            alert('Erreur lors de l\'envoi du message. Veuillez réessayer.');
        }
    }
</script>

<form on:submit={handleSubmit}>
    <label for="email">Email:</label>
    <input type="email" id="email" bind:value={email} required>

    <label for="subject">Objet:</label>
    <input type="text" id="subject" bind:value={subject} required>

    <label for="message">Message:</label>
    <textarea id="message" bind:value={message} required style="height: 200px;"></textarea>

    <button type="submit">Envoyer le message</button>
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
        max-width: 400px;
        margin: auto;
        width: 400px;
    }

    label, input, textarea, button {
        margin-bottom: 10px;
    }
</style>
