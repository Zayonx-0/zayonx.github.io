<script>
    import Chip from '$lib/components/Chip/Chip.svelte';
    import CommonPage from '$lib/components/CommonPage.svelte';
    import { RESUME } from '$lib/params';
    import ContactForm from '$lib/components/ContactForm.svelte'; // Adjust the path if necessary

    const { item, title } = RESUME;
</script>

<CommonPage {title}>
    <div class="resume">
        {#if item}
            <a href={item}>
                <Chip size={'1.25em'}>Voir</Chip>
            </a>
        {:else}
            <Chip>Veuillez remplir le formulaire ci-dessous si vous souhaitez obtenir mon CV ou me contacter.</Chip>
        {/if}
    </div>
    <div class="contact-form">
        <ContactForm />
    </div>
</CommonPage>

<style lang="scss">
    .resume {
        display: flex;
        justify-content: center;
        margin-top: 20px;

        & > a {
            color: inherit;
        }
    }
    .contact-form {
        margin-top: 40px;
        display: flex;
        justify-content: center;
    }
</style>
