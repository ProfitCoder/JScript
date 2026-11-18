
# 📘 Source Code Documentation

## 🎨 Dynamic Color Palette — JavaScript

This document explains the JavaScript implementation of the Dynamic Color Palette exercise.

The application uses JSON data to dynamically create HTML elements and display different colors with their corresponding properties.

## 1. JSON Data Structure

The application starts with a JavaScript object containing an array of colors.

```javascript
const colors = {
    "colors": [
        {
            "color": "red",
            "category": "hue",
            "type": "primary",
            "code": {
                "rgba": [255, 0, 0, 1],
                "hex": "#F00"
            }
        }
    ]
};
```

### Explanation

Each color contains:

| Property | Description |
|----------|-------------|
| `color` | Name of the color |
| `category` | Classification of the color |
| `type` | Primary or secondary classification |
| `code.rgba` | RGBA color values |
| `code.hex` | HEX color code |

The `type` property is optional and may not be present in every color object.

## 2. Selecting the HTML Body

```javascript
const principal = document.querySelector("body");
```

The `querySelector()` method selects the HTML `body` element.

The selected element is stored in the `principal` variable.

All dynamically generated color sections will be inserted inside this element.

## 3. Iterating Through the Colors

```javascript
for(const colores of colors.colors)
{
    // Code executed for each color
}
```

The `for...of` loop iterates through the `colors` array.

During each iteration, the variable `colores` contains the information of the current color.

This allows the application to generate one HTML section for each color.

## 4. Creating HTML Elements

```javascript
const divNow = document.createElement("div");
```

The `createElement()` method creates a new HTML element.

In this case, a `div` is created to represent an individual color section.

Additional paragraph elements are created to display the information:

```javascript
const p = document.createElement("p");
const p1 = document.createElement("p");
const p2 = document.createElement("p");
const p3 = document.createElement("p");
```

Each paragraph is used to display a different property of the color.

## 5. Applying Dynamic Styles

```javascript
divNow.style.backgroundColor = colores.code.hex;
```

This instruction assigns the background color using the HEX value stored in the JSON object.

For example:

- `#000` creates a black background.
- `#F00` creates a red background.
- `#00F` creates a blue background.
- `#0F0` creates a green background.

Other styles can also be applied dynamically:

```javascript
divNow.style.padding = "30px 60px";
divNow.style.height = "200px";
divNow.style.fontSize = "25px";
```

The `style` property allows JavaScript to modify the appearance of HTML elements without using an external CSS file.

## 6. Conditional Text Color

```javascript
if(colores.code.hex === "#000" ||
   colores.code.hex === "#F00" ||
   colores.code.hex === "#00F")
{
    divNow.style.color = "white";
}
```

This conditional statement checks the background color.

If the background is black, red, or blue, the text color changes to white.

This helps improve text visibility against darker backgrounds.

## 7. Displaying JSON Information

```javascript
p.textContent = colores.color;
p1.textContent = colores.category + " " + (colores.type || "");
p2.textContent = "rgba(" + colores.code.rgba + ")";
p3.textContent = colores.code.hex;
```

The `textContent` property assigns text to an HTML element.

Each paragraph displays:

- `p`: Color name.
- `p1`: Color category and type.
- `p2`: RGBA color code.
- `p3`: HEX color code.

The expression `(colores.type || "")` prevents displaying `undefined` when the type property does not exist.

## 8. Adding Elements to the DOM

```javascript
divNow.appendChild(p);
divNow.appendChild(p1);
divNow.appendChild(p2);
divNow.appendChild(p3);
```

The `appendChild()` method inserts each paragraph inside the color container.

After adding the paragraphs, the complete container is inserted into the HTML document:

```javascript
principal.appendChild(divNow);
```

This process is repeated automatically for every color stored in the JSON array.

## 9. Execution Flow

The application follows these steps:

1. Define the color data using a JSON structure.
2. Select the HTML `body` element.
3. Iterate through the colors using `for...of`.
4. Create a new `div` for each color.
5. Apply the corresponding background color.
6. Create the paragraph elements.
7. Insert the color information.
8. Apply text styles.
9. Add the paragraphs to the `div`.
10. Insert the completed `div` into the document.

## 10. JavaScript Methods Used

| Method / Property | Purpose |
|-------------------|---------|
| `querySelector()` | Selects an HTML element |
| `createElement()` | Creates a new HTML element |
| `textContent` | Assigns text to an element |
| `style` | Applies CSS properties dynamically |
| `appendChild()` | Adds elements to the DOM |
| `for...of` | Iterates through an array |
| `if` | Executes code based on a condition |

## 🎯 Conclusion

This exercise demonstrates how JavaScript can generate and modify HTML content dynamically using structured JSON data.

It provides practical experience with DOM manipulation, loops, conditional statements, and dynamic styling.

---

**Author:** [ProfitCoder](https://github.com/ProfitCoder)

**Date:** November 18, 2026

**Project:** [Exercise 1 — Dynamic Color Palette](https://github.com/ProfitCoder/JScript/tree/main/ExcercisesUnit5/Excercise1_Div_JSON)
