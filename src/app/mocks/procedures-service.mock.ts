export const MockProceduresService = {
  procedureSearch$: () => [MockProcedure]
}

export const MockProcedure = {
  "term": "Ultrasound",
  "active": true,
  "languageCode": "en",
  "module": "900000000000207008",
  "concept": {
    "conceptId": "16310003",
    "active": true,
    "definitionStatus": "FULLY_DEFINED",
    "moduleId": "900000000000207008",
    "fsn": {
      "term": "Diagnostic ultrasonography (procedure)",
      "lang": "en"
    },
    "pt": {
      "term": "Ultrasonography",
      "lang": "en"
    },
    "id": "16310003"
  }
}

export const MockProcedures = [
  MockProcedure,
  {
    "term": "Duplex ultrasound",
    "active": true,
    "languageCode": "en",
    "module": "900000000000207008",
    "concept": {
      "conceptId": "312236008",
      "active": true,
      "definitionStatus": "PRIMITIVE",
      "moduleId": "900000000000207008",
      "fsn": {
        "term": "Duplex ultrasound (qualifier value)",
        "lang": "en"
      },
      "pt": {
        "term": "Duplex ultrasound",
        "lang": "en"
      },
      "id": "312236008"
    }
  },
  {
    "term": "A scan ultrasound",
    "active": true,
    "languageCode": "en",
    "module": "900000000000207008",
    "concept": {
      "conceptId": "113113000",
      "active": true,
      "definitionStatus": "PRIMITIVE",
      "moduleId": "900000000000207008",
      "fsn": {
        "term": "Ophthalmic echography, A-mode (procedure)",
        "lang": "en"
      },
      "pt": {
        "term": "Ophthalmic echography, A-mode",
        "lang": "en"
      },
      "id": "113113000"
    }
  }
]
