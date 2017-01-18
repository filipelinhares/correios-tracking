# Correios Tracking

**Usage**
```
https://correios-tracking.now.sh/TRACKING_CODE
```
[__Example__](https://correios-tracking.now.sh/DU897123996BR)

**Response**
```json
// https://correios-tracking.now.sh/DU897123996BR


[
  {
    "numero": "DU897123996BR",
    "sigla": "DU",
    "nome": "ENCOMENDA E-SEDEX",
    "categoria": "E-SEDEX",
    "evento": [
      {
        "tipo": "BDE",
        "status": "01",
        "data": "12/12/2016",
        "hora": "19:06",
        "descricao": "Objeto entregue ao destinatário",
        "recebedor": "",
        "documento": "",
        "comentario": "",
        "local": "CEE BAURU",
        "codigo": "17034972",
        "cidade": "Bauru",
        "uf": "SP"
      },
      ...
    ]
  }
]
```

## Development
```
git clone git@github.com:filipelinhares/correios-tracking.git
cd correios-tracking
npm install
npm run start
```

## License
[MIT](LICENSE.md) © Filipe Linhares
