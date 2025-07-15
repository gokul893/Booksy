Booksy 📚

*A social media web app for book lovers.*


## Live Demo
> Deployed on Netlify: [<https://booksy.netlify.app>](https://b00ksy.netlify.app/)

## Tech Stack
- **Frontend:** React JS, Tailwind CSS  
- **Backend / Auth / DB:** Supabase  
- **Hosting:** Netlify  
- **Version Control:** Git & GitHub  

## Features
- 🔐 **User Authentication:** Sign‑up / login with Supabase Auth  
- 📖 **Share Reads:** Post your last‑read books, reviews & ideas  
- ❤️ **Social Interaction:** Like, comment & follow other readers  
- 🔍 **Real‑time Updates:** Live feed thanks to Supabase subscriptions  
- 🌗 **Responsive UI:** Works on mobile, tablet & desktop  

## Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/ngokulraj893/booksy-app.git
cd booksy-app

# 2. Install dependencies
npm install   # or yarn

# 3. Add Supabase env keys
cp .env.example .env
#   └─ Fill SUPABASE_URL and SUPABASE_ANON_KEY

# 4. Run locally
npm run dev    # Vite dev server
```

## Project Structure
```
src/
 ├─ components/      # Reusable UI
 ├─ pages/           # Route level pages
 ├─ hooks/           # Custom React hooks
 ├─ services/        # Supabase client & helpers
 └─ App.jsx
```

## Screenshots
| Home Feed | Post Modal | Profile Page |
|-----------|------------|--------------|
| ![feed] | ![modal] | ![profile] |

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](LICENSE)

---

> **Author:** [Gokul Raj R N](https://github.com/gokul893)  
> *M.Sc. Applied Data Science @ SRM Institute of Science & Technology*
