# UI-Extra Nodes

UI-Extra nodes are nodes that make UI more flexible and easier to use.

## 🔲Dynamic Node

---

Change UI Component on Single `<div/>`

```litegraph
{
  "title": "Dynamic",
  "inputs": [
    { "type": -1, "label": "update" },
    { "label": "component" }
  ],
  "outputs": [{ "label": "component" }]
}
```

### ◽Location

`UI` > `Extra` > `Dynamic`

### ◽Slots

#### Inputs

| Label         | Type        | Description                                                  |
| ------------- | ----------- | ------------------------------------------------------------ |
| **update**    | `Event`     | Update the single component when the input component changed |
| **component** | `component` | UI Component                                                 |

#### Outputs

| Label         | Type        | Description                                                   |
| ------------- | ----------- | ------------------------------------------------------------- |
| **component** | `component` | Single Dynamic div component that display the input component |

## Source Code

UI-Extra-Nodes is Open Source and You can see the code in [Github](https://github.com/DesingExpress/UI-Extra-Nodes)

## License

UI-Extra-Nodes is licensed under the [MIT License](https://opensource.org/licenses/MIT).
