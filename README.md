[![Build and Test](https://github.com/sajTempler/react-hooks/actions/workflows/build-and-test.yml/badge.svg)](https://github.com/sajTempler/react-hooks/actions/workflows/build-and-test.yml)

# Useful React hooks

- [useColorPair()](https://github.com/sajTempler/react-hooks#usecolorpair) - generate background color and pick text color with correct contrast, from any string input


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

Generate background color and pick text color with correct contrast, from any string input.

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
