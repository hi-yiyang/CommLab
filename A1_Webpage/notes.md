# Display properties

## Absolute basics

display: inline (minimum size) / block (full-width) / inline-block (customized width and height)

`<div>`: block element

`<span>`: inline element

## Flexbox

### HTML
```
		<div class="flexbox-container">
			<div class="flex-item-1">

			</div>
		</div>
```

### CSS

	.flexbox-container{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly / space-around / space-between / center / flex-start / flex-end / space;
		align-items: stretch (default) / (same as justify-content);
		flex-direction: row (default) / column (reverse main and vertical axes);
		align-content: ...;
		gap: ...;
	}

	.flex-item-n{
		align-self: ... (same as align-items);
		flex: [flex-grow] [flex-shrink] [flex-basis];
		flex-grow: [any number, 0 by default];
		flex-shrink: [any number, 1 by default];
		flex-basis: [number or percentage];
	}

# Fonts

## Spectral & Rubik/Nunito

	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Spectral|Rubik">

```
body{
	font-family: Rubik, Open Sans, Helvetica, Trebuchet MS, sans-serif;
}

h1{
	font-family: Spectral, Georgia, serif;
	font-size: 5em;
}

h2{
	font-family: Spectral, serif;
	font-size: 2.5em;
}

h3{
	font-size: 2em;
}
```
