<script>
	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
	import { RESUME } from '$lib/params';

	const { item, title } = RESUME;
	let sujet = '';
	let message = '';

</script>

<CommonPage {title}>
	<div class="resume">
		{#if item}
			<a href={item}>
				<Chip size={'1.25em'}>Voir</Chip>
			</a>
		{:else}
			<Chip></Chip>
			<script>

				function handleSubmit() {
					// Logique de soumission du formulaire
					console.log('Sujet:', sujet);
					console.log('Message:', message);
					console.log('Message:', message);

					// Réinitialiser les champs du formulaire
					sujet = '';
					message = '';
				}
			</script>

			<form on:submit|preventDefault={handleSubmit}>
				<label>
					Nom:
					<input type="Sujet" bind:value={sujet} />
				</label>

				<label>
					Message:
					<textarea bind:value={message}></textarea>
				</label>

				<button type="submit">Envoyer</button>
			</form>
		{/if}
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
</style>
