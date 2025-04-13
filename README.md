## BackEnd

- `npm run build`
- `npm run dev`

# Actividades de la materia Herramientas para el desarrollo de aplicaciones con IA

Este proyecto contiene distintas ramas, cada una corresponde a una actividad diferente dentro del módulo.

## Ramas del Proyecto

### 1. Traductor de Idiomas
Utiliza la API de OpenAI y DeepSeek para traducir textos entre diferentes idiomas.
- **Rama principal, traductor solo con OpenAI:** `main`
- **Rama de actividad, selección de modelo:** `feature/add_deepseek_activity`

### 2. Asistente de Aerolínea
Implementa un asistente virtual para aerolíneas usando la API de asistentes de OpenAI.
- **Rama de actividad:** `feature/add_IA_assistent`

### 3. Generador de Imágenes
Genera imágenes utilizando la API de OpenAI - DALL-E 2 y 3.
- **Rama de actividad DALL-E 2:** `feature/add_BE_images_AI`
- **Rama final de actividad, selección de modelo y otros parametros:** `feature/add_image_AI_final_activity`

## Variables de Entorno

```env
BASE_URL_DEEPSEEK="https://api.deepseek.com/v1"
API_KEY_DEEPSEEK=""

BASE_URL_OPENAI="https://api.openai.com/v1"
API_KEY_OPENAI=""
ASSISTENT_KEY=""

MODEL_MAKETA="gpt-3.5-turbo"
MODEL_OPENAI="gpt-3.5-turbo"
MODEL_DEEPSEEK="deepseek-chat"
MODEL_DALL_E_2="dall-e-2"
MODEL_DALL_E_3="dall-e-3"

RESTRICTION_SYSTEM_1="Eres un traductor espectacular."
RESTRICTION_SYSTEM_2="Debes responder solo con la traducción del texto."
RESTRICTION_SYSTEM_3="No debes responder nada más que la traducción del texto."

RESTRICTION_SYSTEM_IMAGE_1="Eres un diseñador gráfico espectacular."
RESTRICTION_SYSTEM_IMAGE_2="Debes responder solo con la imagen solicitada."
RESTRICTION_SYSTEM_IMAGE_3="El fondo de la imagen debe ser sólido."

USER_REQUEST="Traduce al {IDIOMA}: {TEXTO}"

PORT="3123"
