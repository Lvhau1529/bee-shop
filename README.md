# Link demo

https://bee-shop.vercel.app/

# Set up Firebase

- Go to console.firebase.google.com, choose Add project
- Name project, continue, turn off Google analytics, create project
- In project overview, Get started by adding Firebase to your app, choose Web
- Name web app, register app, copy app config --> replace to config in ./configs/firebase
- Back to project overview, choose Authentication on sidebar, get started
- Choose Email/password --> enable
- Go to tab user --> add user --> use this user to login
- Choose Firestore Database on sidebar, Create database, next, choose location
- Start collection, collection ID = "products", create product with name: string, img: string, price: number, sale: number, createdAt: number (eg: 1625496671306)

# Temporary log out

- Go to file useUserAuth.js --> uncomment firebase.auth().signOut() --> save
- After signing out, comment this line to login again
