# Deploy to Render.com - FREE

Complete guide to deploy KhutinatiShop backend to Render's FREE tier.

---

## ✅ **What You Get FREE:**

- **Cost:** $0/month forever
- **Compute:** 750 hours/month
- **RAM:** 512 MB
- **Bandwidth:** 100 GB/month
- **Auto-deploy:** From GitHub
- **SSL:** Free HTTPS certificate

⚠️ **Note:** Free services spin down after 15 minutes of inactivity (takes 30-50 seconds to wake up on first request)

---

## 🚀 **Setup Steps:**

### **Step 1: Create Render Account**

1. Go to: https://render.com/
2. Click **"Get Started"**
3. Choose **"Sign up with GitHub"** (easiest)
4. Authorize Render to access your GitHub

---

### **Step 2: Create New Web Service**

1. After login, click **"New +"** button (top right)
2. Select **"Web Service"**
3. Click **"Connect a repository"**
4. Find and select **"khutinatiShop_backend"**
5. Click **"Connect"**

---

### **Step 3: Configure Service**

Fill in the form:

**Basic Settings:**
- **Name:** `khutinatishop-backend` (or your choice)
- **Region:** Choose closest to you (e.g., Oregon, Frankfurt)
- **Branch:** `main`
- **Root Directory:** Leave empty
- **Environment:** `Node`
- **Build Command:** `npm install`
- **Start Command:** `npm start`

**Instance Type:**
- Select **"Free"** plan ✅

---

### **Step 4: Add Environment Variables**

Click **"Advanced"** → **"Add Environment Variable"**

Add these 4 variables:

| Key | Value |
|-----|-------|
| `MONGODB_URI` | Your MongoDB Atlas connection string |
| `JWT_SECRET` | `j7HNA+ayK8XUeLSxm5sxX3+9boa3tce0Rvt2XcVIrnw=` |
| `JWT_EXPIRE` | `30d` |
| `FRONTEND_URL` | `https://khutinati-shop.web.app` |

**MongoDB URI Format:**
```
mongodb+srv://username:password@cluster.mongodb.net/khutiNatiShop_BD
```

---

### **Step 5: Deploy**

1. Click **"Create Web Service"** button at bottom
2. Wait 3-5 minutes for deployment
3. Watch the build logs

---

## 🎯 **After Deployment:**

### **Your API URL:**
```
https://khutinatishop-backend.onrender.com
```

### **Test Your API:**
```bash
curl https://khutinatishop-backend.onrender.com/api
```

Should return:
```json
{
  "success": true,
  "message": "Welcome to KhutinatiShop API",
  "version": "1.0.0"
}
```

---

## 🔄 **Auto-Deploy from GitHub:**

Once connected, Render automatically deploys when you:
- Push to `main` branch
- Merge a pull request

No GitHub Actions needed - Render handles it!

---

## 📊 **Monitor Your Service:**

### **Dashboard:**
https://dashboard.render.com/

### **View:**
- Build logs
- Deploy history
- Service health
- Environment variables

---

## ⚙️ **Useful Settings:**

### **Auto-Deploy:**
- ✅ Enabled by default
- Deploys on every push to main

### **Health Check Path:**
- Set to: `/api`
- Render will ping this to check if service is alive

### **Custom Domain:**
- Free tier supports custom domains
- Add your own domain later

---

## 🐛 **Troubleshooting:**

### **Service Won't Start:**
1. Check build logs
2. Verify environment variables are set
3. Check MongoDB connection string

### **Deployment Failed:**
1. Check Node.js version compatibility
2. Verify package.json has correct dependencies
3. Check for errors in build logs

### **Can't Connect to MongoDB:**
1. Verify MongoDB Atlas IP whitelist: `0.0.0.0/0`
2. Check username/password in connection string
3. Ensure database name is correct

### **CORS Issues:**
1. Check `FRONTEND_URL` environment variable
2. Verify it matches your actual frontend URL

---

## 💰 **Free Tier Limitations:**

### **Sleep After Inactivity:**
- Service spins down after 15 minutes of no requests
- First request after sleep takes 30-50 seconds
- Subsequent requests are instant

### **Workarounds:**
1. **Paid plan:** $7/month for always-on
2. **Ping service:** Use external service to ping every 14 minutes
3. **Accept it:** Good for development/low-traffic sites

---

## 🔝 **Upgrade to Paid (Optional):**

### **Starter Plan - $7/month:**
- ✅ No sleep (always on)
- ✅ Better performance
- ✅ More resources
- ✅ Priority support

To upgrade:
1. Go to service dashboard
2. Click "Upgrade" button
3. Select "Starter" plan

---

## 📝 **Update Frontend to Use Render API:**

In your React frontend, change API URL:

```javascript
// Before (local)
const API_URL = 'http://localhost:5000/api';

// After (production)
const API_URL = 'https://khutinatishop-backend.onrender.com/api';
```

Or use environment variables:
```javascript
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
```

---

## ✅ **Checklist:**

- [ ] Render account created
- [ ] Repository connected
- [ ] Service configured
- [ ] Environment variables added
- [ ] First deployment successful
- [ ] API tested and working
- [ ] Frontend updated with Render URL
- [ ] MongoDB Atlas IP whitelist updated

---

## 📚 **Useful Links:**

- **Render Dashboard:** https://dashboard.render.com/
- **Render Docs:** https://render.com/docs
- **Support:** https://render.com/docs/support

---

**Your backend is now deployed FREE on Render! 🎉**

First request may be slow, but that's normal on free tier!

