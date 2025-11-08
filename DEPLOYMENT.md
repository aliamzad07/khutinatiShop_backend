# Firebase Deployment with GitHub Actions

This guide will help you deploy the KhutinatiShop backend to Firebase with automatic deployment on push to main.

## Prerequisites

1. **Firebase Project**
2. **GitHub Repository** (already set up)
3. **Firebase CLI** installed

---

## Step 1: Install Firebase CLI

```bash
npm install -g firebase-tools
```

---

## Step 2: Login to Firebase

```bash
firebase login
```

---

## Step 3: Initialize Firebase Project

```bash
cd /Users/aatapu/KhutinatiShop_backend

# Initialize Firebase
firebase init

# Select:
# - Functions: Configure and deploy Cloud Functions
# - Hosting: Configure files for Firebase Hosting
```

**During init:**
- Use existing project: **khutinatishop** (or create new one)
- Functions language: **JavaScript**
- Install dependencies: **Yes**
- Hosting public directory: **public**
- Single-page app: **No**
- GitHub Actions: **Skip** (we'll configure manually)

---

## Step 4: Get Firebase Token

```bash
firebase login:ci
```

**Copy the token** - you'll need it for GitHub Secrets.

---

## Step 5: Set Up GitHub Secrets

Go to your GitHub repository:
https://github.com/aliamzad07/khutinatiShop_backend/settings/secrets/actions

Click **"New repository secret"** and add these:

### Required Secrets:

1. **FIREBASE_TOKEN**
   - Value: Token from `firebase login:ci`

2. **FIREBASE_SERVICE_ACCOUNT**
   - Go to: Firebase Console → Project Settings → Service Accounts
   - Click "Generate new private key"
   - Copy the entire JSON content

3. **MONGODB_URI**
   - Value: `mongodb+srv://username:password@cluster.mongodb.net/khutiNatiShop_BD`
   - Use MongoDB Atlas for production

4. **JWT_SECRET**
   - Value: Strong random string (e.g., `openssl rand -base64 32`)

5. **JWT_EXPIRE**
   - Value: `7d`

6. **FRONTEND_URL**
   - Value: Your frontend URL (e.g., `https://khutinatishop.web.app`)

7. **PORT**
   - Value: `5000`

---

## Step 6: Update Firebase Project ID

Edit `.firebaserc` and update the project ID:

```json
{
  "projects": {
    "default": "your-actual-firebase-project-id"
  }
}
```

Also update in `.github/workflows/deploy.yml`:
```yaml
projectId: your-actual-firebase-project-id
```

---

## Step 7: Install Firebase Dependencies

```bash
npm install firebase-functions firebase-admin
```

---

## Step 8: Test Locally

```bash
# Start Firebase emulator
firebase emulators:start

# Or test the function
npm run dev
```

---

## Step 9: Manual Deploy (First Time)

```bash
firebase deploy
```

This will deploy:
- Cloud Functions
- Hosting

---

## Step 10: Commit and Push

```bash
git add .
git commit -m "Add Firebase deployment with GitHub Actions"
git push origin main
```

**GitHub Actions will automatically:**
1. Install dependencies
2. Run tests (if configured)
3. Deploy to Firebase
4. Update hosting and functions

---

## Deployment Workflow

### On Push to Main:
```
Push to main → GitHub Actions trigger → Build → Deploy to Firebase ✅
```

### On PR Merge:
```
PR merged to main → GitHub Actions trigger → Build → Deploy to Firebase ✅
```

---

## Check Deployment Status

1. **GitHub Actions:** https://github.com/aliamzad07/khutinatiShop_backend/actions
2. **Firebase Console:** https://console.firebase.google.com/
3. **Live URL:** https://khutinatishop.web.app (or your custom domain)

---

## Environment Variables in Production

Firebase Functions will use environment variables from GitHub Secrets.

To set them manually:
```bash
firebase functions:config:set \
  mongodb.uri="your-mongodb-uri" \
  jwt.secret="your-jwt-secret"
```

---

## Useful Commands

```bash
# View logs
firebase functions:log

# Deploy only functions
firebase deploy --only functions

# Deploy only hosting
firebase deploy --only hosting

# Delete deployment
firebase hosting:channel:delete <channelId>

# List all projects
firebase projects:list
```

---

## Troubleshooting

### Build Fails
- Check GitHub Actions logs
- Verify all secrets are set correctly
- Ensure dependencies are in package.json

### Function Timeout
- Increase timeout in firebase.json:
```json
"functions": {
  "runtime": "nodejs18",
  "timeoutSeconds": 60,
  "memory": "512MB"
}
```

### MongoDB Connection Issues
- Use MongoDB Atlas (not local)
- Whitelist Firebase IPs: `0.0.0.0/0`
- Check connection string format

### CORS Issues
- Verify FRONTEND_URL in secrets
- Check CORS configuration in server.js

---

## Production Checklist

- [ ] Firebase project created
- [ ] Firebase CLI installed
- [ ] Firebase initialized
- [ ] All GitHub Secrets added
- [ ] MongoDB Atlas configured
- [ ] .firebaserc updated with project ID
- [ ] First manual deploy successful
- [ ] GitHub Actions workflow tested
- [ ] Environment variables verified
- [ ] Logs monitoring set up

---

## Cost Considerations

Firebase Free Plan (Spark):
- 125K function invocations/month
- 1GB storage
- 10GB bandwidth

For production, consider **Blaze Plan** (pay as you go).

---

## Support & Documentation

- **Firebase Docs:** https://firebase.google.com/docs
- **GitHub Actions:** https://docs.github.com/en/actions
- **Firebase Functions:** https://firebase.google.com/docs/functions

---

**Your backend will now deploy automatically on every push to main! 🚀**

