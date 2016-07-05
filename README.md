# Wolfram Link Preview for Mixmax

This is a [Mixmax](https://mixmax.com/) Link Resolver.

![Demo](https://github.com/tdquang/Wolfram-Alpha-Link-Resolver/blob/master/img/demo.gif)

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

Refresh Gmail with Mixmax installed. Click compose and paste a Wolfram Alpha url such as https://www.wolframalpha.com/input/?i=pineapples on a new line.


## License

The MIT License

Copyright (c) 2016 Quang Tran

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
