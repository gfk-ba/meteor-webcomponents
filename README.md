meteor-webcomponents
====================
Proof of concept for adding custom elements to polymer in meteor.

Best way to use this package is to clone it into your packages directory.
Do not forget to update the package.js when adding new elements.

meteor-button is just a example:

```
<meteor-button buttonType='test' spinner={{getDemoVar}} action="saveForm" extraClass="btn-success">Save</meteor-button>
```
