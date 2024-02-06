<script>
	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
	import { RESUME } from '$lib/params';

	const { item, title } = RESUME;
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
				let name = '';
				let email = '';
				let message = '';

				function handleSubmit() {
					// Logique de soumission du formulaire
					console.log('Nom:', name);
					console.log('Email:', email);
					console.log('Message:', message);

					// Réinitialiser les champs du formulaire
					name = '';
					email = '';
					message = '';
				}
			</script>

			<form on:submit|preventDefault={handleSubmit}>
				<label>
					Nom:
					<input type="text" bind:value={name} />
				</label>

				<label>
					Email:
					<input type="email" bind:value={email} />
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
