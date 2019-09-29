# Correios Tracking

[![Deploy with ZEIT Now](https://zeit.co/button)](https://zeit.co/new/project?template=https://github.com/filipelinhares/correios-tracking)

**Usage**
```
https://your-endpoint.now.sh.your-user/api/track?code=TRACKING_CODE
```

**Response**
```json
{
  "code": "PU847542099BR",
  "tracks": [
    {
      "locale": {
        "city": "Belo horizonte",
        "state": "MG"
      },
      "observation": {
        "from": "",
        "to": ""
      },
      "status": "Objeto postado",
      "trackedAt": "9/5/2019"
    },
    {
      "locale": {
        "city": "Belo horizonte",
        "state": "MG"
      },
      "observation": {
        "from": "De agência dos correios em Belo horizonte/MG ",
        "to": "Para unidade de tratamento em Belo horizonte/MG"
      },
      "status": "Objeto encaminhado",
      "trackedAt": "9/5/2019"
    },
    {
      "locale": {
        "city": "Belo horizonte",
        "state": "MG"
      },
      "observation": {
        "from": "De unidade de tratamento em Belo horizonte/MG ",
        "to": "Para unidade de tratamento em curitiba / pr"
      },
      "status": "Objeto encaminhado",
      "trackedAt": "9/6/2019"
    },
    {
      "locale": {
        "city": "Curitiba",
        "state": "PR"
      },
      "observation": {
        "from": "De unidade de tratamento em Curitiba/PR ",
        "to": "Para unidade de distribuição em cascavel / pr"
      },
      "status": "Objeto encaminhado",
      "trackedAt": "9/10/2019"
    },
    {
      "locale": {
        "city": "Cascavel",
        "state": "PR"
      },
      "observation": {
        "from": "",
        "to": ""
      },
      "status": "Objeto saiu para entrega ao destinatário",
      "trackedAt": "9/11/2019"
    },
    {
      "locale": {
        "city": "Cascavel",
        "state": "PR"
      },
      "observation": {
        "from": "",
        "to": ""
      },
      "status": "A entrega não pode ser efetuada - carteiro não atendido",
      "trackedAt": "9/11/2019"
    },
    {
      "locale": {
        "city": "Cascavel",
        "state": "PR"
      },
      "observation": {
        "from": "",
        "to": ""
      },
      "status": "A entrega não pode ser efetuada - carteiro não atendido",
      "trackedAt": "9/11/2019"
    },
    {
      "locale": {
        "city": "Cascavel",
        "state": "PR"
      },
      "observation": {
        "from": "De unidade de distribuição em Cascavel/PR ",
        "to": "Para agência dos correios em Cascavel/PR"
      },
      "status": "Objeto encaminhado",
      "trackedAt": "9/12/2019"
    },
    {
      "locale": {
        "city": "Cascavel",
        "state": "PR"
      },
      "observation": {
        "from": "",
        "to": ""
      },
      "status": "Objeto recebido na unidade dos correios",
      "trackedAt": "9/12/2019"
    },
    {
      "locale": {
        "city": "Cascavel",
        "state": "PR"
      },
      "observation": {
        "from": "Rua souza naves -",
        "to": ""
      },
      "status": "Objeto aguardando retirada no endereço indicado",
      "trackedAt": "9/12/2019"
    },
    {
      "locale": {
        "city": "Cascavel",
        "state": "PR"
      },
      "observation": {
        "from": "",
        "to": ""
      },
      "status": "Objeto entregue ao destinatário",
      "trackedAt": "9/20/2019"
    }
  ],
  "isDelivered": true,
  "postedAt": "2019-09-05T16:58:00.000Z",
  "updatedAt": "2019-09-20T10:31:00.000Z"
}
```

## Development
```
git clone git@github.com:filipelinhares/correios-tracking.git
cd correios-tracking
now dev
```

## License
[MIT](LICENSE.md) © Filipe Linhares
