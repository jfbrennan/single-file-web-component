# Single File Web Component
A collection of ideas, hacks, and code for creating Single File Web Components.

The original SFWC article: https://jordanbrennan.hashnode.dev/single-file-web-componentsmaybe

## File structure
SFWC files are named as `<tag-name>.html` and the basic structure is:
```html
<sfwc>
  <template>
    <style></style>
  </template>
  <script></script>
</template>
```
Importing a SFWC (or a bundle of them) is done with the object element:
```html
<object data="filename.html" type="text/html"></object>
```
Note that object elements must be styled with `width: 0; height: 0;`. They cannot be hidden.

## Utils
[`bindTemplateEvents(element)`](./bind-template-events.js) Replaces descendents' `onevent` attributes with an event listener of the same type. 

[`getTemplateRefs(element)`](./get-template-refs.js) A Proxy object that finds all descendents with an id and caches them on the returned object.

## Examples
The [counter component](./x-counter.html) demonstrates the basic SFWC concept.

The [country search component](./x-countries.html) demonstrates fetching data and rendering it in a searchable and sortable table.

## Other topics
**Custom HTML elements and the TAC CSS methodology**

Some components do not need JavaScript, so what should you do? The status quo is to turn them into React (or whatever framework you're using) components anyway. The other common approach is to define them as CSS classes. Neither is good. One is over-engineered and tightly coupled to a framework despite having no need for one, and the other introduces a completely different paradigm that lacks the ability to define a sensible API and can't scale beyond CSS. For these reasons the [TAC methodology](https://jordanbrennan.hashnode.dev/tac-a-new-css-methodology) was created.

**Frameworks that work with Web Components**

At this point virtually all JavaScript frameworks except React are compatible with Web Components. React 19 is supposed to fix this (six years late). As of June 2023 there is no release date for React 19.

**HTML Modules thread**

HTML imports were abandoned. HTML modules are the potential solution, but [the thread is 6 years old](https://github.com/WICG/webcomponents/issues/645) and there doesn't seem to be a spec advancing.

