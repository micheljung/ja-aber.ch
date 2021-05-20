import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from "react";

class MyDocument extends Document {

  render() {
    return (
      <Html className="dark" lang="de">
        <Head />
        <body className="dark:bg-gray-800">
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
