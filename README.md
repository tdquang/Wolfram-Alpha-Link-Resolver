# Wolfram Link Preview for Mixmax

This is a [Mixmax](https://mixmax.com/) Link Resolver.

![Alt Text](https://github.com/tdquang/Wolfram-Alpha-Link-Resolver/img/demo.gif)

## Running locally

1. Install using `npm install`
2. Run using `npm start`
3. Verify it works by visiting https://localhost:9146/resolver?url=https%3A%2F%2Fwww.wolframalpha.com%2Finput%2F%3Fi%3Dpineapples in your browser. It should not throw an error.
4. Open up the Mixmax Dashboard, click integrations, and click Add Link Resolver.
5. Enter the following for the parameters:

| Input Name  | Value |
| ------------- | ------------- |
| Description  | WolframAlpha (wolframalpha.com/input/?i=*)  |
| Regular Expression  | wolframalpha\.com\/input\/\?i=[^\/]+$  |
| Resolver URL  | https://localhost:9146/resolver  |

6. Refresh Gmail with Mixmax installed. Click compose and paste a Wolfram Alpha url such as https://www.wolframalpha.com/input/?i=pineapples on a new line.
