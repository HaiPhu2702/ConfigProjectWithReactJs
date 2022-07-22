/*

1. npm init

2.  Cài đặt react và react-dom
    ---> npm i --save react react-dom

3.Cài đặt webpack
    webpack là gói thư viện chính.
    webpack-cli dùng để chạy webpack bằng câu lệnh.
    webpack-dev-server dùng để chạy trong quá trình phát triển.
    ---> npm i --save-dev webpack webpack-cli webpack-dev-server

4.Cài đặt Babel
    @babel/core gói thư viện chính
    babel-loader chuyển đổi các file thành các mô-đun hợp lệ mà webpack có thể xử lý
    @babel/preset-env hỗ trợ chuyển đổi code Javascript mới về ES5
    @babel/preset-react chuyển đổi JSX sang JavaScript
    --->npm i --save-dev @babel/core babel-loader @babel/preset-env @babel/preset-react

5.Cài đặt html-webpack-plugin
    html-webpack-plugin giúp tạo file HTML cho bạn, bao gồm cả việc link sẵn các mô-đun được webpack đóng gói
    --->npm i --save-dev html-webpack-plugin

6.Tạo file code, file cấu hình
      Tao thư mục public trong đó có file index.html
      Tao thư mục src trong đó có file index.js
      Song Song pakage.json tạo 2 file :webpack.config.js và .babelrc

7.Cài đặt Trình biên dịch, Máy chủ và Trình tải
      trong webpack.config.js thêm:

const path = require("path");

/* thêm html-webpack-plugin vào file cấu hình sẽ được sử dụng ở bên dưới */
// const HtmlWebpackPlugin = require("html-webpack-plugin");
//
// module.exports = {
//   entry: "./src/index.js", // Đường dẫn tới file code index.js
//   output: {
//     path: path.resolve(__dirname, "dist"), // Thư mục chứa file được build ra
//     filename: "index.bundle.js", // Tên file được build ra
//     clean: true
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/, // Sử dụng babel-loader cho những file .js
//         exclude: /node_modules/, // Loại trừ thư mục node_modules
//         use: {
//           loader: "babel-loader"
//         }
//       }
//     ]
//   },
//   /* cấu hình file index.html từ folder public */
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: path.join(__dirname, "public", "index.html")
//     })
//   ]
// };
/*


8.packaga.json thêm và script
        "start": "webpack-dev-server --mode development",
        "build": "webpack --mode production"


9. thêm vào index.html
      <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
        </head>
        <body>
            <div id="root"></div>
        </body>
        </html>

10.  Tạo component trong file index.js
        import React from "react";  // import thư viện react
        import ReactDOM from "react-dom/client"; // import thư viện react-dom/client

        // Tạo component App
        function App() {
          return (
            <div>
              <h1>Hello World!</h1>
            </div>
          );
        }

        // Render component App vào "root"
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(<App />);

11.Thêm đoạn mã sau vào file .babelrc
       {
        "presets": ["@babel/preset-env", "@babel/preset-react"]
        }

12.Khởi động server
    npm start

13.Tạo bundle
   npm run build
 */


//cách2:

/*
Bước 1: Mở terminal đối với Hệ điều hành MacOS hoặc Command Prompt đối
           với hệ điều hành Windows ở thư mục bạn muốn cài đặt dự án

Bước 2: Cài đặt với câu lệnh create-react-app
        --->  npx create-react-app my-app

Bước 3: Khởi chạy ứng dụng
        Thực thi câu lệnh sau để trỏ tới my-app
          ---> cd my-app
        Thực thi câu lệnh sau để chạy dự án
        ----> npm start

 */