# WebViewer - AngularJS sample

[WebViewer](https://www.pdftron.com/webviewer) is a powerful JavaScript-based PDF Library that's part of the [PDFTron PDF SDK](https://www.pdftron.com). It provides a slick out-of-the-box responsive UI that interacts with the core library to view, annotate and manipulate PDFs that can be embedded into any web project.

![WebViewer UI](https://www.pdftron.com/downloads/pl/webviewer-ui.png)

This repo is specifically designed for any users interested in integrating WebViewer into AngularJS project. See [AngularJS.org](https://angularjs.org) for more information.

## Initial setup

Before you begin, make sure your development environment includes [Node.js](https://nodejs.org/en/).

## Install

```
git clone https://github.com/PDFTron/webviewer-angularjs-sample.git
cd webviewer-angularjs-sample
npm install
```

## Run

```
npm start
```

Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

## WebViewer APIs

See [API documentation](https://www.pdftron.com/documentation/web/guides/ui/apis).

## Enabling full API

PDFNetJS Full is a complete browser side PDF SDK, unlocking viewing, parsing and editing of PDF files. To enable full API, you can modify constructor in components.js:

```diff
WebViewer({
  path: 'lib', // path to the PDFTron 'lib' folder on your server
  initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/webviewer-demo.pdf',
+  fullAPI: true
}, document.getElementById('viewer'))
```

You can refer to this [guide for more information](https://www.pdftron.com/documentation/web/guides/full-api)

## Contributing

See [contributing](./CONTRIBUTING.md).

## License

See [license](./LICENSE).
![](https://onepixel.pdftron.com/webviewer-angularjs-sample)
