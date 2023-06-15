# Single File Web Component
A collection of ideas and code for creating Single File Web Components.

The original SFWC article: https://jordanbrennan.hashnode.dev/single-file-web-componentsmaybe

## File structure
SFWC files are named like `<tag-name>.html` and the basic structure is:
```html
<sfwc>
  <template>
    <style></style>
  </template>
  <script></script>
</template>
```
Importing a SFWC (or a bundle) is done with an object element:
```html
<object data="filename.html" type="text/html"></object>
```
Note that object elements must be styled with `width: 0; height: 0`; they cannot be hidden.

## Utils
[`bindTemplateEvents(element)`](./bind-template-events.js) Replaces descendents' `onevent` attributes with an event listener of the same type. 

[`getTemplateRefs(element)`](./get-template-refs.js) A Proxy object that finds all descendents with an id and caches them on the returned object.

## Examples
The [counter component](./x-counter.html) demonstrates the basic SFWC concept.

The [country search component](./x-countries.html) demonstrates fetching data and rendering it in a searchable and sortable table.
