# Code-Challenge
___

Api que nos permite hacer consultas de datos por medio de un `JSON` de los partners proporcionado por parte de VisualPartnership, los requerimientos son los siguientes:

* Habilitar un endpoint para la consulta de todos los partners y sus datos completos
* Habilitar un endpoint para obtener los emails de los partners  que tengan una certificación
* Habilitar un endpoint para obtener los partners con mas de 500 creditos
___
## Requisitos

Nececitas tener`node` y`npm`. 
Revisar la [pagina de node](https://nodejs.org/es/download/) para ver el procedimiento dependiendo de tu SO.

___

## Diagramas

Funcionamiento del proyecto.

```mermaid
          graph TD
    A[Reader]-->B(PartnerService)
    B --> C[PartnerController]
    C --> D[Server]
    D --> |Port 3000|E[Endpoint]
    E --> F[Request 1]
    E --> G[Request 2]
    E --> H[Request 3]
```

## Diseño de las clases
Estructura de las clases en el proyecto.
```mermaid
 classDiagram      
      class PartnerController{
        +getListOfPartners()$
        +EmailForCertificatedPartners()$
        +partnersUp500Credits(credits)$
      }
      class PartnerService{
          +getListOfPartners(partner)$
          +getEmailForCertificatedPartners(partner)$
          +partnersAbove500(partner,amountCredits)$
      }
      class Reader{
          +readJsonFile(path)$
      }
      Reader-->PartnerService
      PartnerService-->PartnerController
      PartnerController-->Server
```

## Endpoints

| Endpoint | Request |
|---|---|
| `localhost:3000/v1/partner/` | `localhost:3000/v1/partner` | 
| `localhost:3000/v1/partner/emails` | `localhost:3000/v1/partner` | 
| `localhost:3000/v1/partner/student/:credits` | `localhost:3000/v1/partner/student/500` | 

## Response
Endpoint `localhost:3000/v1/partner`

![partnerlist](https://user-images.githubusercontent.com/94636815/166703699-ac98e095-ba44-4491-ae6c-7ae03e355017.png)
___
Endpoint `localhost:3000/v1/partner`

![partneremails](https://user-images.githubusercontent.com/94636815/166704051-61c24ca4-ee50-4e53-b08e-3d43ef2c8398.png)
___
Endpoint `localhost:3000/v1/partner/student/500`

![students500](https://user-images.githubusercontent.com/94636815/166704240-ae8ccfd1-0839-4f70-9788-b72442ef2cb4.png)

## Postman

Pudes usar postman para consultar los endpoints.

https://user-images.githubusercontent.com/94636815/166490034-ac9cd206-87ee-44ff-a8c0-026184954937.mp4

## Tecnologías

* JavaScript
* Jest
* Github Actions
* ESLint
* Express
* Postman


