# Useful React hooks

- [useColorPair()](https://github.com/sajTempler/react-hooks#usecolorpair)


# Installation

```
npm i @sajtempler/react-hooks
```

or

```
yarn add @sajtempler/react-hooks
```

# Usage

### useColorPair

Generates color for background and calculates text color to have correct contrast from any string input.

```js
import { useColorPair } from "@sajtempler/react-hooks";

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

![image](https://user-images.githubusercontent.com/7117333/134502385-afb873d4-4ada-44ee-b212-b4cc5070f742.png)

add two more "!!"

![image](https://user-images.githubusercontent.com/7117333/134502432-77899335-fbfc-4f2d-b088-332728341eae.png)

#### Development

Running tests requires `node >= 16` due to `crypto.webcrypto` for SHA-1 digest.
