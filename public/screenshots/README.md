# 📸 Guide - Ajouter Vos Screenshots de l'Application

## 📁 Dossier des Screenshots

**Emplacement:** `public/screenshots/`

Placez vos captures d'écran de l'application dans ce dossier.

---

## 📱 Screenshots à Ajouter (8 images)

### **Noms de fichiers requis:**

1. **`dashboard.jpg`** - Dashboard Principal
   - Capture d'écran de la vue d'ensemble du portefeuille
   - Ratio: 9:19.5 (format téléphone)

2. **`trading.jpg`** - Trading en Temps Réel
   - Capture d'écran des ordres de trading
   - Montrez l'interface de passage d'ordres

3. **`ai-analysis.jpg`** - Analyses IA
   - Capture d'écran des signaux et prédictions
   - Interface d'analyse avec graphiques

4. **`performance.jpg`** - Performances
   - Capture d'écran des résultats et statistiques
   - Tableau de performance détaillé

5. **`alerts.jpg`** - Alertes Personnalisées
   - Capture d'écran des notifications
   - Interface de configuration des alertes

6. **`overlays.jpg`** - Overlays Customisés
   - Capture d'écran des indicateurs visuels personnalisés
   - Interface de création d'overlays

7. **`progression.jpg`** - Carte de Progression
   - Capture d'écran de l'évolution de l'utilisateur
   - Graphiques de progression

8. **`strategies.jpg`** - Stratégies Avancées
   - Capture d'écran du backtesting
   - Interface d'optimisation des stratégies

---

## 📐 Spécifications Recommandées

### **Format:**
- **Type:** JPG (qualité 90-100%)
- **Ratio:** 9:19.5 (format iPhone)
- **Largeur recommandée:** 800px
- **Hauteur recommandée:** 1733px
- **Résolution:** 72-144 DPI

### **Qualité:**
- ✅ Haute résolution
- ✅ Interface claire et lisible
- ✅ Pas de données personnelles sensibles
- ✅ Mode sombre de préférence

---

## 🎨 Design actuel (Placeholders)

**Actuellement affichés:** Gradients colorés avec icônes

Chaque téléphone affiche:
- Gradient de couleur thématique
- Icône au centre
- Couleurs correspondant au type de screenshot

### **Couleurs des placeholders:**

1. Dashboard → Violet/Pourpre
2. Trading → Cyan/Bleu
3. IA → Pourpre/Rose
4. Performance → Émeraude/Teal
5. Alertes → Orange/Rouge
6. Overlays → Indigo/Pourpre
7. Progression → Rose/Rose
8. Stratégies → Ambre/Jaune

---

## 🚀 Comment Ajouter Vos Screenshots

### **Étape 1: Prendre les Captures**
```bash
# Sur votre téléphone ou émulateur
# Prenez des captures d'écran de votre application
# Ratio: 9:19.5 (format iPhone/Android)
```

### **Étape 2: Renommer les Fichiers**
```
mes_captures/
├── screenshot_1.jpg → renommer en dashboard.jpg
├── screenshot_2.jpg → renommer en trading.jpg
├── screenshot_3.jpg → renommer en ai-analysis.jpg
├── screenshot_4.jpg → renommer en performance.jpg
├── screenshot_5.jpg → renommer en alerts.jpg
├── screenshot_6.jpg → renommer en overlays.jpg
├── screenshot_7.jpg → renommer en progression.jpg
└── screenshot_8.jpg → renommer en strategies.jpg
```

### **Étape 3: Copier dans le Dossier**
```bash
# Copiez vos 8 fichiers dans:
public/screenshots/

# Structure finale:
public/
└── screenshots/
    ├── dashboard.jpg
    ├── trading.jpg
    ├── ai-analysis.jpg
    ├── performance.jpg
    ├── alerts.jpg
    ├── overlays.jpg
    ├── progression.jpg
    └── strategies.jpg
```

### **Étape 4: Actualiser le Site**
```bash
# Le site va automatiquement charger vos images
# Aucun redémarrage nécessaire (Hot Reload)
# Actualisez juste la page dans le navigateur
```

---

## 🎯 Vérification

### **Checklist avant de publier:**

- [ ] Les 8 fichiers sont présents
- [ ] Noms de fichiers corrects (voir liste ci-dessus)
- [ ] Format PNG
- [ ] Ratio 9:19.5 (format téléphone)
- [ ] Bonne qualité (min 800px largeur)
- [ ] Pas de données sensibles visibles
- [ ] Interface lisible et professionnelle

---

## 🔄 Remplacement Facile

Pour remplacer une image:
1. Supprimez l'ancienne (ex: `dashboard.jpg`)
2. Copiez la nouvelle avec le même nom
3. Actualisez le navigateur (Ctrl+F5 pour forcer le rechargement)

---

## 🎨 Optimisation des Images (Optionnel)

### **Pour de meilleures performances:**

```bash
# Si vous voulez optimiser vos images:

# Option 1: Utiliser TinyJPG
https://tinyjpg.com/

# Option 2: ImageOptim (Mac)
https://imageoptim.com/

# Option 3: JPEGoptim ou mozjpeg
jpegoptim --max=90 image.jpg
cjpeg -quality 90 -optimize image.jpg
```

---

## ❓ Aide & Support

### **Problème: L'image ne s'affiche pas**

**Solutions:**
1. Vérifiez le nom du fichier (sensible à la casse)
2. Vérifiez que l'image est bien dans `public/screenshots/`
3. Actualisez le navigateur (Ctrl+F5)
4. Vérifiez que l'image n'est pas corrompue

### **Problème: Image déformée**

**Solutions:**
1. Vérifiez le ratio 9:19.5
2. Utilisez la largeur recommandée (800px)
3. Exportez en PNG de haute qualité

### **Problème: Image trop lourde**

**Solutions:**
1. Optimisez avec TinyPNG
2. Réduisez la résolution à 800x1733px
3. Utilisez PNG-8 au lieu de PNG-24 si pas de transparence

---

## 📸 Exemple de Capture Idéale

```
Téléphone avec:
- Interface claire et lisible
- Mode sombre (recommandé)
- Données fictives (pas réelles)
- UI complète et professionnelle
- Pas de barre de notification système
- Ratio 9:19.5 (750x1624 ou 800x1733)
- Format JPG avec qualité 90-100%
```

---

## 🎉 Résultat Final

Une fois vos 8 screenshots ajoutés:
- ✨ Page professionnelle
- 📱 Mockups réalistes
- 🎨 Design cohérent
- 🚀 Chargement rapide
- 💎 Prêt pour production

---

**Besoin d'aide? Consultez le code dans:**
`app/screenshots/page.tsx`

**Les placeholders actuels sont dans:**
`app/screenshots/page.tsx` (lignes 149-167)
