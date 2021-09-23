# Useful React hooks

- [useColorPair()](https://github.com/sajTempler/react-hooks#usecolorpair)


### useColorPair

Generates color for background and calculates text color to have correct contrast from any string input.

```js
const App = () => {
  const [input, setInput] = useState("");

  /**
   * @type {{ color: string, backgroundColor: string }}
   */
  const { color, backgroundColor } = useColorPair(input);

  return (
    <input
      style={{ color, backgroundColor }}
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
  );
};
```