# Single File Web Component
A collection of ideas and code for creating Single File Web Components.

The original SFWC article: https://jordanbrennan.hashnode.dev/single-file-web-componentsmaybe

## File structure
SFWC files are named like `<tag-name>.html` and the basic structure is:
```
<sfwc>
  <template>
    <style></style>
  </template>
  <script></script>
</template>
```

## Utils
[`bindTemplateEvents(element)`](./bind-template-events.js) Replaces descendents' `onevent` attributes with an event listener of the same type. 

[`getTemplateRefs(element)`](./get-template-refs.js) Finds all elements with id attribute.

## Examples
The [country search component](./x-countries.html) demonstrates fetching data and rendering it in a searchable and sortable table.

