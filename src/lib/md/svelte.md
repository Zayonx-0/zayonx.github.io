# Svelte

---

[`Svelte`](https://svelte.dev/) est un framework ou langage de composants front-end gratuit et open-source créé par Rich Harris et maintenu par les membres de l'équipe principale de Svelte. Svelte n'est pas une bibliothèque JavaScript monolithique importée par les applications : au lieu de cela, Svelte compile les templates HTML en code spécialisé qui manipule directement le DOM, ce qui peut réduire la taille des fichiers transférés et offrir de meilleures performances côté client. Le code de l'application est également traité par le compilateur, qui insère des appels pour recalculer automatiquement les données et réafficher les éléments de l'interface utilisateur lorsque les données sur lesquelles ils dépendent sont modifiées. Cela évite également les frais généraux associés aux représentations intermédiaires d'exécution, tels que le DOM virtuel, contrairement aux frameworks traditionnels (comme React et Vue) qui effectuent la majeure partie de leur travail à l'exécution, c'est-à-dire dans le navigateur.

Le compilateur lui-même est écrit en TypeScript. Son code source est sous licence MIT et hébergé sur GitHub.

<br/>

## Exemples d'utilisation 

```ts
<script>
    let count = 1;
    $: doubled = count * 2;
</script>

<p>{count} * 2 = {doubled}</p>

<button on:click={() => count = count + 1}>Count</button>
```

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

> Svelte is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members.