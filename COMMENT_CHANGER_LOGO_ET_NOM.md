# 🎨 Comment Changer le Logo et le Nom du Site

## ✅ Déjà Fait pour Vous

### **1. Titre du Site (Onglet du Navigateur)**
✅ **Changé de:** "CryptoLearn Academy - Master Digital Finance"  
✅ **Changé en:** "RWAMS Traders - Simulateur de Trading"

**Fichier modifié:** `app/layout.tsx` (lignes 9-10)

---

## 🎨 Comment Ajouter Votre Logo

### **Étape 1: Préparer Votre Logo**

#### **Format Recommandé:**
- **Type:** PNG (avec fond transparent)
- **Taille:** 192x192 px ou 512x512 px
- **Ratio:** 1:1 (carré)
- **Poids:** < 100 KB

#### **Si vous avez un logo rectangulaire:**
- Utilisez un fond transparent
- Centrez votre logo
- Exportez en PNG

---

### **Étape 2: Renommer Votre Logo**

**Nom requis:** `logo.png`

```
Votre fichier actuel:
mon_logo.png → renommer en: logo.png
```

**IMPORTANT:** Le nom doit être exactement `logo.png` (en minuscules)

---

### **Étape 3: Placer le Logo**

#### **Dossier de destination:**

```
Projet:
C:\Users\petit\CascadeProjects\cryptolearn-academy\

Dossier public:
C:\Users\petit\CascadeProjects\cryptolearn-academy\public\
```

#### **Comment y accéder:**

**Option 1: Via l'Explorateur Windows**
1. Ouvrez l'Explorateur de fichiers
2. Naviguez vers: `C:\Users\petit\CascadeProjects\cryptolearn-academy\`
3. Ouvrez le dossier `public`
4. Collez votre fichier `logo.png` ici

**Option 2: Via VSCode/Windsurf**
1. Dans la barre latérale, trouvez le dossier `public`
2. Faites glisser votre fichier `logo.png` dans ce dossier

---

### **Étape 4: Structure Finale**

```
public/
├── logo.png                 ← Votre logo (NOUVEAU)
├── favicon.ico              ← Optionnel (voir ci-dessous)
└── screenshots/
    └── ...
```

---

### **Étape 5: Vérifier le Résultat**

1. **Actualisez le site:**
   ```
   Ctrl+Shift+R (force reload)
   ```

2. **Où voir le logo:**
   - En haut à gauche dans la barre de navigation
   - À côté du texte "RWAMS Traders"
   - Effet glow violet-cyan au survol

---

## 🔧 Modifier le Nom du Site (dans la Navigation)

Le nom "RWAMS Traders" est affiché dans le Navbar.

### **Si vous voulez changer ce nom:**

**Fichier:** `components/Navbar.tsx`  
**Ligne:** 48

**Code actuel:**
```tsx
<span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
  RWAMS Traders
</span>
```

**Pour changer:**
Remplacez `RWAMS Traders` par le nom de votre choix.

**Exemple:**
```tsx
<span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
  MonApp Trading
</span>
```

---

## 🎯 Ajouter un Favicon (Icône de l'Onglet)

Le favicon est la petite icône qui apparaît dans l'onglet du navigateur.

### **Option 1: Favicon Simple**

**1. Créer votre favicon:**
- Utilisez https://favicon.io/
- Uploadez votre logo
- Téléchargez le favicon généré

**2. Renommer:**
```
favicon-32x32.png → favicon.ico
```

**3. Placer dans:**
```
public/favicon.ico
```

---

### **Option 2: Favicon Avancé (Multiple Tailles)**

**1. Générer tous les formats:**
- Allez sur https://realfavicongenerator.net/
- Uploadez votre logo
- Téléchargez le pack complet

**2. Extraire les fichiers:**
```
Fichiers reçus:
- favicon.ico
- favicon-16x16.png
- favicon-32x32.png
- apple-touch-icon.png
- android-chrome-192x192.png
- android-chrome-512x512.png
```

**3. Placer dans public/:**
```
public/
├── favicon.ico
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png
├── android-chrome-192x192.png
└── android-chrome-512x512.png
```

**4. Ajouter dans layout.tsx:**

Dans `app/layout.tsx`, ajoutez dans la balise `<head>` :

```tsx
export const metadata: Metadata = {
  title: "RWAMS Traders - Simulateur de Trading",
  description: "Application de simulation de trading crypto avec IA, analyses avancées et formation complète",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};
