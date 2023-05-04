export const results = {
  "tools": [
      {
          "name": "toolA",
          "url": "tool1.com",
          "priceInformation": {
              "freeOptionAvailable": "yes",
              "availablePricesPerPerson" : [
                  {
                      "value" : "1 person",
                      "price" : "50"
                  },
                  {
                      "value" : "2-4 people",
                      "price" : "500"
                  },
                  {
                      "value" : "5-10 people",
                      "price" : "5000"
                  },
                  {
                      "value" : "11-50 people",
                      "price" : "50000"
                  },
                  {
                      "value" : "50+ people",
                      "price" : "50000"
                  },
                  {
                      "value" : "unlimited",
                      "price" : "500000"
                  }
              ],
              "hasFreeOption": {
        "free": {
          "functionalitiesAvailable": {
                          "publicAPI" : "",
                          "SSOSignOn" : "",
                          "slackIntegration": "",
                          "githubIntegration": "",
                          "googleDriveIntegration": "",
                          "OneDriveIntegration": ""
                      }
        },
        "lowestPricePoint": {
          "functionalitiesAvailable": {
                          "publicAPI" : "",
                          "SSOSignOn" : "",
                          "slackIntegration": "",
                          "githubIntegration": "",
                          "googleDriveIntegration": "",
                          "OneDriveIntegration": ""
                      }
        }
      },
      "noFreeOption": {
        "cheapestOption": {}
      }
          }
      },
      {
          "name": "toolB",
          "url": "tool2.com",
          "priceInformation": {
              "freeOptionAvailable": "no",
              "availablePricesPerPerson" : [
                  {
                      "value" : "1 person",
                      "price" : "50"
                  },
                  {
                      "value" : "2-4 people",
                      "price" : "500"
                  },
                  {
                      "value" : "5-10 people",
                      "price" : "5000"
                  },
                  {
                      "value" : "11-50 people",
                      "price" : "50000"
                  },
                  {
                      "value" : "50+ people",
                      "price" : "50000"
                  },
                  {
                      "value" : "unlimited",
                      "price" : "500000"
                  }
              ],
              "hasFreeOption": {},
      "noFreeOption": {
        "cheapestOption": {
                      "functionalitiesAvailable": {
                          "publicAPI" : "",
                          "SSOSignOn" : "",
                          "slackIntegration": "",
                          "githubIntegration": "",
                          "googleDriveIntegration": "",
                          "OneDriveIntegration": ""
                      }
                  }
               }
          }
      }
  ]
}
