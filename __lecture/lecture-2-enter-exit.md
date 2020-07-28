# 4.7.2 Enter/Exit animations

---

### What if we want something to _fade in on mount_?

---

How would you solve this?

---

### Keyframe animations

Part of CSS, not React:

```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.wrapper {
  animation: fadeIn 500ms;
}
```

---

### In styled-components

Super similar!

```js
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  animation: ${fadeIn} 500ms;
`;
```

---

# Exercises

Add a fade-in animation

---

https://codesandbox.io/s/vigorous-snyder-x3px9

---

https://codesandbox.io/s/keen-tharp-nkleq

---

### What about exit animations?

What if you need to animate something as it unmounts?

---

### Short answer: Don't.

It's usually not worth the trouble.

---

### Longer answer: Use a tool

[`react-transition-group`](https://reactcommunity.org/react-transition-group/) exists to solve this problem.

But seriously, maybe just don't.
