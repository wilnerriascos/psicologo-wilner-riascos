# Configuración de Google Analytics y Search Console

## Google Analytics 4 Setup

### Paso 1: Crear una propiedad en Google Analytics

1. Ve a [Google Analytics](https://analytics.google.com/)
2. Inicia sesión con tu cuenta de Google
3. Haz clic en "Crear propiedad" o "Administrador"
4. Completa los detalles:
   - **Nombre de la propiedad**: "Wilner Riascos Sánchez - Psicólogo"
   - **Zona horaria**: Selecciona tu zona horaria
   - **Moneda**: USD o tu moneda preferida
5. Acepta los términos de servicio

### Paso 2: Crear una aplicación web

1. En la sección "Recopilación de datos", selecciona "Web"
2. Completa los detalles:
   - **URL del sitio web**: `https://psicologo-wilner-riascos.manus.space`
   - **Nombre de la secuencia**: "Sitio Web Principal"
3. Haz clic en "Crear secuencia"

### Paso 3: Obtener tu ID de medición

1. Después de crear la secuencia, verás tu **ID de medición** (formato: G-XXXXXXXXXX)
2. Copia este ID

### Paso 4: Actualizar el código en el sitio

Reemplaza `G-XXXXXXXXXX` en el archivo `client/index.html` con tu ID de medición real:

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-TU-ID-AQUI"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-TU-ID-AQUI', {
    'page_path': window.location.pathname,
    'anonymize_ip': true
  });
</script>
```

### Paso 5: Verificar la instalación

1. Vuelve a Google Analytics
2. Ve a "Administrador" > "Secuencias de datos" > "Web"
3. Haz clic en tu secuencia web
4. Verifica que el estado muestre "Recopilando datos" (puede tardar 24-48 horas en mostrar datos)

---

## Google Search Console Setup

### Paso 1: Acceder a Search Console

1. Ve a [Google Search Console](https://search.google.com/search-console)
2. Inicia sesión con tu cuenta de Google

### Paso 2: Agregar tu propiedad

1. Haz clic en "Agregar propiedad"
2. Selecciona "URL prefix"
3. Ingresa: `https://psicologo-wilner-riascos.manus.space`
4. Haz clic en "Continuar"

### Paso 3: Verificar la propiedad

Tienes varias opciones para verificar. La más fácil es usar el **meta tag HTML**:

1. En la sección "Verificar propiedad", selecciona "Etiqueta HTML"
2. Copia el contenido del atributo `content` del meta tag
3. Reemplaza `placeholder-verification-code` en `client/index.html` con el código que copiaste:

```html
<meta name="google-site-verification" content="TU-CODIGO-AQUI" />
```

4. Guarda los cambios
5. Vuelve a Search Console y haz clic en "Verificar"

### Paso 4: Enviar tu Sitemap

1. Una vez verificado, ve a "Sitemaps" en el menú izquierdo
2. Ingresa la URL de tu sitemap: `https://psicologo-wilner-riascos.manus.space/sitemap.xml`
3. Haz clic en "Enviar"

### Paso 5: Enviar tu Robots.txt

1. Ve a "Configuración" > "Robots.txt"
2. Verifica que tu robots.txt sea accesible en: `https://psicologo-wilner-riascos.manus.space/robots.txt`

---

## Monitoreo y Análisis

### Google Analytics - Métricas Importantes

- **Usuarios**: Número de visitantes únicos
- **Sesiones**: Número de visitas
- **Páginas por sesión**: Promedio de páginas visitadas
- **Duración de sesión**: Tiempo promedio en el sitio
- **Tasa de rebote**: Porcentaje de visitantes que se van sin interactuar

### Google Search Console - Métricas Importantes

- **Clics**: Número de clics desde resultados de búsqueda
- **Impresiones**: Número de veces que tu sitio aparece en resultados
- **CTR (Click-Through Rate)**: Porcentaje de impresiones que resultan en clics
- **Posición promedio**: Posición promedio en resultados de búsqueda
- **Palabras clave**: Términos de búsqueda que traen tráfico

---

## Próximos Pasos

1. **Espera 24-48 horas** para que Google comience a recopilar datos
2. **Monitorea regularmente** tu tráfico y palabras clave
3. **Optimiza contenido** basado en las palabras clave que traen tráfico
4. **Crea más contenido** sobre temas que generan interés
5. **Mejora la velocidad** del sitio si es necesario

---

## Soporte

Si tienes problemas durante la configuración:

1. Verifica que hayas reemplazado correctamente los códigos
2. Espera 24 horas para que los cambios se propaguen
3. Revisa la documentación oficial de Google Analytics y Search Console
4. Consulta con soporte de Google si persisten los problemas
