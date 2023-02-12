
<!-- PROJECT LOGO -->
<p align="center">
  <a href="https://github.com/prasoonsoni/QuillAudits-Task">
    <img src="https://user-images.githubusercontent.com/75159757/174998135-dd9064bc-b10c-4d93-955a-f0b913f8f5cc.png" alt="Logo" width="100" height="100">
  </a>
  <h1 align="center">Soulmate Search👩‍❤️‍👨</h1>
  <p align="center">
    <a href="https://github.com/prasoonsoni/QuillAudits-Task"><strong>Explore the docs »</strong></a>
    <br />
    •
    <a href="https://github.com/prasoonsoni/QuillAudits-Task/issues">Report Bug</a>
    •
    <a href="https://github.com/prasoonsoni/QuillAudits-Task/issues">Request Feature</a>
    •
  </p>
</p>

## ℹ️ About the project
Find your match and make a Soulmate Search with Love Connection. Our user-friendly dating app makes it easy to find and connect with like-minded singles in your area. Start your journey to find love today!

`NOTE - This is only assignment task for QuillAudits Internship`




## ⚒️ Tech Stack
**Client:** React, ChakraUI, Socket.io Client

**Server:** Node.js, ExpressJS, Socket.io, Firebase, MongoDB


## ⚙️ API Reference

#### 1. Login User

```http
  POST /api/user/login
```

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. Your E-Mail Address |
| `password` | `string` | **Required**. Your Password |

#### 2. Sign Up User

```http
  POST /api/user/signup
```

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. Your E-Mail Address |
| `password` | `string` | **Required**. Your Password |

#### 3. Get Current User

```http
  GET /api/user/
```

| Header | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `auth-token` | `string` | **Required**. Your Authentication Token |

#### 4. Upload User Image

```http
  GET /api/image/upload
```

| Header | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `auth-token` | `string` | **Required**. Your Authentication Token |

| Form Data | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `filename` | `string` | **Required**. Your Image File |

#### 5. Get All Images

```http
  GET /api/image
```

| Header | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `auth-token` | `string` | **Required**. Your Authentication Token |

#### 6. Like User Image

```http
  GET /api/image/like/:imageId
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `auth-token` | `string` | **Required**. Your Authentication Token |

| Header | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `imageId` | `string` | **Required**. ID of image to be liked. |

#### 6. Superlike User Image

```http
  GET /api/image/superlike/:imageId
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `auth-token` | `string` | **Required**. Your Authentication Token |

| Header | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `imageId` | `string` | **Required**. ID of image to be liked. |






## 🤝 Contributing

Clone the project

```bash
  git clone https://github.com/prasoonsoni/QuillAudits-Task
```

Go to frontend & backend

```bash
  cd frontend
  cd backend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm i -D nodemon
  npx nodemon
```

Start the client

```bash
  npm run start
```


## Authors

- [@prasoonsoni](https://www.github.com/prasoonsoni)


## Related

Here are some related projects

[Awesome README](https://github.com/matiassingers/awesome-readme)


## Optimizations

What optimizations did you make in your code? E.g. refactors, performance improvements, accessibility

