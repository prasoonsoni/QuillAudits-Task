
<!-- PROJECT LOGO -->
<p align="center">
  <a href="https://github.com/prasoonsoni/QuillAudits-Task">
    <img src="https://cdn-icons-png.flaticon.com/512/6041/6041893.png" alt="Logo" width="100" height="100">
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

## 🖼️ Screenshots
#### 1. Hero Page

<img height="220px" src="https://user-images.githubusercontent.com/75159757/218319594-aef15629-2677-4462-a8ad-c36defa504bb.png" /> <img height="220px" src="https://user-images.githubusercontent.com/75159757/218319910-b615f3c2-dc97-437f-8856-d1cc12ef58e5.png" />

#### 2. Login Page

<img height="220px" src="https://user-images.githubusercontent.com/75159757/218320041-b5da07d0-c6b6-401e-afc6-0ba9f6690d05.png" /> <img height="220px" src="https://user-images.githubusercontent.com/75159757/218320015-680cbd35-e2d3-4fea-94c0-f4e9931ecd4e.png" />

#### 3. Sign up Page

<img height="220px" src="https://user-images.githubusercontent.com/75159757/218320142-3da3a86f-8201-47a9-945c-cf3c5234953b.png" /> <img height="220px" src="https://user-images.githubusercontent.com/75159757/218320159-5cc18b17-4520-480e-8146-269b5dad1f3a.png" />

#### 4. Image Upload Page

<img height="220px" src="https://user-images.githubusercontent.com/75159757/218320266-9220d220-a092-4a42-bdea-3d480da4057f.png" /> <img height="220px" src="https://user-images.githubusercontent.com/75159757/218320247-dca832d2-a841-42b2-9c16-badb0ef76745.png" />

#### 5. Dashboard Page

<img height="220px" src="https://user-images.githubusercontent.com/75159757/218320374-6a307cf3-b505-425e-ba1c-5a40cda50d0d.png" /> <img height="220px" src="https://user-images.githubusercontent.com/75159757/218320389-78c0d0e3-d50c-4bcf-9dbd-258eae1c5c7f.png" />

#### 6. Like Feature

<img height="220px" src="https://user-images.githubusercontent.com/75159757/218320566-30ee93b8-d3f3-460a-bcc5-93d1bc5a073a.png" /> <img height="220px" src="https://user-images.githubusercontent.com/75159757/218320531-d5d4a8e3-2388-4f9d-9d3d-9a433def5306.png" />

#### 7. Super Like Feature

<img height="220px" src="https://user-images.githubusercontent.com/75159757/218320617-f2b8171c-78a0-492f-840f-9ca64b5af1d7.png" /> <img height="220px" src="https://user-images.githubusercontent.com/75159757/218320644-01a65a8b-ffde-4d30-bd0f-b68cefce6794.png" />

#### 8. Logout Feature

<img height="220px" src="https://user-images.githubusercontent.com/75159757/218320733-500fb04d-4aa4-4640-8914-42972019bfcc.png" /> <img height="220px" src="https://user-images.githubusercontent.com/75159757/218320743-418c97bf-dee0-4cd4-8fe9-62f6ff50c86b.png" />



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


## 🤫 Environment Variables

To run this project, you will need to add the following environment variables to your .env file in both frontend and backend.

#### Backend
- Firebase
`apiKey`
`authDomain`
`projectId`
`storageBucket`
`messagingSenderId`
`appId`
`measurementId`

- Others
`MONGO_URI`
`HOST`
`JWT_SECRET`

#### Frontend
`REACT_APP_BASE_URL`


## 👨‍💻 Authors 

- [@prasoonsoni](https://www.github.com/prasoonsoni)