```

---

## 📊 Spécifications du Logo

### **Pour le Logo Principal (Navbar):**
```
Nom: logo.png
Taille: 192x192 px (ou 512x512 px)
Format: PNG avec transparence
Ratio: 1:1 (carré)
Affichage: 48x48 px dans le Navbar
```

### **Pour le Favicon:**
```
Nom: favicon.ico
Taille: 32x32 px ou 16x16 px
Format: ICO ou PNG
Couleurs: Idéalement simples et reconnaissables
```

---

## 🎨 Personnalisation Avancée du Logo

### **Modifier la Taille du Logo:**

Dans `components/Navbar.tsx` (lignes 36-42):

```tsx
<Image
  src="/logo.png"
  alt="RWAMS Traders Logo"
  width={48}          ← Modifier ici (largeur)
  height={48}         ← Modifier ici (hauteur)
  className="rounded-xl transform group-hover:scale-110 transition-transform duration-300"
/>
```

**Exemple pour logo plus grand:**
```tsx
width={64}
height={64}
```

---

### **Modifier l'Effet Glow du Logo:**

Dans `components/Navbar.tsx` (lignes 44-45):

```tsx
{/* Effet glow autour du logo */}
<div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity" />
```

**Pour changer les couleurs du glow:**
```tsx
{/* Glow rouge-orange */}
<div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity" />

{/* Glow vert-émeraude */}
<div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity" />

{/* Glow bleu */}
<div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity" />
```

---

### **Supprimer l'Effet Glow:**

Si vous ne voulez pas d'effet glow, supprimez simplement les lignes 44-45 dans `Navbar.tsx`.

---

## 🔄 Checklist de Vérification

Avant de finaliser, vérifiez:

- [ ] Logo préparé (PNG, 192x192 px minimum)
- [ ] Logo renommé en `logo.png`
- [ ] Logo placé dans `public/logo.png`
- [ ] Favicon créé (optionnel)
- [ ] Favicon placé dans `public/favicon.ico` (optionnel)
- [ ] Titre du site changé dans `app/layout.tsx` ✅ (déjà fait)
- [ ] Nom dans Navbar vérifié (RWAMS Traders par défaut)
- [ ] Site actualisé (Ctrl+Shift+R)

---

## ❓ Résolution de Problèmes

### **Problème: Le logo ne s'affiche pas**

**Solutions:**
1. ✅ Vérifiez que le fichier s'appelle exactement `logo.png`
2. ✅ Vérifiez qu'il est dans le dossier `public/`
3. ✅ Actualisez avec Ctrl+Shift+R (force reload)
4. ✅ Vérifiez que l'image n'est pas corrompue
5. ✅ Redémarrez le serveur de développement

### **Problème: Le logo est déformé**

**Solutions:**
1. ✅ Utilisez un logo carré (ratio 1:1)
2. ✅ Exportez en 192x192 px ou 512x512 px
3. ✅ Ajustez `width` et `height` dans Navbar.tsx

### **Problème: Le favicon ne s'affiche pas**

**Solutions:**
1. ✅ Videz le cache du navigateur (Ctrl+Shift+Delete)
2. ✅ Fermez et rouvrez le navigateur
3. ✅ Vérifiez que `favicon.ico` est dans `public/`
4. ✅ Les favicons peuvent prendre quelques minutes à se mettre à jour

---

## 🎨 Outils Recommandés

### **Pour Créer/Éditer Votre Logo:**
- **Canva:** https://www.canva.com/ (facile, en ligne)
- **Figma:** https://www.figma.com/ (professionnel)
- **GIMP:** https://www.gimp.org/ (gratuit, puissant)
- **Photopea:** https://www.photopea.com/ (Photoshop en ligne, gratuit)

### **Pour Générer les Favicons:**
- **Favicon.io:** https://favicon.io/ (simple)
- **RealFaviconGenerator:** https://realfavicongenerator.net/ (complet)

### **Pour Optimiser les Images:**
- **TinyPNG:** https://tinypng.com/ (compression PNG)
- **Squoosh:** https://squoosh.app/ (Google, très bon)

---

## 📝 Résumé Rapide

1. **Titre du site:** ✅ Déjà changé en "RWAMS Traders"
2. **Nom dans Navbar:** "RWAMS Traders" (modifiable dans `Navbar.tsx` ligne 48)
3. **Logo:** Créez `logo.png` (192x192 px) et placez dans `public/`
4. **Favicon:** Créez `favicon.ico` et placez dans `public/` (optionnel)
5. **Actualiser:** Ctrl+Shift+R

---

## ✨ Résultat Final

Une fois votre logo ajouté:
- 🎨 **Logo visible** en haut à gauche
- ✨ **Effet glow** au survol
- 📱 **Responsive** sur mobile
- 🌟 **Professionnel** et moderne
- 🔖 **Favicon** dans l'onglet (si ajouté)

---

**Besoin d'aide? Consultez ce guide ou demandez assistance ! 🚀**
