# ESPECIFICACIONES TÉCNICAS Y DE SEGURIDAD WEB

## 1. INFORMACIÓN GENERAL DEL PROYECTO
* **Nombre de la Empresa:** Collins Automated Intelligence (CollinsAI)
* **Dominio Principal:** collinsai.me
* **Ubicación de Operaciones:** Medellín, Colombia
* **Modelo de Negocio:** Agencia de Inteligencia de Automatización para PYMEs (Fase 1) con evolución proyectada a Servicios Productizados (Fase 2) y Plataforma SaaS Híbrida (Fase 3).

---

## 2. ARQUITECTURA WEB Y STACK TECNOLÓGICO
La infraestructura web de CollinsAI está diseñada bajo principios de modularidad, alta disponibilidad y autoalojamiento (self-hosting) para garantizar el control total de los datos.

### 2.1 Componentes del Stack
* **Backend Core:** FastAPI (Python) - Seleccionado por su alto rendimiento, tipado asíncrono nativo y generación automática de documentación OpenAPI.
* **Motor de Automatización:** n8n (Self-hosted) - Nodo central para la orquestación de flujos de trabajo e integraciones avanzadas.
* **Bases de Datos:** * PostgreSQL (Persistencia de datos relacionales, logs de auditoría y estados).
  * Redis (Capa de caché de alta velocidad y gestor de colas de tareas).
* **Entorno de Despliegue:** Contenedores Docker sobre infraestructura Linux (Cloud VPS dedicado).
* **Integraciones de Inteligencia Artificial:** OpenAI APIs combinadas con Modelos de Código Abierto (Open-Source LLMs) autoalojados según el caso de uso.

---

## 3. REQUISITOS DE LICENCIAMIENTO COMERCIAL
Para mitigar riesgos legales y asegurar el cumplimiento corporativo durante la transición de Agencia a SaaS, se definen los siguientes lineamientos de licenciamiento:

| Componente | Licencia Actual / Estado | Consideración Comercial para el Modelo SaaS |
| :--- | :--- | :--- |
| **FastAPI** | MIT License | Permite uso comercial, modificación y distribución sin restricciones. Ideal para SaaS. |
| **Python / PostgreSQL** | Licencias Permisivas (PSFL / PostgreSQL License) | Completamente libres para uso comercial e infraestructura de nube. |
| **n8n** | n8n Faircode (Sustainable Use License) | **Crítico:** Permite uso interno y servicios de agencia, pero **prohíbe expresamente** revender n8n como un servicio de plataforma directa a terceros. Al pasar a la **Fase 3 (SaaS)**, se requerirá transicionar a una **Licencia n8n Embed** (comercial) para poder embeber flujos en la plataforma propietaria de manera legal. |
| **OpenAI API** | Comercial por consumo (Enterprise/Pay-as-you-go) | Sujeto a los términos de uso comercial de OpenAI. Requiere políticas claras de transferencia de datos de cara al cliente final. |

---

## 4. ARQUITECTURA DE SEGURIDAD DE INFRAESTRUCTURA
La promesa de marca de CollinsAI exige una infraestructura seria e inteligente. Se implementan los siguientes controles de seguridad a nivel de servidor y red:

### 4.1 Aislamiento de Contenedores (Docker Security)
* Ningún contenedor dentro del stack de producción debe ejecutarse con privilegios de usuario `root`.
* Implementación de redes internas aisladas de Docker (`bridge networks` personalizadas). El backend de FastAPI y n8n se comunican con PostgreSQL y Redis a través de redes que no están expuestas al internet público.

### 4.2 Control de Accesos y Red (Firewalling)
* Configuración de un Firewall a nivel de Host (UFW / iptables) que bloquee por defecto todo el tráfico entrante, permitiendo únicamente los puertos indispensables:
  * `80/TCP` (Redirección HTTP a HTTPS)
  * `443/TCP` (Tráfico HTTPS Encriptado)
  * `Port SSH Personalizado` (Acceso administrativo restringido únicamente mediante llaves criptográficas SSH-RSA/Ed25519; autenticación por contraseña deshabilitada).

---

## 5. CONFIGURACIÓN HTTPS Y ENCRIPTACIÓN (SSL/TLS)
Para proteger la integridad de las credenciales de los clientes y las transferencias de datos, el dominio `collinsai.me` implementará configuraciones criptográficas estrictas.

### 5.1 Protocolos y Cifrados TLS
* **Versión Mínima:** TLS 1.3 (y TLS 1.2 como fallback estricto). Se deshabilitan por completo TLS 1.0 y TLS 1.1 debido a vulnerabilidades conocidas.
* **Ciphers Autorizados:** Suites de cifrado con Secreto Perfecto hacia Adelante (ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384).
* **Gestión de Certificados:** Automatización del ciclo de vida de los certificados mediante Let's Encrypt, utilizando desafíos DNS o HTTP-01 con renovación automática cada 60 días.

### 5.2 Cabeceras de Seguridad HTTP (Security Headers)
Cualquier proxy inverso (Nginx, Traefik o Caddy) situado frente a FastAPI y n8n debe inyectar obligatoriamente las siguientes cabeceras en cada respuesta:

```http
# Forzar navegación segura encriptada durante un año, incluyendo subdominios
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload

# Prevenir ataques de Clickjacking impidiendo que el sitio sea embebido en iframes externos
X-Frame-Options: DENY

# Mitigar ataques de inyección de código XSS forzando al navegador a respetar los tipos MIME declarados
X-Content-Type-Options: nosniff

# Controlar la información de referencia enviada en las peticiones salientes
Referrer-Policy: strict-origin-when-cross-origin

# Política de Seguridad de Contenido (CSP) estricta para mitigar Cross-Site Scripting
Content-Security-Policy: default-src 'self'; script-src 'self' [https://trusted-apis.com](https://trusted-apis.com); style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self' [https://api.openai.com](https://api.openai.com);