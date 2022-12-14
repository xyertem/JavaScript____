let workflow = {
  "Workflow_Id": 1004,
  "Workflow_version": 1,
  "Abroad": 0,
  "CreatedName": "Hakan Kocatepe",
  "Currency": "USD",
  "GroupId": "4924",
  "MaxAmount": 0,
  "MinAmount": 0,
  "Name": "ADMIN-TEST",
  "Steps": [
      {
          "ContributorType": "1",
          "Contributor": "manager",
          "EMails": []
      },
      {
          "ContributorType": "1",
          "Contributor": "hr",
          "EMails": [
              {
                  "Additional": 1,
                  "ContributorType": "1",
                  "Contributor": "hr"
              }
          ]
      }
  ]
}

const steps = [
  {
      "ContributorType": "1",
      "Contributor": "manager",
      "EMails": []
  }
]
let index = ''
 workflow.Steps.forEach(step=> {
   index = steps.indexOf(step[0].ContributorType)
})
console.log(index)